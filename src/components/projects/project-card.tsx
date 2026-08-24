import Link from "next/link";
import type { Project } from "@/content/site";
import { projectCategoryLabels } from "@/content/site";
import "./project-card.scss";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link
      className="project-card"
      href={`/projects/${project.slug}`}
      aria-label={`${project.title} 상세 보기`}
    >
      <div className="project-card__media">
        <div className={`project-card__visual tone-${project.tone}`}>
          <div className="project-card__mockup" aria-hidden="true">
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
          <span className="project-card__index" aria-hidden="true">
            {String(index).padStart(2, "0")}
          </span>
        </div>
      </div>
      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <div className="project-card__meta">
          <div className="project-card__tags" aria-label="프로젝트 카테고리">
            {project.categories.map((category) => (
              <span className="project-card__tag" key={category}>
                {projectCategoryLabels[category]}
              </span>
            ))}
          </div>
          <span className="project-card__year">{project.period}</span>
        </div>
      </div>
    </Link>
  );
}
