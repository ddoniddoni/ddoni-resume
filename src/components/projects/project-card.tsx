import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/site";
import { projectCategoryLabels } from "@/content/site";
import { ProjectCardMockup } from "@/components/projects/project-card-mockup";
import "@/styles/projects/project-card.scss";

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
        <div
          className={`project-card__visual tone-${project.tone}${project.previewImage ? " project-card__visual--image" : ""}`}
        >
          {project.previewImage ? (
            <div className="project-card__preview">
              <Image
                alt={project.previewImage.alt}
                className="project-card__image"
                fill
                loading={project.slug === "tripmate" ? "eager" : "lazy"}
                sizes="(min-width: 1280px) 576px, (min-width: 640px) calc((100vw - 128px) / 2), calc(100vw - 32px)"
                src={project.previewImage.src}
              />
            </div>
          ) : (
            <ProjectCardMockup kind={project.cardMockup} title={project.title} />
          )}
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
