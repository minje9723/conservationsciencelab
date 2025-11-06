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
  },
  {
    id: 10,
    title_en: "Scientific Investigation of Daejiguksa Stupa at Gochang Samcheongsa Temple Site",
    title_ko: "고양 삼천사지 대지국사탑비 과학적 조사",
    description_en: "Scientific investigation of Daejiguksa Stupa at Samcheongsa Temple Site in Gochang.",
    description_ko: "고양 삼천사지 대지국사탑비에 대한 과학적 조사 연구.",
    category: "site-investigation",
    duration: "2022",
    funding: "Seojin Cultural Heritage",
    funding_ko: "서진문화유산",
    keywords: ["Stupa", "Scientific Investigation", "Temple Site", "Stone Heritage"],
    keywords_ko: ["탑비", "과학 조사", "사지", "석조문화재"],
    team: ["Sang Ok Lee", "Eun Kyung Seo"],
    publications: [],
    images: []
  },
  {
    id: 11,
    title_en: "Scientific Analysis of Wooden Jijang Bosal and Siwang Statues at Gochang Munsu Temple",
    title_ko: "고창 문수사 목조지장보살좌상 및 시왕상 과학적 분석",
    description_en: "Scientific analysis of wooden Jijang Bodhisattva and Ten Kings statues at Munsu Temple, Gochang.",
    description_ko: "고창 문수사 목조지장보살좌상 및 시왕상에 대한 과학적 분석.",
    category: "site-investigation",
    duration: "2022",
    funding: "Yeongsan Cultural Heritage Institute",
    funding_ko: "영산문화재연구소",
    keywords: ["Wooden Statues", "Buddhist Sculpture", "Scientific Analysis", "Temple Heritage"],
    keywords_ko: ["목조상", "불교 조각", "과학 분석", "사찰 문화재"],
    team: ["Sang Ok Lee", "Eun Kyung Seo"],
    publications: [],
    images: []
  },
  {
    id: 12,
    title_en: "Scientific Analysis of Concealed Buddhist Relics in Wooden Shakyamuni Triad at Gongju Donghaksa Temple",
    title_ko: "공주 동학사 목조석가여래삼존불좌상 복장유물 과학적 분석",
    description_en: "Scientific analysis of concealed Buddhist relics within wooden Shakyamuni Triad statues at Donghaksa Temple, Gongju.",
    description_ko: "공주 동학사 목조석가여래삼존불좌상 복장유물에 대한 과학적 분석.",
    category: "site-investigation",
    duration: "2020",
    funding: "Indigo",
    funding_ko: "인디고",
    keywords: ["Buddhist Relics", "Wooden Statues", "Scientific Analysis", "Temple Heritage"],
    keywords_ko: ["복장유물", "목조상", "과학 분석", "사찰 문화재"],
    team: ["Eun Kyung Seo", "Hyo Jeong Kim"],
    publications: [],
    images: []
  },
  {
    id: 13,
    title_en: "Scientific Investigation of Interior Murals at Daegwangbojeon Hall, Gongju Magoksa Temple",
    title_ko: "공주 마곡사 대광보전 내부벽화 과학적 조사",
    description_en: "Scientific investigation of interior murals at Daegwangbojeon Hall in Magoksa Temple, Gongju.",
    description_ko: "공주 마곡사 대광보전 내부벽화에 대한 과학적 조사.",
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
    id: 14,
    title_en: "Clay Analysis of Four Guardian Kings Statues at Gongju Magoksa Temple",
    title_ko: "공주 마곡사 사천왕상 소조토 분석",
    description_en: "Analysis of clay materials used in Four Guardian Kings statues at Magoksa Temple, Gongju.",
    description_ko: "공주 마곡사 사천왕상 소조토 재료 분석.",
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
    id: 15,
    title_en: "Surface Investigation and Compositional Analysis for Database of Outdoor Sculptures at Gwacheon MMCA Sculpture Park",
    title_ko: "과천관 야외조각공원 조각품 DB 구축용 표면 조사 및 성분분석",
    description_en: "Surface investigation and compositional analysis for database construction of outdoor sculptures at Gwacheon MMCA Sculpture Park.",
    description_ko: "과천 국립현대미술관 야외조각공원 조각품 DB 구축용 표면 조사 및 성분분석.",
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
    id: 16,
    title_en: "Scientific Analysis of Gangjin Gimhae Kim Clan's Funeral Bier at Gwangju Metropolitan Museum",
    title_ko: "광주광역시립박물관 강진김해김씨가 상여 과학적 분석",
    description_en: "Scientific analysis of traditional funeral bier from Gangjin Gimhae Kim Clan at Gwangju Metropolitan Museum.",
    description_ko: "광주광역시립박물관 강진김해김씨가 상여에 대한 과학적 분석.",
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
  {
    id: 17,
    title_en: "Scientific Investigation and Database Construction for Outdoor Sculpture Preservation at National Museum of Modern and Contemporary Art",
    title_ko: "구미 대둔사 건칠아미타여래좌상 및 대좌 과학적 조사",
    description_en: "Scientific investigation of Amitabha statue and pedestal at Daetosa Temple for NMCA.",
    description_ko: "구미 대둔사 건칠아미타여래좌상 및 대좌에 대한 과학적 조사.",
    category: "site-investigation",
    duration: "2022",
    funding: "Owon Cultural Heritage",
    funding_ko: "오원문화유산",
    keywords: ["Buddhist Statue", "Amitabha", "Scientific Investigation", "Iron Statue"],
    keywords_ko: ["불상", "아미타여래", "과학 조사", "철불"],
    team: ["Sang Ok Lee", "Min Je Kim"],
    publications: [],
    images: []
  },
  {
    id: 18,
    title_en: "Scientific Analysis of Tongyeong Statue and Mortar Materials",
    title_ko: "군산 둔율동 성당 마감재 및 모르타르 재료기법 분석",
    description_en: "Analysis of finishing materials and mortar construction techniques at Donyuldang in Gunsan.",
    description_ko: "군산 둔율동 성당 마감재 및 모르타르 재료기법에 대한 분석.",
    category: "site-investigation",
    duration: "2022",
    funding: "Borim Cultural Heritage",
    funding_ko: "보림문화재",
    keywords: ["Traditional Architecture", "Material Analysis", "Construction Techniques", "Mortar"],
    keywords_ko: ["전통건축", "재료 분석", "시공기법", "모르타르"],
    team: ["Su Jeong Kim", "Gyu Ri Choi"],
    publications: [],
    images: []
  },
  {
    id: 19,
    title_en: "Scientific Analysis of Goryeo-era Gilt Bronze Reliquary and Wooden Pagoda from Doryang-ri, Buyeo",
    title_ko: "근현대 표준 및 검정용 도량형 비파괴 분석 결과",
    description_en: "Non-destructive analysis results of modern standard and verification weights and measures.",
    description_ko: "근현대 표준 및 검정용 도량형에 대한 비파괴 분석 결과.",
    category: "site-investigation",
    duration: "2022",
    funding: "Doryang-Measures Museum",
    funding_ko: "도량형박물관",
    keywords: ["Weights and Measures", "Modern Era", "Non-destructive Analysis", "Standards"],
    keywords_ko: ["도량형", "근현대", "비파괴 분석", "표준"],
    team: ["Min Je Kim", "Eun Kyung Seo"],
    publications: [],
    images: []
  },
  {
    id: 20,
    title_en: "X-ray Analysis of Gold Threads",
    title_ko: "금동관 X-ray 분석",
    description_en: "X-ray analysis of gilt bronze crown and gold threads.",
    description_ko: "금동관에 대한 X-ray 분석 연구.",
    category: "site-investigation",
    duration: "2022",
    funding: "Haman County Office",
    funding_ko: "함안군청",
    keywords: ["Gold Crown", "X-ray Analysis", "Metal Analysis", "Archaeological Heritage"],
    keywords_ko: ["금동관", "X-ray 분석", "금속 분석", "고고 유산"],
    team: ["Sang Ok Lee", "Min Je Kim"],
    publications: [],
    images: []
  },
  {
    id: 21,
    title_en: "Scientific Analysis of Wooden Jijang Bodhisattva and sixteen Zodiac Guardian Statues at Naju Dabuosa Temple",
    title_ko: "나주 다보사 목조석가여래삼존상 및 소조십육나한상 과학적 분석",
    description_en: "Scientific analysis of wooden Shakyamuni Buddha and clay sixteen zodiac guardian statues at Dabuosa Temple, Naju.",
    description_ko: "나주 다보사 목조석가여래삼존상 및 소조십육나한상에 대한 과학적 분석.",
    category: "site-investigation",
    duration: "2022",
    funding: "Engard",
    funding_ko: "엔가드",
    keywords: ["Wooden Buddha", "Clay Statues", "Zodiac Guardians", "Buddhist Sculpture"],
    keywords_ko: ["목조불상", "소조상", "십육나한", "불교 조각"],
    team: ["Eun Kyung Seo", "Hyo Jeong Kim"],
    publications: [],
    images: []
  },
  {
    id: 22,
    title_en: "Scientific Analysis of Dancheong and Painting at Naju Jukrimsa Temple",
    title_ko: "나주 죽림사 극락보전 단청 과학적 분석",
    description_en: "Scientific analysis of dancheong (traditional decorative coloring) and paintings at Geukrakbojeon Hall, Jukrimsa Temple, Naju.",
    description_ko: "나주 죽림사 극락보전 단청에 대한 과학적 분석.",
    category: "site-investigation",
    duration: "2022",
    funding: "Handeum Cultural Heritage",
    funding_ko: "한듬문화재",
    keywords: ["Dancheong", "Traditional Painting", "Temple Architecture", "Pigment Analysis"],
    keywords_ko: ["단청", "전통 회화", "사찰 건축", "안료 분석"],
    team: ["Eun Kyung Seo", "Su Jeong Kim"],
    publications: [],
    images: []
  },
  {
    id: 23,
    title_en: "Scientific Analysis of Naju Jukrimsa Geukrakbojeon Wall Paintings",
    title_ko: "나주 죽림사 극락보전 벽화 과학적 분석",
    description_en: "Scientific analysis of wall paintings at Geukrakbojeon Hall, Jukrimsa Temple, Naju.",
    description_ko: "나주 죽림사 극락보전 벽화에 대한 과학적 분석.",
    category: "site-investigation",
    duration: "2022",
    funding: "Handeum Cultural Heritage",
    funding_ko: "한듬문화재",
    keywords: ["Wall Paintings", "Temple Heritage", "Mural Analysis", "Buddhist Art"],
    keywords_ko: ["벽화", "사찰 문화재", "벽화 분석", "불교 미술"],
    team: ["Eun Kyung Seo", "Hyo Jeong Kim"],
    publications: [],
    images: []
  },
  {
    id: 24,
    title_en: "Scientific Analysis of Damyang Miryangsa Daeungjeon Wall Paintings",
    title_ko: "담양 미암사당 벽화 과학적 분석",
    description_en: "Scientific analysis of wall paintings at Daeungjeon Hall, Miryangsa Temple, Damyang.",
    description_ko: "담양 미암사당 벽화에 대한 과학적 분석.",
    category: "site-investigation",
    duration: "2022",
    funding: "",
    funding_ko: "",
    keywords: ["Wall Paintings", "Temple Heritage", "Scientific Investigation", "Buddhist Murals"],
    keywords_ko: ["벽화", "사찰 문화재", "과학 조사", "불교 벽화"],
    team: ["Eun Kyung Seo", "Ji Eun Hyun"],
    publications: [],
    images: []
  },
  {
    id: 25,
    title_en: "Conservation Treatment and Scientific Analysis of Embroidered Chogak Cushions at Daegu Modern History Museum",
    title_ko: "대구근대역사박물관 소장 석조각상 보존처리 용역",
    description_en: "Conservation treatment services for stone sculptures at Daegu Modern History Museum.",
    description_ko: "대구근대역사박물관 소장 석조각상에 대한 보존처리 용역.",
    category: "excavated-conservation",
    duration: "2022",
    funding: "Daegu Modern History Museum",
    funding_ko: "대구근대역사박물관",
    keywords: ["Stone Sculpture", "Conservation Treatment", "Museum Collection", "Modern History"],
    keywords_ko: ["석조각", "보존처리", "박물관 소장품", "근대사"],
    team: ["Sang Ok Lee", "Su Jeong Kim"],
    publications: [],
    images: []
  },
  {
    id: 26,
    title_en: "Research on Traditional Conservation Materials and Damage Inhibition Methods",
    title_ko: "동산문화재 구조보강용 전통 철물의 수리복원방안 연구",
    description_en: "Research on repair and restoration methods for traditional metal fittings used in structural reinforcement of movable cultural heritage.",
    description_ko: "동산문화재 구조보강용 전통 철물의 수리복원방안에 대한 연구.",
    category: "preservation-research",
    duration: "2022",
    funding: "Korea National University of Heritage",
    funding_ko: "한국전통문화대학교",
    keywords: ["Traditional Metal", "Structural Reinforcement", "Conservation Methods", "Movable Heritage"],
    keywords_ko: ["전통 철물", "구조보강", "보존 방법", "동산문화재"],
    team: ["Sang Ok Lee", "Min Je Kim", "Su Jeong Kim"],
    publications: [],
    images: []
  },
  {
    id: 27,
    title_en: "Research on Water Repellent Treatment Materials and Damage Inhibition for Earthen Heritage",
    title_ko: "등록문화재 동산유물의 수리복원용 무기재료 연구",
    description_en: "Research on inorganic materials for repair and restoration of bronze artifacts in movable cultural heritage.",
    description_ko: "등록문화재 동산유물의 수리복원을 위한 무기재료 연구.",
    category: "preservation-research",
    duration: "2022",
    funding: "Korea National University of Heritage",
    funding_ko: "한국전통문화대학교",
    keywords: ["Bronze Artifacts", "Inorganic Materials", "Restoration Methods", "Conservation Research"],
    keywords_ko: ["동상 유물", "무기재료", "복원 방법", "보존 연구"],
    team: ["Eun Kyung Seo", "Gyu Ri Choi"],
    publications: [],
    images: []
  },
  {
    id: 28,
    title_en: "Research on Water Repellent Treatment of Traditional Earthen Walls and Development of Monitoring Smart Management System",
    title_ko: "문화재 수리복원용 전통 장석의 소재 물성 지표 및 수리지침 개발 연구",
    description_en: "Research on material property indicators and repair guidelines for traditional metal fittings used in cultural heritage restoration.",
    description_ko: "문화재 수리복원용 전통 장석의 소재 물성 지표 및 수리지침 개발에 대한 연구.",
    category: "preservation-research",
    duration: "2022",
    funding: "Korea National University of Heritage",
    funding_ko: "한국전통문화대학교",
    keywords: ["Traditional Metal Fittings", "Material Properties", "Repair Guidelines", "Heritage Restoration"],
    keywords_ko: ["전통 장석", "물성 지표", "수리 지침", "문화재 복원"],
    team: ["Sang Ok Lee", "Su Jeong Kim", "Gyu Ri Choi"],
    publications: [],
    images: []
  },
  {
    id: 29,
    title_en: "Development of Smart Monitoring System for Conservation Environment Management of Cultural Heritage Storehouses",
    title_ko: "반구대 암각화 보존환경 모니터링 스마트관리체계 개발사업",
    description_en: "Development project for smart management system for monitoring conservation environment of archaeological artifacts storage.",
    description_ko: "반구대 암각화 보존환경 모니터링을 위한 스마트관리체계 개발사업.",
    category: "preservation-research",
    duration: "2022",
    funding: "Ulsan City",
    funding_ko: "울산시청",
    keywords: ["Smart Monitoring", "Conservation Environment", "Storage Management", "Museum Collection"],
    keywords_ko: ["스마트 모니터링", "보존환경", "수장고 관리", "박물관 소장품"],
    team: ["Min Je Kim", "Gyu Ri Choi"],
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

// Pagination state
let projectsCurrentPage = 1;
const itemsPerPage = 9;
let currentCategory = 'all';

// Get project counts by category
function getProjectCounts() {
  const counts = {
    all: projects.length,
    'site-investigation': 0,
    'excavated-conservation': 0,
    'designation-research': 0,
    'preservation-research': 0
  };
  
  projects.forEach(project => {
    if (counts[project.category] !== undefined) {
      counts[project.category]++;
    }
  });
  
  return counts;
}

// Update filter buttons with counts - only show for active button
function updateFilterCounts(activeCategory) {
  const counts = getProjectCounts();
  const lang = getCurrentLanguage();
  
  document.querySelectorAll('.filter-btn[data-category]').forEach(btn => {
    const category = btn.getAttribute('data-category');
    const count = counts[category] || 0;
    
    // Remove existing count badge if any
    const existingBadge = btn.querySelector('.filter-count');
    if (existingBadge) existingBadge.remove();
    
    // Only add count badge to active button
    if (category === activeCategory) {
      const badge = document.createElement('span');
      badge.className = 'filter-count';
      badge.textContent = count;
      btn.appendChild(badge);
    }
  });
}

// Filter projects with pagination
function filterProjects(category = 'all', page = 1) {
  currentCategory = category;
  projectsCurrentPage = page;
  
  const filteredProjects = category === 'all' 
    ? projects 
    : projects.filter(p => p.category === category);
  
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const projectsToShow = filteredProjects.slice(startIndex, endIndex);
  
  // Render filtered projects
  renderProjectsPage(projectsToShow);
  
  // Update pagination
  renderPagination(totalPages, page);
  
  // Update filter button states
  updateSmartFilterStates(category);
  
  // Update filter counts for active button only
  updateFilterCounts(category);
}

// Update smart filter button states
function updateSmartFilterStates(activeCategory) {
  // Update category filters
  document.querySelectorAll('.filter-btn[data-category]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === activeCategory);
  });
}

// Render projects for current page
function renderProjectsPage(projectsToShow) {
  const container = document.getElementById('projectShowcase') || document.getElementById('projectList');
  if (!container) return;

  const lang = getCurrentLanguage();
  
  container.innerHTML = `
    <div class="modern-projects-grid">
      ${projectsToShow.map(project => createModernProjectCard(project, lang)).join('')}
    </div>
  `;
  
  // Re-initialize animations
  setTimeout(() => {
    initAnimations();
  }, 50);
}

// Render pagination controls
function renderPagination(totalPages, projectsCurrentPageParam) {
  const container = document.querySelector('.projects-showcase');
  if (!container) return;
  
  // Remove existing pagination
  const existingPagination = document.querySelector('.pagination-container');
  if (existingPagination) existingPagination.remove();
  
  if (totalPages <= 1) return;
  
  const lang = getCurrentLanguage();
  const paginationHTML = `
    <div class="pagination-container">
      <button class="pagination-btn" id="prevPage" ${projectsCurrentPageParam === 1 ? 'disabled' : ''}>
        <i class="fas fa-chevron-left"></i>
        <span class="lang lang-en">Previous</span>
        <span class="lang lang-ko" style="display:none;">이전</span>
      </button>
      
      <div class="pagination-numbers">
        ${Array.from({ length: totalPages }, (_, i) => i + 1).map(page => `
          <button class="pagination-number ${page === projectsCurrentPageParam ? 'active' : ''}" data-page="${page}">
            ${page}
          </button>
        `).join('')}
      </div>
      
      <button class="pagination-btn" id="nextPage" ${projectsCurrentPageParam === totalPages ? 'disabled' : ''}>
        <span class="lang lang-en">Next</span>
        <span class="lang lang-ko" style="display:none;">다음</span>
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  `;
  
  container.insertAdjacentHTML('afterend', paginationHTML);
  
  // Add event listeners
  document.getElementById('prevPage')?.addEventListener('click', () => {
    if (projectsCurrentPage > 1) {
      filterProjects(currentCategory, projectsCurrentPage - 1);
    }
  });
  
  document.getElementById('nextPage')?.addEventListener('click', () => {
    if (projectsCurrentPage < totalPages) {
      filterProjects(currentCategory, projectsCurrentPage + 1);
    }
  });
  
  document.querySelectorAll('.pagination-number').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const page = parseInt(e.target.getAttribute('data-page'));
      filterProjects(currentCategory, page);
    });
  });
}

// Render all projects with pagination
function renderProjects() {
  // Render first page (updateFilterCounts will be called in filterProjects)
  filterProjects(currentCategory, 1);
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
      
      const category = btn.getAttribute('data-category');
      filterProjects(category, 1);
      
      // Update URL parameter
      const newUrl = new URL(window.location);
      if (category === 'all') {
        newUrl.searchParams.delete('category');
      } else {
        newUrl.searchParams.set('category', category);
      }
      window.history.replaceState({}, '', newUrl);
    });
  });

  // Initial render with filter if URL parameter exists
  renderProjects();
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