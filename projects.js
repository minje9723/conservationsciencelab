// Projects page specific functionality

// Projects data
const projects = [
  {
    id: 1,
    title_en: "Analysis of Traditional Heritage Materials",
    title_ko: "전통 문화재 재료 분석",
    description_en: "A comprehensive study on the scientific analysis and preservation of traditional Korean heritage materials using advanced analytical techniques.",
    description_ko: "고급 분석 기술을 사용한 한국 전통 문화재 재료의 과학적 분석 및 보존에 대한 종합적 연구.",
    category: "site-investigation",
    duration: "2024 - 2026",
    funding: "National Research Foundation",
    funding_ko: "한국연구재단",
    keywords: ["Material Analysis", "Heritage Preservation", "Traditional Materials"],
    keywords_ko: ["재료 분석", "유산 보존", "전통 재료"],
    team: ["Sang Ok Lee", "Min Je Kim", "Eun Kyung Seo"],
    publications: [],
    images: ["assets/projects/material-analysis-1.jpg"]
  },
  {
    id: 3,
    title_en: "Metal 3D Printing for Heritage Restoration",
    title_ko: "문화재 복원을 위한 금속 3D 프린팅",
    description_en: "Research on using metal 3D printing technology for creating replacement parts and restoration components for metal cultural heritage objects.",
    description_ko: "금속 문화유산의 교체 부품 및 복원 구성 요소 제작을 위한 금속 3D 프린팅 기술 활용 연구.",
    category: "excavated-conservation",
    duration: "2022 - 2024",
    funding: "NUCH Research Fund",
    funding_ko: "한국전통문화대학교 연구비",
    keywords: ["Metal 3D Printing", "Restoration", "Cultural Heritage"],
    keywords_ko: ["금속 3D 프린팅", "복원", "문화유산"],
    team: ["Sang Ok Lee", "Min Je Kim", "Sin Gi Kim"],
    publications: ["DOI:10.5000/heritage2025"],
    images: ["assets/projects/metal-3d-1.jpg"]
  },
  {
    id: 4,
    title_en: "Smart Materials for Preventive Conservation",
    title_ko: "예방보존을 위한 스마트 재료",
    description_en: "Development of intelligent materials and sensors for monitoring environmental conditions in museums and heritage sites.",
    description_ko: "박물관과 문화재 사이트의 환경 조건을 모니터링하기 위한 지능형 재료와 센서 개발.",
    category: "preservation-research",
    duration: "2023 - 2026",
    funding: "European Union Horizon",
    funding_ko: "유럽연합 호라이즌",
    keywords: ["Smart Materials", "Environmental Monitoring", "Sensors"],
    keywords_ko: ["스마트 재료", "환경 모니터링", "센서"],
    team: ["So Youn Choi", "Gyu Ri Choi", "Ye Ni Heo"],
    publications: [],
    images: []
  },
  {
    id: 5,
    title_en: "Digital Reconstruction of Lost Cultural Heritage",
    title_ko: "소실된 문화유산의 디지털 복원",
    description_en: "Virtual reconstruction of destroyed or lost cultural heritage sites using historical documentation and archaeological evidence.",
    description_ko: "역사적 문서와 고고학적 증거를 사용하여 파괴되거나 소실된 문화유산지의 가상 복원.",
    category: "site-investigation",
    duration: "2022 - 2024",
    funding: "UNESCO Heritage Fund",
    funding_ko: "유네스코 문화유산 기금",
    keywords: ["Virtual Reconstruction", "Digital Heritage", "VR"],
    keywords_ko: ["가상 복원", "디지털 유산", "가상현실"],
    team: ["Sang Ok Lee", "Chae Rin Kim", "Hyo Jeong Kim"],
    publications: ["DOI:10.1234/heritage2023", "DOI:10.5678/digital2024"],
    images: []
  },
  {
    id: 6,
    title_en: "Nano-Conservation Materials for Stone Heritage",
    title_ko: "석조문화재를 위한 나노보존재료",
    description_en: "Research into nano-structured consolidants and protective coatings for stone cultural heritage preservation.",
    description_ko: "석조문화재 보존을 위한 나노구조 강화재와 보호 코팅 연구.",
    category: "designation-research",
    duration: "2024 - 2027",
    funding: "Korea Heritage Agency",
    funding_ko: "한국문화재청",
    keywords: ["Nanotechnology", "Stone Conservation", "Consolidants"],
    keywords_ko: ["나노기술", "석조보존", "강화재"],
    team: ["Eun Kyung Seo", "Su Jeong Kim", "Ji Eun Hyun"],
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
  return document.getElementById('lang-ko') && document.getElementById('lang-ko').classList.contains('active') ? 'ko' : 'en';
}

// Create modern project card HTML (new design inspired by the provided image)
function createModernProjectCard(project, lang) {
  const title = lang === 'ko' ? project.title_ko : project.title_en;
  const description = lang === 'ko' ? project.description_ko : project.description_en;
  const funding = lang === 'ko' ? (project.funding_ko || project.funding) : project.funding;

  const categoryColors = {
    'excavated-conservation': '#8D6E63',
    'site-investigation': '#2196F3',
    'designation-research': '#9C27B0',
    'preservation-research': '#4CAF50'
  };

  const categoryColor = categoryColors[project.category] || '#2196F3';

  return `
    <div class="modern-project-card animate-on-scroll" data-category="${project.category}">
      <div class="project-image-section">
        ${project.images && project.images.length > 0 
          ? `<img src="${project.images[0]}" alt="${title}" class="project-image" loading="lazy">`
          : `<div class="project-placeholder" style="background: linear-gradient(135deg, ${categoryColor}, ${categoryColor}33);"></div>`
        }
        <div class="project-category-tag" style="background-color: ${categoryColor};">
          ${getCategoryName(project.category, lang)}
        </div>
      </div>
      
      <div class="project-content">
        <h3 class="project-title">${title}</h3>
        <p class="project-description">${description}</p>
        
        <div class="project-meta">
          <div class="project-duration">
            <i class="fa fa-calendar"></i>
            <span>${project.duration}</span>
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
  // Override setLang function to include project rendering
  const originalSetLang = window.setLang;
  window.setLang = function(lang) {
    originalSetLang(lang);
    renderProjects();
  };

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