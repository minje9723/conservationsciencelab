// Achievements page specific functionality

// Achievements data
// Publications are sorted by year (newest first)
const achievements = [
  {
    id: 1,
    type: "publication",
    title_en: "Applicability Research Restoration Material of Metal PLA Sintering for Contemporary Metal Cultural Heritage",
    title_ko: "금속 PLA 소결을 활용한 근현대 금속 문화유산의 복원 재료 적용성 연구",
    authors: "Min Je Kim, Go Woon Bae, Sang Ok Lee",
    authors_ko: "김민제, 배고운, 이상옥",
    journal: "Journal of Conservation Science",
    journal_ko: "보존과학회지",
    journal_abbr: "J. Conserv. Sci.",
    year: 2025,
    summary_en: "Scientific analysis of sintered metal PLA samples to evaluate their suitability for restoring metal cultural heritage.",
    summary_ko: "금속 PLA 소결 시편의 근현대 금속 문화유산 복원 재료 적합성 평가를 위한 과학적 분석 연구.",
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003220725",
    doi: "",
    image: "assets/achievements/metal-pla-sintering.jpg",
    keywords: ["Metal PLA", "3D Printing", "Sintering", "Contemporary Metal Cultural Heritage", "Restoration Material"],
    keywords_ko: ["금속 PLA", "3D 프린팅", "소결", "근현대 금속 문화유산", "복원 재료"]
  },
  {
    id: 3,
    type: "publication",
    title_en: "Reverse Casting Using Metal PLA 3D Printing: A Study Based on Digital Data of Royal Seals from the National Palace Museum, Korea",
    title_ko: "국립고궁박물관 소장 어보의 디지털 데이터를 활용한 금속 PLA 3D 프린팅 기반 역주조 공법 기초 연구",
    authors: "Sangok Lee, Minje Kim, Singi Kim",
    authors_ko: "김민제, 김신기, 이상옥",
    journal: "Korean Journal of Palace Museum",
    journal_ko: "고궁문화",
    journal_abbr: "Korean J. Palace Mus.",
    year: 2025,
    summary_en: "Feasibility study of metal PLA 3D printing and reverse casting for heritage restoration using royal seal data.",
    summary_ko: "어보 데이터를 활용한 금속 PLA 3D 프린팅 기반 역주조 공법의 문화유산 복원 적용 가능성 연구.",
    link: "https://www.kci.go.kr/kciportal/landing/article.kci?arti_id=ART003218035",
    doi: "",
    image: "assets/achievements/reverse-casting.jpg",
    keywords: ["3D Printing", "Heritage Restoration", "Metal Casting"],
    keywords_ko: ["3D 프린팅", "문화재 복원", "금속 주조"]
  },
  {
    id: 5,
    type: "publication",
    title_en: "A Study on the Prevention of Specular Reflections in 3D Scanning of Glossy Artifacts",
    title_ko: "광택 유물의 3D 스캐닝에서 정반사 방지에 관한 연구",
    authors: "Hyo Jeong Kim, Min Je Kim, So Yeon Choi, Jeong Eun Oh, Sang Ok Lee",
    authors_ko: "김효정, 김민제, 최소연, 오정은, 이상옥",
    journal: "ISPRS Annals of the Photogrammetry, Remote Sensing and Spatial Information Sciences",
    journal_ko: "ISPRS 사진측량 및 원격탐사 공간정보과학 연보",
    journal_abbr: "ISPRS Ann. Photogramm. Remote Sens. Spatial Inf. Sci.",
    year: 2025,
    summary_en: "Evaluated material safety and applicability of vanishing scanning sprays for 3D scanning of glossy artifacts.",
    summary_ko: "광택 유물의 3D 스캐닝을 위한 자연 소멸형 스캔 스프레이의 재료 안전성 및 적용성 평가.",
    link: "https://isprs-annals.copernicus.org/articles/X-M-2-2025/157/2025/isprs-annals-X-M-2-2025-157-2025.html",
    doi: "10.5194/isprs-annals-X-M-2-2025-157-2025",
    image: "assets/achievements/3d-scanning.jpg",
    keywords: ["Glossy Artifacts", "3D Laser Scanning", "Specular Reflections", "Vanishing Scanning Sprays", "Material Safety"],
    keywords_ko: ["광택 유물", "3D 레이저 스캐닝", "정반사", "소멸형 스캔 스프레이", "재료 안전성"]
  },
  {
    id: 18,
    type: "publication",
    title_en: "Photogrammetry-Based Monitoring for the Continuous Management of Cultural Heritage: A Case Study of the Petroglyphs of Cheonjeon-ri, Ulju",
    title_ko: "문화유산의 지속적 관리를 위한 사진측량 기반 모니터링: 울주 천전리 암각화 사례 연구",
    authors: "Hae Jun Park, Gyu Ri Choi, Jeong Yeon Kim, Sang Ok Lee",
    authors_ko: "박해준, 최규리, 김정연, 이상옥",
    journal: "ISPRS Annals of the Photogrammetry, Remote Sensing and Spatial Information Sciences",
    journal_ko: "ISPRS 사진측량 및 원격탐사 공간정보과학 연보",
    journal_abbr: "ISPRS Ann. Photogramm. Remote Sens. Spatial Inf. Sci.",
    year: 2025,
    summary_en: "Applied photogrammetry for digital documentation and damage detection monitoring of outdoor cultural heritage sites.",
    summary_ko: "야외 문화유산의 디지털 기록 및 손상 감지 모니터링을 위한 사진측량 기법 적용 연구.",
    link: "https://isprs-annals.copernicus.org/articles/X-M-2-2025/275/2025/",
    doi: "10.5194/isprs-annals-X-M-2-2025-275-2025",
    image: "assets/achievements/cheonjeon-ri.jpg",
    keywords: ["Photogrammetry", "Digital Documentation", "Monitoring", "Damage Detection", "Cultural Heritage Management"],
    keywords_ko: ["사진측량", "디지털 기록", "모니터링", "손상 감지", "문화유산 관리"]
  },
  {
    id: 2,
    type: "publication",
    title_en: "A Study on the Classification System and Preservation Management of Catholic Moveable Cultural Heritage",
    title_ko: "천주교 동산문화유산 분류체계 및 보존관리 방안",
    authors: "Gyu Ri Choi, Sang Ok Lee",
    authors_ko: "최규리, 이상옥",
    journal: "Journal of Conservation Science",
    journal_ko: "보존과학회지",
    journal_abbr: "J. Conserv. Sci.",
    year: 2023,
    summary_en: "Proposed a new classification system and management guidelines for Catholic moveable cultural heritage preservation.",
    summary_ko: "천주교 동산문화유산의 새로운 분류체계 및 보존관리 지침 제안.",
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003050054",
    doi: "",
    keywords: ["Catholic", "Religious cultural heritage", "Listing", "Classification system", "Preservation management"],
    keywords_ko: ["천주교", "종교문화유산", "목록화", "분류체계", "보존관리"]
  },
  {
    id: 3,
    type: "publication",
    title_en: "Reverse Casting Using Metal PLA 3D Printing: A Study Based on Digital Data of Royal Seals from the National Palace Museum, Korea",
    title_ko: "국립고궁박물관 소장 어보의 디지털 데이터를 활용한 금속 PLA 3D 프린팅 기반 역주조 공법 기초 연구",
    authors: "Sangok Lee, Minje Kim, Singi Kim",
    authors_ko: "김민제, 김신기, 이상옥",
    journal: "Korean Journal of Palace Museum",
    journal_ko: "고궁문화",
    journal_abbr: "Korean J. Palace Mus.",
    year: 2025,
    summary_en: "Feasibility study of metal PLA 3D printing and reverse casting for heritage restoration using royal seal data.",
    summary_ko: "어보 데이터를 활용한 금속 PLA 3D 프린팅 기반 역주조 공법의 문화유산 복원 적용 가능성 연구.",
    link: "https://www.kci.go.kr/kciportal/landing/article.kci?arti_id=ART003218035",
    doi: "",
    keywords: ["3D Printing", "Heritage Restoration", "Metal Casting"],
    keywords_ko: ["3D 프린팅", "문화재 복원", "금속 주조"]
  },
  {
    id: 5,
    type: "publication",
    title_en: "A Study on the Prevention of Specular Reflections in 3D Scanning of Glossy Artifacts",
    title_ko: "광택 유물의 3D 스캐닝에서 정반사 방지에 관한 연구",
    authors: "Hyo Jeong Kim, Min Je Kim, So Yeon Choi, Jeong Eun Oh, Sang Ok Lee",
    authors_ko: "김효정, 김민제, 최소연, 오정은, 이상옥",
    journal: "ISPRS Annals of the Photogrammetry, Remote Sensing and Spatial Information Sciences",
    journal_ko: "ISPRS 사진측량 및 원격탐사 공간정보과학 연보",
    journal_abbr: "ISPRS Ann. Photogramm. Remote Sens. Spatial Inf. Sci.",
    year: 2025,
    summary_en: "Evaluated material safety and applicability of vanishing scanning sprays for 3D scanning of glossy artifacts.",
    summary_ko: "광택 유물의 3D 스캐닝을 위한 자연 소멸형 스캔 스프레이의 재료 안전성 및 적용성 평가.",
    link: "https://isprs-annals.copernicus.org/articles/X-M-2-2025/157/2025/isprs-annals-X-M-2-2025-157-2025.html",
    doi: "10.5194/isprs-annals-X-M-2-2025-157-2025",
    keywords: ["Glossy Artifacts", "3D Laser Scanning", "Specular Reflections", "Vanishing Scanning Sprays", "Material Safety"],
    keywords_ko: ["광택 유물", "3D 레이저 스캐닝", "정반사", "소멸형 스캔 스프레이", "재료 안전성"]
  },
  {
    id: 18,
    type: "publication",
    title_en: "Photogrammetry-Based Monitoring for the Continuous Management of Cultural Heritage: A Case Study of the Petroglyphs of Cheonjeon-ri, Ulju",
    title_ko: "문화유산의 지속적 관리를 위한 사진측량 기반 모니터링: 울주 천전리 암각화 사례 연구",
    authors: "Hae Jun Park, Gyu Ri Choi, Jeong Yeon Kim, Sang Ok Lee",
    authors_ko: "박해준, 최규리, 김정연, 이상옥",
    journal: "ISPRS Annals of the Photogrammetry, Remote Sensing and Spatial Information Sciences",
    journal_ko: "ISPRS 사진측량 및 원격탐사 공간정보과학 연보",
    journal_abbr: "ISPRS Ann. Photogramm. Remote Sens. Spatial Inf. Sci.",
    year: 2025,
    summary_en: "Applied photogrammetry for digital documentation and damage detection monitoring of outdoor cultural heritage sites.",
    summary_ko: "야외 문화유산의 디지털 기록 및 손상 감지 모니터링을 위한 사진측량 기법 적용 연구.",
    link: "https://isprs-annals.copernicus.org/articles/X-M-2-2025/275/2025/",
    doi: "10.5194/isprs-annals-X-M-2-2025-275-2025",
    keywords: ["Photogrammetry", "Digital Documentation", "Monitoring", "Damage Detection", "Cultural Heritage Management"],
    keywords_ko: ["사진측량", "디지털 기록", "모니터링", "손상 감지", "문화유산 관리"]
  },
  {
    id: 6,
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
    id: 9,
    type: "conference",
    title_en: "Advanced Metal Conservation Techniques for Archaeological Artifacts",
    title_ko: "고고 유물을 위한 첨단 금속 보존 기술",
    authors: "Hyo Jeong Kim, Sang Ok Lee",
    authors_ko: "김효정, 이상옥",
    event: "Asian Conservation Congress",
    event_ko: "아시아 보존과학 학술대회",
    year: 2024,
    summary_en: "Research presentation on innovative chemical treatment methods for corroded metal artifacts.",
    summary_ko: "부식된 금속 유물을 위한 혁신적인 화학 처리 방법에 관한 연구 발표.",
    link: "",
    location: "Tokyo, Japan",
    location_ko: "일본 도쿄",
    keywords: ["Metal Conservation", "Archaeological Artifacts", "Chemical Treatment"],
    keywords_ko: ["금속 보존", "고고 유물", "화학 처리"]
  },
  {
    id: 10,
    type: "conference",
    title_en: "Application of AI in Cultural Heritage Damage Assessment",
    title_ko: "문화유산 손상 평가에서의 인공지능 활용",
    authors: "So Yeon Choi, Min Je Kim, Jeong Yeon Kim",
    authors_ko: "최소연, 김민제, 김정연",
    event: "International Symposium on Digital Heritage",
    event_ko: "디지털 유산 국제 심포지엄",
    year: 2025,
    summary_en: "Exploring machine learning models for automated detection and classification of heritage deterioration patterns.",
    summary_ko: "문화유산 열화 패턴의 자동 감지 및 분류를 위한 머신러닝 모델 탐구.",
    link: "",
    location: "Paris, France",
    location_ko: "프랑스 파리",
    keywords: ["Artificial Intelligence", "Machine Learning", "Damage Assessment"],
    keywords_ko: ["인공지능", "머신러닝", "손상 평가"]
  },
  {
    id: 11,
    type: "conference",
    title_en: "Sustainable Materials for Heritage Conservation",
    title_ko: "문화유산 보존을 위한 지속가능한 재료",
    authors: "Gyu Ri Choi, Jeong Eun Oh",
    authors_ko: "최규리, 오정은",
    event: "Global Heritage Materials Workshop",
    event_ko: "글로벌 문화유산 재료 워크숍",
    year: 2023,
    summary_en: "Discussion on eco-friendly and reversible conservation materials for long-term heritage preservation.",
    summary_ko: "장기 문화유산 보존을 위한 친환경 및 가역성 보존 재료에 대한 논의.",
    link: "",
    location: "Rome, Italy",
    location_ko: "이탈리아 로마",
    keywords: ["Sustainable Materials", "Eco-friendly Conservation", "Reversibility"],
    keywords_ko: ["지속가능한 재료", "친환경 보존", "가역성"]
  },
  {
    id: 7,
    type: "award",
    title_en: "Best Excellence Award - 8th 3D Printing BIZCON Competition",
    title_ko: "제8회 3D프린팅 BIZCON 경진대회 최우수상",
    recipient: "National Heritage Conservation Research Institute",
    recipient_ko: "한국전통문화대학교 보존과학연구소 목원재료연구실",
    organization: "Ministry of Culture, Heritage and Tourism (Cultural Heritage Administration)",
    organization_ko: "문화재청",
    year: 2023,
    summary_en: "Awarded for excellence in 3D printing business activities, presenting innovative ideas for utilizing cultural heritage 3D data at the design booth of the 8th 3D Printing BIZCON Competition.",
    summary_ko: "3D 프린팅 산업 활성화를 위해 개최한 제8회 3D프린팅 BIZCON 경진대회 디자인 부야에서 문화재 3D 데이터를 활용한 독창적인 아이디어로 위와 같은 성적을 거두었기에 이 상장을 수여함.",
    link: "",
    award_image: "assets/awards/3d-printing-bizcon-2023.jpg",
    category: "Technology Innovation",
    category_ko: "기술 혁신",
    keywords: ["3D Printing", "Heritage Conservation", "Innovation", "Competition Award"],
    keywords_ko: ["3D 프린팅", "문화재 보존", "혁신", "경진대회"]
  },
  {
    id: 19,
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
    award_image: "",
    category: "Technology Innovation",
    category_ko: "기술 혁신",
    keywords: ["Technology Award", "Heritage Conservation", "Innovation"],
    keywords_ko: ["기술상", "문화재 보존", "혁신"]
  },
  {
    id: 12,
    type: "award",
    title_en: "Excellence in Digital Heritage Award",
    title_ko: "디지털 유산 우수상",
    recipient: "Min Je Kim",
    recipient_ko: "김민제",
    organization: "International Council on Monuments and Sites (ICOMOS)",
    organization_ko: "국제기념물유적협의회 (ICOMOS)",
    year: 2024,
    summary_en: "Recognition for pioneering work in applying digital technologies to cultural heritage documentation and preservation.",
    summary_ko: "디지털 기술을 문화유산 기록 및 보존에 적용한 선구적인 업적에 대한 인정.",
    link: "",
    award_image: "",
    category: "Digital Heritage",
    category_ko: "디지털 유산",
    keywords: ["Digital Heritage", "Technology Application", "Documentation"],
    keywords_ko: ["디지털 유산", "기술 적용", "기록화"]
  },
  {
    id: 13,
    type: "award",
    title_en: "Young Conservator Award",
    title_ko: "젊은 보존과학자상",
    recipient: "So Yeon Choi",
    recipient_ko: "최소연",
    organization: "Korean Society of Conservation Science",
    organization_ko: "한국보존과학회",
    year: 2025,
    summary_en: "Award for outstanding research contributions by early-career professionals in conservation science.",
    summary_ko: "보존과학 분야 초기 경력 전문가의 뛰어난 연구 기여에 대한 상.",
    link: "",
    award_image: "assets/awards/3d-printing-bizcon-2023.jpg",
    category: "Research Excellence",
    category_ko: "연구 우수성",
    keywords: ["Young Researcher", "Conservation Science", "Research Award"],
    keywords_ko: ["신진 연구자", "보존과학", "연구상"]
  },
  {
    id: 14,
    type: "award",
    title_en: "Best Paper Award in Heritage Science",
    title_ko: "문화유산과학 최우수논문상",
    recipient: "Hyo Jeong Kim",
    recipient_ko: "김효정",
    organization: "Asian Academy of Heritage Science",
    organization_ko: "아시아 문화유산과학 학회",
    year: 2025,
    summary_en: "Best paper award for groundbreaking research on metal conservation techniques for archaeological artifacts.",
    summary_ko: "고고 유물의 금속 보존 기술에 관한 획기적인 연구로 최우수논문상 수상.",
    link: "",
    award_image: "",
    category: "Research Publication",
    category_ko: "연구 출판",
    keywords: ["Best Paper", "Metal Conservation", "Archaeological Artifacts"],
    keywords_ko: ["최우수논문", "금속 보존", "고고 유물"]
  },
  {
    id: 8,
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
  },
  {
    id: 15,
    type: "patent",
    title_en: "Non-contact Surface Analysis System for Cultural Heritage",
    title_ko: "문화유산 비접촉 표면 분석 시스템",
    inventors: "Hyo Jeong Kim, Jeong Yeon Kim, Sang Ok Lee",
    inventors_ko: "김효정, 김정연, 이상옥",
    patent_office: "Korean Intellectual Property Office",
    patent_office_ko: "한국특허청",
    year: 2025,
    patent_number: "KR-2025-0234567",
    summary_en: "Patent for advanced non-contact analysis system enabling safe and detailed surface examination of fragile artifacts.",
    summary_ko: "취약한 유물의 안전하고 상세한 표면 검사를 가능하게 하는 첨단 비접촉 분석 시스템 특허.",
    link: "",
    keywords: ["Non-contact Analysis", "Surface Examination", "Heritage Technology"],
    keywords_ko: ["비접촉 분석", "표면 검사", "문화유산 기술"]
  },
  {
    id: 16,
    type: "patent",
    title_en: "Eco-friendly Conservation Material Composition",
    title_ko: "친환경 보존처리 재료 조성물",
    inventors: "Gyu Ri Choi, Jeong Eun Oh",
    inventors_ko: "최규리, 오정은",
    patent_office: "Korean Intellectual Property Office",
    patent_office_ko: "한국특허청",
    year: 2024,
    patent_number: "KR-2024-0345678",
    summary_en: "Patent for environmentally sustainable and reversible conservation material suitable for various heritage objects.",
    summary_ko: "다양한 문화유산 객체에 적합한 환경 친화적이고 가역적인 보존 재료 특허.",
    link: "",
    keywords: ["Eco-friendly Material", "Conservation Treatment", "Sustainability"],
    keywords_ko: ["친환경 재료", "보존처리", "지속가능성"]
  },
  {
    id: 17,
    type: "patent",
    title_en: "AI-based Heritage Deterioration Prediction System",
    title_ko: "AI 기반 문화유산 열화 예측 시스템",
    inventors: "So Yeon Choi, Min Je Kim",
    inventors_ko: "최소연, 김민제",
    patent_office: "Korean Intellectual Property Office",
    patent_office_ko: "한국특허청",
    year: 2025,
    patent_number: "KR-2025-0456789",
    summary_en: "Patent for artificial intelligence system that predicts and monitors deterioration patterns in cultural heritage objects.",
    summary_ko: "문화유산 객체의 열화 패턴을 예측하고 모니터링하는 인공지능 시스템 특허.",
    link: "",
    keywords: ["Artificial Intelligence", "Deterioration Prediction", "Monitoring System"],
    keywords_ko: ["인공지능", "열화 예측", "모니터링 시스템"]
  }
];

// Add new achievement function
function addAchievement(achievementData) {
  const newId = Math.max(...achievements.map(a => a.id)) + 1;
  achievementData.id = newId;
  achievements.push(achievementData);
  renderAchievements();
  
  // Update counts after adding
  const currentFilter = document.querySelector('.achievement-filter.active')?.getAttribute('data-filter') || 'all';
  updateActiveFilterCount(currentFilter);
}

// Update achievement function
function updateAchievement(id, achievementData) {
  const index = achievements.findIndex(a => a.id === id);
  if (index !== -1) {
    achievements[index] = { ...achievements[index], ...achievementData };
    renderAchievements();
    
    // Update counts after updating
    const currentFilter = document.querySelector('.achievement-filter.active')?.getAttribute('data-filter') || 'all';
    updateActiveFilterCount(currentFilter);
  }
}

// Remove achievement function
function removeAchievement(id) {
  const index = achievements.findIndex(a => a.id === id);
  if (index !== -1) {
    achievements.splice(index, 1);
    renderAchievements();
    
    // Update counts after removing
    const currentFilter = document.querySelector('.achievement-filter.active')?.getAttribute('data-filter') || 'all';
    updateActiveFilterCount(currentFilter);
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

  // Special layout for awards with images
  if (achievement.type === 'award' && achievement.award_image) {
    return `
      <li data-type="${achievement.type}" data-id="${achievement.id}" class="animate-on-scroll award-with-image">
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
        <div class="award-image-preview" onclick="openAwardModal('${achievement.award_image}', '${(lang === 'ko' ? achievement.title_ko : achievement.title_en).replace(/'/g, "\\'")}')">
          <img src="${achievement.award_image}" alt="${lang === 'ko' ? achievement.title_ko : achievement.title_en}" loading="lazy">
          <div class="award-image-overlay">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
            <span class="lang lang-en">Click to enlarge</span>
            <span class="lang lang-ko" style="display:none;">클릭하여 확대</span>
          </div>
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

  // Default layout for other types
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
  const achievementsList = document.querySelector('.achievement-list');
  if (!achievementsList) return;
  
  const achievementItems = Array.from(document.querySelectorAll('.achievement-list li'));
  
  // Add or remove filtered class from body
  if (type === 'all') {
    document.body.classList.remove('filtered');
  } else {
    document.body.classList.add('filtered');
  }
  
  // Filter and sort by year (newest first)
  const visibleItems = achievementItems.filter(item => {
    const itemType = item.getAttribute('data-type');
    return type === 'all' || itemType === type;
  }).sort((a, b) => {
    const yearA = parseInt(a.querySelector('.achievement-year')?.textContent) || 0;
    const yearB = parseInt(b.querySelector('.achievement-year')?.textContent) || 0;
    return yearB - yearA; // Descending order (newest first)
  });
  
  // Hide all items first
  achievementItems.forEach(item => {
    item.style.display = 'none';
  });
  
  // Show and reorder visible items
  visibleItems.forEach(item => {
    item.style.display = '';
    achievementsList.appendChild(item); // Move to end (reorder in DOM)
  });
  
  // Update button counts to show only for active filter
  updateActiveFilterCount(type);
  
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
  
  // Update filter counts after rendering
  const currentFilter = document.querySelector('.achievement-filter.active')?.getAttribute('data-filter') || 'all';
  updateActiveFilterCount(currentFilter);
  
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

// Update filter container layout based on language
function updateFilterLayout() {
  const filterContainer = document.querySelector('.achievements-filter-container');
  if (!filterContainer) return;
  
  const currentLang = getCurrentLanguage();
  
  // 모바일 화면에서만 적용 (768px 이하)
  if (window.innerWidth <= 768) {
    if (currentLang === 'en') {
      filterContainer.classList.add('lang-en-mode');
    } else {
      filterContainer.classList.remove('lang-en-mode');
    }
  } else {
    // 데스크톱에서는 클래스 제거
    filterContainer.classList.remove('lang-en-mode');
  }
}

// Initialize achievements page
function initAchievements() {
  // Check URL parameters for filter
  const urlParams = new URLSearchParams(window.location.search);
  const urlFilter = urlParams.get('filter');
  
  // 초기 필터 레이아웃 설정
  updateFilterLayout();
  
  // 창 크기 변경 시 필터 레이아웃 업데이트
  window.addEventListener('resize', updateFilterLayout);
  
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
      // 필터 레이아웃 업데이트
      updateFilterLayout();
    };
  }
  
  // Listen for language changes - Desktop (lang-option buttons)
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
      setTimeout(() => {
        updateFilterLayout();
      }, 100);
    });
  });
  
  // Listen for language changes - Mobile (langToggle button)
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      // Only for mobile screens
      if (window.innerWidth <= 1002) {
        setTimeout(() => {
          updateFilterLayout();
        }, 150);
      }
    });
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
  
  // Setup modal event listeners
  const modal = document.getElementById('awardModal');
  if (modal) {
    // Close on background click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeAwardModal();
      }
    });
    
    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.style.display === 'flex') {
        closeAwardModal();
      }
    });
  }
}

// Update filter button counts - only show count for active filter
function updateActiveFilterCount(activeFilterType) {
  const achievementItems = document.querySelectorAll('.achievement-list li');
  const counts = {
    publication: 0,
    conference: 0,
    patent: 0,
    award: 0
  };
  
  achievementItems.forEach(item => {
    const type = item.getAttribute('data-type');
    if (counts[type] !== undefined) {
      counts[type]++;
    }
  });
  
  // Update all filter buttons
  const achievementFilters = document.querySelectorAll('.achievement-filter');
  achievementFilters.forEach(button => {
    const filterType = button.getAttribute('data-filter');
    
    // Skip 'all' button
    if (filterType === 'all') {
      return;
    }
    
    const langSpans = button.querySelectorAll('.lang');
    langSpans.forEach(span => {
      // Get original text without count
      const originalText = span.textContent.replace(/\s*\(\d+\)/, '');
      
      // Only show count if this filter is active
      if (filterType === activeFilterType) {
        const count = counts[filterType];
        span.textContent = `${originalText} (${count})`;
      } else {
        span.textContent = originalText;
      }
    });
  });
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

// Award Image Modal Functions
function openAwardModal(imageSrc, altText) {
  const modal = document.getElementById('awardModal');
  const modalImg = document.getElementById('awardModalImg');
  
  if (modal && modalImg) {
    modalImg.src = imageSrc;
    modalImg.alt = altText;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }
}

function closeAwardModal() {
  const modal = document.getElementById('awardModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Restore scrolling
  }
}

// Make functions globally accessible
window.openAwardModal = openAwardModal;
window.closeAwardModal = closeAwardModal;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initAchievements();
  initBannerAnimation();
  setTimeout(() => {
    initAnimations();
  }, 100);
});