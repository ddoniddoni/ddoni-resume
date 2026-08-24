export type ProjectCategory = "development" | "design";
export type ProjectTone = "clay" | "sage" | "sky" | "plum" | "sand";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  organization: string;
  period: string;
  categories: ProjectCategory[];
  role: string;
  technologies: string[];
  tone: ProjectTone;
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

export type CareerEntry = {
  company: string;
  team: string;
  period: string;
  duration: string;
  role: string;
  highlights: string[];
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

export const careerSummary = "총 4년 5개월";

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
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

export const projectCategoryLabels: Record<ProjectCategory, string> = {
  development: "Development",
  design: "Design",
};

export const projects: Project[] = [
  {
    slug: "service-renewal-browser-validation",
    title: "서비스 리뉴얼과 브라우저 기반 기능 검증",
    summary: "기존 비즈니스 로직을 유지하며 신규 화면과 상태 흐름을 연결하고, 사용자 시나리오 기반 검증 과정을 구축했습니다.",
    organization: "주식회사더블다운게임즈 (DoubleDownGamesInc.)",
    period: "2026. 01 — 2026. 03",
    categories: ["development"],
    role: "리뉴얼 화면 개발 · 컴포넌트 및 상태 구조 재구성 · 브라우저 기반 기능 검증",
    technologies: ["React", "Next.js", "TypeScript", "agent-browser"],
    tone: "clay",
    featured: true,
    background: [
      "기존 서비스의 화면 구조와 사용자 흐름을 신규 정책 및 UI에 맞게 개편하는 리뉴얼 프로젝트를 진행했습니다.",
      "기존 비즈니스 로직을 유지하면서 신규 화면과 상태 흐름을 연결하고, 화면 이동·사용자 입력·상태 변경에서 발생할 수 있는 오류를 사전에 검증해야 했습니다.",
    ],
    process: [
      "기존 화면의 컴포넌트 의존성과 사용자 흐름을 분석하고, 리뉴얼 정책에 맞춰 기능·도메인 기준으로 컴포넌트 구조를 재구성",
      "기존 비즈니스 로직과 신규 UI의 상태 동기화 방식을 검토하고, 변경 요구사항에 맞춰 데이터 변환 및 상태 처리 로직을 개선",
      "화면 이동, 사용자 입력, 상태 변경을 3개 검증 범주로 나누고 기능별 테스트 시나리오와 기대 결과를 정의",
      "agent-browser 기반 브라우저 테스트로 실제 사용자 흐름의 화면 전환, 입력 처리, 상태 동기화 오류를 검증",
      "테스트에서 발견한 이슈를 수정한 뒤 같은 시나리오를 반복 실행해 수정 결과와 회귀 여부를 재검증",
    ],
    outcome: [
      "기존 비즈니스 로직을 유지하면서 신규 리뉴얼 화면과 상태 흐름을 안정적으로 연결",
      "화면 단위 확인에서 사용자 시나리오 기반 검증으로 전환해 기능 간 연결 오류를 검수 단계에서 조기 발견",
      "이슈 수정 후 같은 시나리오를 반복 검증할 수 있는 브라우저 기반 기능 검증 프로세스 구축",
      "화면 구조와 데이터 처리 책임을 기능 단위로 분리해 후속 기능 변경의 수정 범위와 회귀 위험 감소",
    ],
  },
  {
    slug: "realtime-tournament-lobby-optimization",
    title: "실시간 토너먼트 로비 렌더링 최적화",
    summary: "WebSocket 이벤트와 대규모 목록 환경에서 상태 구독과 렌더링 범위를 재설계했습니다.",
    organization: "주식회사더블다운게임즈 (DoubleDownGamesInc.)",
    period: "2024. 06 — 2025. 05",
    categories: ["development"],
    role: "화면 및 상태 구조 재설계 · WebSocket 이벤트 처리 · 가상화 적용",
    technologies: ["Next.js", "React", "TypeScript", "WebSocket", "Jotai", "List Virtualization"],
    tone: "sage",
    featured: true,
    background: [
      "100개 이상의 방이 표시되는 토너먼트 로비에서 방별 참여 인원, 사용자 이동, 테이블 배치, 보유 금액이 WebSocket을 통해 실시간으로 변경됐습니다.",
      "일부 데이터만 바뀌어도 전체 방 목록과 관련 없는 화면 영역까지 함께 갱신됐고, 방 목록 증가에 따라 초기 화면 생성 시간과 스크롤 부하가 커졌습니다.",
    ],
    process: [
      "방·테이블·사용자 UI를 역할별 컴포넌트로 분리하고 담당 데이터만 렌더링하도록 화면 구조를 재설계",
      "방·테이블·사용자 데이터를 식별자 기준으로 분리하고, 각 화면 영역이 필요한 Jotai 상태만 참조하도록 상태 구독 범위를 세분화",
      "WebSocket 이벤트 수신 시 전체 목록을 교체하지 않고 식별자 기준으로 변경된 엔터티만 선택 갱신",
      "보유 금액 변경 때는 해당 사용자 컴포넌트 1개만, 사용자 이동 때는 사용자와 이동 전·후 테이블을 포함한 최대 3개 영역만 갱신",
      "100개 이상 방 목록에 가상화를 적용해 현재 화면과 인접 영역 항목만 렌더링",
    ],
    outcome: [
      "보유 금액 및 사용자 이동 이벤트의 화면 갱신 범위를 전체 방 목록에서 1~3개 관련 영역으로 축소",
      "빈번한 WebSocket 이벤트에서도 상위 화면과 인접 방·테이블의 불필요한 재렌더링 감소",
      "100개 이상 방 목록에서 화면 노출 항목 중심으로 렌더링해 초기 화면 생성과 스크롤 성능 개선",
      "UI와 상태 처리 책임을 방·테이블·사용자 단위로 분리해 실시간 기능 추가 및 유지보수의 수정 범위 감소",
    ],
  },
  {
    slug: "custom-rooms-and-social-features",
    title: "커스텀 방과 소셜 기능 구축",
    summary: "사용자 생성형 방과 5개 소셜 기능을 API·WebSocket 이벤트와 연결해 하나의 실시간 사용자 흐름으로 구현했습니다.",
    organization: "주식회사더블다운게임즈 (DoubleDownGamesInc.)",
    period: "2024. 06 — 2025. 05",
    categories: ["development"],
    role: "커스텀 방 및 소셜 기능 개발 · WebSocket 이벤트 처리 구조 설계 · API와 실시간 상태 동기화",
    technologies: ["Next.js", "React", "TypeScript", "WebSocket", "Recoil", "SCSS"],
    tone: "sky",
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
    categories: ["development"],
    role: "다국어 문구 관리 표준화 · 번역 키 자동 추출 및 동기화 · JSON 리소스 자동 생성",
    technologies: ["Next.js", "React", "TypeScript", "next-intl", "i18n-scanner", "Google Sheets"],
    tone: "plum",
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
    categories: ["development"],
    role: "Rack 실장도 화면 개발 · Unit 단위 위치 계산 · 유휴 공간 산출 · 장비 상태 시각화",
    technologies: ["Angular", "TypeScript", "HTML", "SCSS"],
    tone: "sand",
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
    categories: ["development"],
    role: "구성도 UI 리뉴얼 · 장비 유형별 컴포넌트 구조 개선 · 운영 상태 시각화",
    technologies: ["Angular", "TypeScript", "HTML", "SCSS"],
    tone: "sky",
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
