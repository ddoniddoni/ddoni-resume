import type { Metadata } from "next";
import { ContactCta } from "@/components/layout/contact-cta";
import { ProjectExplorer } from "@/components/projects/project-explorer";
import "@/styles/projects/project-index.scss";
import { projects } from "@/content/site";

export const metadata: Metadata = {
  title: "프로젝트",
  description: "개인 프로젝트와 실무 프로젝트를 살펴보세요.",
  openGraph: {
    title: "프로젝트",
    description: "개인 프로젝트와 실무 프로젝트를 살펴보세요.",
  },
};

export default function ProjectsPage() {
  return (
    <main id="main-content" className="page page--projects">
      <header className="page-header projects-page-header">
        <p className="eyebrow">
          <span className="eyebrow-mark" aria-hidden="true">
            ✦
          </span>
          주요 작업
        </p>
        <h1 className="page-header__title">
          더 나은 디지털 작업을 만들고 기록합니다.
        </h1>
      </header>

      <ProjectExplorer projects={projects} />
      <ContactCta />
    </main>
  );
}
