import Link from "next/link";
import { ContactCta } from "@/components/layout/contact-cta";
import { ProjectCard } from "@/components/projects/project-card";
import { CareerCarousel } from "@/components/ui/career-carousel";
import { ExpertiseAccordion } from "@/components/ui/expertise-accordion";
import { HandWaveIcon, SparkleIcon } from "@/components/ui/icons";
import { ScrollRevealText } from "@/components/ui/scroll-reveal-text";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillsTicker } from "@/components/ui/skills-ticker";
import {
  aboutPreview,
  career,
  expertiseAreas,
  heroLinks,
  profile,
  projects,
  skillsTicker,
} from "@/content/site";
import "./page.scss";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <main id="main-content" className="page page--home">
      <section className="hero" aria-labelledby="home-title">
        <p className="hero__greeting">
          <span aria-hidden="true" className="hero__greeting-hand">
            <HandWaveIcon />
          </span>
          안녕하세요, {profile.name}입니다.
        </p>
        <h1 id="home-title" className="display-title hero__title">
          <em>사용자</em>를 위한 <em>경험</em>을 구현합니다.
        </h1>
        <div className="hero__lower">
          <nav aria-label="빠른 이동" className="hero__quick-links">
            {heroLinks.map((link) =>
              link.external ? (
                <a
                  className="hero__quick-link"
                  href={link.href}
                  key={link.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  {link.label} <span aria-hidden="true">↗</span>
                </a>
              ) : link.href.startsWith("mailto:") ? (
                <a className="hero__quick-link" href={link.href} key={link.label}>
                  {link.label} <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <Link className="hero__quick-link" href={link.href} key={link.label}>
                  {link.label} <span aria-hidden="true">↗</span>
                </Link>
              ),
            )}
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

      <SkillsTicker skills={skillsTicker} />

      <section className="about-preview" aria-labelledby="about-preview-title">
        <h2 className="visually-hidden" id="about-preview-title">
          {aboutPreview.eyebrow}
        </h2>
        <p aria-hidden="true" className="about-preview__eyebrow">
          <SparkleIcon />
          <span>{aboutPreview.eyebrow}</span>
        </p>
        <ScrollRevealText className="about-preview__statement" text={aboutPreview.statement} />
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

      <section className="section section--expertise" aria-labelledby="expertise-title">
        <SectionHeading
          eyebrow="Areas of expertise"
          title="집중하는 개발 영역"
          description="실제 서비스에서 반복해 다뤄 온 문제와 화면 구현의 기준입니다."
          id="expertise-title"
        />
        <ExpertiseAccordion areas={expertiseAreas} />
      </section>

      <section className="section" aria-labelledby="career-highlights-title">
        <SectionHeading
          eyebrow="Career highlights"
          title="화면으로 남긴 경력"
          description="프로젝트와 조직마다 달랐던 문제를 프론트엔드 구현으로 풀어 온 기록입니다."
          id="career-highlights-title"
        />
        <CareerCarousel entries={career} />
      </section>

      <ContactCta />
    </main>
  );
}
