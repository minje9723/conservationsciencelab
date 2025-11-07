# 갤러리 협업 가이드

## 📸 갤러리 페이지 작업 방법

### 🚀 시작하기

#### 1. 본인 작업 브랜치 생성
```bash
# main 브랜치에서 최신 코드 받기
git checkout main
git pull origin main

# 본인 이름으로 브랜치 생성 (예: gallery-minje, gallery-sooyeon)
git checkout -b gallery-본인이름
```

#### 2. 갤러리 이미지 추가
```bash
# assets/gallery/ 폴더에 이미지 파일 복사
# 파일명 규칙: 영문소문자, 하이픈 사용, 순서번호
# 예: lab-activity-01.jpg, equipment-xrf-01.jpg
```

#### 3. gallery.js 파일 수정

**파일 위치:** `gallery.js`

```javascript
// 새 갤러리 아이템 추가 예시
const galleryItems = [
  // 기존 항목들...
  
  // 새로 추가하는 항목
  {
    id: 999,  // 기존 마지막 ID + 1
    category: 'lab-activities',  // 카테고리 선택
    title_en: "Lab Research Activity",
    title_ko: "연구실 연구 활동",
    description_en: "Description in English",
    description_ko: "한글 설명",
    date: "2024-11-07",
    image: "assets/gallery/2024/lab-activity-01.jpg",
    tags: ["research", "lab"]
  }
];
```

**카테고리 종류:**
- `lab-activities` - 연구실 활동
- `equipment` - 장비
- `research` - 연구
- `conferences` - 컨퍼런스
- `achievements` - 성과

#### 4. 작업 내용 확인
```bash
# 변경된 파일 확인
git status

# 변경 내용 미리보기
git diff gallery.js
```

#### 5. 커밋하기
```bash
# 변경된 파일 스테이징
git add assets/gallery/*
git add gallery.js

# 커밋 (의미있는 메시지 작성)
git commit -m "갤러리: 2024년 연구실 활동 이미지 5개 추가"

# 예시 커밋 메시지:
# "갤러리: XRF 장비 사진 3장 추가"
# "갤러리: 학술대회 발표 사진 업데이트"
# "갤러리: 연구 성과 이미지 10장 추가 (2024.10-11)"
```

#### 6. Push하기
```bash
# 본인 브랜치에 push
git push origin gallery-본인이름

# 처음 push할 때는 이렇게:
git push -u origin gallery-본인이름
```

#### 7. Pull Request 생성

1. GitHub 레포지토리 페이지 접속
2. **"Compare & pull request"** 버튼 클릭
3. 제목 작성: "갤러리: 2024년 연구실 활동 이미지 추가"
4. 설명 작성:
   ```
   ## 추가된 내용
   - 연구실 활동 사진 5장
   - 2024년 10-11월 활동
   
   ## 이미지 목록
   - lab-activity-01.jpg: 연구원 회의
   - lab-activity-02.jpg: 실험 장면
   ...
   
   ## 확인 사항
   - [ ] 이미지 파일명이 규칙에 맞음
   - [ ] gallery.js 문법 오류 없음
   - [ ] 설명이 한글/영문 모두 작성됨
   ```
5. **"Create pull request"** 클릭

#### 8. 검토 후 병합 대기

- 메인 관리자(김민제)가 검토
- 승인되면 자동으로 main 브랜치에 병합
- 사이트에 자동 반영

---

## 🔄 다음 작업 시작할 때

```bash
# main 브랜치로 전환
git checkout main

# 최신 코드 받기
git pull origin main

# 새 브랜치 생성
git checkout -b gallery-본인이름-2

# 작업 시작...
```

---

## ⚠️ 주의사항

### DO ✅
- 본인 브랜치에서만 작업
- 의미있는 커밋 메시지 작성
- 큰 파일(10MB 이상) 업로드 전 압축
- 이미지 최적화 (1920px 이하 권장)

### DON'T ❌
- main 브랜치에 직접 push 금지
- 다른 사람 브랜치 수정 금지
- 관련 없는 파일 수정 금지
- 한 번에 너무 많은 변경 (나눠서 커밋)

---

## 🆘 문제 해결

### 충돌(Conflict) 발생 시
```bash
# main 최신 코드 가져오기
git checkout main
git pull origin main

# 본인 브랜치에 병합
git checkout gallery-본인이름
git merge main

# 충돌 파일 수동 해결 후
git add .
git commit -m "병합 충돌 해결"
git push origin gallery-본인이름
```

### 실수로 잘못 커밋했을 때
```bash
# 마지막 커밋 취소 (파일은 유지)
git reset --soft HEAD~1

# 다시 수정 후 커밋
git add .
git commit -m "수정된 커밋 메시지"
```

### 도움이 필요할 때
- GitHub Issues에 질문 등록
- 또는 관리자에게 직접 연락

---

## 📁 파일 구조

```
conservationsciencelab/
├── gallery.html          # 갤러리 페이지
├── gallery.js            # 갤러리 데이터 (이 파일 수정)
├── styles/gallery.css    # 스타일 (건드리지 않음)
└── assets/
    └── gallery/
        ├── 2024/         # 연도별 폴더
        │   ├── lab-activity-01.jpg
        │   ├── lab-activity-02.jpg
        │   └── ...
        ├── 2023/
        └── equipment/    # 카테고리별 폴더
```

---

## 📸 이미지 파일 규칙

### 파일명
- **형식:** `카테고리-설명-순서번호.jpg`
- **예시:**
  - `lab-activity-01.jpg`
  - `equipment-xrf-02.png`
  - `conference-poster-03.jpg`

### 이미지 최적화
- **크기:** 가로 1920px 이하 권장
- **용량:** 2MB 이하 권장
- **형식:** JPG (사진), PNG (그래픽)

### 저장 위치
- `assets/gallery/2024/` - 2024년 이미지
- `assets/gallery/equipment/` - 장비 사진 (영구)
- `assets/gallery/conferences/` - 학술대회 사진

---

## 🎯 작업 체크리스트

작업 전:
- [ ] main 브랜치에서 최신 코드 pull
- [ ] 새 브랜치 생성

작업 중:
- [ ] 이미지 파일 추가
- [ ] gallery.js 수정
- [ ] 로컬에서 테스트 (index.html 열어서 확인)

작업 후:
- [ ] git add, commit
- [ ] git push
- [ ] Pull Request 생성
- [ ] 설명 작성

---

**Happy Collaborating! 🎉**
