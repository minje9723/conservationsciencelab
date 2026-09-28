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

// 착지 장소(국가 코드)별 수도 좌표(위도, 경도). 한 언어에 여러 나라가 있을 수 있어
// (영어: 미국·영국, 아랍어: 사우디아라비아·이집트) 언어가 아니라 장소 단위로 둔다.
// index.html 국기 버튼의 data-place, home.js의 HERO_GLOBE_PLACE_POSITIONS(평면 버전)와
// 같은 키를 쓴다.
// landedZoom: 착지 시 카메라 거리. 나라(대표 도시가 속한)의 대략적인 경도 폭을
// 기준으로 "그 나라만 화면을 채우도록" 계산했다(공식은 CAMERA_Z_DEFAULT 아래 주석 참고).
// 한국처럼 폭이 아주 좁은 나라는 텍스처 해상도상 과도하게 확대하면 심하게
// 깨지므로 최소 거리 1.75로 clamp했다 — home.js의 평면 폴백에서 landingScale을
// 2.8배로 clamp한 것과 같은 이유.
const HERO_GLOBE_PLACES = {
  kr: { lat: 37.5665, lon: 126.9780, landedZoom: 1.75 },  // 서울 (한국 경도 폭 약 7°)
  us: { lat: 38.9072, lon: -77.0369, landedZoom: 3.15 },  // 워싱턴 D.C. (미국 본토 경도 폭 약 57°)
  gb: { lat: 51.5074, lon: -0.1278, landedZoom: 1.75 },   // 런던 (영국 경도 폭 약 10°)
  jp: { lat: 35.6762, lon: 139.6503, landedZoom: 1.75 },  // 도쿄 (일본 경도 폭 약 17°)
  uz: { lat: 41.2995, lon: 69.2401, landedZoom: 1.75 },   // 타슈켄트 (우즈베키스탄 경도 폭 약 17°)
  fr: { lat: 48.8566, lon: 2.3522, landedZoom: 1.75 },    // 파리 (프랑스 경도 폭 약 13°)
  sa: { lat: 24.7136, lon: 46.6753, landedZoom: 1.80 },   // 리야드 (사우디아라비아 경도 폭 약 21°)
  eg: { lat: 30.0444, lon: 31.2357, landedZoom: 1.75 }    // 카이로 (이집트 경도 폭 약 12°)
};

// 국기 없이 언어만 정해졌을 때(상단 언어 드롭다운 등) 착지할 기본 장소
const DEFAULT_PLACE_BY_LANG = { ko: 'kr', en: 'us', ja: 'jp', uz: 'uz', fr: 'fr', ar: 'sa' };

const EARTH_AXIAL_TILT_DEG = 23.4; // 실제 지구 자전축 기울기
const CAMERA_FOV_DEG = 32;
// 구체(반지름 1)가 원형 프레임을 가득 채우려면 카메라 거리가
// 1/sin(FOV/2) ≈ 3.63 이하여야 한다. 예전 기본값(4.8)은 이보다 훨씬 멀어서
// 처음 로드됐을 때 지구본 주위에 빈 여백 링이 보였다. 기본 상태에서도 이미
// 꽉 차 보이도록 그 거리보다 살짝 더 가깝게 잡았다.
const CAMERA_Z_DEFAULT = 3.55;
// 착지 후 거리는 나라마다 다르므로 HERO_GLOBE_PLACES[place].landedZoom을 쓴다.
// 계산식: d = 1 + lonWidthDeg * (π/180) / (0.8 * 2 * tan(FOV/2))
//   (나라 경도 폭이 프레임의 약 80%를 채우도록 하는 카메라 거리, 최소 1.75로 clamp)
const TRAVEL_MS = 1600;      // 이동(자전축 회전) 소요 시간
const ZOOM_MS = 900;         // 확대 소요 시간
const IDLE_SPIN_PER_MS = 0.00007; // 아무 언어도 선택되지 않은 초기 상태의 유휴 자전 속도(rad/ms). 완전히 한 바퀴 도는 데 약 90초
const RESUME_SPIN_AFTER_LANDING_MS = 5000; // 착지한 나라에 이만큼 머문 뒤 다시 천천히 자전한다(모든 언어 공통)
const RESUME_ZOOM_MS = 2200;  // 자전을 다시 시작할 때 기본 거리로 천천히 줌아웃하는 시간
const SPIN_RAMP_MS = 2500;    // 자전을 다시 시작할 때 속도를 0에서 유휴 속도까지 서서히 올리는 시간
const HERO_GLOBE_MARKER_COLOR = 0x39ff14; // 형광 녹색(neon green)
const HERO_GLOBE_MARKER_OPACITY = 0.7; // 핀포인트(코어 점) 투명도
const MARKER_LANDED_SCALE = 0.6; // 착지(확대) 시 마커가 작아지는 배율 — 카메라가 가까워져 원근감으로도 커 보이므로, 마커 자체는 반비례로 줄여 균형을 맞춘다

let renderer, scene, camera, axialTiltGroup, framingGroup, spinGroup;
let capitalMarker, capitalMarkerRing;
let koreaVideoEl = null; // 한국 착지 시 재생하는 구글어스스튜디오 영상(.hero-globe-video)
let globeShaderUniforms = null; // 지구본 커스텀 셰이더의 uniforms(day/night 텍스처 블렌딩용). init()의 onBeforeCompile에서 채워진다
let container = null;
let ready = false;
let pendingMove = null; // init() 전에 들어온 이동 요청 { lang, place }
let currentPlace = null; // 착지했(거나 이동 중인) 장소 키 — 같은 언어라도 나라가 다르면 이동한다
let idleSpin = true;
let travelToken = 0; // 새 이동이 시작되면 이전 애니메이션 루프를 무효화하기 위한 토큰
let resumeSpinTimer = null;
let spinResumed = false; // 착지 후 다시 자전 중인지 — 이때 같은 언어를 다시 고르면 그 나라로 되돌아가야 한다
let spinRampStart = null; // 자전 재개 시 속도를 서서히 올리기 시작한 시각(null이면 바로 유휴 속도)
let lastFrameTime = 0;
let lastSunUpdateTime = -Infinity; // -Infinity로 시작해 최초 1회는 항상 즉시 계산되도록 한다

// 언어 선택 화면의 수도별 언어 국기(index.html .hero-globe-flag). 3D 구체 위의 수도 좌표를
// 매 프레임 화면 좌표로 투영해 HTML 버튼을 그 자리로 옮긴다(클릭·포커스·스크린리더를
// 그대로 쓰기 위해 WebGL 스프라이트 대신 DOM 요소를 사용). 첫 언어 이동이 시작되면
// 더 이상 필요 없으므로 flagsActive를 끄고 갱신을 멈춘다.
const flagEntries = []; // { el, local: 구체 로컬 좌표(Vector3) }
let flagsLayer = null;
let flagsActive = true;
let flagHover = false; // 마우스가 국기 위에 있으면 유휴 자전을 잠시 멈춰 누르기 쉽게 한다
const flagWorld = new THREE.Vector3();
const flagToCamera = new THREE.Vector3();

// 국기 레이어를 드래그해서 지구본을 직접 돌려볼 수 있다(언어 선택 화면에서만).
const DRAG_ROTATE_RAD_PER_PX = 0.0055;
const DRAG_START_THRESHOLD_PX = 6; // 이보다 적게 움직이면 드래그가 아니라 국기 클릭으로 본다
const PITCH_MIN_RAD = THREE.MathUtils.degToRad(-35);
const PITCH_MAX_RAD = THREE.MathUtils.degToRad(55);
const IDLE_RESUME_AFTER_DRAG_MS = 2000;
let dragState = null;
let dragJustEnded = false;
let idleResumeTimer = null;

// 언어 선택 화면에서 마우스 휠·트랙패드·두 손가락 핀치로 확대/축소한다. 기본 거리보다
// 멀어지면 원형 프레임 안에 빈 테두리가 생기므로 최대값은 기본 거리, 최소값은 텍스처가
// 심하게 깨지지 않는 착지 거리(1.75)로 둔다.
const ZOOM_MIN_Z = 1.75;
const ZOOM_MAX_Z = CAMERA_Z_DEFAULT;
const WHEEL_ZOOM_PER_PX = 0.0015; // 휠 1px당 거리 배율(지수) — 마우스 휠 한 칸(약 100px)에 약 14%
const PINCH_WHEEL_BOOST = 4;      // 트랙패드 핀치(ctrl+wheel)는 한 번에 오는 값이 작아서 키운다
const ZOOM_SMOOTHING_MS = 110;    // 목표 거리로 따라가는 시간 상수(작을수록 즉각적)
let zoomTargetZ = CAMERA_Z_DEFAULT;
const activePointers = new Map(); // 누르고 있는 포인터들(pointerId → {x, y}) — 두 손가락이면 핀치
let pinchState = null; // { startDist, startZ }

// 드래그를 놓는 순간의 속도로 계속 돌다가 마찰로 서서히 멈춘다(관성 회전).
const FLING_SAMPLE_MS = 100;         // 놓기 직전 이 시간 동안의 움직임으로 속도를 잰다
const FLING_HOLD_MS = 80;            // 마지막 움직임 후 이만큼 멈춰 있다가 놓으면 관성 없이 멈춘다
const FLING_MAX_RAD_PER_MS = 0.012;  // 아주 세게 튕겨도 이보다 빨리 돌지는 않는다(약 0.5초에 한 바퀴)
const FLING_FRICTION_MS = 700;       // 속도가 약 1/3로 줄어드는 시간 — 클수록 오래 돈다
const FLING_STOP_RAD_PER_MS = IDLE_SPIN_PER_MS; // 유휴 자전 속도까지 느려지면 멈추고 유휴 자전으로 넘긴다
const flingVelocity = { yaw: 0, pitch: 0 }; // rad/ms

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

// 한국(ko) 착지가 끝난 뒤 구글어스스튜디오 영상을 지구본 위에 페이드인하며 재생한다.
function showKoreaVideo() {
  if (!koreaVideoEl) return;
  if (!koreaVideoEl.classList.contains('is-visible')) {
    koreaVideoEl.currentTime = 0;
  }
  koreaVideoEl.play().catch(() => {}); // 자동재생이 막혀도 지구본 표시 자체는 계속 정상 동작해야 하므로 무시
  koreaVideoEl.classList.add('is-visible');
}

// 다른 언어로 이동을 시작하면 영상을 즉시 페이드아웃하고 멈춰, 이동 애니메이션이
// 영상 위가 아니라 다시 지구본(캔버스) 위에서 보이도록 한다.
function hideKoreaVideo() {
  if (!koreaVideoEl) return;
  koreaVideoEl.classList.remove('is-visible');
  koreaVideoEl.pause();
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
  koreaVideoEl = container.querySelector('.hero-globe-video');

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
    new THREE.MeshBasicMaterial({ color: HERO_GLOBE_MARKER_COLOR, transparent: true, opacity: HERO_GLOBE_MARKER_OPACITY })
  );
  capitalMarkerRing = new THREE.Mesh(
    new THREE.RingGeometry(0.03, 0.042, 32),
    new THREE.MeshBasicMaterial({ color: HERO_GLOBE_MARKER_COLOR, transparent: true, opacity: 0.55, side: THREE.DoubleSide })
  );
  capitalMarker = new THREE.Group();
  capitalMarker.add(markerDot, capitalMarkerRing);
  spinGroup.add(capitalMarker);

  // 초기 자세: 한국(서울)이 정면을 보도록 맞춰 평면 폴백의 기본값과 일치시킨다.
  // currentPlace는 null로 둔다 — 아직 어느 나라에도 "착지"하지 않았으므로, 첫
  // moveToLanguage('ko')도 실제 이동·줌인 애니메이션을 거쳐 착지하게 된다.
  const initial = HERO_GLOBE_PLACES.kr;
  spinGroup.rotation.y = THREE.MathUtils.degToRad(lonToYawDeg(initial.lon));
  framingGroup.rotation.x = THREE.MathUtils.degToRad(initial.lat - EARTH_AXIAL_TILT_DEG);
  placeCapitalMarker(initial.lat, initial.lon);
  capitalMarker.visible = false; // 착지 전(국기 선택 화면)에는 선택된 수도가 없으므로 숨긴다

  setupFlags();

  window.addEventListener('resize', onResize);
  onResize();

  ready = true;
  lastFrameTime = performance.now();
  requestAnimationFrame(animate);

  if (pendingMove) {
    const { lang, place } = pendingMove;
    pendingMove = null;
    moveToLanguage(lang, place);
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

function setupFlags() {
  flagsLayer = document.querySelector('.hero-globe-flags');
  if (!flagsLayer) return;
  flagsLayer.querySelectorAll('.hero-globe-flag').forEach((el) => {
    const capital = HERO_GLOBE_PLACES[el.dataset.place];
    if (!capital) return;
    flagEntries.push({ el, local: latLonToLocalPosition(capital.lat, capital.lon, 1) });
    el.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') flagHover = true; });
    el.addEventListener('pointerleave', () => { flagHover = false; });
  });
  // CSS 기본값(원 둘레에 고르게 놓인 정적 배치, 평면 폴백용) 대신 JS가 매 프레임 위치를 정한다
  flagsLayer.classList.add('is-projected');
  setupDrag(flagsLayer);
}

// 각 수도의 구체 표면 좌표를 현재 회전 상태의 world 좌표 → 카메라 화면 좌표(%)로
// 투영해 국기를 그 자리에 둔다. 캔버스와 국기 레이어는 같은 정사각형 영역을 덮으므로
// NDC(-1~1)를 그대로 퍼센트로 바꾸면 된다. 구체 중심이 원점이라 world 좌표 자체가
// 바깥 법선이므로, 카메라 방향과의 내적(facing)으로 앞면/뒷면을 판정해 지구 뒤편으로
// 넘어가는 국기는 가장자리에서 서서히 사라지게 한다.
function updateFlags() {
  if (!flagsActive || !flagEntries.length) return;
  camera.updateMatrixWorld();
  for (const { el, local } of flagEntries) {
    flagWorld.copy(local);
    spinGroup.localToWorld(flagWorld);
    flagToCamera.copy(camera.position).sub(flagWorld).normalize();
    const facing = flagWorld.dot(flagToCamera);

    flagWorld.project(camera);
    // 확대해서 수도가 원형 프레임 밖으로 밀려나면(화면 중심에서 반지름 1 이상) 국기도 숨긴다.
    // 기본 거리에서는 이 범위에 들어가기 전에 위의 앞/뒷면 판정으로 이미 사라진다.
    const radial = Math.hypot(flagWorld.x, flagWorld.y);
    const visibility = THREE.MathUtils.smoothstep(facing, 0.08, 0.4)
      * (1 - THREE.MathUtils.smoothstep(radial, 0.97, 1.05));
    el.style.left = `${(flagWorld.x + 1) * 50}%`;
    el.style.top = `${(1 - flagWorld.y) * 50}%`;
    el.style.opacity = visibility.toFixed(3);
    el.style.setProperty('--flag-scale', (0.72 + 0.28 * visibility).toFixed(3));
    el.style.zIndex = String(Math.round(visibility * 100)); // 앞쪽(정면에 가까운) 국기가 위로
    el.classList.toggle('is-behind', visibility < 0.25);
  }
}

// 확대할수록 같은 손 움직임에 덜 돌게 해서, 확대해도 손가락 아래 지도가 따라오는 느낌을 유지한다
function rotationScaleForZoom() {
  return THREE.MathUtils.clamp((camera.position.z - 1) / (CAMERA_Z_DEFAULT - 1), 0.25, 1);
}

function setZoomTarget(z) {
  zoomTargetZ = THREE.MathUtils.clamp(z, ZOOM_MIN_Z, ZOOM_MAX_Z);
}

// 언어 선택 화면에서만 카메라 거리를 목표값으로 부드럽게 따라가게 한다(언어가 정해진 뒤에는
// 이동·착지 애니메이션이 카메라를 직접 움직인다)
function stepZoom(delta) {
  const diff = zoomTargetZ - camera.position.z;
  if (Math.abs(diff) < 1e-4 || prefersReducedMotion()) {
    camera.position.z = zoomTargetZ;
    return;
  }
  camera.position.z += diff * (1 - Math.exp(-Math.min(delta, 100) / ZOOM_SMOOTHING_MS));
}

function stopFling() {
  flingVelocity.yaw = 0;
  flingVelocity.pitch = 0;
}

// 드래그를 놓기 직전 FLING_SAMPLE_MS 동안의 평균 속도로 관성 회전을 시작한다.
// 놓기 전에 잠깐 멈춰 있었거나 너무 느리면 관성 없이 그 자리에 멈춘다.
function startFling(samples, lastMoveTime) {
  const now = performance.now();
  if (prefersReducedMotion() || now - lastMoveTime > FLING_HOLD_MS) return false;
  let yaw = 0;
  let pitch = 0;
  let dt = 0;
  for (const sample of samples) {
    if (now - sample.t > FLING_SAMPLE_MS) continue;
    yaw += sample.yaw;
    pitch += sample.pitch;
    dt += sample.dt;
  }
  if (dt < 8) return false;
  const clampSpeed = (v) => THREE.MathUtils.clamp(v, -FLING_MAX_RAD_PER_MS, FLING_MAX_RAD_PER_MS);
  flingVelocity.yaw = clampSpeed(yaw / dt);
  flingVelocity.pitch = clampSpeed(pitch / dt);
  if (Math.hypot(flingVelocity.yaw, flingVelocity.pitch) <= FLING_STOP_RAD_PER_MS * 2) {
    stopFling();
    return false;
  }
  return true;
}

function stepFling(delta) {
  const dt = Math.min(delta, 50); // 탭이 가려졌다 돌아온 첫 프레임에 한 번에 크게 튀지 않도록
  spinGroup.rotation.y += flingVelocity.yaw * dt;
  const pitch = framingGroup.rotation.x + flingVelocity.pitch * dt;
  const clampedPitch = THREE.MathUtils.clamp(pitch, PITCH_MIN_RAD, PITCH_MAX_RAD);
  if (clampedPitch !== pitch) flingVelocity.pitch = 0; // 위아래 끝에 닿으면 그 방향 관성만 멈춘다
  framingGroup.rotation.x = clampedPitch;

  const decay = Math.exp(-dt / FLING_FRICTION_MS);
  flingVelocity.yaw *= decay;
  flingVelocity.pitch *= decay;
  if (Math.hypot(flingVelocity.yaw, flingVelocity.pitch) < FLING_STOP_RAD_PER_MS) {
    stopFling();
    scheduleIdleResume();
  }
}

// 손을 뗀 뒤 잠시 쉬었다가 유휴 자전을 0에서부터 서서히 다시 시작한다
function scheduleIdleResume() {
  window.clearTimeout(idleResumeTimer);
  idleResumeTimer = window.setTimeout(() => {
    if (!flagsActive || idleSpin || dragState || pinchState) return;
    idleSpin = true;
    spinRampStart = performance.now();
  }, IDLE_RESUME_AFTER_DRAG_MS);
}

// 드래그·핀치를 끝낸 손가락/마우스가 국기 위에서 떨어져도 그 국기가 눌린 것으로 처리되지
// 않도록, 바로 뒤따르는 click 한 번을 무시한다(click은 pointerup 직후 같은 흐름에서 발생)
function suppressNextClick() {
  dragJustEnded = true;
  window.setTimeout(() => { dragJustEnded = false; }, 0);
}

function pinchDistance() {
  const [a, b] = [...activePointers.values()];
  return Math.max(1, Math.hypot(a.x - b.x, a.y - b.y));
}

function setupDrag(surface) {
  // 국기 이미지의 기본 끌기(drag-and-drop)나 라벨 글자 선택, 길게 누르기 메뉴가 시작되면
  // 브라우저가 포인터 입력을 가져가(pointercancel) 드래그가 끊기고 연속 조작이 막히므로 모두 막는다.
  surface.addEventListener('dragstart', (e) => e.preventDefault());
  surface.addEventListener('selectstart', (e) => e.preventDefault());
  surface.addEventListener('contextmenu', (e) => e.preventDefault());

  // 휠을 위로 굴리면 확대, 아래로 굴리면 축소(지도 앱과 같은 방향). 트랙패드 핀치는
  // 브라우저가 ctrl+wheel로 보내므로 같은 처리로 받고, 페이지 전체 확대는 막는다.
  surface.addEventListener('wheel', (e) => {
    if (!flagsActive) return;
    e.preventDefault();
    const px = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaMode === 2 ? e.deltaY * 400 : e.deltaY;
    const perPx = e.ctrlKey ? WHEEL_ZOOM_PER_PX * PINCH_WHEEL_BOOST : WHEEL_ZOOM_PER_PX;
    setZoomTarget(zoomTargetZ * Math.exp(px * perPx));
  }, { passive: false });

  surface.addEventListener('pointerdown', (e) => {
    if (!flagsActive || (e.pointerType === 'mouse' && e.button !== 0)) return;
    if (e.pointerType === 'mouse') e.preventDefault(); // 마우스 누름으로 글자 선택이 시작되지 않게(click은 그대로 발생)
    stopFling(); // 관성으로 돌고 있는 지구본을 잡으면 그 자리에서 멈춘다
    activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (activePointers.size === 2) {
      // 두 번째 손가락이 닿으면 회전 대신 핀치 줌으로 전환한다
      if (dragState?.moved) suppressNextClick();
      dragState = null;
      surface.classList.remove('is-dragging');
      pinchState = { startDist: pinchDistance(), startZ: zoomTargetZ };
      return;
    }
    if (activePointers.size > 2 || pinchState) return;
    dragState = { id: e.pointerId, x: e.clientX, y: e.clientY, moved: false, lastT: performance.now(), samples: [] };
  });

  surface.addEventListener('pointermove', (e) => {
    if (activePointers.has(e.pointerId)) activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pinchState) {
      if (activePointers.size >= 2) setZoomTarget(pinchState.startZ * pinchState.startDist / pinchDistance());
      return;
    }

    if (!dragState || e.pointerId !== dragState.id) return;
    const dx = e.clientX - dragState.x;
    const dy = e.clientY - dragState.y;
    if (!dragState.moved) {
      if (Math.hypot(dx, dy) < DRAG_START_THRESHOLD_PX) return;
      dragState.moved = true;
      idleSpin = false;
      spinRampStart = null;
      window.clearTimeout(idleResumeTimer);
      window.getSelection()?.removeAllRanges();
      surface.setPointerCapture(e.pointerId);
      surface.classList.add('is-dragging');
    }
    dragState.x = e.clientX;
    dragState.y = e.clientY;

    const radPerPx = DRAG_ROTATE_RAD_PER_PX * rotationScaleForZoom();
    const yaw = dx * radPerPx;
    const pitch = dy * radPerPx;
    spinGroup.rotation.y += yaw;
    framingGroup.rotation.x = THREE.MathUtils.clamp(framingGroup.rotation.x + pitch, PITCH_MIN_RAD, PITCH_MAX_RAD);

    // 관성 속도 계산용으로 최근 움직임만 남겨 둔다
    const now = performance.now();
    dragState.samples.push({ t: now, dt: now - dragState.lastT, yaw, pitch });
    dragState.lastT = now;
    while (dragState.samples.length && now - dragState.samples[0].t > FLING_SAMPLE_MS) dragState.samples.shift();
  });

  const endPointer = (e) => {
    if (!activePointers.delete(e.pointerId)) return;

    if (pinchState) {
      // 한 손가락이라도 떼면 핀치를 끝낸다(남은 손가락은 떼었다 다시 대야 회전)
      if (activePointers.size < 2) {
        pinchState = null;
        suppressNextClick();
        scheduleIdleResume();
      }
      return;
    }

    if (!dragState || e.pointerId !== dragState.id) return;
    const { moved, samples, lastT } = dragState;
    dragState = null;
    surface.classList.remove('is-dragging');
    if (!moved) return;
    suppressNextClick();
    // 관성 회전이 시작되면 유휴 자전은 관성이 잦아든 뒤(stepFling)에 다시 시작한다
    if (e.type === 'pointerup' && startFling(samples, lastT)) return;
    scheduleIdleResume();
  };
  surface.addEventListener('pointerup', endPointer);
  surface.addEventListener('pointercancel', endPointer);

  surface.addEventListener('click', (e) => {
    if (!dragJustEnded) return;
    e.preventDefault();
    e.stopPropagation();
  }, true);
}

function announceLanded(lang) {
  window.dispatchEvent(new CustomEvent('heroglobe:landed', { detail: { lang } }));
}

// 착지 후 머무는 시간이 끝나면: (한국이면 영상을 내리고) 기본 거리로 천천히 줌아웃하면서
// 유휴 자전을 0에서부터 서서히 가속해 다시 시작한다. 마커는 지도에 붙어 있으므로 선택했던
// 수도와 함께 돌아간다. 그 사이 다른 언어로 이동이 시작됐다면(travelToken 변경) 아무것도 하지 않는다.
function resumeSpinAfterLanding(token) {
  if (token !== travelToken) return;
  spinResumed = true;
  hideKoreaVideo();

  const zoomFrom = camera.position.z;
  const markerScaleFrom = capitalMarker ? capitalMarker.scale.x : 1;
  const start = performance.now();
  function step(now) {
    if (token !== travelToken) return;
    const t = Math.min(1, Math.max(0, (now - start) / RESUME_ZOOM_MS));
    const eased = easeInOutCubic(t);
    camera.position.z = zoomFrom + (CAMERA_Z_DEFAULT - zoomFrom) * eased;
    setCapitalMarkerScale(markerScaleFrom + (1 - markerScaleFrom) * eased);
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);

  spinRampStart = start;
  idleSpin = true;
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
  if (idleSpin && !flagHover && !prefersReducedMotion() && spinGroup) {
    let speedFactor = 1;
    if (spinRampStart !== null) {
      const t = Math.min(1, Math.max(0, (now - spinRampStart) / SPIN_RAMP_MS));
      speedFactor = t * t; // 멈춰 있던 지구가 툭 튀지 않고 서서히 가속되도록 ease-in
      if (t === 1) spinRampStart = null;
    }
    // 확대한 상태에서는 같은 각속도라도 지도가 훨씬 빨리 지나가 보이므로 그만큼 늦춘다
    spinGroup.rotation.y += delta * IDLE_SPIN_PER_MS * speedFactor * rotationScaleForZoom();
  }
  if (flagsActive) {
    if (flingVelocity.yaw || flingVelocity.pitch) stepFling(delta);
    stepZoom(delta);
  }
  scene.updateMatrixWorld(); // 드래그·관성으로 바뀐 회전까지 반영한 뒤 태양 방향·국기 위치를 계산
  updateSunLight(now);
  updateFlags();
  if (capitalMarkerRing && !prefersReducedMotion()) {
    const pulse = 1 + 0.35 * (0.5 + 0.5 * Math.sin(now * 0.0035));
    capitalMarkerRing.scale.setScalar(pulse);
    capitalMarkerRing.material.opacity = 0.55 * (1.35 - pulse);
  }
  renderer.render(scene, camera);
}

// lang: 선택된 언어, place: 착지할 장소 키(국기로 골랐을 때). place가 없으면 그 언어의
// 기본 장소로 간다.
function moveToLanguage(lang, place) {
  if (!ready) {
    pendingMove = { lang, place };
    return;
  }
  const placeKey = HERO_GLOBE_PLACES[place] ? place : (DEFAULT_PLACE_BY_LANG[lang] || 'kr');
  const target = HERO_GLOBE_PLACES[placeKey];
  const isKorea = placeKey === 'kr';
  if (currentPlace === placeKey && !spinResumed) {
    // 그 나라로 이동 중이거나 착지해 머무는 중에 같은 장소를 다시 고른 경우: 이동할 필요는
    // 없고, 한국이면 영상만 (혹시 멈춰 있었다면) 다시 보여준다. (착지 후 다시 자전하기
    // 시작했다면 지구가 돌아가 버렸으므로 아래로 내려가 그 나라로 다시 이동한다)
    if (isKorea) showKoreaVideo();
    return;
  }
  currentPlace = placeKey;
  idleSpin = false;
  spinResumed = false;
  spinRampStart = null;
  window.clearTimeout(resumeSpinTimer);
  flagsActive = false; // 언어가 정해졌으므로 국기 선택 화면(투영·드래그·줌·관성)은 더 이상 쓰지 않는다
  dragState = null;
  pinchState = null;
  activePointers.clear();
  stopFling();
  window.clearTimeout(idleResumeTimer);
  if (capitalMarker) capitalMarker.visible = true;
  hideKoreaVideo(); // 착지 상태였다면(한국) 이동이 시작되는 즉시 영상을 내리고 지구본으로 되돌린다
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
    if (isKorea) showKoreaVideo();
    announceLanded(lang);
    return; // 움직임 줄이기 설정에서는 착지 후 다시 자전하지 않고 그대로 머문다
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
      setCapitalMarkerScale(markerScaleFrom + (1 - markerScaleFrom) * eased); // 줌아웃되며 마커도 원래(기본) 크기로 되돌아감
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
      setCapitalMarkerScale(1 + (MARKER_LANDED_SCALE - 1) * eased); // 지도가 확대될수록 마커는 반비례로 작아짐
      if (t < 1) {
        requestAnimationFrame(step);
        return;
      }
      // t===1: 확대된 상태로 고정(lock). 한국에 착지했다면 여기서 영상을 페이드인하고,
      // home.js에 착지를 알려 제목·카드 링·식단/포디움 패널을 띄우게 한다.
      // 5초 동안 그 나라에 머문 뒤에는 다시 천천히 자전한다.
      if (isKorea) showKoreaVideo();
      announceLanded(lang);
      resumeSpinTimer = window.setTimeout(() => resumeSpinAfterLanding(myToken), RESUME_SPIN_AFTER_LANDING_MS);
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
