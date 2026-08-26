# 박상돈 포트폴리오

프론트엔드 개발자 박상돈의 경력과 프로젝트를 소개하는 Next.js 포트폴리오입니다.

## 기술 구성

- Next.js 16 · React 19 · TypeScript
- Sass · Tailwind CSS
- ESLint · Stylelint

## 로컬 실행

Node.js 22 환경에서 실행합니다.

```bash
npm ci
npm run dev
```

브라우저에서 `http://localhost:3000`을 열어 확인합니다.

## 검증

```bash
npm run lint
npm run lint:styles
npm run build
```

## Vercel 배포

이 저장소는 Vercel이 Next.js 프로젝트로 자동 감지하도록 구성되어 있어 `vercel.json`이 필요하지 않습니다.

1. Vercel에서 GitHub 저장소 `ddoniddoni/ddoni-resume`를 Import합니다.
2. Framework Preset은 `Next.js`, Root Directory는 `./`로 둡니다.
3. Install Command는 `npm ci`, Build Command는 `npm run build`를 사용합니다.
4. Production Branch는 `main`으로 지정합니다. 그 외 브랜치는 Preview Deployment로 확인할 수 있습니다.

현재 별도의 환경 변수는 필요하지 않습니다. 배포 환경은 `package.json`의 Node.js 22 설정을 사용합니다.
