// 히어로 지구본의 실제 3D 버전.
// styles/hero-globe.css의 평면(background-position 이동) 버전은 WebGL이 없거나
// 이 스크립트가 실패했을 때를 위한 폴백으로 그대로 남겨둔다. 이 파일이 정상
// 동작하면 .hero-globe 안에 <canvas>를 넣고 평면 버전(.hero-globe-surface)은
// 숨긴 뒤, 그 위의 ::before(주야간/구름)·::after(대기광) 오버레이는 장식으로
// 계속 사용한다.
//
// 핵심 요구사항: 지도가 "좌우로 슬라이드"하는 게 아니라, 구체 자체가 실제
// 자전축을 기준으로 회전(경도 = Y축 회전, 위도 = X축 회전)해서 목표 지점이
// 카메라 정면으로 온다. 회전각 공식은 기존 평면 버전의 텍스처 정렬 방식과
// 동일한 "본초자오선이 텍스처 가로 50% 지점"이라는 전제로부터 유도했다.
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.169.0/build/three.module.js';

// 언어별 대표 국가의 수도 좌표(위도, 경도). home.js의
// HERO_GLOBE_LANGUAGE_POSITIONS(평면 버전용 background-position 값)와 같은
// 나라를 가리키도록 맞췄다.
// landedZoom: 착지 시 카메라 거리. 나라(대표 도시가 속한)의 대략적인 경도 폭을
// 기준으로 "그 나라만 화면을 채우도록" 계산했다(공식은 CAMERA_Z_DEFAULT 아래 주석 참고).
// 한국처럼 폭이 아주 좁은 나라는 텍스처 해상도상 과도하게 확대하면 심하게
// 깨지므로 최소 거리 1.75로 clamp했다 — home.js의 평면 폴백에서 landingScale을
// 2.8배로 clamp한 것과 같은 이유.
const HERO_GLOBE_CAPITALS = {
  ko: { lat: 37.5665, lon: 126.9780, landedZoom: 1.75 },  // 서울 (한국 경도 폭 약 7°)
  en: { lat: 38.9072, lon: -77.0369, landedZoom: 3.15 },  // 워싱턴 D.C. (미국 본토 경도 폭 약 57°)
  ja: { lat: 35.6762, lon: 139.6503, landedZoom: 1.75 },  // 도쿄 (일본 경도 폭 약 17°)
  uz: { lat: 41.2995, lon: 69.2401, landedZoom: 1.75 },   // 타슈켄트 (우즈베키스탄 경도 폭 약 17°)
  fr: { lat: 48.8566, lon: 2.3522, landedZoom: 1.75 },    // 파리 (프랑스 경도 폭 약 13°)
  ar: { lat: 24.7136, lon: 46.6753, landedZoom: 1.80 }    // 리야드 (사우디아라비아 경도 폭 약 21°)
};

const EARTH_AXIAL_TILT_DEG = 23.4; // 실제 지구 자전축 기울기
const CAMERA_FOV_DEG = 32;
// 구체(반지름 1)가 원형 프레임을 가득 채우려면 카메라 거리가
// 1/sin(FOV/2) ≈ 3.63 이하여야 한다. 예전 기본값(4.8)은 이보다 훨씬 멀어서
// 처음 로드됐을 때 지구본 주위에 빈 여백 링이 보였다. 기본 상태에서도 이미
// 꽉 차 보이도록 그 거리보다 살짝 더 가깝게 잡았다.
const CAMERA_Z_DEFAULT = 3.55;
// 착지 후 거리는 나라마다 다르므로 HERO_GLOBE_CAPITALS[lang].landedZoom을 쓴다.
// 계산식: d = 1 + lonWidthDeg * (π/180) / (0.8 * 2 * tan(FOV/2))
//   (나라 경도 폭이 프레임의 약 80%를 채우도록 하는 카메라 거리, 최소 1.75로 clamp)
const TRAVEL_MS = 1600;      // 이동(자전축 회전) 소요 시간
const ZOOM_MS = 900;         // 확대 소요 시간
const IDLE_SPIN_PER_MS = 0.00007; // 아무 언어도 선택되지 않은 초기 상태의 유휴 자전 속도(rad/ms). 완전히 한 바퀴 도는 데 약 90초
const HERO_GLOBE_MARKER_COLOR = 0x39ff14; // 형광 녹색(neon green)
const MARKER_LANDED_SCALE = 1.4; // 착지(확대) 시 마커가 커지는 배율(카메라가 가까워지며 생기는 원근감 확대와 별개로, 확대에 비례해 눈에 띄게 커지도록)

let renderer, scene, camera, axialTiltGroup, framingGroup, spinGroup;
let capitalMarker, capitalMarkerRing;
let globeShaderUniforms = null; // 지구본 커스텀 셰이더의 uniforms(day/night 텍스처 블렌딩용). init()의 onBeforeCompile에서 채워진다
let container = null;
let ready = false;
let pendingLang = null;
let currentLang = null;
let idleSpin = true;
let travelToken = 0; // 새 이동이 시작되면 이전 애니메이션 루프를 무효화하기 위한 토큰
let lastFrameTime = 0;
let lastSunUpdateTime = -Infinity; // -Infinity로 시작해 최초 1회는 항상 즉시 계산되도록 한다

// 실시간 태양 직하점(subsolar point, 태양이 머리 위 남중하는 지점) 계산.
// 적위(태양 고도)와 균시차(equation of time)를 이용한 표준 근사 공식으로,
// 장식용 조명 방향을 정하는 데 충분한 정확도(대략 ±0.5° 이내)를 가진다.
function getSubsolarPoint(date) {
  const rad = Math.PI / 180;
  const jd = date.getTime() / 86400000 + 2440587.5; // Julian date
  const n = jd - 2451545.0; // J2000.0 이후 경과일

  const meanLon = (280.460 + 0.9856474 * n) % 360;      // 태양의 평균 황경
  const meanAnomaly = (357.528 + 0.9856003 * n) % 360;   // 평균 근점이각
  const eclipticLon = meanLon
    + 1.915 * Math.sin(meanAnomaly * rad)
    + 0.020 * Math.sin(2 * meanAnomaly * rad);           // 실제(진) 황경
  const obliquity = 23.439 - 0.0000004 * n;               // 황도경사각

  const lat = Math.asin(Math.sin(obliquity * rad) * Math.sin(eclipticLon * rad)) / rad; // 태양 적위 = 직하점 위도

  let rightAscension = Math.atan2(
    Math.cos(obliquity * rad) * Math.sin(eclipticLon * rad),
    Math.cos(eclipticLon * rad)
  ) / rad;
  rightAscension = ((rightAscension % 360) + 360) % 360;

  let eqTimeDeg = meanLon - rightAscension; // 균시차(도 단위)
  if (eqTimeDeg > 180) eqTimeDeg -= 360;
  if (eqTimeDeg < -180) eqTimeDeg += 360;

  const utcHours = date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600;
  let lon = 15 * (12 - utcHours) - eqTimeDeg; // 태양이 남중(정오)하는 경도
  lon = ((lon + 180) % 360 + 360) % 360 - 180; // [-180, 180]로 정규화

  return { lat, lon };
}

let cachedSubsolarPoint = null; // { lat, lon } — 실제 태양 위치는 천천히 바뀌므로 2초에 한 번만 재계산한다

// 지구본 셰이더의 sunDirection uniform을 실시간 태양 직하점 방향으로 갱신한다.
// spinGroup은 언어 선택/유휴 자전으로 계속 회전하지만, 태양은 world 좌표계에서
// 고정된 실제 방향을 가리켜야 하므로, 태양 직하점의 위경도를 spinGroup의
// "로컬" 좌표로 구한 뒤 spinGroup의 현재 world 변환으로 옮겨(world 방향으로
// 변환) 셰이더에 넘긴다. 이렇게 하면 지구본이 어떻게 회전해 있든 항상 실제
// 낮인 반구는 주간 텍스처가, 밤인 반구는 야간(불빛) 텍스처가 표시된다(애플
// 지구 배경화면과 동일한 방식). 태양의 실제 좌표(cachedSubsolarPoint) 계산은
// 2초에 한 번이면 충분하지만, spinGroup은 매 프레임 회전하므로 그 회전에
// 맞춰 방향 자체는 매 프레임 다시 투영해야 한다(그렇지 않으면 2초마다
// 명암 경계가 툭툭 튀어 보인다).
function updateSunLight(now) {
  if (!globeShaderUniforms || !spinGroup) return;
  if (!cachedSubsolarPoint || now - lastSunUpdateTime >= 2000) {
    lastSunUpdateTime = now;
    cachedSubsolarPoint = getSubsolarPoint(new Date());
  }

  const localDir = latLonToLocalPosition(cachedSubsolarPoint.lat, cachedSubsolarPoint.lon, 1);
  spinGroup.updateMatrixWorld();
  const worldDir = spinGroup.localToWorld(localDir).normalize(); // 원점이 이동하지 않으므로 방향과 동일
  globeShaderUniforms.sunDirection.value.copy(worldDir);
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// 경도(도) → 그 지점을 카메라 정면(+Z)으로 데려오는 데 필요한 Y축 회전각(도).
// 유도: SphereGeometry의 기본 텍스처 매핑에서 회전 없이 카메라를 향하는
// 경도는 -90°이므로, 목표 경도가 그 자리에 오도록 R = -90 - lon 만큼 돌린다.
function lonToYawDeg(lon) {
  return -90 - lon;
}

function shortestDelta(fromDeg, toDeg) {
  let diff = (toDeg - fromDeg) % 360;
  if (diff > 180) diff -= 360;
  if (diff < -180) diff += 360;
  return diff;
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// 위도/경도(도) → spinGroup의 "회전 전(로컬)" 좌표계에서의 구체 표면 좌표.
// SphereGeometry 기본 UV 매핑(등장방형)과 lonToYawDeg의 기준("회전 없이
// 카메라를 향하는 경도는 -90°")을 그대로 따르므로, 이 점을 spinGroup의
// 자식으로 두기만 하면 spinGroup/framingGroup/axialTiltGroup의 회전에 맞춰
// 항상 지도 위의 같은 지점(수도)에 붙어서 함께 움직인다.
function latLonToLocalPosition(lat, lon, radius) {
  const phi = THREE.MathUtils.degToRad(lon + 180);
  const theta = THREE.MathUtils.degToRad(90 - lat);
  return new THREE.Vector3(
    -radius * Math.cos(phi) * Math.sin(theta),
    radius * Math.cos(theta),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function init() {
  container = document.querySelector('.hero-globe');
  if (!container) return;

  let gl;
  try {
    const testCanvas = document.createElement('canvas');
    gl = testCanvas.getContext('webgl2') || testCanvas.getContext('webgl');
  } catch (error) {
    gl = null;
  }
  if (!gl) return; // WebGL 미지원: 기존 평면 폴백을 그대로 둔다

  const size = container.clientWidth || 640;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(CAMERA_FOV_DEG, 1, 0.1, 100);
  camera.position.set(0, 0, CAMERA_Z_DEFAULT);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(size, size);
  renderer.domElement.className = 'hero-globe-canvas';
  container.appendChild(renderer.domElement);
  container.classList.add('hero-globe-3d-active');

  // 계층: axialTiltGroup(고정 자전축 기울기) > framingGroup(위도 보정, 애니메이션)
  //       > spinGroup(경도 회전, 애니메이션) > 지구본 메시
  axialTiltGroup = new THREE.Group();
  axialTiltGroup.rotation.x = THREE.MathUtils.degToRad(EARTH_AXIAL_TILT_DEG);
  scene.add(axialTiltGroup);

  framingGroup = new THREE.Group();
  axialTiltGroup.add(framingGroup);

  spinGroup = new THREE.Group();
  framingGroup.add(spinGroup);

  const geometry = new THREE.SphereGeometry(1, 64, 64);
  const loader = new THREE.TextureLoader();
  const dayTexture = loader.load(
    'assets/earth-texture.jpg',
    undefined,
    undefined,
    (error) => console.warn('[hero-globe-3d] 지구(주간) 텍스처 로드 실패, 평면 폴백을 유지합니다', error)
  );
  const nightTexture = loader.load(
    'assets/earth-lights.jpg',
    undefined,
    undefined,
    (error) => console.warn('[hero-globe-3d] 지구(야간) 텍스처 로드 실패, 야경 표현 없이 진행합니다', error)
  );
  if ('colorSpace' in dayTexture) dayTexture.colorSpace = THREE.SRGBColorSpace;
  if ('colorSpace' in nightTexture) nightTexture.colorSpace = THREE.SRGBColorSpace;

  // 낮/밤 텍스처를 실시간 태양 방향(worldNormal·sunDirection)에 따라 섞는 커스텀
  // 셰이더. MeshBasicMaterial(무광원)을 베이스로 onBeforeCompile로 map_fragment
  // 단계만 가로채, 기존 색공간/톤매핑 파이프라인은 그대로 유지한다(애플 지구
  // 배경화면처럼 야간 반구에는 도시 불빛 텍스처가, 주간 반구에는 실제 위성사진이
  // 표시되고 그 사이가 부드럽게 전환된다).
  const material = new THREE.MeshBasicMaterial({ map: dayTexture });
  material.onBeforeCompile = (shader) => {
    shader.uniforms.nightMap = { value: nightTexture };
    shader.uniforms.sunDirection = { value: new THREE.Vector3(0, 0, 1) };
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWorldNormal;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvWorldNormal = normalize(mat3(modelMatrix) * normal);');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform sampler2D nightMap;\nuniform vec3 sunDirection;\nvarying vec3 vWorldNormal;')
      .replace('#include <map_fragment>', `
        #ifdef USE_MAP
          vec4 dayColor = texture2D( map, vMapUv );
          vec4 nightColor = texture2D( nightMap, vMapUv );
          float ndotl = dot( normalize( vWorldNormal ), normalize( sunDirection ) );
          float dayMix = smoothstep( -0.15, 0.15, ndotl );
          vec3 nightSide = dayColor.rgb * 0.05 + nightColor.rgb * 1.6;
          diffuseColor.rgb *= mix( nightSide, dayColor.rgb, dayMix );
        #endif
      `);
    globeShaderUniforms = shader.uniforms;
  };
  const globeMesh = new THREE.Mesh(geometry, material);
  spinGroup.add(globeMesh);

  // 선택된 언어의 수도 위치를 표시하는 핀포인트 마커(코어 점 + 펄스 링).
  // 구체 표면보다 살짝(1.5%) 띄워서 z-fighting을 막고, spinGroup의 자식이므로
  // 지구본이 회전하면 자동으로 같이 움직이며, 지구 반대편으로 가면 구체
  // 자체에 가려 자연스럽게 사라진다(별도 가시성 처리 불필요).
  const markerDot = new THREE.Mesh(
    new THREE.SphereGeometry(0.022, 16, 16),
    new THREE.MeshBasicMaterial({ color: HERO_GLOBE_MARKER_COLOR })
  );
  capitalMarkerRing = new THREE.Mesh(
    new THREE.RingGeometry(0.03, 0.042, 32),
    new THREE.MeshBasicMaterial({ color: HERO_GLOBE_MARKER_COLOR, transparent: true, opacity: 0.55, side: THREE.DoubleSide })
  );
  capitalMarker = new THREE.Group();
  capitalMarker.add(markerDot, capitalMarkerRing);
  spinGroup.add(capitalMarker);

  // 초기 자세: 한국(서울)이 정면을 보도록 맞춰 평면 폴백의 기본값과 일치시킨다
  const initial = HERO_GLOBE_CAPITALS.ko;
  spinGroup.rotation.y = THREE.MathUtils.degToRad(lonToYawDeg(initial.lon));
  framingGroup.rotation.x = THREE.MathUtils.degToRad(initial.lat - EARTH_AXIAL_TILT_DEG);
  placeCapitalMarker(initial.lat, initial.lon);
  currentLang = 'ko';

  window.addEventListener('resize', onResize);
  onResize();

  ready = true;
  lastFrameTime = performance.now();
  requestAnimationFrame(animate);

  if (pendingLang && pendingLang !== 'ko') {
    const lang = pendingLang;
    pendingLang = null;
    moveToLanguage(lang);
  }
}

function placeCapitalMarker(lat, lon) {
  if (!capitalMarker) return;
  const position = latLonToLocalPosition(lat, lon, 1.015);
  capitalMarker.position.copy(position);
  // 링(기본 법선 +Z)이 구체 바깥쪽을 향하도록: -Z가 구체 중심을 보게 하면
  // 반대쪽인 +Z(링의 앞면)는 자동으로 바깥(카메라 쪽)을 향하게 된다
  capitalMarker.lookAt(0, 0, 0);
}

function setCapitalMarkerScale(scale) {
  if (capitalMarker) capitalMarker.scale.setScalar(scale);
}

function onResize() {
  if (!container || !renderer) return;
  const size = container.clientWidth || 640;
  renderer.setSize(size, size);
  camera.aspect = 1;
  camera.updateProjectionMatrix();
}

function animate(now) {
  requestAnimationFrame(animate);
  const delta = now - lastFrameTime;
  lastFrameTime = now;
  if (idleSpin && !prefersReducedMotion() && spinGroup) {
    spinGroup.rotation.y += delta * IDLE_SPIN_PER_MS;
  }
  updateSunLight(now);
  if (capitalMarkerRing && !prefersReducedMotion()) {
    const pulse = 1 + 0.35 * (0.5 + 0.5 * Math.sin(now * 0.0035));
    capitalMarkerRing.scale.setScalar(pulse);
    capitalMarkerRing.material.opacity = 0.55 * (1.35 - pulse);
  }
  renderer.render(scene, camera);
}

function moveToLanguage(lang) {
  if (!ready) {
    pendingLang = lang;
    return;
  }
  const target = HERO_GLOBE_CAPITALS[lang] || HERO_GLOBE_CAPITALS.ko;
  if (currentLang === lang) return;
  currentLang = lang;
  idleSpin = false;
  // 마커는 spinGroup 로컬 좌표(지도 위 고정점)이므로 즉시 새 수도로 옮겨두면
  // 이후 spinGroup/framingGroup 회전 애니메이션에 실려 자연스럽게 화면 위를
  // 이동한다(마커 자체를 따로 트윈할 필요가 없다)
  placeCapitalMarker(target.lat, target.lon);

  const myToken = ++travelToken;

  const yawFrom = THREE.MathUtils.radToDeg(spinGroup.rotation.y);
  const yawDelta = shortestDelta(yawFrom, lonToYawDeg(target.lon));
  const pitchFrom = THREE.MathUtils.radToDeg(framingGroup.rotation.x);
  const pitchTo = target.lat - EARTH_AXIAL_TILT_DEG;
  const zoomOutFrom = camera.position.z;
  const zoomInTo = target.landedZoom;
  const markerScaleFrom = capitalMarker ? capitalMarker.scale.x : 1;

  if (prefersReducedMotion()) {
    spinGroup.rotation.y = THREE.MathUtils.degToRad(yawFrom + yawDelta);
    framingGroup.rotation.x = THREE.MathUtils.degToRad(pitchTo);
    camera.position.z = zoomInTo;
    setCapitalMarkerScale(MARKER_LANDED_SCALE);
    return;
  }

  // 이전에 다른 나라로 확대되어 있던 상태라면: 먼저 기본 거리로 줌아웃한 뒤에
  // 회전 이동하고, 도착하면 새 나라로 다시 줌인한다. 이미 기본 거리라면(예:
  // 최초 유휴 상태) 줌아웃 단계 없이 곧바로 이동한다.
  function zoomOutStep(start) {
    function step(now) {
      if (myToken !== travelToken) return;
      const t = Math.min(1, (now - start) / ZOOM_MS);
      const eased = easeInOutCubic(t);
      camera.position.z = zoomOutFrom + (CAMERA_Z_DEFAULT - zoomOutFrom) * eased;
      setCapitalMarkerScale(markerScaleFrom + (1 - markerScaleFrom) * eased); // 마커도 줌아웃에 맞춰 원래 크기로
      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        requestAnimationFrame(travelStep);
      }
    }
    requestAnimationFrame(step);
  }

  let travelStart = null;

  function travelStep(now) {
    if (myToken !== travelToken) return; // 도중에 새 언어로 바뀌면 이 루프는 중단
    if (travelStart === null) travelStart = now;
    const t = Math.min(1, (now - travelStart) / TRAVEL_MS);
    const eased = easeInOutCubic(t);
    spinGroup.rotation.y = THREE.MathUtils.degToRad(yawFrom + yawDelta * eased);
    framingGroup.rotation.x = THREE.MathUtils.degToRad(pitchFrom + (pitchTo - pitchFrom) * eased);
    if (t < 1) {
      requestAnimationFrame(travelStep);
    } else {
      zoomInStep(performance.now());
    }
  }

  function zoomInStep(start) {
    function step(now) {
      if (myToken !== travelToken) return;
      const t = Math.min(1, (now - start) / ZOOM_MS);
      const eased = easeInOutCubic(t);
      camera.position.z = CAMERA_Z_DEFAULT + (zoomInTo - CAMERA_Z_DEFAULT) * eased;
      setCapitalMarkerScale(1 + (MARKER_LANDED_SCALE - 1) * eased); // 확대에 비례해 마커도 커짐
      if (t < 1) {
        requestAnimationFrame(step);
      }
      // t===1: 확대된 상태로 고정(lock). 더 이상 아무것도 움직이지 않는다.
    }
    requestAnimationFrame(step);
  }

  if (Math.abs(zoomOutFrom - CAMERA_Z_DEFAULT) < 0.01) {
    setCapitalMarkerScale(1); // 이미 기본 거리(=기본 크기)라면 마커도 기본 크기인 상태
    requestAnimationFrame(travelStep);
  } else {
    zoomOutStep(performance.now());
  }
}

window.HeroGlobe3D = { moveToLanguage };

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
