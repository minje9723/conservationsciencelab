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
  cn: { lat: 39.9042, lon: 116.4074, landedZoom: 2.20 },  // 베이징 (중국 경도 폭 약 62°)
  uz: { lat: 41.2995, lon: 69.2401, landedZoom: 1.75 },   // 타슈켄트 (우즈베키스탄 경도 폭 약 17°)
  fr: { lat: 48.8566, lon: 2.3522, landedZoom: 1.75 },    // 파리 (프랑스 경도 폭 약 13°)
  eg: { lat: 30.0444, lon: 31.2357, landedZoom: 1.75 },   // 카이로 (이집트 경도 폭 약 12°)
  it: { lat: 41.9028, lon: 12.4964, landedZoom: 1.75 },   // 로마 (이탈리아 경도 폭 약 12°)
  de: { lat: 52.5200, lon: 13.4050, landedZoom: 1.75 },   // 베를린 (독일 경도 폭 약 9°)
  es: { lat: 40.4168, lon: -3.7038, landedZoom: 1.75 },   // 마드리드 (스페인 경도 폭 약 13°)
  gr: { lat: 37.9838, lon: 23.7275, landedZoom: 1.75 },   // 아테네 (그리스 경도 폭 약 10°)
  nl: { lat: 52.3676, lon: 4.9041, landedZoom: 1.75 },    // 암스테르담 (네덜란드 경도 폭 약 4°)
  se: { lat: 59.3293, lon: 18.0686, landedZoom: 1.75 }    // 스톡홀름 (스웨덴 경도 폭 약 14°)
};

// 국기 없이 언어만 정해졌을 때(상단 언어 드롭다운 등) 착지할 기본 장소
const DEFAULT_PLACE_BY_LANG = { ko: 'kr', en: 'us', ja: 'jp', zh: 'cn', uz: 'uz', fr: 'fr', ar: 'eg', it: 'it', de: 'de', es: 'es', el: 'gr', nl: 'nl', sv: 'se' };

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

// 다른 배너/메뉴에 있다가 상단바 홈버튼으로 돌아오거나, 뒤로가기로 홈에 복귀했을 때
// 위도·경도 인트로 애니메이션을 건너뛰고 바로 월드맵 이미지를 띄워야 하는지 판별
function shouldSkipIntro() {
  try {
    if (sessionStorage.getItem('hero-intro-requested') === '1') {
      return false;
    }
  } catch (e) {}
  const isLanded = document.documentElement.classList.contains('hero-landed');
  let introDone = false;
  try {
    introDone = sessionStorage.getItem('hero-intro-done') === '1';
  } catch (e) {}
  return isLanded && introDone;
}
const ZOOM_MS = 900;         // 확대 소요 시간
const IDLE_SPIN_PER_MS = 0.00007; // 아무 언어도 선택되지 않은 초기 상태의 유휴 자전 속도(rad/ms). 완전히 한 바퀴 도는 데 약 90초
const RESUME_SPIN_AFTER_LANDING_MS = 2500; // 착지한 나라에 이만큼(2.5초) 머문 뒤 다시 천천히 자전한다(모든 언어 공통)
const RESUME_ZOOM_MS = 2200;  // 자전을 다시 시작할 때 기본 거리로 천천히 줌아웃하는 시간
const SPIN_RAMP_MS = 2500;    // 자전을 다시 시작할 때 속도를 0에서 유휴 속도까지 서서히 올리는 시간
// 언어 선택 화면에서 지구본 주위를 도는 달. 지구본 캔버스는 원형 프레임에 잘리므로 달은
// 별도의 작은 캔버스(두 번째 렌더러)로 그려 지구본 바깥 궤도를 돌게 한다. 궤도는 장식용
// 궤도(.hero-orbits)와 같은 기울기의 타원이고, 앞쪽 절반에서는 지구본 앞으로, 뒤쪽
// 절반에서는 지구본 뒤로 지나간다. 지구본과 같은 실제 태양 방향으로 빛을 받아 위상이 맞는다.
const MOON_TEXTURE_URL = 'assets/moon-texture.jpg'; // NASA SVS CGI Moon Kit(LRO, 퍼블릭 도메인)
const MOON_SIZE_RATIO = 0.17;       // 달 지름 / 지구본 지름
const MOON_ORBIT_RATIO = 0.8;       // 궤도 긴반지름 / 지구본 지름
const MOON_ORBIT_FLATTEN = 0.38;    // 궤도 짧은반지름 / 긴반지름(.hero-orbit의 scaleY와 같은 값)
const MOON_ORBIT_TILT_DEG = -30;    // 궤도 기울기(.hero-orbits의 rotate와 같은 값)
const MOON_PERIOD_MS = 60000;       // 한 바퀴 도는 시간
const MOON_FADE_MS = 450;           // 나타나고 사라지는 시간
// 야경 텍스처는 가벼운 저해상도판으로 먼저 띄우고, 기기가 감당할 수 있으면 뒤에서 고해상도판을
// 받아 바꿔 끼운다(확대해도 도시 불빛이 뭉개지지 않게). 둘 다 NASA Black Marble 2016(퍼블릭 도메인):
// 저해상도판은 0.1°판(3600×1800) 원본, 고해상도판은 3km판(13500×6750)을 8192×4096으로 줄인 것.
const NIGHT_TEXTURE_URL = 'assets/earth-lights.jpg';
const NIGHT_TEXTURE_HD_URL = 'assets/earth-lights-8k.jpg';
const NIGHT_TEXTURE_HD_SIZE = 8192;
const NIGHT_TEXTURE_HD_MIN_MEMORY_GB = 4; // navigator.deviceMemory가 이보다 작은 기기는 저해상도판 유지
const HERO_GLOBE_MARKER_COLOR = 0x39ff14; // 형광 녹색(neon green)
const HERO_GLOBE_MARKER_OPACITY = 0.7; // 핀포인트(코어 점) 투명도
const MARKER_LANDED_SCALE = 0.6; // 착지(확대) 시 마커가 작아지는 배율 — 카메라가 가까워져 원근감으로도 커 보이므로, 마커 자체는 반비례로 줄여 균형을 맞춘다

let renderer, scene, camera, axialTiltGroup, framingGroup, spinGroup;
let capitalMarker, capitalMarkerRing;
let koreaVideoEl = null; // 한국 착지 시 재생하는 구글어스스튜디오 영상(.hero-globe-video)
let moonRenderer = null;
let moonScene, moonCamera, moonMesh, moonLight;
let moonEl = null;
let moonOpacity = 0;
const sunWorldDir = new THREE.Vector3(0, 0, 1); // 실시간 태양 방향(world) — 지구본 셰이더와 달 조명이 함께 쓴다
let globeShaderUniforms = null; // 지구본 커스텀 셰이더의 uniforms(day/night 텍스처 블렌딩용). init()의 onBeforeCompile에서 채워진다
let globeMesh = null;
let globeMaterial = null;
let graticuleMesh = null;
let coreSphereMesh = null;
let dayTextureLoaded = false;
let nightTextureLoaded = false;
let activeNightTexture = null;     // 셰이더의 nightMap이 가리키는 텍스처(고해상도판이 오면 교체된다)
let nightTextureUpgradeStarted = false;
let textureFadeStart = null;
let currentTextureFade = 0; // 0: 뼈대만 표시, 0 -> 1: 텍스처 및 언어/국기 아이콘 동시 페이드인
let gridFormationStart = 0;
const TEXTURE_FADE_MS = 1400;
const GRID_MIN_SOLO_MS = 900;
const GRID_FORMATION_MS = 1400;
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

// 언어 선택 화면에서 마우스 휠·트랙패드·두 손가락 핀치로 확대/축소한다. 확대는 두 단계로
// 이어진다: ① 원형 지구본 자체가 커져 화면을 가득 채우고(frameScale, CSS --globe-zoom-scale)
// ② 화면이 다 찬 뒤에는 카메라가 지표로 다가간다(camera.position.z). 두 단계를 하나의
// 배율(zoomMag = 원 배율 × 카메라 배율)로 다뤄 휠 한 칸의 체감이 처음부터 끝까지 같다.
// 축소는 처음 크기(배율 1)까지만 — 더 작아지면 원형 프레임 안에 빈 테두리가 생긴다.
const ZOOM_MIN_Z = 1.75;          // 카메라 최소 거리 — 텍스처가 심하게 깨지지 않는 착지 거리
const WHEEL_ZOOM_PER_PX = 0.0015; // 휠 1px당 배율(지수) — 마우스 휠 한 칸(약 100px)에 약 14%
const PINCH_WHEEL_BOOST = 4;      // 트랙패드 핀치(ctrl+wheel)는 한 번에 오는 값이 작아서 키운다
const ZOOM_SMOOTHING_MS = 110;    // 목표 배율로 따라가는 시간 상수(작을수록 즉각적)
const MAX_RENDER_PX = 2400;       // 원이 커질 때 캔버스 해상도를 올리되 이 픽셀 수(한 변)를 넘지 않는다
let zoomTargetMag = 1;
let zoomMag = 1;
let frameScale = 1;               // 현재 원형 프레임 배율(1 = 원래 크기)
let coverScale = 1;               // 원이 화면(뷰포트)을 빈틈없이 덮는 배율 — 이 이상은 카메라 줌으로 넘긴다
let hudEl = null;                 // 국기 레이어를 담은 .hero-globe-hud — 지구본 원과 같은 배율로 커진다
let resolutionTimer = null;
const activePointers = new Map(); // 누르고 있는 포인터들(pointerId → {x, y}) — 두 손가락이면 핀치
let pinchState = null; // { startDist, startMag }

// 드래그를 놓는 순간의 속도로 계속 돌다가 마찰로 서서히 멈춘다(관성 회전).
const FLING_SAMPLE_MS = 100;         // 놓기 직전 이 시간 동안의 움직임으로 속도를 잰다
const FLING_HOLD_MS = 80;            // 마지막 움직임 후 이만큼 멈춰 있다가 놓으면 관성 없이 멈춘다
const FLING_MAX_RAD_PER_MS = 0.012;  // 아주 세게 튕겨도 이보다 빨리 돌지는 않는다(약 0.5초에 한 바퀴)
const FLING_FRICTION_MS = 700;       // 속도가 약 1/3로 줄어드는 시간 — 클수록 오래 돈다
const FLING_STOP_RAD_PER_MS = IDLE_SPIN_PER_MS; // 유휴 자전 속도까지 느려지면 멈추고 유휴 자전으로 넘긴다
const flingVelocity = { yaw: 0, pitch: 0 }; // rad/ms

// PC 착지 화면: 통계 카드(위성) 4장은 각자 궤도 위의 위치(θ)와 각속도(ω)를 가지고 움직인다.
// - 궤도는 3D에서 원이고 화면의 타원은 그 원을 비스듬히 본 모습이라, 궤도각 θ가 곧 원 위의 실제
//   각도다. 그래서 θ·ω로 계산한 충돌이 실제 3D 원 궤도 위의 충돌과 같다.
// - 카드끼리 부딪히면 운동량과 운동에너지가 모두 보존되는 완전 탄성 충돌로 속도를 주고받는다
//   (질량이 같으면 두 카드의 속도가 서로 바뀐다 — 뉴턴의 요람처럼).
// - 지구본이 자전하는 동안 궤도에는 자전과 같은 각속도의 "흐름"이 있고, 카드는 흐름에 대한
//   상대 속도만 공기 저항처럼 서서히 잃는다(드래그·관성으로 벌어진 간격은 그대로 남는다).
// - 손으로 잡은 카드는 무한 질량처럼 다른 카드를 밀어낸다(움직이는 벽에 부딪히는 것과 같은 식).
// 궤도 모양·카드 처음 각도는 styles/hero-globe.css의 PC 위성 궤도(--orbit-a, --kx/--ky/--depth)와
// 같은 값이어야 한다.
const CARD_ORBIT_BASE_DEG = [-22.7, 22.7, 157.3, 202.7]; // index.html 카드 순서: 프로젝트, 논문, 연구진, 졸업생
const CARD_ORBIT_FLATTEN = 0.38;
const CARD_ORBIT_TILT_DEG = -30;
const CARD_ORBIT_A_RATIO = 0.59375; // 궤도 긴반지름 / 지구본 지름
const CARD_DIAMETER_RATIO = 0.17;   // 카드 지름 / 지구본 지름(CSS --ring-card: 17cqw)
const CARD_MASSES = [1, 1, 1, 1];   // 카드별 질량 — 바꾸면 충돌 때 그 비율대로 운동량·에너지를 나눈다
// 같은 크기의 두 카드가 원 궤도 위에서 맞닿는 각도 간격(현의 길이 = 카드 지름)
const CARD_CONTACT_RAD = 2 * Math.asin(CARD_DIAMETER_RATIO / (2 * CARD_ORBIT_A_RATIO));
const CARD_MAX_SUBSTEP_RAD = CARD_CONTACT_RAD * 0.2; // 한 계산 단계에 이보다 많이 움직이지 않게 쪼갠다(빠른 카드가 서로 통과하지 않도록)
const CARD_FRICTION_MS = FLING_FRICTION_MS; // 궤도 흐름에 대한 상대 속도가 약 1/3로 줄어드는 시간
const CARD_GRAB_MAX_STEP_RAD = 0.5; // 포인터 한 번 움직임으로 잡은 카드가 이동할 수 있는 최대 각도
const pcOrbitLayout = window.matchMedia('(min-width: 1401px)');
let cardEls = [];
let cardTheta = [];            // 카드별 궤도각(rad)
let cardOmega = [];            // 카드별 각속도(rad/ms)
let cardDrift = 0;             // 궤도 흐름 각속도 — 지구본이 자전 중이면 그 속도, 멈춰 있으면 0
let cardGrab = null;           // 손으로 잡은 카드 { indices: [...], omega } — 카드 하나 또는 링 전체
const cardLastTheta = [];      // 마지막으로 화면에 쓴 궤도각 — 바뀐 카드가 없으면 스타일을 다시 쓰지 않는다
let cardStylesWritten = false; // 인라인 위치를 써 둔 상태인지(태블릿·휴대폰 배치로 바뀌면 지운다)
let landedDragEnabled = false; // 착지 후 카드 드래그 허용 여부 — 다른 나라로 이동하는 동안엔 끈다

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
  if (!spinGroup) return;
  if (!cachedSubsolarPoint || now - lastSunUpdateTime >= 2000) {
    lastSunUpdateTime = now;
    cachedSubsolarPoint = getSubsolarPoint(new Date());
  }

  const localDir = latLonToLocalPosition(cachedSubsolarPoint.lat, cachedSubsolarPoint.lon, 1);
  spinGroup.updateMatrixWorld();
  sunWorldDir.copy(spinGroup.localToWorld(localDir)).normalize(); // 원점이 이동하지 않으므로 방향과 동일
  if (globeShaderUniforms) globeShaderUniforms.sunDirection.value.copy(sunWorldDir);
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

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function easeOutBack(t) {
  const c1 = 1.4;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
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

// 주간·야간 텍스처가 모두 뜬 뒤(첫 화면 로딩과 대역폭을 다투지 않게) 브라우저가 한가할 때
// 고해상도 야경을 받아 셰이더의 nightMap을 바꿔 끼우고 저해상도판은 GPU 메모리에서 내린다.
// 8K 텍스처를 못 올리는 기기나 메모리가 적은 기기(deviceMemory는 크롬 계열만 제공)는 그대로 둔다.
function maybeUpgradeNightTexture() {
  if (nightTextureUpgradeStarted || !dayTextureLoaded || !nightTextureLoaded) return;
  nightTextureUpgradeStarted = true;
  if (renderer.capabilities.maxTextureSize < NIGHT_TEXTURE_HD_SIZE) return;
  if (navigator.deviceMemory && navigator.deviceMemory < NIGHT_TEXTURE_HD_MIN_MEMORY_GB) return;

  const load = () => new THREE.TextureLoader().load(
    NIGHT_TEXTURE_HD_URL,
    (hdTexture) => {
      if ('colorSpace' in hdTexture) hdTexture.colorSpace = THREE.SRGBColorSpace;
      hdTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      const previous = activeNightTexture;
      activeNightTexture = hdTexture;
      if (globeShaderUniforms) globeShaderUniforms.nightMap.value = hdTexture;
      if (previous) previous.dispose();
    },
    undefined,
    (error) => console.warn('[hero-globe-3d] 고해상도 야경 텍스처 로드 실패, 저해상도판을 계속 씁니다', error)
  );
  if ('requestIdleCallback' in window) window.requestIdleCallback(load, { timeout: 3000 });
  else window.setTimeout(load, 1000);
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
  if (!gl) {
    document.documentElement.classList.remove('has-webgl');
    return; // WebGL 미지원: 기존 평면 폴백을 그대로 둔다
  }

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
  hudEl = document.querySelector('.hero-globe-hud');

  // 계층: axialTiltGroup(고정 자전축 기울기) > framingGroup(위도 보정, 애니메이션)
  //       > spinGroup(경도 회전, 애니메이션) > 지구본 메시
  axialTiltGroup = new THREE.Group();
  axialTiltGroup.rotation.x = THREE.MathUtils.degToRad(EARTH_AXIAL_TILT_DEG);
  scene.add(axialTiltGroup);

  framingGroup = new THREE.Group();
  axialTiltGroup.add(framingGroup);

  spinGroup = new THREE.Group();
  framingGroup.add(spinGroup);

  const skipIntro = shouldSkipIntro();
  if (skipIntro) {
    flagsActive = false;
    currentTextureFade = 1.0;
    textureFadeStart = performance.now();
    idleSpin = true;
    spinResumed = true;
    spinRampStart = null;
    landedDragEnabled = true;
    camera.position.z = CAMERA_Z_DEFAULT;
  }

  const geometry = new THREE.SphereGeometry(1, 64, 64);
  const loader = new THREE.TextureLoader();
  const dayTexture = loader.load(
    'assets/earth-texture.jpg',
    () => {
      dayTextureLoaded = true;
      if (shouldSkipIntro() && globeMaterial) {
        globeMaterial.opacity = 1.0;
        currentTextureFade = 1.0;
      }
      maybeUpgradeNightTexture();
    },
    undefined,
    (error) => console.warn('[hero-globe-3d] 지구(주간) 텍스처 로드 실패, 평면 폴백을 유지합니다', error)
  );
  const nightTexture = loader.load(
    NIGHT_TEXTURE_URL,
    () => {
      nightTextureLoaded = true;
      maybeUpgradeNightTexture();
    },
    undefined,
    (error) => console.warn('[hero-globe-3d] 지구(야간) 텍스처 로드 실패, 야경 표현 없이 진행합니다', error)
  );
  activeNightTexture = nightTexture;
  if ('colorSpace' in dayTexture) dayTexture.colorSpace = THREE.SRGBColorSpace;
  if ('colorSpace' in nightTexture) nightTexture.colorSpace = THREE.SRGBColorSpace;
  // 구체 가장자리처럼 비스듬히 보이는 면과 확대했을 때 텍스처가 뭉개지지 않도록 비등방성 필터링을 최대로
  const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
  dayTexture.anisotropy = maxAnisotropy;
  nightTexture.anisotropy = maxAnisotropy;

  // 텍스처 로딩 중 지구의 입체 볼륨을 형성하고 뒷면 위경도선을 자연스럽게 차폐하는 다크 코어 구체
  const coreSphereGeo = new THREE.SphereGeometry(0.997, 48, 48);
  const coreSphereMat = new THREE.MeshBasicMaterial({ color: 0x050e19 });
  coreSphereMesh = new THREE.Mesh(coreSphereGeo, coreSphereMat);
  if (!skipIntro) {
    spinGroup.add(coreSphereMesh);
  }

  // 초기 로딩 딜레이 동안 지구본의 뼈대를 형성하는 위도·경도 격자(Graticule)
  graticuleMesh = createGraticuleMesh();
  if (!skipIntro) {
    spinGroup.add(graticuleMesh);
    gridFormationStart = performance.now();
  } else {
    graticuleMesh.visible = false;
    graticuleMesh.material.uniforms.uProgress.value = 1.0;
    graticuleMesh.material.uniforms.uOpacity.value = 0.0;
  }

  // 낮/밤 텍스처를 실시간 태양 방향(worldNormal·sunDirection)에 따라 섞는 커스텀
  // 셰이더. MeshBasicMaterial(무광원)을 베이스로 onBeforeCompile로 map_fragment
  // 단계만 가로채, 기존 색공간/톤매핑 파이프라인은 그대로 유지한다.
  globeMaterial = new THREE.MeshBasicMaterial({
    map: dayTexture,
    transparent: true,
    opacity: skipIntro ? 1.0 : 0, // 홈 복귀/재방문 시 위도경도 애니메이션 없이 즉시 100% 월드맵 표시
    depthWrite: true,
    depthTest: true
  });
  globeMaterial.onBeforeCompile = (shader) => {
    shader.uniforms.nightMap = { value: activeNightTexture };
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
          float dayMix = smoothstep( -0.1, 0.12, ndotl ); // 명암 경계를 조금 좁혀 흐릿한 띠를 줄인다
          // 주간: 위성사진의 채도를 살짝(+7.5%) 올려 바다·숲·사막 색이 또렷하게 보이게 한다
          vec3 dayRgb = dayColor.rgb;
          dayRgb = max( mix( vec3( dot( dayRgb, vec3( 0.2126, 0.7152, 0.0722 ) ) ), dayRgb, 1.075 ), 0.0 );
          // 야간: 완전한 검정 대신 아주 옅은 남색 바탕 위에 대륙 윤곽과 도시 불빛이 보이게 한다
          vec3 nightSide = dayRgb * 0.07 + vec3( 0.004, 0.008, 0.02 ) + nightColor.rgb * 1.6;
          diffuseColor.rgb *= mix( nightSide, dayRgb, dayMix );
        #endif
      `);
    globeShaderUniforms = shader.uniforms;
  };
  globeMesh = new THREE.Mesh(geometry, globeMaterial);
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
  setupCardOrbit();
  setupMoon();

  window.addEventListener('resize', onResize);
  onResize();

  ready = true;
  lastFrameTime = performance.now();
  requestAnimationFrame(animate);

  if (pendingMove) {
    const { lang, place, userSelected } = pendingMove;
    pendingMove = null;
    moveToLanguage(lang, place, userSelected);
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

  if (shouldSkipIntro()) {
    flagsActive = false;
    flagsLayer.style.display = 'none';
    flagsLayer.style.opacity = '0';
    flagsLayer.style.pointerEvents = 'none';
    return;
  }

  // 초기 위도·경도 뼈대 형성 중에는 국기/언어 아이콘을 숨겨두고, 텍스처와 함께 동경 국가부터 순차 페이드인
  flagsLayer.style.opacity = '0';
  flagsLayer.style.pointerEvents = 'none';
  flagsLayer.querySelectorAll('.hero-globe-flag').forEach((el) => {
    el.style.opacity = '0';
    const placeKey = el.dataset.place;
    const capital = HERO_GLOBE_PLACES[placeKey];
    if (!capital) return;
    flagEntries.push({
      el,
      placeKey,
      lon: capital.lon,
      local: latLonToLocalPosition(capital.lat, capital.lon, 1)
    });
    el.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') flagHover = true; });
    el.addEventListener('pointerleave', () => { flagHover = false; });
  });

  // 동경(가장 동쪽, 경도 큰 값)부터 서쪽 순서로 정렬하여 순차 등장 순위 부여
  // (일본 139.6° -> 한국 127.0° -> 우즈벡 69.2° -> 사우디 46.7° -> 이집트 31.2° -> 프랑스 2.4° -> 영국 -0.1° -> 미국 -77.0°)
  flagEntries.sort((a, b) => b.lon - a.lon);
  flagEntries.forEach((entry, idx) => {
    entry.eastRank = idx;
  });

  // CSS 기본값(원 둘레에 고르게 놓인 정적 배치, 평면 폴백용) 대신 JS가 매 프레임 위치를 정한다
  flagsLayer.classList.add('is-projected');
  setupDrag(flagsLayer, { isEnabled: () => flagsActive && currentTextureFade > 0.1, allowZoom: true });
}

// 각 수도의 구체 표면 좌표를 현재 회전 상태의 world 좌표 → 카메라 화면 좌표(%)로
// 투영해 국기를 그 자리에 둔다. 캔버스와 국기 레이어는 같은 정사각형 영역을 덮으므로
// NDC(-1~1)를 그대로 퍼센트로 바꾸면 된다.
// 텍스처 로드가 완료되면 동경(극동) 국가부터 서쪽으로 순차적으로 팝업 등장한다.
function updateFlags() {
  if (!flagsActive || !flagEntries.length) return;

  const flagsFade = currentTextureFade;
  const now = performance.now();
  const hasFadeStarted = textureFadeStart !== null;
  const elapsedSinceFade = hasFadeStarted ? Math.max(0, now - textureFadeStart) : 0;
  const reducedMotion = prefersReducedMotion();

  if (flagsLayer) {
    flagsLayer.style.opacity = hasFadeStarted ? flagsFade.toFixed(3) : '0';
    flagsLayer.style.pointerEvents = flagsFade > 0.1 ? 'auto' : 'none';
  }

  if (!hasFadeStarted || flagsFade <= 0.001) {
    for (const { el } of flagEntries) {
      el.style.opacity = '0';
      el.style.pointerEvents = 'none';
    }
    return;
  }

  const INITIAL_FLAG_DELAY_MS = 150; // 월드맵 이미지가 페이드인되기 시작하면서 국기들과 함께 호흡을 맞추는 초기 딜레이
  const STAGGER_DELAY_MS = 280;      // 각 국가별 등장 간격 (기존 180ms -> 280ms로 순차적 등장 딜레이를 더 여유롭게 부여)
  const APPEAR_DURATION_MS = 600;    // 각 핀이 부드럽게 팝업되는 시간

  camera.updateMatrixWorld();
  for (const { el, local, eastRank } of flagEntries) {
    flagWorld.copy(local);
    spinGroup.localToWorld(flagWorld);
    flagToCamera.copy(camera.position).sub(flagWorld).normalize();
    const facing = flagWorld.dot(flagToCamera);

    flagWorld.project(camera);
    // 확대해서 수도가 원형 프레임 밖으로 밀려나면(화면 중심에서 반지름 1 이상) 국기도 숨긴다.
    const radial = Math.hypot(flagWorld.x, flagWorld.y);
    const visibility = THREE.MathUtils.smoothstep(facing, 0.08, 0.4)
      * (1 - THREE.MathUtils.smoothstep(radial, 0.97, 1.05));

    // 동경에 있는 국가부터 순차적으로 등장하는 진행도 계산
    let itemAlpha = 1.0;
    let itemPop = 1.0;

    if (!reducedMotion) {
      const itemStart = INITIAL_FLAG_DELAY_MS + (eastRank ?? 0) * STAGGER_DELAY_MS;
      const itemElapsed = elapsedSinceFade - itemStart;
      if (itemElapsed <= 0) {
        itemAlpha = 0;
        itemPop = 0;
      } else {
        const itemT = Math.min(1.0, itemElapsed / APPEAR_DURATION_MS);
        itemAlpha = easeOutCubic(itemT);
        itemPop = easeOutBack(itemT);
      }
    }

    const finalOpacity = visibility * itemAlpha;
    el.style.left = `${(flagWorld.x + 1) * 50}%`;
    el.style.top = `${(1 - flagWorld.y) * 50}%`;
    el.style.opacity = finalOpacity.toFixed(3);

    // 등장 시 0.5 -> 1.04 -> 1.0 탄력적 팝업 스케일
    const popScale = 0.5 + 0.5 * itemPop;
    const scaleFactor = (0.72 + 0.28 * visibility) * popScale;
    el.style.setProperty('--flag-scale', scaleFactor.toFixed(3));
    el.style.zIndex = String(Math.round(visibility * 100)); // 앞쪽(정면에 가까운) 국기가 위로
    el.style.pointerEvents = itemAlpha > 0.7 && visibility >= 0.25 ? '' : 'none';
    el.classList.toggle('is-behind', visibility < 0.25);
  }
}

// 확대할수록(원이 커지거나 카메라가 다가갈수록) 같은 손 움직임에 덜 돌게 해서, 확대해도
// 손가락 아래 지도가 따라오는 느낌을 유지한다
function rotationScaleForZoom() {
  const cameraMag = (CAMERA_Z_DEFAULT - 1) / (camera.position.z - 1);
  return THREE.MathUtils.clamp(1 / (frameScale * cameraMag), 0.08, 1);
}

// 원이 화면을 빈틈없이 덮으려면 원의 반지름이 원 중심에서 가장 먼 화면 모서리까지 닿아야 한다.
// (scale은 원 중심 기준이라 getBoundingClientRect의 중심은 배율과 상관없이 같다)
function updateCoverScale() {
  if (!container) return;
  const rect = container.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const farthest = Math.max(
    Math.hypot(cx, cy),
    Math.hypot(vw - cx, cy),
    Math.hypot(cx, vh - cy),
    Math.hypot(vw - cx, vh - cy)
  );
  const baseRadius = (container.clientWidth || 640) / 2; // clientWidth는 transform 배율의 영향을 받지 않는다
  coverScale = Math.max(1, (farthest / baseRadius) * 1.02);
}

function maxZoomMag() {
  return coverScale * (CAMERA_Z_DEFAULT - 1) / (ZOOM_MIN_Z - 1);
}

function setZoomTarget(mag) {
  zoomTargetMag = THREE.MathUtils.clamp(mag, 1, maxZoomMag());
}

function applyFrameScale(scale) {
  if (Math.abs(scale - frameScale) < 1e-4) return;
  frameScale = scale;
  const value = scale.toFixed(4);
  container.style.setProperty('--globe-zoom-scale', value);
  if (hudEl) hudEl.style.setProperty('--globe-zoom-scale', value);
  scheduleResolutionUpdate();
}

// 배율 → (원 배율, 카메라 거리). 원이 화면을 다 덮을 때까지는 원만 키우고, 그 이상은 카메라로.
function applyZoomMagnification(mag) {
  const scale = Math.min(mag, coverScale);
  applyFrameScale(scale);
  camera.position.z = 1 + (CAMERA_Z_DEFAULT - 1) / (mag / scale);
  if (hudEl) hudEl.classList.toggle('is-zoomed', mag > 1.01);
}

// 언어 선택 화면에서만 배율을 목표값으로 부드럽게 따라가게 한다(언어가 정해진 뒤에는
// 이동·착지 애니메이션이 카메라를 직접 움직인다). 배율 공간에서 비율로 보간해 확대·축소
// 속도가 배율과 상관없이 고르게 느껴지도록 한다.
function stepZoom(delta) {
  if (Math.abs(zoomTargetMag - zoomMag) < 1e-4 || prefersReducedMotion()) {
    zoomMag = zoomTargetMag;
  } else {
    const k = 1 - Math.exp(-Math.min(delta, 100) / ZOOM_SMOOTHING_MS);
    zoomMag *= Math.pow(zoomTargetMag / zoomMag, k);
  }
  applyZoomMagnification(zoomMag);
}

// 언어를 골라 이동이 시작되면 커져 있던 원을 원래 크기로 되돌린다(카메라 거리는 기존
// 이동 애니메이션의 줌아웃 단계가 되돌린다)
function shrinkFrameBack() {
  zoomTargetMag = 1;
  zoomMag = 1;
  if (hudEl) hudEl.classList.remove('is-zoomed');
  const from = frameScale;
  if (from <= 1.0001) return;
  if (prefersReducedMotion()) {
    applyFrameScale(1);
    return;
  }
  const start = performance.now();
  function step(now) {
    const t = Math.min(1, Math.max(0, (now - start) / ZOOM_MS));
    applyFrameScale(from + (1 - from) * easeInOutCubic(t));
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// 원이 CSS로 커지면 캔버스도 늘어나 흐려지므로, 배율 변화가 잠시 멈추면 그만큼 렌더링
// 해상도를 올린다(바꿀 때마다 WebGL 버퍼를 새로 만들기 때문에 매 프레임 하지는 않는다)
function scheduleResolutionUpdate() {
  window.clearTimeout(resolutionTimer);
  resolutionTimer = window.setTimeout(updateRenderResolution, 160);
}

function updateRenderResolution() {
  if (!renderer || !container) return;
  const size = container.clientWidth || 640;
  const base = Math.min(window.devicePixelRatio || 1, 2);
  const wanted = Math.min(base * frameScale, Math.max(base, MAX_RENDER_PX / size));
  if (Math.abs(wanted - renderer.getPixelRatio()) / wanted < 0.1) return;
  renderer.setPixelRatio(wanted);
}

function stopFling() {
  flingVelocity.yaw = 0;
  flingVelocity.pitch = 0;
}

// 드래그를 놓기 직전 FLING_SAMPLE_MS 동안의 평균 속도(rad/ms). 놓기 전에 잠깐 멈춰
// 있었으면(또는 움직임 줄이기 설정이면) null — 관성 없이 그 자리에 멈춘다.
function measureDragVelocity(samples, lastMoveTime) {
  const now = performance.now();
  if (prefersReducedMotion() || now - lastMoveTime > FLING_HOLD_MS) return null;
  let yaw = 0;
  let pitch = 0;
  let dt = 0;
  for (const sample of samples) {
    if (now - sample.t > FLING_SAMPLE_MS) continue;
    yaw += sample.yaw;
    pitch += sample.pitch;
    dt += sample.dt;
  }
  if (dt < 8) return null;
  const clampSpeed = (v) => THREE.MathUtils.clamp(v, -FLING_MAX_RAD_PER_MS, FLING_MAX_RAD_PER_MS);
  return { yaw: clampSpeed(yaw / dt), pitch: clampSpeed(pitch / dt) };
}

// 지구본 관성 회전(언어 선택 화면)
function startFling(samples, lastMoveTime) {
  const velocity = measureDragVelocity(samples, lastMoveTime);
  if (!velocity) return false;
  flingVelocity.yaw = velocity.yaw;
  flingVelocity.pitch = velocity.pitch;
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

// surface: 드래그를 받는 요소. isEnabled: 지금 드래그를 받을지, allowZoom: 휠·핀치 줌 허용(언어 선택
// 화면만), cards: true면 지구본 대신 착지 화면의 통계 카드 링만 궤도를 따라 돌린다
function setupDrag(surface, { isEnabled, allowZoom = false, cards = false }) {
  // 국기 이미지의 기본 끌기(drag-and-drop)나 라벨 글자 선택, 길게 누르기 메뉴가 시작되면
  // 브라우저가 포인터 입력을 가져가(pointercancel) 드래그가 끊기고 연속 조작이 막히므로 모두 막는다.
  surface.addEventListener('dragstart', (e) => e.preventDefault());
  surface.addEventListener('selectstart', (e) => e.preventDefault());
  // 길게 누르기 메뉴는 국기 화면(터치)에서만 막는다 — 착지 화면의 카드 링크는 PC에서 오른쪽 클릭 메뉴(새 탭 열기 등)가 그대로 떠야 한다
  if (allowZoom) surface.addEventListener('contextmenu', (e) => e.preventDefault());

  // 휠을 위로 굴리면 확대, 아래로 굴리면 축소(지도 앱과 같은 방향). 트랙패드 핀치는
  // 브라우저가 ctrl+wheel로 보내므로 같은 처리로 받고, 페이지 전체 확대는 막는다.
  if (allowZoom) surface.addEventListener('wheel', (e) => {
    if (!isEnabled()) return;
    e.preventDefault();
    const px = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaMode === 2 ? e.deltaY * 400 : e.deltaY;
    const perPx = e.ctrlKey ? WHEEL_ZOOM_PER_PX * PINCH_WHEEL_BOOST : WHEEL_ZOOM_PER_PX;
    updateCoverScale();
    setZoomTarget(zoomTargetMag * Math.exp(-px * perPx));
  }, { passive: false });

  surface.addEventListener('pointerdown', (e) => {
    if (!isEnabled() || (e.pointerType === 'mouse' && e.button !== 0)) return;
    if (!allowZoom && activePointers.size > 0) return; // 줌이 없는 면에서는 두 번째 손가락을 무시한다
    if (e.pointerType === 'mouse') e.preventDefault(); // 마우스 누름으로 글자 선택이 시작되지 않게(click은 그대로 발생)
    // 관성으로 돌고 있는 지구본(카드)을 잡으면 그 자리에서 멈춘다
    if (!cards) stopFling();
    activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (activePointers.size === 2) {
      // 두 번째 손가락이 닿으면 회전 대신 핀치 줌으로 전환한다
      if (dragState?.moved) suppressNextClick();
      dragState = null;
      surface.classList.remove('is-dragging');
      updateCoverScale();
      pinchState = { startDist: pinchDistance(), startMag: zoomTargetMag };
      return;
    }
    if (activePointers.size > 2 || pinchState) return;
    dragState = {
      id: e.pointerId, x: e.clientX, y: e.clientY, moved: false, lastT: performance.now(), samples: [],
      side: 1
    };
    if (cards) {
      // 카드를 잡으면 그 카드만, 카드 사이 빈 곳(지구본 원)을 잡으면 링 전체를 움직인다
      const grabbedEl = e.target.closest ? e.target.closest('.hero-impact-card') : null;
      const index = cardEls.indexOf(grabbedEl);
      const indices = index >= 0 ? [index] : cardEls.map((_, i) => i);
      indices.forEach((i) => { cardOmega[i] = 0; });
      cardGrab = { indices, omega: 0 };
      dragState.single = index >= 0;
      dragState.side = cardOrbitSide(e.clientX, e.clientY);
      dragState.pointerAngle = pointerOrbitAngle(e.clientX, e.clientY);
    }
  });

  surface.addEventListener('pointermove', (e) => {
    if (activePointers.has(e.pointerId)) activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pinchState) {
      if (activePointers.size >= 2) setZoomTarget(pinchState.startMag * pinchDistance() / pinchState.startDist);
      return;
    }

    if (!dragState || e.pointerId !== dragState.id) return;
    const dx = e.clientX - dragState.x;
    const dy = e.clientY - dragState.y;
    if (!dragState.moved) {
      if (Math.hypot(dx, dy) < DRAG_START_THRESHOLD_PX) return;
      dragState.moved = true;
      if (!cards) {
        idleSpin = false;
        spinRampStart = null;
        window.clearTimeout(idleResumeTimer);
      }
      window.getSelection()?.removeAllRanges();
      surface.setPointerCapture(e.pointerId);
      surface.classList.add('is-dragging');
    }
    dragState.x = e.clientX;
    dragState.y = e.clientY;

    let yaw;
    let pitch = 0;
    if (cards) {
      if (dragState.single) {
        // 잡은 카드는 포인터 위치를 궤도 위로 옮긴 각도를 따라간다
        const angle = pointerOrbitAngle(e.clientX, e.clientY);
        yaw = THREE.MathUtils.clamp(wrapAngle(angle - dragState.pointerAngle), -CARD_GRAB_MAX_STEP_RAD, CARD_GRAB_MAX_STEP_RAD);
        dragState.pointerAngle = angle;
      } else {
        // 링 전체: 기울어진 궤도의 긴 축 방향으로 끈 만큼 돌린다. 앞쪽(아래) 절반을 잡으면 앞쪽이,
        // 뒤쪽(위) 절반을 잡으면 뒤쪽이 손을 따라가도록 잡은 쪽(side)에 따라 방향을 뒤집는다.
        const tilt = THREE.MathUtils.degToRad(CARD_ORBIT_TILT_DEG);
        const along = dx * Math.cos(tilt) + dy * Math.sin(tilt);
        yaw = -dragState.side * along * cardDragRadPerPx();
      }
      moveGrabbedCards(yaw, performance.now() - dragState.lastT);
    } else {
      const radPerPx = DRAG_ROTATE_RAD_PER_PX * rotationScaleForZoom();
      yaw = dx * radPerPx;
      pitch = dy * radPerPx;
      spinGroup.rotation.y += yaw;
      framingGroup.rotation.x = THREE.MathUtils.clamp(framingGroup.rotation.x + pitch, PITCH_MIN_RAD, PITCH_MAX_RAD);
    }

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
    const grab = cards ? cardGrab : null;
    dragState = null;
    if (cards) cardGrab = null;
    surface.classList.remove('is-dragging');
    if (!moved) return;
    suppressNextClick();
    if (cards) {
      // 놓는 순간의 속도로 던진다(카드 하나면 그 카드만, 링이면 전부 같은 속도로)
      const velocity = e.type === 'pointerup' ? measureDragVelocity(samples, lastT) : null;
      if (grab) grab.indices.forEach((i) => { cardOmega[i] = velocity ? velocity.yaw : 0; });
      return;
    }
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
  landedDragEnabled = true;
  window.dispatchEvent(new CustomEvent('heroglobe:landed', { detail: { lang } }));
}

// 착지 화면의 드래그 면은 통계 카드 링(지구본 원과 같은 영역)이다. 드래그 면으로 쓸지는
// CSS가 PC 위성 배치에서만(.is-draggable + 1401px 이상) 열어 두고, JS도 같은 조건을 본다.
function setupCardOrbit() {
  const ring = document.querySelector('.hero-globe-card-ring');
  if (!ring) return;
  cardEls = [...ring.querySelectorAll('.hero-impact-card')];
  cardTheta = cardEls.map((_, i) => THREE.MathUtils.degToRad(CARD_ORBIT_BASE_DEG[i] ?? 0));
  cardOmega = cardEls.map(() => 0);
  ring.classList.add('is-draggable');
  setupDrag(ring, {
    isEnabled: () => landedDragEnabled,
    cards: true
  });
}

// 잡은 곳이 궤도 긴 축을 기준으로 앞쪽(아래, 1)인지 뒤쪽(위, -1)인지
function cardOrbitSide(clientX, clientY) {
  const rect = container.getBoundingClientRect();
  const px = clientX - (rect.left + rect.width / 2);
  const py = clientY - (rect.top + rect.height / 2);
  const tilt = THREE.MathUtils.degToRad(CARD_ORBIT_TILT_DEG);
  return px * -Math.sin(tilt) + py * Math.cos(tilt) >= 0 ? 1 : -1;
}

// 링 전체를 끌 때: 앞쪽 궤도의 카드가 대략 마우스를 따라오도록(궤도 긴반지름 px당 1rad)
function cardDragRadPerPx() {
  return 1 / Math.max(80, (container.clientWidth || 640) * CARD_ORBIT_A_RATIO * 0.87);
}

function wrapAngle(rad) {
  return rad - Math.PI * 2 * Math.round(rad / (Math.PI * 2));
}

// 포인터 위치를 궤도면으로 되돌려(기울기 역회전, 납작한 비율 복원) 궤도각으로 바꾼다
function pointerOrbitAngle(clientX, clientY) {
  const rect = container.getBoundingClientRect();
  const a = (container.clientWidth || 640) * CARD_ORBIT_A_RATIO;
  const b = a * CARD_ORBIT_FLATTEN;
  const px = clientX - (rect.left + rect.width / 2);
  const py = clientY - (rect.top + rect.height / 2);
  const tilt = THREE.MathUtils.degToRad(CARD_ORBIT_TILT_DEG);
  const ox = px * Math.cos(tilt) + py * Math.sin(tilt);
  const oy = -px * Math.sin(tilt) + py * Math.cos(tilt);
  return Math.atan2(oy / b, ox / a);
}

// 잡은 카드를 yaw만큼 옮긴다. 한 번에 크게 옮기면 옆 카드를 뚫고 지나갈 수 있으므로 잘게
// 나눠 옮기면서 매번 충돌을 풀어, 잡은 카드가 옆 카드를 밀어내게 한다.
function moveGrabbedCards(yaw, moveMs) {
  if (!cardGrab) return;
  const instant = THREE.MathUtils.clamp(yaw / Math.max(moveMs, 4), -FLING_MAX_RAD_PER_MS, FLING_MAX_RAD_PER_MS);
  cardGrab.omega = cardGrab.omega * 0.5 + instant * 0.5; // 밀려나는 카드가 받을 속도(손의 속도)
  const steps = Math.max(1, Math.ceil(Math.abs(yaw) / CARD_MAX_SUBSTEP_RAD));
  const step = yaw / steps;
  for (let s = 0; s < steps; s++) {
    cardGrab.indices.forEach((i) => { cardTheta[i] += step; });
    resolveCardCollisions();
  }
}

function isCardHeld(i) {
  return !!cardGrab && cardGrab.indices.includes(i);
}

// 맞닿거나 겹친 카드 쌍을 떼어 놓고, 서로 다가가던 중이면 탄성 충돌로 속도를 주고받는다.
// 여러 장이 한 줄로 붙어 있을 때(요람처럼) 충격이 끝까지 전달되도록 몇 번 반복한다.
function resolveCardCollisions() {
  const n = cardEls.length;
  for (let pass = 0; pass < n; pass++) {
    let touched = false;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const d = wrapAngle(cardTheta[j] - cardTheta[i]); // j가 i보다 +θ 쪽에 있으면 양수
        const gap = Math.abs(d);
        if (gap >= CARD_CONTACT_RAD) continue;
        const heldI = isCardHeld(i);
        const heldJ = isCardHeld(j);
        if (heldI && heldJ) continue; // 링 전체를 잡고 있으면 서로의 간격은 변하지 않는다
        touched = true;
        const dir = d >= 0 ? 1 : -1;
        const mi = CARD_MASSES[i] ?? 1;
        const mj = CARD_MASSES[j] ?? 1;

        // 위치: 겹친 만큼 질량에 반비례해 벌린다(잡힌 카드는 움직이지 않는다)
        const wi = heldI ? 0 : 1 / mi;
        const wj = heldJ ? 0 : 1 / mj;
        const overlap = CARD_CONTACT_RAD - gap;
        cardTheta[i] -= dir * overlap * (wi / (wi + wj));
        cardTheta[j] += dir * overlap * (wj / (wi + wj));

        // 속도: 서로 다가가는 중일 때만 충돌 처리
        const vi = heldI ? cardGrab.omega : cardOmega[i];
        const vj = heldJ ? cardGrab.omega : cardOmega[j];
        if ((vi - vj) * dir <= 0) continue;
        if (heldI) {
          cardOmega[j] = THREE.MathUtils.clamp(2 * vi - vj, -FLING_MAX_RAD_PER_MS, FLING_MAX_RAD_PER_MS);
        } else if (heldJ) {
          cardOmega[i] = THREE.MathUtils.clamp(2 * vj - vi, -FLING_MAX_RAD_PER_MS, FLING_MAX_RAD_PER_MS);
        } else {
          // 1차원 완전 탄성 충돌: m·v 합(운동량)과 ½·m·v² 합(운동에너지)이 충돌 전후로 같다
          cardOmega[i] = ((mi - mj) * vi + 2 * mj * vj) / (mi + mj);
          cardOmega[j] = ((mj - mi) * vj + 2 * mi * vi) / (mi + mj);
        }
      }
    }
    if (!touched) break;
  }
}

// 한 프레임 동안의 카드 움직임. 빠를수록 잘게 나눠 계산해(서브스텝) 충돌을 놓치지 않는다.
function stepCardPhysics(dt) {
  let maxSpeed = Math.abs(cardDrift);
  cardOmega.forEach((w, i) => { if (!isCardHeld(i)) maxSpeed = Math.max(maxSpeed, Math.abs(w)); });
  const steps = THREE.MathUtils.clamp(Math.ceil((maxSpeed * dt) / CARD_MAX_SUBSTEP_RAD), 1, 32);
  const h = dt / steps;
  const relax = 1 - Math.exp(-h / CARD_FRICTION_MS);
  for (let s = 0; s < steps; s++) {
    for (let i = 0; i < cardEls.length; i++) {
      if (isCardHeld(i)) continue;
      cardOmega[i] += (cardDrift - cardOmega[i]) * relax; // 궤도 흐름에 대한 상대 속도만 서서히 잃는다
      cardTheta[i] += cardOmega[i] * h;
    }
    resolveCardCollisions();
  }
  if (cardGrab) cardGrab.omega *= Math.exp(-dt / 60); // 잡고 멈춰 있으면 손의 속도는 곧 0이 된다
}

function updateCardOrbit(delta) {
  if (!cardEls.length) return;
  const dt = Math.min(delta, 50); // 탭이 가려졌다 돌아온 첫 프레임에 한 번에 크게 튀지 않도록
  if (dt > 0) stepCardPhysics(dt);
  writeCardOrbitStyles();
}

// 궤도각 θ인 카드의 화면 위치(긴반지름 단위) = 궤도면 (cosθ, 0.38·sinθ)을 -30° 돌린 것.
// sinθ > 0(아래쪽 절반)이 앞이라 크게, 뒤쪽은 작게 그리고 지구본과 겹치는 부분을 가린다(--hole).
function writeCardOrbitStyles() {
  const changed = !cardStylesWritten || cardTheta.some((t, i) => Math.abs(t - (cardLastTheta[i] ?? Infinity)) > 1e-5);
  if (!changed) return;
  const tilt = THREE.MathUtils.degToRad(CARD_ORBIT_TILT_DEG);
  const cosT = Math.cos(tilt);
  const sinT = Math.sin(tilt);
  cardEls.forEach((el, i) => {
    const theta = cardTheta[i];
    cardLastTheta[i] = theta;
    const ox = Math.cos(theta);
    const oy = CARD_ORBIT_FLATTEN * Math.sin(theta);
    const kx = ox * cosT - oy * sinT;
    const ky = ox * sinT + oy * cosT;
    const front = Math.sin(theta);
    const depth = 0.96 + 0.21 * front;
    const behind = front < 0;
    el.style.setProperty('--kx', kx.toFixed(4));
    el.style.setProperty('--ky', ky.toFixed(4));
    el.style.setProperty('--depth', depth.toFixed(3));
    el.style.setProperty('--hole', behind ? '1' : '0');
    el.style.zIndex = String(10 + Math.round(front * 10)); // 앞쪽 카드가 뒤쪽 카드 위로
    // 지구본 뒤로 거의 다 넘어간 카드는 클릭 대상에서 뺀다(중심 거리 < 지구본 반지름)
    const centerDist = Math.hypot(kx, ky) * CARD_ORBIT_A_RATIO; // 지구본 지름 단위
    el.style.pointerEvents = behind && centerDist < 0.5 && !isCardHeld(i) ? 'none' : '';
  });
  cardStylesWritten = true;
}

function clearCardOrbitStyles() {
  cardEls.forEach((el) => {
    ['--kx', '--ky', '--depth', '--hole'].forEach((name) => el.style.removeProperty(name));
    el.style.zIndex = '';
    el.style.pointerEvents = '';
  });
  cardLastTheta.length = 0;
  cardStylesWritten = false;
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

function setupMoon() {
  const stage = container.parentElement; // .hero-background — .hero-globe와 같은 쌓임 맥락이라 z-index로 앞뒤를 바꿀 수 있다
  if (!stage) return;
  try {
    moonRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  } catch (error) {
    moonRenderer = null; // 두 번째 WebGL 컨텍스트를 못 만들면 달 없이 진행한다
    return;
  }
  moonRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  moonEl = moonRenderer.domElement;
  moonEl.className = 'hero-moon';
  moonEl.setAttribute('aria-hidden', 'true');
  stage.appendChild(moonEl);

  moonScene = new THREE.Scene();
  // 반지름 1인 구가 캔버스를 거의 꽉 채우는 거리(1 / sin(FOV/2)보다 살짝 멀리)
  moonCamera = new THREE.PerspectiveCamera(20, 1, 0.1, 20);
  moonCamera.position.set(0, 0, 6);

  const moonTexture = new THREE.TextureLoader().load(
    MOON_TEXTURE_URL,
    undefined,
    undefined,
    (error) => console.warn('[hero-globe-3d] 달 텍스처 로드 실패', error)
  );
  if ('colorSpace' in moonTexture) moonTexture.colorSpace = THREE.SRGBColorSpace;
  moonTexture.anisotropy = moonRenderer.capabilities.getMaxAnisotropy();
  moonMesh = new THREE.Mesh(new THREE.SphereGeometry(1, 48, 48), new THREE.MeshLambertMaterial({ map: moonTexture }));
  moonScene.add(moonMesh);

  // 태양빛(물리 기반 조명이라 π배여야 텍스처 본래 밝기가 된다) + 밤쪽이 완전히 검지 않도록 옅은 지구반사광
  moonLight = new THREE.DirectionalLight(0xffffff, Math.PI * 1.05);
  moonScene.add(moonLight);
  moonScene.add(new THREE.AmbientLight(0xb8c8ff, 0.35));

  resizeMoon();
}

function resizeMoon() {
  if (!moonRenderer || !container) return;
  const size = Math.max(24, Math.round((container.clientWidth || 640) * MOON_SIZE_RATIO));
  moonRenderer.setSize(size, size);
}

// 언어 선택 화면(국기 표시 중)이고 확대하지 않았을 때만 보인다. 언어를 고르거나 지구본을
// 확대하면 서서히 사라지고, 완전히 사라진 뒤에는 그리지 않는다.
function updateMoon(now, delta) {
  if (!moonRenderer) return;
  const wantVisible = flagsActive && zoomMag < 1.03;
  const step = Math.min(delta, 100) / MOON_FADE_MS;
  moonOpacity = THREE.MathUtils.clamp(moonOpacity + (wantVisible ? step : -step), 0, 1);
  if (moonOpacity === 0) {
    moonEl.style.visibility = 'hidden';
    return;
  }
  moonEl.style.visibility = 'visible';

  // 궤도 위치: 궤도면에서 (a·cosθ, b·sinθ)를 화면에서 기울기만큼 돌린다. sinθ > 0인 아래쪽
  // 절반이 보는 사람 쪽(지구본 앞)이다.
  const theta = prefersReducedMotion() ? 0.45 : (now / MOON_PERIOD_MS) * Math.PI * 2;
  const globeSize = container.clientWidth || 640;
  const a = globeSize * MOON_ORBIT_RATIO;
  const b = a * MOON_ORBIT_FLATTEN;
  const ox = a * Math.cos(theta);
  const oy = b * Math.sin(theta);
  const tilt = THREE.MathUtils.degToRad(MOON_ORBIT_TILT_DEG);
  const x = ox * Math.cos(tilt) - oy * Math.sin(tilt);
  const y = ox * Math.sin(tilt) + oy * Math.cos(tilt);
  const depth = Math.sin(theta); // 1 = 가장 앞, -1 = 가장 뒤
  const scale = 1 + 0.14 * depth; // 앞으로 올수록 조금 크게(원근감)

  moonEl.style.transform = `translate(-50%, -50%) translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) scale(${scale.toFixed(3)})`;
  moonEl.style.zIndex = depth > 0 ? '4' : '2'; // .hero-globe(z-index:3)의 앞/뒤
  moonEl.style.opacity = moonOpacity.toFixed(3);

  // 달은 늘 같은 면이 지구를 향한다(조석 고정): 앞면(경도 0°, 로컬 +X)이 지구 쪽을 보게 돌린다
  moonMesh.rotation.y = Math.PI - theta;
  moonLight.position.copy(sunWorldDir);
  moonRenderer.render(moonScene, moonCamera);
}

// 위도·경도 뼈대 격자망(Graticule) 지오메트리 및 셰이더 생성.
// - 위도선: -75° ~ +75° (15° 간격의 평행 원형 링, 적도는 네온 액센트)
// - 경도선: 0° ~ 330° (30° 간격의 대원, 본초자오선은 네온 액센트)
// - aProgress 속성을 통해 0 -> 1로 회전하며 스캔 스파크 효과와 함께 드로잉
function createGraticuleMesh() {
  const positions = [];
  const progressList = [];
  const typeList = []; // 0: 일반 위선, 1: 적도/자오선 액센트, 2: 일반 경선

  const R = 1.002;
  const segmentsPerCircle = 96;

  // 1. 위도선 (Parallels, -75° ~ +75°, 15° 간격)
  const latitudes = [-75, -60, -45, -30, -15, 0, 15, 30, 45, 60, 75];
  latitudes.forEach((latDeg) => {
    const latRad = THREE.MathUtils.degToRad(latDeg);
    const y = R * Math.sin(latRad);
    const r = R * Math.cos(latRad);
    const isEquator = latDeg === 0;
    const typeVal = isEquator ? 1.0 : 0.0;

    for (let i = 0; i < segmentsPerCircle; i++) {
      const theta1 = (i / segmentsPerCircle) * Math.PI * 2;
      const theta2 = ((i + 1) / segmentsPerCircle) * Math.PI * 2;

      // lonToYawDeg 및 latLonToLocalPosition 기준과 정렬
      const x1 = -r * Math.cos(theta1 + Math.PI);
      const z1 = r * Math.sin(theta1 + Math.PI);
      const x2 = -r * Math.cos(theta2 + Math.PI);
      const z2 = r * Math.sin(theta2 + Math.PI);

      positions.push(x1, y, z1, x2, y, z2);

      const p1 = i / segmentsPerCircle;
      const p2 = (i + 1) / segmentsPerCircle;
      progressList.push(p1, p2);
      typeList.push(typeVal, typeVal);
    }
  });

  // 2. 경도선 (Meridians, 0° ~ 330°, 30° 간격 대원)
  for (let lonDeg = 0; lonDeg < 360; lonDeg += 30) {
    const isPrime = lonDeg === 0 || lonDeg === 180;
    const typeVal = isPrime ? 1.0 : 2.0;
    const phi = THREE.MathUtils.degToRad(lonDeg + 180);
    const cosPhi = Math.cos(phi);
    const sinPhi = Math.sin(phi);

    for (let i = 0; i < segmentsPerCircle; i++) {
      const alpha1 = (i / segmentsPerCircle) * Math.PI * 2;
      const alpha2 = ((i + 1) / segmentsPerCircle) * Math.PI * 2;

      const y1 = R * Math.cos(alpha1);
      const sinA1 = Math.sin(alpha1);
      const x1 = -R * sinA1 * cosPhi;
      const z1 = R * sinA1 * sinPhi;

      const y2 = R * Math.cos(alpha2);
      const sinA2 = Math.sin(alpha2);
      const x2 = -R * sinA2 * cosPhi;
      const z2 = R * sinA2 * sinPhi;

      positions.push(x1, y1, z1, x2, y2, z2);

      const p1 = i / segmentsPerCircle;
      const p2 = (i + 1) / segmentsPerCircle;
      progressList.push(p1, p2);
      typeList.push(typeVal, typeVal);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('aProgress', new THREE.Float32BufferAttribute(progressList, 1));
  geometry.setAttribute('aType', new THREE.Float32BufferAttribute(typeList, 1));

  const material = new THREE.ShaderMaterial({
    transparent: true,
    depthTest: true,
    depthWrite: false,
    uniforms: {
      uProgress: { value: 0.0 },
      uOpacity: { value: 0.75 },
      uColorBase: { value: new THREE.Color(0x2fa4b8) },   // 연구실 메인 시안/청록
      uColorAccent: { value: new THREE.Color(0x39ff14) } // 적도·본초자오선 네온 그린
    },
    vertexShader: `
      attribute float aProgress;
      attribute float aType;
      varying float vProgress;
      varying float vType;
      void main() {
        vProgress = aProgress;
        vType = aType;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uProgress;
      uniform float uOpacity;
      uniform vec3 uColorBase;
      uniform vec3 uColorAccent;
      varying float vProgress;
      varying float vType;
      void main() {
        if (vProgress > uProgress) discard;

        // 선두에서 빛을 내며 그려지는 스파크(spark) 헤드
        float head = smoothstep(0.07, 0.0, abs(vProgress - uProgress));
        vec3 baseCol = (vType > 0.5 && vType < 1.5) ? uColorAccent : uColorBase;
        vec3 col = mix(baseCol, vec3(0.9, 1.0, 0.95), head * 0.85);

        float alpha = clamp(uOpacity * (0.8 + head * 0.6), 0.0, 1.0);
        gl_FragColor = vec4(col, alpha);
      }
    `
  });

  return new THREE.LineSegments(geometry, material);
}

// 위도·경도 선의 형성 진행도 및 텍스처 페이드인 갱신 루프
function updateGraticuleAndTextures(now) {
  if (!graticuleMesh || !globeMaterial) return;

  if (shouldSkipIntro() || (!flagsActive && currentTextureFade >= 1.0)) {
    // 홈 복귀/재방문: 위도와 경도 애니메이션을 완전히 빼고 바로 월드맵 이미지 즉시 표시
    graticuleMesh.material.uniforms.uProgress.value = 1.0;
    graticuleMesh.material.uniforms.uOpacity.value = 0.0;
    if (graticuleMesh.visible) graticuleMesh.visible = false;
    if (coreSphereMesh && coreSphereMesh.visible) coreSphereMesh.visible = false;
    if (dayTextureLoaded) {
      globeMaterial.opacity = 1.0;
      currentTextureFade = 1.0;
    }
    return;
  }

  const reducedMotion = prefersReducedMotion();

  // 1. 위경도 선 드로잉 형성 (uProgress: 0 -> 1)
  if (reducedMotion) {
    graticuleMesh.material.uniforms.uProgress.value = 1.0;
  } else {
    const formT = Math.min(1.0, (now - gridFormationStart) / GRID_FORMATION_MS);
    graticuleMesh.material.uniforms.uProgress.value = easeOutCubic(formT);
  }

  // 2. 텍스처 로드 완료 후 페이드인
  const formElapsed = now - gridFormationStart;
  const isLanded = !flagsActive || currentPlace !== null || (camera && camera.position.z < CAMERA_Z_DEFAULT - 0.2);

  if (dayTextureLoaded && (formElapsed >= GRID_MIN_SOLO_MS || reducedMotion)) {
    if (textureFadeStart === null) textureFadeStart = now;
    const fadeT = reducedMotion ? 1.0 : Math.min(1.0, (now - textureFadeStart) / TEXTURE_FADE_MS);
    // 초반 dead-zone 없이 시작부터 부드럽게 살아나는 사인 곡선으로 국기와 동시 표현 극대화
    const easedFade = reducedMotion ? 1.0 : (1 - Math.cos(fadeT * Math.PI)) / 2;
    currentTextureFade = easedFade;

    // 지구본 텍스처 페이드인 (언어/국기 아이콘도 updateFlags에서 이 수치와 동기화되어 함께 페이드인)
    globeMaterial.opacity = easedFade;

    // 텍스처가 나타나면 위경도 선은 초기 강조(0.75)에서 은은한 정밀 HUD(0.18)로 전환, 착지 시 0으로 페이드
    const targetGridOpacity = isLanded ? 0.0 : THREE.MathUtils.lerp(0.75, 0.18, easedFade);
    graticuleMesh.material.uniforms.uOpacity.value = THREE.MathUtils.lerp(
      graticuleMesh.material.uniforms.uOpacity.value,
      targetGridOpacity,
      0.1
    );

    // 페이드 완료 후 차폐 다크 구체는 숨겨 렌더링 최적화
    if (fadeT >= 1.0 && coreSphereMesh && coreSphereMesh.visible) {
      coreSphereMesh.visible = false;
    }
  } else {
    // 텍스처 로딩 중: 뼈대 선만 보이고 국기/언어 아이콘은 숨김
    currentTextureFade = 0;
    const targetGridOpacity = isLanded ? 0.0 : 0.75;
    graticuleMesh.material.uniforms.uOpacity.value = THREE.MathUtils.lerp(
      graticuleMesh.material.uniforms.uOpacity.value,
      targetGridOpacity,
      0.1
    );
  }
}

function onResize() {
  if (!container || !renderer) return;
  const size = container.clientWidth || 640;
  renderer.setSize(size, size);
  camera.aspect = 1;
  camera.updateProjectionMatrix();
  resizeMoon();
  if (flagsActive) {
    // 화면 크기가 바뀌면 "화면을 덮는 배율"도 바뀌므로 현재 배율을 새 범위 안으로 맞춘다
    updateCoverScale();
    setZoomTarget(zoomTargetMag);
    zoomMag = Math.min(zoomMag, maxZoomMag());
  }
  scheduleResolutionUpdate();
}

function animate(now) {
  requestAnimationFrame(animate);
  const delta = now - lastFrameTime;
  lastFrameTime = now;
  let cardFlow = 0; // 이번 프레임의 궤도 흐름 — 지구본이 자전하지 않으면 0(카드는 서서히 멈춘다)
  if (idleSpin && !flagHover && !prefersReducedMotion() && spinGroup) {
    let speedFactor = 1;
    if (spinRampStart !== null) {
      const t = Math.min(1, Math.max(0, (now - spinRampStart) / SPIN_RAMP_MS));
      speedFactor = t * t; // 멈춰 있던 지구가 툭 튀지 않고 서서히 가속되도록 ease-in
      if (t === 1) spinRampStart = null;
    }
    // 확대한 상태에서는 같은 각속도라도 지도가 훨씬 빨리 지나가 보이므로 그만큼 늦춘다
    const spinStep = delta * IDLE_SPIN_PER_MS * speedFactor * rotationScaleForZoom();
    spinGroup.rotation.y += spinStep;
    // 착지 화면에서는 궤도에 자전과 같은 각속도의 흐름을 둔다. 지구본이 오른쪽으로 돌면 앞쪽 표면이
    // 오른쪽으로 움직이므로, 앞쪽(아래) 궤도의 카드도 오른쪽으로 가도록 궤도각이 줄어드는 방향이다.
    if (landedDragEnabled && delta > 0) cardFlow = -spinStep / delta;
  }
  cardDrift = cardFlow;
  if (flagsActive && (flingVelocity.yaw || flingVelocity.pitch)) stepFling(delta);
  if (flagsActive) stepZoom(delta);
  updateCardOrbit(delta);
  scene.updateMatrixWorld(); // 드래그·관성으로 바뀐 회전까지 반영한 뒤 태양 방향·국기 위치를 계산
  updateSunLight(now);
  updateGraticuleAndTextures(now); // 텍스처 페이드인 수치를 먼저 갱신
  updateFlags();                   // 갱신된 수치를 기반으로 국기 레이어 동기화
  updateMoon(now, delta);
  if (capitalMarkerRing && !prefersReducedMotion()) {
    const pulse = 1 + 0.35 * (0.5 + 0.5 * Math.sin(now * 0.0035));
    capitalMarkerRing.scale.setScalar(pulse);
    capitalMarkerRing.material.opacity = 0.55 * (1.35 - pulse);
  }
  renderer.render(scene, camera);
}

// lang: 선택된 언어, place: 착지할 장소 키(국기로 골랐을 때). place가 없으면 그 언어의
// 기본 장소로 간다.
function moveToLanguage(lang, place, userSelected = true) {
  if (!ready) {
    pendingMove = { lang, place, userSelected };
    return;
  }
  const placeKey = HERO_GLOBE_PLACES[place] ? place : (DEFAULT_PLACE_BY_LANG[lang] || 'eg');
  const target = HERO_GLOBE_PLACES[placeKey];
  const isKorea = placeKey === 'kr';

  // 뒤로가기나 상단바의 홈버튼으로 돌아올 땐(!userSelected && shouldSkipIntro()):
  // 착지 모션(줌인·회전)을 건너뛰고, 바로 기본 거리에서 여유롭게 자전하고 있는 시점으로 표시
  if (!userSelected && shouldSkipIntro()) {
    currentPlace = placeKey;
    flagsActive = false;
    idleSpin = true;
    spinResumed = true;
    spinRampStart = null;
    window.clearTimeout(resumeSpinTimer);
    landedDragEnabled = true;
    cardGrab = null;
    dragState = null;
    pinchState = null;
    activePointers.clear();
    stopFling();
    shrinkFrameBack();
    camera.position.z = CAMERA_Z_DEFAULT;
    setCapitalMarkerScale(1);
    if (capitalMarker) capitalMarker.visible = false;
    hideKoreaVideo();
    announceLanded(lang);
    return;
  }

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
  try { sessionStorage.removeItem('hero-intro-requested'); } catch (e) {}
  landedDragEnabled = false; // 새 나라로 이동하는 동안에는 카드 링 드래그도 막는다(착지하면 다시 켠다)
  cardGrab = null;           // 잡고 있던 카드는 놓는다(돌던 카드는 궤도 흐름이 멈춘 만큼 서서히 선다)
  dragState = null;
  pinchState = null;
  activePointers.clear();
  stopFling();
  shrinkFrameBack();
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
      // 2.5초 동안 그 나라에 머문 뒤에는 다시 천천히 자전한다.
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
