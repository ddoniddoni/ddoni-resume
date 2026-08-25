import type { Metadata } from "next";
import { ContactCta } from "@/components/layout/contact-cta";
import { ProjectExplorer } from "@/components/projects/project-explorer";
import "@/styles/projects/project-index.scss";
import { projects } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "ddoniddoni의 개발과 디자인 프로젝트를 탐색하세요.",
  openGraph: {
    title: "Projects",
    description: "ddoniddoni의 개발과 디자인 프로젝트를 탐색하세요.",
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
          My work
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
