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

let renderer, scene, camera, axialTiltGroup, framingGroup, spinGroup;
let capitalMarker, capitalMarkerRing;
let container = null;
let ready = false;
let pendingLang = null;
let currentLang = null;
let idleSpin = true;
let travelToken = 0; // 새 이동이 시작되면 이전 애니메이션 루프를 무효화하기 위한 토큰
let lastFrameTime = 0;

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

  scene.add(new THREE.AmbientLight(0xffffff, 0.55));
  const keyLight = new THREE.DirectionalLight(0xffffff, 1.15);
  keyLight.position.set(4, 2.2, 3.5);
  scene.add(keyLight);
  const fillLight = new THREE.DirectionalLight(0x9fd3e8, 0.25);
  fillLight.position.set(-3, -1.5, -2);
  scene.add(fillLight);

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
  const texture = new THREE.TextureLoader().load(
    'assets/earth-texture.jpg',
    undefined,
    undefined,
    (error) => console.warn('[hero-globe-3d] 지구 텍스처 로드 실패, 평면 폴백을 유지합니다', error)
  );
  if ('colorSpace' in texture) texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.MeshPhongMaterial({ map: texture, shininess: 5 });
  const globeMesh = new THREE.Mesh(geometry, material);
  spinGroup.add(globeMesh);

  // 선택된 언어의 수도 위치를 표시하는 핀포인트 마커(코어 점 + 펄스 링).
  // 구체 표면보다 살짝(1.5%) 띄워서 z-fighting을 막고, spinGroup의 자식이므로
  // 지구본이 회전하면 자동으로 같이 움직이며, 지구 반대편으로 가면 구체
  // 자체에 가려 자연스럽게 사라진다(별도 가시성 처리 불필요).
  const markerDot = new THREE.Mesh(
    new THREE.SphereGeometry(0.022, 16, 16),
    new THREE.MeshBasicMaterial({ color: 0xff5252 })
  );
  capitalMarkerRing = new THREE.Mesh(
    new THREE.RingGeometry(0.03, 0.042, 32),
    new THREE.MeshBasicMaterial({ color: 0xff5252, transparent: true, opacity: 0.55, side: THREE.DoubleSide })
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

  if (prefersReducedMotion()) {
    spinGroup.rotation.y = THREE.MathUtils.degToRad(yawFrom + yawDelta);
    framingGroup.rotation.x = THREE.MathUtils.degToRad(pitchTo);
    camera.position.z = zoomInTo;
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
      if (t < 1) {
        requestAnimationFrame(step);
      }
      // t===1: 확대된 상태로 고정(lock). 더 이상 아무것도 움직이지 않는다.
    }
    requestAnimationFrame(step);
  }

  if (Math.abs(zoomOutFrom - CAMERA_Z_DEFAULT) < 0.01) {
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
