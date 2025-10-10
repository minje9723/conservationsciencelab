# 연구시설 이미지 폴더 (Facilities Images)

이 폴더는 연구시설 및 장비 사진을 저장하는 곳입니다.

## 파일 명명 규칙 (File Naming Convention)

### 권장 형식:
- `equipment-name-01.jpg` - 장비 메인 사진
- `equipment-name-02.jpg` - 장비 디테일 사진
- `equipment-name-detail.jpg` - 장비 상세 사진
- `equipment-name-usage.jpg` - 장비 사용 모습

### 예시:
```
3d-scanner-01.jpg
3d-scanner-02.jpg
xrf-analyzer-01.jpg
xrf-analyzer-detail.jpg
microscope-01.jpg
microscope-usage.jpg
```

## 이미지 권장 사양

- **파일 형식**: JPG, PNG
- **권장 해상도**: 1920x1080 이상 (Full HD)
- **최대 파일 크기**: 2MB 이하 (웹 최적화)
- **가로/세로 비율**: 16:9 또는 4:3

## 장비 카테고리별 폴더 (선택사항)

필요시 하위 폴더로 구분할 수 있습니다:
- `analysis/` - 분석 장비
- `imaging/` - 이미징 장비
- `restoration/` - 복원 장비
- `3d/` - 3D 스캐닝 및 프린팅 장비

## 이미지 추가 후

1. `facilities.js` 파일에서 장비 데이터에 이미지 경로 추가
2. 예시:
```javascript
{
  name_en: "3D Scanner",
  images: [
    "assets/facilities/3d-scanner-01.jpg",
    "assets/facilities/3d-scanner-02.jpg"
  ]
}
```

