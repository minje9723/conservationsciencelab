# 홈페이지 썸네일 섹션 업데이트 가이드

## 개요
홈페이지의 Excellence 섹션이 3개의 새로운 썸네일 섹션으로 교체되었습니다:
1. **주요 연구 프로젝트** (Featured Projects)
2. **최신 연구 성과** (Latest Achievements)
3. **연구소 갤러리** (Lab Gallery)

각 섹션은 이미지 중심으로 디자인되었으며, 해당 페이지로 이동하는 "더보기" 버튼이 포함되어 있습니다.

## 섹션별 업데이트 방법

### 1. 주요 연구 프로젝트 섹션 (Featured Projects)

#### 표시되는 프로젝트 변경하기

**파일:** `home.js` (9-11번 줄)

```javascript
// Featured Project IDs - Update these to change which projects are featured
const featuredProjectIds = [1, 3, 5]; // 이 숫자를 변경하세요
```

**방법:**
1. `projects.js` 파일을 열어 표시하고 싶은 프로젝트의 `id` 확인
2. `home.js`의 `featuredProjectIds` 배열에서 숫자를 변경
3. 예: `[1, 3, 5]` → `[2, 4, 6]`으로 변경하면 id가 2, 4, 6인 프로젝트가 표시됨

#### 새 프로젝트 추가하기

**파일:** `projects.js`

```javascript
const projects = [
  {
    id: 7, // 새로운 고유 ID
    title_en: "New Project Title",
    title_ko: "새 프로젝트 제목",
    description_en: "Project description in English",
    description_ko: "한국어 프로젝트 설명",
    category: "excavated-conservation", // 카테고리 선택
    duration: "2025 - 2027",
    funding: "Funding Source",
    funding_ko: "연구비 출처",
    keywords: ["Keyword1", "Keyword2"],
    keywords_ko: ["키워드1", "키워드2"],
    team: ["Researcher1", "Researcher2"],
    publications: [],
    images: ["assets/projects/new-project.jpg"] // 이미지 경로 (선택사항)
  }
];
```

**카테고리 옵션:**
- `excavated-conservation` - 문화유산 보존처리
- `site-investigation` - 현장 조사 및 분석
- `designation-research` - 지정 연구
- `preservation-research` - 보존 연구

**이미지가 없는 경우:**
- 자동으로 카테고리별 색상과 아이콘이 표시됩니다
- `images: []` 또는 이미지 경로를 비워두면 됩니다

---

### 2. 최신 연구 성과 섹션 (Latest Achievements)

이 섹션은 **자동으로** 가장 최근 3개의 성과를 표시합니다 (연도 기준).

#### 새 연구 성과 추가하기

**파일:** `achievements.js`

```javascript
const achievements = [
  {
    id: 7, // 새로운 고유 ID
    type: "publication", // publication, conference, award, patent 중 선택
    title_en: "Achievement Title",
    title_ko: "성과 제목",
    authors: "Author Name1, Author Name2",
    authors_ko: "저자명1, 저자명2",
    journal: "Journal Name",
    journal_ko: "저널명",
    year: 2025, // 연도 (자동 정렬에 사용됨)
    summary_en: "Brief summary in English",
    summary_ko: "한국어 요약",
    link: "https://doi.org/...",
    doi: "10.xxxx/xxxxx",
    keywords: ["Keyword1", "Keyword2"],
    keywords_ko: ["키워드1", "키워드2"]
  }
];
```

**성과 유형 (type):**
- `publication` - 논문 (파란색)
- `conference` - 학회 발표 (보라색)
- `award` - 수상 (주황색)
- `patent` - 특허 (초록색)

---

### 3. 연구소 갤러리 섹션 (Lab Gallery)

이 섹션은 **자동으로** 가장 최근 6개의 갤러리 항목을 표시합니다 (날짜 기준).

#### 새 갤러리 항목 추가하기

**파일:** `gallery.js`

```javascript
const galleryItems = [
  {
    id: 7, // 새로운 고유 ID
    category: "lab-activities", // 카테고리 선택
    title_en: "Gallery Item Title",
    title_ko: "갤러리 항목 제목",
    description_en: "Brief description",
    description_ko: "간단한 설명",
    image: "assets/gallery/new-image.jpg", // 이미지 경로
    date: "2025-01-15", // YYYY-MM-DD 형식
    location: "Location Name",
    location_ko: "장소명",
    photographer: "Photographer Name",
    photographer_ko: "사진작가명",
    tags: ["Tag1", "Tag2"],
    tags_ko: ["태그1", "태그2"]
  }
];
```

**갤러리 카테고리:**
- `lab-activities` - 연구실 활동
- `equipment` - 장비
- `research` - 연구
- `conferences` - 컨퍼런스
- `achievements` - 성과

**이미지가 없는 경우:**
- 카테고리별 색상과 아이콘이 자동으로 표시됩니다

---

## 이미지 가이드

### 권장 이미지 사양

#### 프로젝트 카드 이미지
- **비율:** 16:9 또는 4:3
- **최소 해상도:** 800x600px
- **권장 해상도:** 1200x800px
- **포맷:** JPG, PNG
- **파일 크기:** 500KB 이하 권장

#### 갤러리 이미지
- **비율:** 4:3 또는 16:9
- **최소 해상도:** 900x675px
- **권장 해상도:** 1200x900px
- **포맷:** JPG, PNG
- **파일 크기:** 800KB 이하 권장

### 이미지 저장 위치
```
assets/
  ├── projects/
  │   ├── project-name-1.jpg
  │   └── project-name-2.jpg
  └── gallery/
      ├── gallery-item-1.jpg
      └── gallery-item-2.jpg
```

---

## 디자인 특징

### 반응형 디자인
- **데스크톱:** 3열 그리드
- **태블릿:** 2열 그리드
- **모바일:** 1열 스택

### 인터랙션
- **호버 효과:** 카드가 위로 올라가며 그림자 강화
- **이미지 줌:** 호버 시 이미지 확대 효과
- **클릭:** 각 카드 클릭 시 해당 페이지로 이동

### 색상 스키마
- **프로젝트:** 카테고리별 그라디언트 배경
- **성과:** 유형별 강조 색상 (왼쪽 테두리)
- **갤러리:** 카테고리별 그라디언트 배경

---

## 트러블슈팅

### 문제: 프로젝트가 표시되지 않음
**해결방법:**
1. `projects.js` 파일에 프로젝트가 추가되었는지 확인
2. `home.js`의 `featuredProjectIds`에 올바른 ID가 있는지 확인
3. 브라우저 캐시 삭제 후 새로고침

### 문제: 이미지가 표시되지 않음
**해결방법:**
1. 이미지 파일 경로가 올바른지 확인
2. 이미지 파일명과 확장자가 정확한지 확인
3. 이미지 파일이 실제로 해당 폴더에 존재하는지 확인

### 문제: 최신 항목이 표시되지 않음
**해결방법:**
1. `year` (성과) 또는 `date` (갤러리) 필드가 올바르게 설정되었는지 확인
2. 날짜 형식이 올바른지 확인 (YYYY-MM-DD)
3. 브라우저 캐시 삭제 후 새로고침

---

## 추가 커스터마이징

### 표시 개수 변경

**프로젝트 개수 변경:**
`home.js` - 11번 줄 수정
```javascript
const featuredProjectIds = [1, 3, 5]; // 3개 표시
// 더 많이 표시하려면 ID 추가
const featuredProjectIds = [1, 2, 3, 4]; // 4개 표시
```

**성과 개수 변경:**
`home.js` - 약 73번 줄 수정
```javascript
const latestAchievements = achievements
  .sort((a, b) => b.year - a.year)
  .slice(0, 3); // 3을 원하는 숫자로 변경
```

**갤러리 개수 변경:**
`home.js` - 약 128번 줄 수정
```javascript
const previewItems = galleryItems
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 6); // 6을 원하는 숫자로 변경
```

---

## 연락처
질문이나 문제가 있으면 개발팀에 문의하세요.

**마지막 업데이트:** 2025-10-10
