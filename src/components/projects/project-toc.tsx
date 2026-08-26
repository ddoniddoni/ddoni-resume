"use client";

import { useEffect, useState } from "react";
import "@/styles/projects/project-toc.scss";

export type ProjectTocItem = {
  id: string;
  label: string;
};

type ProjectTocProps = {
  items: ProjectTocItem[];
  projectUrl?: string;
  repositoryUrl?: string;
};

export function ProjectToc({ items, projectUrl, repositoryUrl }: ProjectTocProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top);

        if (visibleSections[0]?.target.id) {
          setActiveId(visibleSections[0].target.id);
        }
      },
      { rootMargin: "-18% 0px -68%", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [items]);

  return (
    <aside className="project-toc" aria-label="프로젝트 목차">
      <p className="project-toc__title">
        <span aria-hidden="true">☰</span>
        이 페이지의 내용
      </p>
      <nav className="project-toc__nav" aria-label="페이지 내 이동">
        {items.map((item) => (
          <a
            aria-current={activeId === item.id ? "location" : undefined}
            href={`#${item.id}`}
            key={item.id}
          >
            {item.label}
          </a>
        ))}
      </nav>
      {(projectUrl || repositoryUrl) && (
        <div className="project-toc__links" aria-label="프로젝트 링크">
          <p>프로젝트 링크</p>
          {projectUrl && (
            <a href={projectUrl} rel="noreferrer" target="_blank">
              체험 사이트 <span aria-hidden="true">↗</span>
            </a>
          )}
          {repositoryUrl && (
            <a href={repositoryUrl} rel="noreferrer" target="_blank">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      )}
    </aside>
  );
}
