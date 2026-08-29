import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactCta } from "@/components/layout/contact-cta";
import "@/styles/projects/project-detail.scss";
import { ProjectToc, type ProjectTocItem } from "@/components/projects/project-toc";
import {
  getProjectBySlug,
  projectCategoryLabels,
  projects,
  siteConfig,
} from "@/content/site";

const projectTocItems: ProjectTocItem[] = [
  { id: "overview", label: "프로젝트 소개" },
  { id: "features", label: "주요 기능" },
  { id: "technologies", label: "사용 기술" },
  { id: "process", label: "구현 과정" },
  { id: "outcome", label: "결과" },
];

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

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const previousProject = projects[projectIndex - 1];
  const nextProject = projects[projectIndex + 1];
  const technologyDetails =
    project.technologyDetails ?? project.technologies.map((name) => ({ name, description: undefined }));
  const featuredTechnologies = project.technologies.slice(0, 3);
  const remainingTechnologyCount = project.technologies.length - featuredTechnologies.length;

  return (
    <main id="main-content" className="page project-detail">
      <div className="project-detail__frame">
        <div className="project-detail__breadcrumb-row">
          <nav aria-label="경로" className="project-detail__breadcrumb">
            <Link href="/">홈</Link>
            <span aria-hidden="true">›</span>
            <Link href="/projects">프로젝트</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">{project.title}</span>
          </nav>
          <time className="project-detail__period">{project.period}</time>
        </div>

        <header className="project-detail__hero">
          <div className={`project-detail__media project-detail__media--${project.tone}`}>
            {project.previewImage ? (
              <Image
                alt={project.previewImage.alt}
                className="project-detail__image"
                fill
                preload
                sizes="(min-width: 1024px) 960px, (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
                src={project.previewImage.src}
              />
            ) : (
              <div className="project-detail__mockup" aria-hidden="true">
                <div className="project-detail__mockup-bar">
                  <span />
                  <span />
                  <span />
                </div>
                <p>{project.title}</p>
                <div className="project-detail__mockup-grid">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
          </div>

          <div className="project-detail__headline">
            <h1>{project.title}</h1>
            {project.projectUrl && (
              <a className="project-detail__action" href={project.projectUrl} rel="noreferrer" target="_blank">
                프로젝트 보기 <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>

          <div className="project-detail__brief">
            <p>{project.summary}</p>
            <dl>
              <div>
                <dt>역할</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>소속</dt>
                <dd>{project.organization}</dd>
              </div>
              <div>
                <dt>구분</dt>
                <dd>{project.categories.map((item) => projectCategoryLabels[item]).join(" · ")}</dd>
              </div>
            </dl>
          </div>

          <div className="project-detail__technology-summary" aria-label="주요 사용 기술">
            {featuredTechnologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
            {remainingTechnologyCount > 0 && <span>+{remainingTechnologyCount}</span>}
          </div>
        </header>

        <div className="project-detail__content-grid">
          <article className="project-detail__article">
            <section id="overview">
              <h2>프로젝트 소개</h2>
              {project.background.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {project.demoAccounts && project.demoAccounts.length > 0 && (
                <aside className="project-detail__demo" aria-labelledby="demo-accounts-title">
                  <h3 id="demo-accounts-title" className="project-detail__demo-title">계정 정보</h3>
                  <table className="project-detail__demo-table">
                    <caption className="visually-hidden">TripMate 데모 계정 정보</caption>
                    <thead>
                      <tr>
                        <th scope="col">구분</th>
                        <th scope="col">이메일</th>
                        <th scope="col">비밀번호</th>
                      </tr>
                    </thead>
                    <tbody>
                      {project.demoAccounts.map((account) => (
                        <tr key={account.email}>
                          <th scope="row">{account.role}</th>
                          <td>{account.email}</td>
                          <td>{account.password}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </aside>
              )}
            </section>

            <section id="features">
              <h2>주요 기능</h2>
              <ul className="project-detail__list">
                {project.outcome.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="technologies">
              <h2>사용 기술</h2>
              <ul className="project-detail__technology-list">
                {technologyDetails.map((technology) => (
                  <li key={technology.name}>
                    <strong>{technology.name}</strong>
                    {technology.description && <span> — {technology.description}</span>}
                  </li>
                ))}
              </ul>
            </section>

            <section id="process">
              <h2>구현 과정</h2>
              <ul className="project-detail__list">
                {project.process.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="outcome">
              <h2>결과</h2>
              <ul className="project-detail__list">
                {project.outcome.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </article>

          <ProjectToc
            items={projectTocItems}
            projectUrl={project.projectUrl}
            repositoryUrl={project.repositoryUrl}
          />
        </div>

        {(previousProject || nextProject) && (
          <nav aria-label="인접 프로젝트" className="project-detail__pagination">
            {previousProject ? (
              <Link href={`/projects/${previousProject.slug}`}>
                <span>이전 프로젝트</span>
                <strong>{previousProject.title}</strong>
              </Link>
            ) : (
              <span aria-hidden="true" />
            )}
            {nextProject && (
              <Link href={`/projects/${nextProject.slug}`}>
                <span>다음 프로젝트</span>
                <strong>{nextProject.title}</strong>
              </Link>
            )}
          </nav>
        )}

        <ContactCta />
      </div>
    </main>
  );
}
