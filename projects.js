// Projects page specific functionality

// Projects data - 실제 프로젝트 사례
const projects = [
  // Site Survey & Manufacturing Analysis (현장 조사 및 제작기법 분석)
  {
    id: 1,
    title_en: "Non-destructive Analysis of Korean War Casualties' Personal Effects",
    title_ko: "6.25 전사자 유품 비파괴 분석",
    description_en: "Non-destructive scientific analysis of personal effects from Korean War casualties for identification and preservation.",
    description_ko: "6.25 전사자 유품에 대한 신원 확인 및 보존을 위한 비파괴 과학적 분석.",
    category: "site-investigation",
    duration: "2022",
    funding: "Youngin Co., Ltd.",
    funding_ko: "주식회사 영인",
    keywords: ["Non-destructive Analysis", "Korean War", "Personal Effects", "Scientific Investigation"],
    keywords_ko: ["비파괴 분석", "6.25 전쟁", "유품", "과학 조사"],
    team: ["Sang Ok Lee", "Min Je Kim"],
    publications: [],
    images: []
  },
  {
    id: 2,
    title_en: "Scientific Investigation of Goyang Samcheonsa Temple Site Monument",
    title_ko: "고양 삼천사지 대지국사탑비 과학적 조사",
    description_en: "Scientific investigation and analysis of Daejiguksa Monument at Samcheonsa Temple Site in Goyang.",
    description_ko: "고양 삼천사지 대지국사탑비에 대한 과학적 조사 및 분석.",
    category: "site-investigation",
    duration: "2022",
    funding: "Seojin Cultural Heritage",
    funding_ko: "서진문화유산",
    keywords: ["Monument", "Scientific Investigation", "Temple Site", "Stone Heritage"],
    keywords_ko: ["탑비", "과학 조사", "사지", "석조문화재"],
    team: ["Eun Kyung Seo", "Hyo Jeong Kim"],
    publications: [],
    images: []
  },
  {
    id: 3,
    title_en: "Scientific Analysis of Wooden Jijang Bodhisattva and Ten Kings Statues at Gochang Munsu Temple",
    title_ko: "고창 문수사 목조지장보살좌상 및 시왕상 과학적 분석",
    description_en: "Comprehensive scientific analysis of wooden Jijang Bodhisattva and Ten Kings statues at Munsu Temple, Gochang.",
    description_ko: "고창 문수사 목조지장보살좌상 및 시왕상에 대한 종합 과학적 분석.",
    category: "site-investigation",
    duration: "2022",
    funding: "Yeongsan Cultural Heritage Institute",
    funding_ko: "영산문화재연구소",
    keywords: ["Wooden Statues", "Buddhist Sculpture", "Scientific Analysis", "Temple Heritage"],
    keywords_ko: ["목조상", "불교 조각", "과학 분석", "사찰 문화재"],
    team: ["Sang Ok Lee", "Ji Eun Hyun"],
    publications: [],
    images: []
  },
  {
    id: 4,
    title_en: "Scientific Analysis of Concealed Objects in Wooden Shakyamuni Triad at Gongju Donghaksa Temple",
    title_ko: "공주 동학사 목조석가여래삼존불좌상 복장유물 과학적 분석",
    description_en: "Scientific analysis of concealed objects within wooden Shakyamuni Triad statues at Donghaksa Temple, Gongju.",
    description_ko: "공주 동학사 목조석가여래삼존불좌상 내부 복장유물에 대한 과학적 분석.",
    category: "site-investigation",
    duration: "2020",
    funding: "Indigo",
    funding_ko: "인디고",
    keywords: ["Concealed Objects", "Buddhist Statues", "Scientific Analysis", "Wooden Heritage"],
    keywords_ko: ["복장유물", "불상", "과학 분석", "목조문화재"],
    team: ["Eun Kyung Seo", "Chae Rin Kim"],
    publications: [],
    images: []
  },
  {
    id: 5,
    title_en: "Scientific Investigation of Interior Murals at Daegwangbojeon Hall, Gongju Magoksa Temple",
    title_ko: "공주 마곡사 대광보전 내부벽화 과학적 조사",
    description_en: "Scientific investigation of interior wall paintings at Daegwangbojeon Hall in Magoksa Temple, Gongju.",
    description_ko: "공주 마곡사 대광보전 내부벽화에 대한 과학적 조사 연구.",
    category: "site-investigation",
    duration: "2022",
    funding: "Seojin Cultural Heritage",
    funding_ko: "서진문화유산",
    keywords: ["Murals", "Temple Heritage", "Scientific Investigation", "Wall Paintings"],
    keywords_ko: ["벽화", "사찰 문화재", "과학 조사", "벽화"],
    team: ["Eun Kyung Seo", "Hyo Jeong Kim"],
    publications: [],
    images: []
  },
  {
    id: 6,
    title_en: "Clay Analysis of Four Guardian Kings Statues at Gongju Magoksa Temple",
    title_ko: "공주 마곡사 사천왕상 소조토 분석",
    description_en: "Analysis of clay materials used in Four Guardian Kings statues at Magoksa Temple, Gongju.",
    description_ko: "공주 마곡사 사천왕상 제작에 사용된 소조토에 대한 분석.",
    category: "site-investigation",
    duration: "2022",
    funding: "Cultural Heritage Administration",
    funding_ko: "문화재청",
    keywords: ["Clay Analysis", "Buddhist Statues", "Material Analysis", "Temple Heritage"],
    keywords_ko: ["소조토 분석", "불상", "재료 분석", "사찰 문화재"],
    team: ["Sang Ok Lee", "Su Jeong Kim"],
    publications: [],
    images: []
  },
  {
    id: 7,
    title_en: "Surface Investigation and Compositional Analysis of Outdoor Sculptures at MMCA Gwacheon",
    title_ko: "국립현대미술관 과천관 야외조각공원 조각작품 DB 구축용 표면 조사 및 성분분석",
    description_en: "Surface investigation and compositional analysis for database construction of outdoor sculpture park at MMCA Gwacheon.",
    description_ko: "국립현대미술관 과천관 야외조각공원 조각작품 DB 구축을 위한 표면 조사 및 성분분석.",
    category: "site-investigation",
    duration: "2022",
    funding: "Groo",
    funding_ko: "그루",
    keywords: ["Sculpture", "Surface Analysis", "Composition Analysis", "Modern Art"],
    keywords_ko: ["조각", "표면 조사", "성분 분석", "현대미술"],
    team: ["Min Je Kim", "Gyu Ri Choi"],
    publications: [],
    images: []
  },
  {
    id: 8,
    title_en: "Scientific Analysis of Gangjin Kim Hae Kim Clan's Funeral Bier at Gwangju Metropolitan Museum",
    title_ko: "광주광역시립박물관 강진김해김씨가 상여 과학적 분석",
    description_en: "Scientific analysis of traditional funeral bier from Gangjin Kim Hae Kim Clan at Gwangju Metropolitan Museum.",
    description_ko: "광주광역시립박물관 소장 강진김해김씨가 상여에 대한 과학적 분석.",
    category: "site-investigation",
    duration: "2022",
    funding: "Woori Cultural Heritage",
    funding_ko: "우리문화재",
    keywords: ["Funeral Bier", "Traditional Culture", "Scientific Analysis", "Folk Heritage"],
    keywords_ko: ["상여", "전통문화", "과학 분석", "민속문화재"],
    team: ["Eun Kyung Seo", "Ji Eun Hyun"],
    publications: [],
    images: []
  },
  
  // Heritage Conservation (문화유산 보존처리)
  {
    id: 9,
    title_en: "Conservation of Excavated Artifacts from Ganghwa Changri",
    title_ko: "강화 창리 출토 유물 보존처리",
    description_en: "Conservation treatment of artifacts excavated from Changri site in Ganghwa.",
    description_ko: "강화 창리 유적지에서 출토된 유물에 대한 보존처리 작업.",
    category: "excavated-conservation",
    duration: "2020",
    funding: "History & Cultural Heritage Institute",
    funding_ko: "(재)역사문화재연구원",
    keywords: ["Excavated Artifacts", "Conservation", "Archaeological Site", "Ganghwa"],
    keywords_ko: ["출토 유물", "보존처리", "고고학 유적", "강화"],
    team: ["Sang Ok Lee", "Sin Gi Kim", "Su Jeong Kim"],
    publications: [],
    images: []
  }
];

// Add new project function
function addProject(projectData) {
  const newId = Math.max(...projects.map(p => p.id)) + 1;
  projectData.id = newId;
  projects.push(projectData);
  renderProjects();
}

// Update project function
function updateProject(id, projectData) {
  const index = projects.findIndex(p => p.id === id);
  if (index !== -1) {
    projects[index] = { ...projects[index], ...projectData };
    renderProjects();
  }
}

// Remove project function
function removeProject(id) {
  const index = projects.findIndex(p => p.id === id);
  if (index !== -1) {
    projects.splice(index, 1);
    renderProjects();
  }
}

// Get current language
function getCurrentLanguage() {
  // Check localStorage first
  const savedLang = localStorage.getItem('preferred-language');
  if (savedLang) return savedLang;
  
  // Check active button
  const koBtn = document.getElementById('lang-ko');
  const enBtn = document.getElementById('lang-en');
  
  if (koBtn && koBtn.classList.contains('active')) return 'ko';
  if (enBtn && enBtn.classList.contains('active')) return 'en';
  
  // Check document lang attribute
  const docLang = document.documentElement.lang;
  if (docLang === 'ko' || docLang === 'en') return docLang;
  
  return 'ko'; // default to Korean
}

// Create modern project card HTML (compact design without placeholder)
function createModernProjectCard(project, lang) {
  const title = lang === 'ko' ? project.title_ko : project.title_en;
  const description = lang === 'ko' ? project.description_ko : project.description_en;
  const funding = lang === 'ko' ? (project.funding_ko || project.funding) : project.funding;
  const keywords = lang === 'ko' ? (project.keywords_ko || project.keywords) : project.keywords;

  const categoryIcons = {
    'excavated-conservation': '⛏️',
    'site-investigation': '🔍',
    'designation-research': '📜',
    'preservation-research': '🛡️'
  };

  return `
    <div class="modern-project-card animate-on-scroll" data-category="${project.category}">
      <div class="project-content">
        <div class="project-category-badge ${project.category}">
          <span class="category-icon">${categoryIcons[project.category] || '🔬'}</span>
          <span class="category-text">${getCategoryName(project.category, lang)}</span>
        </div>
        
        <h3 class="project-title">${title}</h3>
        
        <div class="project-meta">
          <div class="meta-item">
            <i class="fa fa-calendar"></i>
            <span>${project.duration}</span>
          </div>
          <div class="meta-item">
            <i class="fa fa-building"></i>
            <span>${funding}</span>
          </div>
          <div class="meta-item">
            <i class="fa fa-users"></i>
            <span>${project.team.length} ${lang === 'ko' ? '명' : 'members'}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Create revolutionary project card HTML
function createRevolutionaryProjectCard(project, lang) {
  const title = lang === 'ko' ? project.title_ko : project.title_en;
  const description = lang === 'ko' ? project.description_ko : project.description_en;
  const funding = lang === 'ko' ? (project.funding_ko || project.funding) : project.funding;
  const keywords = lang === 'ko' ? (project.keywords_ko || project.keywords) : project.keywords;

  const categoryIcons = {
    'excavated-conservation': '⛏️',
    'site-investigation': '🔍',
    'designation-research': '📜',
    'preservation-research': '🛡️'
  };

  return `
    <div class="revolutionary-project-card animate-on-scroll" data-category="${project.category}">
      <div class="project-card-header">
        <div class="category-badge ${project.category}">
          <span class="category-icon">${categoryIcons[project.category] || '🔬'}</span>
          <span class="category-text">${getCategoryName(project.category, lang)}</span>
        </div>
      </div>
      
      <div class="project-visual">
        <div class="project-gradient ${project.category}"></div>
        <div class="project-pattern"></div>
        <div class="floating-elements">
          <span class="float-element">⚗️</span>
          <span class="float-element">🧬</span>
          <span class="float-element">📡</span>
        </div>
      </div>
      
      <div class="project-content">
        <h3 class="project-title">${title}</h3>
        <p class="project-description">${description}</p>
        
        <div class="project-meta">
          <div class="meta-item">
            <span class="meta-icon">📅</span>
            <span class="meta-text">${project.duration}</span>
          </div>
          <div class="meta-item">
            <span class="meta-icon">💼</span>
            <span class="meta-text">${funding}</span>
          </div>
          <div class="meta-item">
            <span class="meta-icon">👥</span>
            <span class="meta-text">${project.team.length} ${lang === 'ko' ? '명' : 'members'}</span>
          </div>
        </div>
        
        <div class="project-keywords">
          ${keywords.slice(0, 3).map(keyword => `
            <span class="keyword-tag">${keyword}</span>
          `).join('')}
        </div>
      </div>
      
      <div class="project-actions">
        <button class="action-btn primary" onclick="viewProjectDetails(${project.id})">
          <span class="btn-text">${lang === 'ko' ? '자세히 보기' : 'View Details'}</span>
          <span class="btn-icon">→</span>
        </button>
        <button class="action-btn secondary">
          <span class="btn-icon">❤️</span>
        </button>
      </div>
    </div>
  `;
}

// Legacy create project card function (keeping for compatibility)
function createProjectCard(project, lang) {
  const categoryIcons = {
    'excavated-conservation': '⛏️',
    'site-investigation': '🔍',
    'designation-research': '📜',
    'preservation-research': '🛡️'
  };

  const placeholderIcon = categoryIcons[project.category] || '🧪';

  return `
    <div class="project-item animate-on-scroll" data-category="${project.category}" data-status="${project.status}" data-id="${project.id}">
      <div class="project-image">
        ${project.images && project.images.length > 0 ? 
          `<img src="${project.images[0]}" alt="${lang === 'ko' ? project.title_ko : project.title_en}" 
               onerror="this.parentElement.innerHTML='<div class=\\"project-image-placeholder\\">${placeholderIcon}</div>'">` : 
          `<div class="project-image-placeholder">${placeholderIcon}</div>`
        }
      </div>
      <div class="project-content">
        <div class="project-header">
          <span class="project-category">${getCategoryName(project.category, lang)}</span>
          <span class="project-status ${project.status}">${getStatusName(project.status, lang)}</span>
        </div>
        <h3>${lang === 'ko' ? project.title_ko : project.title_en}</h3>
        <p>${lang === 'ko' ? project.description_ko : project.description_en}</p>
        <div class="project-meta">
          <span class="project-duration">${project.duration}</span>
          <span class="project-funding">${lang === 'ko' ? (project.funding_ko || project.funding) : project.funding}</span>
        </div>
        ${project.keywords && project.keywords.length > 0 ? `
          <div class="project-keywords">
            ${(lang === 'ko' ? project.keywords_ko : project.keywords).slice(0, 3).map(keyword => 
              `<span class="keyword-tag">${keyword}</span>`
            ).join('')}
          </div>
        ` : ''}
        <div class="project-actions">
          <button class="view-details-btn" onclick="viewProjectDetails(${project.id})">
            <span class="lang lang-en">View Details</span>
            <span class="lang lang-ko" style="display:none;">자세히 보기</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

// Get category display name
function getCategoryName(category, lang) {
  const categories = {
    "excavated-conservation": { en: "Excavated Artifact Conservation", ko: "출토 유물 보존처리" },
    "site-investigation": { en: "Site Survey & Manufacturing Analysis", ko: "문화유산 현장 조사 및 제작기법 분석" },
    "designation-research": { en: "Heritage Designation Research", ko: "국가유산 지정 및 승격 연구" },
    "preservation-research": { en: "Preservation Strategy Research", ko: "문화유산 보존 방안 연구" }
  };
  return categories[category] ? categories[category][lang] : category;
}

// Get status display name
function getStatusName(status, lang) {
  const statuses = {
    ongoing: { en: "Ongoing", ko: "진행 중" },
    completed: { en: "Completed", ko: "완료" },
    planned: { en: "Planned", ko: "계획됨" }
  };
  return statuses[status] ? statuses[status][lang] : status;
}

// Filter projects with new design
function filterProjects(category = 'all') {
  const projectItems = document.querySelectorAll('.modern-project-card, .revolutionary-project-card, .project-item');
  
  let visibleCount = 0;
  
  projectItems.forEach(item => {
    const itemCategory = item.getAttribute('data-category');
    
    const categoryMatch = category === 'all' || itemCategory === category;
    
    if (categoryMatch) {
      item.style.display = '';
      item.style.animation = 'fadeInUp 0.6s ease-out forwards';
      visibleCount++;
    } else {
      item.style.display = 'none';
    }
  });
  
  // Show message if no results
  const container = document.querySelector('.modern-projects-grid, .revolutionary-projects-grid, .projects-grid');
  const noResultsMsg = document.getElementById('noResultsMessage');
  
  if (visibleCount === 0) {
    if (!noResultsMsg) {
      const msg = document.createElement('div');
      msg.id = 'noResultsMessage';
      msg.className = 'no-results-message';
      msg.innerHTML = `
        <span class="lang lang-en">No projects found matching the selected filters.</span>
        <span class="lang lang-ko" style="display:none;">선택한 필터와 일치하는 프로젝트가 없습니다.</span>
      `;
      if (container) container.appendChild(msg);
    }
  } else {
    if (noResultsMsg) noResultsMsg.remove();
  }
  
  // Update filter button states
  updateSmartFilterStates(category, status);
}

// Update smart filter button states
function updateSmartFilterStates(activeCategory, activeStatus) {
  // Update category filters
  document.querySelectorAll('.filter-btn[data-category]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === activeCategory);
  });
  
  // Update status filters
  document.querySelectorAll('.filter-btn[data-status]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.status === activeStatus);
  });
}

// Render all projects with revolutionary design
function renderProjects() {
  // Try new showcase first, fall back to legacy
  const projectShowcase = document.getElementById('projectShowcase');
  const projectList = document.getElementById('projectList');
  
  const container = projectShowcase || projectList;
  if (!container) return;

  const lang = getCurrentLanguage();
  
  if (projectShowcase) {
    // Use modern card design
    container.innerHTML = `
      <div class="modern-projects-grid">
        ${projects.map(project => createModernProjectCard(project, lang)).join('')}
      </div>
    `;
  } else {
    // Use modern card design for main listing too
    container.innerHTML = `
      <div class="modern-projects-grid">
        ${projects.map(project => createModernProjectCard(project, lang)).join('')}
      </div>
    `;
  }
  
  // Re-initialize animations after rendering
  setTimeout(() => {
    initAnimations();
  }, 50);
}

// View project details - removed for compact design
function viewProjectDetails(id) {
  // Function removed - compact design without modals
  return;
}

// Initialize projects page
function initProjects() {
  // Listen for language changes - Desktop (lang-option buttons)
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
      // Delay to ensure language switch completes first
      setTimeout(() => {
        renderProjects();
      }, 100);
    });
  });
  
  // Listen for language changes - Mobile (langToggle button)
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      // Only for mobile screens
      if (window.innerWidth <= 1002) {
        // Delay to ensure language switch completes first
        setTimeout(() => {
          renderProjects();
        }, 150);
      }
    });
  }

  // Check URL parameters for initial filter
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get('category');
  
  // Filter functionality
  let currentCategory = categoryParam || 'all';

  // Set initial active state based on URL parameter
  if (categoryParam) {
    document.querySelectorAll('[data-category]').forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-category') === categoryParam) {
        btn.classList.add('active');
      }
    });
    // Make sure 'all' button is not active if specific category is selected
    if (categoryParam !== 'all') {
      const allBtn = document.querySelector('[data-category="all"]');
      if (allBtn) allBtn.classList.remove('active');
    }
  }

  // Filter button functionality for category filters
  document.querySelectorAll('.filter-btn[data-category]:not(.nav-project-filter)').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // Update active state
      document.querySelectorAll('.filter-btn[data-category]:not(.nav-project-filter)').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      currentCategory = btn.getAttribute('data-category');
      filterProjects(currentCategory);
      
      // Update URL parameter
      const newUrl = new URL(window.location);
      if (currentCategory === 'all') {
        newUrl.searchParams.delete('category');
      } else {
        newUrl.searchParams.set('category', currentCategory);
      }
      window.history.replaceState({}, '', newUrl);
    });
  });

  // Initial render with filter if URL parameter exists
  renderProjects();
  if (categoryParam && categoryParam !== 'all') {
    filterProjects(currentCategory);
  }
}

// Make functions available globally
window.viewProjectDetails = viewProjectDetails;
window.addProject = addProject;
window.updateProject = updateProject;
window.removeProject = removeProject;

// Animation System (Members Page Style)
function initAnimations() {
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);
  
  setTimeout(() => {
    document.querySelectorAll('.animate-on-scroll').forEach(card => {
      observer.observe(card);
    });
  }, 50);
}

// Add banner animation
function addBannerAnimation() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes bannerFadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .page-banner-title,
    .page-banner-subtitle {
      animation: bannerFadeInUp 0.8s ease-out forwards;
      opacity: 0;
    }
    
    .page-banner-title {
      animation-delay: 0.2s;
    }
    
    .page-banner-subtitle {
      animation-delay: 0.4s;
    }
  `;
  document.head.appendChild(style);
}

// Project detail modal function - removed for compact design
function showProjectDetail(projectId) {
  // Function removed - compact design without modals
  return;
}

function closeProjectDetail() {
  // Function removed - compact design without modals
  return;
}

// Initialize when DOM is loaded or immediately if already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initProjects();
    addBannerAnimation();
    setTimeout(() => {
      initAnimations();
    }, 100);
  });
} else {
  initProjects();
  addBannerAnimation();
  setTimeout(() => {
    initAnimations();
  }, 100);
}