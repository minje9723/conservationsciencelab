// Home page specific functionality

// Hero Video and Content Animation
function initLegacyHeroVideoAnimation() {
  const heroVideo = document.getElementById('heroVideo');
  const heroContent = document.getElementById('heroContent');
  const heroOverlay = document.querySelector('.hero-overlay');
  const heroBackground = document.querySelector('.hero-background');
  const header = document.querySelector('header');
  const loadingIndicator = document.getElementById('videoLoadingIndicator');
  const skipIntroButton = document.getElementById('skipIntroButton');

  if (!heroVideo || !heroContent) return;

  // Check if intro has already played in this session
  const introPlayed = sessionStorage.getItem('introPlayed');

  if (introPlayed) {
    // Skip intro animation
    if (loadingIndicator) loadingIndicator.style.display = 'none';

    if (heroVideo) {
      heroVideo.pause();
      heroVideo.style.display = 'none';
    }

    if (skipIntroButton) skipIntroButton.style.display = 'none';

    if (heroBackground) {
      heroBackground.style.opacity = '0';
    }

    if (heroOverlay) {
      heroOverlay.style.opacity = '0';
    }

    // Show header immediately
    if (header) {
      header.style.visibility = 'visible';
      header.style.opacity = '1';
      header.style.background = 'rgba(255, 255, 255, 0.95)';
    }

    // Show content immediately
    heroContent.style.visibility = 'visible';
    heroContent.style.opacity = '1';
    heroContent.style.transform = 'translateY(0)';

    return;
  }

  // Mark intro as played for future visits in this session
  sessionStorage.setItem('introPlayed', 'true');

  // 헤더 바 초기 숨김 (배경 포함)
  if (header) {
    header.style.opacity = '0';
    header.style.visibility = 'hidden';
    header.style.background = 'transparent';
    header.style.transition = 'opacity 1s ease, visibility 0s 1s, background 0s 0s';
  }

  // 비디오 로딩 상태 관리
  function hideLoadingIndicator() {
    if (loadingIndicator) {
      loadingIndicator.classList.add('hidden');
      setTimeout(() => {
        loadingIndicator.style.display = 'none';
      }, 500);
    }
  }

  // 비디오가 재생 가능할 때 로딩 인디케이터 숨김
  heroVideo.addEventListener('canplay', hideLoadingIndicator);
  heroVideo.addEventListener('loadeddata', hideLoadingIndicator);

  // 화면 크기에 따라 적절한 비디오 소스 선택
  function setVideoSource() {
    const isMobile = window.innerWidth <= 768;
    const desktopVideo = 'assets/sector banner/home sector banner.mp4';
    const mobileVideo = 'assets/sector banner/비디오 프로젝트 4 MOBILE.mp4';

    const videoSource = heroVideo.querySelector('source');
    const newSource = isMobile ? mobileVideo : desktopVideo;

    // 현재 소스와 다른 경우에만 변경
    if (videoSource) {
      const currentSrc = videoSource.src.split('/').pop();
      const newSrc = newSource.split('/').pop();

      if (currentSrc !== newSrc) {
        videoSource.src = newSource;
        heroVideo.load();
        heroVideo.play().catch(err => console.log('Video play failed:', err));
      }
    }
  }

  // 초기 비디오 소스 설정
  setVideoSource();

  let introFinished = false;

  function finishHeroIntro() {
    if (introFinished) return;
    introFinished = true;

    heroVideo.pause();
    if (skipIntroButton) {
      skipIntroButton.classList.add('hidden');
      skipIntroButton.setAttribute('aria-hidden', 'true');
    }

    heroVideo.style.transition = 'opacity 1s ease';
    heroVideo.style.opacity = '0';

    if (heroBackground) {
      heroBackground.style.transition = 'opacity 1s ease';
      heroBackground.style.opacity = '0';
    }

    if (heroOverlay) {
      heroOverlay.style.transition = 'opacity 1s ease';
      heroOverlay.style.opacity = '0';
    }

    if (header) {
      header.style.transition = 'opacity 1s ease, visibility 0s 0s, background 1s ease';
      header.style.visibility = 'visible';
      header.style.opacity = '1';
      header.style.background = 'rgba(255, 255, 255, 0.95)';
    }

    setTimeout(() => {
      heroContent.style.visibility = 'visible';
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    }, 300);
  }

  if (skipIntroButton) {
    skipIntroButton.addEventListener('click', finishHeroIntro);
  }

  // 화면 크기 변경 시 비디오 소스 업데이트 (디바운스 적용)
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const wasPlaying = !heroVideo.paused;
      setVideoSource();
      if (wasPlaying) {
        heroVideo.play().catch(err => console.log('Video play failed:', err));
      }
    }, 250);
  });

  // 초기 상태: 컨텐츠 완전히 숨김 (CSS에서 이미 설정되어 있음)
  heroContent.style.transition = 'opacity 1.5s ease, transform 1.5s ease, visibility 0s 0s';

  // 비디오 재생 완료 이벤트
  heroVideo.addEventListener('ended', () => {
    finishHeroIntro();
  });

  // 비디오 로드 실패 시 바로 컨텐츠와 헤더 표시
  heroVideo.addEventListener('error', () => {
    if (header) {
      header.style.visibility = 'visible';
      header.style.opacity = '1';
      header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
    heroContent.style.visibility = 'visible';
    heroContent.style.opacity = '1';
    heroContent.style.transform = 'translateY(0)';
  });

  // 비디오가 매우 짧거나 이미 끝난 경우 대비
  if (heroVideo.ended) {
    if (header) {
      header.style.visibility = 'visible';
      header.style.opacity = '1';
      header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
    heroContent.style.visibility = 'visible';
    heroContent.style.opacity = '1';
    heroContent.style.transform = 'translateY(0)';
  }
}

// 전면 날씨 오버레이(styles/hero-weather.css)는 꺼둔다. 대신 같은 API 데이터를
// 지구본 자체의 주야간/구름 표현에 쓴다 (renderHeroGlobeSky 참고).
// 화면 전체 오버레이를 다시 켜려면 initHomePage()에서 renderHeroWeather() 호출을 되살리면 된다.
const HERO_WEATHER_LOCATION = { lat: 36.308, lon: 126.897 }; // 한국전통문화대학교(부여)
const HERO_WEATHER_CATEGORY_CLASSES = [
  'weather-clear', 'weather-cloudy', 'weather-fog',
  'weather-rain', 'weather-snow', 'weather-storm'
];

function mapWeatherCodeToCategory(code) {
  if (code === undefined || code === null) return null;
  if (code === 0) return 'weather-clear';
  if (code >= 1 && code <= 3) return 'weather-cloudy';
  if (code === 45 || code === 48) return 'weather-fog';
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return 'weather-rain';
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return 'weather-snow';
  if (code >= 95 && code <= 99) return 'weather-storm';
  return 'weather-cloudy';
}

async function renderHeroWeather() {
  const heroSection = document.querySelector('.hero-section');
  if (!heroSection) return;

  try {
    const { lat, lon } = HERO_WEATHER_LOCATION;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,is_day&timezone=Asia%2FSeoul`;
    const response = await fetch(url);
    if (!response.ok) return;

    const data = await response.json();
    const weatherClass = mapWeatherCodeToCategory(data.current?.weather_code);
    if (!weatherClass) return;
    const isNight = Number(data.current?.is_day) === 0;

    heroSection.classList.remove(...HERO_WEATHER_CATEGORY_CLASSES, 'weather-night');
    heroSection.classList.add(weatherClass);
    if (isNight) heroSection.classList.add('weather-night');
  } catch (error) {
    // 오프라인이거나 API 요청이 실패하면 조용히 기본 배경을 유지한다
  }
}

// 지구본 표시 위치를 선택된 언어의 대표 국가로 부드럽게 이동시킨다.
// 기본(초기) 위치는 대한민국이며, 언어를 바꾸면 그 나라 위치로 트랜지션된다.
// position 값은 "경도를 지구본 텍스처(2:1 등장방형도법, background-size:200% 100%)의
// background-position-x(%)로 환산"해서 미리 계산해둔 상수다.
//   공식: P% = 200 * (((경도+180)/360 - 0.25) mod 1)
// landingScale은 "줌인했을 때 그 나라가 원의 약 80%를 채우도록" 나라의 실제
// 경도 폭(도)을 기준으로 계산한 배율이다.
//   공식: scale = (기준폭 180° * 0.8) / 나라의 경도 폭
// 단, 한국처럼 경도 폭이 아주 좁은 나라는 계산값이 너무 커져 텍스처 해상도상
// 심하게 깨지므로 2.8배로 clamp 했다.
const HERO_GLOBE_LANGUAGE_POSITIONS = {
  ko: { position: '120.6% 0', landingScale: 2.8 },  // 대한민국 (서울 127°E, 경도 폭 약 7°) — 기본값
  en: { position: '197.2% 0', landingScale: 2.53 }, // 미국 (중부 -95°E, 본토 경도 폭 약 57°)
  ja: { position: '127.6% 0', landingScale: 2.8 },  // 일본 (도쿄 139.7°E, 경도 폭 약 17°)
  uz: { position: '88.4% 0', landingScale: 2.8 },   // 우즈베키스탄 (타슈켄트 69.2°E, 경도 폭 약 17°)
  fr: { position: '51.3% 0', landingScale: 2.8 },   // 프랑스 (파리 2.35°E, 경도 폭 약 13°)
  ar: { position: '75.9% 0', landingScale: 2.8 }    // 사우디아라비아 (리야드 46.7°E, 경도 폭 약 21°)
};

// 선택된 언어의 대표 도시 좌표(위도, 경도) — hero-globe-3d.js의 HERO_GLOBE_CAPITALS와
// 같은 나라를 가리킨다. renderHeroGlobeSky()가 "그 나라가 지금 실제로 낮인지 밤인지"를
// 계산하고, 구름 데이터를 그 나라 기준으로 가져오는 데 쓴다.
const HERO_GLOBE_CAPITAL_COORDS = {
  ko: { lat: 37.5665, lon: 126.9780 },
  en: { lat: 38.9072, lon: -77.0369 },
  ja: { lat: 35.6762, lon: 139.6503 },
  uz: { lat: 41.2995, lon: 69.2401 },
  fr: { lat: 48.8566, lon: 2.3522 },
  ar: { lat: 24.7136, lon: 46.6753 }
};

// 지구본 원 자체는 그대로 두고, 안쪽 지도(.hero-globe-surface)만 그 나라로
// 이동(pan)한 뒤, 도착한 자리에서 줌인해 그 나라가 확대된 상태로 계속 유지된다
// (3D 버전의 "착지 후 확대 고정"과 동일한 동작). 이미 다른 나라가 확대된
// 상태에서 언어를 바꾸면: 먼저 줌아웃 → 이동(pan) → 새 나라로 다시 줌인
// 순서로 진행한다(3D 버전의 줌아웃→회전 이동→줌인 루틴과 동일). 각 단계의
// 대기 시간은 hero-globe.css의 transition 시간과 맞춰뒀다.
const HERO_GLOBE_ZOOM_MS = 600;  // hero-globe.css의 transform transition(0.6s)과 일치
const HERO_GLOBE_TRAVEL_PAN_MS = 1100; // hero-globe.css의 background-position transition(1.1s)과 일치
let heroGlobeTravelTimers = [];

// hero-globe-3d.js가 로드되지 않거나(WebGL 미지원, file:// 프로토콜에서
// ES 모듈이 CORS로 막히는 경우, CDN 접근 실패 등) 실패했을 때를 위한 평면
// 폴백은 원래 언어를 바꿀 때만 background-position이 전환(transition)되고
// 그 외에는 완전히 정지해 있었다("지구본 애니메이션이 작동하지 않는다"는
// 문제의 실제 원인). 3D 버전의 유휴 자전(idleSpin)과 동일한 동작을 평면
// 버전에서도 재현해, 아직 언어를 선택하지 않은 기본 상태에서는 항상
// 지도가 천천히 흘러가도록 한다.
let heroGlobeIdleActive = true;
let heroGlobeIdleFrame = null;
let heroGlobeIdlePercent = null; // background-position-x(%). 첫 프레임에 현재 값으로 초기화
// hero-globe-3d.js의 currentLang과 동일한 역할. 아직 어느 나라에도 착지하지 않은
// 상태(null)에서 시작하므로, 첫 착지는 'ko'여도 항상 실제 이동(줌인) 애니메이션을 거친다.
// "첫 방문자에게는 자동 착지하지 않는다"는 판단은 이 값이 아니라
// moveHeroGlobeToLanguage()의 hero-landed/userSelected 조건이 담당한다.
let heroGlobeCurrentLang = null;
const HERO_GLOBE_IDLE_PERCENT_PER_MS = 0.0022; // 200%(한 바퀴)를 약 90초에 도는 속도

// 히어로 첫 화면 상태(<html> 클래스, styles/hero-globe.css가 이 클래스로 표시 여부를 전환):
//   (없음)          첫 방문 — 지구본 자전 + 수도별 국기만 표시
//   hero-traveling  첫 선택 직후 착지 애니메이션 중 — 국기만 사라짐
//   hero-landed     착지 완료 — 제목·통계 카드 링·식단/포디움 패널 표시(이후 계속 유지)
function isHeroLanded() {
  return document.documentElement.classList.contains('hero-landed');
}

function markHeroLanded() {
  const root = document.documentElement;
  root.classList.remove('hero-traveling');
  root.classList.add('hero-landed');
}

window.addEventListener('heroglobe:landed', markHeroLanded);

function isHeroGlobe3DActive() {
  return !!document.querySelector('.hero-globe.hero-globe-3d-active');
}

function stepHeroGlobeIdleSpin(surface, lights, now) {
  const delta = now - (stepHeroGlobeIdleSpin.lastTime ?? now);
  stepHeroGlobeIdleSpin.lastTime = now;
  heroGlobeIdlePercent = (heroGlobeIdlePercent + delta * HERO_GLOBE_IDLE_PERCENT_PER_MS) % 200;
  const position = `${heroGlobeIdlePercent}% 0`;
  surface.style.backgroundPosition = position;
  if (lights) lights.style.backgroundPosition = position; // 야간 불빛 레이어도 주간 텍스처와 같은 지점을 가리키도록 동기화
  heroGlobeIdleFrame = window.requestAnimationFrame((t) => stepHeroGlobeIdleSpin(surface, lights, t));
}

function startHeroGlobeIdleSpin() {
  if (!heroGlobeIdleActive || heroGlobeIdleFrame) return;
  const surface = document.querySelector('.hero-globe-surface');
  if (!surface || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const lights = surface.querySelector('.hero-globe-lights');
  if (heroGlobeIdlePercent === null) heroGlobeIdlePercent = 120.6; // CSS 기본값(한국)과 일치
  surface.style.transition = 'none'; // 매 프레임 값이 바뀌므로 CSS transition과 충돌하지 않게 끔
  if (lights) lights.style.transition = 'none';
  stepHeroGlobeIdleSpin.lastTime = undefined;
  heroGlobeIdleFrame = window.requestAnimationFrame((t) => stepHeroGlobeIdleSpin(surface, lights, t));
}

function stopHeroGlobeIdleSpin(surface) {
  heroGlobeIdleActive = false;
  if (heroGlobeIdleFrame) {
    window.cancelAnimationFrame(heroGlobeIdleFrame);
    heroGlobeIdleFrame = null;
  }
  if (surface) {
    surface.style.transition = ''; // 언어 이동 트랜지션(CSS)이 다시 적용되도록 복원
    const lights = surface.querySelector('.hero-globe-lights');
    if (lights) lights.style.transition = '';
  }
}

function moveHeroGlobeToLanguage(lang, userSelected = false) {
  if (!isHeroLanded()) {
    // 첫 방문: common.js가 페이지 로드 시 기본 언어로 setLang()을 자동 호출하더라도,
    // 사용자가 국기나 언어 드롭다운으로 직접 고르기 전까지는 자전 + 국기 화면을 유지한다
    if (!userSelected) return;
    document.documentElement.classList.add('hero-traveling');
  }

  // hero-globe-3d.js가 WebGL로 실제 3D 구체를 그리고 있다면 그쪽에도 같은
  // 언어를 전달해 자전축 기준 회전으로 이동시킨다. (실패/미지원 시에는
  // window.HeroGlobe3D 자체가 없으므로 아래 평면 폴백만 동작한다)
  if (window.HeroGlobe3D) {
    window.HeroGlobe3D.moveToLanguage(lang);
  }

  const surface = document.querySelector('.hero-globe-surface');
  if (!surface) return;
  const pin = document.querySelector('.hero-globe-pin'); // 수도 핀포인트. 줌인/줌아웃에 맞춰 크기도 같이 비례한다
  const lights = surface.querySelector('.hero-globe-lights'); // 야간 불빛 레이어. 주간 텍스처와 같은 지점을 가리키도록 계속 동기화한다

  if (heroGlobeCurrentLang === lang) return; // 이미 그 나라(유휴 자전 포함)라면 아무것도 하지 않는다
  heroGlobeCurrentLang = lang;
  renderHeroGlobeSky(); // 새로 선택된 나라 기준으로 주야간 표현을 다시 계산한다

  const target = HERO_GLOBE_LANGUAGE_POSITIONS[lang] || HERO_GLOBE_LANGUAGE_POSITIONS.ko;
  const { position, landingScale } = target;
  const wasLanding = surface.classList.contains('is-landing'); // 이전 나라가 확대되어 있던 상태였는지

  stopHeroGlobeIdleSpin(surface);

  // 진행 중이던 이전 이동 애니메이션이 있으면 취소하고 새로 시작한다
  heroGlobeTravelTimers.forEach(timerId => window.clearTimeout(timerId));
  heroGlobeTravelTimers = [];
  surface.classList.remove('is-landing'); // 줌아웃 시작(이미 줌아웃 상태였다면 아무 변화 없음)
  if (pin) pin.classList.remove('is-landing');
  surface.style.setProperty('--globe-landing-scale', landingScale);

  // 3D 버전이 활성화돼 있으면 착지 시점은 hero-globe-3d.js가 'heroglobe:landed'
  // 이벤트로 알려준다. 평면 폴백만 동작 중일 때는 아래 트랜지션 타이머 끝에서 직접 착지 처리한다.
  const landsHere = !isHeroGlobe3DActive();

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) {
    surface.style.backgroundPosition = position;
    if (lights) lights.style.backgroundPosition = position;
    surface.classList.add('is-landing'); // 애니메이션 없이도 확대된 상태로 바로 고정
    if (pin) pin.classList.add('is-landing');
    if (landsHere) markHeroLanded();
    return;
  }

  // 이전에 확대되어 있었다면 줌아웃 트랜지션이 끝날 때까지 기다렸다가 이동(pan)을
  // 시작하고, 그렇지 않았다면(예: 최초 유휴 상태) 곧바로 이동한다
  const panDelay = wasLanding ? HERO_GLOBE_ZOOM_MS : 0;
  heroGlobeTravelTimers.push(window.setTimeout(() => {
    surface.style.backgroundPosition = position; // 해당 국가로 이동(pan)
    if (lights) lights.style.backgroundPosition = position;
    heroGlobeTravelTimers.push(window.setTimeout(() => {
      surface.classList.add('is-landing'); // 도착 지점에서 그 나라가 원의 약 80%를 채우도록 줌인
      if (pin) pin.classList.add('is-landing'); // 핀도 지도 확대에 비례해 같이 커진다
      if (landsHere) heroGlobeTravelTimers.push(window.setTimeout(markHeroLanded, HERO_GLOBE_ZOOM_MS));
    }, HERO_GLOBE_TRAVEL_PAN_MS));
  }, panDelay));
}

// 휴대폰에서 좌우로 넘기는 식단·포디움 카드(.hero-panels) 아래 점 표시를 현재 스크롤
// 위치에 맞춘다. 넓은 화면에서는 .hero-panels가 display:contents라 스크롤이 생기지 않는다.
function initHeroPanelsPager() {
  const scroller = document.querySelector('.hero-panels');
  const dots = document.querySelectorAll('.hero-panels-dots span');
  if (!scroller || !dots.length) return;
  const update = () => {
    const max = scroller.scrollWidth - scroller.clientWidth;
    const index = max > 0 ? Math.round((scroller.scrollLeft / max) * (dots.length - 1)) : 0;
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === index));
  };
  scroller.addEventListener('scroll', update, { passive: true });
  update();
}

// 지구본 위 국기를 누르면 상단 언어 드롭다운에서 같은 언어를 고른 것과 완전히 똑같이
// 처리한다(common.js의 .lang-option 클릭 핸들러: 버튼 상태 갱신 + setLang(lang, true)).
function initHeroGlobeFlags() {
  document.querySelectorAll('.hero-globe-flag').forEach(flag => {
    flag.addEventListener('click', () => {
      const option = document.getElementById(`lang-${flag.dataset.lang}`);
      if (option) option.click();
    });
  });
}

// 실시간 태양 직하점(subsolar point) 계산. hero-globe-3d.js의 getSubsolarPoint()와
// 동일한 공식(별도 모듈이라 이 파일에도 똑같이 둔다) — 적위와 균시차를 이용한
// 표준 근사식으로, 장식용 명암 표현에 충분한 정확도(대략 ±0.5° 이내)를 가진다.
function getSubsolarPoint(date) {
  const rad = Math.PI / 180;
  const jd = date.getTime() / 86400000 + 2440587.5;
  const n = jd - 2451545.0;

  const meanLon = (280.460 + 0.9856474 * n) % 360;
  const meanAnomaly = (357.528 + 0.9856003 * n) % 360;
  const eclipticLon = meanLon
    + 1.915 * Math.sin(meanAnomaly * rad)
    + 0.020 * Math.sin(2 * meanAnomaly * rad);
  const obliquity = 23.439 - 0.0000004 * n;

  const lat = Math.asin(Math.sin(obliquity * rad) * Math.sin(eclipticLon * rad)) / rad;

  let rightAscension = Math.atan2(
    Math.cos(obliquity * rad) * Math.sin(eclipticLon * rad),
    Math.cos(eclipticLon * rad)
  ) / rad;
  rightAscension = ((rightAscension % 360) + 360) % 360;

  let eqTimeDeg = meanLon - rightAscension;
  if (eqTimeDeg > 180) eqTimeDeg -= 360;
  if (eqTimeDeg < -180) eqTimeDeg += 360;

  const utcHours = date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600;
  let lon = 15 * (12 - utcHours) - eqTimeDeg;
  lon = ((lon + 180) % 360 + 360) % 360 - 180;

  return { lat, lon };
}

function normalizeAngleDeg(deg) {
  return ((deg % 360) + 360) % 360;
}

// 지구본에 애플 지구 배경화면처럼 "현재 태양 위치에 따른 주야간 경계"를 얹는다.
// 지금 화면에 표시된(선택된 언어의) 나라의 경도와 실시간 태양 직하점의 경도
// 차이로 그 나라의 실제 태양 시간각을 구해, 정확히 그 나라가 지금 낮인지
// 밤인지·명암 경계가 어디쯤인지를 계산한다(캠퍼스 고정 시각이 아니라 언어를
// 바꿀 때마다 그 나라 기준으로 다시 계산됨). 구름층은 그 나라 좌표로 Open-Meteo에서
// 받아오되, 네트워크 요청과 무관하게 명암 계산은 항상 즉시 적용된다.
function renderHeroGlobeSky() {
  const globe = document.querySelector('.hero-globe');
  if (!globe) return;

  const coords = HERO_GLOBE_CAPITAL_COORDS[heroGlobeCurrentLang] || HERO_GLOBE_CAPITAL_COORDS.ko;
  const sun = getSubsolarPoint(new Date());

  let hourAngle = coords.lon - sun.lon; // 0°=태양이 남중(정오), ±180°=자정
  if (hourAngle > 180) hourAngle -= 360;
  if (hourAngle < -180) hourAngle += 360;

  // 태양 고도의 대략적인 근사치(위도 효과는 무시한 단순화) — 정오에 1, 자정에 -1
  const dayFactor = Math.cos(hourAngle * Math.PI / 180);
  const terminatorAngle = normalizeAngleDeg(180 + hourAngle);
  const nightOpacity = Math.max(0.12, Math.min(0.6, 0.3 * (1 - dayFactor)));

  globe.style.setProperty('--globe-terminator-angle', `${terminatorAngle}deg`);
  globe.style.setProperty('--globe-night-opacity', nightOpacity);

  // 구름층은 부가 정보라 실패해도 명암 표현에는 영향 없음
  fetchHeroGlobeCloudOpacity(coords).then(cloudOpacity => {
    if (cloudOpacity !== null) globe.style.setProperty('--globe-cloud-opacity', cloudOpacity);
  });
}

async function fetchHeroGlobeCloudOpacity({ lat, lon }) {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=cloud_cover`;
    const response = await fetch(url);
    if (!response.ok) return null;
    const data = await response.json();
    const cloudCover = Number(data.current?.cloud_cover);
    return Number.isFinite(cloudCover) ? Math.min(1, Math.max(0, cloudCover / 100)) * 0.5 : null;
  } catch (error) {
    return null; // 오프라인이거나 요청 실패 시 기존 값을 그대로 유지
  }
}

// 태양 위치는 천천히 바뀌므로 5분마다 한 번씩만 다시 계산해도 충분하다
let heroGlobeSkyInterval = null;
function startHeroGlobeSkyRefresh() {
  if (heroGlobeSkyInterval) return;
  heroGlobeSkyInterval = window.setInterval(renderHeroGlobeSky, 5 * 60 * 1000);
}

// Minimal interactive spatial energy animation for the home hero.
function initHeroVideoAnimation() {
  const canvas = document.getElementById('heroLineCanvas');
  const heroContent = document.getElementById('heroContent');
  const header = document.querySelector('header');

  if (!canvas || !heroContent) return;

  const context = canvas.getContext('2d');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pointer = { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 };
  let animationFrame;

  function resizeCanvas() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = canvas.clientWidth * ratio;
    canvas.height = canvas.clientHeight * ratio;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function updatePointer(event) {
    const point = event.touches?.[0] || event;
    const bounds = canvas.getBoundingClientRect();
    pointer.targetX = Math.max(0, Math.min(1, (point.clientX - bounds.left) / bounds.width));
    pointer.targetY = Math.max(0, Math.min(1, (point.clientY - bounds.top) / bounds.height));
  }

  function draw(time = 0) {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const progress = time * 0.00008;

    pointer.x += (pointer.targetX - pointer.x) * 0.04;
    pointer.y += (pointer.targetY - pointer.y) * 0.04;
    context.clearRect(0, 0, width, height);

    context.fillStyle = '#f7fafb';
    context.fillRect(0, 0, width, height);

    const centerX = width * (0.5 + (pointer.x - 0.5) * 0.08);
    const centerY = height * (0.5 + (pointer.y - 0.5) * 0.08);
    const baseRadius = Math.min(width, height) * 0.12;

    // An original spatial-wave motif: compressed rings expand and dissolve slowly.
    for (let ring = 0; ring < 9; ring += 1) {
      const pulse = (Math.sin(progress * 1.4 - ring * 0.55) + 1) * 0.5;
      const radius = baseRadius + ring * Math.min(width, height) * 0.065 + pulse * 8;
      const rotation = progress * 0.12 + ring * 0.3;
      const gradient = context.createLinearGradient(
        centerX - radius,
        centerY - radius,
        centerX + radius,
        centerY + radius
      );
      gradient.addColorStop(0, 'rgba(88, 61, 190, 0)');
      gradient.addColorStop(0.48, `rgba(106, 78, 211, ${0.08 + pulse * 0.07})`);
      gradient.addColorStop(0.56, `rgba(50, 181, 202, ${0.1 + pulse * 0.08})`);
      gradient.addColorStop(1, 'rgba(88, 61, 190, 0)');

      context.save();
      context.translate(centerX, centerY);
      context.rotate(rotation);
      context.beginPath();
      context.ellipse(0, 0, radius * 1.7, radius * 0.52, 0, 0, Math.PI * 2);
      context.strokeStyle = gradient;
      context.lineWidth = 1.5 + pulse;
      context.stroke();
      context.restore();
    }

    const core = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, baseRadius * 2.2);
    core.addColorStop(0, 'rgba(117, 82, 224, 0.16)');
    core.addColorStop(0.45, 'rgba(69, 177, 205, 0.08)');
    core.addColorStop(1, 'rgba(247, 250, 251, 0)');
    context.fillStyle = core;
    context.fillRect(0, 0, width, height);

    if (!reducedMotion) animationFrame = requestAnimationFrame(draw);
  }

  resizeCanvas();
  draw();
  window.addEventListener('resize', resizeCanvas, { passive: true });
  canvas.addEventListener('pointermove', updatePointer, { passive: true });
  canvas.addEventListener('touchmove', updatePointer, { passive: true });

  if (header) {
    header.style.visibility = 'visible';
    header.style.opacity = '1';
    header.style.background = 'transparent';
  }
  heroContent.style.visibility = 'visible';
  heroContent.style.opacity = '1';
  heroContent.style.transform = 'translateY(0)';

  window.addEventListener('pagehide', () => cancelAnimationFrame(animationFrame), { once: true });
}

// Counter Animation for Impact Metrics
function animateCounters() {
  const counters = document.querySelectorAll('.metric-number[data-target], .hero-metric-number[data-target]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-target'));

        // Skip if already animated
        if (counter.getAttribute('data-animated') === 'true') {
          return;
        }

        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60 FPS
        let current = 0;

        counter.setAttribute('data-animated', 'true');

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.textContent = target;
            clearInterval(timer);
          } else {
            counter.textContent = Math.floor(current);
          }
        }, 16);

        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

// Scroll-triggered animations
function initScrollAnimations(selector = null) {
  // If specific selector provided, only observe those elements
  // Otherwise observe static elements
  // .hero-impact-card는 지구본 카드 링으로 옮겨져 착지 시점에 styles/hero-globe.css의
  // 등장 애니메이션으로 나타나므로 스크롤 애니메이션 대상에서 뺐다.
  const staticSelectors = '.impact-card, .timeline-card, .spotlight-item, .contact-info-item, .contact-form-card';
  const targetSelector = selector || staticSelectors;

  const animatedElements = document.querySelectorAll(targetSelector);

  if (animatedElements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Get the stagger index from the element's data attribute
        const staggerIndex = parseInt(entry.target.dataset.staggerIndex) || 0;
        // Add staggered delay for grid items
        setTimeout(() => {
          entry.target.classList.add('animate-in');
        }, staggerIndex * 150); // 150ms delay between each item for clearer cascade effect
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters viewport
  });

  // Add stagger index to each element and observe
  animatedElements.forEach((element, index) => {
    element.classList.add('animate-on-scroll');
    element.dataset.staggerIndex = index;
    observer.observe(element);
  });
}

// Add staggered animation for section headers
function animateSectionHeaders() {
  const sectionHeaders = document.querySelectorAll('.section-header');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -30px 0px'
  });

  sectionHeaders.forEach(header => {
    header.classList.add('animate-on-scroll');
    observer.observe(header);
  });
}

// Parallax effect for background elements
function initParallaxEffects() {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.timeline-header');

    parallaxElements.forEach(element => {
      const speed = 0.1;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}

// Load Featured Projects
function loadFeaturedProjects() {
  const projectsGrid = document.getElementById('featuredProjectsGrid');
  const desktopLayout = document.getElementById('projectsDesktopLayout');
  if ((!projectsGrid && !desktopLayout) || typeof projects === 'undefined') return;

  // Featured Project IDs - 주요 연구 프로젝트 4개
  // 138: 이집트 룩소르 문화유산 복원 (2024~)
  // 152: 정림사지 기록화 사업_2차년도 (2026)
  // 157: 서산 개심사 목조아미타여래좌상 국보 승격 연구 (2025)
  // 148: 서초 관현사 목조관음보살좌상 개금층 층위 분석 (2026)
  const featuredProjectIds = [138, 152, 157, 148];

  // Get featured projects by IDs, or fall back to first 4 if IDs not found
  let featuredProjects = featuredProjectIds
    .map(id => projects.find(p => p.id === id))
    .filter(p => p !== undefined);

  // If not enough projects found, fill with first available projects
  if (featuredProjects.length < 4) {
    featuredProjects = projects.slice(0, 4);
  }
  const currentLang = document.documentElement.lang || 'ko';

  projectsGrid.innerHTML = featuredProjects.map(project => {
    const title = currentLang === 'ko' ? project.title_ko : project.title_en;
    const description = currentLang === 'ko' ? project.description_ko : project.description_en;
    const categoryNames = {
      'excavated-conservation': currentLang === 'ko' ? '보존처리' : 'Conservation',
      'site-investigation': currentLang === 'ko' ? '현장조사' : 'Investigation',
      'designation-research': currentLang === 'ko' ? '지정연구' : 'Designation',
      'preservation-research': currentLang === 'ko' ? '보존연구' : 'Preservation',
      'restoration-research': currentLang === 'ko' ? '복원연구' : 'Restoration',
      'digital-archiving': currentLang === 'ko' ? '아카이빙' : 'Archiving'
    };

    // Use project image if available, otherwise use placeholder with category-specific icon
    const categoryIcons = {
      'excavated-conservation': '🏺',
      'site-investigation': '🔍',
      'designation-research': '📋',
      'preservation-research': '🛡️',
      'restoration-research': '🔧',
      'digital-archiving': '💾'
    };
    const categoryGradients = {
      'excavated-conservation': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'site-investigation': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'designation-research': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'preservation-research': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'restoration-research': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'digital-archiving': 'linear-gradient(135deg, #fbbc04 0%, #f9a825 100%)'
    };

    const imageHtml = project.images && project.images.length > 0
      ? `<img src="${project.images[0]}" alt="${title}" loading="lazy">`
      : `<div style="width:100%;height:100%;background:${categoryGradients[project.category] || categoryGradients['excavated-conservation']};display:flex;align-items:center;justify-content:center;color:white;font-size:3.5rem;">${categoryIcons[project.category] || '🔬'}</div>`;

    return `
      <div class="project-card" data-project-id="${project.id}">
        <div class="project-card-image">
          ${imageHtml}
        </div>
        <div class="project-card-content">
          <h3 class="project-card-title">${title}</h3>
          <p class="project-card-description">${description}</p>
          <div class="project-card-meta">
            <span class="project-card-duration">${project.duration}</span>
            <div class="project-card-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Mobile/Tablet Grid Layout
  if (projectsGrid) {
    // Add click handlers
    projectsGrid.querySelectorAll('.project-card').forEach((card, index) => {
      const projectId = card.getAttribute('data-project-id');
      const project = featuredProjects[index];
      
      card.addEventListener('click', () => {
        if (project && project.link) {
          // If project has external link, open it
          window.open(project.link, '_blank');
        } else {
          // Otherwise navigate to projects page
          window.location.href = 'projects.html';
        }
      });
    });

    // Initialize animations for the newly added project cards
    initScrollAnimations('.project-card');
  }

  // Desktop Column Layout (1~4번: 프로젝트, 5번: 타이틀)
  if (desktopLayout) {
    // 기존 프로젝트 컬럼들만 제거 (헤더 컬럼은 유지)
    const existingProjectColumns = desktopLayout.querySelectorAll('.project-image-column');
    existingProjectColumns.forEach(col => col.remove());

    const categoryNames = {
      'excavated-conservation': currentLang === 'ko' ? '보존처리' : 'Conservation',
      'site-investigation': currentLang === 'ko' ? '현장조사' : 'Investigation',
      'designation-research': currentLang === 'ko' ? '지정연구' : 'Designation',
      'preservation-research': currentLang === 'ko' ? '보존연구' : 'Preservation',
      'restoration-research': currentLang === 'ko' ? '복원연구' : 'Restoration',
      'digital-archiving': currentLang === 'ko' ? '아카이빙' : 'Archiving'
    };

    const categoryGradients = {
      'excavated-conservation': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'site-investigation': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'designation-research': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'preservation-research': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'restoration-research': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'digital-archiving': 'linear-gradient(135deg, #fbbc04 0%, #f9a825 100%)'
    };

    const categoryIcons = {
      'excavated-conservation': '🏺',
      'site-investigation': '🔍',
      'designation-research': '📋',
      'preservation-research': '🛡️',
      'restoration-research': '🔧',
      'digital-archiving': '💾'
    };

    // 타이틀 박스를 마지막에 추가하기 위해 headerColumn 참조 저장
    const headerColumn = desktopLayout.querySelector('.project-header-column');

    featuredProjects.forEach((project, index) => {
      const title = currentLang === 'ko' ? project.title_ko : project.title_en;
      const description = currentLang === 'ko' ? project.description_ko : project.description_en;

      // Use project image if available, otherwise use gradient placeholder
      const backgroundStyle = project.images && project.images.length > 0
        ? `background-image: url('${project.images[0]}'); background-size: cover; background-position: center;`
        : `background: ${categoryGradients[project.category] || categoryGradients['excavated-conservation']}; display: flex; align-items: center; justify-content: center; font-size: 8rem; color: rgba(255,255,255,0.3);`;

      const iconHtml = (project.images && project.images.length > 0) ? '' : categoryIcons[project.category];

      const column = document.createElement('div');
      column.className = 'project-column project-image-column';
      column.setAttribute('data-category', project.category);
      column.innerHTML = `
        <div class="project-column-background" style="${backgroundStyle}">${iconHtml}</div>
        <div class="project-column-overlay"></div>
        <div class="project-column-content">
          <h3 class="project-column-title">${title}</h3>
          <p class="project-column-description">${description}</p>
          <p class="project-column-duration">${project.duration}</p>
        </div>
      `;

      column.addEventListener('click', () => {
        if (project.link) {
          // If project has external link, open it
          window.open(project.link, '_blank');
        } else {
          // Otherwise navigate to projects page
          window.location.href = 'projects.html';
        }
      });

      // 타이틀 박스(5번) 앞에 삽입
      desktopLayout.insertBefore(column, headerColumn);
    });
  }
}

// Load Latest Achievements
function loadLatestAchievements() {
  const achievementsGrid = document.getElementById('latestAchievementsGrid');
  const desktopLayout = document.getElementById('achievementsDesktopLayout');

  if ((!achievementsGrid && !desktopLayout) || typeof achievements === 'undefined') {
    return;
  }

  // Automatically get the top 4 most recent achievements (최상위 4개)
  // achievements.js에서 이미 최신순으로 정렬되어 있으므로 그대로 첫 4개 추출
  const latestAchievements = achievements.slice(0, 4);

  const currentLang = document.documentElement.lang || 'ko';

  const typeIcons = {
    'publication': '📄',
    'conference': '🎤',
    'award': '🏆',
    'patent': '⚡'
  };

  const typeNames = {
    'publication': { en: 'Publication', ko: '논문', ja: '論文', uz: 'Nashr' },
    'conference': { en: 'Conference', ko: '학회', ja: '学会', uz: 'Konferensiya' },
    'award': { en: 'Award', ko: '수상', ja: '受賞', uz: 'Mukofot' },
    'patent': { en: 'Patent', ko: '특허', ja: '特許', uz: 'Patent' }
  };

  // Category-specific gradients for placeholders
  const typeGradients = {
    'publication': 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    'conference': 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
    'award': 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    'patent': 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
  };

  // Mobile/Tablet Grid Layout
  if (achievementsGrid) {
    achievementsGrid.innerHTML = latestAchievements.map(achievement => {
      const title = currentLang === 'ko'
        ? achievement.title_ko
        : currentLang === 'ja'
          ? (achievement.title_ja || achievement.title_en)
          : achievement.title_en;
      const authors = currentLang === 'ko'
        ? (achievement.authors_ko || achievement.authors)
        : currentLang === 'ja'
          ? (achievement.authors_ja || achievement.authors)
          : achievement.authors;
      const journal = currentLang === 'ko'
        ? (achievement.journal_ko || achievement.journal || achievement.event_ko || achievement.event)
        : currentLang === 'ja'
          ? (achievement.journal_ja || achievement.journal || achievement.event_ja || achievement.event)
          : (achievement.journal || achievement.event);

      // Use image if available, otherwise use gradient placeholder with icon
      const imageHtml = achievement.image
        ? `<img src="${achievement.image}" alt="${title}" loading="lazy">`
        : `<div class="achievement-card-placeholder" style="background:${typeGradients[achievement.type] || typeGradients['publication']};display:flex;align-items:center;justify-content:center;color:white;font-size:4rem;">${typeIcons[achievement.type] || '📋'}</div>`;

      return `
        <div class="achievement-card" data-type="${achievement.type}" data-achievement-id="${achievement.id}">
          <div class="achievement-card-image">
            ${imageHtml}
          </div>
          <div class="achievement-card-content">
            <h3 class="achievement-card-title">${title}</h3>
            <p class="achievement-card-authors">${authors}</p>
            <p class="achievement-card-year">${achievement.year}</p>
            ${journal ? `<p class="achievement-card-journal">${journal}</p>` : ''}
          </div>
        </div>
      `;
    }).join('');

    // Add click handlers
    achievementsGrid.querySelectorAll('.achievement-card').forEach(card => {
      card.addEventListener('click', () => {
        window.location.href = 'achievements.html';
      });
    });

    // Initialize animations for the newly added achievement cards
    initScrollAnimations('.achievement-card');
  }

  // Desktop Column Layout
  if (desktopLayout) {
    // 기존 이미지 컬럼들만 제거 (헤더 컬럼은 유지)
    const existingImageColumns = desktopLayout.querySelectorAll('.achievement-image-column');
    existingImageColumns.forEach(col => col.remove());

    latestAchievements.forEach((achievement, index) => {
      const title = currentLang === 'ko'
        ? achievement.title_ko
        : currentLang === 'ja'
          ? (achievement.title_ja || achievement.title_en)
          : achievement.title_en;
      const authors = currentLang === 'ko'
        ? (achievement.authors_ko || achievement.authors)
        : currentLang === 'ja'
          ? (achievement.authors_ja || achievement.authors)
          : achievement.authors;
      const journal = currentLang === 'ko'
        ? (achievement.journal_ko || achievement.journal || achievement.event_ko || achievement.event)
        : currentLang === 'ja'
          ? (achievement.journal_ja || achievement.journal || achievement.event_ja || achievement.event)
          : (achievement.journal || achievement.event);
      const typeName = typeNames[achievement.type][currentLang] || typeNames[achievement.type].en;

      // Use achievement image if available, otherwise use gradient placeholder
      const backgroundStyle = achievement.image
        ? `background-image: url('${achievement.image}'); background-size: cover; background-position: center;`
        : `background: ${typeGradients[achievement.type] || typeGradients['publication']}; display: flex; align-items: center; justify-content: center; font-size: 8rem; color: rgba(255,255,255,0.3);`;

      const iconHtml = achievement.image ? '' : typeIcons[achievement.type];

      const column = document.createElement('div');
      column.className = 'achievement-column achievement-image-column';
      column.setAttribute('data-type', achievement.type);
      column.innerHTML = `
        <div class="achievement-column-background" style="${backgroundStyle}">${iconHtml}</div>
        <div class="achievement-column-overlay"></div>
        <div class="achievement-column-content">
          <div class="achievement-type-badge">${typeIcons[achievement.type]} ${typeName}</div>
          <h3 class="achievement-column-title">${title}</h3>
          ${authors ? `<p class="achievement-column-authors">${authors}</p>` : ''}
          <p class="achievement-column-year">${achievement.year}</p>
          ${journal ? `<p class="achievement-column-journal">${journal}</p>` : ''}
        </div>
      `;

      column.addEventListener('click', () => {
        window.location.href = 'achievements.html';
      });

      desktopLayout.appendChild(column);
    });
  }
}

const curtainAnimationTimers = new Map();

function startCurtainAnimation(selector) {
  const columns = [...document.querySelectorAll(selector)];
  if (columns.length === 0) return;

  const existingTimer = curtainAnimationTimers.get(selector);
  if (existingTimer) {
    clearInterval(existingTimer);
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let activeIndex = 0;

  const openNextColumn = () => {
    if (document.hidden) return;

    columns.forEach(column => column.classList.remove('is-open'));
    columns[activeIndex].classList.add('is-open');
    activeIndex = (activeIndex + 1) % columns.length;
  };

  openNextColumn();
  const animationTimer = setInterval(openNextColumn, 3200);
  curtainAnimationTimers.set(selector, animationTimer);
}

function startHomeCurtainAnimations() {
  startCurtainAnimation('.project-image-column');
  startCurtainAnimation('.achievement-image-column');
}

document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    startHomeCurtainAnimations();
  }
});

window.addEventListener('pageshow', () => {
  startHomeCurtainAnimations();
});

// Load Gallery Preview
function loadGalleryPreview() {
  const galleryGrid = document.getElementById('galleryPreviewGrid');
  if (!galleryGrid || typeof galleryItems === 'undefined') return;

  // Get 6 most recent gallery items
  const previewItems = galleryItems
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6);
  const currentLang = document.documentElement.lang || 'ko';

  const categoryNames = {
    'lab-activities': currentLang === 'ko' ? '연구실 활동' : 'Lab Activities',
    'equipment': currentLang === 'ko' ? '장비' : 'Equipment',
    'research': currentLang === 'ko' ? '연구' : 'Research',
    'conferences': currentLang === 'ko' ? '컨퍼런스' : 'Conferences',
    'achievements': currentLang === 'ko' ? '성과' : 'Achievements'
  };

  const galleryIcons = {
    'lab-activities': '🔬',
    'equipment': '⚙️',
    'research': '📊',
    'conferences': '🎤',
    'achievements': '🏆'
  };

  const galleryGradients = {
    'lab-activities': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'equipment': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'research': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'conferences': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'achievements': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  };

  galleryGrid.innerHTML = previewItems.map(item => {
    const title = currentLang === 'ko' ? item.title_ko : item.title_en;
    const description = currentLang === 'ko' ? item.description_ko : item.description_en;

    // Use placeholder gradient with category-specific icon if no image
    const imageHtml = item.image
      ? `<img src="${item.image}" alt="${title}" class="gallery-item-image" loading="lazy">`
      : `<div class="gallery-item-image" style="background:${galleryGradients[item.category] || galleryGradients['lab-activities']};display:flex;align-items:center;justify-content:center;color:white;font-size:2.5rem;">${galleryIcons[item.category] || '📸'}</div>`;

    return `
      <div class="gallery-item" data-gallery-id="${item.id}">
        ${imageHtml}
        <span class="gallery-item-category">${categoryNames[item.category] || item.category}</span>
        <div class="gallery-item-overlay">
          <h3 class="gallery-item-title">${title}</h3>
          <p class="gallery-item-description">${description}</p>
        </div>
      </div>
    `;
  }).join('');

  // Add click handlers
  galleryGrid.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      window.location.href = 'gallery.html';
    });
  });

  // Initialize animations for the newly added gallery items
  initScrollAnimations('.gallery-item');
}

// Handle Home Contact Form Submission
function handleHomeContactForm() {
  const form = document.getElementById('homeContactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    // Here you would typically send the data to a server
    console.log('Contact form submitted:', data);

    // Show success message
    const currentLang = document.documentElement.lang || 'ko';
    const successMessage = currentLang === 'ko'
      ? '메시지가 성공적으로 전송되었습니다! 빠른 시일 내에 답변드리겠습니다.'
      : 'Message sent successfully! We will get back to you soon.';

    alert(successMessage);

    // Reset form
    form.reset();
  });
}

// 동일 발표/논문이 데이터에 중복 입력된 경우가 있어 집계 전에 제거한다.
function getUniqueAchievements() {
  if (typeof achievements === 'undefined') return [];
  const seenRecords = new Set();
  return achievements.filter(achievement => {
    const signature = [
      achievement.type,
      achievement.title_ko || achievement.title,
      achievement.authors_ko || achievement.recipient_ko
    ].join('|');
    if (seenRecords.has(signature)) return false;
    seenRecords.add(signature);
    return true;
  });
}

// 포디움의 각 스텝(1~3위)을 클릭/터치하면 그 사람의 실적 목록을 모달로 보여준다.
// renderResearchLeague()가 다시 그려질 때마다(언어 전환 등) 최신 데이터로 갱신된다.
// 키는 "type::한글성명"(언어와 무관한 고유 식별자).
const researchPodiumIndex = new Map();
function researchPodiumKey(type, koName) {
  return `${type}::${koName}`;
}
// 클릭 가능한 각 스텝을 data-podium-index(정수)로만 식별한다. koName을 직접
// HTML 속성 값으로 넣지 않는 이유: escapeHtml()은 텍스트 노드 기준으로만
// 이스케이프해 따옴표(")는 그대로 두므로, 속성 값에 쓰면 안전하지 않다.
let researchPodiumStepKeys = [];
// 현재 overview 모달에 표시 중인 수상 실적 목록. 이미지 썸네일도 같은 이유로
// data-award-index(정수)만 속성에 넣고, 실제 achievement 객체는 여기서 찾는다.
let researchPodiumAwardRecords = [];

// renderResearchLeague()의 카드 헤더와 overview 모달 헤더가 같은 분야명을 써야 하므로
// 모듈 스코프로 공유한다.
const RESEARCH_PODIUM_TYPE_LABELS = {
  publication: { en: 'Publications', ko: '논문 분야', ja: '論文分野', uz: 'Nashrlar', fr: 'Publications', ar: 'المنشورات' },
  conference: { en: 'Presentations', ko: '발표 분야', ja: '発表分野', uz: 'Taqdimotlar', fr: 'Présentations', ar: 'العروض' },
  award: { en: 'Awards', ko: '수상 분야', ja: '受賞分野', uz: 'Mukofotlar', fr: 'Distinctions', ar: 'الجوائز' }
};
const RESEARCH_PODIUM_COUNT_LABELS = { en: 'records', ko: '건', ja: '件', uz: 'ta yozuv', fr: 'entrées', ar: 'سجلات' };

function renderResearchLeague() {
  const grid = document.getElementById('researchLeagueGrid');
  if (!grid || typeof achievements === 'undefined') return;
  closeResearchPodiumOverview(); // 다시 그려지는 동안 이전 언어의 내용이 열려있지 않도록

  const lang = document.documentElement.lang || 'ko';
  const labels = RESEARCH_PODIUM_TYPE_LABELS;
  const countLabels = RESEARCH_PODIUM_COUNT_LABELS;
  const typeOrder = ['publication', 'conference', 'award'];

  // 교신저자 교수는 한글 성명(원문 데이터의 유일한 신뢰 가능 필드)으로만 판별한다.
  // 영문 성명은 "Kwang-Yong Chung" / "Chung-Kwang Yong"처럼 성-이름 순서와
  // 하이픈 표기가 레코드마다 달라서, 영문 필드로 비교하면 교수 실적이 새어 들어온다.
  const normalizeName = name => name.toLowerCase().replace(/[\s.-]/g, '');
  const alwaysExcludedProfessorKoNames = new Set(['정광용', '정광용 교수'].map(normalizeName));
  // 이상옥 교수는 2023년부터 교신저자로 전환되어 집계에서 제외한다. 2022년까지의 실적은 공동저자로 반영한다.
  const conditionallyExcludedProfessors = new Map(
    ['이상옥', '이상옥 교수'].map(name => [normalizeName(name), 2023])
  );
  const isProfessor = (koName, year) => {
    const normalized = normalizeName(koName);
    if (alwaysExcludedProfessorKoNames.has(normalized)) return true;
    const excludedFromYear = conditionallyExcludedProfessors.get(normalized);
    return excludedFromYear !== undefined && Number(year) >= excludedFromYear;
  };

  const uniqueAchievements = getUniqueAchievements();

  const rankings = typeOrder.map(type => {
    // 영문 표기가 사람마다 순서/하이픈이 제각각이라, 한글 성명을 기준 키로 묶고
    // 화면에 보여줄 이름만 현재 언어에 맞춰 고른다.
    const people = new Map();
    const records = uniqueAchievements.filter(achievement => achievement.type === type);

    records.forEach(achievement => {
      const koNames = (type === 'award' ? achievement.recipient_ko : achievement.authors_ko || '')
        .split(',').map(name => name.trim());
      const displayNames = (type === 'award'
        ? (lang === 'ko' ? achievement.recipient_ko : achievement.recipient)
        : (lang === 'ko' ? achievement.authors_ko : achievement.authors) || '')
        .split(',').map(name => name.trim());

      koNames.forEach((koName, index) => {
        if (!koName || isProfessor(koName, achievement.year)) return;
        // 2022년까지의 이상옥 교수 실적은 공동저자로 반영하되, 순위표에서는
        // 교신저자 전환 이후(2023~)의 이상옥과 구분되도록 별도 표기로 보여준다.
        const isEarlySangOkLee = normalizeName(koName) === normalizeName('이상옥') && Number(achievement.year) <= 2022;
        const displayName = isEarlySangOkLee ? '07 이상옥' : (displayNames[index] || koName);
        if (!people.has(koName)) people.set(koName, { count: 0, displayNameCounts: new Map(), records: [] });
        const person = people.get(koName);
        person.count += 1;
        person.displayNameCounts.set(displayName, (person.displayNameCounts.get(displayName) || 0) + 1);
        person.records.push(achievement);
      });
    });

    // 동점자 순서는 반드시 언어와 무관한 키(한글 성명)로만 비교해야 한다.
    // 예전에는 화면에 표시되는 이름(mostUsedName)으로 비교했는데, 그 이름은
    // 언어별로 다른 문자열이라("김민제" vs "Min-Je Kim") localeCompare 결과가
    // 언어마다 달라져 동점일 때 1·2위가 언어별로 뒤바뀌는 원인이 됐다.
    const leaders = [...people.entries()].map(([koName, person]) => {
      const [mostUsedName] = [...person.displayNameCounts.entries()].sort((a, b) => b[1] - a[1])[0];
      return [mostUsedName, person.count, koName];
    }).sort((first, second) => {
      return second[1] - first[1] || first[2].localeCompare(second[2]);
    }).slice(0, 3);

    // 모달용 인덱스: 순위 3위 안에 든 사람만 클릭 대상이면 충분하다
    leaders.forEach(([displayName, count, koName]) => {
      researchPodiumIndex.set(researchPodiumKey(type, koName), {
        displayName,
        count,
        type,
        records: people.get(koName).records
      });
    });

    return {
      type,
      leaders,
      recordCount: records.length
    };
  });

  const totalLabels = { en: 'total', ko: '전체', ja: '全体', uz: 'jami', fr: 'total', ar: 'الإجمالي' };
  const getLabel = (dictionary, key) => dictionary[key] || dictionary.en;
  researchPodiumStepKeys = [];
  grid.innerHTML = rankings.map(ranking => `
    <article class="research-league-card">
      <div class="research-league-category-row">
        <div class="research-league-category">${getLabel(labels[ranking.type], lang)}</div>
        <div class="research-league-category-count">${ranking.recordCount} ${getLabel(countLabels, lang)} ${getLabel(totalLabels, lang)}</div>
      </div>
      <div class="research-league-podium">
        ${[1, 0, 2].map(index => {
          const leader = ranking.leaders[index];
          const rank = index + 1;
          // 실적이 있는 스텝만 클릭 가능(overview 모달)하게 한다
          let interactiveAttrs = '';
          if (leader) {
            researchPodiumStepKeys.push({ type: ranking.type, koName: leader[2] });
            const stepIndex = researchPodiumStepKeys.length - 1;
            interactiveAttrs = `data-podium-index="${stepIndex}" tabindex="0" role="button" aria-haspopup="dialog" aria-label="${escapeHtml(leader[0])}"`;
          }
          return `
            <div class="podium-step podium-rank-${rank}${leader ? ' podium-step--clickable' : ' is-empty'}" ${interactiveAttrs}>
              <div class="podium-step-name">${leader ? escapeHtml(leader[0]) : '-'}</div>
              <div class="podium-step-block">
                <span class="podium-step-symbol">${{ 1: 'Au', 2: 'Ag', 3: 'Cu' }[rank]}</span>
                <span class="podium-step-rank">${leader ? leader[1] : '-'}</span>
              </div>
            </div>
          `;
        }).join('')}
      </div>
      <a class="research-league-card-link" href="achievements.html?filter=${ranking.type}">
        <span class="lang lang-en">View records</span>
        <span class="lang lang-ko" style="display:none;">기록 보기</span>
        <span class="lang lang-ja" style="display:none;">記録を見る</span>
        <span class="lang lang-uz" style="display:none;">Yozuvlarni ko'rish</span>
        <span class="lang lang-fr" style="display:none;">Voir les résultats</span>
        <span class="lang lang-ar" style="display:none;">عرض السجلات</span>
      </a>
    </article>
  `).join('');

  bindResearchPodiumInteractions(grid);
}

// 포디움 스텝 클릭/키보드(Enter, Space) 이벤트를 위임으로 처리한다. grid.innerHTML은
// renderResearchLeague()가 다시 그려질 때마다 교체되지만 grid 엘리먼트 자체는
// 그대로이므로, 리스너는 한 번만 등록하면 된다(dataset 플래그로 중복 등록 방지).
function bindResearchPodiumInteractions(grid) {
  if (grid.dataset.podiumBound) return;
  grid.dataset.podiumBound = 'true';

  const openFromStep = (step) => {
    const key = researchPodiumStepKeys[Number(step.dataset.podiumIndex)];
    if (key) openResearchPodiumOverview(key.type, key.koName, step);
  };

  grid.addEventListener('click', (e) => {
    const step = e.target.closest('.podium-step--clickable');
    if (step) openFromStep(step);
  });

  grid.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const step = e.target.closest('.podium-step--clickable');
    if (!step) return;
    e.preventDefault();
    openFromStep(step);
  });
}

// 실적 하나의 제목/부가정보(저널·학회·수여기관)를 현재 언어에 맞춰 뽑아낸다.
// ko·ja는 전용 필드가 있고, 그 외 언어는 기존 목록 렌더링 함수들과 동일하게
// 영문 필드로 대체한다.
function researchPodiumRecordLine(type, achievement, lang) {
  const title = lang === 'ko'
    ? achievement.title_ko
    : lang === 'ja'
      ? (achievement.title_ja || achievement.title_en)
      : achievement.title_en;

  let secondary;
  if (type === 'publication') {
    secondary = lang === 'ko'
      ? (achievement.journal_ko || achievement.journal)
      : lang === 'ja'
        ? (achievement.journal_ja || achievement.journal)
        : achievement.journal;
  } else if (type === 'conference') {
    secondary = lang === 'ko' ? (achievement.event_ko || achievement.event) : achievement.event;
  } else {
    secondary = lang === 'ko' ? (achievement.organization_ko || achievement.organization) : achievement.organization;
  }

  // 학술논문은 학회지 등급(SCI/KCI/Scopus 등)을, 수상 내역은 상장 이미지를
  // 같이 보여줘 정보성/접근성을 높인다(type별로 서로 다른 필드이므로 다른
  // 항목은 자연히 undefined가 되어 화면에서 조용히 생략된다).
  return {
    title,
    secondary,
    year: achievement.year,
    indexing: type === 'publication' ? achievement.indexing : undefined,
    awardImage: type === 'award' ? achievement.award_image : undefined
  };
}

// 포디움 스텝을 클릭/터치(또는 Enter·Space)하면 그 사람의 실적 목록을 모달로 보여준다.
// triggerEl이 있으면 그 스텝 블록 위치를 기준으로 "폴더가 열리듯" 그 지점에서부터
// 커지는 애니메이션을 재생한다(CSS의 --reveal-origin-x/y 커스텀 프로퍼티로 전달).
function openResearchPodiumOverview(type, koName, triggerEl) {
  const entry = researchPodiumIndex.get(researchPodiumKey(type, koName));
  const modal = document.getElementById('researchPodiumModal');
  if (!entry || !modal) return;

  const lang = document.documentElement.lang || 'ko';
  const dialog = modal.querySelector('.research-podium-modal-content');
  const nameEl = modal.querySelector('.research-podium-modal-name');
  const categoryEl = modal.querySelector('.research-podium-modal-category');
  const countEl = modal.querySelector('.research-podium-modal-count');
  const listEl = modal.querySelector('.research-podium-modal-list');
  if (!dialog || !nameEl || !categoryEl || !countEl || !listEl) return;

  nameEl.textContent = entry.displayName;
  const typeLabels = RESEARCH_PODIUM_TYPE_LABELS[type];
  categoryEl.textContent = typeLabels[lang] || typeLabels.en;
  countEl.textContent = `${entry.count} ${RESEARCH_PODIUM_COUNT_LABELS[lang] || RESEARCH_PODIUM_COUNT_LABELS.en}`;

  const sortedRecords = [...entry.records].sort((a, b) => Number(b.year) - Number(a.year));
  listEl.classList.toggle('research-podium-modal-list--awards', type === 'award');

  if (type === 'award') {
    // 수상 분야는 부가 텍스트 없이 상장 이미지만 그리드로 보여주고, 제목·수여기관·
    // 연도 같은 상세 정보는 이미지를 클릭했을 때 뜨는 별도 팝업에서 확인한다.
    researchPodiumAwardRecords = sortedRecords;
    listEl.innerHTML = sortedRecords.map((achievement, i) => {
      const { title, awardImage } = researchPodiumRecordLine(type, achievement, lang);
      if (!awardImage) return '';
      return `
        <li class="research-podium-award-item">
          <button type="button" class="research-podium-award-thumb" data-award-index="${i}" aria-label="${escapeHtml(title || '')}">
            <img src="${escapeHtml(awardImage)}" alt="${escapeHtml(title || '')}" loading="lazy">
          </button>
        </li>
      `;
    }).join('');
  } else {
    researchPodiumAwardRecords = [];
    // 연도가 이전 항목과 같으면(연도별로 묶여 보이도록) 숫자 자체는 남겨두되
    // visibility:hidden으로 감춘다 — 칸의 너비는 그대로라 아래 항목들의 정렬이
    // 흐트러지지 않으면서, 시각적으로는 가장 위(최신) 항목에만 연도가 표기된다.
    let lastYear = null;
    listEl.innerHTML = sortedRecords.map(achievement => {
      const { title, secondary, year, indexing } = researchPodiumRecordLine(type, achievement, lang);
      const isRepeatedYear = year === lastYear;
      lastYear = year;
      return `
        <li class="research-podium-modal-item">
          <span class="research-podium-modal-item-year${isRepeatedYear ? ' is-repeated-year' : ''}">${year}</span>
          <div class="research-podium-modal-item-body">
            <p class="research-podium-modal-item-title">
              ${escapeHtml(title || '')}
              ${indexing ? `<span class="research-podium-modal-item-badge">${escapeHtml(indexing)}</span>` : ''}
            </p>
            ${secondary ? `<p class="research-podium-modal-item-meta">${escapeHtml(secondary)}</p>` : ''}
          </div>
        </li>
      `;
    }).join('');
  }

  // 화면 중앙이 아니라 클릭한 스텝블록 바로 아래(공간이 없으면 왼쪽)에서
  // 파생되는 팝오버처럼 보이도록 위치를 직접 계산한다. 애니메이션은 잠시
  // 꺼서(scale 등 진행 중인 변형이 크기 측정을 왜곡하지 않도록) 자연스러운
  // 크기를 먼저 구하고, 위치와 --reveal-origin-x/y(펼쳐지는 기준 모서리)를
  // 정한 뒤 reflow를 강제하고 다시 켜서 애니메이션이 처음부터 재생되게 한다.
  modal.style.display = 'block';
  dialog.style.animation = 'none';
  if (triggerEl) {
    const placement = computeResearchPodiumPlacement(triggerEl.getBoundingClientRect(), dialog);
    dialog.style.top = `${placement.top}px`;
    dialog.style.left = `${placement.left}px`;
    dialog.style.setProperty('--reveal-origin-x', `${placement.originX}%`);
    dialog.style.setProperty('--reveal-origin-y', `${placement.originY}%`);
  } else {
    dialog.style.removeProperty('top');
    dialog.style.removeProperty('left');
    dialog.style.removeProperty('--reveal-origin-x');
    dialog.style.removeProperty('--reveal-origin-y');
  }
  void dialog.offsetWidth; // reflow 강제
  dialog.style.animation = '';

  document.body.style.overflow = 'hidden';
  const closeBtn = modal.querySelector('.research-podium-modal-close');
  if (closeBtn) closeBtn.focus();
}

// 스텝블록 아래에 다이얼로그를 붙일 자리가 있으면 그쪽에, 없으면 왼쪽에 붙인다.
// 어느 쪽에 붙었는지에 따라 "펼쳐지는" 애니메이션의 기준 모서리(원점)도 함께
// 정해준다 — 아래쪽이면 다이얼로그의 윗변, 왼쪽이면 오른쪽 변이 스텝블록과
// 맞닿으므로 그 변을 기준으로 펼쳐져야 자연스럽다.
function computeResearchPodiumPlacement(stepRect, dialog) {
  const margin = 16;
  const dialogWidth = dialog.offsetWidth;
  const dialogHeight = dialog.offsetHeight;
  const viewportW = window.innerWidth;
  const viewportH = window.innerHeight;
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

  const belowTop = stepRect.bottom + margin;
  if (belowTop + dialogHeight <= viewportH - margin) {
    const left = clamp(stepRect.left, margin, viewportW - dialogWidth - margin);
    const originX = clamp(((stepRect.left + stepRect.width / 2 - left) / dialogWidth) * 100, 8, 92);
    return { top: belowTop, left, originX, originY: 0 };
  }

  const leftPos = stepRect.left - dialogWidth - margin;
  if (leftPos >= margin) {
    const top = clamp(stepRect.top, margin, viewportH - dialogHeight - margin);
    const originY = clamp(((stepRect.top + stepRect.height / 2 - top) / dialogHeight) * 100, 8, 92);
    return { top, left: leftPos, originX: 100, originY };
  }

  // 아래에도 왼쪽에도 자리가 없으면(작은 화면 등) 화면 안에 들어오도록 눌러 담는다
  return {
    top: clamp(belowTop, margin, viewportH - dialogHeight - margin),
    left: clamp(stepRect.left, margin, viewportW - dialogWidth - margin),
    originX: 50,
    originY: 0
  };
}

function closeResearchPodiumOverview() {
  closeResearchPodiumAwardDetail();
  const modal = document.getElementById('researchPodiumModal');
  if (!modal || modal.style.display !== 'block') return;
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

// 수상 상장 이미지를 클릭했을 때 뜨는 2차 팝업: 원본 크기 이미지와 함께
// overview 목록에서는 뺀 제목·수여기관·연도를 여기서 보여준다.
function openResearchPodiumAwardDetail(index) {
  const achievement = researchPodiumAwardRecords[index];
  const modal = document.getElementById('researchPodiumAwardDetail');
  if (!achievement || !modal) return;

  const lang = document.documentElement.lang || 'ko';
  const { title, secondary, year, awardImage } = researchPodiumRecordLine('award', achievement, lang);
  const imgEl = modal.querySelector('.research-podium-award-detail-image');
  const titleEl = modal.querySelector('.research-podium-award-detail-title');
  const metaEl = modal.querySelector('.research-podium-award-detail-meta');
  if (!imgEl || !titleEl || !metaEl) return;

  imgEl.src = awardImage || '';
  imgEl.alt = title || '';
  titleEl.textContent = title || '';
  metaEl.textContent = secondary ? `${secondary} · ${year}` : `${year}`;

  modal.style.display = 'flex';
}

function closeResearchPodiumAwardDetail() {
  const modal = document.getElementById('researchPodiumAwardDetail');
  if (!modal || modal.style.display !== 'flex') return;
  modal.style.display = 'none';
}

// 닫기 버튼/바깥 클릭/Escape는 모달이 페이지에 딱 하나뿐이라 한 번만 등록해도 된다.
function initResearchPodiumModal() {
  const modal = document.getElementById('researchPodiumModal');
  if (!modal || modal.dataset.bound) return;
  modal.dataset.bound = 'true';

  const closeBtn = modal.querySelector('.research-podium-modal-close');
  if (closeBtn) closeBtn.addEventListener('click', closeResearchPodiumOverview);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeResearchPodiumOverview(); // 바깥(배경) 클릭
  });

  // 상장 썸네일 클릭 → 2차 팝업. listEl은 매번 innerHTML로 교체되지만 이 위임
  // 리스너는 modal 자체에 걸려있어 계속 유효하다.
  modal.addEventListener('click', (e) => {
    const thumb = e.target.closest('.research-podium-award-thumb');
    if (thumb) openResearchPodiumAwardDetail(Number(thumb.dataset.awardIndex));
  });

  const detailModal = document.getElementById('researchPodiumAwardDetail');
  if (detailModal) {
    const detailCloseBtn = detailModal.querySelector('.research-podium-award-detail-close');
    if (detailCloseBtn) detailCloseBtn.addEventListener('click', closeResearchPodiumAwardDetail);
    detailModal.addEventListener('click', (e) => {
      if (e.target === detailModal) closeResearchPodiumAwardDetail(); // 바깥(배경) 클릭
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    // 2차 팝업이 열려있으면 그것만 닫고, overview는 그대로 둔다
    if (detailModal && detailModal.style.display === 'flex') {
      closeResearchPodiumAwardDetail();
    } else {
      closeResearchPodiumOverview();
    }
  });
}

// 리서치 포디움 제목의 연도를 항상 현재 연도로 표시한다 (자동 갱신, 하드코딩 방지)
function renderResearchPodiumYear() {
  const yearEls = document.querySelectorAll('.research-podium-year');
  if (!yearEls.length) return;
  const currentYear = new Date().getFullYear();
  yearEls.forEach(el => { el.textContent = currentYear; });
}

function initResearchLeague() {
  renderResearchLeague();
  renderResearchPodiumYear();
  initResearchPodiumModal();
}

// 오늘의 식단표는 data/daily-menu.json에서 읽어온다. 이 파일은 한국전통문화대학교
// 학식 페이지(knuh.ac.kr)를 매주 월요일 아침 GitHub Actions가 자동으로 읽어와
// 갱신한다 (scripts/update-daily-menu.js, .github/workflows/update-daily-menu.yml 참고).
// "YYYY-MM-DD" 키 아래에 그날의 조식/중식/석식 메뉴 배열이 들어있고, 급식이 없는
// 끼니는 키 자체가 없다.
let dailyMenuDataPromise = null;
function loadDailyMenuData() {
  if (!dailyMenuDataPromise) {
    dailyMenuDataPromise = fetch('data/daily-menu.json')
      .then(response => (response.ok ? response.json() : {}))
      .catch(() => ({}));
  }
  return dailyMenuDataPromise;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

async function renderDailyMenu() {
  const dateEl = document.getElementById('dailyMenuDate');
  const gridEl = document.getElementById('dailyMenuGrid');
  if (!dateEl || !gridEl) return;

  // 날짜별 소제목으로 대체되므로 상단 단일 날짜 표시는 쓰지 않는다.
  dateEl.style.display = 'none';

  const lang = document.documentElement.lang || 'ko';
  const localeByLang = { ko: 'ko-KR', en: 'en-US', ja: 'ja-JP', uz: 'uz-UZ', fr: 'fr-FR', ar: 'ar-SA' };
  const locale = localeByLang[lang] || localeByLang.en;

  const mealLabels = {
    lunch: { en: 'Lunch', ko: '중식', ja: '昼食', uz: 'Tushlik', fr: 'Déjeuner', ar: 'الغداء' },
    dinner: { en: 'Dinner', ko: '석식', ja: '夕食', uz: 'Kechki ovqat', fr: 'Dîner', ar: 'العشاء' }
  };
  const emptyLabel = {
    en: 'Menu not yet updated', ko: '메뉴 준비 중입니다', ja: '準備中です', uz: 'Tayyorlanmoqda', fr: 'Menu à venir', ar: 'القائمة قيد التحضير'
  };
  const getLabel = (dictionary, key) => dictionary[key] || dictionary.en;
  const mealOrder = ['lunch', 'dinner'];

  const menuData = await loadDailyMenuData();

  // 조식은 제외하고, 오늘과 내일 이틀치 중식/석식만 보여준다.
  const days = [0, 1].map(offset => {
    const date = new Date();
    date.setDate(date.getDate() + offset);
    const isoDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    return { date, isoDate, menu: menuData[isoDate] };
  });

  gridEl.innerHTML = days.map(({ date, menu }) => {
    const dayLabel = date.toLocaleDateString(locale, { month: 'long', day: 'numeric', weekday: 'short' });

    const rows = mealOrder.map(meal => {
      const items = menu && menu[meal];
      if (!items || !items.length) return '';
      return `
        <div class="daily-menu-row">
          <div class="daily-menu-row-label">${getLabel(mealLabels[meal], lang)}</div>
          <ul class="daily-menu-row-items">
            ${items.map(item => `<li>${escapeHtml(item).replace(/&amp;/g, '&amp;<wbr>')}</li>`).join('')}
          </ul>
        </div>
      `;
    }).join('');

    return `
      <div class="daily-menu-day">
        <div class="daily-menu-day-label">${dayLabel}</div>
        ${rows ? `<div class="daily-menu-meals">${rows}</div>` : `<p class="daily-menu-empty">${getLabel(emptyLabel, lang)}</p>`}
      </div>
    `;
  }).join('');
}

// 페이지 최초 로드시 지구본 초기화. 재방문자(hero-landed)는 common.js의 setLang()이
// 이미 저장된 언어로 착지시키므로 할 일이 없고, 첫 방문자는 평면 폴백도 유휴 자전을
// 시작해 국기를 고를 때까지 지구본이 계속 돌게 한다(3D 버전은 기본이 유휴 자전).
function initHeroGlobeIdleState() {
  if (isHeroLanded()) return;
  startHeroGlobeIdleSpin();
}

// Initialize all home page features
function initHomePage() {
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      updateProjectsCount();
      updateResearchersCount();
      updateAchievementsCount();
      initHeroVideoAnimation();
      initHeroGlobeIdleState();
      initHeroGlobeFlags();
      initHeroPanelsPager();
      renderHeroGlobeSky();
      startHeroGlobeSkyRefresh();
      animateCounters();
      initScrollAnimations();
      animateSectionHeaders();
      initParallaxEffects();
      loadFeaturedProjects();
      loadLatestAchievements();
      initResearchLeague();
      renderDailyMenu();
      startHomeCurtainAnimations();
      loadGalleryPreview();
      handleHomeContactForm();
    });
  } else {
    updateProjectsCount();
    updateResearchersCount();
    updateAchievementsCount();
    initHeroVideoAnimation();
    initHeroGlobeIdleState();
    initHeroGlobeFlags();
    initHeroPanelsPager();
    renderHeroGlobeSky();
    startHeroGlobeSkyRefresh();
    animateCounters();
    initScrollAnimations();
    animateSectionHeaders();
    initParallaxEffects();
    loadFeaturedProjects();
    loadLatestAchievements();
    initResearchLeague();
    renderDailyMenu();
    startHomeCurtainAnimations();
    loadGalleryPreview();
    handleHomeContactForm();
  }
}

// Update projects count from projects.js
function updateProjectsCount() {
  // projects.js에서 projects 배열의 길이를 가져옴
  if (typeof projects !== 'undefined') {
    const projectsCountElement = document.getElementById('projectsCount');
    if (projectsCountElement) {
      const totalProjects = projects.length;
      projectsCountElement.setAttribute('data-target', totalProjects);
    }
  } else {
    // projects.js가 아직 로드되지 않았다면 짧은 지연 후 재시도
    setTimeout(() => {
      if (typeof projects !== 'undefined') {
        const projectsCountElement = document.getElementById('projectsCount');
        if (projectsCountElement) {
          const totalProjects = projects.length;
          projectsCountElement.setAttribute('data-target', totalProjects);
        }
      }
    }, 100);
  }
}

// Update researchers count from members.js (이상옥 교수님 + 현재 연구진)
function updateResearchersCount() {
  // members.js에서 teamData의 연구진 수를 가져옴
  if (typeof teamData !== 'undefined') {
    const researchersCountElement = document.getElementById('researchersCount');
    if (researchersCountElement) {
      // 이상옥 교수님(1명) + researchers 배열의 길이
      const totalResearchers = 1 + (teamData.researchers ? teamData.researchers.length : 0);
      researchersCountElement.setAttribute('data-target', totalResearchers);
    }
  } else {
    // members.js가 아직 로드되지 않았다면 짧은 지연 후 재시도
    setTimeout(() => {
      if (typeof teamData !== 'undefined') {
        const researchersCountElement = document.getElementById('researchersCount');
        if (researchersCountElement) {
          // 이상옥 교수님(1명) + researchers 배열의 길이
          const totalResearchers = 1 + (teamData.researchers ? teamData.researchers.length : 0);
          researchersCountElement.setAttribute('data-target', totalResearchers);
        }
      }
    }, 100);
  }
}

// Update achievements count from achievements.js
function updateAchievementsCount() {
  // achievements.js에서 achievements 배열의 publication 개수를 가져옴
  if (typeof achievements !== 'undefined') {
    // Publications 개수 계산 (type === "publication")
    const publicationCount = achievements.filter(a => a.type === 'publication').length;
    
    const publicationsElement = document.querySelector('[data-metric="publications"] .hero-metric-number');
    if (publicationsElement) {
      publicationsElement.setAttribute('data-target', publicationCount);
    }
  } else {
    // achievements.js가 아직 로드되지 않았다면 짧은 지연 후 재시도
    setTimeout(() => {
      if (typeof achievements !== 'undefined') {
        const publicationCount = achievements.filter(a => a.type === 'publication').length;
        
        const publicationsElement = document.querySelector('[data-metric="publications"] .hero-metric-number');
        if (publicationsElement) {
          publicationsElement.setAttribute('data-target', publicationCount);
        }
      }
    }, 100);
  }
}

// Auto-initialize when script loads
initHomePage();

// Export functions for global access
window.homePageFunctions = {
  animateCounters,
  initScrollAnimations,
  animateSectionHeaders,
  initParallaxEffects,
  loadFeaturedProjects,
  loadLatestAchievements,
  renderResearchLeague,
  initResearchLeague,
  renderResearchPodiumYear,
  renderDailyMenu,
  renderHeroWeather,
  renderHeroGlobeSky,
  moveHeroGlobeToLanguage,
  startHomeCurtainAnimations,
  loadGalleryPreview,
  handleHomeContactForm
};