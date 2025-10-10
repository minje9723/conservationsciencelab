# Git 동기화 빠른 참조 가이드
# Quick Git Synchronization Reference Guide

> 랩탑 ↔ 사무실 PC 작업 동기화를 위한 간단한 참조 가이드

## 🎯 핵심 명령어 (Essential Commands)

### 📥 작업 시작 전 (Before Starting Work)

```bash
# 프로젝트 폴더로 이동
cd /path/to/conservationsciencelab

# 최신 변경사항 가져오기
git pull origin main
```

### 💾 작업 완료 후 (After Completing Work)

```bash
# 변경사항 확인
git status

# 모든 변경사항 추가
git add .

# 커밋 (의미있는 메시지 작성)
git commit -m "작업 내용을 간단히 설명"

# GitHub에 업로드
git push origin main
```

## 📋 상황별 체크리스트

### ✅ 랩탑에서 작업을 마치고 집에 가기 전

```bash
□ git status        # 변경사항 확인
□ git add .         # 스테이징
□ git commit -m ""  # 커밋 (메시지 작성)
□ git push          # 푸시
```

### ✅ 사무실 PC에서 작업 시작하기 전

```bash
□ cd conservationsciencelab  # 프로젝트 폴더 이동
□ git pull origin main       # 최신 코드 받기
```

### ✅ 사무실 PC에서 작업 완료 후

```bash
□ git status        # 변경사항 확인
□ git add .         # 스테이징
□ git commit -m ""  # 커밋 (메시지 작성)
□ git push          # 푸시
```

### ✅ 다시 랩탑으로 돌아왔을 때

```bash
□ cd conservationsciencelab  # 프로젝트 폴더 이동
□ git pull origin main       # 최신 코드 받기
```

## 🔄 표준 작업 흐름 (Standard Workflow)

```
┌─────────────────┐
│  작업 시작 전    │
│  git pull       │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  파일 수정/작업  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  git status     │
│  (변경사항 확인) │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  git add .      │
│  (스테이징)      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  git commit -m  │
│  (커밋 메시지)   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  git push       │
│  (GitHub 업로드) │
└─────────────────┘
```

## 🚨 자주 발생하는 문제와 해결법

### ❌ 문제 1: "Please commit your changes or stash them"

**증상**: `git pull` 실행 시 오류 발생

**해결**:
```bash
# 방법 1: 현재 작업 커밋
git add .
git commit -m "진행 중인 작업 임시 저장"
git pull origin main

# 방법 2: 임시 저장 (stash)
git stash
git pull origin main
git stash pop
```

### ❌ 문제 2: "Updates were rejected"

**증상**: `git push` 실행 시 거부됨

**해결**:
```bash
# 최신 변경사항 먼저 가져오기
git pull origin main

# 충돌이 없으면 바로 푸시
git push origin main
```

### ❌ 문제 3: "Merge conflict"

**증상**: 파일 충돌 발생

**해결**:
```bash
# 1. 충돌 파일 확인
git status

# 2. 충돌 파일을 열어서 다음 마커 찾기:
#    <<<<<<< HEAD
#    (현재 버전)
#    =======
#    (원격 버전)
#    >>>>>>> ...

# 3. 필요한 코드만 남기고 마커 삭제

# 4. 충돌 해결 후
git add [충돌해결된파일]
git commit -m "충돌 해결"
git push origin main
```

## 💡 유용한 팁

### 📌 Tip 1: 커밋 전 확인하기

```bash
# 어떤 파일이 변경되었는지 확인
git status

# 구체적인 변경 내용 확인
git diff

# 특정 파일의 변경 내용만 확인
git diff [파일명]
```

### 📌 Tip 2: 커밋 메시지 작성 예시

```bash
# 좋은 예 ✅
git commit -m "홈페이지 배너 반응형 디자인 수정"
git commit -m "프로젝트 페이지에 새 프로젝트 3개 추가"
git commit -m "네비게이션 메뉴 드롭다운 버그 수정"

# 나쁜 예 ❌
git commit -m "수정"
git commit -m "업데이트"
git commit -m "aaa"
```

### 📌 Tip 3: 작업 히스토리 보기

```bash
# 최근 커밋 목록 보기
git log --oneline -10

# 그래픽 형태로 보기
git log --oneline --graph --all -10
```

### 📌 Tip 4: 실수로 추가한 파일 제외하기

```bash
# 특정 파일을 스테이징에서 제외
git reset HEAD [파일명]

# 모든 파일을 스테이징에서 제외
git reset HEAD .
```

## 📱 단축 명령어 설정 (선택사항)

더 빠르게 작업하려면 Git alias를 설정하세요:

```bash
# Git 별칭 설정
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm commit
git config --global alias.pl pull
git config --global alias.ps push

# 사용 예시
git st      # git status와 동일
git cm -m "메시지"  # git commit -m "메시지"와 동일
```

## 🔐 첫 설정 (최초 1회만)

사무실 PC나 새 컴퓨터에서 처음 Git을 사용할 때:

```bash
# Git 사용자 정보 설정
git config --global user.name "당신의 이름"
git config --global user.email "your.email@example.com"

# 설정 확인
git config --global --list
```

## 📞 도움이 더 필요하면?

1. **자세한 가이드**: `README.md` 파일 참조
2. **GitHub Issues**: 문제 리포트 및 질문
3. **Git 공식 문서**: https://git-scm.com/doc

## 🎓 추가 학습 자료

- [Pro Git Book (한글)](https://git-scm.com/book/ko/v2)
- [생활코딩 Git 강의](https://opentutorials.org/course/2708)
- [Git 시각화 도구](https://git-school.github.io/visualizing-git/)

---

**빠른 요약**: `pull → 작업 → add → commit → push` 🔄

**기억하세요**: 항상 작업 시작 전에 `git pull`! ⚡

---

**작성일**: 2025년 10월 10일  
**버전**: 1.0
