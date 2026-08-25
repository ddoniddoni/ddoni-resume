import type { Metadata } from "next";
import { ContactCta } from "@/components/layout/contact-cta";
import "@/styles/sections/profile.scss";
import "@/styles/ui/content-panel.scss";
import { SectionHeading } from "@/components/ui/section-heading";
import { career, careerSummary, profile } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: "4년 5개월 경력의 프론트엔드 개발자 박상돈의 소개와 작업 방향입니다.",
  openGraph: {
    title: "About",
    description: "4년 5개월 경력의 프론트엔드 개발자 박상돈의 소개와 작업 방향입니다.",
  },
};

export default function AboutPage() {
  return (
    <main id="main-content" className="page page--about">
      <header className="page-header">
        <p className="eyebrow">About</p>
        <h1 className="page-header__title">일하는 방식을 기록합니다.</h1>
        <p className="page-header__description">
          {careerSummary} 동안 프론트엔드 개발자로 화면과 사용자 경험을 구축해 왔습니다.
        </p>
      </header>

      <div className="about-layout">
        <p className="about-statement">&ldquo;{profile.intro}&rdquo;</p>
        <div className="about-copy">
          <p>
            이 포트폴리오는 작업을 단순히 모으는 공간보다, 어떤 맥락에서 무엇을
            만들었는지 설명하는 아카이브를 목표로 합니다.
          </p>
          <p>
            개인 프로필과 경력을 정리했으며, 교육과 기술 정보는 준비되는 대로
            추가할 예정입니다.
          </p>
        </div>
      </div>

      <section className="section about-section" aria-labelledby="profile-info-title">
        <div className="section-heading">
          <div className="section-heading__topline">
            <p className="eyebrow">Profile record</p>
          </div>
          <h2 id="profile-info-title" className="section-heading__title">
            프로필 기록
          </h2>
        </div>
        <div className="content-panel">
          <div className="content-panel__row">
            <p className="content-panel__label">Name</p>
            <div>
              <p className="content-panel__value">{profile.name}</p>
            </div>
          </div>
          <div className="content-panel__row">
            <p className="content-panel__label">Role</p>
            <div>
              <p className="content-panel__value">{profile.role}</p>
            </div>
          </div>
          <div className="content-panel__row">
            <p className="content-panel__label">Experience</p>
            <div>
              <p className="content-panel__value">{careerSummary}</p>
              <p className="content-panel__hint">회사, 역할, 기간과 주요 작업을 아래에 기록합니다.</p>
            </div>
          </div>
          <div className="content-panel__row">
            <p className="content-panel__label">Toolkit</p>
            <div>
              <p className="content-panel__value">기술 정보 준비 중</p>
              <p className="content-panel__hint">실제 프로젝트에서 사용한 도구만 추가합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-section" aria-labelledby="career-title">
        <SectionHeading
          eyebrow="Career"
          title="경력 기록"
          description={`${careerSummary} 동안 React, Next.js, TypeScript, Angular 기반의 프론트엔드 개발을 진행했습니다.`}
          id="career-title"
        />
        <ol className="career-list">
          {career.map((entry) => (
            <li className="career-entry" key={`${entry.company}-${entry.period}`}>
              <div className="career-entry__timeline">
                <p>{entry.period}</p>
                <p className="career-entry__duration">{entry.duration}</p>
              </div>
              <div className="career-entry__content">
                <div className="career-entry__heading">
                  <div>
                    <h3>{entry.company}</h3>
                    <p className="career-entry__team">{entry.team}</p>
                  </div>
                  <p className="career-entry__role">{entry.role}</p>
                </div>
                <ul className="career-entry__highlights">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <ContactCta />
    </main>
  );
}
