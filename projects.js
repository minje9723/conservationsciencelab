// Projects page specific functionality

// Projects data - 실제 프로젝트 사례
const projects = [
  {
    id: 142,
    title_en: "Conservation Treatment of Metal Artifacts Excavated from Gumi Hi-Tech Valley 6th District",
    title_ko: "구미 하이테크밸리 6차 출토 금속 유물 보존처리",
    category: "excavated-conservation",
    duration: "2025",
    funding: "Korea National University of Heritage",
    funding_ko: "한국문화재연구원",
    description_en: "Conservation treatment of metal artifacts excavated from the 6th district of Gumi Hi-Tech Valley, including scientific analysis and stabilization of corroded surfaces.",
    description_ko: "구미 하이테크밸리 6차 지구에서 출토된 금속 유물의 보존처리 프로젝트로, 부식된 표면의 과학적 분석 및 안정화 작업을 진행합니다.",
    images: ["assets/projects/gumi-metal-artifacts.jpg"]
  },
  {
    id: 143,
    title_en: "Metal PLA 3D Printing Restoration Study of Stirrup Excavated from Gwanbuk-ri",
    title_ko: "관북리 출토 등자의 금속 PLA 3D 프린팅 복원 연구",
    category: "restoration-research",
    duration: "2025",
    funding: "Korea National University of Heritage",
    funding_ko: "국립부여문화유산연구소",
    description_en: "Research on restoration of ancient stirrup using metal PLA 3D printing technology, combining traditional conservation with modern digital manufacturing methods.",
    description_ko: "금속 PLA 3D 프린팅 기술을 활용한 고대 등자 복원 연구로, 전통 보존과학과 현대 디지털 제조 기법을 결합합니다.",
    images: ["assets/projects/gwanbukri-stirrup-3d.jpg.png"]
  },
  {
    id: 144,
    title_en: "Mortar Analysis of Lime Tomb at Anseong Naejang-ri",
    title_ko: "안성 내장리 회곽묘 모르타르 분석",
    category: "site-investigation",
    duration: "2025",
    funding: "Korea National University of Heritage",
    funding_ko: "기남문화유산연구원",
    description_en: "Scientific analysis of mortar materials from the lime tomb at Anseong Naejang-ri, investigating composition and construction techniques.",
    description_ko: "안성 내장리 회곽묘의 모르타르 재료에 대한 과학적 분석으로, 성분 및 축조 기법을 연구합니다.",
    images: ["assets/projects/anseong-mortar-analysis.jpg"]
  },
  {
    id: 112,
    title_en: "Analysis of Jijang and Ten Kings Painting at Gapyeong Hyeondeungsa Temple",
    title_ko: "가평 현등사 지장시왕도 분석",
    category: "site-investigation",
    duration: "2024",
    funding: "Daehan Cultural Heritage",
    funding_ko: "대한문화유산"
  },
  {
    id: 113,
    title_en: "Research on Non-destructive Diagnostic Analysis Technology for Ancient Metal Cultural Heritage",
    title_ko: "고대 금속문화유산의 비파괴 진단분석 기술 연구",
    category: "preservation-research",
    duration: "2024",
    funding: "Korea National University of Heritage",
    funding_ko: "한국전통문화대학교"
  },
  {
    id: 114,
    title_en: "Analysis of Lime Mortar at Goryeong Goari Tomb Mural",
    title_ko: "고령 고아리 벽화 고분 회 모르타르 분석",
    category: "site-investigation",
    duration: "2024",
    funding: "Songbaek Conservation Tech",
    funding_ko: "송백보존테크"
  },
  {
    id: 115,
    title_en: "Analysis of Gilt Layers on Vairocana Triad Buddha at Gurye Hwaeomsa Temple",
    title_ko: "구례 화엄사 비로자나삼신불좌상 개금층 분석",
    category: "site-investigation",
    duration: "2024",
    funding: "Hanchem Cultural Heritage Conservation",
    funding_ko: "한켐문화재보존"
  },
  {
    id: 116,
    title_en: "Thermographic Analysis of Murals at Gumi Sudasa Temple",
    title_ko: "구미 수다사 벽화 열화상 분석",
    category: "site-investigation",
    duration: "2024",
    funding: "Songbaek Conservation Tech",
    funding_ko: "송백보존테크"
  },
  {
    id: 117,
    title_en: "Conservation Treatment of Metal Artifacts Excavated from Gumi Hi-Tech Valley 3rd & 4th Phases",
    title_ko: "구미 하이테크밸리 3,4차 출토 금속유물 보존처리",
    category: "excavated-conservation",
    duration: "2024",
    funding: "Korea Cultural Heritage Research Institute",
    funding_ko: "한국문화재연구원"
  },
  {
    id: 118,
    title_en: "National Museum of Modern and Contemporary Art 'Gwacheon '90'",
    title_ko: "국립현대미술관 '과천'90' 도장 페인트 시료 분석",
    category: "site-investigation",
    duration: "2024",
    funding: "Daedeok Cultural Heritage",
    funding_ko: "대덕문화유산"
  },
  {
    id: 119,
    title_en: "Development of Damage Indicators and Risk Assessment Technology for Wooden Architectural Cultural Heritage for Climate Change Adaptation Management",
    title_ko: "기후변화 적응관리를 위한 목조건축문화유산 손상지표 및 위험도 평가기술 개발",
    category: "preservation-research",
    duration: "2024",
    funding: "Korea Heritage Service",
    funding_ko: "국가유산청"
  },
  {
    id: 120,
    title_en: "Analysis of Gilt Layers and Production Techniques on Gilt Bronze Seated Buddha at Dangjin Sinamsa Temple",
    title_ko: "당진 신암사 금동여래좌상 개금층위 및 제작기법 분석",
    category: "site-investigation",
    duration: "2024",
    funding: "Yeojin Conservation Science",
    funding_ko: "여진보존과학"
  },
  {
    id: 121,
    title_en: "Thermographic Image Analysis of Archaeological Display at Dongdaemun Design Plaza",
    title_ko: "동대문역사문화공원 유구전시장 열화상 이미지 분석",
    category: "site-investigation",
    duration: "2024",
    funding: "Engard",
    funding_ko: "엔가드"
  },
  {
    id: 122,
    title_en: "Analysis of Diesel-Electric Locomotive No. 2001",
    title_ko: "디젤전기기관차 2001호 도장 페인트 시료 분석",
    category: "site-investigation",
    duration: "2024",
    funding: "Hanchem Cultural Heritage Conservation",
    funding_ko: "한켐문화재보존"
  },
  {
    id: 123,
    title_en: "Buyeo Muryangsa Temple Stupa Complex",
    title_ko: "부여 무량사 부도군 도지정유산 지정 조사",
    category: "designation-research",
    duration: "2024",
    funding: "Buyeo County Office",
    funding_ko: "부여군청"
  },
  {
    id: 124,
    title_en: "Buyeo Royal Tomb Conservation Environment Research - Year 3",
    title_ko: "부여 왕릉원 고분 보존환경 연구_3차년도",
    category: "preservation-research",
    duration: "2024",
    funding: "Buyeo County Office",
    funding_ko: "부여군청"
  },
  {
    id: 125,
    title_en: "Pigment Analysis of Amitabha Preaching Painting at Baegyangsa Temple",
    title_ko: "백양사 아미타여래설법도 안료 1점 분석",
    category: "site-investigation",
    duration: "2024",
    funding: "Temple Cultural Heritage Research Institute",
    funding_ko: "사찰문화재연구원"
  },
  {
    id: 126,
    title_en: "Non-destructive Component Analysis of Metal Parts in Silkworm Artifact",
    title_ko: "산(蠶) 금속부 비파괴 성분분석",
    category: "site-investigation",
    duration: "2024",
    funding: "",
    funding_ko: ""
  },
  {
    id: 127,
    title_en: "Iron Buddha and Four Bodhisattvas Painting at Seoul Bongwonsa Temple",
    title_ko: "서울 봉원사 칠여래도 사보살도 보존상태 조사",
    category: "site-investigation",
    duration: "2024",
    funding: "Ganchaek Cultural Heritage Conservation",
    funding_ko: "간책문화재보존"
  },
  {
    id: 128,
    title_en: "Analysis of Palsangdo Painting at Seoul Anyangam Temple",
    title_ko: "서울 안양암 팔상도 분석",
    category: "site-investigation",
    duration: "2024",
    funding: "Ganchaek Cultural Heritage Conservation",
    funding_ko: "간책문화재보존"
  },
  {
    id: 129,
    title_en: "Scientific Analysis of Seven Stars Painting at Seoul Cheongryongsa Temple",
    title_ko: "서울 청룡사 칠성도 과학적 분석",
    category: "site-investigation",
    duration: "2024",
    funding: "Ganchaek Cultural Heritage Conservation",
    funding_ko: "간책문화재보존"
  },
  {
    id: 130,
    title_en: "Re-conservation Treatment of Iron Sword Excavated from Sejong Iseong",
    title_ko: "세종 이성 출토 철검 재보존처리",
    category: "excavated-conservation",
    duration: "2024",
    funding: "Hanseong Cultural Heritage Research Institute",
    funding_ko: "한성문화재연구원"
  },
  {
    id: 131,
    title_en: "Conservation Treatment of Metal Artifacts Excavated from Asan Galmae-ri and Maegok-ri",
    title_ko: "아산 갈매리 및 매곡리 외 출토 금속유물 보존처리",
    category: "excavated-conservation",
    duration: "2024",
    funding: "Goeun Cultural Heritage Research Institute",
    funding_ko: "고운문화재연구원"
  },
  {
    id: 132,
    title_en: "P-XRF Analysis of Clay Seated Buddha at Asan Sesilsa Temple",
    title_ko: "아산 세실사 소조여래좌상 P-XRF 분석",
    category: "site-investigation",
    duration: "2024",
    funding: "Groo",
    funding_ko: "그루"
  },
  {
    id: 133,
    title_en: "Four Guardian Kings and Ten Kings Statues at Yeosu Heungguksa Temple",
    title_ko: "여수 흥국사 사천왕상 및 시왕상 일괄 보존상태 조사",
    category: "site-investigation",
    duration: "2024",
    funding: "Daehan Cultural Heritage",
    funding_ko: "대한문화유산"
  },
  {
    id: 134,
    title_en: "Scientific Analysis of Amitabha Buddha Painting at Yesan Hyangcheonsa Temple",
    title_ko: "예산 향천사 아미타불화도 과학적 분석",
    category: "site-investigation",
    duration: "2024",
    funding: "Daehan Cultural Heritage",
    funding_ko: "대한문화유산"
  },
  {
    id: 135,
    title_en: "Conservation Treatment of Metal Artifacts Excavated from Osan Wondeung District 3",
    title_ko: "오산 원등3구역 출토 금속유물 보존처리",
    category: "excavated-conservation",
    duration: "2024",
    funding: "Hanseong Cultural Heritage Research Institute",
    funding_ko: "한성문화재연구원"
  },
  {
    id: 136,
    title_en: "Analysis of Gilt Layers on Wooden Shakyamuni Triad at Wanju Songgwangsa Temple",
    title_ko: "완주 송광사 목조석가여래삼존좌상 개금층 분석",
    category: "site-investigation",
    duration: "2024",
    funding: "Yeongsan Cultural Heritage Institute",
    funding_ko: "영산문화재연구소"
  },
  {
    id: 137,
    title_en: "Documentation and Clay Analysis of Wooden Shakyamuni Triad and Sixteen Arhats at Wanju Songgwangsa Temple",
    title_ko: "완주 송광사 목조석가여래삼존좌상 및 소조십육나한상 일괄 기록화 소조토 분석",
    category: "site-investigation",
    duration: "2024",
    funding: "Yeongsan Cultural Heritage Institute",
    funding_ko: "영산문화재연구소"
  },
  {
    id: 138,
    title_en: "Egypt ODA Project",
    title_ko: "이집트 룩소르 문화유산 복원 정비계획 및 라메세움 탑문 보수정비",
    category: "restoration-research",
    duration: "2024",
    funding: "Korea Heritage Service",
    funding_ko: "국가유산청",
    description_en: "Restoration and maintenance planning for cultural heritage in Luxor, Egypt, including the conservation of Ramesseum Pylon gates through international cooperation.",
    description_ko: "국제 협력을 통한 이집트 룩소르 문화유산의 복원 정비계획 수립 및 라메세움 탑문의 보존 작업을 진행합니다.",
    images: ["assets/projects/egypt-luxor-ramesseum.jpg.png"]
  },
  {
    id: 139,
    title_en: "Sample Analysis of Wooden Amitabha Buddha at Jangseong Baegyangsa Temple",
    title_ko: "장성 백양사 목조아미타여래좌상 시료 분석",
    category: "site-investigation",
    duration: "2024",
    funding: "",
    funding_ko: ""
  },
  {
    id: 141,
    title_en: "Pigment Analysis at Jeondeungsa Yaksajeon Hall",
    title_ko: "전등사 약사전 안료 분석",
    category: "site-investigation",
    duration: "2024",
    funding: "",
    funding_ko: ""
  },
  {
    id: 142,
    title_en: "Restoration of Artillery Shell Canopy at War Memorial of Korea",
    title_ko: "전쟁기념관 권총 덮개 복원",
    category: "restoration-research",
    duration: "2024",
    funding: "War Memorial of Korea",
    funding_ko: "전쟁기념관"
  },
  {
    id: 143,
    title_en: "Development of Smart Management System for War Artifacts and Conservation Environment Impact Analysis",
    title_ko: "천전리 각석 스마트 관리체계 개발 및 보존환경영향 분석",
    category: "preservation-research",
    duration: "2024",
    funding: "Ulsan City Office",
    funding_ko: "울산시청"
  },
  {
    id: 144,
    title_en: "Analysis of Avalokitesvara Mural and Dharma Master Mural at Daeungbojeon Hall, Cheongdo Unmunsa Temple",
    title_ko: "청도 운문사 대웅보전 관음부석, 달마대사 벽화 분석",
    category: "site-investigation",
    duration: "2024",
    funding: "Silla Conservation Science Research Institute",
    funding_ko: "신라보존과학연구소"
  },
  {
    id: 83,
    title_en: "Analysis of Dancheong Samples at Daeungjeon Hall, Ganghwa Jeondeungsa Temple",
    title_ko: "강화 전등사 대웅전 단청 시료 분석",
    category: "site-investigation",
    duration: "2023",
    funding: "Temple Cultural Heritage Conservation Research Institute",
    funding_ko: "사찰문화재보존연구소"
  },
  {
    id: 85,
    title_en: "Scientific Analysis of Bronze Bell at Gongseong Seosansa Temple",
    title_ko: "곡성 서산사 동종 과학적 분석",
    category: "site-investigation",
    duration: "2023",
    funding: "Handeum Cultural Heritage",
    funding_ko: "한듬문화재"
  },
  {
    id: 86,
    title_en: "Pigment Analysis of Rock-carved Buddha at Gurye Saseongam Temple",
    title_ko: "구례 사성암 마애여래입상 안료 분석",
    category: "site-investigation",
    duration: "2023",
    funding: "Temple Cultural Heritage Research Institute",
    funding_ko: "사찰문화재연구소"
  },
  {
    id: 87,
    title_en: "Analysis of Gilt Layers on Dry Lacquer Amitabha Buddha at Gumi Daedunsa Temple",
    title_ko: "구미 대둔사 건칠아미타여래좌상 개금층 분석",
    category: "site-investigation",
    duration: "2023",
    funding: "Duyeong Cultural Heritage",
    funding_ko: "두영문화재"
  },
  {
    id: 88,
    title_en: "Conservation Treatment of Excavated Artifacts from Gumi Hi-Tech Valley Phase 2 Site (Haepyeong-myeon), 1st & 2nd Phase",
    title_ko: "구미 하이테크밸리 2단계(해평면) 내 유적 발굴조사 출토유물 보존처리",
    category: "excavated-conservation",
    duration: "2023",
    funding: "Korea Cultural Heritage Research Institute",
    funding_ko: "한국문화재연구원"
  },
  {
    id: 89,
    title_en: "Restoration of Lighting Effects on Stone Maitreya Bodhisattva at Nonsan Gwanchoksa Temple",
    title_ko: "논산 관촉사 석조미륵보살입상 청동풍탁 복원",
    category: "restoration-research",
    duration: "2023",
    funding: "Hanchem Cultural Heritage Conservation",
    funding_ko: "한켐문화재보존"
  },
  {
    id: 90,
    title_en: "Paint Sample Analysis Request for Daejeon Museum of Art",
    title_ko: "대전시립미술관 페인트 시료분석",
    category: "site-investigation",
    duration: "2023",
    funding: "Groo",
    funding_ko: "그루"
  },
  {
    id: 91,
    title_en: "Comparative Analysis Research for Estimating Korean-style Cattle Production Methods",
    title_ko: "대한식 소총의 제작방법 추정을 위한 비교분석 연구",
    category: "site-investigation",
    duration: "2023",
    funding: "War Memorial of Korea",
    funding_ko: "전쟁기념관"
  },
  {
    id: 93,
    title_en: "Lime Mortar Analysis at Munsusan Fortress",
    title_ko: "문수산성 회 모르타르 분석",
    category: "site-investigation",
    duration: "2023",
    funding: "Analysis Laboratory",
    funding_ko: "무기질문화재과학기술연구소"
  },
  {
    id: 94,
    title_en: "Conservation Treatment and Analysis of Excavated Artifacts from Buyeo Gunsuri",
    title_ko: "부여 군수리 발굴조사 출토유물 보존처리 및 분석",
    category: "excavated-conservation",
    duration: "2023",
    funding: "University Museum Archaeological History Department",
    funding_ko: "한국전통문화대학교 고고학연구소"
  },
  {
    id: 95,
    title_en: "Documentation of Couple Statues at Buyeo",
    title_ko: "부여 보부상 유물 기록화",
    category: "site-investigation",
    duration: "2023",
    funding: "Yeojin Conservation Science",
    funding_ko: "여진보존과학"
  },
  {
    id: 96,
    title_en: "Conservation Treatment and Analysis of Artifacts from 9th Excavation at Buyeo Wangheungwon (Donggobungun)",
    title_ko: "부여 왕릉원 (동고분군) 9차 발굴조사 출토유물 보존처리 및 분석",
    category: "excavated-conservation",
    duration: "2023",
    funding: "University Museum Archaeological History Department",
    funding_ko: "한국전통문화대학교 고고학연구소"
  },
  {
    id: 97,
    title_en: "Buyeo Wangheungwon Ancient Tomb Conservation Environment Research - Year 2",
    title_ko: "부여 왕릉원 고분 보존환경 연구_2차년도",
    category: "preservation-research",
    duration: "2023",
    funding: "Buyeo County Office",
    funding_ko: "부여군청"
  },
  {
    id: 98,
    title_en: "Conservation Treatment of Excavated Artifacts from Sejong Sinbangri and Iseong",
    title_ko: "세종 신방리&이성 출토 유물 보존처리",
    category: "excavated-conservation",
    duration: "2023",
    funding: "Hanseong Cultural Heritage Research Institute",
    funding_ko: "한성문화재연구원"
  },
  {
    id: 99,
    title_en: "Pigment Analysis of Bricks and Dancheong at Yeosu Jinnamgwan",
    title_ko: "여수 진남관 전통 단청 안료 분석",
    category: "site-investigation",
    duration: "2023",
    funding: "Goryeo Dancheong",
    funding_ko: "고려단청"
  },
  {
    id: 100,
    title_en: "Conservation Treatment of Metal Artifacts Excavated from Yesan Sangiri and 2 Other Sites",
    title_ko: "예산 산기리 외 2 유구 출토 금속유물 보존처리",
    category: "excavated-conservation",
    duration: "2023",
    funding: "Goeun Cultural Heritage Research Institute",
    funding_ko: "고운문화재연구원"
  },
  {
    id: 101,
    title_en: "Scientific Analysis of Amitabha Buddha Painting at Yesan Hyangcheonsa Temple",
    title_ko: "예산 향천사 아미타불화도 과학적 분석",
    category: "site-investigation",
    duration: "2023",
    funding: "Daehan Cultural Heritage",
    funding_ko: "대한문화유산"
  },
  {
    id: 103,
    title_en: "Scientific Analysis of Iron Seated Vairocana Buddha at Jangheung Borimsa Temple",
    title_ko: "장흥 보림사 철조비로자나불좌상 과학적 분석",
    category: "site-investigation",
    duration: "2023",
    funding: "Handeum Cultural Heritage",
    funding_ko: "한듬문화재"
  },
  {
    id: 104,
    title_en: "Development Plan for Conservation and Management of War Memorial Military Artifacts",
    title_ko: "전쟁 군사유물 보존 및 관리 발전 방안",
    category: "preservation-research",
    duration: "2023",
    funding: "War Memorial of Korea",
    funding_ko: "전쟁기념관"
  },
  {
    id: 105,
    title_en: "Production Technique Analysis of Column Materials at French Embassy in Korea",
    title_ko: "주한프랑스대사관 기동 부재 제작기법 분석",
    category: "site-investigation",
    duration: "2023",
    funding: "Jeongdo Cultural Heritage",
    funding_ko: "정도문화유산"
  },
  {
    id: 106,
    title_en: "Scientific Analysis of Buddhist Sculptures at Yeongsanjeon and Myeongbujeon Halls, Cheongdo Deoksa Temple",
    title_ko: "청도 덕사 영산전, 명부전 불조각상 과학적 분석",
    category: "site-investigation",
    duration: "2023",
    funding: "Silla Conservation Science Research Institute",
    funding_ko: "신라보존과학연구소"
  },
  {
    id: 107,
    title_en: "Structural Safety Diagnosis of Cheongju Goeunri Old House",
    title_ko: "청주 고은리 고택 구조안전진단",
    category: "preservation-research",
    duration: "2023",
    funding: "Facility Safety Research Institute",
    funding_ko: "시설물안전연구원"
  },
  {
    id: 108,
    title_en: "Research on Raw Materials and Characteristics of Shell Lime Used in Korean Peninsula Ancient Tombs and Tomb Murals",
    title_ko: "한반도 고분 및 고분벽화에 사용된 패회의 원료 및 특성 연구",
    category: "preservation-research",
    duration: "2023",
    funding: "National Research Institute of Cultural Heritage",
    funding_ko: "국립문화유산연구원"
  },
  {
    id: 109,
    title_en: "Research on Roof Tile Restoration Plan for Daeungjeon Hall at Haenam Mihwangsa Temple",
    title_ko: "해남 미황사 대웅전 기와 복원방안 연구",
    category: "restoration-research",
    duration: "2023",
    funding: "Yeongsan Cultural Heritage",
    funding_ko: "영산문화재"
  },
  {
    id: 110,
    title_en: "P-XRF Analysis and Infrared Photography of Pigments in Hong Man-jo Portrait",
    title_ko: "홍만조 초상 안료 P-XRF 분석 및 적외선 촬영",
    category: "site-investigation",
    duration: "2023",
    funding: "Groo",
    funding_ko: "그루"
  },
  {
    id: 111,
    title_en: "Analysis of White-robed Avalokitesvara Painting at Hasun Yangryongsa Temple",
    title_ko: "화순 양복사 백의관음도 분석",
    category: "site-investigation",
    duration: "2023",
    funding: "",
    funding_ko: ""
  },
  {
    id: 1,
    title_en: "Non-destructive Analysis of Korean War Casualties' Personal Effects",
    title_ko: "6.25 전사자 유품 비파괴 분석",
    category: "site-investigation",
    duration: "2022",
    funding: "Youngin Co., Ltd.",
    funding_ko: "주식회사 영인"
  },
  {
    id: 2,
    title_en: "Scientific Investigation of Goyang Samcheonsa Temple Site Monument",
    title_ko: "고양 삼천사지 대지국사탑비 과학적 조사",
    category: "site-investigation",
    duration: "2022",
    funding: "Seojin Cultural Heritage",
    funding_ko: "서진문화유산"
  },
  {
    id: 3,
    title_en: "Scientific Analysis of Wooden Jijang Bodhisattva and Ten Kings Statues at Gochang Munsu Temple",
    title_ko: "고창 문수사 목조지장보살좌상 및 시왕상 과학적 분석",
    category: "site-investigation",
    duration: "2022",
    funding: "Yeongsan Cultural Heritage Institute",
    funding_ko: "영산문화재연구소"
  },
  {
    id: 5,
    title_en: "Scientific Investigation of Interior Murals at Daegwangbojeon Hall, Gongju Magoksa Temple",
    title_ko: "공주 마곡사 대광보전 내부벽화 과학적 조사",
    category: "site-investigation",
    duration: "2022",
    funding: "Seojin Cultural Heritage",
    funding_ko: "서진문화유산"
  },
  {
    id: 6,
    title_en: "Clay Analysis of Four Guardian Kings Statues at Gongju Magoksa Temple",
    title_ko: "공주 마곡사 사천왕상 소조토 분석",
    category: "site-investigation",
    duration: "2022",
    funding: "Cultural Heritage Administration",
    funding_ko: "문화재청"
  },
  {
    id: 7,
    title_en: "Surface Investigation and Compositional Analysis of Outdoor Sculptures at MMCA Gwacheon",
    title_ko: "국립현대미술관 과천관 야외조각공원 조각작품 DB 구축용 표면 조사 및 성분분석",
    category: "site-investigation",
    duration: "2022",
    funding: "Groo",
    funding_ko: "그루"
  },
  {
    id: 8,
    title_en: "Scientific Analysis of Gangjin Kim Hae Kim Clan's Funeral Bier at Gwangju Metropolitan Museum",
    title_ko: "광주광역시립박물관 강진김해김씨가 상여 과학적 분석",
    category: "site-investigation",
    duration: "2022",
    funding: "Woori Cultural Heritage",
    funding_ko: "우리문화재"
  },
  {
    id: 10,
    title_en: "Scientific Investigation of Daejiguksa Stupa at Gochang Samcheongsa Temple Site",
    title_ko: "고양 삼천사지 대지국사탑비 과학적 조사",
    category: "site-investigation",
    duration: "2022",
    funding: "Seojin Cultural Heritage",
    funding_ko: "서진문화유산"
  },
  {
    id: 11,
    title_en: "Scientific Analysis of Wooden Jijang Bosal and Siwang Statues at Gochang Munsu Temple",
    title_ko: "고창 문수사 목조지장보살좌상 및 시왕상 과학적 분석",
    category: "site-investigation",
    duration: "2022",
    funding: "Yeongsan Cultural Heritage Institute",
    funding_ko: "영산문화재연구소"
  },
  {
    id: 13,
    title_en: "Scientific Investigation of Interior Murals at Daegwangbojeon Hall, Gongju Magoksa Temple",
    title_ko: "공주 마곡사 대광보전 내부벽화 과학적 조사",
    category: "site-investigation",
    duration: "2022",
    funding: "Seojin Cultural Heritage",
    funding_ko: "서진문화유산"
  },
  {
    id: 14,
    title_en: "Clay Analysis of Four Guardian Kings Statues at Gongju Magoksa Temple",
    title_ko: "공주 마곡사 사천왕상 소조토 분석",
    category: "site-investigation",
    duration: "2022",
    funding: "Cultural Heritage Administration",
    funding_ko: "문화재청"
  },
  {
    id: 15,
    title_en: "Surface Investigation and Compositional Analysis for Database of Outdoor Sculptures at Gwacheon MMCA Sculpture Park",
    title_ko: "과천관 야외조각공원 조각품 DB 구축용 표면 조사 및 성분분석",
    category: "site-investigation",
    duration: "2022",
    funding: "Groo",
    funding_ko: "그루"
  },
  {
    id: 16,
    title_en: "Scientific Analysis of Gangjin Gimhae Kim Clan's Funeral Bier at Gwangju Metropolitan Museum",
    title_ko: "광주광역시립박물관 강진김해김씨가 상여 과학적 분석",
    category: "site-investigation",
    duration: "2022",
    funding: "Woori Cultural Heritage",
    funding_ko: "우리문화재"
  },
  {
    id: 17,
    title_en: "Scientific Investigation and Database Construction for Outdoor Sculpture Preservation at National Museum of Modern and Contemporary Art",
    title_ko: "구미 대둔사 건칠아미타여래좌상 및 대좌 과학적 조사",
    category: "site-investigation",
    duration: "2022",
    funding: "Owon Cultural Heritage",
    funding_ko: "오원문화유산"
  },
  {
    id: 18,
    title_en: "Scientific Analysis of Tongyeong Statue and Mortar Materials",
    title_ko: "군산 둔율동 성당 마감재 및 모르타르 재료기법 분석",
    category: "site-investigation",
    duration: "2022",
    funding: "Borim Cultural Heritage",
    funding_ko: "보림문화재"
  },
  {
    id: 19,
    title_en: "Scientific Analysis of Goryeo-era Gilt Bronze Reliquary and Wooden Pagoda from Doryang-ri, Buyeo",
    title_ko: "근현대 표준 및 검정용 도량형 비파괴 분석 결과",
    category: "site-investigation",
    duration: "2022",
    funding: "Doryang-Measures Museum",
    funding_ko: "도량형박물관"
  },
  {
    id: 20,
    title_en: "X-ray Analysis of Gold Threads",
    title_ko: "금동관 X-ray 분석",
    category: "site-investigation",
    duration: "2022",
    funding: "Haman County Office",
    funding_ko: "함안군청"
  },
  {
    id: 21,
    title_en: "Scientific Analysis of Wooden Jijang Bodhisattva and sixteen Zodiac Guardian Statues at Naju Dabuosa Temple",
    title_ko: "나주 다보사 목조석가여래삼존상 및 소조십육나한상 과학적 분석",
    category: "site-investigation",
    duration: "2022",
    funding: "Engard",
    funding_ko: "엔가드"
  },
  {
    id: 22,
    title_en: "Scientific Analysis of Dancheong and Painting at Naju Jukrimsa Temple",
    title_ko: "나주 죽림사 극락보전 단청 과학적 분석",
    category: "site-investigation",
    duration: "2022",
    funding: "Handeum Cultural Heritage",
    funding_ko: "한듬문화재"
  },
  {
    id: 23,
    title_en: "Scientific Analysis of Naju Jukrimsa Geukrakbojeon Wall Paintings",
    title_ko: "나주 죽림사 극락보전 벽화 과학적 분석",
    category: "site-investigation",
    duration: "2022",
    funding: "Handeum Cultural Heritage",
    funding_ko: "한듬문화재"
  },
  {
    id: 24,
    title_en: "Scientific Analysis of Damyang Miryangsa Daeungjeon Wall Paintings",
    title_ko: "담양 미암사당 벽화 과학적 분석",
    category: "site-investigation",
    duration: "2022",
    funding: "",
    funding_ko: ""
  },
  {
    id: 25,
    title_en: "Conservation Treatment and Scientific Analysis of Embroidered Chogak Cushions at Daegu Modern History Museum",
    title_ko: "대구근대역사박물관 소장 석조각상 보존처리",
    category: "excavated-conservation",
    duration: "2022",
    funding: "Daegu Modern History Museum",
    funding_ko: "대구근대역사박물관"
  },
  {
    id: 26,
    title_en: "Research on Traditional Conservation Materials and Damage Inhibition Methods",
    title_ko: "동산문화재 구조보강용 전통 철물의 수리복원방안 연구",
    category: "restoration-research",
    duration: "2022",
    funding: "Korea National University of Heritage",
    funding_ko: "한국전통문화대학교"
  },
  {
    id: 27,
    title_en: "Research on Water Repellent Treatment Materials and Damage Inhibition for Earthen Heritage",
    title_ko: "등록문화재 동산유물의 수리복원용 무기재료 연구",
    category: "restoration-research",
    duration: "2022",
    funding: "Korea National University of Heritage",
    funding_ko: "한국전통문화대학교"
  },
  {
    id: 28,
    title_en: "Research on Water Repellent Treatment of Traditional Earthen Walls and Development of Monitoring Smart Management System",
    title_ko: "문화재 수리복원용 전통 장석의 소재 물성 지표 및 수리지침 개발 연구",
    category: "restoration-research",
    duration: "2022",
    funding: "Korea National University of Heritage",
    funding_ko: "한국전통문화대학교"
  },
  {
    id: 29,
    title_en: "Development of Smart Monitoring System for Conservation Environment Management of Cultural Heritage Storehouses",
    title_ko: "반구대 암각화 보존환경 모니터링 스마트관리체계 개발사업",
    category: "preservation-research",
    duration: "2022",
    funding: "Ulsan City",
    funding_ko: "울산시청"
  },
  {
    id: 30,
    title_en: "3D Precision Safety Management Monitoring of Bangudae Petroglyphs",
    title_ko: "반구대암각화 3D 정밀 안전관리 모니터링",
    category: "preservation-research",
    duration: "2022",
    funding: "Hamcha Co., Ltd. Hanbit",
    funding_ko: "합자회사 한빛"
  },
  {
    id: 31,
    title_en: "Development of Technology to Overcome Cultural Heritage Shear Analysis Environment Using Radiation Technology",
    title_ko: "방사선 기술을 활용한 문화재 진단분석 환경 극복기술 개발",
    category: "preservation-research",
    duration: "2022",
    funding: "National Research Institute of Cultural Heritage R&D",
    funding_ko: "국립문화재연구소"
  },
  {
    id: 32,
    title_en: "Conservation Treatment of Metal Artifacts Excavated from Buyeo Neungsanri Ancient Tombs",
    title_ko: "부여 능산리고분군 발굴조사 출토 금속유물 보존처리",
    category: "excavated-conservation",
    duration: "2022",
    funding: "Archaeological Research Institute",
    funding_ko: "한국전통문화대학교 고고학연구소"
  },
  {
    id: 33,
    title_en: "Academic Research on Stone Maitreya Bodhisattva at Buyeo Daejosa Temple",
    title_ko: "부여 대조사 석조미륵보살입상 학술조사",
    category: "site-investigation",
    duration: "2022",
    funding: "Buyeo County Office",
    funding_ko: "부여군청"
  },
  {
    id: 34,
    title_en: "Investigation for Promotion to Treasure Status of Bronze Bell at Buyeo Muryangsa Temple",
    title_ko: "부여 무량사 동종 보물 승격 조사",
    category: "designation-research",
    duration: "2022",
    funding: "Buyeo County Office",
    funding_ko: "부여군청"
  },
  {
    id: 35,
    title_en: "Scientific Analysis of Pigments in Samjeonpae at Buyeo Muryangsa Temple",
    title_ko: "부여 무량사 삼전패 채색안료 과학적 분석",
    category: "site-investigation",
    duration: "2022",
    funding: "",
    funding_ko: ""
  },
  {
    id: 36,
    title_en: "Analysis of Production Techniques and Conservation Plan for Clay Amitabha Triad at Buyeo Muryangsa Temple",
    title_ko: "부여 무량사 소조아미타여래삼존상 제작기법 분석 및 보존방안 연구",
    category: "site-investigation",
    duration: "2022",
    funding: "Groo",
    funding_ko: "그루"
  },
  {
    id: 37,
    title_en: "Scientific Analysis of Cheonbuld Painting at Yeongsanjeon Hall, Buyeo Muryangsa Temple",
    title_ko: "부여 무량사 영산전 천불도 과학적 분석",
    category: "site-investigation",
    duration: "2022",
    funding: "",
    funding_ko: ""
  },
  {
    id: 38,
    title_en: "X-ray Transmission Photography of Iron Artifacts Excavated from Buyeo Busosanseong Fortress",
    title_ko: "부여 부소산성 발굴조사 출토 철제유물 X-ray 투과촬영 조사",
    category: "excavated-conservation",
    duration: "2022",
    funding: "",
    funding_ko: ""
  },
  {
    id: 39,
    title_en: "Conservation Treatment of Metal Artifacts from 24th Excavation at Buyeo Songguk-ri Site",
    title_ko: "부여 송국리 유적 24차 문화재 발굴조사 출토 금속유물 보존처리",
    category: "excavated-conservation",
    duration: "2022",
    funding: "Archaeological Research Institute",
    funding_ko: "고고학연구소"
  },
  {
    id: 40,
    title_en: "Conservation Treatment of Metal Artifacts from 25th Excavation at Buyeo Songguk-ri Site",
    title_ko: "부여 송국리 유적 25차 문화재 발굴조사 출토 금속유물 보존처리",
    category: "excavated-conservation",
    duration: "2022",
    funding: "Archaeological Research Institute",
    funding_ko: "고고학연구소"
  },
  {
    id: 41,
    title_en: "Conservation Status Investigation of Stone Seated Buddha at Buyeo Jeongnimsa Temple Site",
    title_ko: "부여 정림사지 석조여래좌상 보존상태조사",
    category: "site-investigation",
    duration: "2022",
    funding: "Facility Safety Research Institute",
    funding_ko: "시설물안전연구원"
  },
  {
    id: 42,
    title_en: "Precision Safety Diagnosis Services for Guest House at Buyeo Hongsanhyeon Government Office",
    title_ko: "부여 홍산현 관아 객사 정밀안전진단",
    category: "preservation-research",
    duration: "2022",
    funding: "Facility Safety Research Institute",
    funding_ko: "시설물안전연구원"
  },
  {
    id: 43,
    title_en: "Scientific Analysis of Gilt Layers on Wooden Amitabha Buddha at Seosan Gaesimsa Temple",
    title_ko: "서산 개심사 목조아미타여래좌상 개금층 과학적 분석",
    category: "site-investigation",
    duration: "2022",
    funding: "",
    funding_ko: ""
  },
  {
    id: 44,
    title_en: "Research for National Treasure Promotion of Treasure at Seosan Bowonsa Temple Site",
    title_ko: "서산 보원사지 보물문화재 국보승격 연구",
    category: "designation-research",
    duration: "2022",
    funding: "Seosan City Office",
    funding_ko: "서산시청"
  },
  {
    id: 45,
    title_en: "Conservation Treatment and Analysis of Iron Artifacts Excavated from Seosan Yecheon-dong",
    title_ko: "서산 예천동 출토 철제유물 보존처리 및 분석",
    category: "excavated-conservation",
    duration: "2022",
    funding: "Goeun Cultural Heritage Research Institute",
    funding_ko: "고은문화재연구원"
  },
  {
    id: 46,
    title_en: "Precision Safety Diagnosis Services for Former Gongdeok Substation Main Building in Seoul",
    title_ko: "서울 구 공업전승소 본관 정밀안전진단",
    category: "preservation-research",
    duration: "2022",
    funding: "Facility Safety Research Institute",
    funding_ko: "시설물안전연구원"
  },
  {
    id: 47,
    title_en: "Scientific Analysis of Fire Helicopter Ggachi-2 at Seoul Boramae Safety Experience Center",
    title_ko: "서울 보라매안전체험관 소장 소방 헬기 까치2호 과학적 분석",
    category: "site-investigation",
    duration: "2022",
    funding: "",
    funding_ko: ""
  },
  {
    id: 48,
    title_en: "Infrared Thermography Investigation of Gilt Bronze Bodhisattva at Seoul Botosa Temple",
    title_ko: "서울 보타사 금동보살좌상 적외선 열화상 촬영 조사",
    category: "site-investigation",
    duration: "2022",
    funding: "Engard",
    funding_ko: "엔가드"
  },
  {
    id: 49,
    title_en: "Infrared Thermography Investigation of Gilt Bronze Thousand-armed Avalokitesvara at Seoul Heungcheonsa Temple",
    title_ko: "서울 흥천사 금동천수관음보살좌상 적외선 열화상 촬영 조사",
    category: "site-investigation",
    duration: "2022",
    funding: "Engard",
    funding_ko: "엔가드"
  },
  {
    id: 50,
    title_en: "Research for Treasure Promotion of Clay Amitabha Buddha at Sejong Jeonui Biamsa Temple",
    title_ko: "세종 전의 비암사 소조아미타여래좌상 보물 승격 연구",
    category: "designation-research",
    duration: "2022",
    funding: "Sejong City Office",
    funding_ko: "세종시청"
  },
  {
    id: 51,
    title_en: "Conservation Treatment of Metal Artifacts Excavated from Cultural Heritage Site at Asan Yonghwa Namsan District 2 Urban Development Project",
    title_ko: "아산 용화 남산2지구 도시개발사업부지 내 문화유적 발굴조사 출토 금속유물 보존처리",
    category: "excavated-conservation",
    duration: "2022",
    funding: "Baekje Cultural Heritage Research Institute",
    funding_ko: "(재)백제문화재연구원"
  },
  {
    id: 52,
    title_en: "Scientific Investigation of Rock-carved Bell at Anyang Seoksu-dong",
    title_ko: "안양 석수동 마애종 과학적 조사",
    category: "site-investigation",
    duration: "2022",
    funding: "Engard",
    funding_ko: "엔가드"
  },
  {
    id: 53,
    title_en: "Infrared Thermography Investigation of Wooden Amitabha Buddha at Yeongju Heukseoksa Temple",
    title_ko: "영주 흑석사 목조아미타여래좌상 적외선 열화상 촬영 조사",
    category: "site-investigation",
    duration: "2022",
    funding: "Engard",
    funding_ko: "엔가드"
  },
  {
    id: 54,
    title_en: "Analysis of Production Techniques for Wooden Amitabha Preaching Sculpture at Yecheon Yongmunsa Temple",
    title_ko: "예천 용문사 목각아미타여래설법상 제작기법 분석",
    category: "site-investigation",
    duration: "2022",
    funding: "Yeojin Conservation Science",
    funding_ko: "여진보존과학"
  },
  {
    id: 55,
    title_en: "Scientific Analysis of Murals and Dancheong Pigments at Anju Songgwangsa Daeungjeon Hall",
    title_ko: "완주 송광사 대웅전 벽화 및 단청 안료 과학적 분석비",
    category: "site-investigation",
    duration: "2022",
    funding: "Temple Cultural Heritage Research Institute",
    funding_ko: "사찰문화재연구소"
  },
  {
    id: 56,
    title_en: "Scientific Analysis of Concealed Objects in Clay Shakyamuni Triad at Anju Songgwangsa Temple",
    title_ko: "완주 송광사 소조석가여래삼불상 복장유물 과학적 분석비",
    category: "site-investigation",
    duration: "2022",
    funding: "Geumgang Cultural Heritage",
    funding_ko: "금강문화재"
  },
  {
    id: 57,
    title_en: "Conservation Treatment of Doll Artifacts at Ewha Womans University Museum",
    title_ko: "이화여대박물관 인왕동 유물 보존처리",
    category: "excavated-conservation",
    duration: "2022",
    funding: "Seojin Cultural Heritage",
    funding_ko: "서진문화유산"
  },
  {
    id: 58,
    title_en: "Scientific Investigation of Interior Murals and Dancheong at Iksan Sungrimsa Bogwangjeon Hall",
    title_ko: "익산 숭림사 보광전 내부벽화 및 단청 과학적 조사",
    category: "site-investigation",
    duration: "2022",
    funding: "Daesan CPC",
    funding_ko: "대산씨피씨"
  },
  {
    id: 59,
    title_en: "Conservation Work for Iron Seated Buddha at Incheon Yongsu Temple",
    title_ko: "인천 용수사 철조여래좌상 보존",
    category: "preservation-research",
    duration: "2022",
    funding: "Daesan Cultural Heritage Conservation",
    funding_ko: "대산문화재보존"
  },
  {
    id: 60,
    title_en: "Conservation Treatment of Iron Seated Buddha at Incheon Yongsu Temple",
    title_ko: "인천 용수사 철조여래좌상 보존처리",
    category: "excavated-conservation",
    duration: "2022",
    funding: "",
    funding_ko: ""
  },
  {
    id: 61,
    title_en: "Scientific Investigation of Bronze Avalokitesvara Bodhisattva at Incheon City Museum",
    title_ko: "인천시립박물관 소장 청동관음보살좌상 과학적 조사",
    category: "site-investigation",
    duration: "2022",
    funding: "Engard",
    funding_ko: "엔가드"
  },
  {
    id: 62,
    title_en: "Investigation for Promotion of Ilraksa Iron Buddha",
    title_ko: "일락사철불 승격지정 조사",
    category: "designation-research",
    duration: "2022",
    funding: "Seosan City Office",
    funding_ko: "서산시청"
  },
  {
    id: 63,
    title_en: "Scientific Investigation of Choi Dae-gi Portrait Copy and 3 Other Items at Ilsil Juamsa Temple",
    title_ko: "임실 주암사원 소장 최덕지 초상 이모본 외 3건 과학적 조사",
    category: "site-investigation",
    duration: "2022",
    funding: "",
    funding_ko: ""
  },
  {
    id: 64,
    title_en: "Analysis and Conservation Treatment of Iron Artifacts Excavated from Jangsu Janggye-ri Ancient Tombs",
    title_ko: "장수 장계리 고분군 출토 철제유물 분석 및 보존처리",
    category: "excavated-conservation",
    duration: "2022",
    funding: "Jeonbuk Cultural Heritage Research Institute",
    funding_ko: "전북문화재연구원"
  },
  {
    id: 65,
    title_en: "Scientific Analysis Report of Amitabha Buddha Painting at Jeondeungsa Gangseoldang Hall",
    title_ko: "전등사 강설당 아미타불화 과학적 분석",
    category: "site-investigation",
    duration: "2022",
    funding: "Ganchaek Cultural Heritage Conservation",
    funding_ko: "간책문화재보존"
  },
  {
    id: 66,
    title_en: "Scientific Analysis of Wooden Amitabha Triad Shrine and 1 Other Item at Jeju Yeongjosa Temple",
    title_ko: "제주 영조사 목조아미타여래삼존불감 외 1건 과학적 분석",
    category: "site-investigation",
    duration: "2022",
    funding: "Donghae Construction",
    funding_ko: "동해건설"
  },
  {
    id: 67,
    title_en: "Scientific Investigation of Avalokitesvara Mural and Buddhist Altar at Changnyeong Gwanryongsa Daeungjeon Hall",
    title_ko: "창녕 관룡사 대웅전 관음보살벽화 및 불단 과학적 조사",
    category: "site-investigation",
    duration: "2022",
    funding: "Temple Cultural Heritage Research Institute",
    funding_ko: "사찰문화재연구소"
  },
  {
    id: 68,
    title_en: "Scientific Investigation of Changdeokgung Palace Signboards",
    title_ko: "창덕궁 현판 과학적 조사",
    category: "site-investigation",
    duration: "2022",
    funding: "Donghae Construction",
    funding_ko: "동해건설"
  },
  {
    id: 69,
    title_en: "Scientific Analysis of Gilt Bronze Bodhisattva at Cheongyang Unjangam Temple",
    title_ko: "청양 운장암 금동보살좌상 과학적 분석",
    category: "site-investigation",
    duration: "2022",
    funding: "",
    funding_ko: ""
  },
  {
    id: 70,
    title_en: "Non-destructive Component Analysis of 4 Buddhist Paintings at Cheongju Daerimsa Temple",
    title_ko: "청주 대현사 조성화 4점 비파괴성분 분석",
    category: "site-investigation",
    duration: "2022",
    funding: "Engard",
    funding_ko: "엔가드"
  },
  {
    id: 71,
    title_en: "Evaluation for Promotion of Stone Buddha at Cheongju Bijung-ri and 2 Other Items",
    title_ko: "청주 비중리 석조여래상 외 2건 손상도 평가",
    category: "preservation-research",
    duration: "2022",
    funding: "",
    funding_ko: ""
  },
  {
    id: 72,
    title_en: "Scientific Analysis of Metal Artifacts Excavated from Cheongju Songjeong-dong 102-5",
    title_ko: "청주 송정동 102-5번지 출토 금속유물 과학적 분석",
    category: "excavated-conservation",
    duration: "2022",
    funding: "Korean Prehistory Research Institute",
    funding_ko: "한국선사연구원"
  },
  {
    id: 73,
    title_en: "Scientific Analysis of Pottery Excavated from Small Factory Site at Cheongju Songjeong-dong 407",
    title_ko: "청주 송정동(407번지) 소규모 공장신축부지 내 유적 출토 토기의 과학적 분석",
    category: "excavated-conservation",
    duration: "2022",
    funding: "Korean Prehistory Research Institute",
    funding_ko: "한국선사연구원"
  },
  {
    id: 74,
    title_en: "Scientific Investigation of Choi Ik-hyeon Portrait",
    title_ko: "최익현 초상화 과학적 조사",
    category: "site-investigation",
    duration: "2022",
    funding: "Hogojangwhang Cultural Heritage Research Institute",
    funding_ko: "호고장황문화재연구소"
  },
  {
    id: 75,
    title_en: "Scientific Analysis of Gilt Layers and Earthen Layers on Wooden Shakyamuni Triad at Cheolgok Songrimsa Temple",
    title_ko: "칠곡 송림사 목조석가여래삼존좌상 개금층 및 토회층 과학적 분석",
    category: "site-investigation",
    duration: "2022",
    funding: "Yeojin Conservation Science",
    funding_ko: "여진보존과학"
  },
  {
    id: 76,
    title_en: "Conservation Status Analysis of Large-scale Metal Composite Artifacts at Tanggwang Cultural Park Awa",
    title_ko: "탄광문화공원 야외 중대형 금속복합유물 보존상태 분석",
    category: "site-investigation",
    duration: "2022",
    funding: "Hanchem",
    funding_ko: "한켐"
  },
  {
    id: 77,
    title_en: "Test Printing Plate Damage Experiment and Conservation Treatment Technology Application by Damage Type",
    title_ko: "테스트 경판 손상실험 및 손상유형별 보존처리 기술 적용",
    category: "preservation-research",
    duration: "2022",
    funding: "",
    funding_ko: ""
  },
  {
    id: 78,
    title_en: "Scientific Analysis of Bronze Bell at Tongyeong Anjeonsa Temple",
    title_ko: "통영 안정사 동종 과학적 분석",
    category: "site-investigation",
    duration: "2022",
    funding: "Giram Cultural Heritage Conservation",
    funding_ko: "기람문화재보존"
  },
  {
    id: 79,
    title_en: "Infrared Photography Analysis of Master Seosan's Haengcho Jeongseon Poem at Haenam Daeheungsa Temple",
    title_ko: "해남 대흥사 서산대사 행초 정선사가록 적외선 촬영 분석",
    category: "site-investigation",
    duration: "2022",
    funding: "Handeum Cultural Heritage Conservation",
    funding_ko: "한듬문화재보존"
  },
  {
    id: 80,
    title_en: "Pigment Analysis for Dancheong Documentation at Eungjindang Hall, Haenam Mihwangsa Temple",
    title_ko: "해남 미황사 응진당 단청기록화 안료 분석",
    category: "site-investigation",
    duration: "2022",
    funding: "Temple Cultural Heritage Conservation Research Institute",
    funding_ko: "사찰문화재보존연구소"
  },
  {
    id: 81,
    title_en: "Metallurgical Analysis of Iron Seated Vairocana Buddha at Haenam Eunjeoksa Temple",
    title_ko: "해남 은적사 철조비로자나불좌상 금속학적 분석",
    category: "site-investigation",
    duration: "2022",
    funding: "Yeongsin Cultural Heritage Conservation",
    funding_ko: "영신문화재보존"
  },
  {
    id: 82,
    title_en: "Management Plan for Chairman Chung Ju-young's Personal Effects at Hyundai Asan Corporate Museum",
    title_ko: "현대 아산기념관 소장 정주영 회장 유품 관리방안",
    category: "preservation-research",
    duration: "2022",
    funding: "Hyundai Engineering & Construction",
    funding_ko: "현대건설"
  },
  {
    id: 4,
    title_en: "Scientific Analysis of Concealed Objects in Wooden Shakyamuni Triad at Gongju Donghaksa Temple",
    title_ko: "공주 동학사 목조석가여래삼존불좌상 복장유물 과학적 분석",
    category: "site-investigation",
    duration: "2020",
    funding: "Indigo",
    funding_ko: "인디고"
  },
  {
    id: 9,
    title_en: "Conservation of Excavated Artifacts from Ganghwa Changri",
    title_ko: "강화 창리 출토 유물 보존처리",
    category: "excavated-conservation",
    duration: "2020",
    funding: "History & Cultural Heritage Institute",
    funding_ko: "(재)역사문화재연구원"
  },
  {
    id: 12,
    title_en: "Scientific Analysis of Concealed Buddhist Relics in Wooden Shakyamuni Triad at Gongju Donghaksa Temple",
    title_ko: "공주 동학사 목조석가여래삼존불좌상 복장유물 과학적 분석",
    category: "site-investigation",
    duration: "2020",
    funding: "Indigo",
    funding_ko: "인디고"
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
    'preservation-research': '🛡️',
    'restoration-research': '🔧'
  };

  return `
    <div class="modern-project-card animate-on-scroll" data-category="${project.category}">
      <div class="project-content">
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
    'preservation-research': '🛡️',
    'restoration-research': '🔧'
  };

  return `
    <div class="revolutionary-project-card animate-on-scroll" data-category="${project.category}">
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
    'preservation-research': '🛡️',
    'restoration-research': '🔧'
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
    "preservation-research": { en: "Preservation Strategy Research", ko: "보존환경·기술 연구" },
    "restoration-research": { en: "Cultural Heritage Restoration Research", ko: "문화유산 보존 복원 연구" }
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
const projectsItemsPerPage = 9;
let currentCategory = 'all';

// Get project counts by category
function getProjectCounts() {
  const counts = {
    all: projects.length,
    'site-investigation': 0,
    'excavated-conservation': 0,
    'designation-research': 0,
    'preservation-research': 0,
    'restoration-research': 0
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
  
  const totalPages = Math.ceil(filteredProjects.length / projectsItemsPerPage);
  const startIndex = (page - 1) * projectsItemsPerPage;
  const endIndex = startIndex + projectsItemsPerPage;
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

  // Set initial active state based on URL parameter (네비게이션 드롭다운 제외)
  document.querySelectorAll('[data-category]:not(.nav-project-filter)').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-category') === currentCategory) {
      btn.classList.add('active');
    }
  });
  
  // Make sure 'all' button is not active if specific category is selected
  if (currentCategory !== 'all') {
    const allBtn = document.querySelector('[data-category="all"]');
    if (allBtn) allBtn.classList.remove('active');
  }

  // Filter button functionality for category filters (페이지 내 버튼)
  document.querySelectorAll('.filter-btn[data-category]:not(.nav-project-filter)').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      
      const category = btn.getAttribute('data-category');
      currentCategory = category;
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

  // Navigation dropdown filter functionality
  document.querySelectorAll('.nav-project-filter').forEach(filter => {
    filter.addEventListener('click', (e) => {
      // projects.html 페이지 내에서만 preventDefault하고 필터 적용
      const currentPage = window.location.pathname.split('/').pop();
      
      if (currentPage === 'projects.html') {
        e.preventDefault();
        
        const category = filter.getAttribute('data-category');
        currentCategory = category;
        filterProjects(category, 1);
        
        // Update page filter buttons active state (네비게이션 드롭다운 제외)
        document.querySelectorAll('.filter-btn[data-category]:not(.nav-project-filter)').forEach(btn => {
          btn.classList.remove('active');
          if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
          }
        });
        
        // Update URL parameter
        const newUrl = new URL(window.location);
        if (category === 'all') {
          newUrl.searchParams.delete('category');
        } else {
          newUrl.searchParams.set('category', category);
        }
        window.history.replaceState({}, '', newUrl);
        
        // 드롭다운 닫기
        const dropdownContent = filter.closest('.nav-dropdown-content');
        if (dropdownContent) {
          dropdownContent.classList.remove('show');
        }
      }
      // 다른 페이지에서는 href 링크로 정상 이동
    });
  });

  // Initial render with filter based on URL parameter or default
  filterProjects(currentCategory, 1);
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