// Gallery page specific functionality

// Gallery data
const galleryItems = [
  {
    id: 1,
    category: "lab-activities",
    title_en: "3D Scanning Process",
    title_ko: "3D 스캐닝 과정",
    description_en: "Team members conducting high-precision 3D scanning of cultural heritage artifacts.",
    description_ko: "문화유산 유물의 고정밀 3D 스캐닝을 수행하는 연구팀 모습입니다.",
    image: "assets/gallery/3d-scanning-process.jpg",
    date: "2024-03-15",
    location: "Conservation Science Lab",
    location_ko: "보존과학연구소",
    photographer: "Lab Team",
    photographer_ko: "연구소 팀",
    tags: ["3D Scanning", "Documentation", "Research"],
    tags_ko: ["3D 스캐닝", "문서화", "연구"]
  },
  {
    id: 2,
    category: "equipment",
    title_en: "Digital Microscope Analysis",
    title_ko: "디지털 현미경 분석",
    description_en: "Detailed surface analysis using our high-resolution digital microscopy system.",
    description_ko: "고해상도 디지털 현미경 시스템을 이용한 세밀한 표면 분석 모습입니다.",
    image: "assets/gallery/microscope-analysis.jpg",
    date: "2024-02-28",
    location: "Conservation Science Lab",
    location_ko: "보존과학연구소",
    photographer: "Min Je Kim",
    photographer_ko: "김민제",
    tags: ["Microscopy", "Analysis", "Equipment"],
    tags_ko: ["현미경", "분석", "장비"]
  },
  {
    id: 3,
    category: "research",
    title_en: "Heritage Restoration Workshop",
    title_ko: "문화재 복원 워크숍",
    description_en: "Students and researchers participating in a hands-on heritage restoration workshop.",
    description_ko: "문화재 복원 실습 워크숍에 참여하는 학생들과 연구자들의 모습입니다.",
    image: "assets/gallery/restoration-workshop.jpg",
    date: "2024-01-20",
    location: "University Workshop Room",
    location_ko: "대학 워크숍실",
    photographer: "Sang Ok Lee",
    photographer_ko: "이상옥",
    tags: ["Workshop", "Education", "Restoration"],
    tags_ko: ["워크숍", "교육", "복원"]
  },
  {
    id: 4,
    category: "conferences",
    title_en: "International Heritage Conference Presentation",
    title_ko: "국제 문화재 컨퍼런스 발표",
    description_en: "Lab members presenting research findings at an international cultural heritage preservation conference.",
    description_ko: "국제 문화유산 보존 컨퍼런스에서 연구 결과를 발표하는 연구소 구성원들입니다.",
    image: "assets/gallery/conference-presentation.jpg",
    date: "2023-11-15",
    location: "Seoul Convention Center",
    location_ko: "서울 컨벤션 센터",
    photographer: "Conference Staff",
    photographer_ko: "컨퍼런스 스태프",
    tags: ["Conference", "Presentation", "International"],
    tags_ko: ["컨퍼런스", "발표", "국제"]
  },
  {
    id: 5,
    category: "achievements",
    title_en: "Research Award Ceremony",
    title_ko: "연구상 시상식",
    description_en: "Team receiving recognition for outstanding contributions to heritage conservation technology.",
    description_ko: "문화유산 보존 기술에 대한 뛰어난 기여를 인정받는 시상식 모습입니다.",
    image: "assets/gallery/award-ceremony.jpg",
    date: "2023-12-10",
    location: "Ministry of Culture",
    location_ko: "문화체육관광부",
    photographer: "Official Photographer",
    photographer_ko: "공식 사진가",
    tags: ["Award", "Recognition", "Achievement"],
    tags_ko: ["수상", "인정", "성과"]
  },
  {
    id: 6,
    category: "lab-activities",
    title_en: "3D Printing Process",
    title_ko: "3D 프린팅 과정",
    description_en: "Metal 3D printing process for creating heritage restoration components.",
    description_ko: "문화재 복원 부품 제작을 위한 금속 3D 프린팅 과정입니다.",
    image: "assets/gallery/3d-printing-process.jpg",
    date: "2024-04-05",
    location: "Conservation Science Lab",
    location_ko: "보존과학연구소",
    photographer: "Jeong Yeon Kim",
    photographer_ko: "김정연",
    tags: ["3D Printing", "Manufacturing", "Innovation"],
    tags_ko: ["3D 프린팅", "제조", "혁신"]
  },
  {
    id: 7,
    category: "equipment",
    title_en: "XRF Analysis Setup",
    title_ko: "XRF 분석 설정",
    description_en: "Setting up the portable X-ray fluorescence spectrometer for material analysis.",
    description_ko: "재료 분석을 위한 휴대용 X선 형광 분광기 설정 모습입니다.",
    image: "assets/gallery/xrf-analysis.jpg",
    date: "2024-03-22",
    location: "Conservation Science Lab",
    location_ko: "보존과학연구소",
    photographer: "Lab Team",
    photographer_ko: "연구소 팀",
    tags: ["XRF", "Analysis", "Non-destructive"],
    tags_ko: ["XRF", "분석", "비파괴"]
  },
  {
    id: 8,
    category: "research",
    title_en: "Collaborative Research Meeting",
    title_ko: "공동 연구 회의",
    description_en: "Interdisciplinary research meeting with international collaborators via video conference.",
    description_ko: "화상회의를 통한 국제 공동연구자들과의 학제간 연구 회의 모습입니다.",
    image: "assets/gallery/research-meeting.jpg",
    date: "2024-02-14",
    location: "Conservation Science Lab",
    location_ko: "보존과학연구소",
    photographer: "Admin Staff",
    photographer_ko: "행정 직원",
    tags: ["Collaboration", "International", "Research"],
    tags_ko: ["협력", "국제", "연구"]
  }
];

// Add new gallery item function
function addGalleryItem(itemData) {
  const newId = Math.max(...galleryItems.map(item => item.id)) + 1;
  itemData.id = newId;
  galleryItems.push(itemData);
  renderGallery();
}

// Update gallery item function
function updateGalleryItem(id, itemData) {
  const index = galleryItems.findIndex(item => item.id === id);
  if (index !== -1) {
    galleryItems[index] = { ...galleryItems[index], ...itemData };
    renderGallery();
  }
}

// Remove gallery item function
function removeGalleryItem(id) {
  const index = galleryItems.findIndex(item => item.id === id);
  if (index !== -1) {
    galleryItems.splice(index, 1);
    renderGallery();
  }
}

// Get current language
function getCurrentLanguage() {
  return document.getElementById('lang-ko') && document.getElementById('lang-ko').classList.contains('active') ? 'ko' : 'ko';
}

// Create gallery item HTML
function createGalleryItem(item, lang) {
  const title = lang === 'ko' ? item.title_ko : item.title_en;
  const description = lang === 'ko' ? item.description_ko : item.description_en;
  const location = lang === 'ko' ? item.location_ko : item.location;
  const photographer = lang === 'ko' ? item.photographer_ko : item.photographer;
  const tags = lang === 'ko' ? item.tags_ko : item.tags;
  
  return `
    <div class="gallery-item animate-on-scroll" data-category="${item.category}" data-id="${item.id}">
      <div class="gallery-image">
        <img src="${item.image}" alt="${title}" loading="lazy" onerror="this.src='assets/placeholder.jpg'">
        <div class="gallery-overlay">
          <div class="gallery-info">
            <h3>${title}</h3>
            <p>${description}</p>
            <div class="gallery-meta">
              <span class="date">${item.date}</span>
              <span class="location">${location}</span>
              <span class="photographer">
                <span class="lang lang-en">Photo by: ${photographer}</span>
                <span class="lang lang-ko" style="display:none;">촬영: ${photographer}</span>
              </span>
            </div>
            <div class="gallery-tags">
              ${tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
          </div>
          <button class="gallery-expand" onclick="openLightbox(${item.id})">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;
}

// Filter gallery items
function filterGallery(category = 'all') {
  const galleryItemElements = document.querySelectorAll('.gallery-item');
  
  galleryItemElements.forEach(item => {
    const itemCategory = item.getAttribute('data-category');
    
    if (category === 'all' || itemCategory === category) {
      item.style.display = '';
      item.style.animation = 'fadeIn 0.3s ease-in';
    } else {
      item.style.display = 'none';
    }
  });
}

// Render all gallery items
function renderGallery() {
  const galleryContainer = document.querySelector('.gallery-grid');
  if (!galleryContainer) return;

  const lang = getCurrentLanguage();
  galleryContainer.innerHTML = galleryItems.map(item => createGalleryItem(item, lang)).join('');
  
  // Re-initialize animations after rendering
  setTimeout(() => {
    initAnimations();
  }, 50);
}

// Sort gallery items by date, title, or category
function sortGallery(criteria = 'date', order = 'desc') {
  galleryItems.sort((a, b) => {
    let comparison = 0;
    
    switch (criteria) {
      case 'date':
        comparison = new Date(a.date) - new Date(b.date);
        break;
      case 'title':
        const titleA = getCurrentLanguage() === 'ko' ? a.title_ko : a.title_en;
        const titleB = getCurrentLanguage() === 'ko' ? b.title_ko : b.title_en;
        comparison = titleA.localeCompare(titleB);
        break;
      case 'category':
        comparison = a.category.localeCompare(b.category);
        break;
    }
    
    return order === 'desc' ? -comparison : comparison;
  });
  
  renderGallery();
}

// Open lightbox for image viewing
function openLightbox(id) {
  const item = galleryItems.find(item => item.id === id);
  if (!item) return;

  const lang = getCurrentLanguage();
  const title = lang === 'ko' ? item.title_ko : item.title_en;
  const description = lang === 'ko' ? item.description_ko : item.description_en;
  const location = lang === 'ko' ? item.location_ko : item.location;
  const photographer = lang === 'ko' ? item.photographer_ko : item.photographer;
  const tags = lang === 'ko' ? item.tags_ko : item.tags;

  // Create lightbox if it doesn't exist
  let lightbox = document.getElementById('gallery-lightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'gallery-lightbox';
    lightbox.className = 'lightbox';
    document.body.appendChild(lightbox);
  }

  lightbox.innerHTML = `
    <div class="lightbox-content">
      <button class="lightbox-close" onclick="closeLightbox()">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <div class="lightbox-image">
        <img src="${item.image}" alt="${title}">
      </div>
      <div class="lightbox-info">
        <h2>${title}</h2>
        <p>${description}</p>
        <div class="lightbox-meta">
          <div class="meta-item">
            <strong>
              <span class="lang lang-en">Date:</span>
              <span class="lang lang-ko" style="display:none;">날짜:</span>
            </strong>
            <span>${item.date}</span>
          </div>
          <div class="meta-item">
            <strong>
              <span class="lang lang-en">Location:</span>
              <span class="lang lang-ko" style="display:none;">장소:</span>
            </strong>
            <span>${location}</span>
          </div>
          <div class="meta-item">
            <strong>
              <span class="lang lang-en">Photographer:</span>
              <span class="lang lang-ko" style="display:none;">촬영자:</span>
            </strong>
            <span>${photographer}</span>
          </div>
        </div>
        <div class="lightbox-tags">
          ${tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
    </div>
  `;

  lightbox.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

// Close lightbox
function closeLightbox() {
  const lightbox = document.getElementById('gallery-lightbox');
  if (lightbox) {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

// Initialize gallery page
function initGallery() {
  
  // Override setLang function to include gallery rendering
  const originalSetLang = window.setLang;
  window.setLang = function(lang) {
    originalSetLang(lang);
    renderGallery();
  };

  // Filter functionality
  const galleryFilters = document.querySelectorAll('.filter-btn');
  
  galleryFilters.forEach(filter => {
    filter.addEventListener('click', () => {
      // Update active state
      galleryFilters.forEach(f => f.classList.remove('active'));
      filter.classList.add('active');
      
      const filterCategory = filter.getAttribute('data-filter');
      filterGallery(filterCategory);
    });
  });

  // Add sorting functionality
  const sortContainer = document.createElement('div');
  sortContainer.className = 'sort-container';
  sortContainer.innerHTML = `
    <label for="sort-select">
      <span class="lang lang-en">Sort by:</span>
      <span class="lang lang-ko" style="display:none;">정렬:</span>
    </label>
    <select id="sort-select">
      <option value="date-desc">
        <span class="lang lang-en">Date (Newest First)</span>
        <span class="lang lang-ko" style="display:none;">날짜 (최신순)</span>
      </option>
      <option value="date-asc">
        <span class="lang lang-en">Date (Oldest First)</span>
        <span class="lang lang-ko" style="display:none;">날짜 (오래된순)</span>
      </option>
      <option value="title-asc">
        <span class="lang lang-en">Title (A-Z)</span>
        <span class="lang lang-ko" style="display:none;">제목 (가-하)</span>
      </option>
      <option value="category-asc">
        <span class="lang lang-en">Category</span>
        <span class="lang lang-ko" style="display:none;">카테고리</span>
      </option>
    </select>
  `;

  const filterContainer = document.querySelector('.gallery-filter-container');
  if (filterContainer) {
    filterContainer.parentNode.insertBefore(sortContainer, filterContainer.nextSibling);
    
    document.getElementById('sort-select').addEventListener('change', (e) => {
      const [criteria, order] = e.target.value.split('-');
      sortGallery(criteria, order);
    });
  }

  // Close lightbox when clicking outside
  document.addEventListener('click', (e) => {
    if (e.target.id === 'gallery-lightbox') {
      closeLightbox();
    }
  });

  // Close lightbox with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });

  // Initial render
  renderGallery();
}

// Make functions available globally
window.addGalleryItem = addGalleryItem;
window.updateGalleryItem = updateGalleryItem;
window.removeGalleryItem = removeGalleryItem;
window.sortGallery = sortGallery;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;

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

// Initialize when DOM is loaded or immediately if already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGallery);
} else {
  initGallery();
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

// Initialize banner animation immediately
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    addBannerAnimation();
    setTimeout(() => {
      initAnimations();
    }, 100);
  });
} else {
  addBannerAnimation();
  setTimeout(() => {
    initAnimations();
  }, 100);
}