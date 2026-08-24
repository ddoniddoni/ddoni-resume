import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactCta } from "@/components/layout/contact-cta";
import {
  getProjectBySlug,
  projectCategoryLabels,
  projects,
  siteConfig,
} from "@/content/site";
import "@/components/projects/project-card.scss";
import "./page.scss";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "프로젝트를 찾을 수 없습니다",
    };
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.summary,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main id="main-content" className="page">
      <Link className="detail-back" href="/projects">
        <span aria-hidden="true">←</span> All projects
      </Link>

      <header className="project-detail__hero">
        <div>
          <p className="eyebrow">Case study / {project.period}</p>
          <h1 className="project-detail__title">{project.title}</h1>
          <p className="project-detail__summary">{project.summary}</p>
        </div>
        <div
          aria-hidden="true"
          className={`project-card__visual project-detail__visual tone-${project.tone}`}
        >
          <div className="project-card__mockup project-detail__mockup">
            <div className="project-card__mockup-bar">
              <span />
              <span />
              <span />
            </div>
            <p>{project.title}</p>
            <div className="project-card__mockup-grid">
              <span />
              <span />
              <span />
            </div>
          </div>
          <span className="project-detail__badge">Detail</span>
        </div>
      </header>

      <section className="project-detail__facts" aria-labelledby="project-facts-title">
        <h2 id="project-facts-title" className="eyebrow">
          Project facts
        </h2>
        <dl className="detail-facts">
          <div>
            <dt>Organization</dt>
            <dd>{project.organization}</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Period</dt>
            <dd>{project.period}</dd>
          </div>
          <div>
            <dt>Category</dt>
            <dd>{project.categories.map((item) => projectCategoryLabels[item]).join(" · ")}</dd>
          </div>
        </dl>
      </section>

      <article className="detail-content">
        <section aria-labelledby="background-title">
          <p className="eyebrow">01 / Background</p>
          <h2 id="background-title">시작점</h2>
          {project.background.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
        <section aria-labelledby="process-title">
          <p className="eyebrow">02 / Process</p>
          <h2 id="process-title">작업 과정</h2>
          <ul>
            {project.process.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section aria-labelledby="tools-title">
          <p className="eyebrow">03 / Toolkit</p>
          <h2 id="tools-title">사용 기술</h2>
          <ul className="detail-tags">
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </section>
        <section aria-labelledby="outcome-title">
          <p className="eyebrow">04 / Outcome</p>
          <h2 id="outcome-title">결과</h2>
          <ul>
            {project.outcome.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </article>

      <ContactCta />
    </main>
  );
}
