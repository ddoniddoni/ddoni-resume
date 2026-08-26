import type { Metadata } from "next";
import Image from "next/image";
import { ContactCta } from "@/components/layout/contact-cta";
import { SkillsTicker } from "@/components/ui/skills-ticker";
import { career, careerSummary, expertiseAreas, skillsTicker } from "@/content/site";
import "@/styles/sections/profile.scss";

export const metadata: Metadata = {
  title: "소개",
  description: "4년 5개월 경력의 프론트엔드 개발자 박상돈의 소개와 작업 방향입니다.",
  openGraph: {
    title: "소개",
    description: "4년 5개월 경력의 프론트엔드 개발자 박상돈의 소개와 작업 방향입니다.",
  },
};

export default function AboutPage() {
  return (
    <main id="main-content" className="page page--about">
      <section aria-labelledby="about-title" className="about-hero">
        <aside aria-label="박상돈 프로필 사진" className="about-hero__profile">
          <div className="about-hero__photo-frame">
            <Image
              alt="박상돈 프로필 사진"
              className="about-hero__photo"
              fill
              preload
              sizes="(max-width: 639px) calc(100vw - 64px), (max-width: 1023px) 40vw, 440px"
              src="/profile.jpg"
            />
          </div>
        </aside>

        <div className="about-hero__content">
          <p className="eyebrow">소개</p>
          <h1 id="about-title">
            <span>사용자 경험</span>을 기술로 구현하는 프론트엔드 개발자입니다.
          </h1>
          <p className="about-hero__description">
            단순히 화면을 구현하는 것을 넘어, 사용자가 더 편리하고 자연스럽게 서비스를
            이용할 수 있는 방법을 고민합니다. 좋은 사용자 경험과 안정적인 개발 사이의
            균형을 중요하게 생각합니다.
          </p>
          <a className="button button--outline about-hero__cta" href="#career-history">
            경력 기록 보기 <span aria-hidden="true">↘</span>
          </a>
        </div>
      </section>

      <SkillsTicker skills={skillsTicker} />

      <section aria-labelledby="career-history-title" className="about-work-history" id="career-history">
        <header className="about-section-heading">
          <p className="eyebrow">경력</p>
          <h2 id="career-history-title">경력 기록</h2>
          <p>
            {careerSummary} 동안 React, Next.js, TypeScript, Angular 기반의 프론트엔드
            개발을 진행했습니다.
          </p>
        </header>

        <ol className="about-career-list">
          {career.map((entry, index) => (
            <li key={`${entry.company}-${entry.period}`}>
              <details className="about-career-entry" open>
                <summary>
                  <span aria-hidden="true" className="about-career-entry__index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="about-career-entry__summary-copy">
                    <span className="about-career-entry__company">{entry.company}</span>
                    <span className="about-career-entry__team">{entry.team}</span>
                  </span>
                  <span className="about-career-entry__period">
                    <span>{entry.period}</span>
                    <span aria-hidden="true" className="about-career-entry__indicator">
                      ↘
                    </span>
                  </span>
                </summary>
                <div className="about-career-entry__details">
                  <p className="about-career-entry__role">{entry.role}</p>
                  <ul>
                    {entry.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </details>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="work-principles-title" className="about-work-principles">
        <header className="about-section-heading">
          <p className="eyebrow">작업 방식</p>
          <h2 id="work-principles-title">작업 기준</h2>
          <p>
            실제 서비스에서 반복해 다뤄 온 문제를 기준으로 화면의 구조와 사용자 흐름을
            설계합니다.
          </p>
        </header>

        <div className="about-principles">
          {expertiseAreas.map((area, index) => (
            <article className="about-principles__item" key={area.id}>
              <span aria-hidden="true" className="about-principles__index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
