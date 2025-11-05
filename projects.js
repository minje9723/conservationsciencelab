// Projects page specific functionality

// Projects data - 각 카테고리별 2개씩
const projects = [
  // Site Survey & Manufacturing Analysis (현장 조사 및 제작기법 분석)
  {
    id: 1,
    title_en: "Scientific Analysis of Baekje Gold Ornaments",
    title_ko: "백제 금제 장신구 과학적 분석 연구",
    description_en: "Comprehensive scientific investigation of manufacturing techniques and material composition of Baekje period gold ornaments using advanced analytical methods.",
    description_ko: "첨단 분석 방법을 활용한 백제시대 금제 장신구의 제작기법 및 재질 구성에 대한 종합 과학 조사.",
    category: "site-investigation",
    duration: "2024 - 2026",
    funding: "National Research Foundation of Korea",
    funding_ko: "한국연구재단",
    keywords: ["Gold Ornaments", "Baekje", "Scientific Analysis", "XRF", "SEM-EDS"],
    keywords_ko: ["금제 장신구", "백제", "과학 분석", "형광분석", "전자현미경"],
    team: ["Sang Ok Lee", "Min Je Kim", "Gyu Ri Choi"],
    publications: [],
    images: []
  },
  {
    id: 2,
    title_en: "Field Investigation of Traditional Temple Murals",
    title_ko: "전통 사찰 벽화 현장 조사 연구",
    description_en: "On-site investigation and pigment analysis of deteriorating wall paintings in historic Korean Buddhist temples to develop conservation strategies.",
    description_ko: "역사적인 한국 불교 사찰의 훼손된 벽화에 대한 현장 조사 및 안료 분석을 통한 보존 방안 마련.",
    category: "site-investigation",
    duration: "2023 - 2025",
    funding: "Cultural Heritage Administration",
    funding_ko: "문화재청",
    keywords: ["Wall Paintings", "Buddhist Temple", "Pigment Analysis", "Field Survey"],
    keywords_ko: ["벽화", "사찰", "안료 분석", "현장 조사"],
    team: ["Eun Kyung Seo", "Hyo Jeong Kim", "Ji Eun Hyun"],
    publications: [],
    images: []
  },
  
  // Heritage Conservation (문화유산 보존처리)
  {
    id: 3,
    title_en: "Conservation of Excavated Iron Artifacts from Gaya",
    title_ko: "가야 출토 철제 유물 보존처리",
    description_en: "Conservation treatment of iron artifacts excavated from Gaya archaeological sites, including weapons, agricultural tools, and ornaments.",
    description_ko: "가야 유적지에서 출토된 무기, 농기구, 장신구 등 철제 유물에 대한 보존처리 작업.",
    category: "excavated-conservation",
    duration: "2024 - 2025",
    funding: "Gyeongsangnam-do Cultural Heritage Foundation",
    funding_ko: "경상남도문화재단",
    keywords: ["Iron Artifacts", "Gaya", "Conservation", "Archaeological Excavation"],
    keywords_ko: ["철제 유물", "가야", "보존처리", "고고 발굴"],
    team: ["Sang Ok Lee", "Sin Gi Kim", "Su Jeong Kim"],
    publications: [],
    images: []
  },
  {
    id: 4,
    title_en: "Restoration of Joseon Dynasty White Porcelain",
    title_ko: "조선시대 백자 복원 연구",
    description_en: "Detailed restoration and conservation of fragmented Joseon Dynasty white porcelain using both traditional methods and modern scientific techniques.",
    description_ko: "전통 기법과 현대 과학 기술을 활용한 조선시대 백자 파편의 정밀 복원 및 보존처리.",
    category: "excavated-conservation",
    duration: "2023 - 2024",
    funding: "National Palace Museum of Korea",
    funding_ko: "국립고궁박물관",
    keywords: ["White Porcelain", "Joseon Dynasty", "Ceramic Restoration", "Conservation"],
    keywords_ko: ["백자", "조선시대", "도자기 복원", "보존처리"],
    team: ["So Youn Choi", "Chae Rin Kim", "Ye Ni Heo"],
    publications: [],
    images: []
  },
  
  // Heritage Designation (국가유산 지정 및 승격 연구)
  {
    id: 5,
    title_en: "Scientific Research for Goryeo Metal Craft Designation",
    title_ko: "고려시대 금속공예품 국보 지정 과학 연구",
    description_en: "Comprehensive scientific investigation to support the national treasure designation of Goryeo Dynasty metal crafts through material and technique analysis.",
    description_ko: "재료 및 기법 분석을 통한 고려시대 금속공예품의 국보 지정을 위한 종합 과학 조사 연구.",
    category: "designation-research",
    duration: "2024 - 2025",
    funding: "Cultural Heritage Administration",
    funding_ko: "문화재청",
    keywords: ["Goryeo Dynasty", "Metal Crafts", "National Treasure", "Scientific Investigation"],
    keywords_ko: ["고려시대", "금속공예", "국보지정", "과학조사"],
    team: ["Sang Ok Lee", "Min Je Kim", "Eun Kyung Seo"],
    publications: [],
    images: []
  },
  {
    id: 6,
    title_en: "Authenticity Study for Buddhist Scripture Upgrade",
    title_ko: "불교 경전 문화재 승격 진위 검증 연구",
    description_en: "Multi-analytical research for authenticity verification of Buddhist scriptures proposed for cultural heritage status upgrade.",
    description_ko: "문화재 등급 승격이 제안된 불교 경전의 진위 검증을 위한 다중 분석 연구.",
    category: "designation-research",
    duration: "2023 - 2024",
    funding: "Buddhist Cultural Heritage Committee",
    funding_ko: "불교문화재위원회",
    keywords: ["Buddhist Scripture", "Authenticity", "Heritage Upgrade", "Verification"],
    keywords_ko: ["불교 경전", "진위 검증", "문화재 승격", "과학 조사"],
    team: ["Eun Kyung Seo", "Chae Rin Kim", "Hyo Jeong Kim"],
    publications: [],
    images: []
  },
  
  // Heritage Strategy (문화유산 보존 방안 연구)
  {
    id: 7,
    title_en: "Preventive Conservation Guidelines for Wooden Heritage",
    title_ko: "목조문화재 예방 보존 지침 개발 연구",
    description_en: "Development of comprehensive preventive conservation guidelines for wooden cultural heritage considering climate change impacts and environmental factors.",
    description_ko: "기후변화 영향과 환경 요인을 고려한 목조문화재 예방 보존 종합 지침 개발 연구.",
    category: "preservation-research",
    duration: "2023 - 2025",
    funding: "Cultural Heritage Administration",
    funding_ko: "문화재청",
    keywords: ["Wooden Heritage", "Preventive Conservation", "Climate Change", "Guidelines"],
    keywords_ko: ["목조문화재", "예방 보존", "기후변화", "보존 지침"],
    team: ["Eun Kyung Seo", "Su Jeong Kim", "Ji Eun Hyun"],
    publications: [],
    images: []
  },
  {
    id: 8,
    title_en: "IoT-based Monitoring System for Stone Heritage",
    title_ko: "석조문화재 IoT 기반 모니터링 시스템 구축",
    description_en: "Development and implementation of IoT-based real-time monitoring system for tracking deterioration of outdoor stone cultural heritage.",
    description_ko: "옥외 석조문화재의 훼손 상태를 실시간으로 추적하기 위한 IoT 기반 모니터링 시스템 개발 및 구축.",
    category: "preservation-research",
    duration: "2024 - 2026",
    funding: "National Research Foundation of Korea",
    funding_ko: "한국연구재단",
    keywords: ["Stone Heritage", "IoT", "Monitoring System", "Real-time Tracking"],
    keywords_ko: ["석조문화재", "사물인터넷", "모니터링 시스템", "실시간 추적"],
    team: ["Sang Ok Lee", "Sin Gi Kim", "Gyu Ri Choi"],
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