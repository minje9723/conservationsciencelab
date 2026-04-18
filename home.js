// Home page specific functionality

// Hero Video and Content Animation
function initHeroVideoAnimation() {
  const heroVideo = document.getElementById('heroVideo');
  const heroContent = document.getElementById('heroContent');
  const heroOverlay = document.querySelector('.hero-overlay');
  const heroBackground = document.querySelector('.hero-background');
  const header = document.querySelector('header');
  const loadingIndicator = document.getElementById('videoLoadingIndicator');

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
    // 비디오가 끝나면 페이드 아웃
    heroVideo.style.transition = 'opacity 1s ease';
    heroVideo.style.opacity = '0';

    // hero-background 전체를 투명하게 (배경 이미지가 보이도록)
    if (heroBackground) {
      heroBackground.style.transition = 'opacity 1s ease';
      heroBackground.style.opacity = '0';
    }

    // 오버레이를 투명하게
    if (heroOverlay) {
      heroOverlay.style.transition = 'opacity 1s ease';
      heroOverlay.style.opacity = '0';
    }

    // 헤더 바 페이드 인 (비디오 끝나고 바로)
    if (header) {
      header.style.transition = 'opacity 1s ease, visibility 0s 0s, background 1s ease';
      header.style.visibility = 'visible';
      header.style.opacity = '1';
      header.style.background = 'rgba(255, 255, 255, 0.95)';
    }

    // 컨텐츠 페이드 인 (비디오 페이드아웃 시작 후 0.3초 뒤)
    setTimeout(() => {
      heroContent.style.visibility = 'visible';
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    }, 300);
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
  // 138: 이집트 룩소르 문화유산 복원 (2024)
  // 142: 구미 하이테크밸리 6차 출토 금속 유물 보존처리 (2025)
  // 143: 관북리 출토 등자의 금속 PLA 3D 프린팅 복원 연구 (2025)
  // 144: 안성 내장리 회곽묘 모르타르 분석 (2025)
  const featuredProjectIds = [138, 142, 143, 144];

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
      'restoration-research': currentLang === 'ko' ? '복원연구' : 'Restoration'
    };

    // Use project image if available, otherwise use placeholder with category-specific icon
    const categoryIcons = {
      'excavated-conservation': '🏺',
      'site-investigation': '🔍',
      'designation-research': '📋',
      'preservation-research': '🛡️'
    };
    const categoryGradients = {
      'excavated-conservation': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'site-investigation': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'designation-research': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'preservation-research': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    };

    const imageHtml = project.images && project.images.length > 0
      ? `<img src="${project.images[0]}" alt="${title}" loading="lazy">`
      : `<div style="width:100%;height:100%;background:${categoryGradients[project.category] || categoryGradients['excavated-conservation']};display:flex;align-items:center;justify-content:center;color:white;font-size:3.5rem;">${categoryIcons[project.category] || '🔬'}</div>`;

    return `
      <div class="project-card" data-project-id="${project.id}">
        <div class="project-card-image">
          ${imageHtml}
          <span class="project-card-category">${categoryNames[project.category] || project.category}</span>
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
      'restoration-research': currentLang === 'ko' ? '복원연구' : 'Restoration'
    };

    const categoryGradients = {
      'excavated-conservation': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'site-investigation': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'designation-research': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'preservation-research': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'restoration-research': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    };

    const categoryIcons = {
      'excavated-conservation': '🏺',
      'site-investigation': '🔍',
      'designation-research': '📋',
      'preservation-research': '🛡️',
      'restoration-research': '🔧'
    };

    // 타이틀 박스를 마지막에 추가하기 위해 headerColumn 참조 저장
    const headerColumn = desktopLayout.querySelector('.project-header-column');

    featuredProjects.forEach((project, index) => {
      const title = currentLang === 'ko' ? project.title_ko : project.title_en;
      const description = currentLang === 'ko' ? project.description_ko : project.description_en;
      const categoryName = categoryNames[project.category] || project.category;

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
          <div class="project-category-badge">${categoryName}</div>
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
    'publication': { en: 'Publication', ko: '논문' },
    'conference': { en: 'Conference', ko: '학회' },
    'award': { en: 'Award', ko: '수상' },
    'patent': { en: 'Patent', ko: '특허' }
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
      const title = currentLang === 'ko' ? achievement.title_ko : achievement.title_en;
      const authors = currentLang === 'ko' ? (achievement.authors_ko || achievement.authors) : achievement.authors;
      const journal = currentLang === 'ko' ? (achievement.journal_ko || achievement.journal || achievement.event_ko || achievement.event) : (achievement.journal || achievement.event);

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
      const title = currentLang === 'ko' ? achievement.title_ko : achievement.title_en;
      const authors = currentLang === 'ko' ? (achievement.authors_ko || achievement.authors) : achievement.authors;
      const journal = currentLang === 'ko' ? (achievement.journal_ko || achievement.journal || achievement.event_ko || achievement.event) : (achievement.journal || achievement.event);
      const typeName = typeNames[achievement.type][currentLang];

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
  loadGalleryPreview,
  handleHomeContactForm
};