# GitHub Branch Protection 설정 가이드

## 🔒 Main 브랜치 보호 설정

### 목적
- 연구원들이 main 브랜치에 직접 push 불가
- 모든 변경사항은 Pull Request를 통해서만
- 관리자(김민제)의 승인 필수

---

## 설정 방법

### 1단계: GitHub 레포지토리 접속
```
https://github.com/minje9723/conservationsciencelab
```

### 2단계: Settings → Branches
1. **Settings** 탭 클릭
2. 왼쪽 메뉴에서 **Branches** 클릭
3. **Branch protection rules** 섹션 찾기

### 3단계: Branch Protection Rule 추가
1. **Add rule** 또는 **Add branch protection rule** 클릭
2. **Branch name pattern**에 `main` 입력

### 4단계: 보호 규칙 설정

#### ✅ 필수 설정 (체크해야 할 항목):

**Protect matching branches** 섹션에서:

1. ☑️ **Require a pull request before merging**
   - ☑️ **Require approvals** → 1명 (당신)
   - ☑️ **Dismiss stale pull request approvals when new commits are pushed**
   
2. ☑️ **Require status checks to pass before merging** (선택사항)

3. ☑️ **Require conversation resolution before merging**
   - 모든 코멘트 해결 후 병합

4. ☑️ **Do not allow bypassing the above settings**
   - 관리자도 규칙 따르기 (추천)

5. ☑️ **Restrict who can push to matching branches**
   - **Only you (minje9723)** 선택
   - 또는 비워두면 아무도 직접 push 불가

#### ❌ 체크 안 해도 되는 항목:
- Require signed commits (필요 없음)
- Require linear history (선택사항)
- Lock branch (필요 없음)

### 5단계: 저장
**Create** 또는 **Save changes** 버튼 클릭

---

## 🎯 설정 후 작동 방식

### 연구원 입장:
```bash
# 1. 작업 브랜치에서 작업
git checkout -b gallery-sooyeon
# ... 작업 ...
git commit -m "갤러리 이미지 추가"

# 2. Push (자기 브랜치에만 가능)
git push origin gallery-sooyeon  # ✅ 성공

# 3. Main에 직접 push 시도
git push origin main  # ❌ 거부됨!
# Error: You don't have permission to push to main
```

### 당신(관리자) 입장:
1. GitHub에서 Pull Request 알림 받음
2. **Files changed** 탭에서 변경사항 확인:
   - 어떤 파일이 수정됐는지
   - 어떤 이미지가 추가됐는지
   - 코드 문법 오류 없는지
   
3. 코멘트 작성 가능:
   ```
   "이 이미지는 파일명을 lab-activity-01.jpg로 바꿔주세요"
   "설명이 너무 짧아요. 더 자세히 써주세요"
   ```

4. 검토 완료 후:
   - **Approve** 클릭
   - **Merge pull request** 클릭
   - Main 브랜치에 반영됨

---

## 📊 누가 뭘 했는지 추적

### Commit History에서 확인 가능:
```
김민제    Merge pull request #5 from gallery-sooyeon
이수연    갤러리: 연구실 활동 사진 5장 추가
박지훈    갤러리: XRF 장비 사진 업데이트
김민제    Merge pull request #4 from gallery-jihoon
```

### GitHub Insights → Contributors:
- 각 연구원의 커밋 수
- 추가한 코드 라인 수
- 기여도 그래프

---

## 🔄 일반적인 워크플로우

### 연구원 작업 흐름:
```bash
# 1. 최신 코드 받기
git checkout main
git pull origin main

# 2. 새 브랜치
git checkout -b gallery-myname

# 3. 작업
# ... 이미지 추가, gallery.js 수정 ...

# 4. 커밋
git add .
git commit -m "갤러리: 2024년 11월 활동 사진 추가"

# 5. Push
git push origin gallery-myname

# 6. GitHub에서 Pull Request 생성
```

### 당신의 검토 흐름:
```
1. GitHub 이메일 알림 받음
2. Pull Request 페이지 접속
3. "Files changed" 확인
4. 문제 있으면 → Comment 남기기
5. 문제 없으면 → "Approve" + "Merge"
```

---

## ⚠️ 주의사항

### 연구원들에게 강조할 것:
1. **절대 main 브랜치에서 직접 작업 금지**
2. **작업 전 항상 최신 main에서 브랜치 생성**
3. **큰 작업은 여러 PR로 나눠서**
4. **의미있는 커밋 메시지 작성**

### 당신이 주의할 것:
1. PR 검토 시 이미지 파일 크기 확인 (2MB 이하)
2. gallery.js 문법 오류 확인
3. 파일명 규칙 준수 확인
4. 병합 후 충돌 없는지 확인

---

## 🆘 긴급 상황: 잘못 병합했을 때

```bash
# 마지막 병합 되돌리기
git revert HEAD
git push origin main

# 또는 특정 커밋으로 되돌리기
git log  # 커밋 해시 확인
git revert <commit-hash>
git push origin main
```

---

## 📱 모바일에서도 검토 가능

- GitHub 모바일 앱 설치
- Push 알림 받기
- 이동 중에도 PR 검토/승인 가능

---

**설정 완료 후 연구원들에게 공유하세요!**
