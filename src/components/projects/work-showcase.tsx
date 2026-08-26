import Link from "next/link";
import { ShimmerEyebrow } from "@/components/ui/shimmer-eyebrow";
import type { Project } from "@/content/site";
import { workShowcase } from "@/content/site";
import { ProjectCard } from "./project-card";
import "@/styles/projects/work-showcase.scss";

type WorkShowcaseProps = {
  projects: Project[];
};

export function WorkShowcase({ projects }: WorkShowcaseProps) {
  return (
    <section className="section work-showcase" aria-labelledby="work-showcase-title">
      <header className="work-showcase__header">
        <ShimmerEyebrow>{workShowcase.eyebrow}</ShimmerEyebrow>
        <h2 className="work-showcase__title" id="work-showcase-title">
          {workShowcase.title}
        </h2>
        <p className="work-showcase__description">{workShowcase.description}</p>
      </header>

      <div className="work-grid work-showcase__grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} index={index + 1} project={project} />
        ))}
      </div>

      <div className="work-showcase__action">
        <Link className="button button--outline" href="/projects">
          {workShowcase.actionLabel} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
