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
  const staticSelectors = '.hero-impact-card, .impact-card, .timeline-card, .spotlight-item, .contact-info-item, .contact-form-card';
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

function renderResearchLeague() {
  const grid = document.getElementById('researchLeagueGrid');
  if (!grid || typeof achievements === 'undefined') return;

  const lang = document.documentElement.lang || 'ko';
  const labels = {
    publication: { en: 'Publications', ko: '논문 분야', ja: '論文分野', uz: 'Nashrlar', fr: 'Publications', ar: 'المنشورات' },
    conference: { en: 'Presentations', ko: '발표 분야', ja: '発表分野', uz: 'Taqdimotlar', fr: 'Présentations', ar: 'العروض' },
    award: { en: 'Awards', ko: '수상 분야', ja: '受賞分野', uz: 'Mukofotlar', fr: 'Distinctions', ar: 'الجوائز' }
  };
  const countLabels = { en: 'records', ko: '건', ja: '件', uz: 'ta yozuv', fr: 'entrées', ar: 'سجلات' };
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
        if (!people.has(koName)) people.set(koName, { count: 0, displayNameCounts: new Map() });
        const person = people.get(koName);
        person.count += 1;
        person.displayNameCounts.set(displayName, (person.displayNameCounts.get(displayName) || 0) + 1);
      });
    });

    const leaders = [...people.entries()].map(([, person]) => {
      const [mostUsedName] = [...person.displayNameCounts.entries()].sort((a, b) => b[1] - a[1])[0];
      return [mostUsedName, person.count];
    }).sort((first, second) => {
      return second[1] - first[1] || first[0].localeCompare(second[0]);
    }).slice(0, 3);

    return {
      type,
      leaders,
      recordCount: records.length
    };
  });

  const totalLabels = { en: 'total', ko: '전체', ja: '全体', uz: 'jami', fr: 'total', ar: 'الإجمالي' };
  const getLabel = (dictionary, key) => dictionary[key] || dictionary.en;
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
          return `
            <div class="podium-step podium-rank-${rank}${leader ? '' : ' is-empty'}">
              <div class="podium-step-name">${leader ? leader[0] : '-'}</div>
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
}

function initResearchLeague() {
  renderResearchLeague();
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
            ${items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}
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

// Initialize all home page features
function initHomePage() {
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      updateProjectsCount();
      updateResearchersCount();
      updateAchievementsCount();
      initHeroVideoAnimation();
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
  renderDailyMenu,
  startHomeCurtainAnimations,
  loadGalleryPreview,
  handleHomeContactForm
};