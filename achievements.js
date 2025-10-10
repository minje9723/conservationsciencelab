// Achievements page specific functionality

// Achievements data
const achievements = [
  {
    id: 1,
    type: "publication",
    title_en: "Reverse Casting Using Metal PLA 3D Printing: A Study Based on Digital Data of Royal Seals from the National Palace Museum, Korea",
    title_ko: "국립고궁박물관 소장 어보의 디지털 데이터를 활용한 금속 PLA 3D 프린팅 기반 역주조 공법 기초 연구",
    authors: "Sangok Lee, Minje Kim, Singi Kim",
    authors_ko: "김민제, 김신기, 이상옥",
    journal: "Korea National University of Heritage",
    journal_ko: "한국전통문화대학교",
    year: 2025,
    summary_en: "This study investigates the feasibility of using metal PLA-based 3D printing and reverse casting for the restoration of metal cultural heritage, utilizing 3D scan data of royal seals from the National Palace Museum of Korea.",
    summary_ko: "본 연구는 국립고궁박물관 소장 어보의 3D 스캔 데이터를 활용하여 금속 PLA 3D 프린팅 기반 역주조 공법의 금속 문화유산 복원 적용 가능성을 평가하였습니다.",
    link: "https://www.kci.go.kr/kciportal/landing/article.kci?arti_id=ART003218035",
    doi: "",
    keywords: ["3D Printing", "Heritage Restoration", "Metal Casting"],
    keywords_ko: ["3D 프린팅", "문화재 복원", "금속 주조"]
  },
  {
    id: 2,
    type: "publication",
    title_en: "Innovative Approaches to Metal Conservation",
    title_ko: "금속 보존의 혁신적 접근",
    authors: "Conservation Science Lab Team",
    authors_ko: "보존과학연구소 연구팀",
    journal: "Journal of Heritage Science",
    journal_ko: "문화재 과학 저널",
    year: 2024,
    summary_en: "A comprehensive review of modern techniques and methodologies for metal conservation in cultural heritage contexts.",
    summary_ko: "문화유산 맥락에서 금속 보존을 위한 현대적 기술과 방법론의 종합적 검토.",
    link: "",
    doi: "10.1186/s40494-024-01234-x",
    keywords: ["Metal Conservation", "Heritage Science", "Conservation Methods"],
    keywords_ko: ["금속 보존", "문화재 과학", "보존 방법"]
  },
  {
    id: 3,
    type: "conference",
    title_en: "Digital Heritage Documentation and 3D Reconstruction",
    title_ko: "디지털 유산 문서화 및 3D 복원",
    authors: "Min Je Kim, Jeong Yeon Kim",
    authors_ko: "김민제, 김정연",
    event: "International Conference on Cultural Heritage Preservation",
    event_ko: "문화유산 보존 국제 컨퍼런스",
    year: 2024,
    summary_en: "Presentation on advanced 3D scanning techniques for cultural heritage documentation and digital reconstruction methodologies.",
    summary_ko: "문화유산 문서화를 위한 고급 3D 스캐닝 기술과 디지털 복원 방법론에 대한 발표.",
    link: "",
    location: "Seoul, Korea",
    location_ko: "대한민국 서울",
    keywords: ["3D Scanning", "Digital Documentation", "Heritage Preservation"],
    keywords_ko: ["3D 스캐닝", "디지털 문서화", "문화유산 보존"]
  },
  {
    id: 4,
    type: "award",
    title_en: "National Heritage Conservation Technology Award",
    title_ko: "국가유산 보존기술상",
    recipient: "Conservation Science Lab",
    recipient_ko: "보존과학연구소",
    organization: "Ministry of Culture, Sports and Tourism",
    organization_ko: "문화체육관광부",
    year: 2023,
    summary_en: "Recognition for outstanding contributions to the development of innovative conservation technologies for Korean cultural heritage.",
    summary_ko: "한국 문화유산을 위한 혁신적인 보존 기술 개발에 대한 뛰어난 기여를 인정받은 상.",
    link: "",
    category: "Technology Innovation",
    category_ko: "기술 혁신",
    keywords: ["Technology Award", "Heritage Conservation", "Innovation"],
    keywords_ko: ["기술상", "문화재 보존", "혁신"]
  },
  {
    id: 5,
    type: "patent",
    title_en: "Method for 3D Printing-based Heritage Restoration",
    title_ko: "3D 프린팅 기반 문화재 복원 방법",
    inventors: "Sang Ok Lee, Min Je Kim",
    inventors_ko: "이상옥, 김민제",
    patent_office: "Korean Intellectual Property Office",
    patent_office_ko: "한국특허청",
    year: 2024,
    patent_number: "KR-2024-0123456",
    summary_en: "Patent for innovative 3D printing methodology specifically designed for cultural heritage restoration applications.",
    summary_ko: "문화재 복원 응용을 위해 특별히 설계된 혁신적인 3D 프린팅 방법론에 대한 특허.",
    link: "",
    keywords: ["3D Printing Patent", "Heritage Restoration", "Innovation"],
    keywords_ko: ["3D 프린팅 특허", "문화재 복원", "혁신"]
  }
];

// Add new achievement function
function addAchievement(achievementData) {
  const newId = Math.max(...achievements.map(a => a.id)) + 1;
  achievementData.id = newId;
  achievements.push(achievementData);
  renderAchievements();
}

// Update achievement function
function updateAchievement(id, achievementData) {
  const index = achievements.findIndex(a => a.id === id);
  if (index !== -1) {
    achievements[index] = { ...achievements[index], ...achievementData };
    renderAchievements();
  }
}

// Remove achievement function
function removeAchievement(id) {
  const index = achievements.findIndex(a => a.id === id);
  if (index !== -1) {
    achievements.splice(index, 1);
    renderAchievements();
  }
}

// Get current language
function getCurrentLanguage() {
  // Check localStorage first, then button state
  const savedLang = localStorage.getItem('preferred-language');
  if (savedLang) {
    return savedLang;
  }
  return document.getElementById('lang-ko') && document.getElementById('lang-ko').classList.contains('active') ? 'ko' : 'en';
}

// Get type icon
function getTypeIcon(type) {
  const icons = {
    publication: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>',
    conference: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>',
    patent: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>',
    award: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg>'
  };
  return icons[type] || '';
}

// Create achievement card HTML
function createAchievementCard(achievement, lang) {
  let metaInfo = '';
  let linkText = lang === 'ko' ? '세부정보 보기' : 'View Details';
  
  switch (achievement.type) {
    case 'publication':
      metaInfo = `
        <span class="lang lang-en">Authors: ${achievement.authors}</span>
        <span class="lang lang-ko" style="display:none;">저자: ${achievement.authors_ko || achievement.authors}</span>
        <span class="achievement-year">${achievement.year}</span>
      `;
      break;
    case 'conference':
      metaInfo = `
        <span class="lang lang-en">${achievement.event}</span>
        <span class="lang lang-ko" style="display:none;">${achievement.event_ko || achievement.event}</span>
        <span class="achievement-year">${achievement.year}</span>
      `;
      break;
    case 'award':
      metaInfo = `
        <span class="lang lang-en">${achievement.organization}</span>
        <span class="lang lang-ko" style="display:none;">${achievement.organization_ko || achievement.organization}</span>
        <span class="achievement-year">${achievement.year}</span>
      `;
      break;
    case 'patent':
      metaInfo = `
        <span class="lang lang-en">${achievement.patent_office}</span>
        <span class="lang lang-ko" style="display:none;">${achievement.patent_office_ko || achievement.patent_office}</span>
        <span class="achievement-year">${achievement.year}</span>
      `;
      break;
  }

  return `
    <li data-type="${achievement.type}" data-id="${achievement.id}" class="animate-on-scroll">
      <div class="achievement-icon">
        ${getTypeIcon(achievement.type)}
      </div>
      <div class="achievement-title">
        <span class="lang lang-en"><b>${achievement.title_en}</b></span>
        <span class="lang lang-ko" style="display:none;"><b>${achievement.title_ko}</b></span>
      </div>
      <div class="achievement-meta">
        ${metaInfo}
      </div>
      <div class="achievement-summary">
        <span class="lang lang-en">${achievement.summary_en}</span>
        <span class="lang lang-ko" style="display:none;">${achievement.summary_ko}</span>
      </div>
      ${achievement.link ? `
        <a class="achievement-link" href="${achievement.link}" target="_blank">
          <span class="lang lang-en">${linkText}</span>
          <span class="lang lang-ko" style="display:none;">${linkText}</span>
        </a>
      ` : ''}
    </li>
  `;
}

// Filter achievements
function filterAchievements(type = 'all') {
  const achievementItems = document.querySelectorAll('.achievement-list li');
  
  achievementItems.forEach(item => {
    const itemType = item.getAttribute('data-type');
    
    if (type === 'all' || itemType === type) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
  
  // Re-trigger animation for visible items
  setTimeout(() => {
    initAnimations();
  }, 50);
}

// Render all achievements
function renderAchievements() {
  const achievementsList = document.querySelector('.achievement-list');
  if (!achievementsList) return;

  const lang = getCurrentLanguage();
  achievementsList.innerHTML = achievements.map(achievement => createAchievementCard(achievement, lang)).join('');
  
  // Re-initialize animations after rendering
  setTimeout(() => {
    initAnimations();
  }, 50);
}

// Sort achievements by year, type, or title
function sortAchievements(criteria = 'year', order = 'desc') {
  achievements.sort((a, b) => {
    let comparison = 0;
    
    switch (criteria) {
      case 'year':
        comparison = a.year - b.year;
        break;
      case 'type':
        comparison = a.type.localeCompare(b.type);
        break;
      case 'title':
        const titleA = getCurrentLanguage() === 'ko' ? a.title_ko : a.title_en;
        const titleB = getCurrentLanguage() === 'ko' ? b.title_ko : b.title_en;
        comparison = titleA.localeCompare(titleB);
        break;
    }
    
    return order === 'desc' ? -comparison : comparison;
  });
  
  renderAchievements();
}

// Initialize achievements page
function initAchievements() {
  // Check URL parameters for filter
  const urlParams = new URLSearchParams(window.location.search);
  const urlFilter = urlParams.get('filter');
  
  // Override setLang function to include achievement rendering
  const originalSetLang = window.setLang;
  if (originalSetLang) {
    window.setLang = function(lang) {
      originalSetLang(lang);
      // Re-apply language to achievement items
      const currentLang = getCurrentLanguage();
      document.querySelectorAll('.lang').forEach(el => {
        if (el.classList.contains('lang-' + lang)) {
          el.style.display = '';
        } else {
          el.style.display = 'none';
        }
      });
    };
  }

  // Get filter elements once
  const navAchievementFilters = document.querySelectorAll('.nav-achievement-filter');
  const achievementFilters = document.querySelectorAll('.achievement-filter');
  
  // Navigation dropdown filter functionality
  navAchievementFilters.forEach(filter => {
    filter.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Update navigation dropdown active state
      navAchievementFilters.forEach(f => f.classList.remove('active'));
      filter.classList.add('active');
      
      // Update page filter buttons active state
      const filterType = filter.getAttribute('data-filter');
      
      achievementFilters.forEach(f => {
        if (f.getAttribute('data-filter') === filterType) {
          f.classList.add('active');
        } else {
          f.classList.remove('active');
        }
      });
      
      filterAchievements(filterType);
    });
  });

  // Page filter functionality
  achievementFilters.forEach(filter => {
    filter.addEventListener('click', () => {
      // Update page filter active state
      achievementFilters.forEach(f => f.classList.remove('active'));
      filter.classList.add('active');
      
      // Update navigation dropdown active state
      const filterType = filter.getAttribute('data-filter');
      navAchievementFilters.forEach(f => {
        if (f.getAttribute('data-filter') === filterType) {
          f.classList.add('active');
        } else {
          f.classList.remove('active');
        }
      });
      
      filterAchievements(filterType);
    });
  });

  // Add sorting functionality
  // Removed sort container functionality

  const filterContainer = document.querySelector('.achievements-filter-container');

  // Don't render from JS data initially - use HTML content
  // renderAchievements();
  
  // Set initial filter based on URL parameter or default to 'all'
  const initialFilter = urlFilter && ['publication', 'conference', 'patent', 'award'].includes(urlFilter) ? urlFilter : 'all';
  
  // Update UI to reflect the initial filter
  achievementFilters.forEach(f => {
    if (f.getAttribute('data-filter') === initialFilter) {
      f.classList.add('active');
    } else {
      f.classList.remove('active');
    }
  });
  
  navAchievementFilters.forEach(f => {
    if (f.getAttribute('data-filter') === initialFilter) {
      f.classList.add('active');
    } else {
      f.classList.remove('active');
    }
  });
  
  filterAchievements(initialFilter);
  
  // Apply current language to all elements after initialization
  // Use a longer timeout to ensure common.js initialization is complete
  setTimeout(() => {
    const currentLang = getCurrentLanguage();
    console.log('Achievements page - applying language:', currentLang);
    document.querySelectorAll('.lang').forEach(el => {
      if (el.classList.contains('lang-' + currentLang)) {
        el.style.display = '';
      } else {
        el.style.display = 'none';
      }
    });
  }, 200);
}

// Make functions available globally
window.addAchievement = addAchievement;
window.updateAchievement = updateAchievement;
window.removeAchievement = removeAchievement;
window.sortAchievements = sortAchievements;

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
function initBannerAnimation() {
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

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initAchievements();
  initBannerAnimation();
  setTimeout(() => {
    initAnimations();
  }, 100);
});