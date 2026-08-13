// 🚀 Modern Members Page - Clean & Innovative UI
// ✨ No popup modals, smooth animations, responsive design

const teamData = {
  directors: [
    {
      id: 3,
      name_en: "Prof. Sang Ok Lee",
      name_ko: "이상옥 교수",
      title_en: "KNUH Professor & Conservation Science Lab. Principal",
      title_ko: "한국전통문화대학교 보존과학과 전임교원\n보존과학연구소장",
      period_en: "2025 - Present",
      period_ko: "2025 - 현재",
      education: [
        { year: "2019", degree_en: "Ph.D. in Conservation Science, KNUH", degree_ko: "한국전통문화대학교 문화유산전문대학원 이학박사" },
        { year: "2016", degree_en: "M.Sc. in Conservation Science, KNUH", degree_ko: "한국전통문화대학교 문화유산전문대학원 이학석사" },
        { year: "2014", degree_en: "B.Sc. in Conservation Science, KNUH", degree_ko: "한국전통문화대학교 보존과학과 이학사" }
      ],
      positions: [
        { year: "2025 - Present", title_en: "Director, Conservation Science Lab", title_ko: "보존과학연구소 소장" },
        { year: "2024 - Present", title_en: "Academic Director, Korean Society of Conservation Science for Cultural Heritage", title_ko: "(사)한국문화유산보존과학회 학술이사" },
        { year: "2023 - Present", title_en: "Assistant Professor, KNUH", title_ko: "한국전통문화대학교 조교수" },
        { year: "2023 - Present", title_en: "Cultural Heritage Committee Member", title_ko: "국가유산수리기술위원회 복원정비분과 전문위원" },
        { year: "2020 - 2022", title_en: "Visiting Professor, KNUH", title_ko: "한국전통문화대학교 보존과학과 초빙교원" },
        { year: "2019 - 2020", title_en: "Lecturer, KNUH", title_ko: "한국전통문화대학교 보존과학과 강사" }
      ],
      email: "lso8675@knuh.ac.kr",
      phone: "041-830-7364",
      photo: "assets/members/card-photos/sangok-lee-card.jpg"
    },
    // Temporarily Disabled - Prof. Go Woon Bae
    // {
    //   id: 2,
    //   name_en: "Prof. Go Woon Bae",
    //   name_ko: "배고운 교수",
    //   title_en: "Former Director, Conservation Science Lab",
    //   title_ko: "전 보존과학연구소장",
    //   period_en: "2015 - 2020",
    //   period_ko: "2015 - 2020",
    //   positions: [
    //     { year: "2015 - 2020", title_en: "Director, Conservation Science Lab", title_ko: "보존과학연구소 소장" },
    //     { year: "2013 - 2020", title_en: "Professor, Korea National University of Cultural Heritage", title_ko: "한국전통문화대학교 교수" },
    //     { year: "2010 - 2013", title_en: "Associate Professor, KNUCH", title_ko: "한국전통문화대학교 부교수" },
    //     { year: "2007 - 2010", title_en: "Senior Researcher, National Museum", title_ko: "국립박물관 선임연구원" }
    //   ],
    //   email: "gwbae@knuh.ac.kr",
    //   phone: "041-830-7365",
    //   photo: "assets/members/card-photos/sangok-lee-card.jpg"
    // },
    {
      id: 1,
      name_en: "Prof. Gwang Yong Jeong",
      name_ko: "정광용 교수",
      title_en: "Emeritus Professor, Department of Conservation Science\nFormer Director, Conservation Science Lab.",
      title_ko: "한국전통문화대학교 보존과학과 명예교수\n前 보존과학연구소장",
      period_en: "2004 - 2024",
      period_ko: "2004 - 2024",
      positions: [
        { year: "2003 - 2011", title_en: "Member, Cultural Heritage Committee, Cultural Heritage Administration", title_ko: "문화재청 문화재위원회위원" },
        { year: "2004 - 2011", title_en: "Assistant Professor, KNUH", title_ko: "한국전통문화대학교 조교수" },
        { year: "2008 - 2012", title_en: "Head, Department of Conservation Science, KNUCH", title_ko: "한국전통문화대학교 보존과학과장" },
        { year: "2011 - 2015", title_en: "President, Korean Society of Conservation Science for Cultural Heritage", title_ko: "한국문화재보존과학회 회장" },
        { year: "2011 - 2016", title_en: "Associate Professor, KNUH", title_ko: "한국전통문화대학교 부교수" },
        { year: "2013 - 2017", title_en: "Member, Cultural Heritage Committee, Cultural Heritage Administration", title_ko: "문화재청 문화재위원회위원" },
        { year: "2015 - 2016", title_en: "Head, Department of Conservation Science, KNUCH", title_ko: "한국전통문화대학교 보존과학과장" },
        { year: "2016 - 2025", title_en: "Professor, KNUH", title_ko: "한국전통문화대학교 교수" },
        { year: "2019 - 2023", title_en: "Head, Department of Heritage Conservation Science, KNUCH", title_ko: "한국전통문화대학교 문화재보존과학과장" },
        { year: "2020 - 2022", title_en: "Dean, College of Technology and Science, KNUCH", title_ko: "한국전통문화대학교 기술과학대학 학장" },
        { year: "2021 - Present", title_en: "Cultural Heritage Repair Technician, Cultural Heritage Administration", title_ko: "문화재청 문화재수리기술위원" },
        { year: "2023 - 2024", title_en: "Director, Museum, KNUH", title_ko: "한국전통문화대학교 박물관장" },
        { year: "2023 - Present", title_en: "Member, Cultural Heritage Committee (Built Heritage Division), Cultural Heritage Administration", title_ko: "문화재청 문화재위원회 건조문화재분과" },
        { year: "2024 - 2025", title_en: "Dean, College of Technology and Science, KNUCH", title_ko: "한국전통문화대학교 기술과학대학 학장" }
      ],
      photo: "assets/members/card-photos/KYJ.jpg"
    }
  ],

  professor: {
    name_en: "Prof. Sang Ok Lee",
    name_ko: "이상옥 교수",
    title_en: "KNUH Professor & Conservation Science Lab. Principal",
    title_ko: "한국전통문화대학교 보존과학과 전임교원\n보존과학연구소장",
    positions: [
      { year: "2020 - Present", title_en: "Director, Conservation Science Lab", title_ko: "보존과학연구소 소장" },
      { year: "2018 - Present", title_en: "Professor, Korea National University of Cultural Heritage", title_ko: "한국전통문화대학교 교수" },
      { year: "2015 - 2018", title_en: "Associate Professor, KNUCH", title_ko: "한국전통문화대학교 부교수" },
      { year: "2012 - 2015", title_en: "Senior Researcher, National Research Institute", title_ko: "국립문화재연구소 선임연구원" }
    ],
    email: "lso8675@knuh.ac.kr",
    phone: "041-830-7364",
    photo: "assets/members/card-photos/sangok-lee-card.jpg"
  },

  researchers: [
    {
      name_en: "Go Woon Bae",
      name_ko: "배고운",
      title_en: "Senior Researcher / Ph.D.",
      title_ko: "선임연구원/이학박사",
      specialization_en: "Metal Cultural Heritage Conservation Science / Excavated Artifact Conservation Treatment",
      specialization_ko: "금속문화유산 보존과학 / 출토 유물 보존처리",
      expertise: ["Metal Heritage Conservation", "Excavated Artifact Treatment"],
      expertise_ko: ["금속문화유산 보존", "출토 유물 보존처리"],
      status_en: "Leading metal conservation and excavated artifact preservation initiatives",
      status_ko: "금속문화유산 보존 및 출토유물 보존처리 연구를 주도하고 있습니다.",
      email: "llwatoll@naver.com",
      photo: "assets/members/card-photos/gowoon-bae.png",
      level: "senior"
    },
    {
      name_en: "Min Je Kim",
      name_ko: "김민제",
      title_en: "Researcher / Ph.D. student",
      title_ko: "연구원 / 박사과정",
      specialization_en: "Digital Heritage & 3D Technology",
      specialization_ko: "디지털 유산 및 3D 기술",
      expertise: ["Restoration Materials & Techniques", "Metal PLA 3D Printing"],
      expertise_ko: ["복원재료·기술", "금속 PLA 3D 프린팅"],
      status_en: "Leading innovative 3D documentation projects for cultural heritage",
      status_ko: "5살에 석사를 졸업하고 23년간 박사과정 중인 연구원입니다. 올해는 꼭! 졸업.",
      email: "minje53@csllso.co.kr",
      photo: "assets/members/card-photos/minje-kim-card2.png",
      photo2: "assets/members/card-photos/minje-kim-card.jpg",
      level: "senior"
    },
    {
      name_en: "So Yeon Choi",
      name_ko: "최소연",
      title_en: "Researcher / Ph.D. student",
      title_ko: "연구원 / 박사과정",
      specialization_en: "Conservation Science",
      specialization_ko: "보존과학",
      expertise: ["Modern Heritage", "Paint & Coating Materials"],
      expertise_ko: ["근대유산", "페인트 및 도장재료"],
      status_en: "Developing new conservation methodologies for Korean artifacts",
      status_ko: "저는 최가 소연이라 하옵니다",
      email: "thduschl12@csllso.co.kr",
      photo: "assets/members/card-photos/soyeon-choi-card1.png",
      photo2: "assets/members/card-photos/soyeon-choi-card2.png",
      level: "senior"
    },
    {
      name_en: "Gyu Ri Choi",
      name_ko: "최규리",
      title_en: "Researcher / Ph.D. student",
      title_ko: "연구원 / 박사과정",
      specialization_en: "Environmental Monitoring",
      specialization_ko: "환경모니터링",
      expertise: ["Conservation Environmental Monitoring", "Traditional Materials Analysis"],
      expertise_ko: ["보존환경모니터링", "전통재료분석"],
      status_en: "Creating smart monitoring system for museum environments",
      status_ko: "저는 최가 규리라 하옵니다.",
      email: "gyuri0803@csllso.co.kr",
      photo: "assets/members/card-photos/gyuri-choi-card1.png",
      photo2: "assets/members/card-photos/gyuri-choi-card2.png",
      level: "senior"
    },
    {
      name_en: "Hyo Jung Kim",
      name_ko: "김효정",
      title_en: "Researcher / M.Sc. student",
      title_ko: "연구원 / 석사과정",
      specialization_en: "Paper & Textile Conservation",
      specialization_ko: "지류 및 섬유보존",
      expertise: ["Restoration Materials", "Metal Materials", "Heritage Conservation"],
      expertise_ko: ["복원재료", "금속재료", "유물 보존처리"],
      status_en: "Preserving traditional Korean textiles for future generations",
      status_ko: "저는 김가 효정이라 하옵니다.",
      email: "sudang1203@csllso.co.kr",
      photo: "assets/members/card-photos/hyojung-kim-card1.png",
      photo2: "assets/members/card-photos/hyojung-kim-card2.jpg",
      level: "mid"
    },
    {
      name_en: "Diyarov Anvar Abdinabievich",
      name_ko: "안바르",
      title_en: "Researcher / M.Sc. student",
      title_ko: "연구원 / 석사과정",
      specialization_en: "Bio-deterioration Research",
      specialization_ko: "생물학적 열화 연구",
      expertise: ["Overseas Heritage", "Metal Conservation"],
      expertise_ko: ["해외유산", "금속보존처리"],
      status_en: "Studying microbial threats to historical manuscripts",
      status_ko: "역사적 문헌에 대한 미생물 위협을 연구하고 있습니다",
      email: "anbar@knuch.ac.kr",
      photo: "assets/members/card-photos/anvar-card1.png",
      photo2: "assets/members/card-photos/anvar-card2.png",
      level: "mid"
    },
    {
      name_en: "Su Jung Kim",
      name_ko: "김수정",
      title_en: "Researcher / M.Sc. student",
      title_ko: "연구원 / 석사과정",
      specialization_en: "Non-invasive Diagnostics",
      specialization_ko: "비침습 진단기술",
      expertise: ["Modern Heritage", "Surface Coating Materials"],
      expertise_ko: ["근대유산", "표면코팅재료"],
      status_en: "Developing portable diagnostic tools for field conservation",
      status_ko: "저는 김가 수정이라 하옵니다.",
      email: "ksj10108@csllso.co.kr",
      photo: "assets/members/card-photos/sujung-kim-card1.png",
      photo2: "assets/members/card-photos/sujung-kim-card2.png",
      level: "mid"
    },
    {
      name_en: "Ji Eun Hyun",
      name_ko: "현지은",
      title_en: "Researcher / M.Sc. student",
      title_ko: "연구원 / 석사과정",
      specialization_en: "Smart Materials & Sensors",
      specialization_ko: "스마트재료 및 센서",
      expertise: ["Restoration Material Properties", "Mortar"],
      expertise_ko: ["복원재료물성평가", "모르타르"],
      status_en: "Innovating sensor technologies for real-time heritage monitoring",
      status_ko: "저는 현가 지은이라 하옵니다.",
      email: "jehyun1219@csllso.co.kr",
      photo: "assets/members/card-photos/jieun-hyun-card1.png",
      photo2: "assets/members/card-photos/jieun-hyun-card2.png",
      level: "mid"
    }
  ],

  // Alumni Data (100+ members)
  alumni: [
    // 2025년 졸업생
    { name_en: "Eun Kyung Seo", name_ko: "서은경", period: "2023-2025", current_org: "국립세계문자박물관", current_org_en: "National Museum of World Writing", position: "연구원", position_en: "Researcher" },
    { name_en: "Chae Rin Kim", name_ko: "김채린", period: "2022-2025", current_org: "국립광주박물관", current_org_en: "Gwangju National Museum", position: "연구원", position_en: "Researcher" },
    { name_en: "Ye Ni Heo", name_ko: "허예니", period: "2023-2025", current_org: "", current_org_en: "", position: "", position_en: "" },

    // 21학번
    { name_en: "Hyo Jeong Kim", name_ko: "김효정", period: "2023-", current_org: "한국전통문화대학교 보존과학연구소", current_org_en: "Conservation Science Lab, KNUH", position: "연구원 / 석사과정", position_en: "Researcher / M.Sc. student" },
    { name_en: "Sin Ki Kim", name_ko: "김신기", period: "2023-2026", current_org: "국립부여박물관", current_org_en: "Buyeo National Museum", position: "연구원", position_en: "Researcher" },

    // 20학번

    // 19학번
    { name_en: "Hae Won Lee", name_ko: "이해원", period: "2022-2023", current_org: "국립대구박물관", current_org_en: "Daegu National Museum", position: "연구원", position_en: "Researcher" },
    { name_en: "Gyu Ri Choi", name_ko: "최규리", period: "2022-", current_org: "한국전통문화대학교 보존과학연구소", current_org_en: "Conservation Science Lab, KNUH", position: "연구원 / 박사과정", position_en: "Researcher / Ph.D. student" },

    // 18학번 (2022-2025)
    { name_en: "Jung Yeon Kim", name_ko: "김정연", period: "2022-2026", current_org: "이집트 ODA 사업단 룩소르팀", current_org_en: "Luxor Team, Egypt ODA Project", position: "보존과학 전임연구원", position_en: "Full-time Researcher, Conservation Science" },
    { name_en: "Hae Jun Park", name_ko: "박해준", period: "2023-", current_org: "한국전통문화대학교 보존과학연구소", current_org_en: "Conservation Science Lab, KNUH", position: "연구원 / 석사과정", position_en: "Researcher / M.Sc. student" },
    { name_en: "Seo Hyeon Lee", name_ko: "이서현", period: "2023-2025", current_org: "한국산업인력공단", current_org_en: "Human Resources Development Service of Korea", position: "전문자격국 연구원", position_en: "Researcher, Professional Qualifications Office" },
    { name_en: "Han Wool Lim", name_ko: "임한울", period: "2022-2024", current_org: "전통건축수리기술진흥재단", current_org_en: "Korea Traditional Architecture Repair Technology Promotion Foundation", position: "연구원", position_en: "Researcher" },
    { name_en: "So Yeon Choi", name_ko: "최소연", period: "2022-", current_org: "한국전통문화대학교 보존과학연구소", current_org_en: "Conservation Science Lab, KNUH", position: "연구원 / 박사과정", position_en: "Researcher / Ph.D. student" },

    // 17학번 (2021-2024)
    { name_en: "Bo Gyeong Kim", name_ko: "김보경", period: "2021-2024", current_org: "국립현대미술관", current_org_en: "National Museum of Modern and Contemporary Art, Korea", position: "연구원", position_en: "Researcher" },
    { name_en: "Seon Park", name_ko: "박선", period: "2021-2024", current_org: "국립경주박물관", current_org_en: "Gyeongju National Museum", position: "연구원", position_en: "Researcher" },
    { name_en: "Ji Hyeon Yang", name_ko: "양지현", period: "2021-2024", current_org: "국립중원문화유산연구소", current_org_en: "Jungwon National Research Institute of Cultural Heritage", position: "연구원", position_en: "Researcher" },
    { name_en: "Ye Ji Park", name_ko: "박예지", period: "2023-2025", current_org: "국가유산수리재료센터", current_org_en: "National Heritage Repair Materials Center", position: "연구원", position_en: "Researcher" },
    { name_en: "Ji Eun Choi", name_ko: "최지은", period: "2023-2025", current_org: "국가유산수리재료센터", current_org_en: "National Heritage Repair Materials Center", position: "연구원", position_en: "Researcher" },

    // 16학번 (2018-2022)
    { name_en: "Min Je Kim", name_ko: "김민제", period: "2019-", current_org: "한국전통문화대학교 보존과학연구소", current_org_en: "Conservation Science Lab, KNUH", position: "연구실 1짱 / 박사과정", position_en: "Head Researcher / Ph.D. student" },
    { name_en: "Gyeong Seo Choi", name_ko: "최경서", period: "2018-2022", current_org: "국립김해박물관", current_org_en: "Gimhae National Museum", position: "연구원", position_en: "Researcher" },

    // 15학번 (2018-2022)
    { name_en: "Sang Ah Min", name_ko: "민상아", period: "2018-2022", current_org: "국립부여문화유산연구소", current_org_en: "Buyeo National Institute of Cultural Heritage", position: "연구원", position_en: "Researcher" },
    { name_en: "Dong Jun Noh", name_ko: "노동준", period: "2021-2024", current_org: "국가유산수리재료센터", current_org_en: "National Heritage Repair Materials Center", position: "품질관리팀 주임연구원", position_en: "Assistant Researcher, Quality Control Team" },
    { name_en: "So Yeon Lee", name_ko: "이소연", period: "2018-2021", current_org: "국립중앙박물관 보존과학센터", current_org_en: "Conservation Science Center, National Museum of Korea", position: "학예연구사", position_en: "Curator" },

    // 14학번 (2018-2022)
    { name_en: "Jun Hyeon Park", name_ko: "박준현", period: "2018-2022", current_org: "문화체육관광부 문화기반과", current_org_en: "Ministry of Culture, Sports and Tourism", position: "공무원", position_en: "Public Official" },
    { name_en: "Sang Hoon Lee", name_ko: "이상훈", period: "2022-2023", current_org: "국립현대미술관", current_org_en: "National Museum of Modern and Contemporary Art, Korea", position: "연구원", position_en: "Researcher" },
    { name_en: "Yang Ho Choi", name_ko: "최양호", period: "2018-2022", current_org: "전쟁기념관", current_org_en: "War Memorial of Korea", position: "연구원", position_en: "Researcher" },

    // 13학번 (2017-2020)
    { name_en: "Seung Chan Lee", name_ko: "이승찬", period: "2019-2022", current_org: "한성백제박물관", current_org_en: "Hansung Baekje Museum", position: "학예연구사", position_en: "Curator" },
    { name_en: "Jun Hyeok Jang", name_ko: "장준혁", period: "2018-2021", current_org: "국립가야문화유산연구소", current_org_en: "Gaya National Research Institute of Cultural Heritage", position: "학예연구사", position_en: "Curator" },
    { name_en: "Yu Jin Kim", name_ko: "김유진", period: "2016-2020", current_org: "국립가야문화유산연구소", current_org_en: "Gaya National Research Institute of Cultural Heritage", position: "연구원", position_en: "Researcher" },
    { name_en: "Ji Seon Kim", name_ko: "김지선", period: "2017-2020", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Sang Woo Jeon", name_ko: "전상우", period: "2017-2020", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Yoon Gwan Choi", name_ko: "최윤관", period: "2017-2020", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Do Hyeon Nam", name_ko: "남도현", period: "2017-2020", current_org: "", current_org_en: "", position: "", position_en: "" },

    // 12학번 (2014-2016)
    { name_en: "Chang Won Han", name_ko: "한창원", period: "2014-2016", current_org: "", current_org_en: "", position: "", position_en: "" },

    // 11학번 (2012-2014)
    { name_en: "Ji Seon Baek", name_ko: "백지선", period: "2012-2014", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Woo Hyeon Kim", name_ko: "김우현", period: "2012-2014", current_org: "", current_org_en: "", position: "", position_en: "" },

    // 09학번 (2011-2013)
    { name_en: "Min Jae Kim", name_ko: "김민재", period: "2011-2013", current_org: "국립익산박물관", current_org_en: "Iksan National Museum", position: "학예연구사", position_en: "Curator" },
    { name_en: "Ah Hyeon Seol", name_ko: "설아현", period: "2011-2013", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "In Ha Baek", name_ko: "백인하", period: "2011-2013", current_org: "", current_org_en: "", position: "", position_en: "" },

    // 08학번 (2010-2012)
    { name_en: "Seong Jin Na", name_ko: "나성진", period: "2010-2012", current_org: "", current_org_en: "", position: "", position_en: "" },

    // 07학번 (2008-2010)
    { name_en: "Mi Sol Do", name_ko: "도미솔", period: "2008-2010", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Jae Hyeong Park", name_ko: "박재형", period: "2008-2010", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Go Woon Bae", name_ko: "배고운", period: "2008-2025", current_org: "한국전통문화대학교 보존과학연구소", current_org_en: "Conservation Science Lab, KNUH", position: "선임연구원", position_en: "Senior Researcher" },
    { name_en: "Jae Hyeok Shin", name_ko: "신재혁", period: "2008-2010", current_org: "국가유산수리재료센터", current_org_en: "National Heritage Repair Materials Center", position: "수급기획팀 팀장", position_en: "Team Leader, Supply Planning Team" },
    { name_en: "Sang Ok Lee", name_ko: "이상옥", period: "2008-2019", current_org: "한국전통문화대학교 보존과학과", current_org_en: "Dept. of Conservation Science, KNUH", position: "전임교원", position_en: "Professor" },

    // 06학번 (2007-2009)
    { name_en: "Seung Hee Kang", name_ko: "강승희", period: "2007-2009", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Won Gu Kang", name_ko: "강원구", period: "2007-2009", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Seon Hyeong Park", name_ko: "박선형", period: "2007-2009", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Yu Jin Park", name_ko: "박유진", period: "2007-2009", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Yu Ran Seok", name_ko: "석유란", period: "2007-2009", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Do Ran Woo", name_ko: "우도란", period: "2007-2009", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Ha Jin Cho", name_ko: "조하진", period: "2007-2009", current_org: "", current_org_en: "", position: "", position_en: "" },

    // 05학번 (2006-2008)
    { name_en: "Man Hoe Kim", name_ko: "김만회", period: "2006-2008", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Min Su Park", name_ko: "박민수", period: "2006-2008", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Gil Hwan Baek", name_ko: "백길환", period: "2006-2008", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Dae Geon Beom", name_ko: "범대건", period: "2006-2008", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Hye Jin Jeong", name_ko: "정혜진", period: "2006-2008", current_org: "", current_org_en: "", position: "", position_en: "" },

    // 04학번 (2005-2007)
    { name_en: "Beom Jun Kim", name_ko: "김범준", period: "2005-2007", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Jung Il Song", name_ko: "송정일", period: "2005-2007", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Dae Young Yu", name_ko: "유대영", period: "2005-2007", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Ji Won Lee", name_ko: "이지원", period: "2005-2007", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Hyeon Seok Cha", name_ko: "차현석", period: "2005-2007", current_org: "국가유산수리재료센터", current_org_en: "National Heritage Repair Materials Center", position: "수리재료부 부장", position_en: "Director, Repair Materials Department" },

    // 03학번 (2004-2006)
    { name_en: "Gyeong Jin Son", name_ko: "손경진", period: "2004-2006", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Jung Mi Shin", name_ko: "신중미", period: "2004-2006", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Gyeong Cheol Lee", name_ko: "이경철", period: "2004-2006", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Seon Jo Lee", name_ko: "이선조", period: "2004-2006", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Ju Hyeon Lee", name_ko: "이주현", period: "2004-2006", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Seung Mu Heo", name_ko: "허승무", period: "2004-2006", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Tae Hee Kim", name_ko: "김태희", period: "2004-2006", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Dong Hee Park", name_ko: "박동희", period: "2004-2006", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Se Jin Lim", name_ko: "임세진", period: "2004-2006", current_org: "", current_org_en: "", position: "", position_en: "" },

    // 02학번 (2004-2006)
    { name_en: "Hyo Yoon Kim", name_ko: "김효윤", period: "2004-2006", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Gyeong Min Lee", name_ko: "이경민", period: "2004-2006", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Su Hee Lee", name_ko: "이수희", period: "2004-2006", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Tae Young Lee", name_ko: "이태영", period: "2004-2006", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Jong Min Jang", name_ko: "장종민", period: "2004-2006", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Hee Won Jeong", name_ko: "정희원", period: "2004-2006", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Jin Woo Park", name_ko: "박진우", period: "2004-2006", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Oh Seong Hong", name_ko: "홍오성", period: "2004-2006", current_org: "", current_org_en: "", position: "", position_en: "" },
    { name_en: "Ji Ae Song", name_ko: "송지애", period: "2004-2006", current_org: "", current_org_en: "", position: "", position_en: "" }
  ]
};

// Language Management
function getCurrentLanguage() {
  const activeBtn = document.querySelector('.lang-option.active');
  return activeBtn ? activeBtn.dataset.lang : 'ko';
}

// Director Slider State
let currentDirectorIndex = 0;

// Director Card Creation (with slider)
function createDirectorCard(director, lang) {
  const isKo = lang === 'ko';
  const positionsTitle = lang === 'ko' ? '주요 경력' : lang === 'ja' ? '主な経歴' : lang === 'uz' ? 'Asosiy faoliyat' : 'Career History';
  const educationTitle = lang === 'ko' ? '학력' : lang === 'ja' ? '学歴' : lang === 'uz' ? 'Ta\'lim' : 'Education';

  return `
    <div class="professor-card" data-director-id="${director.id}">
      <div class="professor-left">
        <div class="professor-image">
          <img src="${director.photo}" alt="${isKo ? director.name_ko : director.name_en}" loading="lazy">
        </div>
      </div>
      <div class="professor-right">
        <div class="professor-header">
          <h2 class="professor-name">${isKo ? director.name_ko : director.name_en}</h2>
          <p class="professor-title">${isKo ? director.title_ko : director.title_en}</p>
          <p class="director-period">${isKo ? director.period_ko : director.period_en}</p>
        </div>
        <div class="professor-positions">
          <h3 class="positions-title">${positionsTitle}</h3>
          <div class="positions-list">
            ${director.positions.map(pos => `
              <div class="position-item">
                <strong>${pos.year}</strong> ${isKo ? pos.title_ko : pos.title_en}
              </div>
            `).join('')}
          </div>
        </div>
        ${director.education ? `
        <div class="professor-education">
          <h3 class="education-title">${educationTitle}</h3>
          <div class="education-list">
            ${director.education.map(edu => `
              <div class="education-item">
                <strong>${edu.year}</strong> ${isKo ? edu.degree_ko : edu.degree_en}
              </div>
            `).join('')}
          </div>
        </div>
        ` : ''}
      </div>
    </div>
  `;
}

// Render Directors with Slider Controls
function renderDirectors() {
  const lang = getCurrentLanguage();
  const container = document.querySelector('.professor-container');
  if (!container) return;

  const directors = teamData.directors;
  const showArrows = directors.length > 1;

  const prevLabel = lang === 'ko' ? '이전 소장' : lang === 'ja' ? '前の所長' : lang === 'uz' ? 'Oldingi direktor' : 'Previous director';
  const nextLabel = lang === 'ko' ? '다음 소장' : lang === 'ja' ? '次の所長' : lang === 'uz' ? 'Keyingi direktor' : 'Next director';

  // Create slider wrapper (touch-based + arrow buttons when there's more than one director)
  container.innerHTML = `
    <div class="director-slider">
      ${showArrows ? `
      <button class="director-nav-arrow prev" aria-label="${prevLabel}">
        <span class="director-nav-arrow-icon"></span>
      </button>
      ` : ''}
      <div class="director-cards-wrapper">
        ${directors.map((director, index) =>
    createDirectorCard(director, lang)
  ).join('')}
      </div>
      ${showArrows ? `
      <button class="director-nav-arrow next" aria-label="${nextLabel}">
        <span class="director-nav-arrow-icon"></span>
      </button>
      ` : ''}
    </div>
    <div class="director-indicators">
      ${directors.map((_, index) => `
        <button class="director-indicator ${index === currentDirectorIndex ? 'active' : ''}"
                data-index="${index}"
                aria-label="${lang === 'ko' ? `소장 ${index + 1}` : lang === 'ja' ? `所長 ${index + 1}` : lang === 'uz' ? `Direktor ${index + 1}` : `Director ${index + 1}`}">
        </button>
      `).join('')}
    </div>
  `;

  // Show current director
  updateDirectorSlider();

  // Add event listeners
  setupDirectorSliderControls();

  // Initialize first card
  setTimeout(() => {
    const cards = document.querySelectorAll('.professor-card');
    if (cards[currentDirectorIndex]) {
      cards[currentDirectorIndex].classList.add('active');
    }
  }, 100);
}

// Update Director Slider Display - mild fade transition
let previousDirectorIndex = 0;

function updateDirectorSlider() {
  const cards = document.querySelectorAll('.professor-card');
  const indicators = document.querySelectorAll('.director-indicator');

  const oldCard = cards[previousDirectorIndex];
  const newCard = cards[currentDirectorIndex];

  if (oldCard && newCard && oldCard !== newCard) {
    // Fade out old card
    oldCard.classList.add('fade-out');

    // After fade out, show new card
    setTimeout(() => {
      cards.forEach(card => {
        card.classList.remove('active', 'fade-out');
      });
      newCard.classList.add('active');
    }, 300);
  } else if (newCard) {
    // First load
    cards.forEach(card => card.classList.remove('active', 'fade-out'));
    newCard.classList.add('active');
  }

  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentDirectorIndex);
  });

  previousDirectorIndex = currentDirectorIndex;
}

// Move to the previous (-1) or next (1) director
function goToDirector(direction) {
  const total = teamData.directors.length;
  if (total <= 1) return;
  currentDirectorIndex = (currentDirectorIndex + direction + total) % total;
  updateDirectorSlider();
}

// Setup Director Slider Controls (Touch Swipe + Arrows)
function setupDirectorSliderControls() {
  const cardsWrapper = document.querySelector('.director-cards-wrapper');
  const indicators = document.querySelectorAll('.director-indicator');
  const prevArrow = document.querySelector('.director-nav-arrow.prev');
  const nextArrow = document.querySelector('.director-nav-arrow.next');

  if (prevArrow) prevArrow.addEventListener('click', () => goToDirector(-1));
  if (nextArrow) nextArrow.addEventListener('click', () => goToDirector(1));

  let touchStartX = 0;
  let touchEndX = 0;
  let isDragging = false;

  // Touch events for mobile
  if (cardsWrapper) {
    cardsWrapper.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      isDragging = true;
    }, { passive: true });

    cardsWrapper.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
      isDragging = false;
    }, { passive: true });

    // Mouse events for desktop
    cardsWrapper.addEventListener('mousedown', (e) => {
      touchStartX = e.screenX;
      isDragging = true;
      cardsWrapper.style.cursor = 'grabbing';
    });

    cardsWrapper.addEventListener('mouseup', (e) => {
      if (isDragging) {
        touchEndX = e.screenX;
        handleSwipe();
        isDragging = false;
        cardsWrapper.style.cursor = 'grab';
      }
    });

    cardsWrapper.addEventListener('mouseleave', () => {
      if (isDragging) {
        isDragging = false;
        cardsWrapper.style.cursor = 'grab';
      }
    });

    // Add grab cursor hint
    cardsWrapper.style.cursor = 'grab';
  }

  function handleSwipe() {
    const swipeThreshold = 50; // minimum distance for swipe
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      // Swiped left -> next, swiped right -> previous
      goToDirector(diff > 0 ? 1 : -1);
    }
  }

  // Indicator click events
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentDirectorIndex = index;
      updateDirectorSlider();
    });
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      goToDirector(-1);
    } else if (e.key === 'ArrowRight') {
      goToDirector(1);
    }
  });
}

// Professor Card Creation
function createProfessorCard(professor, lang) {
  const isKo = lang === 'ko';
  const positionsTitle = lang === 'ko' ? '역임 직책' : lang === 'ja' ? '主な経歴' : lang === 'uz' ? 'Asosiy faoliyat' : 'Career History';

  return `
    <div class="professor-card animate-on-scroll">
      <div class="professor-left">
        <div class="professor-image">
          <img src="${professor.photo}" alt="${isKo ? professor.name_ko : professor.name_en}" loading="lazy">
        </div>
      </div>
      <div class="professor-right">
        <div class="professor-header">
          <h2 class="professor-name">${isKo ? professor.name_ko : professor.name_en}</h2>
          <p class="professor-title">${isKo ? professor.title_ko : professor.title_en}</p>
        </div>
        <div class="professor-positions">
          <h3 class="positions-title">${positionsTitle}</h3>
          <div class="positions-list">
            ${professor.positions.map(position => `
              <div class="position-item">
                ${position.year} ${isKo ? position.title_ko : position.title_en}
              </div>
            `).join('')}
          </div>
        </div>
        <div class="professor-contact-info">
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <a href="mailto:${professor.email}">${professor.email}</a>
          </div>
          <div class="contact-item">
            <i class="fas fa-phone"></i>
            <span>${professor.phone}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Researcher Card Creation
function createResearcherCard(researcher, lang, index) {
  const isKo = lang === 'ko';
  const delay = (index + 1) * 150;

  return `
    <div class="researcher-card ${researcher.level} animate-on-scroll" style="animation-delay: ${delay}ms">
      <div class="researcher-image">
        <img class="researcher-img-primary" src="${researcher.photo2 || researcher.photo}" alt="${isKo ? researcher.name_ko : researcher.name_en}" loading="lazy">
      </div>
      <div class="researcher-details">
        <h3 class="researcher-name">${isKo ? researcher.name_ko : researcher.name_en}</h3>
        <p class="researcher-title">${isKo ? researcher.title_ko : researcher.title_en}</p>
        <div class="researcher-expertise">
          ${(isKo ? researcher.expertise_ko : researcher.expertise).map(skill =>
    `<span class="skill-tag">${skill}</span>`
  ).join('')}
        </div>
        <div class="researcher-email">
          <i class="fas fa-envelope"></i>
          <a href="mailto:${researcher.email}">${researcher.email}</a>
        </div>
      </div>
    </div>
  `;
}

// Main Rendering Functions
function renderProfessor(lang) {
  const container = document.querySelector('#professorContainer');
  if (!container) return;

  container.innerHTML = createProfessorCard(teamData.professor, lang);
}

// Alumni Management
let currentAlumniPage = 1;
const alumniPerPage = 20;

function createAlumniCard(alumni, lang, index) {
  const isKo = lang === 'ko';

  // 입학 연도에 따른 컬러 그룹 설정
  const startYear = parseInt(alumni.period.split('-')[0]);
  let colorClass = 'recent';
  if (startYear >= 2020) colorClass = 'recent';
  else if (startYear >= 2015) colorClass = 'mid-period';
  else if (startYear >= 2010) colorClass = 'early-period';
  else colorClass = 'pioneer';

  return `
    <div class="alumni-card ${colorClass}">
      <h4 class="alumni-name">${isKo ? alumni.name_ko : alumni.name_en}</h4>
      <p class="alumni-period">${alumni.period}</p>
      <p class="alumni-current">${isKo ? alumni.current_org : alumni.current_org_en}</p>
      <p class="alumni-position">${isKo ? alumni.position : alumni.position_en}</p>
    </div>
  `;
}

function renderAlumni(lang, page = 1) {
  const container = document.querySelector('#alumniGrid');
  if (!container) return;

  const startIndex = (page - 1) * alumniPerPage;
  const endIndex = startIndex + alumniPerPage;
  const alumniPage = teamData.alumni.slice(startIndex, endIndex);

  const html = alumniPage
    .map((alumni, index) => createAlumniCard(alumni, lang, index))
    .join('');

  container.innerHTML = html;

  // Update pagination
  updateAlumniPagination(page);
}

function updateAlumniPagination(currentPage) {
  const totalPages = Math.ceil(teamData.alumni.length / alumniPerPage);
  let paginationContainer = document.querySelector('.alumni-pagination');

  if (!paginationContainer) {
    paginationContainer = document.createElement('div');
    paginationContainer.className = 'alumni-pagination';
    document.querySelector('#alumniGrid').parentNode.appendChild(paginationContainer);
  }

  const paginationLang = getCurrentLanguage();
  const prevLabel = paginationLang === 'ko' ? '이전' : paginationLang === 'ja' ? '前へ' : paginationLang === 'uz' ? 'Oldingi' : 'Previous';
  const nextLabel = paginationLang === 'ko' ? '다음' : paginationLang === 'ja' ? '次へ' : paginationLang === 'uz' ? 'Keyingi' : 'Next';

  let paginationHTML = `
    <button class="pagination-btn" onclick="changeAlumniPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
      ${prevLabel}
    </button>
    <span class="page-info">${currentPage} / ${totalPages}</span>
    <button class="pagination-btn" onclick="changeAlumniPage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
      ${nextLabel}
    </button>
  `;

  paginationContainer.innerHTML = paginationHTML;
}

function changeAlumniPage(page) {
  const totalPages = Math.ceil(teamData.alumni.length / alumniPerPage);
  if (page < 1 || page > totalPages) return;

  currentAlumniPage = page;
  const currentLang = getCurrentLanguage();
  renderAlumni(currentLang, page);

  // Scroll to alumni section
  document.querySelector('.alumni-network').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// Global function for pagination buttons
window.changeAlumniPage = changeAlumniPage;

function renderResearchers(lang) {
  const container = document.querySelector('.team-members .team-grid');
  if (!container) return;

  const html = teamData.researchers
    .map((researcher, index) => createResearcherCard(researcher, lang, index))
    .join('');

  container.innerHTML = html;

  // 렌더링 후 모바일 탭 토글 재초기화
  setTimeout(() => {
    initMobileTapToggle();
  }, 100);
}

// Animation System
function initAnimations() {
  const observerOptions = {
    threshold: 0.15, // 요소의 15%가 보일 때 트리거
    rootMargin: '0px 0px -150px 0px' // 뷰포트 하단에서 150px 전에 트리거
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // 즉시 실행하여 이미 화면에 있는 요소도 감지
  document.querySelectorAll('.animate-on-scroll').forEach(card => {
    observer.observe(card);
  });
}

// Enhanced Hover Effects
function initHoverEffects() {
  document.addEventListener('mouseenter', (e) => {
    const card = e.target.closest('.professor-card, .researcher-card');
    if (card) card.classList.add('hovered');
  }, true);

  document.addEventListener('mouseleave', (e) => {
    const card = e.target.closest('.professor-card, .researcher-card');
    if (card) card.classList.remove('hovered');
  }, true);
}

// Language Toggle Integration
function setupLanguageToggle() {
  if (window.setLang && typeof window.setLang === 'function') {
    const originalSetLang = window.setLang;

    window.setLang = function (lang) {
      originalSetLang(lang);

      setTimeout(() => {
        renderDirectors();
        renderProfessor(lang);
        renderResearchers(lang);
        renderAlumni(lang, currentAlumniPage);
        initAnimations();
        // 언어 전환 후 모바일 탭 토글 재초기화
        setTimeout(() => {
          initMobileTapToggle();
        }, 100);
      }, 150);
    };
  }
}

// Main Initialization
function initModernMembers() {
  console.log('🚀 Initializing Modern Members Page...');

  setupLanguageToggle();

  const currentLang = getCurrentLanguage();
  renderDirectors();
  renderProfessor(currentLang);
  renderResearchers(currentLang);
  renderAlumni(currentLang, 1);

  setTimeout(() => {
    initAnimations();
    initHoverEffects();
    animateNumbers(); // 숫자 카운팅 애니메이션 초기화
  }, 100);

  console.log('✅ Modern Members Page Ready!');
}

// Add banner animation like other pages
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

// Number Counting Animation for Alumni Showcase
function animateNumbers() {
  const statNumbers = document.querySelectorAll('.stat-number');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const text = target.textContent;
        const number = parseInt(text.replace(/\D/g, ''));
        const suffix = text.replace(/\d/g, '');

        let current = 0;
        const increment = number / 50; // 50 steps for smooth animation
        const duration = 1500; // 1.5 seconds
        const stepTime = duration / 50;

        target.textContent = '0' + suffix;

        const timer = setInterval(() => {
          current += increment;
          if (current >= number) {
            target.textContent = number + suffix;
            clearInterval(timer);
          } else {
            target.textContent = Math.floor(current) + suffix;
          }
        }, stepTime);

        observer.unobserve(target);
      }
    });
  }, {
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px'
  });

  statNumbers.forEach(number => {
    observer.observe(number);
  });
}

// Mobile Touch/Tap Photo Toggle
function initMobileTapToggle() {
  // 두 번째 이미지만 표시하므로 호버 기능 비활성화
  return;

  // 모바일 환경 감지 (768px 이하)
  const isMobile = window.innerWidth <= 768;

  if (!isMobile) {
    // 데스크톱에서는 CSS hover 효과를 위해 inline style 및 이벤트 제거
    const cards = document.querySelectorAll('.researcher-card, .professor-card');
    cards.forEach(card => {
      const primaryImg = card.querySelector('.researcher-img-primary, .professor-img-primary');
      const secondaryImg = card.querySelector('.researcher-img-secondary, .professor-img-secondary');

      if (primaryImg) primaryImg.style.opacity = '';
      if (secondaryImg) secondaryImg.style.opacity = '';

      // 기존 터치 이벤트 제거
      card.replaceWith(card.cloneNode(true));
    });
    return;
  }

  const cards = document.querySelectorAll('.researcher-card, .professor-card');

  cards.forEach(card => {
    const primaryImg = card.querySelector('.researcher-img-primary, .professor-img-primary');
    const secondaryImg = card.querySelector('.researcher-img-secondary, .professor-img-secondary');

    if (!primaryImg || !secondaryImg) return;

    // 초기 상태 설정
    let isShowingPrimary = true;
    primaryImg.style.opacity = '1';
    secondaryImg.style.opacity = '0';

    // 터치 이벤트 상태 추적 변수
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;
    let isTouchMoved = false;

    // 터치 시작
    const handleTouchStart = (e) => {
      // 이메일 링크 터치 시 사진 전환 방지
      if (e.target.tagName === 'A' || e.target.closest('a')) {
        return;
      }

      const touch = e.touches[0];
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
      touchStartTime = Date.now();
      isTouchMoved = false;
    };

    // 터치 이동 감지
    const handleTouchMove = (e) => {
      if (!touchStartX || !touchStartY) return;

      const touch = e.touches[0];
      const deltaX = Math.abs(touch.clientX - touchStartX);
      const deltaY = Math.abs(touch.clientY - touchStartY);

      // 이동 거리가 10px 이상이면 스크롤로 간주
      if (deltaX > 10 || deltaY > 10) {
        isTouchMoved = true;
      }
    };

    // 터치 종료 시 탭 감지
    const handleTouchEnd = (e) => {
      // 이메일 링크 터치 시 사진 전환 방지
      if (e.target.tagName === 'A' || e.target.closest('a')) {
        return;
      }

      const touchDuration = Date.now() - touchStartTime;

      // 조건: 이동하지 않았고, 터치 시간이 500ms 이내일 때만 탭으로 인식
      if (!isTouchMoved && touchDuration < 500) {
        e.preventDefault(); // 탭으로 확정된 경우에만 기본 동작 방지

        // 사진 전환
        if (isShowingPrimary) {
          primaryImg.style.opacity = '0';
          secondaryImg.style.opacity = '1';
        } else {
          primaryImg.style.opacity = '1';
          secondaryImg.style.opacity = '0';
        }

        isShowingPrimary = !isShowingPrimary;
      }

      // 상태 초기화
      touchStartX = 0;
      touchStartY = 0;
      touchStartTime = 0;
      isTouchMoved = false;
    };

    // 터치 취소 시 상태 초기화
    const handleTouchCancel = () => {
      touchStartX = 0;
      touchStartY = 0;
      touchStartTime = 0;
      isTouchMoved = false;
    };

    // 이벤트 리스너 등록 (passive: true로 스크롤 성능 향상)
    card.addEventListener('touchstart', handleTouchStart, { passive: true });
    card.addEventListener('touchmove', handleTouchMove, { passive: true });
    card.addEventListener('touchend', handleTouchEnd, { passive: false }); // preventDefault 사용 위해 passive: false
    card.addEventListener('touchcancel', handleTouchCancel, { passive: true });

    // 카드에 포인터 커서 추가 (터치 가능함을 시각적으로 표시)
    card.style.cursor = 'pointer';
  });
}

// 화면 크기 변경 시 재초기화
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    initMobileTapToggle();
  }, 250);
});

// DOM Ready Initialization
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initModernMembers();
    addBannerAnimation();
    setTimeout(() => {
      initMobileTapToggle();
    }, 500);
  });
} else {
  setTimeout(() => {
    initModernMembers();
    addBannerAnimation();
    setTimeout(() => {
      initMobileTapToggle();
    }, 500);
  }, 100);
}

