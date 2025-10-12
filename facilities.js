// Facilities page specific functionality

// Facilities data
const facilities = [
  {
    id: 1,
    category: "microscopy",
    name_en: "Digital Microscope System",
    name_ko: "디지털 현미경 시스템",
    model: "Leica DM4500",
    description_en: "High-resolution digital microscopy system for detailed analysis of material surfaces and structures.",
    description_ko: "재료 표면과 구조의 세밀한 분석을 위한 고해상도 디지털 현미경 시스템입니다.",
    specifications: {
      "Magnification": "40x - 1000x",
      "Resolution": "0.2 μm",
      "Camera": "5MP CCD",
      "Light Source": "LED illumination"
    },
    specifications_ko: {
      "배율": "40배 - 1000배",
      "해상도": "0.2 μm",
      "카메라": "5MP CCD",
      "조명": "LED 조명"
    },
    applications: ["Surface Analysis", "Material Characterization", "Quality Control"],
    applications_ko: ["표면 분석", "재료 특성화", "품질 관리"],
    image: "",
    status: "operational",
    year_acquired: 2022
  },
  {
    id: 2,
    category: "3d-scanning",
    name_en: "High-Precision 3D Scanner",
    name_ko: "고정밀 3D 스캐너",
    model: "FARO Focus3D X 130",
    description_en: "Advanced 3D laser scanning system for comprehensive documentation of cultural heritage objects.",
    description_ko: "문화유산 객체의 종합적인 문서화를 위한 고급 3D 레이저 스캐닝 시스템입니다.",
    specifications: {
      "Range": "0.6m - 130m",
      "Accuracy": "±2mm",
      "Measurement Speed": "976,000 points/sec",
      "Field of View": "360° × 300°"
    },
    specifications_ko: {
      "범위": "0.6m - 130m",
      "정확도": "±2mm",
      "측정 속도": "976,000 포인트/초",
      "시야각": "360° × 300°"
    },
    applications: ["Heritage Documentation", "3D Modeling", "Reverse Engineering"],
    applications_ko: ["문화재 문서화", "3D 모델링", "역설계"],
    image: "",
    status: "operational",
    year_acquired: 2023
  },
  {
    id: 3,
    category: "3d-printing",
    name_en: "Metal 3D Printer",
    name_ko: "금속 3D 프린터",
    model: "Markforged X7",
    description_en: "Industrial-grade 3D printer capable of printing with carbon fiber and metal-filled filaments.",
    description_ko: "탄소섬유와 금속 충전 필라멘트로 출력 가능한 산업용 3D 프린터입니다.",
    specifications: {
      "Build Volume": "330 × 270 × 200 mm",
      "Layer Resolution": "0.1 - 0.4 mm",
      "Materials": "Carbon Fiber, Fiberglass, Metal PLA",
      "Nozzle Temperature": "Up to 300°C"
    },
    specifications_ko: {
      "빌드 볼륨": "330 × 270 × 200 mm",
      "레이어 해상도": "0.1 - 0.4 mm",
      "재료": "탄소섬유, 유리섬유, 금속 PLA",
      "노즐 온도": "최대 300°C"
    },
    applications: ["Prototype Manufacturing", "Heritage Restoration", "Custom Tooling"],
    applications_ko: ["프로토타입 제작", "문화재 복원", "맞춤형 도구 제작"],
    image: "",
    status: "operational",
    year_acquired: 2024
  },
  {
    id: 4,
    category: "analysis",
    name_en: "X-Ray Fluorescence Spectrometer",
    name_ko: "X선 형광 분광기",
    model: "Bruker EZ200",
    description_en: "Portable XRF analyzer for non-destructive elemental analysis of cultural heritage materials.",
    description_ko: "문화유산 재료의 비파괴 원소 분석을 위한 휴대용 XRF 분석기입니다.",
    specifications: {
      "Detection Range": "Mg to U",
      "Analysis Time": "10-60 seconds",
      "Detector": "SDD (Silicon Drift Detector)",
      "Weight": "1.5 kg"
    },
    specifications_ko: {
      "검출 범위": "Mg부터 U까지",
      "분석 시간": "10-60초",
      "검출기": "SDD (실리콘 드리프트 검출기)",
      "무게": "1.5 kg"
    },
    applications: ["Elemental Analysis", "Material Identification", "Alloy Composition"],
    applications_ko: ["원소 분석", "재료 식별", "합금 조성"],
    image: "",
    status: "operational",
    year_acquired: 2023
  },
  {
    id: 5,
    category: "environmental",
    name_en: "Climate Control Chamber",
    name_ko: "기후 제어 챔버",
    model: "Binder KBF 720",
    description_en: "Precision climate control system for testing material stability under various environmental conditions.",
    description_ko: "다양한 환경 조건에서 재료 안정성을 테스트하기 위한 정밀 기후 제어 시스템입니다.",
    specifications: {
      "Temperature Range": "-10°C to +70°C",
      "Humidity Range": "10% to 98% RH",
      "Volume": "720 liters",
      "Uniformity": "±0.5°C"
    },
    specifications_ko: {
      "온도 범위": "-10°C ~ +70°C",
      "습도 범위": "10% ~ 98% RH",
      "용량": "720리터",
      "균일도": "±0.5°C"
    },
    applications: ["Stability Testing", "Aging Studies", "Conservation Research"],
    applications_ko: ["안정성 테스트", "노화 연구", "보존 연구"],
    image: "",
    status: "operational",
    year_acquired: 2022
  },
  {
    id: 6,
    category: "documentation",
    name_en: "High-Resolution Photography System",
    name_ko: "고해상도 사진 촬영 시스템",
    model: "Canon EOS R5 + RF 100mm Macro",
    description_en: "Professional photography system for detailed documentation of cultural heritage objects.",
    description_ko: "문화유산 객체의 세밀한 문서화를 위한 전문 사진 촬영 시스템입니다.",
    specifications: {
      "Resolution": "45 MP",
      "ISO Range": "100-51,200",
      "Macro Ratio": "1:1.4",
      "Image Stabilization": "8-stop IBIS"
    },
    specifications_ko: {
      "해상도": "45 MP",
      "ISO 범위": "100-51,200",
      "매크로 비율": "1:1.4",
      "손떨림 보정": "8단 IBIS"
    },
    applications: ["Documentation Photography", "Condition Recording", "Before/After Comparison"],
    applications_ko: ["기록 사진", "상태 기록", "복원 전후 비교"],
    image: "",
    status: "operational",
    year_acquired: 2023
  }
];

// Add new facility function
function addFacility(facilityData) {
  const newId = Math.max(...facilities.map(f => f.id)) + 1;
  facilityData.id = newId;
  facilities.push(facilityData);
  renderFacilities();
}

// Update facility function
function updateFacility(id, facilityData) {
  const index = facilities.findIndex(f => f.id === id);
  if (index !== -1) {
    facilities[index] = { ...facilities[index], ...facilityData };
    renderFacilities();
  }
}

// Remove facility function
function removeFacility(id) {
  const index = facilities.findIndex(f => f.id === id);
  if (index !== -1) {
    facilities.splice(index, 1);
    renderFacilities();
  }
}

// Get current language
function getCurrentLanguage() {
  return document.getElementById('lang-ko') && document.getElementById('lang-ko').classList.contains('active') ? 'ko' : 'ko';
}

// Get category icon
function getCategoryIcon(category) {
  const icons = {
    'microscopy': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18h8"></path><path d="M3 22h18"></path><path d="M14 22a7 7 0 1 0 0-14h-1"></path><path d="M9 14h2"></path><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path></svg>',
    '3d-scanning': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20"></path><path d="M12 2a10 10 0 1 0 10 10"></path><circle cx="12" cy="12" r="2"></circle><path d="m2 2 20 20"></path></svg>',
    '3d-printing': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6,9 6,2 18,2 18,9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8" rx="1"></rect></svg>',
    'analysis': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12V6l3 3l4-4"></path><path d="m8 21 3-3 3 3"></path><path d="M16 8h5a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h5"></path></svg>',
    'environmental': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>',
    'documentation': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>'
  };
  return icons[category] || '';
}

// Create facility card HTML
function createFacilityCard(facility, lang) {
  const specs = lang === 'ko' ? facility.specifications_ko : facility.specifications;
  const applications = lang === 'ko' ? facility.applications_ko : facility.applications;
  
  return `
    <li data-category="${facility.category}" data-id="${facility.id}" class="animate-on-scroll">
      <div class="facility-card">
        <div class="facility-header">
          <div class="facility-icon">
            ${getCategoryIcon(facility.category)}
          </div>
          <div class="facility-title">
            <h3>
              <span class="lang lang-en">${facility.name_en}</span>
              <span class="lang lang-ko" style="display:none;">${facility.name_ko}</span>
            </h3>
            <span class="facility-model">${facility.model}</span>
          </div>
          <div class="facility-status ${facility.status}">
            <span class="lang lang-en">${facility.status.charAt(0).toUpperCase() + facility.status.slice(1)}</span>
            <span class="lang lang-ko" style="display:none;">${facility.status === 'operational' ? '운영중' : '점검중'}</span>
          </div>
        </div>
        
        <div class="facility-description">
          <span class="lang lang-en">${facility.description_en}</span>
          <span class="lang lang-ko" style="display:none;">${facility.description_ko}</span>
        </div>
        
        <div class="facility-specs">
          <h4>
            <span class="lang lang-en">Specifications</span>
            <span class="lang lang-ko" style="display:none;">사양</span>
          </h4>
          <ul>
            ${Object.entries(specs).map(([key, value]) => `
              <li><strong>${key}:</strong> ${value}</li>
            `).join('')}
          </ul>
        </div>
        
        <div class="facility-applications">
          <h4>
            <span class="lang lang-en">Applications</span>
            <span class="lang lang-ko" style="display:none;">응용분야</span>
          </h4>
          <div class="application-tags">
            ${applications.map(app => `<span class="tag">${app}</span>`).join('')}
          </div>
        </div>
        
        <div class="facility-meta">
          <span class="facility-year">
            <span class="lang lang-en">Acquired: ${facility.year_acquired}</span>
            <span class="lang lang-ko" style="display:none;">도입연도: ${facility.year_acquired}</span>
          </span>
        </div>
      </div>
    </li>
  `;
}

// Filter facilities
function filterFacilities(category = 'all') {
  // For static HTML items
  const facilityItems = document.querySelectorAll('.facility-list .facility-item');
  
  facilityItems.forEach(item => {
    const itemCategory = item.getAttribute('data-category');
    
    if (category === 'all' || itemCategory === category) {
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

// Render all facilities
function renderFacilities() {
  const facilitiesList = document.querySelector('.facilities-list');
  if (!facilitiesList) return;

  const lang = getCurrentLanguage();
  facilitiesList.innerHTML = facilities.map(facility => createFacilityCard(facility, lang)).join('');
  
  // Re-initialize animations after rendering
  setTimeout(() => {
    initAnimations();
  }, 50);
}

// Sort facilities by name, category, or year
function sortFacilities(criteria = 'name', order = 'asc') {
  facilities.sort((a, b) => {
    let comparison = 0;
    
    switch (criteria) {
      case 'name':
        const nameA = getCurrentLanguage() === 'ko' ? a.name_ko : a.name_en;
        const nameB = getCurrentLanguage() === 'ko' ? b.name_ko : b.name_en;
        comparison = nameA.localeCompare(nameB);
        break;
      case 'category':
        comparison = a.category.localeCompare(b.category);
        break;
      case 'year':
        comparison = a.year_acquired - b.year_acquired;
        break;
    }
    
    return order === 'desc' ? -comparison : comparison;
  });
  
  renderFacilities();
}

// Initialize facilities page
function initFacilities() {
  
  // Override setLang function to include facility rendering
  const originalSetLang = window.setLang;
  window.setLang = function(lang) {
    originalSetLang(lang);
    renderFacilities();
  };

  // Filter functionality
  const facilityFilters = document.querySelectorAll('.facility-filter');
  
  facilityFilters.forEach(filter => {
    filter.addEventListener('click', () => {
      // Update active state
      facilityFilters.forEach(f => f.classList.remove('active'));
      filter.classList.add('active');
      
      const filterCategory = filter.getAttribute('data-filter');
      filterFacilities(filterCategory);
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
      <option value="name-asc">
        <span class="lang lang-en">Name (A-Z)</span>
        <span class="lang lang-ko" style="display:none;">이름 (가-하)</span>
      </option>
      <option value="name-desc">
        <span class="lang lang-en">Name (Z-A)</span>
        <span class="lang lang-ko" style="display:none;">이름 (하-가)</span>
      </option>
      <option value="category-asc">
        <span class="lang lang-en">Category</span>
        <span class="lang lang-ko" style="display:none;">카테고리</span>
      </option>
      <option value="year-desc">
        <span class="lang lang-en">Year (Newest First)</span>
        <span class="lang lang-ko" style="display:none;">연도 (최신순)</span>
      </option>
      <option value="year-asc">
        <span class="lang lang-en">Year (Oldest First)</span>
        <span class="lang lang-ko" style="display:none;">연도 (오래된순)</span>
      </option>
    </select>
  `;

  const filterContainer = document.querySelector('.facilities-filter-container');
  if (filterContainer) {
    filterContainer.parentNode.insertBefore(sortContainer, filterContainer.nextSibling);
    
    document.getElementById('sort-select').addEventListener('change', (e) => {
      const [criteria, order] = e.target.value.split('-');
      sortFacilities(criteria, order);
    });
  }

  // Initial render
  renderFacilities();
}

// Make functions available globally
window.addFacility = addFacility;
window.updateFacility = updateFacility;
window.removeFacility = removeFacility;
window.sortFacilities = sortFacilities;

function getCategoryDisplayName(category, lang) {
  const categoryNames = {
    'digital': { en: 'Digital Documentation', ko: '디지털 기록' },
    'analysis': { en: 'Material Analysis', ko: '재료 분석' },
    'restoration': { en: 'Restoration Technology', ko: '복원 기술' },
    'imaging': { en: 'Imaging Systems', ko: '이미징 시스템' },
    'microscopy': { en: 'Microscopy', ko: '현미경' },
    '3d-scanning': { en: '3D Scanning', ko: '3D 스캔' },
    '3d-printing': { en: '3D Printing', ko: '3D 프린팅' },
    'environmental': { en: 'Environmental Control', ko: '환경 제어' },
    'documentation': { en: 'Documentation', ko: '문서화' }
  };
  
  return categoryNames[category] ? categoryNames[category][lang] : category;
}

function getImageForFacility(facility) {
  const imageMap = {
    1: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=300&fit=crop',
    2: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=300&fit=crop',
    3: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=300&fit=crop',
    4: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=300&fit=crop',
    5: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=300&fit=crop',
    6: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop'
  };
  
  return imageMap[facility.id] || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=300&fit=crop';
}

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
  document.addEventListener('DOMContentLoaded', initFacilities);
} else {
  initFacilities();
}

// Add page load animations
function addPageAnimations() {
  // Removed card animations - keeping only banner animation
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