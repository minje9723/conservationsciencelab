// Achievements page specific functionality

// Achievements data
// Publications are sorted by year (newest first)
const achievements = [
  {
    id: 45,
    type: "publication",
    title_en: "Application of 3D Model-Based Quantification Techniques for Surface Contamination of Outdoor Stone Heritage",
    title_ko: "옥외석조문화유산 표면오염물의 3D 모델 기반 정량화 기법 적용 평가",
    authors: "Hae Jun Park, So Yeon Choi, Singi Kim, Hyeon Seok Cha, Won Ju Na, Sang Ok Lee",
    authors_ko: "박해준, 최소연, 김신기, 차현석, 나원주, 이상옥",
    journal: "Journal of Conservation Science",
    journal_ko: "보존과학회지",
    journal_abbr: "J. Conserv. Sci.",
    indexing: "KCI",
    year: 2026,
    volume: "42",
    issue: "1",
    pages: "98-110",
    summary_en: "Applied 3D model and texture color-based quantification techniques to evaluate surface contaminants on outdoor stone heritage and compared them with conventional 2D methods, demonstrating improved spatial precision and visibility.",
    summary_ko: "옥외 석조문화유산 표면오염물의 정량 평가를 위해 3D 모델과 텍스처 색상 기반 기법을 적용하고 기존 2D 방법과 비교하여, 오염부 검출 정밀도와 가시성 향상 가능성을 제시한 연구.",
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003324946",
    doi: "",
    image: "assets/achievements/outdoor stone heritage.jpg",
    keywords: ["Outdoor heritage", "Stone heritage", "Damage detection", "Three-dimensional model", "Quantification", "Surface contaminant"],
    keywords_ko: ["옥외문화유산", "석조문화유산", "손상평가", "3D", "정량화", "표면오염물"]
  },
  {
    id: 0,
    type: "publication",
    title_en: "Assessment of the Stability of Partial Paint Restoration on Damaged Areas for Outdoor Steel Sculptures",
    title_ko: "야외 철제 조각 작품의 페인트 손상부에 대한 부분복원 안정성 평가",
    authors: "So Yeon Choi, Sang Ok Lee",
    authors_ko: "최소연, 이상옥",
    journal: "Journal of Conservation Science",
    journal_ko: "보존과학회지",
    journal_abbr: "J. Conserv. Sci.",
    indexing: "KCI",
    year: 2025,
    volume: "41",
    issue: "3",
    pages: "561-570",
    summary_en: "This study proposes partial restoration methods for paint damage on outdoor steel sculptures and quantitatively evaluates their stability. Digital imaging techniques were used to objectively assess visual integration and preservation effectiveness.",
    summary_ko: "야외 철제 조각 작품의 페인트 손상에 대한 부분복원 방법을 제시하고 안정성을 정량적으로 평가한 연구. 디지털 이미징 기법을 활용하여 시각적 통합도와 보존 효과를 객관적으로 평가하였습니다.",
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003253065",
    doi: "",
    image: "assets/achievements/outdoor-steel-sculpture.jpg",
    keywords: ["Outdoor sculpture", "Steel sculpture", "Paint", "Coating material", "Partial restoration", "Conservation treatment"],
    keywords_ko: ["야외 조각 작품", "철제 조각 작품", "페인트", "도료", "부분복원", "보존처리"]
  },
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
  }
  // Patents - Temporarily Disabled (In Preparation)
  // {
  //   id: 8,
  //   type: "patent",
  //   title_en: "Method for 3D Printing-based Heritage Restoration",
  //   title_ko: "3D 프린팅 기반 문화재 복원 방법",
  //   inventors: "Sang Ok Lee, Min Je Kim",
  //   inventors_ko: "이상옥, 김민제",
  //   patent_office: "Korean Intellectual Property Office",
  //   patent_office_ko: "한국특허청",
  //   year: 2024,
  //   patent_number: "KR-2024-0123456",
  //   summary_en: "Patent for innovative 3D printing methodology specifically designed for cultural heritage restoration applications.",
  //   summary_ko: "문화재 복원 응용을 위해 특별히 설계된 혁신적인 3D 프린팅 방법론에 대한 특허.",
  //   link: "",
  //   keywords: ["3D Printing Patent", "Heritage Restoration", "Innovation"],
  //   keywords_ko: ["3D 프린팅 특허", "문화재 복원", "혁신"]
  // },
  // {
  //   id: 15,
  //   type: "patent",
  //   title_en: "Non-contact Surface Analysis System for Cultural Heritage",
  //   title_ko: "문화유산 비접촉 표면 분석 시스템",
  //   inventors: "Hyo Jeong Kim, Jeong Yeon Kim, Sang Ok Lee",
  //   inventors_ko: "김효정, 김정연, 이상옥",
  //   patent_office: "Korean Intellectual Property Office",
  //   patent_office_ko: "한국특허청",
  //   year: 2025,
  //   patent_number: "KR-2025-0234567",
  //   summary_en: "Patent for advanced non-contact analysis system enabling safe and detailed surface examination of fragile artifacts.",
  //   summary_ko: "취약한 유물의 안전하고 상세한 표면 검사를 가능하게 하는 첨단 비접촉 분석 시스템 특허.",
  //   link: "",
  //   keywords: ["Non-contact Analysis", "Surface Examination", "Heritage Technology"],
  //   keywords_ko: ["비접촉 분석", "표면 검사", "문화유산 기술"]
  // },
  // {
  //   id: 16,
  //   type: "patent",
  //   title_en: "Eco-friendly Conservation Material Composition",
  //   title_ko: "친환경 보존처리 재료 조성물",
  //   inventors: "Gyu Ri Choi, Jeong Eun Oh",
  //   inventors_ko: "최규리, 오정은",
  //   patent_office: "Korean Intellectual Property Office",
  //   patent_office_ko: "한국특허청",
  //   year: 2024,
  //   patent_number: "KR-2024-0345678",
  //   summary_en: "Patent for environmentally sustainable and reversible conservation material suitable for various heritage objects.",
  //   summary_ko: "다양한 문화유산 객체에 적합한 환경 친화적이고 가역적인 보존 재료 특허.",
  //   link: "",
  //   keywords: ["Eco-friendly Material", "Conservation Treatment", "Sustainability"],
  //   keywords_ko: ["친환경 재료", "보존처리", "지속가능성"]
  // },
  // {
  //   id: 17,
  //   type: "patent",
  //   title_en: "AI-based Heritage Deterioration Prediction System",
  //   title_ko: "AI 기반 문화유산 열화 예측 시스템",
  //   inventors: "So Yeon Choi, Min Je Kim",
  //   inventors_ko: "최소연, 김민제",
  //   patent_office: "Korean Intellectual Property Office",
  //   patent_office_ko: "한국특허청",
  //   year: 2025,
  //   patent_number: "KR-2025-0456789",
  //   summary_en: "Patent for artificial intelligence system that predicts and monitors deterioration patterns in cultural heritage objects.",
  //   summary_ko: "문화유산 객체의 열화 패턴을 예측하고 모니터링하는 인공지능 시스템 특허.",
  //   link: "",
  //   keywords: ["Artificial Intelligence", "Deterioration Prediction", "Monitoring System"],
  //   keywords_ko: ["인공지능", "열화 예측", "모니터링 시스템"]
  // }
];

const newConferenceAchievements = [
  {
    id: 46,
    type: "conference",
    title_en: "Current Status of the Capacity-Building Project for Sustainable Cultural Heritage Tourism Development in Luxor, Egypt",
    title_ko: "이집트 룩소르 지속가능한 문화유산 관광자원개발 역량강화 사업 현황",
    authors: "Jeong Hye Sun, Sang Ok Lee, Han Min Soo",
    authors_ko: "정선혜, 이상옥, 한민수",
    event: "The 61st Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화유산보존과학회 제61회 춘계학술대회",
    year: 2025,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Presentation on the current status of a capacity-building project for sustainable cultural heritage tourism development in Luxor, Egypt.",
    summary_ko: "이집트 룩소르의 지속가능한 문화유산 관광자원개발 역량강화 사업 현황에 대한 발표.",
    link: "",
    keywords: ["Luxor", "Cultural heritage tourism", "Capacity building", "Sustainable development"],
    keywords_ko: ["룩소르", "문화유산 관광", "역량강화", "지속가능한 개발"]
  },
  {
    id: 47,
    type: "conference",
    title_en: "Sintering and Firing Characteristics of Traditional Pheobae Production Techniques",
    title_ko: "전통 패회(貝灰) 제작기술의 소화 및 소성 특성",
    authors: "Hye Yeni Heo, Gyu Ri Choi, Singi Kim, Hyo Jeong Kim, Sang Ok Lee",
    authors_ko: "허예니, 최규리, 김신기, 김효정, 이상옥",
    event: "The 61st Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화유산보존과학회 제61회 춘계학술대회",
    year: 2025,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Presentation on the slaking and firing characteristics of traditional pheobae production techniques.",
    summary_ko: "전통 패회 제작기술의 소화 및 소성 특성에 대한 발표.",
    link: "",
    keywords: ["Traditional lime", "Pheobae", "Slaking", "Firing"],
    keywords_ko: ["전통 회재", "패회", "소화", "소성"]
  },
  {
    id: 48,
    type: "conference",
    title_en: "A Study on the Prevention of Diffuse Reflection for 3D Scanning of Glossy Artifacts",
    title_ko: "광택질 유물의 3D 스캔을 위한 난반사 방지방안 연구",
    authors: "Hyo Jeong Kim, Jeong Eun Oh, Bae Min Jun, Sang Ok Lee",
    authors_ko: "김효정, 오정은, 배민준, 이상옥",
    event: "The 61st Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화유산보존과학회 제61회 춘계학술대회",
    year: 2025,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Presentation on methods to reduce diffuse reflection during 3D scanning of glossy artifacts.",
    summary_ko: "광택질 유물의 3D 스캔을 위한 난반사 방지방안에 대한 발표.",
    link: "",
    keywords: ["Glossy artifacts", "3D scanning", "Diffuse reflection", "Surface capture"],
    keywords_ko: ["광택질 유물", "3D 스캔", "난반사", "표면 취득"]
  },
  {
    id: 49,
    type: "conference",
    title_en: "Investigation and Analysis of the Conservation State of the Wooden Amitabha Triad at Wondangam Hermitage, Haeinsa, Hapcheon",
    title_ko: "합천 해인사 원당암 목조아미타여래삼존상의 보존상태 조사 및 분석",
    authors: "Kim Chae Rin, Seo Eun Gyeong, Min Je Kim, Jang Jong Min, Oh Se Jong, Kim Jeong Rak, Sang Ok Lee",
    authors_ko: "김채린, 서은경, 김민제, 장종민, 오세종, 김정락, 이상옥",
    event: "The 61st Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화유산보존과학회 제61회 춘계학술대회",
    year: 2025,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Poster presentation on the conservation state survey and analysis of the wooden Amitabha triad at Wondangam Hermitage, Haeinsa.",
    summary_ko: "합천 해인사 원당암 목조아미타여래삼존상의 보존상태 조사 및 분석에 대한 포스터 발표.",
    link: "",
    keywords: ["Wooden sculpture", "Conservation state", "Haeinsa", "Poster presentation"],
    keywords_ko: ["목조상", "보존상태", "해인사", "포스터발표"]
  },
  {
    id: 50,
    type: "conference",
    title_en: "Conservation State and Painting Pigment Analysis of Chilseongdo at Cheongryongsa Temple and Palgwangdo at Anyangam Hermitage, Seoul",
    title_ko: "서울 청룡사 칠성도와 안양암 팔상도의 보존상태 및 채색안료 분석",
    authors: "So Yeon Choi, Min Je Kim, Hye Yeni Heo, Park Hye Ri, Sang Ok Lee",
    authors_ko: "최소연, 김민제, 허예니, 박혜리, 이상옥",
    event: "The 61st Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화유산보존과학회 제61회 춘계학술대회",
    year: 2025,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Poster presentation on the conservation state and pigment analysis of Chilseongdo at Cheongryongsa Temple and Palgwangdo at Anyangam Hermitage in Seoul.",
    summary_ko: "서울 청룡사 칠성도와 안양암 팔상도의 보존상태 및 채색안료 분석에 대한 포스터 발표.",
    link: "",
    keywords: ["Painting", "Pigment analysis", "Conservation state", "Poster presentation"],
    keywords_ko: ["불화", "채색안료", "보존상태", "포스터발표"]
  },
  {
    id: 51,
    type: "conference",
    title_en: "Assessment of Deterioration Patterns of the Tower Gate Elements of the Ramesseum in Luxor, Egypt",
    title_ko: "이집트 룩소르 라메세움 탑문 부재 열화양상 평가",
    authors: "Kim Jeong Yeon, Sang Ok Lee, Kwang Yong Chung",
    authors_ko: "김정연, 이상옥, 정광용",
    event: "The 60th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제60회 추계학술대회",
    year: 2024,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Presentation on deterioration pattern assessment of the tower gate elements of the Ramesseum in Luxor, Egypt.",
    summary_ko: "이집트 룩소르 라메세움 탑문 부재 열화양상 평가에 대한 발표.",
    link: "",
    keywords: ["Luxor", "Ramesseum", "Deterioration", "Heritage assessment"],
    keywords_ko: ["룩소르", "라메세움", "열화", "유산평가"]
  },
  {
    id: 52,
    type: "conference",
    title_en: "Conservation Characteristics of Paint Layers on Outdoor Contemporary Metal Heritage",
    title_ko: "야외 노출 근현대 금속문화유산의 도장층 보존 특성",
    authors: "So Yeon Choi, Sang Ok Lee",
    authors_ko: "최소연, 이상옥",
    event: "The 60th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제60회 추계학술대회",
    year: 2024,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Presentation on conservation characteristics of paint layers on outdoor contemporary metal heritage.",
    summary_ko: "야외 노출 근현대 금속문화유산의 도장층 보존 특성에 대한 발표.",
    link: "",
    keywords: ["Metal heritage", "Paint layer", "Outdoor exposure", "Conservation"],
    keywords_ko: ["금속문화유산", "도장층", "야외노출", "보존"]
  },
  {
    id: 53,
    type: "conference",
    title_en: "Investigation and Analysis of Horse Strap Pendants Excavated from the Munsan-ri Tumuli in Daegu, Dalseong",
    title_ko: "대구 달성 문산리 고분군 출토 행엽 조사 분석 연구",
    authors: "Lee Hae Won, Lee Hyo Seon, Chung Kwang Yong",
    authors_ko: "이해원, 이효선, 정광용",
    event: "The 60th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제60회 추계학술대회",
    year: 2024,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Presentation on investigation and analysis of horse strap pendants excavated from the Munsan-ri tumuli in Daegu, Dalseong.",
    summary_ko: "대구 달성 문산리 고분군 출토 행엽 조사 분석 연구에 대한 발표.",
    link: "",
    keywords: ["Horse strap pendant", "Tumuli", "Manufacturing analysis", "Archaeology"],
    keywords_ko: ["행엽", "고분군", "조사분석", "고고학"]
  },
  {
    id: 54,
    type: "conference",
    title_en: "Corrosion Characteristics of Traditional Metal Hardware from the Amitabha Buddha Statue at Ssanggye-sa Temple, Nonsan",
    title_ko: "논산 쌍계사 아미타불상 전통 철물의 부식 특성 연구",
    authors: "Park Ye Ji, Bae Go Woon, Chung Kwang Yong",
    authors_ko: "박예지, 배고운, 정광용",
    event: "The 60th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제60회 추계학술대회",
    year: 2024,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Presentation on the corrosion characteristics of traditional metal hardware from the Amitabha Buddha statue at Ssanggye-sa Temple, Nonsan.",
    summary_ko: "논산 쌍계사 아미타불상 전통 철물의 부식 특성 연구에 대한 발표.",
    link: "",
    keywords: ["Traditional metal hardware", "Corrosion", "Buddha statue", "Conservation study"],
    keywords_ko: ["전통 철물", "부식", "불상", "보존연구"]
  },
  {
    id: 55,
    type: "conference",
    title_en: "A Metallurgical Analysis of the Site Characteristics of Slag Excavated from Gayeon-ri, Haman",
    title_ko: "함안 가연리 출토 슬래그의 금속학적 분석을 통한 유적 특성 연구",
    authors: "Lee Seo Hyeon, Chung Kwang Yong",
    authors_ko: "이서현, 정광용",
    event: "The 60th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제60회 추계학술대회",
    year: 2024,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Presentation on site characteristics inferred through metallurgical analysis of slag excavated from Gayeon-ri, Haman.",
    summary_ko: "함안 가연리 출토 슬래그의 금속학적 분석을 통한 유적 특성 연구에 대한 발표.",
    link: "",
    keywords: ["Slag", "Metallurgical analysis", "Site characteristics", "Archaeology"],
    keywords_ko: ["슬래그", "금속학적 분석", "유적특성", "고고학"]
  },
  {
    id: 56,
    type: "conference",
    title_en: "Metallurgical Characteristics of the Standing Seated Vairocana Buddha at Borimsa Temple, Jangheung",
    title_ko: "장흥 보림사 철조비로자나불좌상의 금속학적 특성 연구",
    authors: "Choi Ji Eun, Yang Ji Hyeon, Bae Go Woon, Chung Kwang Yong, Park Hee Young",
    authors_ko: "최지은, 양지현, 배고운, 정광용, 박희영",
    event: "The 60th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제60회 추계학술대회",
    year: 2024,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Presentation on the metallurgical characteristics of the standing seated Vairocana Buddha at Borimsa Temple, Jangheung.",
    summary_ko: "장흥 보림사 철조비로자나불좌상의 금속학적 특성 연구에 대한 발표.",
    link: "",
    keywords: ["Iron Buddha", "Metallurgical properties", "Temple sculpture", "Heritage research"],
    keywords_ko: ["철조불상", "금속학적 특성", "불교조각", "문화유산연구"]
  },
  {
    id: 57,
    type: "conference",
    title_en: "Application of Metal PLA Sintering by Composition for Restoration Materials of Metal Cultural Heritage",
    title_ko: "함량별 금속 PLA 소결을 통한 금속 문화유산의 복원 재료 적용",
    authors: "Min Je Kim, Singi Kim, Chung Kwang Yong, Sang Ok Lee",
    authors_ko: "김민제, 김신기, 정광용, 이상옥",
    event: "The 60th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제60회 추계학술대회",
    year: 2024,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Poster presentation on the application of metal PLA sintering for restoration materials of metal cultural heritage.",
    summary_ko: "함량별 금속 PLA 소결을 통한 금속 문화유산의 복원 재료 적용에 대한 포스터 발표.",
    link: "",
    keywords: ["Metal PLA", "Sintering", "Restoration material", "Poster presentation"],
    keywords_ko: ["금속 PLA", "소결", "복원재료", "포스터발표"]
  },
  {
    id: 58,
    type: "conference",
    title_en: "Study on Manufacturing Techniques of Modern Yugi (Brassware)",
    title_ko: "현대 유기(鍮器)의 제작기법 연구",
    authors: "Yu Ran Seok, Lee Seo Hyeon, Kim Chae Rin, Bae Go Woon, Chung Kwang Yong",
    authors_ko: "석유란, 이서현, 김채린, 배고운, 정광용",
    event: "The 59th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제59회 춘계학술대회",
    year: 2024,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Presentation on the manufacturing techniques of modern yugi (brassware).",
    summary_ko: "현대 유기의 제작기법 연구에 대한 발표.",
    link: "",
    keywords: ["Yugi", "Brassware", "Manufacturing technique", "Traditional crafts"],
    keywords_ko: ["유기", "놋그릇", "제작기법", "전통공예"]
  },
  {
    id: 59,
    type: "conference",
    title_en: "Analysis of Conservation Environment of Ancient Tomb Murals According to Climate Change and Ground Temperature",
    title_ko: "기후변화와 지중온도에 따른 고분 벽화의 보존환경 분석",
    authors: "Choi Gyu Ri, Lee Hyeon Joo, Jung Yong Jae, Lee Sang Ok",
    authors_ko: "최규리, 이현주, 정용재, 이상옥",
    event: "The 59th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제59회 춘계학술대회",
    year: 2024,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Analysis of conservation environment of ancient tomb murals based on climate change and ground temperature.",
    summary_ko: "기후변화와 지중온도에 따른 고분 벽화의 보존환경 분석 연구.",
    link: "",
    keywords: ["Ancient tomb", "Murals", "Conservation environment", "Climate change"],
    keywords_ko: ["고분", "벽화", "보존환경", "기후변화"]
  },
  {
    id: 60,
    type: "conference",
    title_en: "Scientific Analysis of Silver Container from Dangogak Buddha Statue Reliquaries at Cheongyang Janggoksa Temple",
    title_ko: "청양 장곡사 금동약사여래좌상 복장유물 은합의 과학적 분석",
    authors: "Choi Ji Eun, Lee Sang Ok, Chung Kwang Yong",
    authors_ko: "최지은, 이상옥, 정광용",
    event: "The 59th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제59회 춘계학술대회",
    year: 2024,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Scientific analysis of silver container from Buddha statue reliquaries.",
    summary_ko: "금동약사여래좌상 복장유물 은합의 과학적 분석 연구.",
    link: "",
    keywords: ["Buddha statue", "Reliquaries", "Silver container", "Scientific analysis"],
    keywords_ko: ["불상", "복장유물", "은합", "과학적 분석"]
  },
  {
    id: 61,
    type: "conference",
    title_en: "Research on Production Techniques of Buddha Sculptures in Yeongsan-jeon and Myeongbu-jeon at Deoksa Temple in Cheongdo",
    title_ko: "청도 덕사 영산전과 명부전 소재 불조각상의 제작기법 연구",
    authors: "Kim Chae Rin, Choi Gyu Ri, Lee Seo Hyeon, Choi So Yeon, Lee Sang Ok",
    authors_ko: "김채린, 최규리, 이서현, 최소연, 이상옥",
    event: "The 59th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제59회 춘계학술대회",
    year: 2024,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Research on production techniques of Buddha sculptures.",
    summary_ko: "불조각상의 제작기법 연구.",
    link: "",
    keywords: ["Buddha sculptures", "Production techniques", "Deoksa Temple"],
    keywords_ko: ["불조각상", "제작기법", "덕사"]
  },
  {
    id: 62,
    type: "conference",
    title_en: "Research on Lightweight Restoration Method of Bronze Wind Chimes of Seated Maitreya Bodhisattva Statue at Nonsan Gwanghoksa Temple Using Metal PLA 3D Printing",
    title_ko: "Metal PLA 3D 프린팅 기법을 활용한 논산 관촉사 석조미륵보살입상 청동 풍탁 경량화 복원 방안 연구",
    authors: "Kim Min Je, Chung Kwang Yong, Lee Sang Ok",
    authors_ko: "김민제, 정광용, 이상옥",
    event: "The 58th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제58회 추계학술대회",
    year: 2023,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Research on lightweight restoration using Metal PLA 3D printing.",
    summary_ko: "Metal PLA 3D 프린팅을 이용한 경량화 복원 방안 연구.",
    link: "",
    keywords: ["Metal PLA", "3D printing", "Restoration", "Bronze wind chimes"],
    keywords_ko: ["금속 PLA", "3D 프린팅", "복원", "풍탁"]
  },
  {
    id: 63,
    type: "conference",
    title_en: "Research on Applicability of Danqing Finishing Material Using Castor Oil Lacquer to Cultural Heritage",
    title_ko: "피마자 유칠을 이용한 단청마감재의 문화재 적용성 연구",
    authors: "Han Bo Seok, Chung Kwang Yong",
    authors_ko: "한보석, 정광용",
    event: "The 58th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제58회 추계학술대회",
    year: 2023,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Research on applicability of castor oil lacquer-based danqing finishing material.",
    summary_ko: "피마자 유칠을 이용한 단청마감재의 적용성 연구.",
    link: "",
    keywords: ["Danqing", "Castor oil lacquer", "Finishing material", "Cultural heritage"],
    keywords_ko: ["단청", "피마자유칠", "마감재", "문화재"]
  },
  {
    id: 64,
    type: "conference",
    title_en: "Research on Production Techniques of Clay Shakyamuni Buddha Trinity at Nonsan Ssangkkye Temple",
    title_ko: "논산 쌍꼐사 소조석가여래삼불좌상 제작기법 연구",
    authors: "Kim Bo Gyeong, Kim Seon Deok, Chung Kwang Yong",
    authors_ko: "김보경, 김선덕, 정광용",
    event: "The 58th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제58회 추계학술대회",
    year: 2023,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Research on production techniques of clay Buddhist statues.",
    summary_ko: "소조불상의 제작기법 연구.",
    link: "",
    keywords: ["Clay sculpture", "Buddhist statue", "Production technique"],
    keywords_ko: ["소조", "불상", "제작기법"]
  },
  {
    id: 65,
    type: "conference",
    title_en: "Research on Production Techniques and Raw Material Origin of Bronze Girdle Pendants Excavated from Jecheon Jangnag-dong Site",
    title_ko: "제천 장락동 유적 출토 청동과대의 제작기법 및 원료산지 연구",
    authors: "Yang Ji Hyeon, Min Sang A, Bae Go Woon, Chung Kwang Yong",
    authors_ko: "양지현, 민상아, 배고운, 정광용",
    event: "The 58th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제58회 추계학술대회",
    year: 2023,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Research on production techniques and raw material origin of bronze girdle pendants.",
    summary_ko: "청동과대의 제작기법 및 원료산지 연구.",
    link: "",
    keywords: ["Bronze girdle", "Production technique", "Raw material origin"],
    keywords_ko: ["청동과대", "제작기법", "원료산지"]
  },
  {
    id: 66,
    type: "conference",
    title_en: "Preservation and Management Plan for Japanese-style Roof Tiles of Modern Residential Buildings",
    title_ko: "근대 적산가옥 일본식 기와의 보존관리 방안",
    authors: "Na Seong Jin, Kim Shin Ki, Lee Sang Ok, Chung Kwang Yong",
    authors_ko: "나성진, 김신기, 이상옥, 정광용",
    event: "The 58th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제58회 추계학술대회",
    year: 2023,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Preservation and management plan for Japanese-style roof tiles.",
    summary_ko: "근대 일본식 기와의 보존관리 방안 연구.",
    link: "",
    keywords: ["Roof tiles", "Japanese style", "Preservation management"],
    keywords_ko: ["기와", "일본식", "보존관리"]
  },
  {
    id: 67,
    type: "conference",
    title_en: "Pigment Analysis and Damage Map Creation of Portrait of Gohi Treasure",
    title_ko: "보물 고희 초상의 안료 분석 및 손상지도 작성",
    authors: "Son Yu Ra, Kim Seon Gyeong, Cho Seong Mo, Chung Kwang Yong",
    authors_ko: "손유라, 김선경, 조성모, 정광용",
    event: "The 58th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제58회 추계학술대회",
    year: 2023,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Pigment analysis and damage documentation of portrait.",
    summary_ko: "초상화의 안료 분석 및 손상지도 작성.",
    link: "",
    keywords: ["Portrait", "Pigment analysis", "Damage map"],
    keywords_ko: ["초상화", "안료분석", "손상지도"]
  },
  {
    id: 68,
    type: "conference",
    title_en: "Charring Investigation of Old Jeonnam Provincial Government Building Using Non-Destructive Internal Structure Survey Technique",
    title_ko: "비파괴 내부구조조사기법을 이용한 옛 전남도청 탄흔조사",
    authors: "Lee Sang Ok, Lee Han Hyeong, Chung Kwang Yong",
    authors_ko: "이상옥, 이한형, 정광용",
    event: "The 58th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제58회 추계학술대회",
    year: 2023,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Charring investigation using non-destructive internal structure survey.",
    summary_ko: "비파괴 조사기법을 이용한 탄흔조사 연구.",
    link: "",
    keywords: ["Non-destructive survey", "Charring investigation", "Internal structure"],
    keywords_ko: ["비파괴조사", "탄흔", "내부구조"]
  },
  {
    id: 69,
    type: "conference",
    title_en: "Basic Survey and Preservation Management Plan of Catholic Dongsanmun Cultural Heritage",
    title_ko: "천주교 동산문화유산 기초조사 및 보존관리 방안",
    authors: "Choi Gyu Ri, Lee Sang Ok",
    authors_ko: "최규리, 이상옥",
    event: "The 58th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제58회 추계학술대회",
    year: 2023,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Basic survey and preservation management plan for cultural heritage.",
    summary_ko: "천주교 문화유산의 기초조사 및 보존관리 방안.",
    link: "",
    keywords: ["Catholic heritage", "Survey", "Preservation management"],
    keywords_ko: ["천주교유산", "기초조사", "보존관리"]
  },
  {
    id: 70,
    type: "conference",
    title_en: "Scientific Comparative Analysis Research of Korean Traditional Rifles",
    title_ko: "대한식 소총의 과학적 비교분석 연구",
    authors: "Choi Yang Ho, Choi Yun Gwan, Jang Han Ul, Kang Hyeon Sam, Lee Sang Ok",
    authors_ko: "최양호, 최윤관, 장한울, 강현삼, 이상옥",
    event: "The 58th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제58회 추계학술대회",
    year: 2023,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Scientific comparative analysis of Korean traditional rifles.",
    summary_ko: "대한식 소총의 과학적 비교분석 연구.",
    link: "",
    keywords: ["Korean rifles", "Comparative analysis", "Scientific research"],
    keywords_ko: ["소총", "비교분석", "과학적연구"]
  },
  {
    id: 71,
    type: "conference",
    title_en: "Analysis of Preservation Status and Production Techniques of Murals in Damyang Miamsa Temple Hall",
    title_ko: "담양 미암사당 벽화 보존상태 및 제작기법 분석",
    authors: "Park Ye Ji, Yang Ji Hyeon, Choi So Yeon, Na Won Joo, Lee Sang Ok, Chung Kwang Yong",
    authors_ko: "박예지, 양지현, 최소연, 나원주, 이상옥, 정광용",
    event: "The 58th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제58회 추계학술대회",
    year: 2023,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Analysis of preservation status and production techniques of murals.",
    summary_ko: "벽화의 보존상태 및 제작기법 분석.",
    link: "",
    keywords: ["Murals", "Preservation status", "Production technique"],
    keywords_ko: ["벽화", "보존상태", "제작기법"]
  },
  {
    id: 72,
    type: "conference",
    title_en: "Research on Operation Monitoring and Preventive Conservation of Multi-channel Media Artworks",
    title_ko: "다채널 미디어 작품 작동 모니터링과 예방 보존 연구",
    authors: "Bae Geon Min, Myeong Na Hee, Chung Kwang Yong, Kwon In Cheol",
    authors_ko: "배건민, 명나희, 정광용, 권인철",
    event: "The 57th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제57회 춘계학술대회",
    year: 2023,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Research on operation monitoring and preventive conservation of media artworks.",
    summary_ko: "다채널 미디어 작품의 모니터링과 보존 연구.",
    link: "",
    keywords: ["Media artwork", "Monitoring", "Preventive conservation"],
    keywords_ko: ["미디어작품", "모니터링", "예방보존"]
  },
  {
    id: 73,
    type: "conference",
    title_en: "Research on Preservation Treatment Plan of Artificial Stone Washing Exterior Finish of Modern Architectural Cultural Heritage: Case Study of Dongyangchukik Co., Ltd. Mokpo Branch",
    title_ko: "근대 건축문화재 인조석씻기 외벽 마감 보존처리 방안 연구 : 동양척식주식회사 목포지점 보존처리 사례를 통하여",
    authors: "Han Chang Won, Lee Sang Ok, Chung Kwang Yong",
    authors_ko: "한창원, 이상옥, 정광용",
    event: "The 57th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제57회 춘계학술대회",
    year: 2023,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Research on preservation treatment plan for artificial stone exterior finish.",
    summary_ko: "근대 건축문화재의 인조석씻기 외벽 마감 보존처리 방안 연구.",
    link: "",
    keywords: ["Modern architecture", "Artificial stone", "Preservation treatment"],
    keywords_ko: ["근대건축", "인조석", "보존처리"]
  },
  {
    id: 74,
    type: "conference",
    title_en: "Research on Production Techniques of Bronze Bodhisattva Seated Figure at Gangjin Goseong Temple",
    title_ko: "강진 고성사 청동보살좌상의 제작기술 연구",
    authors: "Lee Seung Chan, Chung Kwang Yong",
    authors_ko: "이승찬, 정광용",
    event: "The 57th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제57회 춘계학술대회",
    year: 2023,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Research on production techniques of bronze Buddhist statue.",
    summary_ko: "청동보살좌상의 제작기술 연구.",
    link: "",
    keywords: ["Bronze statue", "Production technique", "Buddhist art"],
    keywords_ko: ["청동상", "제작기술", "불교미술"]
  },
  {
    id: 75,
    type: "conference",
    title_en: "Analysis of Internal Structure of Wooden Jizang Bodhisattva Seated Figure at Yesan Yongmunsa Temple Using CT",
    title_ko: "CT를 활용한 예싼 용문사 목조지장보살좌상 내부구조 분석",
    authors: "Lee Sang Hoon, Bae Go Woon, Heo Seung Moo, Chung Kwang Yong",
    authors_ko: "이상훈, 배고운, 허승무, 정광용",
    event: "The 57th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제57회 춘계학술대회",
    year: 2023,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Analysis of internal structure using CT scanning.",
    summary_ko: "CT를 이용한 목조불상의 내부구조 분석.",
    link: "",
    keywords: ["CT scanning", "Wooden statue", "Internal structure"],
    keywords_ko: ["CT", "목조상", "내부구조"]
  },
  {
    id: 76,
    type: "conference",
    title_en: "Analysis of Production Techniques and Preservation Plan of Clay Amitabha Buddha Trinity at Buyeo Muryang Temple",
    title_ko: "부여 무량사 소조아미타여래삼존좌상 소조토의 제작기법 분석 및 보존 방안",
    authors: "Noh Dong Jun, Lee Sang Ok, Kwon Soon Jong, Chung Kwang Yong",
    authors_ko: "노동준, 이상옥, 권순종, 정광용",
    event: "The 57th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제57회 춘계학술대회",
    year: 2023,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Analysis of clay composition and production techniques with preservation plan.",
    summary_ko: "소조불상의 제작기법 분석 및 보존 방안.",
    link: "",
    keywords: ["Clay statue", "Production technique", "Preservation plan"],
    keywords_ko: ["소조상", "제작기법", "보존방안"]
  },
  {
    id: 77,
    type: "conference",
    title_en: "Material Characteristics and Preservation Status Evaluation of Rescue Helicopter Kkaoji 2 at Seoul Boramae Safety Experience Center",
    title_ko: "서울 보라매안전체험관 소장 소방헬기 까치 2호의 소재 특성 및 보존상태 평가",
    authors: "Choi So Yeon, Park Seon, Kang Geum Man, Chung Kwang Yong, Lee Sang Ok",
    authors_ko: "최소연, 박선, 강금만, 정광용, 이상옥",
    event: "The 57th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제57회 춘계학술대회",
    year: 2023,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Material characteristics and preservation status evaluation of helicopter.",
    summary_ko: "소방헬기의 소재 특성 및 보존상태 평가.",
    link: "",
    keywords: ["Helicopter", "Material characteristics", "Preservation status"],
    keywords_ko: ["헬기", "소재특성", "보존상태"]
  },
  {
    id: 78,
    type: "conference",
    title_en: "Evaluation of Deterioration Pattern of Laos Laterite Through Salt Spray Test",
    title_ko: "염수분무시험을 통한 라오스 라테라이트의 열화양상 평가",
    authors: "Kim Jung Yeon, Lee Sang Ok, Chung Kwang Yong",
    authors_ko: "김정연, 이상옥, 정광용",
    event: "The 57th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제57회 춘계학술대회",
    year: 2023,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Evaluation of deterioration pattern through salt spray testing.",
    summary_ko: "염수분무시험을 통한 라테라이트의 열화 평가.",
    link: "",
    keywords: ["Laterite", "Deterioration", "Salt spray test"],
    keywords_ko: ["라테라이트", "열화", "염수분무"]
  },
  {
    id: 79,
    type: "conference",
    title_en: "Preservation Treatment and Production Technique Analysis of Iron Buddha Seated Figure at Incheon Yongsu Temple",
    title_ko: "인천 용수사 철조여래좌상의 보존처리 및 제작기법 분석",
    authors: "Yang Ji Hyeon, Noh Dong Jun, Park Seon, Im Han Ul, Bae Go Woon, Kim Sang Beom, Chung Kwang Yong",
    authors_ko: "양지현, 노동준, 박선, 임한울, 배고운, 김상범, 정광용",
    event: "The 57th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제57회 춘계학술대회",
    year: 2023,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Preservation treatment and production technique analysis of iron Buddha statue.",
    summary_ko: "철조불상의 보존처리 및 제작기법 분석.",
    link: "",
    keywords: ["Iron Buddha", "Preservation treatment", "Production technique"],
    keywords_ko: ["철조불상", "보존처리", "제작기법"]
  },
  {
    id: 80,
    type: "conference",
    title_en: "Research Proposal on XRF Analysis and Chemical Weathering Index of Bangudae Rock Art",
    title_ko: "반구대 암각화의 XRF부석 및 화학적 풍화 지수 연구 제안",
    authors: "Kim Ju Hyeong, Han Min Soo, Lee Sang Ok",
    authors_ko: "김주형, 한민수, 이상옥",
    event: "The 57th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제57회 춘계학술대회",
    year: 2023,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Research proposal on XRF analysis and chemical weathering index.",
    summary_ko: "암각화의 XRF 분석 및 화학적 풍화 연구.",
    link: "",
    keywords: ["Rock art", "XRF analysis", "Weathering"],
    keywords_ko: ["암각화", "XRF", "풍화"]
  },
  {
    id: 81,
    type: "conference",
    title_en: "Research on Feasibility of 3D Printing Restoration of Metal Cultural Heritage Using Cu-PLA",
    title_ko: "Cu-PLA를 활용한 금속문화유산 3D 프린팅 복원 가능성 연구",
    authors: "Kim Min Je, Lee Sang Ok, Chung Kwang Yong",
    authors_ko: "김민제, 이상옥, 정광용",
    event: "The 56th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제56회 추계학술대회",
    year: 2022,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Research on feasibility of Cu-PLA 3D printing for metal heritage restoration.",
    summary_ko: "Cu-PLA를 이용한 금속문화유산 3D 프린팅 복원 가능성 연구.",
    link: "",
    keywords: ["Cu-PLA", "3D printing", "Metal heritage", "Restoration"],
    keywords_ko: ["Cu-PLA", "3D프린팅", "금속문화유산", "복원"]
  },
  {
    id: 82,
    type: "conference",
    title_en: "Conservation Science Research of Chilsung Painting at Gongju Magoksa Temple",
    title_ko: "공주 마곡사 칠성도의 보존과학적 연구",
    authors: "Jung Ye Ji, Choi Seok Chan, Cha Byeong Gab, Chung Kwang Yong",
    authors_ko: "정예지, 최석찬, 차병갑, 정광용",
    event: "The 55th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제55회 춘계학술대회",
    year: 2022,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Conservation science research of religious painting.",
    summary_ko: "칠성도의 보존과학적 분석 연구.",
    link: "",
    keywords: ["Religious painting", "Conservation science", "Analysis"],
    keywords_ko: ["칠성도", "보존과학", "분석"]
  },
  {
    id: 83,
    type: "conference",
    title_en: "Research on Production Techniques of Gilt-bronze Avalokitesvara Seated Figure at Cheongyang Unjangam",
    title_ko: "청양 운장암 금동관음보살좌상의 제작기법 연구",
    authors: "Bae Go Woon, Lee Sang Ok, Choi Kyung Seo, Chung Kwang Yong",
    authors_ko: "배고운, 이상옥, 최경서, 정광용",
    event: "The 55th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제55회 춘계학술대회",
    year: 2022,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Research on production techniques of gilt-bronze Buddhist statue.",
    summary_ko: "금동관음보살좌상의 제작기법 연구.",
    link: "",
    keywords: ["Gilt-bronze statue", "Production technique", "Buddhist art"],
    keywords_ko: ["금동상", "제작기법", "불교미술"]
  },
  {
    id: 84,
    type: "conference",
    title_en: "Metallurgical Research of Iron Artifacts from Jangsu Janggyeri Ancient Tombs",
    title_ko: "장수 장계리 고분군(8⦁9호분) 출토 철제유물의 금속학적 연구",
    authors: "Park Seon, Min Sang A, Bae Go Woon, Chung Kwang Yong",
    authors_ko: "박선, 민상아, 배고운, 정광용",
    event: "The 55th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제55회 춘계학술대회",
    year: 2022,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Metallurgical analysis of iron artifacts from ancient tombs.",
    summary_ko: "고분 출토 철제유물의 금속학적 분석.",
    link: "",
    keywords: ["Iron artifacts", "Metallurgical analysis", "Ancient tombs"],
    keywords_ko: ["철제유물", "금속학", "고분"]
  },
  {
    id: 85,
    type: "conference",
    title_en: "Research on Feasibility of 3D Printing Restoration of Metal Cultural Heritage Using Cu-PLA",
    title_ko: "Cu-PLA를 활용한 금속문화유산 3D 프린팅 복원 가능성 연구",
    authors: "Kim Min Je, Chung Kwang Yong",
    authors_ko: "김민제, 정광용",
    event: "The 55th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제55회 춘계학술대회",
    year: 2022,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Research on feasibility of Cu-PLA 3D printing for metal heritage restoration.",
    summary_ko: "Cu-PLA를 이용한 금속문화유산 3D 프린팅 복원 가능성 연구.",
    link: "",
    keywords: ["Cu-PLA", "3D printing", "Metal heritage", "Restoration"],
    keywords_ko: ["Cu-PLA", "3D프린팅", "금속문화유산", "복원"]
  },
  {
    id: 86,
    type: "conference",
    title_en: "Scientific Analysis Research of Thousand Buddha Painting at Yeongsan Hall of Buyeo Muryang Temple",
    title_ko: "부여 무량사 영산전 천불도의 과학적 분석 연구",
    authors: "Noh Dong Jun, Kim Min Je, Lee Sang Ok, Chung Kwang Yong",
    authors_ko: "노동준, 김민제, 이상옥, 정광용",
    event: "The 55th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제55회 춘계학술대회",
    year: 2022,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Scientific analysis research of thousand Buddha painting.",
    summary_ko: "천불도의 과학적 분석 연구.",
    link: "",
    keywords: ["Thousand Buddha painting", "Scientific analysis", "Buddhist art"],
    keywords_ko: ["천불도", "과학적분석", "불교미술"]
  },
  {
    id: 87,
    type: "conference",
    title_en: "Research on Correction Coefficient for Effective Surface Component Analysis of Bangudae Rock Art, Ulsan",
    title_ko: "울산 반구대암각화의 효과적인 표면 성분분석을 위한 보정계수 연구",
    authors: "Kim Ju Hyeong, Han Min Soo, Lee Sang Ok",
    authors_ko: "김주형, 한민수, 이상옥",
    event: "The 55th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제55회 춘계학술대회",
    year: 2022,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Research on correction coefficient for surface component analysis of rock art.",
    summary_ko: "암각화의 표면 성분분석을 위한 보정계수 연구.",
    link: "",
    keywords: ["Rock art", "Component analysis", "Correction coefficient"],
    keywords_ko: ["암각화", "성분분석", "보정계수"]
  },
  {
    id: 88,
    type: "conference",
    title_en: "Research on Production Techniques and Lead Ore Origin Estimation of Bronze Plate Excavated from Songcheol-dong Site 102-5, Cheongju",
    title_ko: "청주 송철동 102-5번지 유적 출토 청동과판의 제작기법 및 납원료산지 추정 연구",
    authors: "Choi Kyung Seo, Bae Go Woon, Chung Kwang Yong, Ahn Joo Hyeon",
    authors_ko: "최경서, 배고운, 정광용, 안주현",
    event: "The 54th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제54회 추계학술대회",
    year: 2021,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Research on production techniques and lead ore origin of bronze plate.",
    summary_ko: "청동과판의 제작기법 및 납원료산지 연구.",
    link: "",
    keywords: ["Bronze plate", "Production technique", "Lead ore origin"],
    keywords_ko: ["청동과판", "제작기법", "납원료산지"]
  },
  {
    id: 89,
    type: "conference",
    title_en: "Scientific Investigation for Identification of Burn Marks and Ammunition on Walls",
    title_ko: "벽체에 형성된 탄흔 및 탄약류의 식별을 위한 과학적 조사",
    authors: "Choi Yang Ho, Lee Sang Ok, Im Jong Su, Chung Kwang Yong",
    authors_ko: "최양호, 이상옥, 임종수, 정광용",
    event: "The 54th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제54회 추계학술대회",
    year: 2021,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Scientific investigation for identification of burn marks and ammunition.",
    summary_ko: "벽체의 탄흔 및 탄약류 식별 조사.",
    link: "",
    keywords: ["Burn marks", "Ammunition", "Scientific investigation"],
    keywords_ko: ["탄흔", "탄약", "과학적조사"]
  },
  {
    id: 90,
    type: "conference",
    title_en: "Preservation Treatment and Production Technique Research of Bronze Inlaid Incense Burner Excavated from Changli Site, Ganghwa",
    title_ko: "강화 창리 유적 출토 청동은입사향완 보존처리 및 제작기법 연구",
    authors: "Kim Bo Gyeong, Chung Kwang Yong",
    authors_ko: "김보경, 정광용",
    event: "The 54th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제54회 추계학술대회",
    year: 2021,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Preservation treatment and production technique research of bronze incense burner.",
    summary_ko: "청동은입사향완의 보존처리 및 제작기법 연구.",
    link: "",
    keywords: ["Bronze incense burner", "Inlay technique", "Preservation treatment"],
    keywords_ko: ["청동향완", "은입사", "보존처리"]
  },
  {
    id: 91,
    type: "conference",
    title_en: "Analysis Research of Desiccants in Oil Painting Materials Using Non-destructive Analysis",
    title_ko: "비파괴분석을 이용한 유화물감의 건조제 분석연구",
    authors: "Jeon Sang Woo, Lee Sang Ok, Chung Kwang Yong",
    authors_ko: "전상우, 이상옥, 정광용",
    event: "The 51st and 52nd Spring and Autumn Joint Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제51⦁52회 춘⦁추계연합학술대회",
    year: 2020,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Analysis research of desiccants in oil painting using non-destructive methods.",
    summary_ko: "유화물감의 건조제 비파괴 분석 연구.",
    link: "",
    keywords: ["Oil painting", "Desiccant", "Non-destructive analysis"],
    keywords_ko: ["유화", "건조제", "비파괴분석"]
  },
  {
    id: 92,
    type: "conference",
    title_en: "Research on Production Techniques and Corrosion Characteristics of Korean and Chinese Classical Coins through Metallurgical Analysis",
    title_ko: "금속학적 분석을 통한 한⦁중 고전(古錢)의 제작기법 및 부식특성 연구",
    authors: "Seo Eun Kyeong, Chung Kwang Yong",
    authors_ko: "서은경, 정광용",
    event: "The 51st and 52nd Spring and Autumn Joint Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제51⦁52회 춘⦁추계연합학술대회",
    year: 2020,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Research on production techniques and corrosion characteristics of classical coins.",
    summary_ko: "한⦁중 고전의 제작기법 및 부식특성 연구.",
    link: "",
    keywords: ["Classical coins", "Metallurgical analysis", "Corrosion"],
    keywords_ko: ["고전", "금속학", "부식"]
  },
  {
    id: 93,
    type: "conference",
    title_en: "Analysis of Production Techniques of Bronze Wind Chimes of Seated Maitreya Bodhisattva Stone Statue at Nonsan Gwanghoksa Temple",
    title_ko: "논산 관촉사 석조미륵보살입상 청동풍탁의 제작기법 분석",
    authors: "Lee So Yeon, Lee Sang Ok, Chung Kwang Yong",
    authors_ko: "이소연, 이상옥, 정광용",
    event: "The 51st and 52nd Spring and Autumn Joint Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제51⦁52회 춘⦁추계연합학술대회",
    year: 2020,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Analysis of production techniques of bronze wind chimes.",
    summary_ko: "청동풍탁의 제작기법 분석.",
    link: "",
    keywords: ["Bronze wind chimes", "Production technique", "Stone statue"],
    keywords_ko: ["청동풍탁", "제작기법", "석조상"]
  },
  {
    id: 94,
    type: "conference",
    title_en: "Metallurgical Research of Iron Artifacts Excavated from Songjeol-dong Site, Cheongju",
    title_ko: "청주 송절동 유적 출토 철기유물의 금속학적 연구",
    authors: "Kim Min Hee, Jang Jun Hyeok, Bae Go Woon, Chung Kwang Yong",
    authors_ko: "김민희, 장준혁, 배고운, 정광용",
    event: "The 51st and 52nd Spring and Autumn Joint Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제51⦁52회 춘⦁추계연합학술대회",
    year: 2020,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Metallurgical research of iron artifacts.",
    summary_ko: "철기유물의 금속학적 연구.",
    link: "",
    keywords: ["Iron artifacts", "Metallurgical analysis", "Ancient site"],
    keywords_ko: ["철기", "금속학", "유적"]
  },
  {
    id: 95,
    type: "conference",
    title_en: "Corrosion Characteristics of Bronze Artifacts from Joseon Dynasty and Antique Bronze Wares",
    title_ko: "조선시대 출토 청동유물과 전세품 청동기의 부식 특성",
    authors: "Choi Kyung Seo, Bae Go Woon, Jang Jun Hyeok, Chung Kwang Yong",
    authors_ko: "최경서, 배고운, 장준혁, 정광용",
    event: "The 51st and 52nd Spring and Autumn Joint Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제51⦁52회 춘⦁추계연합학술대회",
    year: 2020,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Research on corrosion characteristics of bronze artifacts.",
    summary_ko: "청동유물의 부식 특성 연구.",
    link: "",
    keywords: ["Bronze artifacts", "Corrosion", "Joseon dynasty"],
    keywords_ko: ["청동유물", "부식", "조선시대"]
  },
  {
    id: 96,
    type: "conference",
    title_en: "Research on Production Techniques of Gilt-bronze Amitabha Buddha Seated Figure at Gumi Daedunsa Temple",
    title_ko: "구미 대둔사 건칯아미타여래좌상 제작기법 연구",
    authors: "Kim Man Hoe, Bae Go Woon, Choi Ji Suk, Bae Jung Hyeon, Chung Kwang Yong",
    authors_ko: "김만회, 배고운, 최지숙, 배중현, 정광용",
    event: "The 51st and 52nd Spring and Autumn Joint Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제51⦁52회 춘⦁추계연합학술대회",
    year: 2020,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Research on production techniques of gilt-bronze Buddha statue.",
    summary_ko: "건칯아미타여래좌상의 제작기법 연구.",
    link: "",
    keywords: ["Gilt-bronze statue", "Production technique", "Buddhist art"],
    keywords_ko: ["건칯상", "제작기법", "불교미술"]
  },
  {
    id: 97,
    type: "conference",
    title_en: "Comparative Research on Rust Prevention Treatment Methods of Modern Metal Artifacts: Focusing on Modern Metal Artifacts Excavated from 6.25 War Casualties",
    title_ko: "근대금속유물의 방청처리 방법 비교 연구: 6.25 전사자 발굴 출토 근대금속유물을 중심으로",
    authors: "Choi Yang Ho, Bae Go Woon, Lee Ho Yeon, Chung Kwang Yong",
    authors_ko: "최양호, 배고운, 이호연, 정광용",
    event: "The 51st and 52nd Spring and Autumn Joint Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제51⦁52회 춘⦁추계연합학술대회",
    year: 2020,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Comparative research on rust prevention treatment methods.",
    summary_ko: "근대금속유물의 방청처리 방법 비교 연구.",
    link: "",
    keywords: ["Metal artifacts", "Rust prevention", "Treatment methods"],
    keywords_ko: ["금속유물", "방청처리", "근대"]
  },
  {
    id: 98,
    type: "conference",
    title_en: "Analysis of Wood Species and Paint Layer of Treasure No. 980 Wooden Amitabha Buddha Seated Figure at Bonglimsa Temple, Hwaseong",
    title_ko: "보물 제980호 화성 봉림사 목조아미타여래좌상 수종 및 도막층 분석",
    authors: "Choi Jae Wan, Jang Han Ul, Lee Sang Ok, Cho Kyung Mi, Kim Soo Cheol",
    authors_ko: "최재완, 장한울, 이상옥, 조경미, 김수철",
    event: "The 51st and 52nd Spring and Autumn Joint Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제51⦁52회 춘⦁추계연합학술대회",
    year: 2020,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Analysis of wood species and paint layer of wooden Buddha statue.",
    summary_ko: "목조불상의 수종 및 도막층 분석.",
    link: "",
    keywords: ["Wooden statue", "Wood species", "Paint layer"],
    keywords_ko: ["목조상", "수종", "도막층"]
  },
  {
    id: 99,
    type: "conference",
    title_en: "Research on Analysis Method of Hardened Lime Mortar Mixing Ratio",
    title_ko: "경화된 석회 모르타르 배합비 분석방법 연구",
    authors: "Lee Sang Ok, Chung Kwang Yong",
    authors_ko: "이상옥, 정광용",
    event: "The 50th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제50회 추계학술대회",
    year: 2019,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Research on analysis method of hardened lime mortar mixing ratio.",
    summary_ko: "석회 모르타르의 배합비 분석 방법 연구.",
    link: "",
    keywords: ["Lime mortar", "Mixing ratio", "Analysis method"],
    keywords_ko: ["석회모르타르", "배합비", "분석방법"]
  },
  {
    id: 100,
    type: "conference",
    title_en: "Analysis of Production Techniques of Metal Artifacts Excavated from Hoamri Site (173-2) in Water-Friendly Zone Development Area, Buyeo",
    title_ko: "부여 호암리(173-2) 규암지구 친수구역 조성부지 내 유적 출토 금속유물의 제작기법 분석",
    authors: "Choi Kyung Seo, Jang Jun Hyeok, Park Jun Hyeon, Chung Kwang Yong, Lee Seon Young",
    authors_ko: "최경서, 장준혁, 박준현, 정광용, 이선영",
    event: "The 50th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제50회 추계학술대회",
    year: 2019,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Analysis of production techniques of metal artifacts from archaeological site.",
    summary_ko: "호암리 유적 출토 금속유물의 제작기법 분석.",
    link: "",
    keywords: ["Metal artifacts", "Production technique", "Archaeological site"],
    keywords_ko: ["금속유물", "제작기법", "유적"]
  },
  {
    id: 101,
    type: "conference",
    title_en: "Analysis of Gold Foil Application Technique of Wooden Shakyamuni Buddha Trinity at Songlimsa Temple, Chilgok",
    title_ko: "칠곡 송림사 목조석가여래삼존좌상의 개금기법 분석",
    authors: "Choi Yang Ho, Kim Min Hee, Jang Jun Hyeok, Bae Go Woon, Chung Kwang Yong, Lee Jae Yoon",
    authors_ko: "최양호, 김민희, 장준혁, 배고운, 정광용, 이재윤",
    event: "The 50th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제50회 추계학술대회",
    year: 2019,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Analysis of gold foil application technique on wooden Buddhist statue.",
    summary_ko: "목조석가여래삼존좌상의 개금기법 분석.",
    link: "",
    keywords: ["Gold foil", "Buddha statue", "Gilding technique"],
    keywords_ko: ["개금", "불상", "금박기법"]
  },
  {
    id: 102,
    type: "conference",
    title_en: "Lime Production Technology of the Rampart at Namhansanseong Fortress",
    title_ko: "남한산성 여장 석회 제작기술",
    authors: "Lee Sang Ok, Chung Kwang Yong",
    authors_ko: "이상옥, 정광용",
    event: "The 49th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제49회 춘계학술대회",
    year: 2019,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Research on lime production technology used in fortress rampart.",
    summary_ko: "남한산성 여장 석회의 제작기술 연구.",
    link: "",
    keywords: ["Lime", "Fortress", "Production technology"],
    keywords_ko: ["석회", "산성", "제작기술"]
  },
  {
    id: 103,
    type: "conference",
    title_en: "Research on Paper Material Characteristics of Old Books Published in Late Goryeo and Early Joseon - Focusing on Reliquary Documents of Wooden Amitabha Buddha at Suguksa Temple",
    title_ko: "여말선초 간행 고서적 지질특성 연구 –수국사 목조아미타여래좌상 복장전적 중심으로-",
    authors: "Choi Yun Gwan, Chung Kwang Yong, Choi Tae Ho, Im Jae Hoon",
    authors_ko: "최윤관, 정광용, 최태호, 임재훈",
    event: "The 49th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제49회 춘계학술대회",
    year: 2019,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Research on paper material characteristics of old books from late Goryeo period.",
    summary_ko: "여말선초 고서적의 지질특성 연구.",
    link: "",
    keywords: ["Old books", "Paper material", "Reliquary documents"],
    keywords_ko: ["고서적", "종이", "복장전적"]
  },
  {
    id: 104,
    type: "conference",
    title_en: "Ancient Iron Artifact Production Technology Reflected in Iron Wares Excavated from Songjeol-dong, Cheongju",
    title_ko: "청주 송절동 출토 철기에 나타난 고대철기 제작기술",
    authors: "Kim Min Hee, Jang Jun Hyeok, Bae Go Woon, Chung Kwang Yong",
    authors_ko: "김민희, 장준혁, 배고운, 정광용",
    event: "The 49th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제49회 춘계학술대회",
    year: 2019,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Research on ancient iron production technology from excavated artifacts.",
    summary_ko: "고대철기 제작기술 연구.",
    link: "",
    keywords: ["Iron artifacts", "Production technology", "Ancient period"],
    keywords_ko: ["철기", "제작기술", "고대"]
  },
  {
    id: 105,
    type: "conference",
    title_en: "Chemical Characteristics of Glass Beads Excavated from Haksan-ri Site, Cheongdo",
    title_ko: "청도 학산리 유적 출토 유리구술의 화학적 특성",
    authors: "Min Sang A, Lee So Yeon, Bae Go Woon, Chung Kwang Yong",
    authors_ko: "민상아, 이소연, 배고운, 정광용",
    event: "The 49th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제49회 춘계학술대회",
    year: 2019,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Research on chemical characteristics of glass beads.",
    summary_ko: "유리구술의 화학적 특성 연구.",
    link: "",
    keywords: ["Glass beads", "Chemical analysis", "Ancient artifacts"],
    keywords_ko: ["유리구술", "화학적특성", "유적"]
  },
  {
    id: 106,
    type: "conference",
    title_en: "Research on Physical Property Changes of Restoration Material for Cultural Heritage Conservation Treatment According to Inorganic Filler Content Ratio",
    title_ko: "무기충전제의 함량비에 따른 문화재 보존처리용 복원제의 물성 변화 연구",
    authors: "Lee So Yeon, Lee Sang Ok, Chung Kwang Yong",
    authors_ko: "이소연, 이상옥, 정광용",
    event: "The 49th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제49회 춘계학술대회",
    year: 2019,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Research on physical property changes of restoration material.",
    summary_ko: "무기충전제 함량에 따른 복원제의 물성 변화 연구.",
    link: "",
    keywords: ["Restoration material", "Inorganic filler", "Physical properties"],
    keywords_ko: ["복원제", "무기충전제", "물성"]
  },
  {
    id: 107,
    type: "conference",
    title_en: "Research on Lime Raw Material and Hydration Method in Joseon Dynasty",
    title_ko: "조선시대 석회 원료 및 수화방법 연구",
    authors: "Lee Sang Ok, Chung Kwang Yong",
    authors_ko: "이상옥, 정광용",
    event: "Spring Conference of the Architectural History Association of Korea",
    event_ko: "한국건축역사학회 2019년 춘계학술발표대회",
    year: 2019,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Research on lime raw material and hydration method used in Joseon dynasty.",
    summary_ko: "조선시대 석회의 원료 및 수화방법 연구.",
    link: "",
    keywords: ["Lime", "Joseon dynasty", "Hydration method"],
    keywords_ko: ["석회", "조선시대", "수화"]
  },
  {
    id: 108,
    type: "conference",
    title_en: "Research Direction of Bangudae Roof Tiles through Scientific Analysis",
    title_ko: "과학적 분석을 통한 경주 월성 기와의 향후 연구방향",
    authors: "Lee Sang Ok",
    authors_ko: "이상옥",
    event: "The 16th Regular Academic Conference of the Korean Tile Society",
    event_ko: "제16회 한국기와학회 정기학술대회",
    year: 2019,
    presentation_type: "Keynote Presentation",
    presentation_type_ko: "주제발표",
    summary_en: "Research direction and scientific analysis of roof tiles.",
    summary_ko: "월성 기와의 과학적 분석과 향후 연구방향.",
    link: "",
    keywords: ["Roof tiles", "Scientific analysis", "Research direction"],
    keywords_ko: ["기와", "과학적분석", "연구방향"]
  },
  {
    id: 109,
    type: "conference",
    title_en: "Research on Physical Characteristics of Filling Material for Wooden Cultural Heritage Restoration",
    title_ko: "목재문화재 복원용 충진제의 물리적 특성 연구",
    authors: "Jang Jin Young, Chung Kwang Yong",
    authors_ko: "장진영, 정광용",
    event: "The 48th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제48회 추계학술대회",
    year: 2018,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Research on physical characteristics of filling material for wood restoration.",
    summary_ko: "목재문화재 복원용 충진제의 물리적 특성 연구.",
    link: "",
    keywords: ["Wood restoration", "Filling material", "Physical characteristics"],
    keywords_ko: ["목재", "충진제", "물리적특성"]
  },
  {
    id: 110,
    type: "conference",
    title_en: "Pigments of Tomb Mural in Donghachong of Neungsan-ri Ancient Tomb Group, Buyeo",
    title_ko: "부여 능산리고분군 동하총 고분벽화의 채색안료",
    authors: "Nam Do Hyeon, Lee Sang Ok, Jang Jun Hyeok, Chung Kwang Yong",
    authors_ko: "남도현, 이상옥, 장준혁, 정광용",
    event: "The 48th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제48회 추계학술대회",
    year: 2018,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Analysis of pigments used in ancient tomb wall paintings.",
    summary_ko: "고분벽화의 채색안료 분석.",
    link: "",
    keywords: ["Tomb mural", "Pigments", "Ancient burial"],
    keywords_ko: ["고분벽화", "채색안료", "무덤"]
  },
  {
    id: 111,
    type: "conference",
    title_en: "Characteristics of Corrosion Products of Bronze Artifacts Excavated from Bong-an-ri, Sejong",
    title_ko: "세종 봉안리 출토 청동유물의 부식생성물 특성",
    authors: "Jang Jun Hyeok, Bae Go Woon, Chung Kwang Yong",
    authors_ko: "장준혁, 배고운, 정광용",
    event: "The 48th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제48회 추계학술대회",
    year: 2018,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Research on characteristics of corrosion products on bronze artifacts.",
    summary_ko: "청동유물의 부식생성물 특성 연구.",
    link: "",
    keywords: ["Bronze artifacts", "Corrosion", "Products"],
    keywords_ko: ["청동유물", "부식", "생성물"]
  },
  {
    id: 112,
    type: "conference",
    title_en: "Metallurgical Analysis and Origin Estimation of Bronze Artifacts Excavated from Technopark General Industrial Complex Development Site (Zone 1), Cheongju",
    title_ko: "청주 테크노폴리스 일반산업단지 조성사업부재 내(1지구) 출토 청동유물의 금속학적 분석 및 산지추정",
    authors: "Jang Jun Hyeok, Bae Go Woon, Chung Kwang Yong",
    authors_ko: "장준혁, 배고운, 정광용",
    event: "The 47th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제47회 춘계학술대회",
    year: 2018,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Metallurgical analysis and origin estimation of bronze artifacts.",
    summary_ko: "청동유물의 금속학적 분석 및 산지추정.",
    link: "",
    keywords: ["Bronze artifacts", "Metallurgical analysis", "Origin estimation"],
    keywords_ko: ["청동유물", "금속학", "산지"]
  },
  {
    id: 113,
    type: "conference",
    title_en: "Metallurgical Analysis of Iron Artifacts Excavated from Technopark General Industrial Complex Development Site (Zone 1), Cheongju",
    title_ko: "청주 테크노폴리스 일반산업단지 조성사업부재 내(1지구) 출토 철제유물의 금속학적 분석",
    authors: "Kim Min Hee, Jang Jun Hyeok, Bae Go Woon, Chung Kwang Yong",
    authors_ko: "김민희, 장준혁, 배고운, 정광용",
    event: "The 47th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제47회 춘계학술대회",
    year: 2018,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Metallurgical analysis of iron artifacts.",
    summary_ko: "철제유물의 금속학적 분석.",
    link: "",
    keywords: ["Iron artifacts", "Metallurgical analysis", "Ancient site"],
    keywords_ko: ["철제유물", "금속학", "유적"]
  },
  {
    id: 114,
    type: "conference",
    title_en: "Analysis of Gold Foil Application Technique of Jizang Bodhisattva Statue at Cheongnangsa Temple",
    title_ko: "청량사 지장보살상의 개금기법 분석",
    authors: "Lee So Yeon, Baek Ji Seon, Lee Sang Ok, Chung Kwang Yong",
    authors_ko: "이소연, 백지선, 이상옥, 정광용",
    event: "The 47th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제47회 춘계학술대회",
    year: 2018,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Analysis of gold foil application technique on Buddhist statue.",
    summary_ko: "지장보살상의 개금기법 분석.",
    link: "",
    keywords: ["Gold foil", "Buddhist statue", "Gilding technique"],
    keywords_ko: ["개금", "불상", "금박기법"]
  },
  {
    id: 115,
    type: "conference",
    title_en: "Analysis of Production Techniques of Bronze Buddha Statue at Wat Si Saket Museum",
    title_ko: "왓시사겟 박물관 청동 불상의 제작기법 분석",
    authors: "Kamkon Ping Pongsavanh, Bae Go Woon, Chung Kwang Yong",
    authors_ko: "캄콘 핑퐁사바스, 배고운, 정광용",
    event: "The 47th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제47회 춘계학술대회",
    year: 2018,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Analysis of production techniques of bronze Buddha statue.",
    summary_ko: "청동 불상의 제작기법 분석.",
    link: "",
    keywords: ["Bronze Buddha", "Production technique", "Museum artifact"],
    keywords_ko: ["청동불상", "제작기법", "박물관"]
  },
  {
    id: 116,
    type: "conference",
    title_en: "Analysis of Laterite Production Techniques of Temples in Laos",
    title_ko: "라오스 사원의 라테라이트 제작기법 분석",
    authors: "Chanthica Keokanya, Lee Sang Ok, Chung Kwang Yong",
    authors_ko: "찬티바 깨오칸야, 이상옥, 정광용",
    event: "The 47th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제47회 춘계학술대회",
    year: 2018,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Analysis of laterite production techniques used in Laotian temples.",
    summary_ko: "라오스 사원의 라테라이트 제작기법 분석.",
    link: "",
    keywords: ["Laterite", "Temple construction", "Production technique"],
    keywords_ko: ["라테라이트", "사원", "제작기법"]
  },
  {
    id: 117,
    type: "conference",
    title_en: "Dating Ancient Ceramics Using Partial Destructive Analysis Method",
    title_ko: "부분파괴분석법을 이용한 고대 도자기의 연대결정",
    authors: "Kim Myeong Jin, Chung Kwang Yong, Hong Deok Gyun",
    authors_ko: "김명진, 정광용, 홍덕균",
    event: "The 47th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제47회 춘계학술대회",
    year: 2018,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Research on dating ancient ceramics using destructive analysis.",
    summary_ko: "부분파괴분석법을 이용한 도자기 연대결정.",
    link: "",
    keywords: ["Ancient ceramics", "Dating method", "Destructive analysis"],
    keywords_ko: ["고대도자", "연대결정", "파괴분석"]
  },
  {
    id: 118,
    type: "conference",
    title_en: "Chemical Characteristics of Gold Artifacts Excavated from Western Ancient Tomb Group at Neungsan-ri, Buyeo",
    title_ko: "부여 능산리 서고분군 출토 금제품의 화학적 특성",
    authors: "Nam Goong Hoon, Chung Kwang Yong",
    authors_ko: "남궁훈, 정광용",
    event: "The 46th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제46회 추계학술대회",
    year: 2017,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Research on chemical characteristics of gold artifacts.",
    summary_ko: "능산리 출토 금제품의 화학적 특성 연구.",
    link: "",
    keywords: ["Gold artifacts", "Chemical analysis", "Ancient tomb"],
    keywords_ko: ["금제품", "화학적특성", "고분"]
  },
  {
    id: 119,
    type: "conference",
    title_en: "Analysis of Coloring Technique of Ten Successive Patriarchs Portraits at Tongdosa Temple, Yangsan",
    title_ko: "양산 통도사 역대고승영정 10점의 채색시법 분석",
    authors: "Lee Sang Ok, Choi Yun Gwan, Nam Do Hyeon, Lee Ha Ri, Chung Kwang Yong",
    authors_ko: "이상옥, 최윤관, 남도현, 이하리, 정광용",
    event: "The 46th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제46회 추계학술대회",
    year: 2017,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Analysis of coloring technique used in historical patriarch portraits.",
    summary_ko: "고승영정의 채색시법 분석.",
    link: "",
    keywords: ["Portrait painting", "Coloring technique", "Buddhist art"],
    keywords_ko: ["초상화", "채색시법", "불교미술"]
  },
  {
    id: 120,
    type: "conference",
    title_en: "Analysis of Production Techniques and Origin Estimation of Gilt-bronze Vairocana Buddha Trinity at Youngtapsa Temple, Dangiin",
    title_ko: "당진 영탑사 금동비로자나불삼존좌상 제작기법 분석 및 산지추정",
    authors: "Bae Go Woon, Lee Sang Ok, Nam Goong Hoon, Chung Kwang Yong, Kim Hyo Seop",
    authors_ko: "배고운, 이상옥, 남궁훈, 정광용, 김효섭",
    event: "The 46th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제46회 추계학술대회",
    year: 2017,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Analysis of production techniques and origin estimation of gilt-bronze Buddha.",
    summary_ko: "금동불상의 제작기법 분석 및 산지추정.",
    link: "",
    keywords: ["Gilt-bronze", "Buddha trinity", "Production technique"],
    keywords_ko: ["금동불상", "비로자나", "제작기법"]
  },
  {
    id: 121,
    type: "conference",
    title_en: "Preservation Environment Assessment of Donghachong of Neungsan-ri Ancient Tomb Group, Buyeo",
    title_ko: "부여 능산리고분군 동하총 보존환경평가",
    authors: "Lee Sang Ok, Bae Go Woon, Baek Ji Seon, Nam Goong Hoon, Nam Do Hyeon, Choi Yun Gwan, Chung Kwang Yong",
    authors_ko: "이상옥, 배고운, 백지선, 남궁훈, 남도현, 최윤관, 정광용",
    event: "The 46th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제46회 추계학술대회",
    year: 2017,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Assessment of preservation environment of ancient tomb.",
    summary_ko: "고분의 보존환경 평가.",
    link: "",
    keywords: ["Preservation environment", "Ancient tomb", "Assessment"],
    keywords_ko: ["보존환경", "고분", "평가"]
  },
  {
    id: 122,
    type: "conference",
    title_en: "Analysis of Production Techniques of Kwangdahoe Used for Sword Wearing in Joseon Dynasty",
    title_ko: "조선시대 도검의 패용을 위해 사용된 광다회의 제작기법 분석",
    authors: "Baek Ji Seon, Chung Kwang Yong",
    authors_ko: "백지선, 정광용",
    event: "The 45th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제45회 춘계학술대회",
    year: 2017,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Analysis of production techniques of mineral pigment used for sword decoration.",
    summary_ko: "도검 장식용 광다회의 제작기법 분석.",
    link: "",
    keywords: ["Sword", "Mineral pigment", "Production technique"],
    keywords_ko: ["도검", "광다회", "제작기법"]
  },
  {
    id: 123,
    type: "conference",
    title_en: "Anaerobic Corrosion Characteristics of Copper Alloy Artifacts in Underwater Burial",
    title_ko: "수중 매장 동합금유물의 혐기성 부식 특성",
    authors: "Kim Gyu Bin, Chung Kwang Yong",
    authors_ko: "김규빈, 정광용",
    event: "The 45th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제45회 춘계학술대회",
    year: 2017,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Research on anaerobic corrosion characteristics of underwater copper alloys.",
    summary_ko: "수중 동합금유물의 혐기성 부식 특성 연구.",
    link: "",
    keywords: ["Copper alloy", "Underwater", "Anaerobic corrosion"],
    keywords_ko: ["동합금", "수중", "혐기성부식"]
  },
  {
    id: 124,
    type: "conference",
    title_en: "Analysis of Production Techniques of Three Buddha Statues at Gapsa Temple",
    title_ko: "갑사 소조삼세불 제작기법 분석",
    authors: "Bae Go Woon, Nam Do Hyeon, Lee Ha Ri, Choi Yun Gwan, Chung Kwang Yong, Kim Hyo Seop",
    authors_ko: "배고운, 남도현, 이하리, 최윤관, 정광용, 김효섭",
    event: "The 45th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제45회 춘계학술대회",
    year: 2017,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Analysis of production techniques of clay Buddha trinity statues.",
    summary_ko: "소조삼세불의 제작기법 분석.",
    link: "",
    keywords: ["Clay Buddha", "Trinity", "Production technique"],
    keywords_ko: ["소조불", "삼세불", "제작기법"]
  },
  {
    id: 125,
    type: "conference",
    title_en: "Preservation Environment Analysis of Donghachong of Neungsan-ri Ancient Tomb Group",
    title_ko: "능산리고분군 동하총 보존환경 분석",
    authors: "Nam Goong Hoon, Lee Sang Ok, Bae Go Woon, Baek Ji Seon, Chung Kwang Yong",
    authors_ko: "남궁훈, 이상옥, 배고운, 백지선, 정광용",
    event: "The 45th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제45회 춘계학술대회",
    year: 2017,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Analysis of preservation environment of ancient tomb.",
    summary_ko: "고분의 보존환경 분석.",
    link: "",
    keywords: ["Preservation environment", "Ancient tomb", "Analysis"],
    keywords_ko: ["보존환경", "고분", "분석"]
  },
  {
    id: 126,
    type: "conference",
    title_en: "Non-destructive Analysis for Residual Pigment Mapping of Murals in Donghachong of Neungsan-ri Ancient Tomb Group, Buyeo",
    title_ko: "비파괴분석을 이용한 부여 능산리고분군 동하총 벽화의 잔존안료 Mapping",
    authors: "Lee Sang Ok, Nam Goong Hoon, Chanthica Keokanya, Chung Kwang Yong",
    authors_ko: "이상옥, 남궁훈, Chanthica Keokanya, 정광용",
    event: "The 44th Autumn International Academic Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제44회 추계국제학술대회",
    year: 2016,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Non-destructive analysis for mapping residual pigments in tomb murals.",
    summary_ko: "벽화의 잔존안료 Mapping 분석.",
    link: "",
    keywords: ["Tomb mural", "Pigment mapping", "Non-destructive analysis"],
    keywords_ko: ["고분벽화", "안료", "비파괴분석"]
  },
  {
    id: 127,
    type: "conference",
    title_en: "Research on Restoration and Reproduction of Gilt-bronze Shikli at Ipjeolli, Iksan",
    title_ko: "익산 입점리 금동식리 복원 제작 연구",
    authors: "Kang Min Jung, Lee Hyeon Sang, Chung Kwang Yong",
    authors_ko: "강민정, 이현상, 정광용",
    event: "The 44th Autumn International Academic Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제44회 추계국제학술대회",
    year: 2016,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Research on restoration and reproduction of gilt-bronze artifact.",
    summary_ko: "금동식리의 복원 제작 연구.",
    link: "",
    keywords: ["Gilt-bronze", "Restoration", "Reproduction"],
    keywords_ko: ["금동", "복원", "제작"]
  },
  {
    id: 128,
    type: "conference",
    title_en: "Research on Iron Production Technology System through Iron Material Analysis of Ancient Iron Smelting Site at Saengswe-gol, Gwangyang",
    title_ko: "광양 생쇄골 야철로의 철재 분석을 통한 철 생산 기술체계 연구",
    authors: "Kim Min Jae, Khamkhone Phimvongsavanh, Chung Kwang Yong",
    authors_ko: "김민재, Khamkhone Phimvongsavanh, 정광용",
    event: "The 44th Autumn International Academic Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제44회 추계국제학술대회",
    year: 2016,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Research on iron production technology system through analysis of iron materials.",
    summary_ko: "야철로의 철재 분석을 통한 철 생산 기술 연구.",
    link: "",
    keywords: ["Iron smelting", "Production technology", "Material analysis"],
    keywords_ko: ["야철", "철생산", "재료분석"]
  },
  {
    id: 129,
    type: "conference",
    title_en: "Determination of Archaeological Dose of Ancient Korean Janggo (Drum) Using SAR-TL Method",
    title_ko: "SAR-TL법을 이용한 한국 고대 장고의 고고선량 결정",
    authors: "Choi Jae Won, Chung Kwang Yong, Kim Myeong Jin, Lee Yong Joo, Park Soon Bal",
    authors_ko: "최재원, 정광용, 김명진, 이용주, 박순발",
    event: "The 44th Autumn International Academic Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제44회 추계국제학술대회",
    year: 2016,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Determination of archaeological dose using SAR-TL method.",
    summary_ko: "SAR-TL법을 이용한 고고선량 결정.",
    link: "",
    keywords: ["Archaeological dose", "SAR-TL", "Thermoluminescence dating"],
    keywords_ko: ["고고선량", "SAR-TL", "열형광연대"]
  },
  {
    id: 130,
    type: "conference",
    title_en: "Precise Safety Diagnosis and Weathering Damage Investigation of Five-Story Stone Pagoda at Muryang Temple, Buyeo",
    title_ko: "부여 무량사 오층석탑 정밀안전진단 및 풍화훼손 조사",
    authors: "Lee Ji Won, Park Min Su, Nam Goong Hoon, Chung Kwang Yong",
    authors_ko: "이지원, 박민수, 남궁훈, 정광용",
    event: "The 43rd Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제43회 춘계학술대회",
    year: 2016,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Precise safety diagnosis and weathering damage investigation of stone pagoda.",
    summary_ko: "석탑의 정밀안전진단 및 풍화훼손 조사.",
    link: "",
    keywords: ["Stone pagoda", "Safety diagnosis", "Weathering damage"],
    keywords_ko: ["석탑", "안전진단", "풍화훼손"]
  },
  {
    id: 131,
    type: "conference",
    title_en: "Comparative Metallurgical Research of Iron Ingots from Iron Smelting",
    title_ko: "사철제련 철괴의 금속학적 비교 연구",
    authors: "Han Young Woo, Jang Min Kyeong, Kwon In Cheol, Cho Hyeon Kyeong, Cho Nam Cheol, Chung Kwang Yong",
    authors_ko: "한영우, 장민경, 권인철, 조현경, 조남철, 정광용",
    event: "The 43rd Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제43회 춘계학술대회",
    year: 2016,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Comparative metallurgical research of iron ingots.",
    summary_ko: "사철제련 철괴의 금속학적 비교 연구.",
    link: "",
    keywords: ["Iron ingots", "Iron smelting", "Metallurgical analysis"],
    keywords_ko: ["철괴", "제련", "금속학"]
  },
  {
    id: 132,
    type: "conference",
    title_en: "Scientific Investigation and Preservation Treatment of Wooden Jizang Bodhisattva Trinity and Ten Kings at Jangeonjeon Hall of Ssangbongsa Temple, Hwasun",
    title_ko: "화순 쌍봉사 지장전 목조지장보살삼존상 및 시왕상 과학적 조사 및 보존처리",
    authors: "Nam Goong Hoon, Han Chang Won, Chung Kwang Yong, Kim Yun Joo, Lee Seon Jo",
    authors_ko: "남궁훈, 한창원, 정광용, 김윤주, 이선조",
    event: "The 43rd Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제43회 춘계학술대회",
    year: 2016,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Scientific investigation and preservation treatment of wooden Buddhist statues.",
    summary_ko: "목조불상의 과학적 조사 및 보존처리.",
    link: "",
    keywords: ["Wooden Buddha", "Scientific investigation", "Preservation treatment"],
    keywords_ko: ["목조불상", "과학적조사", "보존처리"]
  },
  {
    id: 133,
    type: "conference",
    title_en: "Production Technique of Iron Artifacts Excavated from Shinbongdong Ancient Tomb Group, Cheongju",
    title_ko: "청주 신봉동 고분군 유적 출토 철제유물의 제작기법",
    authors: "Lee Sang Ok, Baek Ji Seon, Chung Kwang Yong, Lee Byeong Gir",
    authors_ko: "이상옥, 백지선, 정광용, 이병길",
    event: "The 43rd Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제43회 춘계학술대회",
    year: 2016,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Research on production technique of iron artifacts.",
    summary_ko: "철제유물의 제작기법 연구.",
    link: "",
    keywords: ["Iron artifacts", "Production technique", "Ancient tomb"],
    keywords_ko: ["철제유물", "제작기법", "고분군"]
  },
  {
    id: 134,
    type: "conference",
    title_en: "Production Technique and Origin Estimation of Bronze Artifacts Excavated from Sungjuri Site, Boeun",
    title_ko: "보은 성주리유적 출토 청동유물의 제작기법 및 산지추정",
    authors: "Bae Go Woon, Kim Yu Jin, Chung Kwang Yong, Lee Byeong Gir",
    authors_ko: "배고운, 김유진, 정광용, 이병길",
    event: "The 43rd Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제43회 춘계학술대회",
    year: 2016,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Production technique and origin estimation of bronze artifacts.",
    summary_ko: "청동유물의 제작기법 및 산지추정.",
    link: "",
    keywords: ["Bronze artifacts", "Production technique", "Origin"],
    keywords_ko: ["청동유물", "제작기법", "산지"]
  },
  {
    id: 135,
    type: "conference",
    title_en: "Absolute Age Evaluation of OSL Dating Samples from Wolpyeong Site, Suncheon",
    title_ko: "순천 월평 유적 OSL 연대측정 시료에 대한 절대영년도 평가",
    authors: "Choi Jae Won, Lee Yong Joo, Kim Myeong Jin, Lee Gi Gir, Chung Kwang Yong",
    authors_ko: "최재원, 이용주, 김명진, 이기길, 정광용",
    event: "The 43rd Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제43회 춘계학술대회",
    year: 2016,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Absolute age evaluation of OSL dating samples.",
    summary_ko: "OSL 연대측정의 절대영년도 평가.",
    link: "",
    keywords: ["OSL dating", "Absolute age", "Archaeological site"],
    keywords_ko: ["OSL", "연대측정", "절대영년도"]
  },
  {
    id: 136,
    type: "conference",
    title_en: "Research on Restoration of Production Techniques of Ogsek Gyosa (Five-colored Decorative Pattern)",
    title_ko: "오색교사 제작기법복원의 연구",
    authors: "Baek Ji Seon, Chung Kwang Yong",
    authors_ko: "백지선, 정광용",
    event: "The 42nd Autumn International Academic Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제42회 추계국제학술대회",
    year: 2015,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Research on restoration of production techniques of decorative pattern.",
    summary_ko: "오색교사의 제작기법 복원 연구.",
    link: "",
    keywords: ["Decorative pattern", "Production technique", "Restoration"],
    keywords_ko: ["교사", "제작기법", "복원"]
  },
  {
    id: 137,
    type: "conference",
    title_en: "Research on Basic Characteristics and Usage Standards of Modern Danqing Six-color Pigments",
    title_ko: "현대 단청용 장단육색의 기본 특성 및 사용 기준 연구",
    authors: "Kim Eun Ji, Lee Han Hyeong, Han Min Soo, Chung Kwang Yong",
    authors_ko: "김은지, 이한형, 한민수, 정광용",
    event: "The 42nd Autumn International Academic Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제42회 추계국제학술대회",
    year: 2015,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Research on characteristics and usage standards of danqing pigments.",
    summary_ko: "단청용 육색의 기본 특성 및 사용 기준 연구.",
    link: "",
    keywords: ["Danqing", "Pigments", "Six-color"],
    keywords_ko: ["단청", "안료", "육색"]
  },
  {
    id: 138,
    type: "conference",
    title_en: "Research on Surface Layer Corrosion of Classical Coins through Component Analysis",
    title_ko: "고전(古錢)의 성분분석을 통한 표면층 부식 연구",
    authors: "Kim Ga Hyeon, Lee Sang Ok, Chung Kwang Yong",
    authors_ko: "김가현, 이상옥, 정광용",
    event: "The 42nd Autumn International Academic Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제42회 추계국제학술대회",
    year: 2015,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Research on surface layer corrosion of classical coins.",
    summary_ko: "고전의 표면층 부식 연구.",
    link: "",
    keywords: ["Classical coins", "Corrosion", "Component analysis"],
    keywords_ko: ["고전", "부식", "성분분석"]
  },
  {
    id: 139,
    type: "conference",
    title_en: "Physical Property Evaluation of Lime Mortar with Expansive Admixture",
    title_ko: "팽창성 혼화재를 적용한 석회몰탈의 물성평가",
    authors: "Nam Goong Hoon, Lee Ji Won, Chung Kwang Yong",
    authors_ko: "남궁훈, 이지원, 정광용",
    event: "The 42nd Autumn International Academic Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제42회 추계국제학술대회",
    year: 2015,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Physical property evaluation of lime mortar with admixture.",
    summary_ko: "석회몰탈의 물성평가 연구.",
    link: "",
    keywords: ["Lime mortar", "Admixture", "Physical properties"],
    keywords_ko: ["석회몰탈", "혼화재", "물성"]
  },
  {
    id: 140,
    type: "conference",
    title_en: "Archaeological-chemical Characteristics of Roof Tile Fragments Excavated from Jeongrimsa Temple Site",
    title_ko: "정림사지 출토 와편의 고고화학적 특성",
    authors: "Park Min Su, Nam Goong Hoon, Lee Sang Yong, Chung Kwang Yong",
    authors_ko: "박민수, 남궁훈, 이상용, 정광용",
    event: "The 42nd Autumn International Academic Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제42회 추계국제학술대회",
    year: 2015,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Archaeological-chemical characteristics of roof tile fragments.",
    summary_ko: "와편의 고고화학적 특성 연구.",
    link: "",
    keywords: ["Roof tiles", "Archaeological chemistry", "Temple site"],
    keywords_ko: ["와편", "고고화학", "사지"]
  },
  {
    id: 141,
    type: "conference",
    title_en: "Scientific Investigation of Gilded Layer of Wooden Amitabha Buddha Statue at Shimusa Temple",
    title_ko: "심우사 목조아미타불좌상 개금층에 대한 과학적 조사",
    authors: "Kim Gyu Bin, Kim Beom Jun, Kim Yu Jin, Jung Seon Kyeong, Chung Kwang Yong",
    authors_ko: "김규빈, 김범준, 김유진, 정선경, 정광용",
    event: "The 40th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제40회 추계학술대회",
    year: 2014,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Scientific investigation of gilded layer on wooden Buddha statue.",
    summary_ko: "목조불상의 개금층 과학적 조사.",
    link: "",
    keywords: ["Gilded layer", "Wooden Buddha", "Scientific investigation"],
    keywords_ko: ["개금층", "목조불상", "과학적조사"]
  },
  {
    id: 142,
    type: "conference",
    title_en: "Scientific Investigation of Iron Buddha Statue of Medicine Buddha and Iron Buddha Statue of Vairocana at Janggoksa Temple",
    title_ko: "장곡사 철조약사여래좌상 및 철조비로자나불좌상의 과학적 조사",
    authors: "Kim Gyu Bin, Lee Sang Ok, Jung Se Rim, Nam Goong Hoon, Jung Seon Kyeong, Chung Kwang Yong",
    authors_ko: "김규빈, 이상옥, 정세림, 남궁훈, 정선경, 정광용",
    event: "The 40th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제40회 추계학술대회",
    year: 2014,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Scientific investigation of iron Buddhist statues.",
    summary_ko: "철조불상의 과학적 조사.",
    link: "",
    keywords: ["Iron Buddha", "Scientific investigation", "Buddha statues"],
    keywords_ko: ["철조불상", "과학적조사", "약사여래"]
  },
  {
    id: 143,
    type: "conference",
    title_en: "Analysis of Damage Factors of Gilded Layer of Gilt-bronze Maitreya Buddha at Beomjusa Temple, Seoraksan",
    title_ko: "속리산 법주사 금동미륵대불 개금층의 손상요인 분석",
    authors: "Lee Sang Ok, Lee Ji Won, Park Min Su, Bae Go Woon, Chung Kwang Yong",
    authors_ko: "이상옥, 이지원, 박민수, 배고운, 정광용",
    event: "The 40th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제40회 추계학술대회",
    year: 2014,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Analysis of damage factors of gilded layer on Buddha statue.",
    summary_ko: "금동불상의 개금층 손상요인 분석.",
    link: "",
    keywords: ["Gilded layer", "Damage analysis", "Buddha statue"],
    keywords_ko: ["개금층", "손상요인", "불상"]
  },
  {
    id: 144,
    type: "conference",
    title_en: "Research on Conservation Management Plan of Rampart at Namhansanseong Fortress",
    title_ko: "남한산성 여장 보존 관리방안 연구",
    authors: "Chung Kwang Yong, Yang Hee Je, Cho Byeong Young, Lee Wang Ki, Park Min Su, Kim Beom Jun",
    authors_ko: "정광용, 양희제, 조병영, 이왕기, 박민수, 김범준",
    event: "The 38th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제38회 추계학술대회",
    year: 2013,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Research on conservation management plan for fortress rampart.",
    summary_ko: "남한산성 여장의 보존 관리방안 연구.",
    link: "",
    keywords: ["Fortress", "Rampart", "Conservation management"],
    keywords_ko: ["산성", "여장", "보존관리"]
  },
  {
    id: 145,
    type: "conference",
    title_en: "Corrosion Behavior of Bronze Artifacts and Stabilization Treatment Effect Using B.T.A.",
    title_ko: "청동유물의 부식거동과 B.T.A.를 사용한 안정화처리 효과",
    authors: "Bae Go Woon, Park Young Gu, Chung Kwang Yong",
    authors_ko: "배고운, 박영구, 정광용",
    event: "The 38th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제38회 추계학술대회",
    year: 2013,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Research on corrosion behavior and stabilization treatment using B.T.A.",
    summary_ko: "청동유물의 부식거동과 B.T.A. 안정화처리 연구.",
    link: "",
    keywords: ["Bronze artifacts", "Corrosion", "Stabilization treatment"],
    keywords_ko: ["청동유물", "부식", "안정화처리"]
  },
  {
    id: 146,
    type: "conference",
    title_en: "Scientific Investigation of Maitreya Buddha Hanging Scroll at Janggoksa Temple, National Treasure No. 300",
    title_ko: "국보 제300호 장곡사 미륵불괘불탱의 과학적 조사",
    authors: "Park Min Su, Lee Ji Won, Kim Yu Jin, Jung Se Rim, Chung Kwang Yong, Lee Soo Ye",
    authors_ko: "박민수, 이지원, 김유진, 정세림, 정광용, 이수예",
    event: "The 38th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제38회 추계학술대회",
    year: 2013,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Scientific investigation of Buddha hanging scroll.",
    summary_ko: "미륵불괘불탱의 과학적 조사.",
    link: "",
    keywords: ["Buddha scroll", "Hanging scroll", "Scientific investigation"],
    keywords_ko: ["괘불탱", "미륵불", "과학적조사"]
  },
  {
    id: 147,
    type: "conference",
    title_en: "Natural Scientific Analysis of Murals in Medicine Buddha Hall of Kwannyongsa Temple, Changnyeong",
    title_ko: "창녕 관룡사 약사전 벽화에 대한 자연과학적 분석",
    authors: "Kim Min Jae, Kim Eun Ji, Lee Seung Hyeon, Park Chae Rin, Chung Kwang Yong, Lee Soo Ye",
    authors_ko: "김민재, 김은지, 이승현, 박채린, 정광용, 이수예",
    event: "The 38th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제38회 추계학술대회",
    year: 2013,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Natural scientific analysis of temple murals.",
    summary_ko: "약사전 벽화의 과학적 분석.",
    link: "",
    keywords: ["Murals", "Temple hall", "Scientific analysis"],
    keywords_ko: ["벽화", "약사전", "과학적분석"]
  },
  {
    id: 148,
    type: "conference",
    title_en: "Surface Analysis and Damage Evaluation of Gilt-bronze Avalokitesvara Bodhisattva Seated Figure and Pedestal at Daheungsa Temple, Haenam",
    title_ko: "해남 대흥사 금동관음보살좌상 및 좌대의 표면분석 및 손상도 평가",
    authors: "Kim Beom Jun, Park Min Su, Nam Goong Hoon, Kwon Seon Kyeong, Chung Kwang Yong, Park Jin Myeong",
    authors_ko: "김범준, 박민수, 남궁훈, 권선경, 정광용, 박진명",
    event: "The 38th Autumn Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제38회 추계학술대회",
    year: 2013,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Surface analysis and damage evaluation of Buddhist statue.",
    summary_ko: "금동불상의 표면분석 및 손상도 평가.",
    link: "",
    keywords: ["Buddhist statue", "Surface analysis", "Damage evaluation"],
    keywords_ko: ["금동상", "표면분석", "손상도"]
  },
  {
    id: 149,
    type: "conference",
    title_en: "Standardization Research through Scientific Analysis of Traditional Roof Tiles and Bricks",
    title_ko: "전통기와 및 전돌의 과학적 분석을 통한 표준화 연구",
    authors: "Chung Kwang Yong, Lee Sang Ok, Kim Beom Jun, Kim Sung Do, Jung Chun Ho",
    authors_ko: "정광용, 이상옥, 김범준, 김성도, 정춘호",
    event: "The 37th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제37회 춘계학술대회",
    year: 2013,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Standardization research of traditional roof tiles and bricks.",
    summary_ko: "전통기와 및 전돌의 표준화 연구.",
    link: "",
    keywords: ["Roof tiles", "Bricks", "Standardization"],
    keywords_ko: ["기와", "전돌", "표준화"]
  },
  {
    id: 150,
    type: "conference",
    title_en: "Comparative Research on Corrosion Inhibitors for Bronze Artifact Conservation",
    title_ko: "청동유물 보존을 위한 부식억제제 비교 연구",
    authors: "Woo Do Ran, Kim Ki Ho, Chung Kwang Yong, Lee Han Hyeong, Beom Dae Geon",
    authors_ko: "우도란, 김기호, 정광용, 이한형, 범대건",
    event: "The 37th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제37회 춘계학술대회",
    year: 2013,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Comparative research on corrosion inhibitors.",
    summary_ko: "부식억제제의 비교 연구.",
    link: "",
    keywords: ["Corrosion inhibitor", "Bronze artifacts", "Conservation"],
    keywords_ko: ["부식억제제", "청동유물", "보존"]
  },
  {
    id: 151,
    type: "conference",
    title_en: "Physical Characteristic Analysis of Bricks Used in Rampart of Namhansanseong Fortress",
    title_ko: "남한산성 여장에 사용된 전돌의 물리적 특성 분석",
    authors: "Cho Byeong Young, Noh Sang Gyun, Lee Sang Jin, Yang Hee Je, Chung Kwang Yong",
    authors_ko: "조병영, 노상균, 이상진, 양희제, 정광용",
    event: "The 37th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제37회 춘계학술대회",
    year: 2013,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Physical characteristic analysis of bricks.",
    summary_ko: "전돌의 물리적 특성 분석.",
    link: "",
    keywords: ["Bricks", "Fortress", "Physical characteristics"],
    keywords_ko: ["전돌", "산성", "물리적특성"]
  },
  {
    id: 152,
    type: "conference",
    title_en: "Natural Scientific Analysis of Ten Kings Statues and Their Attendants at Heungguksa Temple",
    title_ko: "흥국사 무사전 시왕상 및 권속 일괄에 대한 자연과학적 분석",
    authors: "Kim Min Jae, Lee Sang Ok, Lee Ji Won, Park Min Su, Chung Kwang Yong",
    authors_ko: "김민재, 이상옥, 이지원, 박민수, 정광용",
    event: "The 37th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제37회 춘계학술대회",
    year: 2013,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Natural scientific analysis of Buddhist statues.",
    summary_ko: "시왕상의 과학적 분석.",
    link: "",
    keywords: ["Ten Kings", "Buddhist statues", "Scientific analysis"],
    keywords_ko: ["시왕상", "불상", "과학적분석"]
  },
  {
    id: 153,
    type: "conference",
    title_en: "Research on Conservation Management Plan of Rampart at Namhansanseong Fortress (2)",
    title_ko: "남한산성 여장 보존 관리방안 연구 (2)",
    authors: "Chung Kwang Yong, Yang Hee Je, Cho Byeong Young, Lee Wang Ki, Kim Beom Jun, Park Min Su",
    authors_ko: "정광용, 양희제, 조병영, 이왕기, 김범준, 박민수",
    event: "Autumn Academic Conference of the Architectural History Association of Korea",
    event_ko: "(사)한국건축역사학회 2013년도 추계학술발표대회",
    year: 2013,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Research on conservation management plan for fortress (2).",
    summary_ko: "남한산성 여장의 보존관리방안 연구 (2).",
    link: "",
    keywords: ["Fortress", "Rampart", "Conservation management"],
    keywords_ko: ["산성", "여장", "보존관리"]
  },
  {
    id: 154,
    type: "conference",
    title_en: "Research on Applicability of Nano-ceramic Coating for Preservation of Outdoor Metal Cultural Heritage",
    title_ko: "옥외 금속문화재의 보존을 위한 나노세라믹코팅제의 적용성 연구",
    authors: "Beom Dae Geon, Chung Kwang Yong, Woo Do Ran",
    authors_ko: "범대건, 정광용, 우도란",
    event: "The 36th Autumn International Academic Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제36회 추계국제학술대회",
    year: 2012,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Research on applicability of nano-ceramic coating.",
    summary_ko: "나노세라믹코팅제의 적용성 연구.",
    link: "",
    keywords: ["Nano-ceramic coating", "Metal heritage", "Preservation"],
    keywords_ko: ["나노세라믹", "금속문화재", "보존"]
  },
  {
    id: 155,
    type: "conference",
    title_en: "Comparative Research on Physical and Chemical Characteristics of Traditional Roof Tiles and Bricks by Era",
    title_ko: "시대별 전통기와 및 전돌의 물리·화학적 특성 비교 연구",
    authors: "Chung Kwang Yong, Lee Sang Ok, Im Ki Ho",
    authors_ko: "정광용, 이상옥, 임기호",
    event: "The 36th Autumn International Academic Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제36회 추계국제학술대회",
    year: 2012,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Comparative research on characteristics of traditional materials.",
    summary_ko: "시대별 기와 및 전돌의 물리화학적 특성 비교.",
    link: "",
    keywords: ["Roof tiles", "Bricks", "Physical-chemical analysis"],
    keywords_ko: ["기와", "전돌", "물리화학"]
  },
  {
    id: 156,
    type: "conference",
    title_en: "Comparative Research on Reinforcement Treatment Agents Through Electrochemical Forced Deterioration of Bronze Artifacts",
    title_ko: "청동유물의 전기화학적 강제 열화를 통한 강화처리제 비교 연구",
    authors: "Chung Kwang Yong, Kim Dong Gyu",
    authors_ko: "정광용, 김동규",
    event: "The 36th Autumn International Academic Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제36회 추계국제학술대회",
    year: 2012,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Comparative research on reinforcement treatment agents.",
    summary_ko: "강화처리제의 비교 연구.",
    link: "",
    keywords: ["Bronze artifacts", "Reinforcement treatment", "Electrochemical"],
    keywords_ko: ["청동유물", "강화처리", "전기화학"]
  },
  {
    id: 157,
    type: "conference",
    title_en: "Research on Physical Property Changes of Roof Tiles According to Firing Temperature by Manufacturing Process",
    title_ko: "기와의 제작공정별 소성온도에 따른 물성변화 연구",
    authors: "Chung Kwang Yong, Lee Sang Ok, Seol A Hyeon",
    authors_ko: "정광용, 이상옥, 설아현",
    event: "The 36th Autumn International Academic Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제36회 추계국제학술대회",
    year: 2012,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Research on physical property changes of roof tiles.",
    summary_ko: "기와의 소성온도에 따른 물성변화 연구.",
    link: "",
    keywords: ["Roof tiles", "Firing temperature", "Physical properties"],
    keywords_ko: ["기와", "소성온도", "물성"]
  },
  {
    id: 158,
    type: "conference",
    title_en: "Research on Effect of Firing Temperature and Admixture Content on Physical Properties of Ongwan (Ancient Jar)",
    title_ko: "소성온도와 혼입물 함량이 옹관의 물성에 주는 영향에 관한 연구",
    authors: "Kim Gyu Bin, Chung Kwang Yong",
    authors_ko: "김규빈, 정광용",
    event: "The 36th Autumn International Academic Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제36회 추계국제학술대회",
    year: 2012,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Research on effect of firing temperature and admixture on ancient jar.",
    summary_ko: "옹관의 물성에 미치는 요인 연구.",
    link: "",
    keywords: ["Ancient jar", "Firing temperature", "Admixture"],
    keywords_ko: ["옹관", "소성온도", "혼입물"]
  },
  {
    id: 159,
    type: "conference",
    title_en: "Research on Metal Coating Agents and Corrosion Resistance for Preservation of Outdoor Artworks Made of 2PC Al Can",
    title_ko: "2PC Al can으로 만든 야외작품 보존을 위한 금속 코팅제 및 그에 따른 내식성 연구",
    authors: "Kim Eun Ji, Chung Kwang Yong",
    authors_ko: "김은지, 정광용",
    event: "The 36th Autumn International Academic Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제36회 추계국제학술대회",
    year: 2012,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Research on metal coating agents and corrosion resistance.",
    summary_ko: "금속 코팅제의 내식성 연구.",
    link: "",
    keywords: ["Metal coating", "Corrosion resistance", "Outdoor artwork"],
    keywords_ko: ["금속코팅", "내식성", "야외작품"]
  },
  {
    id: 160,
    type: "conference",
    title_en: "Research on Activation Plan of Traditional Handmade Roof Tiles",
    title_ko: "전통수제기와 활성화 방안 연구",
    authors: "Chung Kwang Yong, Lee Sang Ok, Jang Heon Deok",
    authors_ko: "정광용, 이상옥, 장헌덕",
    event: "Autumn Academic Conference of the Architectural History Association of Korea",
    event_ko: "(사)한국건축역사학회 2012년도 추계학술발표대회",
    year: 2012,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Research on activation plan of traditional handmade roof tiles.",
    summary_ko: "전통수제기와의 활성화 방안 연구.",
    link: "",
    keywords: ["Roof tiles", "Traditional crafts", "Activation"],
    keywords_ko: ["기와", "전통공예", "활성화"]
  },
  {
    id: 161,
    type: "conference",
    title_en: "Research on Conservation Management Plan of Rampart at Namhansanseong Fortress (1)",
    title_ko: "남한산성 여장 보존 관리방안 연구 (1)",
    authors: "Chung Kwang Yong, Yang Hee Je, Cho Byeong Young, Lee Wang Ki, Lee Seon",
    authors_ko: "정광용, 양희제, 조병영, 이왕기, 이선",
    event: "Autumn Academic Conference of the Architectural History Association of Korea",
    event_ko: "(사)한국건축역사학회 2012년도 추계학술발표대회",
    year: 2012,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Research on conservation management plan of rampart (1).",
    summary_ko: "남한산성 여장의 보존관리 방안 연구 (1).",
    link: "",
    keywords: ["Fortress", "Rampart", "Conservation management"],
    keywords_ko: ["산성", "여장", "보존관리"]
  },
  {
    id: 162,
    type: "conference",
    title_en: "Research on Clarification of Efflorescence Phenomenon in Bricks",
    title_ko: "塼의 백화현상 규명 연구",
    authors: "Chung Kwang Yong, Cha Seon Ho, Kang Won Gu",
    authors_ko: "정광용, 차선호, 강원구",
    event: "Autumn Academic Conference of the Architectural History Association of Korea",
    event_ko: "(사)한국건축역사학회 2011년도 추계학술발표대회",
    year: 2011,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Research on efflorescence phenomenon in bricks.",
    summary_ko: "벽돌의 백화현상 규명 연구.",
    link: "",
    keywords: ["Bricks", "Efflorescence", "Deterioration"],
    keywords_ko: ["벽돌", "백화현상", "열화"]
  },
  {
    id: 163,
    type: "conference",
    title_en: "Research on Production Method of Traditional Roof Tiles for Sungnyemun Gate Restoration",
    title_ko: "숭례문 복구용 전통기와 제작방안 연구",
    authors: "Chung Kwang Yong, Lee Ji Won, Kim Beom Jun, Park Seon Hyeong, Kang Won Gu",
    authors_ko: "정광용, 이지원, 김범준, 박선형, 강원구",
    event: "The 32nd Autumn International Academic Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제32회 추계국제학술대회",
    year: 2010,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Research on production method of traditional roof tiles.",
    summary_ko: "숭례문 복구용 전통기와 제작방안 연구.",
    link: "",
    keywords: ["Roof tiles", "Restoration", "Production method"],
    keywords_ko: ["기와", "복구", "제작"]
  },
  {
    id: 164,
    type: "conference",
    title_en: "Research on Production Technique and Origin of Bronze Wares Excavated from Dongchon Site, Sunchang",
    title_ko: "순창 동촌유적 출토 청동기의 제작기법 및 산지연구",
    authors: "Bae Go Woon, Park Min Su, Chung Kwang Yong, Cho Dae Hyeon",
    authors_ko: "배고운, 박민수, 정광용, 조대현",
    event: "The 32nd Autumn International Academic Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제32회 추계국제학술대회",
    year: 2010,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Research on production technique and origin of bronze wares.",
    summary_ko: "청동기의 제작기법 및 산지 연구.",
    link: "",
    keywords: ["Bronze wares", "Production technique", "Archaeological site"],
    keywords_ko: ["청동기", "제작기법", "산지"]
  },
  {
    id: 165,
    type: "conference",
    title_en: "Research on Characteristics of Organic Products According to Manufacturing Method",
    title_ko: "제작방식에 따른 유기제품의 특성연구",
    authors: "Woo Ye Jin, Kim Man Hoe, Baek Su Jung, Chung Kwang Yong",
    authors_ko: "우예진, 김만회, 백수정, 정광용",
    event: "The 32nd Autumn International Academic Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제32회 추계국제학술대회",
    year: 2010,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Research on characteristics of organic products.",
    summary_ko: "유기제품의 특성 연구.",
    link: "",
    keywords: ["Organic products", "Manufacturing method", "Characteristics"],
    keywords_ko: ["유기제품", "제작방식", "특성"]
  },
  {
    id: 166,
    type: "conference",
    title_en: "Production of Baekryeon-gang Using Traditional Iron Smelting Method",
    title_ko: "전통제련법을 이용한 백련강 제조",
    authors: "Chung Kwang Yong, Lee Eun Cheol, Lee Hyeon Sang, Lee Tae Young, Baek Gil Hwan, Woo Do Ran",
    authors_ko: "정광용, 이은철, 이현상, 이태영, 백길환, 우도란",
    event: "The 29th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제29회 춘계학술대회",
    year: 2009,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Production of iron steel using traditional smelting method.",
    summary_ko: "전통제련법을 이용한 백련강 제조.",
    link: "",
    keywords: ["Iron smelting", "Traditional method", "Steel production"],
    keywords_ko: ["제련", "전통방법", "백련강"]
  },
  {
    id: 167,
    type: "conference",
    title_en: "Restoration and Production Technology of Bipatype Bronze Sword from Songguri Site",
    title_ko: "송국리 비파형동검의 복원제작기술",
    authors: "Kim Beom Jun, Song Jung Il, Lee Ji Won, Lee Ju Hyeon, Chung Kwang Yong",
    authors_ko: "김범준, 송정일, 이지원, 이주현, 정광용",
    event: "The 29th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제29회 춘계학술대회",
    year: 2009,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Restoration and production technology of bronze sword.",
    summary_ko: "비파형동검의 복원제작기술 연구.",
    link: "",
    keywords: ["Bronze sword", "Restoration", "Production technology"],
    keywords_ko: ["동검", "복원", "제작기술"]
  },
  {
    id: 168,
    type: "conference",
    title_en: "Non-destructive Analysis Method for Damage Diagnosis of Outdoor Metal Cultural Heritage",
    title_ko: "비파괴분석에 의한 옥외 금속문화재의 손상진단 방법",
    authors: "Beom Dae Geon, Lee Soo Hee, Park Min Su, Chung Kwang Yong",
    authors_ko: "범대건, 이수희, 박민수, 정광용",
    event: "The 29th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제29회 춘계학술대회",
    year: 2009,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Non-destructive analysis method for damage diagnosis.",
    summary_ko: "비파괴분석을 이용한 손상진단 방법.",
    link: "",
    keywords: ["Non-destructive analysis", "Damage diagnosis", "Metal heritage"],
    keywords_ko: ["비파괴분석", "손상진단", "금속문화재"]
  },
  {
    id: 169,
    type: "conference",
    title_en: "Component Composition of Some Glass Products Excavated from Stupa of Manboksa Temple Site, Namwon",
    title_ko: "남원 만복사지 석탑 출토 일부 유리제품의 성분조성",
    authors: "Jung Young Dong, Chung Kwang Yong, Heo Woo Young, Kang Hyeong Tae",
    authors_ko: "정영동, 정광용, 허우영, 강형태",
    event: "The 27th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제27회 춘계학술대회",
    year: 2008,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Component composition of glass products from archaeological site.",
    summary_ko: "유리제품의 성분조성 분석.",
    link: "",
    keywords: ["Glass products", "Component analysis", "Temple site"],
    keywords_ko: ["유리제품", "성분조성", "사지"]
  },
  {
    id: 170,
    type: "conference",
    title_en: "Scientific Analysis of Metal Ornaments of Seated Maitreya Bodhisattva Stone Statue at Gwanghoksa Temple",
    title_ko: "관촉사 석조미륵보살입상 금속장식품의 과학적 분석",
    authors: "Chung Kwang Yong, Kim Seok Deok, Baek Gil Hwan, Beom Dae Geon",
    authors_ko: "정광용, 김석덕, 백길환, 범대건",
    event: "The 27th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제27회 춘계학술대회",
    year: 2008,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Scientific analysis of metal ornaments on stone Buddha statue.",
    summary_ko: "금속장식품의 과학적 분석.",
    link: "",
    keywords: ["Metal ornaments", "Stone Buddha", "Scientific analysis"],
    keywords_ko: ["금속장식", "석조상", "과학적분석"]
  },
  {
    id: 171,
    type: "conference",
    title_en: "Restoration and Production Technology of Bronze Age Pottery",
    title_ko: "청동기 토기의 복원제작기술",
    authors: "Chung Kwang Yong, Kang Tae Chun",
    authors_ko: "정광용, 강태춘",
    event: "The 27th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제27회 춘계학술대회",
    year: 2008,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Restoration and production technology of Bronze Age pottery.",
    summary_ko: "청동기 토기의 복원제작기술 연구.",
    link: "",
    keywords: ["Bronze Age pottery", "Restoration", "Production technology"],
    keywords_ko: ["청동기토기", "복원", "제작기술"]
  },
  {
    id: 172,
    type: "conference",
    title_en: "Research on Restoration and Production Technology of Bronze Age Mirror with Fine Patterns",
    title_ko: "청동기 잔무늬거울의 복원제작기술연구",
    authors: "Yoon Yong Hyeon, Chung Kwang Yong",
    authors_ko: "윤용현, 정광용",
    event: "The 27th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제27회 춘계학술대회",
    year: 2008,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Research on restoration and production technology of fine-patterned mirror.",
    summary_ko: "잔무늬거울의 복원제작기술 연구.",
    link: "",
    keywords: ["Bronze mirror", "Fine patterns", "Restoration technology"],
    keywords_ko: ["거울", "잔무늬", "복원기술"]
  },
  {
    id: 173,
    type: "conference",
    title_en: "Research on Standardization of Surface Contamination Removal Techniques for Bronze Artifacts",
    title_ko: "청동유물의 표면 이물질 제거기법에 대한 표준화 연구",
    authors: "Chung Kwang Yong, Lee Su Hee, Lee Byeong Gil, Baek Gil Hwan",
    authors_ko: "정광용, 이수희, 이병길, 백길환",
    event: "The 26th Autumn Academic Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제26회 추계학술대회",
    year: 2007,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Research on standardization of surface contamination removal techniques.",
    summary_ko: "표면 이물질 제거기법의 표준화 연구.",
    link: "",
    keywords: ["Bronze artifacts", "Surface cleaning", "Standardization"],
    keywords_ko: ["청동유물", "표면제거", "표준화"]
  },
  {
    id: 174,
    type: "conference",
    title_en: "Research on Surface Contamination Removal Methods for Gilt-Bronze Artifacts",
    title_ko: "금동유물의 표면 이물질 제거방법 연구",
    authors: "Chung Kwang Yong, Lee Su Hee, Jung Se Rim, Beom Dae Geon",
    authors_ko: "정광용, 이수희, 정세림, 범대건",
    event: "The 26th Autumn Academic Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제26회 추계학술대회",
    year: 2007,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Research on surface contamination removal methods for gilt-bronze.",
    summary_ko: "금동유물의 표면 이물질 제거방법 연구.",
    link: "",
    keywords: ["Gilt-bronze", "Surface cleaning", "Conservation"],
    keywords_ko: ["금동유물", "표면제거", "보존처리"]
  },
  {
    id: 175,
    type: "conference",
    title_en: "Metallurgical Study of 'Qin Wang' Auspicious Beast Patterned Mirror",
    title_ko: "「秦王」 瑞獸文鏡의 금속학적 고찰",
    authors: "Chung Kwang Yong, Cho Joong Sang, Lee Byeong Gil, Jang Heon Deok",
    authors_ko: "정광용, 조중상, 이병길, 장헌덕",
    event: "The 25th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제25회 춘계학술대회",
    year: 2007,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Metallurgical study of auspicious beast patterned mirror.",
    summary_ko: "瑞獸文鏡의 금속학적 분석.",
    link: "",
    keywords: ["Mirror", "Auspicious beast pattern", "Metallurgy"],
    keywords_ko: ["거울", "서수문", "금속학"]
  },
  {
    id: 176,
    type: "conference",
    title_en: "Scientific Analysis of Multi-Knobbed Mirror",
    title_ko: "다뉴세문경의 과학적 분석",
    authors: "Chung Kwang Yong, Jang Jong Min, Jung Se Rim, Park Tae Woo",
    authors_ko: "정광용, 장종민, 정세림, 박태우",
    event: "The 25th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제25회 춘계학술대회",
    year: 2007,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Scientific analysis of multi-knobbed mirror.",
    summary_ko: "다뉴세문경의 과학적 분석.",
    link: "",
    keywords: ["Multi-knobbed mirror", "Scientific analysis", "Bronze"],
    keywords_ko: ["다뉴세문경", "과학분석", "청동"]
  },
  {
    id: 177,
    type: "conference",
    title_en: "Research on Manufacturing Process of Iron Age Artifacts from Gyeongju Region",
    title_ko: "경주지역 철기유물의 제조과정 연구 (고대 철기의 과학적 분석에 의한 기술체계)",
    authors: "Jung Young Dong, Chung Kwang Yong, Jung Won Seob",
    authors_ko: "정영동, 정광용, 정원섭",
    event: "The 25th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제25회 춘계학술대회",
    year: 2007,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Research on manufacturing process of iron artifacts.",
    summary_ko: "경주지역 철기유물의 제조과정 연구.",
    link: "",
    keywords: ["Iron artifacts", "Manufacturing process", "Gyeongju region"],
    keywords_ko: ["철기유물", "제조과정", "경주지역"]
  },
  {
    id: 178,
    type: "conference",
    title_en: "Research on Component Composition and Origin of Bronze Artifacts from Andong Okdong Site",
    title_ko: "안동 옥동유적 청동기의 성분조성 및 산지 연구 (안동유적 청동유물의 과학적 분석)",
    authors: "Chung Kwang Yong, Lee Ju Hyeon, Lee Hyeon Sang",
    authors_ko: "정광용, 이주현, 이현상",
    event: "The 25th Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제25회 춘계학술대회",
    year: 2007,
    presentation_type: "Oral Presentation",
    presentation_type_ko: "구두발표",
    summary_en: "Research on component composition and origin of bronze artifacts.",
    summary_ko: "청동기의 성분조성 및 산지 연구.",
    link: "",
    keywords: ["Bronze artifacts", "Component composition", "Origin analysis"],
    keywords_ko: ["청동기", "성분조성", "산지분석"]
  },
  {
    id: 179,
    type: "conference",
    title_en: "Production Technique of Baekje Gilt-Bronze Crown from Bujangni Site, Seosan",
    title_ko: "서산 부장리 백제 금동관모의 제작기술",
    authors: "Chung Kwang Yong, Lee Hoon, Lee Su Hee, Lee Ju Hyeon, Yu Dae Young",
    authors_ko: "정광용, 이훈, 이수희, 이주현, 유대영",
    event: "The 24th Autumn Academic Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제24회 추계학술대회",
    year: 2006,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Production technique of Baekje gilt-bronze crown.",
    summary_ko: "백제 금동관모의 제작기술.",
    link: "",
    keywords: ["Baekje", "Gilt-bronze crown", "Production technique"],
    keywords_ko: ["백제", "금동관모", "제작기술"]
  },
  {
    id: 180,
    type: "conference",
    title_en: "Development of Restoration Technology for Ring-Pommel Sword from Suchonni Site",
    title_ko: "수촌리유적 환두대도의 복원기술 개발",
    authors: "Chung Kwang Yong, Kang Dae Il, Jung Dong Chan, Yoon Yong Hyeon, Lee Hyeon Sang",
    authors_ko: "정광용, 강대일, 정동찬, 윤용현, 이현상",
    event: "The 24th Autumn Academic Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제24회 추계학술대회",
    year: 2006,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Development of restoration technology for ring-pommel sword.",
    summary_ko: "환두대도의 복원기술 개발.",
    link: "",
    keywords: ["Ring-pommel sword", "Restoration technology", "Archaeological artifact"],
    keywords_ko: ["환두대도", "복원기술", "유물"]
  },
  {
    id: 181,
    type: "conference",
    title_en: "Conservation and Restoration of White Ceramic Chariot Ornaments from Bujangni Site, Seosan",
    title_ko: "서산 부장리유적 백체 초두의 보존처리",
    authors: "Chung Kwang Yong, Song Hyeon Joung, Lee Su Hee, Im Se Jin, Son Kyung Jin, Baek Gil Hwan",
    authors_ko: "정광용, 송현정, 이수희, 임세진, 손경진, 백길환",
    event: "The 24th Autumn Academic Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제24회 추계학술대회",
    year: 2006,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Conservation and restoration of ceramic chariot ornaments.",
    summary_ko: "백체 초두의 보존처리.",
    link: "",
    keywords: ["Ceramic ornaments", "Chariot fittings", "Conservation"],
    keywords_ko: ["초두", "도자기", "보존처리"]
  },
  {
    id: 182,
    type: "conference",
    title_en: "Scientific Analysis of Iron Buddha Seated Statue at Baegunam",
    title_ko: "백운암 철불좌상의 과학적 분석",
    authors: "Chung Kwang Yong, Jung Hee Won, Park Ji Hye, Shin Joong Mi",
    authors_ko: "정광용, 정희원, 박지혜, 신중미",
    event: "The 23rd Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제23회 춘계학술대회",
    year: 2006,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Scientific analysis of iron Buddha seated statue.",
    summary_ko: "철불좌상의 과학적 분석.",
    link: "",
    keywords: ["Iron Buddha", "Scientific analysis", "Seated statue"],
    keywords_ko: ["철불", "과학분석", "좌상"]
  },
  {
    id: 183,
    type: "conference",
    title_en: "Scientific Analysis of Artifacts Excavated from Busosan Fortress",
    title_ko: "부소산성 출토유물의 과학적 분석",
    authors: "Chung Kwang Yong, Shin Joong Mi, Jung Se Rim",
    authors_ko: "정광용, 신중미, 정세림",
    event: "The 23rd Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제23회 춘계학술대회",
    year: 2006,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Scientific analysis of artifacts from Busosan Fortress.",
    summary_ko: "부소산성 출토유물의 과학적 분석.",
    link: "",
    keywords: ["Fortress", "Artifacts", "Scientific analysis"],
    keywords_ko: ["산성", "출토유물", "과학분석"]
  },
  {
    id: 184,
    type: "conference",
    title_en: "Production Technology of Iron Bit from Eunnamni Site",
    title_ko: "언남리유적 철제재갈의 제작기술",
    authors: "Chung Kwang Yong, Lee Su Hee, Beom Dae Geon",
    authors_ko: "정광용, 이수희, 범대건",
    event: "The 23rd Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제23회 춘계학술대회",
    year: 2006,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Production technology of iron bit.",
    summary_ko: "철제재갈의 제작기술.",
    link: "",
    keywords: ["Iron bit", "Horse equipment", "Production technology"],
    keywords_ko: ["재갈", "철제", "제작기술"]
  },
  {
    id: 185,
    type: "conference",
    title_en: "Scientific Analysis of Bronze Bell from Beophwasa Temple Site, Wando",
    title_ko: "완도(莞島) 법화사지(法華寺地) 동종(銅鐘)의 과학적 분석",
    authors: "Kang Hyeong Tae, Cho Nam Chul, Chung Kwang Yong",
    authors_ko: "강형태, 조남철, 정광용",
    event: "The 23rd Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제23회 춘계학술대회",
    year: 2006,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Scientific analysis of bronze bell from temple site.",
    summary_ko: "동종의 과학적 분석.",
    link: "",
    keywords: ["Bronze bell", "Temple site", "Scientific analysis"],
    keywords_ko: ["동종", "사지", "과학분석"]
  },
  {
    id: 186,
    type: "conference",
    title_en: "Absolute Dating of Gangmun-dong Site, Gangneung - Radiocarbon and Thermoluminescence Dating",
    title_ko: "강릉 강문동 유적의 절대연대측정 –방사성탄소연대 및 열발광연대-",
    authors: "Kang Hyeong Tae, Chung Kwang Yong",
    authors_ko: "강형태, 정광용",
    event: "The 22nd Autumn Academic Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제22회 추계학술대회",
    year: 2005,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Absolute dating of archaeological site using multiple methods.",
    summary_ko: "방사성탄소연대 및 열발광연대 측정.",
    link: "",
    keywords: ["Absolute dating", "Radiocarbon dating", "Thermoluminescence"],
    keywords_ko: ["절대연대", "방사성탄소", "열발광"]
  },
  {
    id: 187,
    type: "conference",
    title_en: "Classification Research of Korean Peninsula Obsidian Using Sr Isotope Ratio",
    title_ko: "Sr 동위원소비를 이용한 한반도 흑요석의 분류 연구",
    authors: "Cho Nam Chul, Kang Hyeong Tae, Chung Kwang Yong",
    authors_ko: "조남철, 강형태, 정광용",
    event: "The 22nd Autumn Academic Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제22회 추계학술대회",
    year: 2005,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Classification of obsidian using Sr isotope ratio analysis.",
    summary_ko: "Sr 동위원소비를 이용한 흑요석 분류.",
    link: "",
    keywords: ["Obsidian", "Sr isotope ratio", "Classification"],
    keywords_ko: ["흑요석", "동위원소비", "분류"]
  },
  {
    id: 188,
    type: "conference",
    title_en: "Casting Raw Materials and Origin of Goryeo Coins (I) - Haedong Tongbo",
    title_ko: "고려시대 동전의 주조 원료와 산지(Ⅰ) -해동통보(海東通寶)-",
    authors: "Kang Hyeong Tae, Chung Kwang Yong, Kim Gyu Ho",
    authors_ko: "강형태, 정광용, 김규호",
    event: "The 21st Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제21회 춘계학술대회",
    year: 2005,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Research on casting raw materials and origin of Goryeo coins.",
    summary_ko: "고려시대 동전의 주조 원료와 산지 연구.",
    link: "",
    keywords: ["Goryeo coins", "Casting", "Haedong Tongbo"],
    keywords_ko: ["고려동전", "주조", "해동통보"]
  },
  {
    id: 189,
    type: "conference",
    title_en: "Natural Scientific Research on Iron Smelting Furnace at Mohwaji Site, Gyeongju",
    title_ko: "경주 모화지유적 제철로의 자연과학적 연구",
    authors: "Chung Kwang Yong, Kang Dae Il",
    authors_ko: "정광용, 강대일",
    event: "The 21st Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제21회 춘계학술대회",
    year: 2005,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Natural scientific research on iron smelting furnace.",
    summary_ko: "제철로의 자연과학적 연구.",
    link: "",
    keywords: ["Iron smelting", "Furnace", "Archaeological site"],
    keywords_ko: ["제철로", "철기", "유적"]
  },
  {
    id: 190,
    type: "conference",
    title_en: "Characteristics of Glass Beads from Mandong Site, Gochang, Jeonbuk",
    title_ko: "전북 고창 만동유적 유리구슬의 특성",
    authors: "Chung Kwang Yong, Heo Woo Young, Kang Hyeong Tae, Cho Nam Chul",
    authors_ko: "정광용, 허우영, 강형태, 조남철",
    event: "The 21st Spring Conference of the Korean Society of Conservation Science for Cultural Heritage",
    event_ko: "(사)한국문화재보존과학회 제21회 춘계학술대회",
    year: 2005,
    presentation_type: "Poster Presentation",
    presentation_type_ko: "포스터발표",
    summary_en: "Characteristics of glass beads from archaeological site.",
    summary_ko: "유리구슬의 특성 연구.",
    link: "",
    keywords: ["Glass beads", "Archaeological artifact", "Analysis"],
    keywords_ko: ["유리구슬", "유물", "특성"]
  }
];

achievements.push(...newConferenceAchievements);

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
let achievementsCurrentPage = 1;
const achievementsItemsPerPage = 12;

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
      const presentationType = lang === 'ko' ? (achievement.presentation_type_ko || achievement.presentation_type) : achievement.presentation_type;
      const confAuthors = lang === 'ko' ? (achievement.authors_ko || achievement.authors) : achievement.authors;
      metaInfo = `
        <div class="meta-row">${confAuthors}</div>
        <div class="achievement-journal">${event} ${presentationType ? presentationType : ''}</div>
        <div class="meta-row achievement-year">${achievement.year}</div>
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
  achievementsCurrentPage = 1;
  
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
  
  // Special handling for patent filter (temporarily in preparation)
  if (currentFilter === 'patent') {
    achievementsList.innerHTML = `
      <div class="patent-preparation-notice">
        <div class="notice-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </div>
        <h3 class="notice-title lang lang-en">Patent Applications in Preparation</h3>
        <h3 class="notice-title lang lang-ko" style="display:none;">특허 출원 준비 중</h3>
        <p class="notice-description lang lang-en">We are currently preparing patent applications for our innovative conservation technologies and methodologies. Please check back soon for updates.</p>
        <p class="notice-description lang lang-ko" style="display:none;">현재 혁신적인 보존 기술 및 방법론에 대한 특허 출원을 준비하고 있습니다. 곧 업데이트될 예정이니 다시 방문해 주세요.</p>
      </div>
    `;
    
    // Apply current language to notice
    achievementsList.querySelectorAll('.lang').forEach(el => {
      if (el.classList.contains('lang-' + lang)) {
        el.style.display = '';
      } else {
        el.style.display = 'none';
      }
    });
    
    // Clear pagination since there are no items
    const paginationContainer = document.querySelector('.pagination-container');
    if (paginationContainer) {
      paginationContainer.innerHTML = '';
    }
    
    // Update filter count to 0
    updateActiveFilterCount('patent');
    
    return;
  }
  
  // Filter achievements based on current filter
  let filteredAchievements = achievements.filter(achievement => achievement.type === currentFilter);
  
  // Sort by year (newest first)
  filteredAchievements.sort((a, b) => b.year - a.year);
  
  // Calculate pagination
  const totalItems = filteredAchievements.length;
  const totalPages = Math.ceil(totalItems / achievementsItemsPerPage);
  const startIndex = (achievementsCurrentPage - 1) * achievementsItemsPerPage;
  const endIndex = startIndex + achievementsItemsPerPage;
  const paginatedAchievements = filteredAchievements.slice(startIndex, endIndex);
  
  // Render achievement cards
  achievementsList.innerHTML = paginatedAchievements.map(achievement => createAchievementCard(achievement, lang)).join('');
  
  // Render pagination controls
  renderPagination(totalPages, achievementsCurrentPage);
  
  // Update filter counts after rendering
  updateActiveFilterCount(currentFilter);
  
  // Re-initialize animations after rendering
  setTimeout(() => {
    initAnimations();
  }, 50);
}

// Render pagination controls
function renderPagination(totalPages, achievementsCurrentPageParam) {
  const paginationContainer = document.querySelector('.pagination-container');
  if (!paginationContainer) {
    // Create pagination container if it doesn't exist
    const achievementSection = document.querySelector('.achievements-section');
    if (achievementSection) {
      const container = document.createElement('div');
      container.className = 'pagination-container';
      achievementSection.appendChild(container);
      renderPaginationButtons(container, totalPages, achievementsCurrentPageParam);
    }
  } else {
    renderPaginationButtons(paginationContainer, totalPages, achievementsCurrentPageParam);
  }
}

// Render pagination buttons
function renderPaginationButtons(container, totalPages, achievementsCurrentPageParam) {
  if (totalPages <= 1) {
    container.innerHTML = '';
    return;
  }
  
  const lang = getCurrentLanguage();
  const isKo = lang === 'ko';
  
  let buttonsHTML = `
    <button class="pagination-btn" ${achievementsCurrentPageParam === 1 ? 'disabled' : ''} onclick="changePage(${achievementsCurrentPageParam - 1})">
      ${isKo ? '이전' : 'Previous'}
    </button>
    <span class="page-info">${achievementsCurrentPageParam} / ${totalPages}</span>
    <button class="pagination-btn" ${achievementsCurrentPageParam === totalPages ? 'disabled' : ''} onclick="changePage(${achievementsCurrentPageParam + 1})">
      ${isKo ? '다음' : 'Next'}
    </button>
  `;
  
  container.innerHTML = buttonsHTML;
}

// Change page function
function changePage(page) {
  achievementsCurrentPage = page;
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
      // achievements.html 페이지 내에서만 preventDefault하고 필터 적용
      // 다른 페이지에서는 href로 정상 이동
      const currentPage = window.location.pathname.split('/').pop();
      
      if (currentPage === 'achievements.html') {
        e.preventDefault();
        
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
        
        // 드롭다운 닫기
        const dropdownContent = filter.closest('.nav-dropdown-content');
        if (dropdownContent) {
          dropdownContent.classList.remove('show');
        }
      }
      // 다른 페이지에서는 href 링크로 정상 이동
    });
  });

  // Page filter functionality
  achievementFilters.forEach(filter => {
    filter.addEventListener('click', () => {
      // Update page filter active state
      achievementFilters.forEach(f => f.classList.remove('active'));
      filter.classList.add('active');
      
      // 네비게이션 드롭다운은 active 상태를 사용하지 않음
      const filterType = filter.getAttribute('data-filter');
      
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
  
  // 네비게이션 드롭다운의 active 상태는 설정하지 않음 (페이지 로드 시)
  // navAchievementFilters는 클릭 시에만 active 상태 변경
  
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

// Update filter button counts - show count with badge design
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
    const count = counts[filterType];
    
    // Remove existing count badge if any
    const existingBadge = button.querySelector('.filter-count');
    if (existingBadge) {
      existingBadge.remove();
    }
    
    // Only add count badge to active button
    if (filterType === activeFilterType && count !== undefined) {
      const badge = document.createElement('span');
      badge.className = 'filter-count';
      badge.textContent = count;
      button.appendChild(badge);
    }
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