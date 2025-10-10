# Conservation Science Lab Website

> 보존과학연구소 웹사이트 / Conservation Science Lab Website

[English](#english) | [한국어](#korean)

---

## <a name="korean"></a>🇰🇷 한국어

### 📖 프로젝트 소개

한국전통문화대학교 보존과학연구소의 공식 웹사이트입니다. 연구소의 연구 활동, 시설, 연구진, 프로젝트 등을 소개합니다.

### 🚀 시작하기

#### 필요 조건

- 웹 브라우저 (Chrome, Firefox, Safari, Edge 등)
- Git (버전 관리)
- 텍스트 에디터 (VS Code 권장)

#### 로컬 개발 환경 설정

1. **저장소 복제**
   ```bash
   git clone https://github.com/minje9723/conservationsciencelab.git
   cd conservationsciencelab
   ```

2. **브라우저에서 열기**
   - `index.html` 파일을 브라우저로 드래그 앤 드롭
   - 또는 VS Code의 Live Server 확장 프로그램 사용 (권장)

### 💻 여러 컴퓨터에서 작업하기 (동기화 가이드)

#### 시나리오: 랩탑에서 작업 후 사무실 PC에서 계속 작업하기

##### 1️⃣ 랩탑에서 작업 완료 후

```bash
# 1. 현재 변경사항 확인
git status

# 2. 변경된 파일 스테이징
git add .

# 3. 커밋 메시지와 함께 커밋
git commit -m "작업 내용 설명 (예: 홈페이지 배너 수정)"

# 4. GitHub에 푸시
git push origin main
```

##### 2️⃣ 사무실 PC에서 작업 시작하기

**첫 번째 방법: 저장소가 없는 경우**
```bash
# 저장소 복제
git clone https://github.com/minje9723/conservationsciencelab.git
cd conservationsciencelab
```

**두 번째 방법: 저장소가 이미 있는 경우**
```bash
# 프로젝트 디렉토리로 이동
cd conservationsciencelab

# 최신 변경사항 가져오기
git pull origin main
```

##### 3️⃣ 사무실 PC에서 작업 후

```bash
# 변경사항 확인
git status

# 스테이징 및 커밋
git add .
git commit -m "작업 내용 설명"

# GitHub에 푸시
git push origin main
```

##### 4️⃣ 다시 랩탑으로 돌아왔을 때

```bash
# 프로젝트 디렉토리로 이동
cd conservationsciencelab

# 최신 변경사항 가져오기
git pull origin main
```

### 🔄 일상적인 작업 흐름 (Daily Workflow)

```bash
# 작업 시작 전 (항상!)
git pull origin main

# 작업 진행...
# 파일 수정, 테스트, 확인

# 작업 완료 후
git status                    # 변경사항 확인
git add .                     # 모든 변경사항 스테이징
git commit -m "작업 내용"     # 커밋
git push origin main          # GitHub에 푸시
```

### ⚠️ 주의사항 및 베스트 프랙티스

1. **항상 pull 먼저!**
   - 작업 시작 전에 항상 `git pull`로 최신 변경사항을 받아오세요
   - 충돌을 예방할 수 있습니다

2. **자주 커밋하기**
   - 작은 단위로 자주 커밋하는 것이 좋습니다
   - 문제 발생 시 되돌리기가 쉽습니다

3. **명확한 커밋 메시지**
   ```bash
   # 좋은 예
   git commit -m "네비게이션 메뉴 반응형 디자인 추가"
   git commit -m "프로젝트 페이지 이미지 최적화"
   
   # 나쁜 예
   git commit -m "수정"
   git commit -m "업데이트"
   ```

4. **작업 중단 시에도 커밋**
   - 작업이 완료되지 않아도 커밋하고 푸시하세요
   - 다른 컴퓨터에서 이어서 작업할 수 있습니다

### 🆘 문제 해결 (Troubleshooting)

#### 문제 1: Push가 거부됨
```bash
# 에러: ! [rejected] main -> main (fetch first)
# 해결: 원격 변경사항을 먼저 가져오기
git pull origin main
git push origin main
```

#### 문제 2: 충돌 발생
```bash
# 에러: CONFLICT (content): Merge conflict in [파일명]
# 해결:
# 1. 충돌 파일 열기
# 2. <<<<<<< HEAD와 ======= 사이가 현재 버전
# 3. ======= 와 >>>>>>> 사이가 원격 버전
# 4. 필요한 내용만 남기고 마커 삭제
# 5. 파일 저장 후:
git add [충돌해결된파일]
git commit -m "충돌 해결"
git push origin main
```

#### 문제 3: 실수로 잘못 커밋함
```bash
# 마지막 커밋 취소 (변경사항은 유지)
git reset --soft HEAD~1

# 특정 파일만 되돌리기
git checkout -- [파일명]
```

### 📁 프로젝트 구조

```
conservationsciencelab/
├── index.html              # 홈페이지
├── history.html            # 연혁
├── members.html            # 연구진
├── projects.html           # 프로젝트
├── achievements.html       # 연구성과
├── facilities.html         # 시설장비
├── gallery.html            # 갤러리
├── style.css               # 메인 스타일시트
├── common.js               # 공통 JavaScript
├── assets/                 # 이미지 및 미디어 파일
│   ├── projects/
│   ├── facilities/
│   └── ...
└── styles/                 # 추가 스타일시트
    ├── home.css
    └── common.css
```

### 🛠️ 기술 스택

- **HTML5**: 마크업
- **CSS3**: 스타일링 및 반응형 디자인
- **JavaScript (Vanilla)**: 인터랙션 및 동적 콘텐츠
- **Git/GitHub**: 버전 관리 및 협업

### 📝 개발 가이드

#### VS Code 추천 확장 프로그램

1. **Live Server** - 실시간 미리보기
2. **Prettier** - 코드 포맷팅
3. **HTMLHint** - HTML 린팅
4. **ESLint** - JavaScript 린팅

#### 반응형 테스트

1. **Chrome DevTools**: F12 → 디바이스 툴바 (Ctrl+Shift+M)
2. **Firefox DevTools**: F12 → 반응형 디자인 모드 (Ctrl+Shift+M)
3. **실제 디바이스**: 네트워크를 통해 접속

### 📞 문의 및 지원

문제가 발생하거나 질문이 있으시면:
1. GitHub Issues에 등록
2. 상세한 설명과 스크린샷 첨부
3. 재현 가능한 단계 기술

---

## <a name="english"></a>🇺🇸 English

### 📖 About

Official website for the Conservation Science Lab at the National University of Cultural Heritage. Showcases research activities, facilities, team members, and projects.

### 🚀 Getting Started

#### Prerequisites

- Web browser (Chrome, Firefox, Safari, Edge, etc.)
- Git (version control)
- Text editor (VS Code recommended)

#### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/minje9723/conservationsciencelab.git
   cd conservationsciencelab
   ```

2. **Open in browser**
   - Drag and drop `index.html` into your browser
   - Or use VS Code's Live Server extension (recommended)

### 💻 Working Across Multiple Computers (Sync Guide)

#### Scenario: Continue work from laptop to office PC

##### 1️⃣ After working on laptop

```bash
# 1. Check current changes
git status

# 2. Stage changed files
git add .

# 3. Commit with descriptive message
git commit -m "Description of work (e.g., Update homepage banner)"

# 4. Push to GitHub
git push origin main
```

##### 2️⃣ Starting work on office PC

**Option A: First time (no repository)**
```bash
# Clone the repository
git clone https://github.com/minje9723/conservationsciencelab.git
cd conservationsciencelab
```

**Option B: Repository already exists**
```bash
# Navigate to project directory
cd conservationsciencelab

# Pull latest changes
git pull origin main
```

##### 3️⃣ After working on office PC

```bash
# Check changes
git status

# Stage and commit
git add .
git commit -m "Description of work"

# Push to GitHub
git push origin main
```

##### 4️⃣ Back to laptop

```bash
# Navigate to project directory
cd conservationsciencelab

# Pull latest changes
git pull origin main
```

### 🔄 Daily Workflow

```bash
# Before starting work (always!)
git pull origin main

# Work on files...
# Edit, test, verify

# After completing work
git status                    # Check changes
git add .                     # Stage all changes
git commit -m "Work description"  # Commit
git push origin main          # Push to GitHub
```

### ⚠️ Important Tips & Best Practices

1. **Always pull first!**
   - Always run `git pull` before starting work
   - Prevents merge conflicts

2. **Commit frequently**
   - Make small, frequent commits
   - Easier to revert if issues arise

3. **Clear commit messages**
   ```bash
   # Good examples
   git commit -m "Add responsive design to navigation menu"
   git commit -m "Optimize images on projects page"
   
   # Bad examples
   git commit -m "fix"
   git commit -m "update"
   ```

4. **Commit even when work is incomplete**
   - Commit and push even if work isn't finished
   - Continue from another computer

### 🆘 Troubleshooting

#### Issue 1: Push rejected
```bash
# Error: ! [rejected] main -> main (fetch first)
# Solution: Fetch remote changes first
git pull origin main
git push origin main
```

#### Issue 2: Merge conflict
```bash
# Error: CONFLICT (content): Merge conflict in [filename]
# Solution:
# 1. Open conflicted file
# 2. Content between <<<<<<< HEAD and ======= is current version
# 3. Content between ======= and >>>>>>> is remote version
# 4. Keep needed content and remove markers
# 5. Save file then:
git add [resolved-file]
git commit -m "Resolve merge conflict"
git push origin main
```

#### Issue 3: Wrong commit
```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Revert specific file
git checkout -- [filename]
```

### 📁 Project Structure

```
conservationsciencelab/
├── index.html              # Homepage
├── history.html            # History
├── members.html            # Team Members
├── projects.html           # Projects
├── achievements.html       # Achievements
├── facilities.html         # Facilities
├── gallery.html            # Gallery
├── style.css               # Main stylesheet
├── common.js               # Common JavaScript
├── assets/                 # Images and media files
│   ├── projects/
│   ├── facilities/
│   └── ...
└── styles/                 # Additional stylesheets
    ├── home.css
    └── common.css
```

### 🛠️ Technology Stack

- **HTML5**: Markup
- **CSS3**: Styling and responsive design
- **JavaScript (Vanilla)**: Interactions and dynamic content
- **Git/GitHub**: Version control and collaboration

### 📝 Development Guide

#### Recommended VS Code Extensions

1. **Live Server** - Live preview
2. **Prettier** - Code formatting
3. **HTMLHint** - HTML linting
4. **ESLint** - JavaScript linting

#### Responsive Testing

1. **Chrome DevTools**: F12 → Device toolbar (Ctrl+Shift+M)
2. **Firefox DevTools**: F12 → Responsive design mode (Ctrl+Shift+M)
3. **Real devices**: Access via network

### 📞 Support

If you encounter issues or have questions:
1. Create a GitHub Issue
2. Include detailed description and screenshots
3. Describe steps to reproduce

---

## 📄 License

© 2025 Conservation Science Lab, National University of Cultural Heritage. All rights reserved.

## 👥 Contributors

- Conservation Science Lab Team
- National University of Cultural Heritage

---

**Last Updated**: October 10, 2025  
**Version**: 1.0
