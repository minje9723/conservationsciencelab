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
    indexing: "KCI",
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
    indexing: "KCI",
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
    indexing: "Scopus",
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
    indexing: "Scopus",
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
    indexing: "KCI",
    year: 2023,
    summary_en: "Proposed a new classification system and management guidelines for Catholic moveable cultural heritage preservation.",
    summary_ko: "천주교 동산문화유산의 새로운 분류체계 및 보존관리 지침 제안.",
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003050054",
    doi: "",
    keywords: ["Catholic", "Religious cultural heritage", "Listing", "Classification system", "Preservation management"],
    keywords_ko: ["천주교", "종교문화유산", "목록화", "분류체계", "보존관리"]
  },
  {
    id: 4,
    type: "publication",
    title_en: "Study on the Manufacturing Technique of Horse Strap Pendants Excavated from the Tumuli in Munsan-ri, Dalseong, Daegu",
    title_ko: "대구 달성 문산리 고분군 출토 행엽의 제작기법 연구",
    authors: "Hae Won Lee, Hyo Seon Lee, Kwang Yong Chung",
    authors_ko: "이해원, 이효선, 정광용",
    journal: "Journal of Museum Studies",
    journal_ko: "박물관보존과학",
    journal_abbr: "J. Museum Stud.",
    indexing: "KCI",
    year: 2024,
    summary_en: "Scientific analysis and classification of horse strap pendants manufacturing techniques from Munsan-ri Tumuli using microscopy, X-ray, and XRF analysis.",
    summary_ko: "현미경 분석, X선 투과 조사, X선 형광 분석을 통한 문산리 고분군 출토 행엽의 제작 기법 연구.",
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003143971",
    doi: "10.22790/conservation.2024.32.0059",
    keywords: ["Munsan-ri Tumuli", "Horse strap pendant", "Component analysis", "Manufacturing techniques"],
    keywords_ko: ["문산리 고분군", "행엽", "성분 분석", "제작 기법"]
  },
  {
    id: 21,
    type: "publication",
    title_en: "Metallurgical Analysis of Ironware Excavated from Janggye-ri Ancient Tombs in Jangsu",
    title_ko: "장수 장계리 고분군 출토 철기의 금속학적 연구",
    authors: "Sun Park, Young Joo Yang, Kwang Yong Chung",
    authors_ko: "박선, 양영주, 정광용",
    journal: "The Journal of Study on Korean Traditional Culture",
    journal_ko: "한국전통문화연구",
    journal_abbr: "J. Study Korean Trad. Cult.",
    indexing: "KCI",
    year: 2022,
    summary_en: "Metallurgical analysis of Smith's tools and ironware excavated from Janggye-ri ancient tombs to investigate iron manufacturing technology characteristics in Jangsu area.",
    summary_ko: "장수 장계리 고분군 출토 단야구 및 철기의 금속학적 분석을 통한 장수지역 철기제작기술 특징 연구.",
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002900734",
    doi: "10.23067/tjokch..30.202211.409",
    keywords: ["Smith's tools", "Forge", "Three Kingdoms Period", "Janggye-ri", "Microstructure"],
    keywords_ko: ["단야구", "단조", "삼국시대", "장계리", "미세조직"]
  },
  {
    id: 22,
    type: "publication",
    title_en: "The Manufacturing Techniques and Conservation Plan for the Molding Clay of the Clay Seated Amitabha Buddha Triad in Muryangsa Temple, Buyeo, Korea",
    title_ko: "부여 무량사 소조아미타여래삼존좌상의 소조토 제작기법 및 보존 방안",
    authors: "Dong Jun Roh, Sang Ok Lee,Sun Jong Kwon, Kwang Yong Chung",
    authors_ko: "노동준, 이상옥, 권순종, 정광용",
    journal: "The Journal of Study on Korean Traditional Culture",
    journal_ko: "한국전통문화연구",
    journal_abbr: "J. Study Korean Trad. Cult.",
    indexing: "KCI",
    year: 2023,
    summary_en: "Scientific analysis and conservation plan for the molding clay of the Clay Seated Amitabha Buddha Triad in Muryangsa Temple to establish preservation measures.",
    summary_ko: "부여 무량사 소조아미타여래삼존좌상 소조토의 과학적 분석을 바탕으로 제작기법 규명 및 보존 방안 수립.",
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002961407",
    doi: "10.23067/tjokch..31.202305.51",
    keywords: ["The Clay Seated Amitabha Buddha Triad", "Molding clay", "Scientific analysis", "Making techniques", "Conservation plan"],
    keywords_ko: ["소조아미타여래삼존좌상", "소조토", "과학적 분석", "제작기법", "보존 방안"]
  },
  {
    id: 23,
    type: "publication",
    title_en: "Applicability Research of Restoration Material for Bronze using Copper PLA 3D Printing",
    title_ko: "Copper PLA 3D 프린팅을 활용한 청동유물 복원재료 적용 가능성 연구",
    authors: "Min Je Kim, Sang Ok Lee, Kwang Yong Chung",
    authors_ko: "김민제, 이상옥, 정광용",
    journal: "The Journal of Study on Korean Traditional Culture",
    journal_ko: "한국전통문화연구",
    journal_abbr: "J. Study Korean Trad. Cult.",
    year: 2023,
    summary_en: "Applicability research of Cu-PLA filament with patination technique for bronze cultural heritage restoration material.",
    summary_ko: "Cu-PLA 필라멘트와 파티네이션을 활용한 청동 문화재 복원재료 적용 가능성 연구.",
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002961416",
    doi: "10.23067/tjokch..31.202305.249",
    keywords: ["Bronze cultural heritage restoration", "Metal filament", "Cu-PLA", "3D printing", "Patination"],
    keywords_ko: ["청동유물 복원재료", "금속 필라멘트", "Cu-PLA", "3D 프린팅", "파티네이션"]
  },
  {
    id: 19,
    type: "publication",
    title_en: "Corrosion Characteristics of Bronze Artifacts Excavated from the Songguk-ri Site in Buyeo According to Alloy Ratio and Manufacturing Techniques During the Goryeo Dynasty",
    title_ko: "부여 송국리 유적 출토 고려시대 청동유물의 합금성분 및 제작기법에 따른 부식 특성",
    authors: "Jun Hyuk Jang, Kwang Yong Chung",
    authors_ko: "장준혁, 정광용",
    journal: "Korean Journal of Metals and Materials",
    journal_ko: "대한금속재료학회지",
    journal_abbr: "Korean J. Met. Mater.",
    indexing: "SCI",
    year: 2022,
    summary_en: "Comprehensive analysis of corrosion characteristics of excavated bronze artifacts according to their alloy ratio and microstructure from Songguk-ri site.",
    summary_ko: "송국리 유적 출토 고려시대 청동유물의 합금성분 및 미세조직에 따른 부식 특성 종합 분석.",
    link: "http://kjmm.org/journal/view.php?viewtype=pubreader&number=869",
    doi: "10.3365/KJMM.2022.60.5.400",
    keywords: ["Goryeo Dynasty", "Bronze artifacts", "Alloy ratio", "Manufacturing technique", "Corrosion product"],
    keywords_ko: ["고려시대", "청동유물", "합금성분", "제작기법", "부식생성물"]
  },
  {
    id: 20,
    type: "publication",
    title_en: "Material Properties of Lime Mortars Used in the Architectural Heritage of the Joseon Dynasty",
    title_ko: "조선시대 건축유산에 사용된 석회 모르타르의 재료 특성",
    authors: "Han Ul Im, Sang Ok Lee, Kwang Yong Chung",
    authors_ko: "임한울, 이상옥, 정광용",
    journal: "Heritage",
    journal_ko: "헤리티지",
    journal_abbr: "Heritage",
    indexing: "Scopus",
    year: 2025,
    summary_en: "Scientific analysis of lime mortar samples from Joseon Dynasty architectural heritage sites to identify raw materials and characteristics.",
    summary_ko: "조선시대 건축유산 석회 모르타르의 원료와 특성을 규명하기 위한 과학적 분석 연구.",
    link: "https://www.mdpi.com/2571-9408/8/2/82",
    doi: "10.3390/heritage8020082",
    keywords: ["Lime mortar", "Historic lime mortar", "Raw materials", "Microstructural characteristics", "Joseon Dynasty"],
    keywords_ko: ["석회 모르타르", "역사적 석회 모르타르", "원료", "미세조직 특성", "조선시대"]
  },
  {
    id: 24,
    type: "publication",
    title_en: "Corrosion Properties of Traditional Forged High Tin Bronzes by Quenching(Cu-Sn alloy) Excavated from Archaeological Site",
    title_ko: "방짜기술로 제작된 출토 Cu-Sn 청동합의 부식 특성",
    authors: "Go Woon Bae",
    authors_ko: "배고운",
    journal: "Korean Journal of Traditional Culture",
    journal_ko: "한국전통문화연구",
    journal_abbr: "Korean J. Tradit. Cult.",
    indexing: "KCI",
    year: 2025,
    summary_en: "Study on corrosion mechanisms of bronze artifacts manufactured using traditional forged high tin bronze techniques through microstructure and corrosion layer analysis.",
    summary_ko: "방짜기술로 제작된 청동유물의 미세조직 및 부식층 분석을 통한 부식 메커니즘 연구.",
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003207820",
    doi: "",
    keywords: ["Bronze artifacts", "Forged high tin bronze", "Corrosion properties", "Corrosion products"],
    keywords_ko: ["출토 청동유물", "방짜유기", "부식 특성", "부식생성물"]
  },
  {
    id: 25,
    type: "publication",
    title_en: "Techniques Analysis of Gilt-bronze Fittings Excavated from Buyeo Royal Tombs",
    title_ko: "부여 왕릉원 출토 부속금구의 제작기술 연구 -금동투금구를 중심으로-",
    authors: "Jun Hyeok Jang",
    authors_ko: "장준혁",
    journal: "Korean Journal of Traditional Culture",
    journal_ko: "한국전통문화연구",
    journal_abbr: "Korean J. Tradit. Cult.",
    indexing: "KCI",
    year: 2025,
    summary_en: "Scientific analysis of gilt-bronze fittings from Buyeo Royal Tombs to identify manufacturing techniques and compare with similar artifacts from Iksan Ssangreung Tombs.",
    summary_ko: "부여 왕릉원 4호분 출토 금동투금구의 제작기술 특징 확인 및 익산 쌍릉 출토 유물과의 비교 연구.",
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003207810",
    doi: "",
    keywords: ["Buyeo Royal Tombs", "Gilt-bronze Fittings", "Microstructure", "Alloy Composition", "Manufacturing Technique"],
    keywords_ko: ["부여 왕릉원", "부속금구", "미세조직", "합금성분", "제작기술"]
  },
  {
    id: 26,
    type: "publication",
    title_en: "Analsys of internal structure of wooden buddha statue at Yecheon Yongmunsa using X-ray Computed tomography",
    title_ko: "X선 CT를 활용한 예천 용문사 목조지장보살좌상 내부구조 분석",
    authors: "Sang Hoon Lee, Go Woon Bae, Seung Mu Heo, Kwang Yong Chung",
    authors_ko: "이상훈, 배고운, 허승무, 정광용",
    journal: "Korean Journal of Traditional Culture",
    journal_ko: "한국전통문화연구",
    journal_abbr: "Korean J. Tradit. Cult.",
    indexing: "KCI",
    year: 2025,
    summary_en: "Detailed investigation of internal structure and construction methods of wooden Buddha statue using X-ray CT for conservation treatment planning.",
    summary_ko: "X선 CT를 이용한 목조지장보살좌상의 내부구조 및 결구 방식에 대한 정밀조사를 통한 보존처리 계획 수립.",
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003164522",
    doi: "10.23067/tjokch..34.202501.191",
    keywords: ["Wooden Buddha", "Computed tomography", "Manufacturing techniques", "inner structure"],
    keywords_ko: ["목조불상", "CT", "제작기법", "내부구조"]
  },
  {
    id: 27,
    type: "publication",
    title_en: "A Study of Physical Properties and Shape of Daeungjeon Roof Tiles at Mihwangsa Temple, Haenam",
    title_ko: "보물 해남 미황사 대웅전 기와의 물성 및 형태 연구",
    authors: "Han Ul Im, Sang Ok Lee",
    authors_ko: "임한울, 이상옥",
    journal: "Korean Journal of Traditional Culture",
    journal_ko: "한국전통문화연구",
    journal_abbr: "Korean J. Tradit. Cult.",
    indexing: "KCI",
    year: 2023,
    summary_en: "Digital measurement and physical property analysis of old roof tiles from Daeungjeon Hall at Mihwangsa Temple using 3D scanning and XRD analysis.",
    summary_ko: "3차원 스캔과 XRD 분석을 이용한 미황사 대웅전 옛기와의 디지털 실측 및 물리·화학적 특성 연구.",
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003021832",
    doi: "10.23067/tjokch..32.202311.239",
    keywords: ["Joseon Dynasty roof tiles", "digital measurement", "digital visualization", "physical property evaluation", "restoration of shape"],
    keywords_ko: ["조선시대 기와", "디지털 실측", "디지털 가시화", "물성평가", "형태 복원"]
  },
  {
    id: 28,
    type: "publication",
    title_en: "The Metallurgical Characteristics of Modern Brassware by Manufacturing Techniques",
    title_ko: "제작기법에 따른 현대 유기(鍮器)의 금속학적 특성 분석",
    authors: "Yu Ran Seok, Go Woon Bae",
    authors_ko: "석유란, 배고운",
    journal: "Journal of Conservation Science",
    journal_ko: "보존과학회지",
    journal_abbr: "J. Conserv. Sci.",
    indexing: "KCI",
    year: 2024,
    summary_en: "Objective evidence to distinguish between modern casting brassware and traditional forged brassware through metallographic characteristics analysis.",
    summary_ko: "현대 유기의 제작기법에 따른 금속학적 특성 확인을 통한 현대식 주조유기와 전통 방짜유기 구별 근거 마련.",
    link: "http://journal.conservation.or.kr/journal/article.php?code=94503&cID=",
    doi: "10.12654/JCS.2024.40.4.02",
    keywords: ["Modern Brassware", "Casting Brassware", "Forged Brassware", "Bangjja Brassware", "Production Process"],
    keywords_ko: ["현대 유기", "방짜유기", "주조유기", "제작기법", "미세조직"]
  },
  {
    id: 29,
    type: "publication",
    title_en: "Scientific Analysis and Provenance Study of Bronze Artifacts Excavated from Dongchon Site in Sunchang, Jeollabuk‐do, Korea",
    title_ko: "전북 순창 동촌유적 출토 청동기의 원료 산지연구",
    authors: "Go Woon Bae, Kwang Yong Chung",
    authors_ko: "배고운, 정광용",
    journal: "Journal of Conservation Science",
    journal_ko: "보존과학회지",
    journal_abbr: "J. Conserv. Sci.",
    indexing: "KCI",
    year: 2016,
    summary_en: "Lead isotope ratio analysis of bronze artifacts excavated from Dongchon Site to determine provenance of raw materials.",
    summary_ko: "순창 동촌유적 출토 청동기의 납동위원소비 분석을 통한 원료 산지 연구.",
    link: "http://journal.conservation.or.kr/journal/article.php?code=51722&cID=",
    doi: "",
    keywords: ["Dongchon site in Sunchang", "Early iron age", "Bronze artifact", "Lead isotope ratio", "Provenance"],
    keywords_ko: ["순창 동촌유적", "초기 철기시대", "청동기", "납동위원소비", "산지 연구"]
  },
  {
    id: 30,
    type: "publication",
    title_en: "Basic Characteristics and Application of Modern Dancheong Pigment Jangdanyuksaek (Incarnadine)",
    title_ko: "현대 단청용 장단육색의 기본 특성 및 사용 기준 연구",
    authors: "Eun Ji Kim, Kwang Yong Chung",
    authors_ko: "김은지, 정광용",
    journal: "Journal of Conservation Science",
    journal_ko: "보존과학회지",
    journal_abbr: "J. Conserv. Sci.",
    indexing: "KCI",
    year: 2015,
    summary_en: "Analysis of physical characteristics and proper mixing ratios of modern Dancheong pigments through accelerated weathering and UV degradation tests.",
    summary_ko: "현대 단청안료의 물리적 특성 분석 및 가속열화시험을 통한 적정 혼합비율 연구.",
    link: "http://journal.conservation.or.kr/journal/article.php?code=51709&cID=",
    doi: "",
    keywords: ["Modern Dancheong", "Jangdanyuksaek (Incarnadine) Pigment", "Basic Characteristics", "Application"],
    keywords_ko: ["현대 단청", "장단육색", "기본 특성", "사용 기준"]
  },
  {
    id: 31,
    type: "publication",
    title_en: "A Study on Influence of Firing Temperature and Temper Content on the Physical Properties of Earthenware Coffin",
    title_ko: "소성온도와 혼입물 함량이 옹관의 물성에 주는 영향에 관한 연구",
    authors: "Kyu Been Kim, Kwang Yong Chung",
    authors_ko: "김규빈, 정광용",
    journal: "Journal of Conservation Science",
    journal_ko: "보존과학회지",
    journal_abbr: "J. Conserv. Sci.",
    indexing: "KCI",
    year: 2014,
    summary_en: "Study on the role of temper and physical properties of earthenware coffin according to firing temperature and clay state modification.",
    summary_ko: "소성온도와 점토 상태 변화에 따른 혼입물의 역할과 옹관의 물리적 특성 연구.",
    link: "http://journal.conservation.or.kr/journal/article.php?code=51660&cID=",
    doi: "",
    keywords: ["earthenware coffin", "source soil", "temper", "reduction firing", "specific gravity", "absorption factor", "XRF", "XRD", "volume", "expansion"],
    keywords_ko: ["옹관", "태토", "혼입물", "환원소성", "비중", "흡수율", "XRF", "XRD", "부피", "팽창"]
  },
  {
    id: 32,
    type: "publication",
    title_en: "Applicability for Authenticity of Bronze Artefacts using Scientific Analyses",
    title_ko: "과학적 분석을 통한 전세품 청동기의 진위판별 적용 가능성 연구",
    authors: "Misol Do, Kwang Yong Chung",
    authors_ko: "도미솔, 정광용",
    journal: "Journal of Conservation Science",
    journal_ko: "보존과학회지",
    journal_abbr: "J. Conserv. Sci.",
    indexing: "KCI",
    year: 2013,
    summary_en: "Study on applicability for authenticity determination of bronze artifacts through microstructure, chemical component analysis, and corrosion research.",
    summary_ko: "미세조직, 화학성분 분석 및 부식 연구를 통한 전세품 청동기의 진위판별 적용 가능성 연구.",
    link: "http://journal.conservation.or.kr/journal/article.php?code=51618&cID=",
    doi: "",
    keywords: ["Bronze artefacts", "Chemical component", "Microstructure", "Cross-checking", "Applicability for authenticity"],
    keywords_ko: ["청동기", "화학성분", "미세조직", "교차검증", "진위판별"]
  },
  {
    id: 33,
    type: "publication",
    title_en: "The Reuse Methods of Traditional Metal Hardware for Reinforcing the Structure of Korea Traditional Wooden Building",
    title_ko: "목조 건축문화재에 사용된 구조⋅보강용 전통 철물의 재사용 방안 연구",
    authors: "Sang A Min, Sang Ok Lee, Kwang Yong Chung",
    authors_ko: "민상아, 이상옥, 정광용",
    journal: "Journal of Conservation Science",
    journal_ko: "보존과학회지",
    journal_abbr: "J. Conserv. Sci.",
    indexing: "KCI",
    year: 2022,
    summary_en: "Study on reuse methods of traditional metal hardware for structural reinforcement of wooden architectural heritage through shape processing and metallurgical analysis.",
    summary_ko: "목조 건축문화재의 구조 보강용 전통 철물의 형태 가공 및 금속학적 분석을 통한 재사용 방안 연구.",
    link: "http://journal.conservation.or.kr/journal/article.php?code=94174&cID=",
    doi: "https://doi.org/10.12654/JCS.2022.38.5.08",
    keywords: ["Traditional Metal Hardware", "Shape Processing", "Heat Treatment", "Reuse", "Metal"],
    keywords_ko: ["전통 철물", "형태 가공", "열처리", "재사용", "금속"]
  },
  {
    id: 34,
    type: "publication",
    title_en: "A Study on the Stability of Using Alkali Solution Desalination on Gilt Plated Silver-Iron Artifacts",
    title_ko: "알칼리 수용액을 이용한 출토 철지금은장관정의 탈염처리 적용성 평가",
    authors: "Jun Hyeon Park, Go Woon Bae, Kwang Yong Chung",
    authors_ko: "박준현, 배고운, 정광용",
    journal: "Journal of Conservation Science",
    journal_ko: "보존과학회지",
    journal_abbr: "J. Conserv. Sci.",
    indexing: "KCI",
    year: 2021,
    summary_en: "Evaluation of desalination stability for gilt plated silver-iron nails using NaOH and Sodium Sesquicarbonate solutions.",
    summary_ko: "철지금은장관정에 대한 NaOH법과 Sodium Sesquicarbonate법을 이용한 탈염처리의 안정성 평가.",
    link: "http://journal.conservation.or.kr/journal/article.php?code=94311&cID=",
    doi: "https://doi.org/10.12654/JCS.2021.37.2.09",
    keywords: ["Gilt Plated Silver-Iron Nails", "NaOH", "Sodium Sesquicarbonate", "Desalination"],
    keywords_ko: ["철지금은장관정", "NaOH법", "Sodium Sesquicarbonate법", "탈염처리"]
  },
  {
    id: 35,
    type: "publication",
    title_en: "Provenance Analysis of Horse-shaped Bronze Buckles Excavated from Site of Songjeol-dong, Cheongju",
    title_ko: "납동위원소비 분석을 활용한 청주 송절동유적 출토 마형대구의 원료산지 고찰",
    authors: "Go Woon Bae, Sang Ok Lee, Kwang Yong Chung, Seoung Chul Shin",
    authors_ko: "배고운, 이상옥, 정광용, 신승철",
    journal: "Journal of Conservation Science",
    journal_ko: "보존과학회지",
    journal_abbr: "J. Conserv. Sci.",
    indexing: "KCI",
    year: 2019,
    summary_en: "Provenance study of horse-shaped bronze buckles through lead isotope ratio analysis to identify raw material origins and regional characteristics.",
    summary_ko: "납동위원소비 분석을 통한 청주 송절동유적 출토 마형대구의 원료산지 및 지역적 특성 연구.",
    link: "http://journal.conservation.or.kr/journal/article.php?code=94068&cID=",
    doi: "https://doi.org/10.12654/JCS.2019.35.3.03",
    keywords: ["Songjeol-dong Site in Cheongju", "Horse-shaped Bronze Buckle", "Bronze Artifacts", "Lead Isotope Ratio", "Provenance"],
    keywords_ko: ["청주 송절동유적", "마형대구", "청동기", "납동위원소비", "원료산지"]
  },
  {
    id: 36,
    type: "publication",
    title_en: "Analysis of Material Characteristics for Blackwares at Excavated from the Bonggok Kiln Site of Jinan-gun",
    title_ko: "진안 봉곡도요지 출토 흑유자기의 재료학적 특성 분석",
    authors: "Minsoo Park, Kwang Yong Chung",
    authors_ko: "박민수, 정광용",
    journal: "Journal of Conservation Science",
    journal_ko: "보존과학회지",
    journal_abbr: "J. Conserv. Sci.",
    indexing: "KCI",
    year: 2016,
    summary_en: "Material characteristics analysis of blackwares through scientific analyses and reproduction experiments to identify glaze composition and iron oxide crystals.",
    summary_ko: "과학적 분석 및 재현실험을 통한 흑유자기의 유약 성분 및 산화철 결정 구조 규명 연구.",
    link: "http://journal.conservation.or.kr/journal/article.php?code=51759&cID=",
    doi: "",
    keywords: ["Bonggok Kiln Site", "Blackware", "Glaze", "Red Ocher", "Iron Oxide"],
    keywords_ko: ["봉곡도요지", "흑유자기", "유약", "석간주", "산화철"]
  },
  {
    id: 37,
    type: "publication",
    title_en: "Application of Fiber Laser for Removing the Coating Layer from Painted Sculptures",
    title_ko: "Fiber 레이저를 활용한 페인팅 조각작품 도장층 제거 적용성 연구",
    authors: "Sang Hoon Lee, Dae Geon Beom, Song Yi Song, Kwang Yong Chung",
    authors_ko: "이상훈, 범대건, 송송이, 정광용",
    journal: "Journal of Conservation Science",
    journal_ko: "보존과학회지",
    journal_abbr: "J. Conserv. Sci.",
    indexing: "KCI",
    year: 2024,
    summary_en: "Study on the applicability of fiber laser cleaning for removing coating layers from painted sculptures through optimization of process parameters.",
    summary_ko: "페인팅 조각작품의 도장층 제거를 위한 Fiber 레이저 클리닝 공정 변수 최적화 및 적용성 연구.",
    link: "http://journal.conservation.or.kr/journal/article.php?code=94494&cID=",
    doi: "https://doi.org/10.12654/JCS.2024.40.4.11",
    keywords: ["Outdoor painted sculptures", "Laser cleaning", "Fiber laser"],
    keywords_ko: ["페인트 조각", "레이저 클리닝", "Fiber 레이저"]
  },
  {
    id: 38,
    type: "publication",
    title_en: "Conservation Measures for Media Art According to Technological Changes: Color Reproducibility Comparison for Conservation of Artwork Using Video Display",
    title_ko: "기술 변화에 따른 미디어 아트 보존 방안: 디스플레이 장치를 사용한 미술품 보존을 위한 색 재현성 비교",
    authors: "Geon Min Bae, Kwang Yong Chung",
    authors_ko: "배건민, 정광용",
    journal: "Journal of Conservation Science",
    journal_ko: "보존과학회지",
    journal_abbr: "J. Conserv. Sci.",
    indexing: "KCI",
    year: 2024,
    summary_en: "Comparative study on color reproducibility between CRT and LCD displays for media art conservation through spectral distribution and chromatic stability analysis.",
    summary_ko: "미디어 아트 보존을 위한 CRT와 LCD 디스플레이의 분광 분포 및 색도 안정성 비교 연구.",
    link: "http://journal.conservation.or.kr/journal/article.php?code=94421&cID=",
    doi: "https://doi.org/10.12654/JCS.2024.40.2.07",
    keywords: ["Media art", "Video art", "Display", "Conservation method", "Conservation case"],
    keywords_ko: ["미디어 아트", "비디오 아트", "디스플레이", "보존 방법", "보존 사례"]
  },
  {
    id: 39,
    type: "publication",
    title_en: "A Study on Evaluation Methods of Conserving Painted Sculpture",
    title_ko: "페인팅 조각 작품의 보존 평가방법 연구",
    authors: "Dae Geon Beom, Song Yi Song, Kwang Yong Chung",
    authors_ko: "범대건, 송송이, 정광용",
    journal: "Journal of Conservation Science",
    journal_ko: "보존과학회지",
    journal_abbr: "J. Conserv. Sci.",
    indexing: "KCI",
    year: 2023,
    summary_en: "Development of condition report and evaluation methods for outdoor painted sculptures through comparative analysis of original and alternative paints.",
    summary_ko: "야외 페인팅 조각 작품의 원본 페인트 및 대체 페인트 물성 비교를 통한 상태조사표 개발 및 평가방법 연구.",
    link: "http://journal.conservation.or.kr/journal/article.php?code=94225&cID=",
    doi: "https://doi.org/10.12654/JCS.2023.39.2.02",
    keywords: ["Outdoor Painted Sculpture", "Public Artworks Conservation", "Condition report"],
    keywords_ko: ["야외 페인팅 조각", "공공미술품 보존", "재도장 평가 상태조사표"]
  },
  {
    id: 40,
    type: "publication",
    title_en: "Characteristics of Corrosion Layers and Corrosion Products by Lead Contents of Excavated Bronze Artifacts",
    title_ko: "출토 청동유물의 납 함량에 따른 부식층 및 부식생성물 특성 분석",
    authors: "Gyeong Seo Choi, Go Woon Bae, Sang Ok Lee, Kwang Yong Chung",
    authors_ko: "최경서, 배고운, 이상옥, 정광용",
    journal: "Journal of Conservation Science",
    journal_ko: "보존과학회지",
    journal_abbr: "J. Conserv. Sci.",
    indexing: "KCI",
    year: 2022,
    summary_en: "Comprehensive analysis of corrosion layer structures and products in excavated bronze artifacts with different lead contents.",
    summary_ko: "납 함량이 다른 출토 청동유물의 부식층 구조 및 부식생성물 종합 분석 연구.",
    link: "http://journal.conservation.or.kr/journal/article.php?code=94169&cID=",
    doi: "https://doi.org/10.12654/JCS.2022.38.5.03",
    keywords: ["Excavated bronze artifacts", "Leaded bronze", "Lead", "Corrosion characteristics"],
    keywords_ko: ["청동유물", "납청동", "납", "부식특성"]
  },
  {
    id: 41,
    type: "publication",
    title_en: "Conservation State of Mural Paintings of Royal Tombs in Neungsan-ri, Korea",
    title_ko: "능산리고분군 동하총 벽화 보존상태 진단",
    authors: "Sang Ok Lee, Go Woon Bae, Hun Namgung, Do Hyeon Nam, Yoon Gwan Choi, Kwang Yong Chung",
    authors_ko: "이상옥, 배고운, 남궁훈, 남도현, 최윤관, 정광용",
    journal: "Journal of Conservation Science",
    journal_ko: "보존과학회지",
    journal_abbr: "J. Conserv. Sci.",
    indexing: "KCI",
    year: 2018,
    summary_en: "Evaluation of conservation environment and state diagnosis of mural paintings in Neungsan-ri Royal Tombs through two-year temperature and humidity monitoring and remaining pigment mapping.",
    summary_ko: "2년간 온습도 모니터링 및 잔존안료 지도화를 통한 능산리고분군 동하총 벽화의 보존환경 평가 및 보존상태 진단 연구.",
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002396349",
    doi: "10.12654/JCS.2018.34.5.02",
    keywords: ["Royal tombs in Neungsan-ri", "Conservation environment", "Conservation state", "Characteristics of condensation", "Mapping the remaining pigments"],
    keywords_ko: ["능산리고분군 동하총 벽화", "보존환경", "보존상태", "결로 발생원인", "잔존안료 지도화"]
  },
  {
    id: 42,
    type: "publication",
    title_en: "Manufacturing Techniques and Provenance of Gilt-bronze Seated Bhaisajyaguru (Medicine Buddha) Statue of Cheongyang Janggoksa Temple, Korea",
    title_ko: "보물 제337호 청양 장곡사 금동약사여래좌상의 제작기법 및 납 원료 산지연구",
    authors: "Go Woon Bae, Sang Ok Lee, , Dae Geon Beom, Kwang Yong Chung",
    authors_ko: "배고운, 이상옥, 범대건, 정광용",
    journal: "Journal of Conservation Science",
    journal_ko: "보존과학회지",
    journal_abbr: "J. Conserv. Sci.",
    indexing: "KCI",
    year: 2018,
    summary_en: "Investigation of manufacturing technique system and lead provenance of Gilt-bronze Seated Bhaisajyaguru statue through compositional analysis and lead isotope ratio analysis.",
    summary_ko: "청양 장곡사 금동약사여래좌상의 성분분석 및 납동위원소비 분석을 통한 제작기술체계 및 납 원료산지 규명 연구.",
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002316477",
    doi: "10.12654/JCS.2018.34.1.07",
    keywords: ["Goryeo period", "Bronze buddha", "Gilt-bronze buddha", "Manufacturing technique", "Provenance"],
    keywords_ko: ["고려시대", "청동불상", "금동불상", "제작기법", "산지추정"]
  },
  {
    id: 43,
    type: "publication",
    title_en: "An Experimental Study on the Firing Performance and Property of Lime Mortar for Building in Joseon Dynasty",
    title_ko: "조선시대 조적용 석회의 소성 성능과 모르타르의 물성에 대한 실험 연구",
    authors: "Sang Ok Lee, Kwang Yong Chung",
    authors_ko: "이상옥, 정광용",
    journal: "Journal of Architectural History",
    journal_ko: "건축역사연구",
    journal_abbr: "J. Archit. Hist.",
    indexing: "KCI",
    year: 2016,
    summary_en: "Experimental study on firing method of limestone and physical-chemical properties of lime mortars in Joseon Dynasty to reproduce traditional lime mortars.",
    summary_ko: "조선시대 전통 석회 모르타르 재현을 위한 석회석 소성 방법 및 석회 모르타르의 물리화학적 특성에 대한 실험 연구.",
    link: "https://db.koreascholar.com/Article/Detail/348904",
    doi: "",
    keywords: ["Joseon Dynasty", "Traditional Lime", "Low grade Limestone", "Firing", "Natural Hydraulic Lime"],
    keywords_ko: ["조선시대", "전통 석회", "저품위 석회석", "소성", "수경성 석회"]
  },
  {
    id: 44,
    type: "publication",
    title_en: "Factor Analysis of Deterioration in Namhansanseong Yeojang",
    title_ko: "남한산성 여장 손상원인 분석",
    authors: "Kwang Yong Chung, Sang Ok Lee, Hee Jae Yang",
    authors_ko: "정광용, 이상옥, 양희제",
    journal: "Journal of Architectural History",
    journal_ko: "건축역사연구",
    journal_abbr: "J. Archit. Hist.",
    indexing: "KCI",
    year: 2016,
    summary_en: "Non-destructive evaluation and factor analysis of damage in Namhansanseong Yeojang by measuring directional microclimate to suggest conservation management calendar.",
    summary_ko: "남한산성 여장의 비파괴 평가 및 방향별 미기상환경 측정을 통한 손상요인 분석 및 보존관리 달력 제안 연구.",
    link: "https://db.koreascholar.com/Article/Detail/347243",
    doi: "",
    keywords: ["Namhansanseong", "Yeojang", "Deterioration factors", "Microclimate", "Conservation management"],
    keywords_ko: ["남한산성", "여장", "손상원인", "미기상환경", "보존관리방안"]
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
    title_en: "Cultural Heritage Administration Award",
    title_ko: "문화재청장상",
    recipient: "National Heritage Conservation Research Institute",
    recipient_ko: "한국전통문화대학교 보존과학연구소 목원재료연구실",
    organization: "8th 3D Printing BIZCON Competition",
    organization_ko: "제8회 3D프린팅 BIZCON 경진대회",
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
    id: 12,
    type: "award",
    title_en: "Best Presentation Award",
    title_ko: "우수구두발표상",
    recipient: "Gyu Ri Choi, Seo Hyeon Lee, Yong Jae Jeong, Sang Ok Lee",
    recipient_ko: "최규리, 이서현, 정용재, 이상옥",
    organization: "The 59th Spring Conference of Korean Society of Conservation Science for Cultural Heritage",
    organization_ko: "(사)한국문화재보존과학회 제59회 춘계학술대회",
    year: 2024,
    summary_en: "Award for outstanding oral presentation on analysis of preservation environment for ancient tomb murals according to climate change and underground temperature.",
    summary_ko: "기후변화와 지중온도에 따른 고분 벽화의 보존환경 분석 연구 발표로 우수구두발표상 수상.",
    link: "",
    award_image: "assets/awards/oral-presentation-2024.jpg",
    category: "Conference Presentation",
    category_ko: "학술발표",
    keywords: ["Oral Presentation", "Climate Change", "Mural Conservation"],
    keywords_ko: ["구두발표", "기후변화", "벽화 보존"]
  },
  {
    id: 13,
    type: "award",
    title_en: "Best Poster Presentation Award",
    title_ko: "우수포스터발표상",
    recipient: "Chae Rin Kim, Gyu Ri Choi, Seo Hyeon Lee, So Yeon Choi, Sang Ok Lee",
    recipient_ko: "김채린, 최규리, 이서현, 최소연, 이상옥",
    organization: "The 59th Spring Conference of Korean Society of Conservation Science for Cultural Heritage",
    organization_ko: "(사)한국문화재보존과학회 제59회 춘계학술대회",
    year: 2024,
    summary_en: "Award for outstanding poster presentation on research of manufacturing techniques for Buddhist sculptures at Cheongdo Deoksa Temple.",
    summary_ko: "청도 덕사 영산전과 명부전 소재 불조각상의 제작기법 연구 포스터 발표로 우수포스터발표상 수상.",
    link: "",
    award_image: "assets/awards/poster-presentation-2024.jpg",
    category: "Conference Presentation",
    category_ko: "학술발표",
    keywords: ["Poster Presentation", "Buddhist Sculpture", "Manufacturing Technique"],
    keywords_ko: ["포스터발표", "불조각상", "제작기법"]
  },
  {
    id: 14,
    type: "award",
    title_en: "Best Presentation Award",
    title_ko: "최우수발표상",
    recipient: "Min Je Kim",
    recipient_ko: "김민제",
    organization: "The 7th Postgraduate Forum of China and Korea on Cultural Heritage Conservation",
    organization_ko: "한중 문화유산보존 대학원생 포럼 제7회",
    year: 2024,
    summary_en: "Best presentation award for research on applicability and characteristic evaluation of Metal PLA 3D printing method for metal cultural heritage restoration.",
    summary_ko: "금속 PLA 3D 프린팅 기법을 활용한 금속 문화유산 복원의 적용성 및 특성 평가 연구로 최우수발표상 수상.",
    link: "",
    award_image: "assets/awards/china-korea-forum-2024.jpg",
    category: "International Conference",
    category_ko: "국제학술대회",
    keywords: ["Best Presentation", "3D Printing", "Metal Conservation", "International"],
    keywords_ko: ["최우수발표", "3D 프린팅", "금속 보존", "국제학술"]
  },
  {
    id: 15,
    type: "award",
    title_en: "Excellence in Oral Presentation Award (Excellence Award)",
    title_ko: "우수구두발표상 (우수상)",
    recipient: "Gyu Ri Choi, Sang Ok Lee",
    recipient_ko: "최규리, 이상옥",
    organization: "Korean Society of Conservation Science for Cultural Heritage - 58th Spring Conference",
    organization_ko: "(사)한국문화재보존과학회 제58회 춘계학술대회",
    year: 2023,
    summary_en: "Excellence Award in oral presentation for research on basic investigation and conservation management of Catholic cultural heritage.",
    summary_ko: "천주교 동산문화유산 기초조사 및 보존관리 방안 연구로 우수구두발표상 수상.",
    link: "",
    award_image: "assets/awards/oral-excellence-2023.jpg",
    category: "Academic Conference",
    category_ko: "학술대회",
    keywords: ["Oral Presentation", "Catholic Heritage", "Conservation", "Excellence Award"],
    keywords_ko: ["구두발표", "천주교문화유산", "보존관리", "우수상"]
  },
  {
    id: 16,
    type: "award",
    title_en: "Excellence in Poster Award",
    title_ko: "우수포스터상",
    recipient: "Jeong Yeon Kim",
    recipient_ko: "김정연",
    organization: "The 7th Postgraduate Forum of China and Korea on Cultural Heritage Conservation",
    organization_ko: "한중 문화유산보존 대학원생 포럼 제7회",
    year: 2024,
    summary_en: "Excellence in Poster Award for research on weathering phenomena assessment in Laos laterite with emphasis on salt spray testing methodology.",
    summary_ko: "라오스 라테라이트의 풍화 현상 평가 및 염분 분무 시험 방법론 연구로 우수포스터상 수상.",
    link: "",
    award_image: "assets/awards/poster-excellence-2024.jpg",
    category: "International Conference",
    category_ko: "국제학술대회",
    keywords: ["Poster", "Laterite", "Weathering", "Salt Spray Testing"],
    keywords_ko: ["포스터", "라테라이트", "풍화", "염분시험"]
  },
  {
    id: 17,
    type: "award",
    title_en: "Best Poster Award",
    title_ko: "우수포스터상",
    recipient: "Gyu Ri Choi",
    recipient_ko: "최규리",
    organization: "The 7th Postgraduate Forum of China and Korea on Cultural Heritage Conservation",
    organization_ko: "한중 문화유산보존 대학원생 포럼 제7회",
    year: 2024,
    summary_en: "Best Poster Award for research on analysis of conservation environment of mural painting under climate factors.",
    summary_ko: "기후 요인에 따른 벽화 보존 환경 분석 연구로 우수포스터상 수상.",
    link: "",
    award_image: "assets/awards/poster-best-2024.jpg",
    category: "International Conference",
    category_ko: "국제학술대회",
    keywords: ["Poster", "Mural Painting", "Climate", "Conservation Environment"],
    keywords_ko: ["포스터", "벽화", "기후", "보존환경"]
  },
  {
    id: 18,
    type: "award",
    title_en: "Excellence in Oral Presentation Award",
    title_ko: "우수구두발표상",
    recipient: "Min Je Kim, Sang Ok Lee, Kwang Yong Jung",
    recipient_ko: "김민제, 이상옥, 정광용",
    organization: "Korean Society of Conservation Science for Cultural Heritage - 56th Fall Conference",
    organization_ko: "(사)한국문화재보존과학회 제56회 추계학술대회",
    year: 2022,
    summary_en: "Excellence in oral presentation award for research on feasibility study of 3D printing restoration using Cu-PLA for metal cultural heritage.",
    summary_ko: "Cu-PLA를 활용한 금속문화유산 3D 프린팅 복원 가능성 연구로 우수구두발표상 수상.",
    link: "",
    award_image: "assets/awards/oral-excellence-2022.jpg",
    category: "Academic Conference",
    category_ko: "학술대회",
    keywords: ["Oral Presentation", "3D Printing", "Cu-PLA", "Metal Conservation"],
    keywords_ko: ["구두발표", "3D 프린팅", "Cu-PLA", "금속보존"]
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
  const currentFilter = document.querySelector('.achievement-filter.active')?.getAttribute('data-filter') || 'publication';
  updateActiveFilterCount(currentFilter);
}

// Update achievement function
function updateAchievement(id, achievementData) {
  const index = achievements.findIndex(a => a.id === id);
  if (index !== -1) {
    achievements[index] = { ...achievements[index], ...achievementData };
    renderAchievements();
    
    // Update counts after updating
    const currentFilter = document.querySelector('.achievement-filter.active')?.getAttribute('data-filter') || 'publication';
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
    const currentFilter = document.querySelector('.achievement-filter.active')?.getAttribute('data-filter') || 'publication';
    updateActiveFilterCount(currentFilter);
  }
}

// Pagination variables
let currentPage = 1;
const itemsPerPage = 12;

// Get current language
function getCurrentLanguage() {
  // Check localStorage first, then button state
  const savedLang = localStorage.getItem('preferred-language');
  if (savedLang) {
    return savedLang;
  }
  // Default to Korean
  return document.getElementById('lang-ko') && document.getElementById('lang-ko').classList.contains('active') ? 'ko' : 'ko';
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
  
  switch (achievement.type) {
    case 'publication':
      const authors = lang === 'ko' ? (achievement.authors_ko || achievement.authors) : achievement.authors;
      const journal = lang === 'ko' ? (achievement.journal_ko || achievement.journal) : achievement.journal;
      metaInfo = `
        <div class="meta-row">${authors}</div>
        <div class="meta-row achievement-journal">${journal}</div>
        <div class="meta-row achievement-year">${achievement.year}</div>
      `;
      break;
    case 'conference':
      const event = lang === 'ko' ? (achievement.event_ko || achievement.event) : achievement.event;
      metaInfo = `
        <span>${event}</span>
        <span class="achievement-year">${achievement.year}</span>
      `;
      break;
    case 'award':
      const organization = lang === 'ko' ? (achievement.organization_ko || achievement.organization) : achievement.organization;
      metaInfo = `
        <span>${organization}</span>
        <span class="achievement-year">${achievement.year}</span>
      `;
      break;
    case 'patent':
      const patent_office = lang === 'ko' ? (achievement.patent_office_ko || achievement.patent_office) : achievement.patent_office;
      metaInfo = `
        <span>${patent_office}</span>
        <span class="achievement-year">${achievement.year}</span>
      `;
      break;
  }

  // Special layout for awards with images
  if (achievement.type === 'award' && achievement.award_image) {
    const title = lang === 'ko' ? achievement.title_ko : achievement.title_en;
    const enlargeText = lang === 'ko' ? '클릭하여 확대' : 'Click to enlarge';
    return `
      <li data-type="${achievement.type}" data-id="${achievement.id}" class="animate-on-scroll award-with-image">
        <div class="achievement-icon">
          ${getTypeIcon(achievement.type)}
        </div>
        <div class="achievement-title">
          <b>${title}</b>
        </div>
        <div class="achievement-meta">
          ${metaInfo}
        </div>
        <div class="award-image-preview" onclick="openAwardModal('${achievement.award_image}', '${title.replace(/'/g, "\\'")}')">
          <img src="${achievement.award_image}" alt="${title}" loading="lazy">
          <div class="award-image-overlay">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
            <span>${enlargeText}</span>
          </div>
        </div>
      </li>
    `;
  }

  // Default layout for other types
  const title = lang === 'ko' ? achievement.title_ko : achievement.title_en;
  const summary = lang === 'ko' ? achievement.summary_ko : achievement.summary_en;
  const linkText = lang === 'ko' ? '세부 정보 보기' : 'View Details';
  
  // Create indexing badge for publications
  let indexingBadge = '';
  if (achievement.type === 'publication' && achievement.indexing) {
    indexingBadge = `<span class="indexing-badge indexing-${achievement.indexing.toLowerCase()}">${achievement.indexing}</span>`;
  }
  
  return `
    <li data-type="${achievement.type}" data-id="${achievement.id}" class="animate-on-scroll">
      <div class="achievement-icon">
        ${getTypeIcon(achievement.type)}
      </div>
      <div class="achievement-title">
        <b>${title}</b>
      </div>
      <div class="achievement-meta">
        ${metaInfo}
      </div>
      <div class="achievement-summary">
        ${summary}
      </div>
      <div class="achievement-footer">
        ${indexingBadge}
        ${achievement.link ? `
          <a class="achievement-link" href="${achievement.link}" target="_blank">
            ${linkText}
          </a>
        ` : ''}
      </div>
    </li>
  `;
}

// Filter achievements
function filterAchievements(type = 'all') {
  // Reset to first page when filter changes
  currentPage = 1;
  
  // Add or remove filtered class from body
  if (type === 'all') {
    document.body.classList.remove('filtered');
  } else {
    document.body.classList.add('filtered');
  }
  
  // Re-render achievements with pagination
  renderAchievements();
}

// Render all achievements
function renderAchievements() {
  const achievementsList = document.querySelector('.achievement-list');
  if (!achievementsList) return;

  const lang = getCurrentLanguage();
  const currentFilter = document.querySelector('.achievement-filter.active')?.getAttribute('data-filter') || 'publication';
  
  // Filter achievements based on current filter
  let filteredAchievements = achievements.filter(achievement => achievement.type === currentFilter);
  
  // Sort by year (newest first)
  filteredAchievements.sort((a, b) => b.year - a.year);
  
  // Calculate pagination
  const totalItems = filteredAchievements.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedAchievements = filteredAchievements.slice(startIndex, endIndex);
  
  // Render achievement cards
  achievementsList.innerHTML = paginatedAchievements.map(achievement => createAchievementCard(achievement, lang)).join('');
  
  // Render pagination controls
  renderPagination(totalPages, currentPage);
  
  // Update filter counts after rendering
  updateActiveFilterCount(currentFilter);
  
  // Re-initialize animations after rendering
  setTimeout(() => {
    initAnimations();
  }, 50);
}

// Render pagination controls
function renderPagination(totalPages, currentPage) {
  const paginationContainer = document.querySelector('.pagination-container');
  if (!paginationContainer) {
    // Create pagination container if it doesn't exist
    const achievementSection = document.querySelector('.achievements-section');
    if (achievementSection) {
      const container = document.createElement('div');
      container.className = 'pagination-container';
      achievementSection.appendChild(container);
      renderPaginationButtons(container, totalPages, currentPage);
    }
  } else {
    renderPaginationButtons(paginationContainer, totalPages, currentPage);
  }
}

// Render pagination buttons
function renderPaginationButtons(container, totalPages, currentPage) {
  if (totalPages <= 1) {
    container.innerHTML = '';
    return;
  }
  
  let buttonsHTML = '<div class="pagination-buttons">';
  
  // Previous button
  buttonsHTML += `
    <button class="pagination-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="changePage(${currentPage - 1})">
      <span class="lang lang-en">Previous</span>
      <span class="lang lang-ko" style="display:none;">이전</span>
    </button>
  `;
  
  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      buttonsHTML += `
        <button class="pagination-btn page-number ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">
          ${i}
        </button>
      `;
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      buttonsHTML += '<span class="pagination-ellipsis">...</span>';
    }
  }
  
  // Next button
  buttonsHTML += `
    <button class="pagination-btn" ${currentPage === totalPages ? 'disabled' : ''} onclick="changePage(${currentPage + 1})">
      <span class="lang lang-en">Next</span>
      <span class="lang lang-ko" style="display:none;">다음</span>
    </button>
  `;
  
  buttonsHTML += '</div>';
  container.innerHTML = buttonsHTML;
  
  // Apply current language to pagination buttons
  const currentLang = getCurrentLanguage();
  container.querySelectorAll('.lang').forEach(el => {
    if (el.classList.contains('lang-' + currentLang)) {
      el.style.display = '';
    } else {
      el.style.display = 'none';
    }
  });
}

// Change page function
function changePage(page) {
  currentPage = page;
  renderAchievements();
  
  // Scroll to filter buttons position (consistent home position for pagination)
  const filterContainer = document.querySelector('.achievements-filter-container');
  if (filterContainer) {
    const offset = 100; // Offset for fixed header
    const elementPosition = filterContainer.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
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
        renderAchievements();
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
          renderAchievements();
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

  // Render achievements from JS data
  renderAchievements();
  
  // Set initial filter based on URL parameter or default to 'publication'
  const initialFilter = urlFilter && ['publication', 'conference', 'patent', 'award'].includes(urlFilter) ? urlFilter : 'publication';
  
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

// Update filter button counts - show count only for active filter
function updateActiveFilterCount(activeFilterType) {
  // Count achievements from the entire achievements array, not just displayed items
  const counts = {
    publication: 0,
    conference: 0,
    patent: 0,
    award: 0
  };
  
  achievements.forEach(achievement => {
    const type = achievement.type;
    if (counts[type] !== undefined) {
      counts[type]++;
    }
  });
  
  // Update all filter buttons
  const achievementFilters = document.querySelectorAll('.achievement-filter');
  achievementFilters.forEach(button => {
    const filterType = button.getAttribute('data-filter');
    
    const langSpans = button.querySelectorAll('.lang');
    langSpans.forEach(span => {
      // Get original text without count
      const originalText = span.textContent.replace(/\s*\(\d+\)/, '');
      
      // Only show count if this filter is active
      if (filterType === activeFilterType) {
        const count = counts[filterType];
        if (count !== undefined) {
          span.textContent = `${originalText} (${count})`;
        }
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
window.changePage = changePage;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initAchievements();
  initBannerAnimation();
  setTimeout(() => {
    initAnimations();
  }, 100);
});