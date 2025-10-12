// Conservation Science Lab Members Data
const members = [
  {
    name: "Sang Ok, Lee",
    name_ko: "이상옥",
    role: "Director, Professor",
    role_ko: "교수",
    intro: "Head of Conservation Science Lab, Korea National University of Heritage.",
    intro_ko: "한국전통문화대학교 보존과학연구소장.",
    keywords: "Conservation Science, Heritage Materials",
    keywords_ko: "보존과학, 문화재 재료",
    email: "",
    cardImg: "assets/members/card-photos/sangok-lee-card.jpg",
    profileImg: "assets/members/profile-photos/sangok-lee-profile.png"
  },
  {
    name: "Min Je, Kim",
    name_ko: "김민제",
    role: "Head Researcher / Ph.D. Candidate",
    role_ko: "연구실 팀장 / 박사(진)",
    intro: "Specializes in heritage restoration materials, metal 3D printing, 3D scanning.",
    intro_ko: "문화재 복원재료, 금속 3D프린팅, 3D스캔 전공.",
    keywords: "Restoration Materials, 3D Printing, 3D Scanning",
    keywords_ko: "복원재료, 3D프린팅, 3D스캔",
    email: "minje53@csllso.co.kr",
    cardImg: "assets/members/card-photos/minje-kim-card.jpg",
    profileImg: "assets/members/profile-photos/minje-kim-profile.JPG"
  },
  // ... 나머지 멤버도 동일하게 name_ko, role_ko, intro_ko, keywords_ko 추가 ...
  { name: "Eun Kyung, Seo", name_ko: "서은경", role: "Researcher / Ph.D. Candidate", role_ko: "연구원 / 박사과정", intro: "", intro_ko: "", keywords: "", keywords_ko: "", email: "", cardImg: "assets/members/card-photos/eunkyung-seo-card.jpg", profileImg: "assets/members/profile-photos/eunkyung-seo-profile.jpg" },
  { name: "Jeong Yeon, Kim", name_ko: "김정연", role: "Researcher / Ph.D. Candidate", role_ko: "연구원 / 박사과정", intro: "", intro_ko: "", keywords: "", keywords_ko: "", email: "", cardImg: "assets/members/card-photos/jeongyeon-kim-card.jpg", profileImg: "assets/members/profile-photos/jeongyeon-kim-profile.jpg" },
  { name: "So Youn, Choi", name_ko: "최소연", role: "Researcher / Ph.D. Candidate", role_ko: "연구원 / 박사과정", intro: "", intro_ko: "", keywords: "", keywords_ko: "", email: "", cardImg: "assets/members/card-photos/soyoun-choi-card.jpg", profileImg: "assets/members/profile-photos/soyoun-choi-profile.jpg" },
  { name: "Gyu Ri, Choi", name_ko: "최규리", role: "Researcher / Ph.D. Candidate", role_ko: "연구원 / 박사과정", intro: "", intro_ko: "", keywords: "", keywords_ko: "", email: "", cardImg: "assets/members/card-photos/gyuri-choi-card.jpg", profileImg: "assets/members/profile-photos/gyuri-choi-profile.jpg" },
  { name: "Ye Ni, Heo", name_ko: "허예니", role: "Researcher / M.Sc. Candidate", role_ko: "연구원 / 석사과정", intro: "", intro_ko: "", keywords: "", keywords_ko: "", email: "", cardImg: "assets/members/card-photos/yeni-heo-card.jpg", profileImg: "assets/members/profile-photos/yeni-heo-profile.jpg" },
  { name: "Chae Rin, Kim", name_ko: "김채린", role: "Researcher / M.Sc. Candidate", role_ko: "연구원 / 석사과정", intro: "", intro_ko: "", keywords: "", keywords_ko: "", email: "", cardImg: "assets/members/card-photos/chaerin-kim-card.jpg", profileImg: "assets/members/profile-photos/chaerin-kim-profile.jpg" },
  { name: "Hae Jun, Park", name_ko: "박해준", role: "Researcher / M.Sc. Candidate", role_ko: "연구원 / 석사과정", intro: "", intro_ko: "", keywords: "", keywords_ko: "", email: "", cardImg: "assets/members/card-photos/haejun-park-card.jpg", profileImg: "assets/members/profile-photos/haejun-park-profile.jpg" },
  { name: "Chae Rin, Kim", name_ko: "김채린", role: "Researcher / M.Sc. Candidate", role_ko: "연구원 / 석사과정", intro: "", intro_ko: "", keywords: "", keywords_ko: "", email: "", img: "https://placehold.co/300x400?text=Photo" },
  { name: "Sin Gi, Kim", name_ko: "김신기", role: "Researcher / M.Sc. Candidate", role_ko: "연구원 / 석사과정", intro: "", intro_ko: "", keywords: "", keywords_ko: "", email: "", cardImg: "assets/members/card-photos/singi-kim-card.jpg", profileImg: "assets/members/profile-photos/singi-kim-profile.jpg" },
  { name: "Hyo Jeong, Kim", name_ko: "김효정", role: "Researcher / M.Sc. Candidate", role_ko: "연구원 / 석사과정", intro: "", intro_ko: "", keywords: "", keywords_ko: "", email: "", cardImg: "assets/members/card-photos/hyojeong-kim-card.jpg", profileImg: "assets/members/profile-photos/hyojeong-kim-profile.jpg" },
  { name: "Su Jeong, Kim", name_ko: "김수정", role: "Researcher / Undergraduate", role_ko: "연구원 / 학부과정", intro: "", intro_ko: "", keywords: "", keywords_ko: "", email: "", cardImg: "assets/members/card-photos/sujeong-kim-card.jpg", profileImg: "assets/members/profile-photos/sujeong-kim-profile.jpg" },
  { name: "Ji Eun, Hyun", name_ko: "현지은", role: "Researcher / Undergraduate", role_ko: "연구원 / 학부과정", intro: "", intro_ko: "", keywords: "", keywords_ko: "", email: "", cardImg: "assets/members/card-photos/jieun-hyun-card.jpg", profileImg: "assets/members/profile-photos/jieun-hyun-profile.jpg" }
];


function createProfileCard(member, idx, lang) {
  return `
    <div class="profile-card" style="background-image:url('${member.cardImg || "https://placehold.co/400x400?text=Card+Photo"}')" data-idx="${idx}">
      <div class="profile-overlay">
        <div class="profile-name">${lang === 'ko' ? (member.name_ko || member.name) : member.name}</div>
        <div class="profile-role">
          <span class="role-position">${lang === 'ko' ? 
            (member.role_ko || member.role).split('/')[0].trim() : 
            member.role.split('/')[0].trim()}</span>
          <span class="role-status">${lang === 'ko' ? 
            (member.role_ko || member.role).split('/')[1]?.trim() || '' : 
            member.role.split('/')[1]?.trim() || ''}</span>
        </div>
      </div>
    </div>
  `;
}


function renderPyramidMembers(lang) {
  // 분류
  const professorGrid = document.getElementById('professorGrid');
  const phdGrid = document.getElementById('phdGrid');
  const mscGrid = document.getElementById('mscGrid');
  const undergradGrid = document.getElementById('undergradGrid');

  professorGrid.innerHTML = '';
  phdGrid.innerHTML = '';
  mscGrid.innerHTML = '';
  undergradGrid.innerHTML = '';

  members.forEach((member, idx) => {
    if ((member.role && member.role.toLowerCase().includes('professor')) || (member.role_ko && member.role_ko === '교수')) {
      professorGrid.innerHTML += createProfileCard(member, idx, lang);
    } else if ((member.role && member.role.toLowerCase().includes('ph.d.')) || (member.role_ko && member.role_ko === '박사과정')) {
      phdGrid.innerHTML += createProfileCard(member, idx, lang);
    } else if ((member.role && member.role.toLowerCase().includes('m.sc.')) || (member.role_ko && member.role_ko === '석사과정')) {
      mscGrid.innerHTML += createProfileCard(member, idx, lang);
    } else if ((member.role && member.role.toLowerCase().includes('undergraduate')) || (member.role_ko && member.role_ko === '학부과정')) {
      undergradGrid.innerHTML += createProfileCard(member, idx, lang);
    }
  });
}

function setLang(lang) {
  // 텍스트 다국어 처리
  document.querySelectorAll('.lang').forEach(el => {
    if (el.classList.contains('lang-' + lang)) {
      el.style.display = '';
    } else {
      el.style.display = 'none';
    }
  });
  // 멤버 피라미드 렌더링
  renderPyramidMembers(lang);
}

document.addEventListener('DOMContentLoaded', () => {
  // 초기 언어 설정 (한국어 기본값)
  const koBtn = document.getElementById('lang-ko');
  const enBtn = document.getElementById('lang-en');
  if (koBtn && !localStorage.getItem('preferred-language')) {
    koBtn.classList.add('active');
    enBtn?.classList.remove('active');
    setLang('ko');
  }
  
  // 스크롤 감지 및 상단바 제어
  const header = document.querySelector('.transparent-header');
  let lastScroll = 0;
  let scrollTimeout;

  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);

    const currentScroll = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    const heroSectionBottom = heroSection ? heroSection.offsetTop + heroSection.offsetHeight : 0;

    // 스크롤 방향 감지
    if (currentScroll > lastScroll && currentScroll > 100) {
      // 아래로 스크롤
      if (currentScroll > heroSectionBottom) {
        header.classList.add('hidden');
      }
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

    lastScroll = currentScroll;

    // 스크롤 멈춤 감지
    scrollTimeout = setTimeout(() => {
      header.classList.remove('hidden');
    }, 1000);
  }, { passive: true });

  // Smooth scroll for navigation and logo
  const smoothScrollToElement = (targetId) => {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Logo click event - 홈 페이지에서는 페이지 상단으로 스크롤
  document.querySelector('.logo').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Navigation links
  document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      // 외부 페이지 링크인 경우 기본 동작 허용
      if (href.endsWith('.html')) {
        return; // 기본 링크 동작 허용
      }
      // 페이지 내 앵커 링크인 경우에만 스무스 스크롤 적용
      e.preventDefault();
      const targetId = href.substring(1);
      smoothScrollToElement(targetId);
    });
  });

  // Intersection Observer for scroll animations
  const sections = document.querySelectorAll('.section');
  const observerOptions = {
    root: null,
    threshold: 0.15,
    rootMargin: '-50px'
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  // 언어 토글 버튼과 드롭다운 이벤트
  const langToggle = document.getElementById('langToggle');
  const langDropdown = document.getElementById('langDropdown');
  const currentLang = document.querySelector('.current-lang');

  // 드롭다운 토글
  langToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('show');
  });

  // 언어 선택 이벤트
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const lang = btn.getAttribute('data-lang');
      document.querySelectorAll('.lang-option').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentLang.textContent = btn.querySelector('.lang-code').textContent;
      langDropdown.classList.remove('show');
      setLang(lang);
    });
  });

  // 외부 클릭시 드롭다운 닫기
  document.addEventListener('click', () => {
    langDropdown.classList.remove('show');
  });
  // 연구 성과 필터링 및 렌더링
  const achievementsList = document.querySelector('.achievement-list');
  const achievementFilters = document.querySelectorAll('.achievement-filter');
  
  // 아이콘 설정
  const typeIcons = {
    publication: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>',
    conference: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>',
    patent: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>',
    award: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg>'
  };

  function updateAchievements(filterType = 'all') {
    const items = achievementsList.querySelectorAll('li');
    items.forEach(item => {
      if (filterType === 'all' || item.dataset.type === filterType) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  }

  achievementFilters?.forEach(filter => {
    filter.addEventListener('click', () => {
      achievementFilters.forEach(f => f.classList.remove('active'));
      filter.classList.add('active');
      updateAchievements(filter.dataset.filter);
    });
  });

  // Gallery Filtering
  const galleryFilters = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  function filterGallery(category) {
    galleryItems.forEach(item => {
      if (category === 'all' || item.dataset.category === category) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  }

  galleryFilters.forEach(filter => {
    filter.addEventListener('click', () => {
      // Remove active class from all filters
      galleryFilters.forEach(f => f.classList.remove('active'));
      // Add active class to clicked filter
      filter.classList.add('active');
      // Filter gallery items
      filterGallery(filter.dataset.filter);
    });
  });

  // 최초 영어로 렌더링
  setLang('en');

  // Modal logic (피라미드 구조에 맞게)
  const allGrids = ['professorGrid', 'phdGrid', 'mscGrid', 'undergradGrid'];
  const modal = document.getElementById('profileModal');
  const modalContent = document.getElementById('modalProfileContent');
  const closeModal = document.getElementById('closeModal');

  function createKeywordTags(keywords, lang) {
    if (!keywords) return '';
    const keywordArray = (lang === 'ko' ? keywords.split(',') : keywords.split(',')).map(k => k.trim());
    return keywordArray.map(keyword => `<span class="keyword-tag">${keyword}</span>`).join('');
  }

  allGrids.forEach(gridId => {
    const grid = document.getElementById(gridId);
    grid.addEventListener('click', (e) => {
      let card = e.target.closest('.profile-card');
      if (!card) return;
      const idx = card.getAttribute('data-idx');
      const m = members[idx];
      // 현재 언어 감지
      const lang = document.getElementById('lang-ko').classList.contains('active') ? 'ko' : 'en';
      
      modalContent.innerHTML = `
        <div class="modal-profile-img-wrap">
          <img src="${m.profileImg || m.cardImg || "https://placehold.co/500x600?text=Profile+Photo"}" alt="${lang === 'ko' ? m.name_ko : m.name}" class="modal-profile-img">
        </div>
        <div class="modal-profile-info">
          <div>
            <h1 class="modal-profile-name">${lang === 'ko' ? m.name_ko : m.name}</h1>
            <div class="modal-profile-name-ko">${lang === 'ko' ? m.name : m.name_ko}</div>
          </div>
          
          <div class="modal-profile-role">
            ${lang === 'ko' ? m.role_ko : m.role}
          </div>
          
          ${m.intro || m.intro_ko ? `
          <div class="modal-profile-section">
            <div class="modal-profile-section-title">About</div>
            <div class="modal-profile-section-content">
              ${lang === 'ko' ? (m.intro_ko || m.intro) : (m.intro || m.intro_ko)}
            </div>
          </div>
          ` : ''}
          
          ${m.keywords || m.keywords_ko ? `
          <div class="modal-profile-section">
            <div class="modal-profile-section-title">Research Keywords</div>
            <div class="modal-profile-keywords">
              ${createKeywordTags(lang === 'ko' ? (m.keywords_ko || m.keywords) : (m.keywords || m.keywords_ko), lang)}
            </div>
          </div>
          ` : ''}
          
          ${m.email ? `
          <div class="modal-profile-contact">
            <a href="mailto:${m.email}" class="contact-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              ${m.email}
            </a>
          </div>
          ` : ''}
        </div>
      `;
      modalContent.innerHTML = `
        <div class="modal-profile-detail">
          <div class="modal-profile-img-wrap">
            <img src="${m.img}" alt="${lang === 'ko' ? (m.name_ko || m.name) : m.name}" class="modal-profile-img" />
          </div>
          <div class="modal-profile-info">
            <h3 class="modal-profile-name">${lang === 'ko' ? (m.name_ko || m.name) : m.name}</h3>
            <div class="modal-profile-role">${lang === 'ko' ? (m.role_ko || m.role) : m.role}</div>
            ${(m.intro || m.intro_ko) ? `<div class='modal-profile-intro'>${lang === 'ko' ? (m.intro_ko || m.intro) : m.intro}</div>` : ''}
            ${(m.keywords || m.keywords_ko) ? `<div class='modal-profile-keywords'><b>${lang === 'ko' ? '키워드' : 'Keywords'}:</b> ${lang === 'ko' ? (m.keywords_ko || m.keywords) : m.keywords}</div>` : ''}
            ${m.email ? `<div class='modal-profile-email'><b>Email:</b> <a href='mailto:${m.email}'>${m.email}</a></div>` : ''}
          </div>
        </div>
      `;
      modal.style.display = 'block';
    });
  });

  closeModal.onclick = () => { modal.style.display = 'none'; };
  window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };

  // Contact Form Modal
  const contactBtn = document.getElementById('contactBtn');
  const contactModal = document.getElementById('contactModal');
  const closeContactModal = document.getElementById('closeContactModal');
  const cancelContactBtn = document.getElementById('cancelContact');
  const contactForm = document.getElementById('contactForm');

  contactBtn.addEventListener('click', () => {
    contactModal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // 모달 열릴 때 스크롤 방지
  });

  function closeContactModalHandler() {
    contactModal.style.display = 'none';
    document.body.style.overflow = ''; // 모달 닫힐 때 스크롤 복원
    contactForm.reset();
  }

  closeContactModal.addEventListener('click', closeContactModalHandler);
  cancelContactBtn.addEventListener('click', closeContactModalHandler);

  window.addEventListener('click', (e) => {
    if (e.target === contactModal) {
      closeContactModalHandler();
    }
  });

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const formDataObj = {};
    formData.forEach((value, key) => {
      formDataObj[key] = value;
    });

    // 여기에서 formDataObj를 서버로 전송하는 로직을 구현할 수 있습니다
    // 현재는 콘솔에 출력하고 성공 메시지를 표시합니다
    console.log('Form Data:', formDataObj);

    const lang = document.getElementById('lang-ko').classList.contains('active') ? 'ko' : 'en';
    const successMessage = lang === 'ko' 
      ? '메시지가 성공적으로 전송되었습니다. 빠른 시일 내에 답변 드리겠습니다.'
      : 'Thank you for your message. We will get back to you soon!';

    alert(successMessage);
    closeContactModalHandler();
  });
});
