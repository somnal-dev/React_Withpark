# React With Park

데모 : https://withpark.vercel.app

![스크린샷 2025-06-03 19 44 50](https://github.com/user-attachments/assets/7086eafd-545e-4cd9-abb7-6b14abbca8e1)

## 🚀 실행 방법

### 필수 요구사항
- Node.js 18+ 
- Yarn Berry (4.9.2+)

### 설치 및 실행

1. **저장소 클론**
   ```bash
   git clone https://github.com/your-username/react_withpark.git
   cd react_withpark
   ```

2. **의존성 설치**
   ```bash
   yarn install
   ```

3. **환경 변수 설정**
   
   프로젝트 루트에 `.env` 파일을 생성하고 다음 변수들을 설정하세요:
   ```env
   # API 서버 URL
   VITE_API_BASE_URL=your_api_server_url
   
   # 카카오 API 키
   VITE_KAKAO_API_KEY=your_kakao_api_key
   
   # 기타 필요한 환경 변수들
   VITE_APP_NAME=WithPark
   ```

4. **개발 서버 실행**
   ```bash
   yarn dev
   ```
   
   브라우저에서 `http://localhost:5173`으로 접속

5. **프로덕션 빌드**
   ```bash
   yarn build
   ```

6. **빌드된 앱 미리보기**
   ```bash
   yarn preview
   ```

## 📁 프로젝트 폴더 구조

```
react_withpark/
├── public/                    # 정적 파일
│   └── favicon.ico           # 파비콘
├── src/                      # 소스 코드
│   ├── api/                  # API 관련
│   │   ├── queries/          # React Query 쿼리 함수들
│   │   ├── mutations/        # React Query 뮤테이션 함수들  
│   │   ├── utils/            # API 유틸리티 함수들
│   │   ├── fetcher.ts        # HTTP 클라이언트 설정 (ky)
│   │   └── QueryClientProvider.tsx # React Query 프로바이더
│   ├── assets/               # 정적 자산 (이미지, 아이콘 등)
│   ├── constants/            # 상수 정의
│   ├── hooks/                # 커스텀 훅
│   │   ├── useDialog.ts      # 다이얼로그 상태 관리 훅
│   │   ├── useAuthAtom.ts    # 인증 상태 Jotai 훅
│   │   └── useLocalStorage.ts # 로컬스토리지 관리 훅
│   ├── pages/                # 페이지 컴포넌트
│   │   ├── CommunityPage/    # 커뮤니티 페이지
│   │   ├── DashboardPage/    # 대시보드 페이지
│   │   ├── GamePage/         # 게임 페이지
│   │   ├── IntroPage/        # 소개 페이지
│   │   ├── LoginPage/        # 로그인 페이지
│   │   ├── OAuth/            # OAuth 인증 관련
│   │   ├── OnboardingPage/   # 온보딩 페이지
│   │   ├── PlaceDetailPage/  # 장소 상세 페이지
│   │   ├── PlacePage/        # 장소 목록 페이지
│   │   ├── PostDetailPage/   # 게시물 상세 페이지
│   │   ├── SettingPage/      # 설정 페이지
│   │   └── index.ts          # 페이지 컴포넌트 익스포트
│   ├── routes/               # 라우팅 설정
│   ├── types/                # TypeScript 타입 정의
│   │   ├── Kakao.ts          # 카카오 관련 타입
│   │   ├── community.ts      # 커뮤니티 관련 타입
│   │   └── place.ts          # 장소 관련 타입
│   ├── ui/                   # UI 컴포넌트
│   │   ├── components/       # 재사용 가능한 UI 컴포넌트들
│   │   └── assets/           # UI 관련 자산들
│   ├── App.tsx               # 루트 컴포넌트
│   ├── index.css             # 글로벌 스타일
│   ├── main.tsx              # 앱 진입점
│   └── vite-env.d.ts         # Vite 타입 정의
├── .gitignore                # Git 무시 파일 목록
├── .yarnrc.yml              # Yarn Berry 설정
├── eslint.config.js         # ESLint 설정
├── index.html               # HTML 템플릿
├── package.json             # 패키지 의존성 및 스크립트
├── tsconfig.json            # TypeScript 설정
├── vercel.json              # Vercel 배포 설정
├── vite.config.ts           # Vite 설정
├── yarn.lock                # Yarn 의존성 잠금 파일
└── README.md                # 프로젝트 문서
```