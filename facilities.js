// Facilities page specific functionality

// Facilities data
const facilities = [
  {
    id: 1,
    category: "microscopy",
    name_en: "Metallurgical Microscope",
    name_ko: "금속현미경",
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
    image: "assets/facilities/금속현미경.jpg",
    status: "operational",
    year_acquired: 2022
  },
  {
    id: 2,
    category: "analysis",
    name_en: "3D Scanner",
    name_ko: "3D 스캐너",
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
    image: "assets/facilities/3d scanner.png",
    status: "operational",
    year_acquired: 2023
  },
  {
    id: 3,
    category: "3d-printing",
    name_en: "3D Printer",
    name_ko: "3D 프린터",
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
    image: "assets/facilities/3d printer.png",
    status: "operational",
    year_acquired: 2024
  },
  {
    id: 4,
    category: "analysis",
    name_en: "X-Ray Fluorescence Spectrometer",
    name_ko: "X선 형광 분석기",
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
    image: "assets/facilities/xrf-analyzer.jpg",
    status: "operational",
    year_acquired: 2023
  },
  {
    id: 5,
    category: "cleaning",
    name_en: "Laser Cleaner",
    name_ko: "레이저클리너",
    model: "P-Laser QF-1000",
    description_en: "Advanced laser cleaning system for non-abrasive removal of contaminants and corrosion from cultural heritage objects.",
    description_ko: "문화유산 객체의 오염물과 부식을 비연마적으로 제거하는 고급 레이저 세척 시스템입니다.",
    specifications: {
      "Laser Power": "1000W",
      "Wavelength": "1064 nm",
      "Pulse Duration": "100-500 ns",
      "Cleaning Speed": "1-10 m²/h"
    },
    specifications_ko: {
      "레이저 출력": "1000W",
      "파장": "1064 nm",
      "펄스 지속시간": "100-500 ns",
      "세척 속도": "1-10 m²/시간"
    },
    applications: ["Surface Cleaning", "Corrosion Removal", "Paint Removal"],
    applications_ko: ["표면 세척", "부식 제거", "도료 제거"],
    image: "",
    status: "operational",
    year_acquired: 2024
  },
  {
    id: 6,
    category: "cleaning",
    name_en: "Steam Cleaner",
    name_ko: "스팀세척기",
    model: "Kärcher SG 4/4",
    description_en: "High-pressure steam cleaning system for gentle and effective cleaning of heritage surfaces.",
    description_ko: "문화유산 표면의 부드럽고 효과적인 세척을 위한 고압 스팀 세척 시스템입니다.",
    specifications: {
      "Steam Pressure": "4 bar",
      "Steam Temperature": "143°C",
      "Heating Time": "6 min",
      "Water Capacity": "0.5 L"
    },
    specifications_ko: {
      "스팀 압력": "4 bar",
      "스팀 온도": "143°C",
      "가열 시간": "6분",
      "물 용량": "0.5 L"
    },
    applications: ["Surface Cleaning", "Disinfection", "Dirt Removal"],
    applications_ko: ["표면 세척", "살균", "오물 제거"],
    image: "",
    status: "operational",
    year_acquired: 2024
  },
  {
    id: 7,
    category: "analysis",
    name_en: "FTIR Spectrometer",
    name_ko: "FTIR 분광기",
    model: "Nicolet iS50",
    description_en: "Fourier Transform Infrared Spectrometer for molecular structure identification and material analysis.",
    description_ko: "분자 구조 식별 및 재료 분석을 위한 푸리에 변환 적외선 분광기입니다.",
    specifications: {
      "Wavelength Range": "7,800 - 350 cm⁻¹",
      "Resolution": "0.09 cm⁻¹",
      "Detector": "DTGS",
      "Beam Splitter": "KBr"
    },
    specifications_ko: {
      "파장 범위": "7,800 - 350 cm⁻¹",
      "해상도": "0.09 cm⁻¹",
      "검출기": "DTGS",
      "빔 분할기": "KBr"
    },
    applications: ["Material Identification", "Organic Compound Analysis", "Conservation Science"],
    applications_ko: ["재료 식별", "유기 화합물 분석", "보존과학"],
    image: "assets/facilities/ft-ir.jpg",
    status: "operational",
    year_acquired: 2023
  },
  {
    id: 8,
    category: "analysis",
    name_en: "SEM-EDS System",
    name_ko: "주사전자현미경-에너지분산분광기",
    model: "JEOL JSM-7100F",
    description_en: "Scanning Electron Microscope with Energy Dispersive Spectroscopy for high-resolution imaging and elemental analysis.",
    description_ko: "고해상도 이미징 및 원소 분석을 위한 에너지분산분광기가 장착된 주사전자현미경입니다.",
    specifications: {
      "Resolution": "1.0 nm @ 15kV",
      "Magnification": "×25 to ×1,000,000",
      "Accelerating Voltage": "0.01 to 30 kV",
      "EDS Resolution": "123 eV"
    },
    specifications_ko: {
      "해상도": "1.0 nm @ 15kV",
      "배율": "×25 ~ ×1,000,000",
      "가속 전압": "0.01 ~ 30 kV",
      "EDS 해상도": "123 eV"
    },
    applications: ["Microstructure Analysis", "Elemental Mapping", "Surface Morphology"],
    applications_ko: ["미세구조 분석", "원소 맵핑", "표면 형태학"],
    image: "assets/facilities/sem-eds.jpg",
    status: "operational",
    year_acquired: 2022
  },
  {
    id: 9,
    category: "analysis",
    name_en: "X-Ray Diffractometer",
    name_ko: "X선 회절 분석기",
    model: "Rigaku MiniFlex 600",
    description_en: "X-Ray Diffraction system for crystal structure analysis and phase identification.",
    description_ko: "결정 구조 분석 및 상 식별을 위한 X선 회절 분석 시스템입니다.",
    specifications: {
      "X-ray Source": "Cu Kα",
      "2θ Range": "2° to 145°",
      "Goniometer Radius": "150 mm",
      "Detector": "D/teX Ultra"
    },
    specifications_ko: {
      "X선 광원": "Cu Kα",
      "2θ 범위": "2° ~ 145°",
      "고니오미터 반경": "150 mm",
      "검출기": "D/teX Ultra"
    },
    applications: ["Crystal Structure", "Phase Identification", "Mineralogy"],
    applications_ko: ["결정 구조", "상 식별", "광물학"],
    image: "assets/facilities/xrd.png",
    status: "operational",
    year_acquired: 2023
  },
  {
    id: 10,
    category: "testing",
    name_en: "Universal Testing Machine",
    name_ko: "만능재료시험기",
    model: "Instron 5985",
    description_en: "Dual column testing system for mechanical property evaluation of materials.",
    description_ko: "재료의 기계적 특성 평가를 위한 이중 컬럼 시험 시스템입니다.",
    specifications: {
      "Load Capacity": "250 kN",
      "Crosshead Speed": "0.001 to 500 mm/min",
      "Frame Stiffness": "175 kN/mm",
      "Accuracy": "±0.5%"
    },
    specifications_ko: {
      "하중 용량": "250 kN",
      "크로스헤드 속도": "0.001 ~ 500 mm/분",
      "프레임 강성": "175 kN/mm",
      "정확도": "±0.5%"
    },
    applications: ["Tensile Testing", "Compression Testing", "Flexural Testing"],
    applications_ko: ["인장 시험", "압축 시험", "굽힘 시험"],
    image: "assets/facilities/만능재료시험기.jpg",
    status: "operational",
    year_acquired: 2023
  },
  {
    id: 11,
    category: "testing",
    name_en: "Vickers Hardness Tester",
    name_ko: "비커스 경도기",
    model: "Buehler Wilson VH3100",
    description_en: "Digital Vickers hardness tester for precise hardness measurement of materials.",
    description_ko: "재료의 정밀한 경도 측정을 위한 디지털 비커스 경도기입니다.",
    specifications: {
      "Load Range": "10 gf to 50 kgf",
      "Magnification": "×100, ×400",
      "Test Force Accuracy": "±0.5%",
      "Measurement Range": "HV 0.2 to HV 3000"
    },
    specifications_ko: {
      "하중 범위": "10 gf ~ 50 kgf",
      "배율": "×100, ×400",
      "시험력 정확도": "±0.5%",
      "측정 범위": "HV 0.2 ~ HV 3000"
    },
    applications: ["Hardness Testing", "Material Characterization", "Quality Control"],
    applications_ko: ["경도 시험", "재료 특성화", "품질 관리"],
    image: "assets/facilities/비커스경도기.jpg",
    status: "operational",
    year_acquired: 2022
  },
  {
    id: 12,
    category: "environmental",
    name_en: "UV Weathering Tester",
    name_ko: "자외선 열화 시험기",
    model: "Q-Lab QUV/se",
    description_en: "Accelerated weathering tester simulating outdoor UV exposure and condensation.",
    description_ko: "실외 자외선 노출 및 결로를 시뮬레이션하는 가속 열화 시험기입니다.",
    specifications: {
      "Irradiance": "0.89 W/m²/nm @ 340 nm",
      "Temperature Range": "40°C to 80°C",
      "UV Lamps": "UVA-340",
      "Condensation": "Yes"
    },
    specifications_ko: {
      "조사량": "0.89 W/m²/nm @ 340 nm",
      "온도 범위": "40°C ~ 80°C",
      "UV 램프": "UVA-340",
      "결로": "가능"
    },
    applications: ["Weathering Test", "Durability Studies", "Material Degradation"],
    applications_ko: ["열화 시험", "내구성 연구", "재료 열화"],
    image: "assets/facilities/자외선열화기.png",
    status: "operational",
    year_acquired: 2023
  },
  {
    id: 13,
    category: "testing",
    name_en: "Ultrasonic Pulse Velocity Tester",
    name_ko: "초음파 속도 측정기",
    model: "Proceq Pundit PL-200",
    description_en: "Ultrasonic testing device for assessing concrete quality and detecting defects.",
    description_ko: "콘크리트 품질 평가 및 결함 검출을 위한 초음파 시험 장비입니다.",
    specifications: {
      "Frequency": "24 / 54 kHz",
      "Measurement Range": "100 to 9,999 μs",
      "Resolution": "0.1 μs",
      "Accuracy": "±1%"
    },
    specifications_ko: {
      "주파수": "24 / 54 kHz",
      "측정 범위": "100 ~ 9,999 μs",
      "해상도": "0.1 μs",
      "정확도": "±1%"
    },
    applications: ["Concrete Quality", "Crack Detection", "Structural Assessment"],
    applications_ko: ["콘크리트 품질", "균열 감지", "구조 평가"],
    image: "assets/facilities/초음파속도측정기.png",
    status: "operational",
    year_acquired: 2023
  },
  {
    id: 14,
    category: "analysis",
    name_en: "Laser Particle Analyzer",
    name_ko: "레이저 입도분석기",
    model: "Malvern Mastersizer 3000",
    description_en: "Laser diffraction particle size analyzer for measuring particle size distribution.",
    description_ko: "입자 크기 분포 측정을 위한 레이저 회절 입도 분석기입니다.",
    specifications: {
      "Measurement Range": "0.01 to 3,500 μm",
      "Light Source": "Red LED & Blue LED",
      "Repeatability": "<0.5%",
      "Accuracy": "<1%"
    },
    specifications_ko: {
      "측정 범위": "0.01 ~ 3,500 μm",
      "광원": "적색 LED & 청색 LED",
      "재현성": "<0.5%",
      "정확도": "<1%"
    },
    applications: ["Particle Analysis", "Pigment Studies", "Material Science"],
    applications_ko: ["입자 분석", "안료 연구", "재료과학"],
    image: "assets/facilities/입도분석기.png",
    status: "operational",
    year_acquired: 2023
  },
  {
    id: 15,
    category: "testing",
    name_en: "Schmidt Hammer",
    name_ko: "슈미츠 해머",
    model: "Proceq Original Schmidt",
    description_en: "Non-destructive concrete strength testing instrument for on-site evaluation.",
    description_ko: "현장 평가를 위한 비파괴 콘크리트 강도 시험 장비입니다.",
    specifications: {
      "Impact Energy": "2.207 Nm",
      "Test Direction": "All directions",
      "Rebound Range": "10 to 100",
      "Accuracy": "±1 unit"
    },
    specifications_ko: {
      "충격 에너지": "2.207 Nm",
      "시험 방향": "전 방향",
      "반발 범위": "10 ~ 100",
      "정확도": "±1 단위"
    },
    applications: ["Concrete Testing", "Stone Strength", "Field Investigation"],
    applications_ko: ["콘크리트 시험", "석재 강도", "현장 조사"],
    image: "assets/facilities/슈미츠해머.jpg",
    status: "operational",
    year_acquired: 2023
  },
  {
    id: 16,
    category: "analysis",
    name_en: "Differential Scanning Calorimeter",
    name_ko: "시차주사열량계",
    model: "TA Instruments DSC 2500",
    description_en: "Thermal analysis instrument for studying phase transitions and thermal properties.",
    description_ko: "상 전이 및 열적 특성 연구를 위한 열 분석 장비입니다.",
    specifications: {
      "Temperature Range": "-90°C to 550°C",
      "Heating Rate": "0.01 to 500°C/min",
      "Sensitivity": "0.2 μW",
      "Sample Size": "0.5 to 50 mg"
    },
    specifications_ko: {
      "온도 범위": "-90°C ~ 550°C",
      "가열 속도": "0.01 ~ 500°C/분",
      "감도": "0.2 μW",
      "시료 크기": "0.5 ~ 50 mg"
    },
    applications: ["Thermal Analysis", "Glass Transition", "Melting Point"],
    applications_ko: ["열 분석", "유리 전이", "융점"],
    image: "assets/facilities/시차주사열랑게.png",
    status: "operational",
    year_acquired: 2023
  },
  {
    id: 17,
    category: "processing",
    name_en: "Electric Furnace",
    name_ko: "전기로",
    model: "Nabertherm LHT 04/17",
    description_en: "High-temperature electric furnace for heat treatment and material processing.",
    description_ko: "열처리 및 재료 가공을 위한 고온 전기로입니다.",
    specifications: {
      "Max Temperature": "1,700°C",
      "Heating Rate": "Up to 10°C/min",
      "Chamber Volume": "4 liters",
      "Controller": "PID with programmable segments"
    },
    specifications_ko: {
      "최고 온도": "1,700°C",
      "가열 속도": "최대 10°C/분",
      "챔버 용량": "4리터",
      "제어기": "프로그래머블 PID"
    },
    applications: ["Heat Treatment", "Sintering", "Material Processing"],
    applications_ko: ["열처리", "소결", "재료 가공"],
    image: "assets/facilities/전기로.png",
    status: "operational",
    year_acquired: 2022
  },
  {
    id: 18,
    category: "processing",
    name_en: "Vacuum Impregnation System",
    name_ko: "진공 함침기",
    model: "Custom Built System",
    description_en: "Vacuum chamber for impregnating porous materials with consolidants and preservatives.",
    description_ko: "다공성 재료에 강화제 및 보존제를 함침시키기 위한 진공 챔버입니다.",
    specifications: {
      "Chamber Size": "600 × 600 × 800 mm",
      "Vacuum Level": "0.1 mbar",
      "Temperature Control": "Room temp to 60°C",
      "Material": "Stainless Steel"
    },
    specifications_ko: {
      "챔버 크기": "600 × 600 × 800 mm",
      "진공도": "0.1 mbar",
      "온도 제어": "실온 ~ 60°C",
      "재질": "스테인리스 스틸"
    },
    applications: ["Consolidation", "Conservation Treatment", "Impregnation"],
    applications_ko: ["강화", "보존 처리", "함침"],
    image: "assets/facilities/진공함침기.png",
    status: "operational",
    year_acquired: 2022
  },
  {
    id: 19,
    category: "analysis",
    name_en: "CS Analyzer",
    name_ko: "CS분석기",
    model: "Konica Minolta CR-400",
    description_en: "Portable colorimeter for precise color measurement and quality control.",
    description_ko: "정밀한 색상 측정 및 품질 관리를 위한 휴대용 색차 분석기입니다.",
    specifications: {
      "Illuminant": "C, D65",
      "Observer": "2°, 10°",
      "Measurement Area": "Ø8mm",
      "Repeatability": "Within ΔE*ab 0.07"
    },
    specifications_ko: {
      "광원": "C, D65",
      "관찰자": "2°, 10°",
      "측정 영역": "Ø8mm",
      "재현성": "ΔE*ab 0.07 이내"
    },
    applications: ["Color Measurement", "Conservation Documentation", "Quality Control"],
    applications_ko: ["색상 측정", "보존 기록", "품질 관리"],
    image: "assets/facilities/cs분석기.png",
    status: "operational",
    year_acquired: 2023
  },
  {
    id: 20,
    category: "analysis",
    name_en: "Micro XRF",
    name_ko: "마이크로 XRF",
    model: "Bruker M4 Tornado",
    description_en: "Micro X-ray fluorescence spectrometer for high-resolution elemental mapping and analysis.",
    description_ko: "고해상도 원소 맵핑 및 분석을 위한 마이크로 X선 형광 분광기입니다.",
    specifications: {
      "Spot Size": "20 μm",
      "Detection Range": "Na to Am",
      "Resolution": "145 eV",
      "Analysis Mode": "Point, Line, Area"
    },
    specifications_ko: {
      "스팟 크기": "20 μm",
      "검출 범위": "Na ~ Am",
      "해상도": "145 eV",
      "분석 모드": "포인트, 라인, 영역"
    },
    applications: ["Elemental Mapping", "Material Analysis", "Conservation Science"],
    applications_ko: ["원소 맵핑", "재료 분석", "보존과학"],
    image: "assets/facilities/마이크로xrf.png",
    status: "operational",
    year_acquired: 2024
  },
  {
    id: 21,
    category: "analysis",
    name_en: "X-Ray",
    name_ko: "X-ray",
    model: "Rigaku MiniFlex 600",
    description_en: "X-ray diffraction system for crystal structure analysis and phase identification.",
    description_ko: "결정 구조 분석 및 상 식별을 위한 X선 회절 시스템입니다.",
    specifications: {
      "X-ray Source": "Cu Kα",
      "2θ Range": "2° to 145°",
      "Goniometer Radius": "150 mm",
      "Detector": "D/teX Ultra"
    },
    specifications_ko: {
      "X선 광원": "Cu Kα",
      "2θ 범위": "2° ~ 145°",
      "고니오미터 반경": "150 mm",
      "검출기": "D/teX Ultra"
    },
    applications: ["Crystal Structure", "Phase Identification", "Mineralogy"],
    applications_ko: ["결정 구조", "상 식별", "광물학"],
    image: "assets/facilities/x-ray.jpg",
    status: "operational",
    year_acquired: 2024
  },
  {
    id: 22,
    category: "testing",
    name_en: "Salt Spray Tester",
    name_ko: "염수분무기",
    model: "Ascott S450iP",
    description_en: "Corrosion testing equipment simulating salt spray conditions for material durability assessment.",
    description_ko: "재료 내구성 평가를 위한 염수분무 조건을 시뮬레이션하는 부식 시험 장비입니다.",
    specifications: {
      "Chamber Volume": "450 liters",
      "Temperature Range": "35°C ± 2°C",
      "Salt Solution": "5% NaCl",
      "Spray Rate": "1-2 ml/80cm²/hr"
    },
    specifications_ko: {
      "챔버 용량": "450리터",
      "온도 범위": "35°C ± 2°C",
      "염수 농도": "5% NaCl",
      "분무량": "1-2 ml/80cm²/시간"
    },
    applications: ["Corrosion Testing", "Coating Evaluation", "Material Durability"],
    applications_ko: ["부식 시험", "코팅 평가", "재료 내구성"],
    image: "assets/facilities/염수분무시험기.jpg",
    status: "operational",
    year_acquired: 2024
  },
  {
    id: 23,
    category: "processing",
    name_en: "Specimen Polisher",
    name_ko: "시편 연마기",
    model: "Struers LaboPol-5",
    description_en: "Precision grinding and polishing machine for metallographic specimen preparation.",
    description_ko: "금속조직 시편 준비를 위한 정밀 연삭 및 연마 기계입니다.",
    specifications: {
      "Disc Speed": "50-300 rpm",
      "Disc Diameter": "250 mm",
      "Sample Holders": "6 positions",
      "Force Range": "5-40 N"
    },
    specifications_ko: {
      "디스크 속도": "50-300 rpm",
      "디스크 직경": "250 mm",
      "시편 홀더": "6개",
      "하중 범위": "5-40 N"
    },
    applications: ["Sample Preparation", "Surface Finishing", "Metallography"],
    applications_ko: ["시편 준비", "표면 마감", "금속조직학"],
    image: "",
    status: "operational",
    year_acquired: 2024
  },
  {
    id: 24,
    category: "analysis",
    name_en: "Raman Spectrometer",
    name_ko: "라만 분광분석기",
    model: "Horiba LabRAM HR Evolution",
    description_en: "High-resolution Raman spectroscopy system for molecular structure identification and material characterization.",
    description_ko: "분자 구조 식별 및 재료 특성화를 위한 고해상도 라만 분광 시스템입니다.",
    specifications: {
      "Laser Wavelength": "532 nm, 633 nm, 785 nm",
      "Spectral Resolution": "0.5 cm⁻¹",
      "Spatial Resolution": "~1 μm",
      "Detection Range": "100-4000 cm⁻¹"
    },
    specifications_ko: {
      "레이저 파장": "532 nm, 633 nm, 785 nm",
      "분광 해상도": "0.5 cm⁻¹",
      "공간 해상도": "~1 μm",
      "검출 범위": "100-4000 cm⁻¹"
    },
    applications: ["Molecular Analysis", "Pigment Identification", "Material Science"],
    applications_ko: ["분자 분석", "안료 식별", "재료과학"],
    image: "assets/facilities/raman.jpg",
    status: "operational",
    year_acquired: 2024
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
  return localStorage.getItem('language') || 'ko';
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
  return `
    <li data-category="${facility.category}" data-id="${facility.id}" class="animate-on-scroll">
      <div class="facility-card">
        ${facility.image ? `
          <div class="facility-image">
            <img src="${facility.image}" alt="${facility.name_en}" loading="lazy">
          </div>
        ` : ''}
        
        <div class="facility-content">
          <h3>
            <span class="lang lang-en">${facility.name_en}</span>
            <span class="lang lang-ko">${facility.name_ko}</span>
          </h3>
          
          <div class="facility-description">
            <span class="lang lang-en">${facility.description_en}</span>
            <span class="lang lang-ko">${facility.description_ko}</span>
          </div>
          
          <div class="facility-year">
            <span class="lang lang-en">Acquired: ${facility.year_acquired}</span>
            <span class="lang lang-ko">도입연도: ${facility.year_acquired}</span>
          </div>
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
  
  // Apply language visibility after rendering
  const currentLang = getCurrentLanguage();
  document.querySelectorAll('.lang').forEach(el => {
    if (el.classList.contains('lang-en')) {
      el.style.display = currentLang === 'en' ? '' : 'none';
    } else if (el.classList.contains('lang-ko')) {
      el.style.display = currentLang === 'ko' ? '' : 'none';
    }
  });
  
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
  
  // Override setLang function to update language visibility
  const originalSetLang = window.setLang;
  if (originalSetLang) {
    window.setLang = function(lang) {
      originalSetLang(lang);
      // Re-render facilities with new language
      renderFacilities();
    };
  }

  // Wait for common.js to initialize language, then render
  if (window.languageInitialized) {
    renderFacilities();
  } else {
    // Wait a bit for common.js to set up language
    setTimeout(() => {
      renderFacilities();
    }, 100);
  }
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