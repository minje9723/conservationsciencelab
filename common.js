// Common functionality for all pages

// IP 기반 국가 감지 및 자동 언어 설정
async function detectCountryAndSetLanguage() {
  // 이미 사용자가 언어를 선택한 적이 있는지 확인
  const userSelectedLanguage = localStorage.getItem('user-selected-language');
  
  if (userSelectedLanguage) {
    // 사용자가 직접 선택한 언어가 있으면 그것을 사용
    return userSelectedLanguage;
  }
  
  try {
    // IP 기반 지리적 위치 감지 (ipapi.co 무료 API 사용)
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    
    // 한국(KR)에서 접속한 경우 한국어로 설정
    if (data.country_code === 'KR') {
      console.log('한국 IP 감지: 한국어로 자동 설정');
      return 'ko';
    } else {
      console.log(`${data.country_code} IP 감지: 영어로 설정`);
      return 'en';
    }
  } catch (error) {
    console.log('IP 감지 실패, 기본 언어(영어) 사용:', error);
    // API 호출 실패 시 기본 언어(영어) 사용
    return 'en';
  }
}

// Language switching functionality
function setLang(lang, userSelected = false) {
  // Set document language
  document.documentElement.lang = lang;
  
  // 텍스트 다국어 처리
  document.querySelectorAll('.lang').forEach(el => {
    if (el.classList.contains('lang-' + lang)) {
      el.style.display = '';
    } else {
      el.style.display = 'none';
    }
  });
  
  // Update navigation tooltips for mobile
  updateNavTooltips(lang);
  
  // Save language preference
  localStorage.setItem('preferred-language', lang);
  localStorage.setItem('language', lang);
  
  // 사용자가 직접 선택한 경우 기록
  if (userSelected) {
    localStorage.setItem('user-selected-language', lang);
  }
  
  // Reload homepage dynamic content if on homepage
  if (typeof window.homePageFunctions !== 'undefined') {
    if (window.homePageFunctions.loadFeaturedProjects) {
      window.homePageFunctions.loadFeaturedProjects();
    }
    if (window.homePageFunctions.loadLatestAchievements) {
      window.homePageFunctions.loadLatestAchievements();
    }
    if (window.homePageFunctions.loadGalleryPreview) {
      window.homePageFunctions.loadGalleryPreview();
    }
  }
}

// Update navigation tooltips based on language
function updateNavTooltips(lang) {
  const tooltips = {
    'en': {
      'home': 'Home',
      'history': 'History',
      'members': 'Members',
      'projects': 'Projects',
      'achievements': 'Achievements',
      'facilities': 'Facilities',
      'gallery': 'Gallery'
    },
    'ko': {
      'home': '홈',
      'history': '연혁',
      'members': '연구진',
      'projects': '프로젝트',
      'achievements': '연구성과',
      'facilities': '시설장비',
      'gallery': '갤러리'
    }
  };
  
  // Update each navigation link
  document.querySelectorAll('.nav-links li a').forEach(link => {
    const href = link.getAttribute('href');
    let page = '';
    
    if (href.includes('index.html') || href === '#') {
      page = 'home';
    } else if (href.includes('history')) {
      page = 'history';
    } else if (href.includes('members')) {
      page = 'members';
    } else if (href.includes('projects')) {
      page = 'projects';
    } else if (href.includes('achievements')) {
      page = 'achievements';
    } else if (href.includes('facilities')) {
      page = 'facilities';
    } else if (href.includes('gallery')) {
      page = 'gallery';
    }
    
    if (page && tooltips[lang] && tooltips[lang][page]) {
      link.setAttribute('data-tooltip', tooltips[lang][page]);
    }
  });
}

// Initialize common functionality
function initCommon() {
  // 스크롤 감지 및 상단바 제어
  const header = document.querySelector('.transparent-header');
  const pageBanner = document.querySelector('.page-banner');
  let lastScroll = 0;
  let scrollTimeout;

  if (header) {
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);

      const currentScroll = window.pageYOffset;

      // 스크롤 방향 감지
      if (currentScroll > lastScroll && currentScroll > 100) {
        // 아래로 스크롤
        header.classList.add('hidden');
      } else {
        // 위로 스크롤
        header.classList.remove('hidden');
      }

      // 스크롤 위치에 따른 스타일 변경
      if (currentScroll > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      // 페이지 배너 스크롤 효과
      if (pageBanner) {
        if (currentScroll > 150) {
          pageBanner.classList.add('scrolled');
        } else {
          pageBanner.classList.remove('scrolled');
        }
      }

      lastScroll = currentScroll;

      // 스크롤 멈춤 감지
      scrollTimeout = setTimeout(() => {
        header.classList.remove('hidden');
      }, 1000);
    }, { passive: true });
  }

  // Smooth scroll for navigation and logo
  const smoothScrollToElement = (targetId) => {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If element doesn't exist, navigate to page
      const currentPage = window.location.pathname.split('/').pop();
      if (currentPage !== 'index.html' && !currentPage.includes('index')) {
        window.location.href = `index.html#${targetId}`;
      }
    }
  };

  // Logo click event
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'index.html';
    });
  }

  // Navigation links
  document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // If it's a hash link and we're on index page
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        smoothScrollToElement(targetId);
      }
      // For other links, let default behavior handle it
    });
  });

  // Show all sections immediately on page load
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.add('visible');
  });

  // 언어 토글 버튼과 드롭다운 이벤트
  const langToggle = document.getElementById('langToggle');
  const langDropdown = document.getElementById('langDropdown');
  const currentLang = document.querySelector('.current-lang');

  if (langToggle && langDropdown && currentLang) {
    // 모바일에서는 바로 언어 전환, 데스크톱에서는 드롭다운
    langToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      
      // 모바일 화면 감지 (1002px 이하)
      const isMobile = window.innerWidth <= 1002;
      
      if (isMobile) {
        // 모바일: 바로 언어 전환
        const currentLanguage = localStorage.getItem('preferred-language') || 'en';
        const newLanguage = currentLanguage === 'en' ? 'ko' : 'en';
        
        // 언어 변경 (사용자가 직접 선택)
        setLang(newLanguage, true);
        
        // 활성 버튼 업데이트
        document.querySelectorAll('.lang-option').forEach(btn => {
          if (btn.getAttribute('data-lang') === newLanguage) {
            btn.classList.add('active');
            currentLang.textContent = btn.querySelector('.lang-code').textContent;
          } else {
            btn.classList.remove('active');
          }
        });
      } else {
        // 데스크톱: 드롭다운 표시
        langDropdown.classList.toggle('show');
      }
    });

    // 언어 선택 이벤트 (데스크톱용)
    document.querySelectorAll('.lang-option').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const lang = btn.getAttribute('data-lang');
        document.querySelectorAll('.lang-option').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentLang.textContent = btn.querySelector('.lang-code').textContent;
        langDropdown.classList.remove('show');
        // 언어 변경 (사용자가 직접 선택)
        setLang(lang, true);
      });
    });

    // 외부 클릭시 드롭다운 닫기 (데스크톱용)
    document.addEventListener('click', () => {
      if (window.innerWidth > 1002) {
        langDropdown.classList.remove('show');
      }
    });
    
    // 창 크기 변경 시 드롭다운 닫기
    window.addEventListener('resize', () => {
      langDropdown.classList.remove('show');
    });
  }

  // 네비게이션 드롭다운 기능
  const navDropdowns = document.querySelectorAll('.nav-dropdown');
  
  navDropdowns.forEach(dropdown => {
    const dropdownLink = dropdown.querySelector('a');
    const dropdownContent = dropdown.querySelector('.nav-dropdown-content');
    
    if (dropdownLink && dropdownContent) {
      // 클릭 기능 - 드롭다운이 닫혀있으면 열기, 열려있으면 페이지 이동
      dropdownLink.addEventListener('click', (e) => {
        const isOpen = dropdownContent.classList.contains('show');
        
        if (!isOpen) {
          // 드롭다운이 닫혀있으면 열기
          e.preventDefault();
          e.stopPropagation();
          
          // 다른 드롭다운 닫기
          navDropdowns.forEach(otherDropdown => {
            if (otherDropdown !== dropdown) {
              const otherContent = otherDropdown.querySelector('.nav-dropdown-content');
              if (otherContent) {
                otherContent.classList.remove('show');
              }
            }
          });
          
          // 현재 드롭다운 열기
          dropdownContent.classList.add('show');
        } else {
          // 드롭다운이 열려있으면 페이지로 이동 (preventDefault 호출하지 않음)
          // 기본 링크 동작이 실행됨
        }
      });
      
      // 호버 기능 추가
      dropdown.addEventListener('mouseenter', () => {
        // 다른 드롭다운 닫기
        navDropdowns.forEach(otherDropdown => {
          if (otherDropdown !== dropdown) {
            const otherContent = otherDropdown.querySelector('.nav-dropdown-content');
            if (otherContent) {
              otherContent.classList.remove('show');
            }
          }
        });
        
        // 현재 드롭다운 열기
        dropdownContent.classList.add('show');
      });
      
      dropdown.addEventListener('mouseleave', () => {
        // 드롭다운 닫기 (약간의 지연시간을 두어 안정성 향상)
        setTimeout(() => {
          if (!dropdown.matches(':hover')) {
            dropdownContent.classList.remove('show');
          }
        }, 100);
      });
    }
  });
  
  // 외부 클릭시 네비게이션 드롭다운 닫기
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-dropdown')) {
      navDropdowns.forEach(dropdown => {
        const dropdownContent = dropdown.querySelector('.nav-dropdown-content');
        if (dropdownContent) {
          dropdownContent.classList.remove('show');
        }
      });
    }
  });

  // IP 기반 자동 언어 감지 및 설정
  detectCountryAndSetLanguage().then(detectedLang => {
    const savedLang = localStorage.getItem('preferred-language') || detectedLang;
    const finalLang = savedLang;
    
    // UI 업데이트
    const langBtn = document.getElementById(`lang-${finalLang}`);
    if (langBtn) {
      langBtn.classList.add('active');
      const langCode = langBtn.querySelector('.lang-code').textContent;
      if (currentLang) {
        currentLang.textContent = langCode;
      }
    }
    
    // 다른 버튼 비활성화
    document.querySelectorAll('.lang-option').forEach(btn => {
      if (btn.getAttribute('data-lang') !== finalLang) {
        btn.classList.remove('active');
      }
    });
    
    // 언어 적용
    setLang(finalLang, false);
    
    // Initialize tooltips
    updateNavTooltips(finalLang);
  });

  // Contact Modal functionality (for home page)
  const contactBtn = document.getElementById('contactBtn');
  const contactModal = document.getElementById('contactModal');
  const closeContactModal = document.getElementById('closeContactModal');
  const cancelContact = document.getElementById('cancelContact');
  const contactForm = document.getElementById('contactForm');

  if (contactBtn && contactModal) {
    contactBtn.addEventListener('click', () => {
      contactModal.style.display = 'block';
    });

    if (closeContactModal) {
      closeContactModal.addEventListener('click', () => {
        contactModal.style.display = 'none';
      });
    }

    if (cancelContact) {
      cancelContact.addEventListener('click', () => {
        contactModal.style.display = 'none';
      });
    }

    // Close modal on outside click
    window.addEventListener('click', (e) => {
      if (e.target === contactModal) {
        contactModal.style.display = 'none';
      }
    });

    // Handle form submission
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would normally send the form data to a server
        alert('Thank you for your message! We will get back to you soon.');
        contactModal.style.display = 'none';
        contactForm.reset();
      });
    }
  }
  
  // Navigation section scrolling functionality
  initNavigationScrolling();
}

// Navigation section scrolling
function initNavigationScrolling() {
  // Handle hash-based navigation for members page sections
  function handleSectionNavigation() {
    const hash = window.location.hash;
    
    if (hash === '#alumni') {
      // If on members page, scroll to alumni section
      const alumniSection = document.querySelector('.alumni-network');
      if (alumniSection) {
        setTimeout(() => {
          alumniSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }, 500); // Delay to allow page load
      }
    } else if (hash === '#researchers') {
      // If on members page, scroll to researchers section
      const researchersSection = document.querySelector('.team-members');
      if (researchersSection) {
        setTimeout(() => {
          researchersSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }, 500);
      }
    }
  }
  
  // Handle section navigation on page load
  handleSectionNavigation();
  
  // Handle section navigation when hash changes
  window.addEventListener('hashchange', handleSectionNavigation);
  
  // Add click handlers for navigation member filters
  document.querySelectorAll('.nav-member-filter').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      const currentPage = window.location.pathname.split('/').pop();
      
      // If clicking alumni link and not on members page, navigate to members page
      if (href.includes('#alumni') && currentPage !== 'members.html') {
        // Let the default navigation happen - it will go to members.html#alumni
        return;
      }
      
      // If already on members page, just scroll to section
      if (currentPage === 'members.html') {
        e.preventDefault();
        const targetId = href.split('#')[1];
        
        if (targetId === 'alumni') {
          const alumniSection = document.querySelector('.alumni-network');
          if (alumniSection) {
            alumniSection.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }
        } else if (targetId === 'researchers') {
          const researchersSection = document.querySelector('.team-members');
          if (researchersSection) {
            researchersSection.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }
        }
      }
    });
  });

}

// 모바일 최적화 기능들
function initMobileOptimizations() {
  // 터치 디바이스 감지
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  if (isTouchDevice) {
    document.body.classList.add('touch-device');
    
    // iOS Safari 주소창 숨김 처리
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      // 뷰포트 높이 조정
      function setViewportHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      }
      
      setViewportHeight();
      window.addEventListener('resize', setViewportHeight);
      window.addEventListener('orientationchange', () => {
        setTimeout(setViewportHeight, 500);
      });
    }
    
    // 터치 스크롤 최적화
    const scrollElements = document.querySelectorAll('.gallery-grid, .team-grid, .project-list');
    scrollElements.forEach(element => {
      element.style.webkitOverflowScrolling = 'touch';
    });
    
    // 더블 탭 줌 방지 (필요한 경우)
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
      const now = (new Date()).getTime();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    }, false);
  }
  
  // 스와이프 제스처 추가
  addSwipeGestures();
  
  // 모바일 성능 최적화
  optimizeForMobile();
}

// 스와이프 제스처 구현
function addSwipeGestures() {
  let startX, startY, distX, distY;
  const threshold = 150; // 최소 스와이프 거리
  const restraint = 100; // 수직 스와이프 제한
  const allowedTime = 300; // 최대 스와이프 시간
  let startTime;
  
  // 갤러리 모달에 스와이프 추가
  document.addEventListener('touchstart', function(e) {
    const touch = e.changedTouches[0];
    startX = touch.pageX;
    startY = touch.pageY;
    startTime = new Date().getTime();
  });
  
  document.addEventListener('touchend', function(e) {
    const touch = e.changedTouches[0];
    distX = touch.pageX - startX;
    distY = touch.pageY - startY;
    const elapsedTime = new Date().getTime() - startTime;
    
    if (elapsedTime <= allowedTime) {
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
        // 좌우 스와이프 감지
        if (distX > 0) {
          // 오른쪽 스와이프 - 이전
          handleSwipeRight();
        } else {
          // 왼쪽 스와이프 - 다음
          handleSwipeLeft();
        }
      }
    }
  });
}

function handleSwipeLeft() {
  // 갤러리나 프로젝트 모달에서 다음 항목으로
  const activeModal = document.querySelector('.modal:not([style*="display: none"])');
  if (activeModal) {
    const nextBtn = activeModal.querySelector('.next-btn, .modal-next');
    if (nextBtn && !nextBtn.disabled) {
      nextBtn.click();
    }
  }
}

function handleSwipeRight() {
  // 갤러리나 프로젝트 모달에서 이전 항목으로
  const activeModal = document.querySelector('.modal:not([style*="display: none"])');
  if (activeModal) {
    const prevBtn = activeModal.querySelector('.prev-btn, .modal-prev');
    if (prevBtn && !prevBtn.disabled) {
      prevBtn.click();
    }
  }
}

// 모바일 성능 최적화
function optimizeForMobile() {
  // 이미지 지연 로딩
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    });
    
    // data-src 속성을 가진 이미지들에 지연 로딩 적용
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
  
  // 부드러운 스크롤 활성화
  document.documentElement.style.scrollBehavior = 'smooth';
  
  // 모바일에서 호버 효과 제거 클래스 추가
  if (window.innerWidth <= 768) {
    document.body.classList.add('mobile-device');
  }
  
  // 화면 회전 시 레이아웃 재조정
  window.addEventListener('orientationchange', () => {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 500);
  });
}

// Initialize common functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initCommon();
  initMobileOptimizations();
});