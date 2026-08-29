export type ProjectCategory = "personal" | "professional";
export type ProjectTone = "clay" | "sage" | "sky" | "plum" | "sand";

export type ProjectPreviewImage = {
  src: string;
  alt: string;
};

export type ProjectCardMockupKind = "social" | "translation" | "rack" | "topology";

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
      "기존 서비스 리뉴얼 프로젝트",
      "React · Next.js · TypeScript 기반 화면 및 사용자 기능 개발",
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
      "실시간 토너먼트 로비의 상태 구조와 렌더링 범위를 개선해 화면 성능 최적화",
      "커스텀 방 · 친구 · 쪽지 · 알림 · 게임 초대 · 선물 등 사용자 및 소셜 기능 신규 구축",
      "다국어 번역 리소스 관리 프로세스를 자동화해 수작업 시간을 약 50% 단축",
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
      "Rack 내 장비 배치 · 가동 상태 · 유휴 공간을 확인할 수 있는 실장도 시각화 기능 구축",
      "SDDC 논리 · 물리 구성도 리뉴얼 및 상태 시각화 개선",
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
    slug: "custom-rooms-and-social-features",
    title: "커스텀 방과 소셜 기능 구축",
    summary: "사용자 생성형 방과 5개 소셜 기능을 API·WebSocket 이벤트와 연결해 하나의 실시간 사용자 흐름으로 구현했습니다.",
    organization: "주식회사더블다운게임즈 (DoubleDownGamesInc.)",
    period: "2024. 06 — 2025. 05",
    categories: ["professional"],
    role: "커스텀 방 및 소셜 기능 개발 · WebSocket 이벤트 처리 구조 설계 · API와 실시간 상태 동기화",
    technologies: ["Next.js", "React", "TypeScript", "WebSocket", "Recoil", "SCSS"],
    tone: "sky",
    cardMockup: "social",
    featured: true,
    background: [
      "기존 서비스에서는 사용자가 시스템이 자동으로 생성한 방에만 참여할 수 있었고, 사용자 간 관계를 형성하거나 상호작용할 소셜 기능이 없었습니다.",
      "사용자 생성형 방과 친구·쪽지·알림·게임 초대·선물 기능을 도입하며 서로 다른 API 상태와 실시간 이벤트를 하나의 사용자 흐름으로 연결해야 했습니다.",
    ],
    process: [
      "금액, 최대 참여 인원, 비밀번호 조건을 설정하는 커스텀 방 생성·수정·삭제 기능 구현",
      "커스텀 방, 친구, 쪽지, 실시간 알림, 게임 초대, 선물 등 6개 핵심 기능군의 화면과 상태 처리 구축",
      "WebSocket 이벤트를 이벤트 코드와 세부 유형으로 분류하고 기능별 처리 영역에 전달하는 이벤트 처리 구조 구현",
      "친구 요청, 쪽지, 선물, 게임 초대 등 4개 주요 실시간 이벤트의 처리 로직과 상태 갱신 책임을 기능별로 분리",
      "API 요청 결과와 실시간 이벤트를 연결해 친구 상태, 알림, 초대장, 보유 금액이 새로고침 없이 갱신되도록 구현",
      "게임 초대장에 방 정보와 입장 조건을 연결해 별도 방 검색 없이 초대장에서 즉시 참여할 수 있도록 구성",
    ],
    outcome: [
      "시스템 생성형 방 중심 서비스를 사용자가 직접 방을 생성하고 관리하는 사용자 주도형 서비스로 확장",
      "커스텀 방과 5개 소셜 기능을 포함한 6개 핵심 기능군을 하나의 사용자 경험으로 연결",
      "친구 추가부터 초대 수신, 즉시 입장, 쪽지 및 선물 전송까지 분리된 기능을 연속적인 사용자 흐름으로 구현",
      "친구 상태, 알림, 초대장, 보유 금액 등 4개 주요 상태를 API와 WebSocket 이벤트로 연결해 새로고침 없는 실시간 사용자 경험 제공",
      "기능별 이벤트 처리 책임을 분리해 신규 실시간 이벤트 추가 시 다른 소셜 기능에 미치는 영향과 수정 범위 감소",
    ],
  },
  {
    slug: "translation-resource-automation",
    title: "10개 언어 번역 리소스 관리 자동화",
    summary: "번역 키를 중심으로 코드 스캔, Google Sheets 동기화, 다국어 JSON 생성을 연결했습니다.",
    organization: "주식회사더블다운게임즈 (DoubleDownGamesInc.)",
    period: "2024. 06 — 2025. 05",
    categories: ["professional"],
    role: "다국어 문구 관리 표준화 · 번역 키 자동 추출 및 동기화 · JSON 리소스 자동 생성",
    technologies: ["Next.js", "React", "TypeScript", "next-intl", "i18n-scanner", "Google Sheets"],
    tone: "plum",
    cardMockup: "translation",
    background: [
      "신규 화면과 기능에 문구가 추가될 때마다 10개 언어의 JSON 번역 리소스를 개별적으로 관리해야 했습니다.",
      "번역 키 정리, 파일 전달, 번역 작성, JSON 반영이 반복되며 키 누락과 언어별 데이터 불일치 가능성이 높았고, 기능 완료 후 번역 반영까지 시간이 길어졌습니다.",
    ],
    process: [
      "화면 문구를 직접 작성하는 방식에서 번역 키 기준 관리 방식으로 다국어 처리 규칙을 표준화",
      "i18n-scanner로 소스 코드에서 사용 중인 번역 키를 자동으로 탐색하고 추출하는 기능 구성",
      "추출한 키와 기존 번역 데이터를 Google Sheets에 동기화해 개발자와 번역 담당자가 같은 데이터를 기준으로 작업하도록 개선",
      "Google Sheets의 번역 데이터를 10개 언어별 JSON 리소스 파일로 일괄 변환하는 기능 구현",
      "코드 스캔, 번역 키 정리, 번역 요청, 번역 작성, JSON 반영을 하나의 번역 키 중심 프로세스로 연결",
    ],
    outcome: [
      "10개 언어 JSON 파일을 개발자가 각각 확인·수정하던 방식을 Google Sheets 기반 일괄 관리 방식으로 전환",
      "번역 키 정리부터 번역 요청, 파일 전달, JSON 반영까지의 전체 작업 시간을 기존 수동 방식 대비 약 50% 단축",
      "신규 번역 키를 소스 코드 기준으로 자동 추출해 번역 요청에서 발생하던 키 누락 가능성 감소",
      "모든 언어 리소스를 같은 번역 키 목록으로 생성해 언어별 JSON 데이터 불일치 가능성 감소",
      "신규 언어가 추가돼도 기존 번역 키 추출과 리소스 생성 프로세스를 재사용할 수 있는 확장 구조 구축",
    ],
  },
  {
    slug: "sddc-rack-visualization",
    title: "SDDC Rack 실장도와 장비 운영 상태 시각화",
    summary: "Rack 규격과 장비 데이터를 기준으로 위치, 점유 공간, 전원 상태를 한 화면에서 파악할 수 있도록 시각화했습니다.",
    organization: "(주) 나임네트웍스",
    period: "2020. 11 — 2023. 12",
    categories: ["professional"],
    role: "Rack 실장도 화면 개발 · Unit 단위 위치 계산 · 유휴 공간 산출 · 장비 상태 시각화",
    technologies: ["Angular", "TypeScript", "HTML", "SCSS"],
    tone: "sand",
    cardMockup: "rack",
    featured: true,
    background: [
      "Angular·TypeScript 기반 SDDC 솔루션에서 고객사 서버실의 Rack과 수백 대 장비 정보를 목록으로만 확인하고 있었습니다.",
      "운영자가 장비의 설치 위치, 점유 공간, 전원 상태, 미사용 공간, 추가 설치 가능 공간을 한 화면에서 확인할 데이터 기반 Rack 실장도 기능이 필요했습니다.",
    ],
    process: [
      "Rack별 총 높이를 기준으로 42U를 포함한 다양한 Rack 규격의 실장 영역을 1U 단위로 동적 생성",
      "장비별 시작 Unit과 점유 Unit을 기준으로 Rack 화면 내 위치와 높이를 계산하는 배치 로직 구현",
      "1U 장비부터 8U 이상 대형 장비까지 실제 설치 위치와 유사한 비율로 시각화",
      "수백 대 장비의 점유 구간을 Rack 전체 Unit과 비교해 사용 영역과 미사용 영역을 자동 산출",
      "연속으로 비어 있는 Unit 구간을 계산해 Rack별 최대 연속 유휴 공간 제공",
      "장비 모델과 전원 ON/OFF 상태를 실장도에 반영하고, 위치 계산과 화면 표현 로직을 분리해 재사용",
    ],
    outcome: [
      "42U를 포함한 다양한 Rack 규격과 1U~8U 이상 장비 크기를 데이터 기반으로 시각화",
      "고객사별 서버실의 수백 대 장비 위치, 전원 상태, 점유 공간을 한 화면에서 확인할 운영 화면 제공",
      "사용·미사용 영역과 최대 연속 유휴 Unit을 자동 산출해 장비 증설 가능 공간을 별도 계산 없이 파악하도록 개선",
      "장비 위치 계산과 화면 표현 책임을 분리해 장비 데이터 및 Rack 규격 변경에 따른 수정 범위 감소",
      "목록과 상세 정보를 반복 확인하던 방식에서 벗어나 장비 배치와 운영 상태를 실장도 중심으로 확인하도록 운영 편의성 향상",
    ],
  },
  {
    slug: "sddc-topology-visualization",
    title: "SDDC 논리·물리 구성도 리뉴얼",
    summary: "장비 유형별 컴포넌트와 상태 표시 책임을 분리하고, 변경 장비 중심으로 갱신되는 구성도를 만들었습니다.",
    organization: "(주) 나임네트웍스",
    period: "2020. 11 — 2023. 12",
    categories: ["professional"],
    role: "구성도 UI 리뉴얼 · 장비 유형별 컴포넌트 구조 개선 · 운영 상태 시각화",
    technologies: ["Angular", "TypeScript", "HTML", "SCSS"],
    tone: "sky",
    cardMockup: "topology",
    background: [
      "기존 SDDC 논리·물리 구성도는 VM, Storage, Switch 등 다양한 장비와 연결 관계를 제공했지만, 장비 유형별 렌더링 분기가 복잡해 신규 장비 추가 시 수정 범위가 컸습니다.",
      "다수 장비가 표시되는 환경에서 전원 OFF, 경고, 중요 알림 장비를 즉시 구분하기 어려워 운영자가 목록과 상세 화면을 반복 탐색해야 했습니다.",
    ],
    process: [
      "VM, Storage, Switch 등 주요 장비 유형별 UI를 독립 컴포넌트로 분리하고 공통 렌더링 구조 개선",
      "논리 구성도와 물리 구성도에 따라 장비 간 연결 관계와 화면 표시 정보를 구분해 시각화",
      "전원 ON, 전원 OFF, 경고, 중요 알림 등 4종 운영 상태에 따른 아이콘, 색상, 강조 UI 구현",
      "장비 유형에 따른 화면 분기와 상태 표시 로직을 분리해 신규 장비 유형과 알림 상태를 추가하기 쉬운 구조로 개선",
      "전체 구성도를 다시 갱신하지 않고 상태가 변경된 장비 중심으로 UI가 갱신되도록 컴포넌트와 데이터 전달 구조 개선",
    ],
    outcome: [
      "전원 OFF, 경고, 중요 알림 장비를 구성도에서 즉시 구분할 수 있도록 운영 가시성 향상",
      "목록과 상세 화면을 반복 탐색하던 과정을 줄여 장애 장비 식별 및 초기 대응 시간을 기존 대비 약 30% 단축",
      "장비 유형별 컴포넌트와 상태 표시 책임을 분리해 신규 장비 또는 운영 상태 추가 시 기존 코드의 수정 범위 감소",
      "상태 변경 대상 중심으로 화면을 갱신해 다수 장비가 표시되는 구성도의 불필요한 렌더링 감소",
      "장비 간 연결 관계와 운영 상태를 하나의 구성도에서 제공해 인프라 현황 파악과 장애 대응 편의성 개선",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
