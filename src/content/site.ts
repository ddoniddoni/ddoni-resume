export type ProjectCategory = "personal" | "professional";
export type ProjectTone = "clay" | "sage" | "sky" | "plum" | "sand";

export type ProjectPreviewImage = {
  src: string;
  alt: string;
};

export type ProjectCardMockupKind = "social" | "translation" | "topology";

export type ProjectTechnology = {
  name: string;
  description?: string;
};

export type ProjectDemoAccount = {
  role: string;
  email: string;
  password: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  organization: string;
  period: string;
  categories: ProjectCategory[];
  role: string;
  technologies: string[];
  technologyDetails?: ProjectTechnology[];
  tone: ProjectTone;
  cardMockup?: ProjectCardMockupKind;
  previewImage?: ProjectPreviewImage;
  projectUrl?: string;
  repositoryUrl?: string;
  demoAccounts?: ProjectDemoAccount[];
  featured?: boolean;
  background: string[];
  process: string[];
  outcome: string[];
};

export type Profile = {
  name: string;
  role: string;
  intro: string;
  email: string;
  availability: string;
};

export type HeroLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type AboutPreview = {
  eyebrow: string;
  statement: string;
};

export type WorkShowcase = {
  eyebrow: string;
  title: string;
  description: string;
  actionLabel: string;
};

export type CareerEntry = {
  company: string;
  team: string;
  period: string;
  duration: string;
  role: string;
  highlights: string[];
};

export type ExpertiseArea = {
  id: string;
  title: string;
  description: string;
};

// FAQ 콘텐츠 확정 시 사용한다.
// export type ContactFaq = {
//   question: string;
//   answer: string;
// };

export type SkillTickerIcon =
  | "angular"
  | "nestjs"
  | "nextjs"
  | "react"
  | "sass"
  | "tailwindcss"
  | "tanstack-query"
  | "typescript"
  | "websocket";

export type SkillTickerItem = {
  label: string;
  icon: SkillTickerIcon;
};

export const siteConfig = {
  name: "박상돈",
  title: "박상돈 — 프론트엔드 개발 포트폴리오",
  description: "프론트엔드 개발자 박상돈의 작업과 개발 과정을 기록하는 포트폴리오입니다.",
  // 배포 전 실제 도메인으로 교체한다.
  url: "https://portfolio.example",
} as const;

export const profile: Profile = {
  name: "박상돈",
  role: "프론트엔드 개발",
  intro: "안녕하세요 프론트엔드 개발 4년차 박상돈입니다.",
  email: "psdkei@naver.com",
  availability: "협업 가능 여부 정보 준비 중",
};

export const heroLinks: HeroLink[] = [
  { label: "GitHub", href: "https://github.com/ddoniddoni", external: true },
  { label: "블로그", href: "https://velog.io/@psdkey/posts", external: true },
  { label: "경력", href: "/about" },
  { label: "프로젝트", href: "/projects" },
];

export const aboutPreview: AboutPreview = {
  eyebrow: "소개",
  statement:
    "사용자 경험을 기술로 구현하는 프론트엔드 개발자입니다.\n단순히 화면을 구현하는 것을 넘어, 사용자가 더 편리하고 자연스럽게 서비스를 이용할 수 있는 방법을 고민합니다.\n좋은 사용자 경험과 안정적인 개발 사이의 균형을 중요하게 생각하며,\n더 나은 제품을 만들기 위해 끊임없이 고민하고 개선합니다.",
};

export const workShowcase: WorkShowcase = {
  eyebrow: "주요 작업",
  title: "주요 프로젝트",
  description:
    "실시간 서비스, 사용자 기능, 다국어 자동화, 인프라 운영 시각화까지 문제의 맥락과 구현 과정을 기록합니다.",
  actionLabel: "모든 프로젝트 보기",
};

export const careerSummary = "총 4년 5개월";

export const skillsTicker: SkillTickerItem[] = [
  { label: "React", icon: "react" },
  { label: "Next.js", icon: "nextjs" },
  { label: "NestJS", icon: "nestjs" },
  { label: "TypeScript", icon: "typescript" },
  { label: "WebSocket", icon: "websocket" },
  { label: "Angular", icon: "angular" },
  { label: "SCSS", icon: "sass" },
  { label: "Tailwind CSS", icon: "tailwindcss" },
  { label: "TanStack Query", icon: "tanstack-query" },
];

export const expertiseAreas: ExpertiseArea[] = [
  {
    id: "structure-and-scalability",
    title: "구조와 확장성",
    description:
      "컴포넌트와 상태의 책임을 명확하게 나누고, 기능의 추가와 변경에 유연하게 대응할 수 있는 구조를 설계합니다. 공통 로직과 UI를 적절히 분리해 유지보수성과 개발 효율을 높입니다.",
  },
  {
    id: "performance-and-experience",
    title: "성능과 사용자 경험",
    description:
      "렌더링과 데이터 요청, 리소스 로딩 과정에서 발생하는 병목을 확인하고 사용자가 실제로 체감하는 속도를 개선합니다. 로딩·오류·빈 상태와 같은 다양한 상황까지 고려해 자연스러운 사용 흐름을 만듭니다.",
  },
  {
    id: "stability-and-quality",
    title: "안정성과 품질",
    description:
      "예외 상황과 변경 가능성을 고려해 안정적으로 운영할 수 있는 프론트엔드를 구현합니다. 타입 안정성, 일관된 코드 구조와 적절한 테스트를 통해 오류 가능성을 줄이고 서비스의 품질을 유지합니다.",
  },
];

// export const contactFaqs: ContactFaq[] = [
//   {
//     question: "어떤 협업을 이야기할 수 있나요?",
//     answer:
//       "React, Next.js, TypeScript 기반의 화면 개발과 사용자 기능 개선, 서비스 리뉴얼에 관한 협업을 이야기할 수 있습니다.",
//   },
//   {
//     question: "처음 연락할 때 어떤 내용을 알려주면 좋을까요?",
//     answer:
//       "프로젝트의 목표와 현재 상황, 예상 일정, 필요한 역할을 함께 알려주시면 맥락을 빠르게 파악하는 데 도움이 됩니다.",
//   },
//   {
//     question: "문의는 어떤 방식으로 전달되나요?",
//     answer:
//       "양식을 작성하면 사용 중인 메일 앱이 열리고, 입력한 이름·회신 이메일·문의 내용이 메일 초안에 자동으로 채워집니다.",
//   },
//   {
//     question: "이전 작업은 어디에서 볼 수 있나요?",
//     answer:
//       "프로젝트 페이지에서 개인 프로젝트와 실무 프로젝트의 문제 맥락, 구현 과정, 사용 기술을 확인할 수 있습니다.",
//   },
// ];

export const career: CareerEntry[] = [
  {
    company: "주식회사더블다운게임즈 (DoubleDownGamesInc.)",
    team: "플랫폼개발팀 · 팀원",
    period: "2026. 01 — 2026. 03",
    duration: "3개월",
    role: "프론트엔드 개발자",
    highlights: [
      "React · Next.js · TypeScript 기반 서비스 화면 및 사용자 흐름 리뉴얼",
      "기능·도메인 단위 컴포넌트 재구성 및 데이터 변환·상태 처리 구조 개선",
      "agent-browser를 활용한 사용자 시나리오 기반 기능 검증 및 수정 후 재검증",
    ],
  },
  {
    company: "주식회사더블다운게임즈 (DoubleDownGamesInc.)",
    team: "플랫폼개발팀 · 팀원",
    period: "2024. 06 — 2025. 05",
    duration: "1년",
    role: "프론트엔드 개발자",
    highlights: [
      "React · Next.js · TypeScript 기반 실시간 게임 서비스 프론트엔드 개발",
      "100개 이상 방의 토너먼트 로비에 Jotai 상태 구독 세분화와 목록 가상화 적용",
      "커스텀 방 · 친구 · 쪽지 · 알림 · 게임 초대 · 선물 등 사용자 및 소셜 기능 신규 구축",
      "번역 키 추출 · Google Sheets 동기화 · 10개 언어 JSON 리소스 생성 자동화",
    ],
  },
  {
    company: "(주) 나임네트웍스",
    team: "개발팀 · 팀원",
    period: "2020. 11 — 2023. 12",
    duration: "3년 2개월",
    role: "프론트엔드 개발자",
    highlights: [
      "Angular · TypeScript 기반 SDDC 솔루션 프론트엔드 개발",
      "SDDC 논리 및 물리 구성도 리뉴얼 · 장비 유형별 UI 분리 · 운영 상태 시각화 개선",
      "SDDC 운영 대시보드 및 인프라 모니터링 화면 개발 · 사용량 시각화 · 검색 및 필터 구현",
    ],
  },
];

export const navigation = [
  { href: "/", label: "홈" },
  { href: "/about", label: "소개" },
  { href: "/projects", label: "프로젝트" },
  { href: "/contact", label: "연락" },
] as const;

export const projectCategoryLabels: Record<ProjectCategory, string> = {
  personal: "개인 프로젝트",
  professional: "실무 프로젝트",
};

export const projects: Project[] = [
  {
    slug: "tripmate",
    title: "TripMate",
    summary:
      "AI 여행 일정 생성부터 장소 탐색, 일정 편집, 지도 동선, 준비물과 공동 경비까지 한 화면에서 관리하는 실시간 협업 여행 플래너입니다.",
    organization: "개인 프로젝트",
    period: "2026",
    categories: ["personal"],
    role: "프론트엔드 설계 · 실시간 협업 기능 구현 · 풀스택 연동",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "dnd-kit",
      "Liveblocks",
      "Supabase",
      "Google Maps Platform",
      "OpenAI Responses API",
      "Vitest",
      "Playwright",
    ],
    technologyDetails: [
      { name: "Next.js 16", description: "App Router 기반 화면과 서버 경계를 구성했습니다." },
      { name: "React 19", description: "일정, 지도, 패널을 역할별 컴포넌트로 나눴습니다." },
      { name: "TypeScript", description: "도메인 모델과 API·실시간 상태 계약을 명확히 유지했습니다." },
      { name: "dnd-kit", description: "일정 순서 변경과 날짜 간 이동을 구현했습니다." },
      { name: "Liveblocks", description: "동시 편집 데이터, Presence, Undo / Redo 이력을 관리했습니다." },
      { name: "Supabase", description: "인증, 여행 메타데이터, 멤버십과 RLS를 맡았습니다." },
      { name: "Google Maps Platform", description: "장소 검색, 지도 표시, 여행 동선을 연결했습니다." },
      {
        name: "OpenAI Responses API",
        description:
          "여행 조건을 바탕으로 일정 초안을 생성했습니다. 현재 체험 배포에서는 운영 비용 때문에 API key를 제외해 이 기능을 비활성화했습니다.",
      },
      { name: "Vitest · Playwright", description: "도메인 규칙과 브라우저 사용자 흐름을 검증했습니다." },
    ],
    tone: "clay",
    previewImage: {
      src: "/projects/tripmate-schedule.png",
      alt: "TripMate 후쿠오카 여행 일정 관리 화면",
    },
    projectUrl: "https://tripmate-xi-six.vercel.app",
    repositoryUrl: "https://github.com/ddoniddoni/tripmate",
    demoAccounts: [
      { role: "관리자", email: "admin@tripmate.com", password: "admin1234" },
      { role: "테스트", email: "test@tripmate.com", password: "admin1234" },
    ],
    featured: true,
    background: [
      "여행 준비가 단체 채팅방에서 시작되면 장소 링크, 일정 의견, 준비물과 경비 정보가 빠르게 흩어지고 여러 버전의 계획표가 생깁니다.",
      "TripMate는 사용자가 입력한 여행 조건을 바탕으로 AI가 일정 초안을 만들고, 장소 탐색부터 일정, 지도 동선, 준비물, 공동 경비까지를 하나의 공유 여행판에서 관리하도록 설계한 웹 애플리케이션입니다.",
    ],
    process: [
      "여행 메타데이터와 권한은 Supabase에, 여러 사람이 함께 편집하는 일정·준비물·경비는 Liveblocks Storage에, 일시적인 접속·선택 상태는 Presence에 분리해 단일 소유자를 정했습니다.",
      "dnd-kit으로 같은 날의 순서 변경과 날짜 간 이동을 구현하고, Drag 중에는 로컬 프리뷰만 갱신한 뒤 Drop 시점에 하나의 도메인 mutation과 Undo / Redo 이력으로 커밋했습니다.",
      "OpenAI Responses API에 여행지·기간·인원·취향을 전달해 일정 초안을 생성하도록 구성했습니다. 현재 체험 배포에서는 운영 비용을 고려해 API key를 제외했고, AI 일정 생성 기능은 비활성화된 상태입니다.",
      "일정 카드와 지도 마커를 양방향으로 연결하고, 확정된 좌표 순서로만 Google Routes API를 요청했습니다. 동일 경로는 캐시하고 stale 요청을 취소해 불필요한 외부 호출을 줄였습니다.",
      "Liveblocks room 권한은 서버 Route Handler에서 Supabase 로그인·멤버십·역할을 확인한 뒤 발급하고, owner / editor / viewer 권한을 UI뿐 아니라 RLS와 서버 경계에서도 검증했습니다.",
      "도메인 규칙, 컴포넌트, Route Handler, 브라우저 흐름을 Vitest와 Playwright로 나눠 검증하고, 유료 외부 API는 adapter와 mock으로 테스트 경계에서 분리했습니다.",
    ],
    outcome: [
      "여행지·기간·인원·취향을 바탕으로 AI 일정 초안을 생성하도록 구현했습니다. 다만 체험 배포에서는 운영 비용 때문에 OpenAI API key를 제외해 이 기능을 비활성화했습니다.",
      "장소 검색, 일정 CRUD·복제·날짜 이동, 지도 경로, 후보 장소, 초대·역할, 준비물과 공동 경비를 하나의 여행 단위로 연결했습니다.",
      "데스크톱에서는 날짜 탐색·타임라인·지도를 함께 제공하고, 모바일에서는 일정과 지도를 전환해 좁은 화면에서도 편집 흐름을 유지했습니다.",
      "연결·재연결·오프라인·읽기 전용·외부 Provider 오류처럼 협업 환경에서 발생하는 상태를 명시적으로 안내하도록 구현했습니다.",
      "저장소 기준 Vitest 111개 파일·423개 테스트와 Playwright 3개 파일·5개 브라우저 시나리오로 핵심 도메인과 사용자 흐름을 검증했습니다.",
    ],
  },
  {
    slug: "support-flow",
    title: "SupportFlow",
    summary:
      "고객 문의 접수부터 처리·답변까지의 흐름을 관리하고, AI가 문의 맥락과 우선순위를 정리해 주는 고객지원 운영 대시보드입니다.",
    organization: "개인 프로젝트",
    period: "2026",
    categories: ["personal"],
    role: "운영 SaaS 화면 설계 · 역할별 고객지원 워크플로우 구현 · AI 보조 경험 구축",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase",
      "TanStack Query",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Recharts",
      "Playwright",
    ],
    technologyDetails: [
      { name: "Next.js 16", description: "고객·상담원·관리자 역할별 화면과 서버 경계를 구성했습니다." },
      { name: "React 19", description: "문의함, 상세, AI 검토, 운영 리포트를 역할에 맞는 화면으로 구현했습니다." },
      { name: "TypeScript", description: "문의 상태, 권한, AI 분석 결과의 도메인 계약을 명확히 유지했습니다." },
      { name: "Supabase", description: "인증과 역할별 접근 제어, 고객지원 데이터를 연결했습니다." },
      { name: "TanStack Query", description: "문의 목록과 운영 지표의 서버 상태를 조회·갱신했습니다." },
      { name: "Zustand", description: "화면 단위의 일시적인 UI 상태를 분리해 관리했습니다." },
      { name: "React Hook Form · Zod", description: "문의 등록과 답변 입력의 폼 상태 및 유효성 검사를 구성했습니다." },
      { name: "Recharts", description: "처리 상태와 담당자 부하, 응답 위험 추이를 시각화했습니다." },
      { name: "Playwright", description: "역할별 고객지원 흐름을 브라우저 시나리오로 검증했습니다." },
    ],
    tone: "sage",
    previewImage: {
      src: "/projects/support-flow-dashboard.png",
      alt: "SupportFlow 관리자 지원 운영 대시보드",
    },
    projectUrl: "https://support-flow-five.vercel.app/",
    repositoryUrl: "https://github.com/ddoniddoni/support-flow",
    featured: true,
    background: [
      "고객지원팀은 문의가 많아질수록 답변 속도뿐 아니라 환불·결제·보안·부정 감정 같은 위험 신호와 처리 우선순위를 함께 관리해야 합니다.",
      "SupportFlow는 고객 문의 접수부터 답변 완료까지의 흐름을 한 화면에서 관리하고, 고객·상담원·관리자 역할에 맞춰 필요한 정보와 작업을 분리한 운영 SaaS입니다.",
    ],
    process: [
      "고객 공개 답변과 상담원·관리자용 내부 메모를 분리하고, 역할별로 노출되는 정보와 가능한 작업을 구분했습니다.",
      "문의함에서 상태, 우선순위, SLA 위험, 담당자, 태그, AI 신호, 업데이트 시간을 한 목록에 구성하고 검색·필터로 답변 대기·부정 감정·긴급 문의를 빠르게 찾도록 했습니다.",
      "AI가 문의 요약, 카테고리, 감정, 긴급도, 고객 의도, 추천 우선순위와 답변 초안을 제안하도록 구성했습니다.",
      "AI가 생성한 답변은 자동 발송하지 않고 상담원이 확인·수정한 뒤 제출하도록 해 최종 판단을 사람에게 남겼습니다.",
      "낮은 신뢰도나 위험 신호가 감지된 문의를 AI 검토 화면에 모으고, 운영 대시보드·리포트에서 처리 현황과 담당자 부하를 확인하도록 구성했습니다.",
    ],
    outcome: [
      "고객은 문의 등록과 공개 답변 확인을, 상담원은 배정된 문의 처리와 내부 메모 작성을, 관리자는 전체 문의 흐름과 담당자 배정을 수행할 수 있도록 역할별 흐름을 구성했습니다.",
      "문의 상태, 우선순위, 담당자, SLA 위험, AI 분석 결과를 한 목록에서 확인해 먼저 처리할 문의를 빠르게 판단할 수 있도록 했습니다.",
      "AI 요약과 답변 초안, 감정·긴급도·검토 필요 신호를 제공하되 고객에게는 내부 운영 정보가 노출되지 않도록 분리했습니다.",
      "운영 대시보드와 리포트에서 답변 대기 문의, 처리 상태, 담당자 부하, 카테고리 분포, 응답 위험 추이를 확인할 수 있도록 했습니다.",
    ],
  },
  {
    slug: "service-renewal-and-scenario-validation",
    title: "서비스 화면 리뉴얼 및 사용자 시나리오 기반 기능 검증",
    summary: "기존 비즈니스 로직을 유지하며 화면과 사용자 흐름을 개편하고, 브라우저에서 사용자 시나리오를 검증했습니다.",
    organization: "주식회사더블다운게임즈 (DoubleDownGamesInc.)",
    period: "2026. 01 — 2026. 03",
    categories: ["professional"],
    role: "React, Next.js, TypeScript 기반 리뉴얼 화면 개발, 컴포넌트 및 상태 처리 구조 개선, 브라우저 기반 기능 검증",
    technologies: ["React", "Next.js", "TypeScript", "agent-browser"],
    tone: "clay",
    background: [
      "기존 서비스의 화면 구조와 사용자 흐름을 신규 정책 및 UI에 맞게 개편했습니다. 기존 비즈니스 로직을 유지하면서 변경된 화면에 필요한 데이터 변환과 상태 처리 구조를 개선하고, 화면 이동과 사용자 입력 과정에서 발생하는 기능 오류를 사용자 시나리오 기준으로 검증했습니다.",
    ],
    process: [
      "기존 화면의 컴포넌트 의존성과 사용자 흐름을 분석하고 변경된 요구사항에 맞춰 컴포넌트를 기능 및 도메인 단위로 재구성",
      "기존 비즈니스 로직과 신규 UI 사이의 데이터 흐름을 분석하고 화면 표시 데이터 변환 및 상태 처리 로직 개선",
      "화면 이동, 사용자 입력, 상태 변경을 포함한 주요 사용자 시나리오와 기능별 기대 결과 정의",
      "agent-browser를 활용해 실제 브라우저 환경에서 사용자 시나리오를 수행하고 화면 전환, 입력 처리, 상태 동기화 오류 검증",
      "발견된 이슈 수정 후 동일 시나리오와 연관 기능을 재실행해 수정 결과와 기존 기능의 정상 동작 확인",
    ],
    outcome: [
      "기존 비즈니스 로직을 유지하면서 신규 정책과 UI에 맞는 화면 및 사용자 흐름 구현",
      "개별 화면 확인 방식에서 사용자 시나리오 기반 검증 방식으로 확장해 기능 간 연결 과정에서 발생하는 오류를 검수 단계에서 발견 및 수정",
      "시나리오와 기대 결과를 기준으로 수정 사항과 기존 기능을 반복 확인할 수 있는 브라우저 기반 검증 절차 마련",
    ],
  },
  {
    slug: "realtime-tournament-lobby-optimization",
    title: "실시간 토너먼트 로비 렌더링 최적화",
    summary: "100개 이상의 방이 표시되는 로비에서 Jotai 상태 구독과 WebSocket 갱신 범위를 세분화하고 목록 가상화를 적용했습니다.",
    organization: "주식회사더블다운게임즈 (DoubleDownGamesInc.)",
    period: "2024. 06 — 2025. 05",
    categories: ["professional"],
    role: "컴포넌트 및 상태 구조 재설계, WebSocket 이벤트 처리 개선, Jotai 상태 구독 범위 최적화, 대규모 목록 가상화",
    technologies: ["Next.js", "React", "TypeScript", "WebSocket", "Jotai", "List Virtualization"],
    tone: "sage",
    background: [
      "100개 이상의 방이 표시되는 토너먼트 로비에서 참여 인원, 사용자 위치, 테이블 배치, 보유 금액이 WebSocket 이벤트에 따라 실시간으로 변경되는 환경을 최적화했습니다. 기존에는 방, 테이블, 사용자 UI와 상태가 하나의 화면 구조에 결합되어 있어 일부 데이터 변경에도 관련 없는 영역이 함께 갱신되는 문제가 있었습니다. 이를 해결하기 위해 화면과 상태 구조를 방, 테이블, 사용자 단위로 분리하고 목록 가상화를 적용했습니다.",
    ],
    process: [
      "방, 테이블, 사용자 UI를 독립 컴포넌트로 분리하고 각 컴포넌트가 담당하는 데이터와 화면 표시 책임을 구분",
      "방, 테이블, 사용자 데이터를 식별자 기준으로 관리하고 필요한 데이터를 사용하는 컴포넌트가 해당 상태만 구독하도록 Jotai 상태 구조 세분화",
      "WebSocket 이벤트 수신 시 전체 목록을 교체하지 않고 이벤트의 식별자를 기준으로 변경된 엔터티의 상태만 선택적으로 갱신하도록 처리 구조 개선",
      "보유 금액 변경은 해당 사용자, 사용자 이동은 해당 사용자와 이동 전후 테이블을 중심으로 처리하도록 이벤트별 상태 갱신 대상 분리",
      "100개 이상의 방 목록에 List Virtualization을 적용해 현재 화면과 인접 영역에 필요한 항목만 렌더링하도록 개선",
    ],
    outcome: [
      "일부 데이터 변경에도 전체 방 목록이 함께 갱신되던 구조를 개선해 실시간 이벤트와 관련 없는 방 및 테이블의 불필요한 재렌더링 감소",
      "100개 이상의 방이 존재하는 환경에서 동시에 렌더링하는 항목을 화면 표시 및 인접 영역으로 제한해 대규모 목록 렌더링 부담 감소",
      "화면 표시와 상태 처리 책임을 방, 테이블, 사용자 단위로 분리해 실시간 이벤트별 갱신 대상과 변경 영향 범위를 명확하게 관리할 수 있는 구조 마련",
    ],
  },
  {
    slug: "custom-rooms-and-social-features",
    title: "사용자 생성형 커스텀 방 및 실시간 소셜 기능 구축",
    summary: "사용자가 직접 방을 생성하고 관리할 수 있도록 확장하고, API와 WebSocket으로 소셜 기능의 상태를 실시간 동기화했습니다.",
    organization: "주식회사더블다운게임즈 (DoubleDownGamesInc.)",
    period: "2024. 06 — 2025. 05",
    categories: ["professional"],
    role: "커스텀 방 및 소셜 기능 프론트엔드 개발, WebSocket 이벤트 처리 구조 설계, API 응답과 실시간 상태 동기화",
    technologies: ["Next.js", "React", "TypeScript", "WebSocket", "Recoil", "SCSS"],
    tone: "sky",
    cardMockup: "social",
    featured: true,
    background: [
      "시스템이 자동 생성한 방에만 참여할 수 있던 서비스에 사용자가 직접 방을 생성하고 관리할 수 있는 커스텀 방 기능을 추가했습니다. 친구, 쪽지, 알림, 게임 초대, 선물 기능을 함께 개발하고 API 응답과 WebSocket 이벤트를 연결해 관련 상태가 실시간으로 화면에 반영되도록 구현했습니다.",
    ],
    process: [
      "금액, 최대 참여 인원, 비밀번호 등의 조건을 설정할 수 있는 커스텀 방 생성, 수정, 삭제 기능 구현",
      "친구, 쪽지, 알림, 게임 초대, 선물 기능의 화면 및 상태 처리 개발",
      "WebSocket 이벤트를 이벤트 코드와 세부 유형으로 분류하고 각 기능의 처리 영역으로 전달하도록 이벤트 분배 구조 설계",
      "친구 요청, 쪽지, 선물, 게임 초대 등 주요 실시간 이벤트의 상태 갱신 책임을 기능별로 분리",
      "API 응답과 WebSocket 이벤트를 연결해 친구 상태, 알림, 초대장, 보유 금액이 페이지 새로고침 없이 갱신되도록 상태 동기화 구현",
      "게임 초대장에 방 정보와 입장 조건을 연결해 별도의 방 검색 과정 없이 초대장에서 게임에 참여할 수 있는 사용자 흐름 구현",
      "기능별 데이터 형식과 이벤트 처리 규칙을 정리해 신규 실시간 이벤트 추가 시 기존 기능의 수정 범위 최소화",
    ],
    outcome: [
      "시스템 생성형 방에만 참여하던 서비스에서 사용자가 직접 방을 생성하고 다른 사용자를 초대할 수 있도록 서비스 기능 확장",
      "친구 요청, 초대 수신, 게임 입장, 쪽지, 선물 기능을 하나의 연속적인 사용자 흐름으로 연결",
      "친구 상태, 알림, 초대장, 보유 금액 등의 상태를 API와 WebSocket 이벤트로 동기화해 페이지 새로고침 없이 변경 사항을 확인할 수 있는 실시간 사용자 경험 구현",
      "이벤트 분류 및 전달 구조와 기능별 상태 처리 책임을 분리해 신규 실시간 기능 추가 시 기존 기능에 미치는 영향과 수정 범위 감소",
    ],
  },
  {
    slug: "translation-resource-automation",
    title: "10개 언어 번역 리소스 관리 자동화",
    summary: "소스 코드의 번역 키 추출부터 Google Sheets 동기화와 10개 언어 JSON 생성까지 반복 작업을 자동화했습니다.",
    organization: "주식회사더블다운게임즈 (DoubleDownGamesInc.)",
    period: "2024. 06 — 2025. 05",
    categories: ["professional"],
    role: "다국어 문구 관리 방식 표준화, 번역 키 자동 추출 및 동기화, 10개 언어 JSON 리소스 자동 생성 기능 개발",
    technologies: ["Next.js", "React", "TypeScript", "next-intl", "i18n-scanner", "Google Sheets"],
    tone: "plum",
    cardMockup: "translation",
    background: [
      "신규 기능과 화면에 문구가 추가될 때마다 개발자가 10개 언어의 JSON 번역 리소스를 개별 관리해야 하던 반복 작업을 자동화했습니다. 소스 코드의 번역 키 추출부터 Google Sheets 기반 번역 데이터 관리, 언어별 JSON 리소스 생성까지 하나의 번역 키 중심 프로세스로 연결했습니다.",
    ],
    process: [
      "화면 문구를 번역 키 기준으로 관리하도록 다국어 처리 규칙을 표준화하고 코드와 번역 리소스를 연결하는 관리 기준 통일",
      "i18n-scanner를 활용해 소스 코드에서 실제 사용 중인 번역 키를 자동 탐색 및 추출하도록 구성",
      "추출한 번역 키와 기존 번역 데이터를 Google Sheets에 동기화해 개발자와 번역 담당자가 동일한 데이터를 기준으로 작업하도록 프로세스 개선",
      "Google Sheets에 작성된 번역 데이터를 10개 언어별 JSON 리소스 파일로 일괄 변환하는 기능 구현",
      "번역 키 추출, 데이터 동기화, 번역 결과의 JSON 반영 과정을 연결해 언어별 파일을 개별 확인하고 수정하던 반복 작업 자동화",
    ],
    outcome: [
      "개발자가 10개 언어의 JSON 파일을 각각 관리하던 방식을 Google Sheets 기반 일괄 관리 및 리소스 자동 생성 방식으로 전환",
      "소스 코드에서 번역 키를 자동 추출해 번역 요청 대상 정리 과정의 반복 작업과 키 누락 가능성 감소",
      "동일한 번역 키 목록을 기준으로 언어별 JSON을 생성해 언어 리소스 간 키 구성의 불일치 가능성 감소",
      "신규 언어 추가 시 기존 번역 키 추출과 리소스 생성 흐름을 재사용할 수 있는 구조 마련",
    ],
  },
  {
    slug: "sddc-topology-visualization",
    title: "SDDC 논리 및 물리 구성도 리뉴얼과 상태 시각화 개선",
    summary: "장비 유형별 UI와 상태 표시 로직을 분리하고, 연결 관계와 운영 상태를 함께 확인할 수 있도록 구성도를 개선했습니다.",
    organization: "(주) 나임네트웍스",
    period: "2020. 11 — 2023. 12",
    categories: ["professional"],
    role: "논리 및 물리 구성도 UI 리뉴얼, 장비 유형별 컴포넌트 구조 개선, 운영 상태 시각화, 장비별 데이터 전달 구조 개선",
    technologies: ["Angular", "TypeScript", "HTML", "SCSS"],
    tone: "sky",
    cardMockup: "topology",
    featured: true,
    background: [
      "VM, Storage, Switch 등 다양한 인프라 장비와 연결 관계를 표시하는 SDDC 논리 및 물리 구성도를 리뉴얼했습니다. 기존에는 장비 유형별 렌더링 분기가 복잡해 신규 장비 추가 시 수정 범위가 크고, 다수의 장비가 표시되는 환경에서 장애 및 운영 상태를 빠르게 구분하기 어려운 문제가 있었습니다. 이를 개선하기 위해 장비 유형별 UI와 상태 표시 로직을 분리하고, 구성도에서 연결 관계와 운영 상태를 함께 확인할 수 있도록 화면 구조를 재설계했습니다.",
    ],
    process: [
      "VM, Storage, Switch 등 주요 장비 유형의 UI를 독립 컴포넌트로 분리하고 공통 렌더링 구조 재설계",
      "논리 구성도와 물리 구성도의 목적에 맞춰 장비 간 연결 관계와 화면 표시 데이터를 구분해 시각화",
      "전원 ON, 전원 OFF, 경고, 중요 알림 등 4종 운영 상태를 아이콘, 색상, 강조 UI로 구분해 상태 식별성 개선",
      "장비 유형별 렌더링 로직과 상태 표시 로직을 분리해 신규 장비 유형 및 운영 상태 추가 시 수정 대상이 명확하도록 구조 개선",
      "상태가 변경된 장비를 중심으로 UI가 갱신되도록 컴포넌트와 데이터 전달 구조 개선",
    ],
    outcome: [
      "장비 간 연결 관계와 운영 상태를 하나의 구성도에서 제공해 인프라 현황과 이상 상태가 발생한 장비를 함께 확인할 수 있도록 개선",
      "경고 및 중요 알림이 발생한 장비를 구성도에서 직접 구분할 수 있도록 변경해 상태 확인을 위해 목록과 상세 화면을 반복 탐색하던 과정 축소",
      "장비 유형별 UI와 상태 표현 책임을 분리해 신규 장비 및 운영 상태 추가 시 기존 코드의 변경 범위 감소",
      "상태 변경 대상 중심으로 화면을 갱신하도록 구조를 개선해 다수의 장비가 표시되는 환경에서 불필요한 화면 갱신 감소",
    ],
  },
  {
    slug: "sddc-infrastructure-monitoring",
    title: "SDDC 운영 대시보드 및 인프라 모니터링 화면 개발",
    summary: "인프라 사용량과 운영 상태를 대시보드에 통합하고, 검색·필터에서 개별 자원의 상세 조회까지 연결했습니다.",
    organization: "(주) 나임네트웍스",
    period: "2020. 11 — 2023. 12",
    categories: ["professional"],
    role: "Angular, TypeScript 기반 SDDC 운영 대시보드 및 모니터링 화면 개발, 인프라 데이터 가공 및 시각화, 검색 및 필터 기능 구현, 공통 UI 구성",
    technologies: ["Angular", "TypeScript", "HTML", "SCSS"],
    tone: "sand",
    background: [
      "SDDC 환경에서 운영되는 Server, VM, Storage 등 다양한 인프라 자원의 운영 현황과 사용량을 한 화면에서 확인할 수 있는 대시보드 및 상세 화면을 개발했습니다. 장비별로 분산되어 있던 CPU, Memory, Storage 사용량과 운영 상태, 장애 정보를 통합하고 검색, 필터, 상세 조회를 연결해 전체 현황에서 개별 자원까지 단계적으로 확인할 수 있도록 구성했습니다.",
    ],
    process: [
      "Server, VM, Storage 등 인프라 자원의 CPU, Memory, Storage 사용량과 운영 상태 데이터를 화면 목적에 맞게 가공해 차트와 테이블로 시각화",
      "전체 자원의 정상, 경고, 장애 등 운영 상태를 집계해 시스템 전반의 상태를 한 화면에서 확인할 수 있는 현황 UI 구현",
      "자원별 사용량과 운영 지표를 차트와 테이블 형태로 구성해 전체 현황과 개별 자원의 상세 정보를 단계적으로 확인할 수 있도록 화면 구조 설계",
      "장비 유형과 운영 상태에 따른 검색 및 필터 기능을 구현해 다수의 인프라 자원 중 필요한 장비를 선별할 수 있도록 개선",
      "대시보드의 요약 정보에서 개별 Server, VM, Storage 상세 정보로 이동할 수 있도록 화면 간 데이터 흐름과 사용자 동선 구성",
      "장애 및 이상 상태가 발생한 자원을 정상 자원과 시각적으로 구분하고 관련 운영 정보를 함께 제공하도록 UI 개선",
      "여러 모니터링 화면에서 반복되는 상태 표시, 검색 조건, 데이터 표현 UI를 공통화해 재사용 가능하도록 구성",
    ],
    outcome: [
      "여러 화면에 분산되어 있던 인프라 사용량과 운영 상태 정보를 대시보드에 통합해 전체 시스템 현황을 확인하는 과정 단순화",
      "CPU, Memory, Storage 사용량과 장비 운영 상태를 함께 시각화해 자원별 상태와 사용 현황을 한 화면에서 파악할 수 있도록 개선",
      "조건 검색과 상태별 필터를 통해 확인이 필요한 자원을 선별하고 상세 정보까지 이동할 수 있도록 구성해 이상 자원 확인을 위한 탐색 과정 축소",
      "반복되는 상태 표현과 데이터 표시 UI를 공통화해 신규 모니터링 화면에서도 재사용할 수 있는 구조 마련",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
