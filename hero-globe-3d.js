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
const HERO_GLOBE_CAPITALS = {
  ko: { lat: 37.5665, lon: 126.9780 },  // 서울
  en: { lat: 38.9072, lon: -77.0369 },  // 워싱턴 D.C.
  ja: { lat: 35.6762, lon: 139.6503 },  // 도쿄
  uz: { lat: 41.2995, lon: 69.2401 },   // 타슈켄트
  fr: { lat: 48.8566, lon: 2.3522 },    // 파리
  ar: { lat: 24.7136, lon: 46.6753 }    // 리야드
};

const EARTH_AXIAL_TILT_DEG = 23.4; // 실제 지구 자전축 기울기
const CAMERA_FOV_DEG = 32;
const CAMERA_Z_DEFAULT = 4.8;
const CAMERA_Z_LANDED = 3.4; // "고정"됐을 때의 확대 거리
const TRAVEL_MS = 1600;      // 이동(자전축 회전) 소요 시간
const ZOOM_MS = 900;         // 확대 소요 시간
const IDLE_SPIN_PER_MS = 0.0000015; // 아무 언어도 선택되지 않은 초기 상태의 유휴 자전 속도(rad/ms)

let renderer, scene, camera, axialTiltGroup, framingGroup, spinGroup;
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
  const texture = new THREE.TextureLoader().load('assets/earth-texture.jpg');
  if ('colorSpace' in texture) texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.MeshPhongMaterial({ map: texture, shininess: 5 });
  const globeMesh = new THREE.Mesh(geometry, material);
  spinGroup.add(globeMesh);

  // 초기 자세: 한국(서울)이 정면을 보도록 맞춰 평면 폴백의 기본값과 일치시킨다
  const initial = HERO_GLOBE_CAPITALS.ko;
  spinGroup.rotation.y = THREE.MathUtils.degToRad(lonToYawDeg(initial.lon));
  framingGroup.rotation.x = THREE.MathUtils.degToRad(initial.lat - EARTH_AXIAL_TILT_DEG);
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

  const myToken = ++travelToken;

  const yawFrom = THREE.MathUtils.radToDeg(spinGroup.rotation.y);
  const yawDelta = shortestDelta(yawFrom, lonToYawDeg(target.lon));
  const pitchFrom = THREE.MathUtils.radToDeg(framingGroup.rotation.x);
  const pitchTo = target.lat - EARTH_AXIAL_TILT_DEG;
  const camFrom = camera.position.z;

  if (prefersReducedMotion()) {
    spinGroup.rotation.y = THREE.MathUtils.degToRad(yawFrom + yawDelta);
    framingGroup.rotation.x = THREE.MathUtils.degToRad(pitchTo);
    camera.position.z = CAMERA_Z_LANDED;
    return;
  }

  const travelStart = performance.now();

  function travelStep(now) {
    if (myToken !== travelToken) return; // 도중에 새 언어로 바뀌면 이 루프는 중단
    const t = Math.min(1, (now - travelStart) / TRAVEL_MS);
    const eased = easeInOutCubic(t);
    spinGroup.rotation.y = THREE.MathUtils.degToRad(yawFrom + yawDelta * eased);
    framingGroup.rotation.x = THREE.MathUtils.degToRad(pitchFrom + (pitchTo - pitchFrom) * eased);
    if (t < 1) {
      requestAnimationFrame(travelStep);
    } else {
      zoomStep(performance.now());
    }
  }

  function zoomStep(zoomStart) {
    const start = zoomStart;
    function step(now) {
      if (myToken !== travelToken) return;
      const t = Math.min(1, (now - start) / ZOOM_MS);
      const eased = easeInOutCubic(t);
      camera.position.z = camFrom + (CAMERA_Z_LANDED - camFrom) * eased;
      if (t < 1) {
        requestAnimationFrame(step);
      }
      // t===1: 확대된 상태로 고정(lock). 더 이상 아무것도 움직이지 않는다.
    }
    requestAnimationFrame(step);
  }

  requestAnimationFrame(travelStep);
}

window.HeroGlobe3D = { moveToLanguage };

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
