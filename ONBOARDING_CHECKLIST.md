# 연구원 온보딩 체크리스트

## 🎯 관리자(김민제) 작업

### ☐ 1. GitHub Branch Protection 설정
- [ ] GitHub.com → conservationsciencelab → Settings → Branches
- [ ] "Add rule" 클릭
- [ ] Branch name pattern: `main`
- [ ] ✅ Require a pull request before merging
- [ ] ✅ Require approvals (1명)
- [ ] Save changes

### ☐ 2. Collaborators 초대
각 연구원마다:
- [ ] Settings → Collaborators → Add people
- [ ] GitHub username 입력 (연구원이 알려준 username)
- [ ] "Add [username] to this repository" 클릭
- [ ] 초대 이메일 자동 발송됨

초대할 연구원 목록:
- [ ] 이름: _________ / GitHub username: _________
- [ ] 이름: _________ / GitHub username: _________
- [ ] 이름: _________ / GitHub username: _________
- [ ] 이름: _________ / GitHub username: _________

---

## 📱 연구원들에게 보낼 안내 메시지

### 메시지 템플릿 1: 계정 생성 요청
```
[보존과학연구소 갤러리 프로젝트]

안녕하세요!
갤러리 페이지 작업을 위해 GitHub 계정이 필요합니다.

1. https://github.com 접속
2. "Sign up" 버튼 클릭
3. 이메일/비밀번호/username 입력
   (username 예시: sooyeon-lab, jihun-chem 등)
4. 이메일 인증 완료

완료 후 본인의 GitHub username을 저에게 알려주세요!
예: "제 username은 sooyeon-lab입니다"

감사합니다.
```

### 메시지 템플릿 2: 초대 수락 안내
```
GitHub 초대 이메일이 발송되었습니다.

1. 이메일 확인 (제목: [GitHub] Invitation to join...)
2. "View invitation" 클릭
3. "Accept invitation" 버튼 클릭

초대 수락 완료 후 다음 단계를 진행하겠습니다!
```

---

## 🖥️ 연구원 온보딩 세션 (30분)

### 준비물:
- [ ] 연구원 노트북 (VS Code 설치됨)
- [ ] 인터넷 연결
- [ ] GitHub 계정 생성 완료
- [ ] 초대 수락 완료

### 세션 진행:

#### Part 1: Git 설치 확인 (5분)
```powershell
# PowerShell에서 실행
git --version

# 설치 안 되어 있으면:
# https://git-scm.com/download/win 에서 다운로드
```

#### Part 2: Git 초기 설정 (5분)
```powershell
# 본인 이름 설정
git config --global user.name "본인이름"

# GitHub 이메일 설정
git config --global user.email "github가입한이메일@example.com"

# 확인
git config --list
```

#### Part 3: 레포지토리 클론 (5분)
```powershell
# 작업할 폴더로 이동 (예: 문서 폴더)
cd ~\Documents

# 레포지토리 클론
git clone https://github.com/minje9723/conservationsciencelab.git

# 폴더 들어가기
cd conservationsciencelab

# VS Code 열기
code .
```

#### Part 4: 첫 테스트 작업 (15분)

**4-1. 브랜치 생성**
```powershell
# 테스트 브랜치 생성
git checkout -b test-본인이름
```

**4-2. 테스트 파일 생성**
```powershell
# test-본인이름.txt 파일 생성
echo "테스트 파일입니다" > test-본인이름.txt
```

**4-3. 커밋**
```powershell
# 스테이징
git add test-본인이름.txt

# 커밋
git commit -m "테스트: 첫 커밋"
```

**4-4. Push**
```powershell
# GitHub에 push
git push origin test-본인이름
```

**4-5. Pull Request 생성**
1. https://github.com/minje9723/conservationsciencelab 접속
2. "Compare & pull request" 버튼 자동 표시됨
3. 제목: "테스트: [본인이름] 첫 PR"
4. "Create pull request" 클릭

**4-6. 관리자 검토 시연**
- 당신이 GitHub에서 PR 확인
- Comment 남기기
- Approve 후 Merge
- 연구원에게 결과 보여주기

---

## 📚 연구원들에게 제공할 문서

### 필수 문서:
1. ✅ `COLLABORATION_GUIDE.md` - 협업 가이드 (이미 생성됨)
2. ✅ `GITHUB_PROTECTION_SETUP.md` - 관리자용 (이미 생성됨)
3. ⬇️ 추가로 필요한 문서:

#### 간단 참조 카드:
```markdown
# 갤러리 작업 Quick Reference

## 매번 작업 시작 전:
git checkout main
git pull origin main
git checkout -b gallery-본인이름-날짜

## 작업 후:
git add .
git commit -m "갤러리: 설명"
git push origin gallery-본인이름-날짜

## GitHub에서:
Pull Request 생성 → 검토 대기

## 자주 쓰는 명령어:
git status          # 현재 상태 확인
git log             # 커밋 히스토리
git branch          # 브랜치 목록
```

---

## ⏱️ 예상 소요 시간

| 단계 | 소요 시간 | 누가 |
|------|----------|------|
| 1. GitHub 계정 생성 | 5분 | 연구원 |
| 2. Username 전달 | 1분 | 연구원 |
| 3. Collaborator 초대 | 2분/명 | 당신 |
| 4. 초대 수락 | 2분 | 연구원 |
| 5. Git 설치 | 10분 | 연구원 |
| 6. 레포지토리 클론 | 5분 | 연구원 |
| 7. 온보딩 세션 | 30분 | 함께 |
| **총 소요 시간** | **약 1시간** | |

---

## ✅ 완료 체크리스트

각 연구원마다:
- [ ] GitHub 계정 생성
- [ ] Username 전달 받음
- [ ] Collaborator 초대 완료
- [ ] 초대 수락 확인
- [ ] Git 설치 완료
- [ ] 레포지토리 클론 완료
- [ ] 테스트 PR 생성/병합 완료
- [ ] COLLABORATION_GUIDE.md 공유
- [ ] 첫 실전 작업 완료

---

## 🆘 예상 문제 & 해결책

### "git clone 시 Permission denied"
→ 초대를 수락했는지 확인
→ GitHub 로그인 확인 (git credential manager)

### "push 시 rejected"
→ main 브랜치에 push하려고 하는지 확인
→ 본인 브랜치에만 push 가능

### "VS Code에서 Git 안 보임"
→ Git 설치 후 VS Code 재시작

### "충돌(Conflict) 발생"
→ 관리자(당신)에게 문의

---

## 📞 지원 채널

- 급한 질문: 카톡/전화
- 기술 문제: GitHub Issues
- 일반 질문: 대면/이메일

---

**준비되면 연구원들과 온보딩 세션 진행!**
