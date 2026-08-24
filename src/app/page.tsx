import Link from "next/link";
import { ContactCta } from "@/components/layout/contact-cta";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile, projects } from "@/content/site";
import "./page.scss";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <main id="main-content" className="page page--home">
      <section className="hero" aria-labelledby="home-title">
        <p className="hero__greeting">
          <span aria-hidden="true" className="hero__greeting-mark">
            ↳
          </span>
          안녕하세요, {profile.name}입니다.
        </p>
        <h1 id="home-title" className="display-title hero__title">
          상태가 바뀌는
          <br />
          <em>화면을 더 빠르게</em>
          <br />
          만듭니다.
        </h1>
        <div className="hero__lower">
          <nav aria-label="빠른 이동" className="hero__quick-links">
            <Link className="hero__quick-link" href="/about">
              경력 <span aria-hidden="true">↗</span>
            </Link>
            <Link className="hero__quick-link" href="/projects">
              프로젝트 <span aria-hidden="true">↗</span>
            </Link>
            <a className="hero__quick-link" href={`mailto:${profile.email}`}>
              이메일 <span aria-hidden="true">↗</span>
            </a>
          </nav>
          <div className="hero__aside">
            <p>
              {profile.intro} React, Next.js, TypeScript를 기반으로 실시간 서비스와
              사용자 기능을 구현합니다.
            </p>
            <Link className="button button--outline hero__cta" href="/about">
              경력 자세히 보기 <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="selected-work-title">
        <SectionHeading
          eyebrow="Selected work"
          title="경험으로 쌓은 프로젝트"
          description="실시간 서비스, 사용자 기능, 다국어 자동화, 인프라 운영 시각화까지 문제의 맥락과 구현 과정을 기록합니다."
          id="selected-work-title"
        />
        <div className="work-grid work-grid--featured">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index + 1} />
          ))}
        </div>
        <div className="section-action">
          <Link className="button button--outline" href="/projects">
            모든 프로젝트 보기 <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="section section--ledger" aria-labelledby="archive-title">
        <SectionHeading
          eyebrow="Archive logic"
          title="한 작업, 세 가지 기록"
          description="프로젝트 상세 페이지는 결과를 나열하는 대신 작업을 이해하기 위한 흐름을 기록합니다."
          id="archive-title"
        />
        <ol className="ledger-list">
          <li>
            <span className="ledger-list__number">01</span>
            <div>
              <h3>배경</h3>
              <p>무엇을 해결해야 했는지와 시작점</p>
            </div>
          </li>
          <li>
            <span className="ledger-list__number">02</span>
            <div>
              <h3>과정</h3>
              <p>역할, 선택과 구현의 흔적</p>
            </div>
          </li>
          <li>
            <span className="ledger-list__number">03</span>
            <div>
              <h3>결과</h3>
              <p>검증된 변화와 다음 개선점</p>
            </div>
          </li>
        </ol>
      </section>

      <ContactCta />
    </main>
  );
}
