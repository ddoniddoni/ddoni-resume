<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# ddoniddoni-resume 프로젝트 규칙

## 목표와 시각적 방향

개인의 이력과 작업물을 소개하는 반응형 포트폴리오 사이트다. Devraj Chatribin의 Projects 페이지에서 보이는 절제된 어두운 배경, 대담한 에디토리얼 제목, 명확한 프로젝트 필터, 강한 연락 CTA의 감성을 참고한다. 다만 그 사이트의 코드·문구·이미지·로고·고유 레이아웃을 복제하지 않는다. 실제 개인 정보와 작업물에 맞는 독자적 표현을 사용한다.

## 기술 기준

- npm만 사용하고 `package-lock.json`을 유지한다. 다른 lockfile은 만들지 않는다.
- TypeScript, Tailwind CSS, ESLint, `src/`, App Router, `@/*` alias를 유지한다. 새 Pages Router는 만들지 않는다.
- Server Component를 기본으로 하고, 상태·브라우저 API·이벤트 핸들러가 필요한 작은 경계에서만 `'use client'`를 사용한다.
- 내부 링크는 `next/link`, 이미지는 `next/image`, 폰트는 `next/font`를 우선한다.
- 새 의존성 전에는 내장 브라우저·React·Next.js 기능과 기존 의존성을 확인한다.

## 구조와 콘텐츠

- 반복되는 프로필, 경력, 프로젝트, 소셜 링크 데이터는 `src/content/`에서 타입과 함께 관리하고 컴포넌트에 중복 작성하지 않는다.
- 공통 UI는 `src/components/`로 분리하되, 한 번뿐인 작은 마크업을 과도하게 추상화하지 않는다.
- 목표 구조는 `src/app/`의 Home, About, Projects, Project detail(`[slug]`), Contact와 `sitemap.ts`, `robots.ts`다.
- 실제 이력·수치·성과·연락처가 제공되지 않았다면 지어내지 않는다. 짧고 명확한 placeholder로 표시한다.
- 프로젝트 상세의 존재하지 않는 slug는 `notFound()`로 처리한다.

## 디자인, 접근성, 성능

- 모바일 우선으로 구현하며 320px부터 가로 스크롤과 잘린 클릭 영역 없이 동작해야 한다. 넓은 화면에는 콘텐츠 최대 폭을 둔다.
- 개인 브랜드에 맞춘 하나의 색상·타이포그래피·간격 체계를 사용한다. 높은 대비의 본문과 절제된 포인트 색을 기본으로 하되, 색만으로 상태를 전달하지 않는다.
- `header`, `nav`, `main`, `footer` 랜드마크와 논리적인 heading 순서를 사용한다. 키보드 포커스는 항상 보여야 하며, 버튼은 동작에만 링크는 이동에만 쓴다.
- 프로젝트 필터는 키보드로도 조작 가능하고 선택 상태가 명확해야 한다. `prefers-reduced-motion`을 존중한다.
- 프로젝트 이미지는 일관된 비율로 렌더링해 레이아웃 이동을 막는다. 첫 화면의 핵심 이미지에만 신중히 `priority`를 지정한다.
- 페이지별 고유 metadata, Open Graph 정보, `sitemap.ts`, `robots.ts`를 유지한다. 비밀 값이나 비공개 연락처를 추적하지 않는다.

## 검증과 변경 관리

- 시각 변경 후 홈, 프로젝트 목록/필터, 상세 페이지, 연락 링크를 모바일과 데스크톱 폭에서 확인한다.
- 완료를 보고하기 전에 `npm run lint`와 `npm run build`를 실행한다. 추가한 테스트도 함께 실행하고 실패를 숨기지 않는다.
- 기존 사용자 변경을 보존한다. 범위 밖 리팩터링·의존성 일괄 업데이트·포맷팅 전면 변경을 섞지 않는다.
- Git 초기화, 브랜치 생성/전환, 커밋, 푸시, PR 생성, 배포는 사용자의 명시적 요청이 있을 때만 한다. 저장소가 초기화된 경우에는 `develop`에서 `feature/*`, `fix/*`, `docs/*`, `refactor/*`, `test/*`, `chore/*` 중 하나의 짧은 작업 브랜치를 사용하며 Conventional Commit을 따른다.
