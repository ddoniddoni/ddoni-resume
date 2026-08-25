"use client";

import Link from "next/link";
import {
  type KeyboardEvent as ReactKeyboardEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { ProjectCard } from "@/components/projects/project-card";
import { SearchIcon } from "@/components/ui/icons";
import {
  projectCategoryLabels,
  type Project,
  type ProjectCategory,
} from "@/content/site";
import "./project-explorer.scss";

type Filter = "all" | ProjectCategory;

type ProjectExplorerProps = {
  projects: Project[];
};

function filterLabel(filter: Filter) {
  return filter === "all" ? "All" : projectCategoryLabels[filter];
}

export function ProjectExplorer({ projects }: ProjectExplorerProps) {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const gridRef = useRef<HTMLDivElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const searchDialogRef = useRef<HTMLDivElement>(null);
  const searchDialogTitleId = useId();
  const filters: Filter[] = [
    "all",
    ...[...new Set(projects.flatMap((project) => project.categories))],
  ];
  const normalizedQuery = query.trim().toLocaleLowerCase("ko-KR");
  const visibleProjects = projects.filter((project) => {
    const matchesCategory =
      activeFilter === "all" || project.categories.includes(activeFilter);
    const searchableText = [
      project.title,
      project.summary,
      project.organization,
      project.role,
      ...project.technologies,
      ...project.background,
      ...project.process,
      ...project.outcome,
    ]
      .join(" ")
      .toLocaleLowerCase("ko-KR");

    return matchesCategory && searchableText.includes(normalizedQuery);
  });

  useEffect(() => {
    if (!isSearchOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const searchButton = searchButtonRef.current;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSearchOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
      searchButton?.focus();
    };
  }, [isSearchOpen]);

  useEffect(() => {
    const grid = gridRef.current;

    if (!grid) {
      return;
    }

    const cards = Array.from(grid.querySelectorAll<HTMLElement>(".project-card"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      for (const card of cards) {
        card.dataset.reveal = "visible";
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.reveal = "visible";
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );

    for (const card of cards) {
      const isInInitialView = card.getBoundingClientRect().top < window.innerHeight * 0.92;
      card.dataset.reveal = isInInitialView ? "visible" : "pending";

      if (!isInInitialView) {
        observer.observe(card);
      }
    }

    return () => observer.disconnect();
  }, [activeFilter, normalizedQuery]);

  const keepFocusInDialog = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab") {
      return;
    }

    const focusableElements = Array.from(
      searchDialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ) ?? [],
    );

    if (focusableElements.length === 0) {
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements.at(-1);

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement?.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  };

  return (
    <div className="project-explorer">
      <div className="explorer-controls">
        <button
          aria-expanded={isSearchOpen}
          aria-haspopup="dialog"
          aria-label="프로젝트 검색 열기"
          className="search-trigger"
          data-active={normalizedQuery ? "true" : "false"}
          onClick={() => setIsSearchOpen(true)}
          ref={searchButtonRef}
          type="button"
        >
          <SearchIcon className="search-icon" />
          <span>Search</span>
        </button>
        <div
          className="filter-list"
          aria-label="프로젝트 카테고리 필터"
          role="group"
        >
          {filters.map((filter) => (
            <button
              aria-pressed={activeFilter === filter}
              className="filter-button"
              key={filter}
              onClick={() => setActiveFilter(filter)}
              type="button"
            >
              {filterLabel(filter)}
            </button>
          ))}
        </div>
      </div>

      {isSearchOpen ? (
        <div className="search-dialog-backdrop">
          <button
            aria-hidden="true"
            className="search-dialog-dismiss"
            onClick={() => setIsSearchOpen(false)}
            tabIndex={-1}
            type="button"
          />
          <div
            aria-labelledby={searchDialogTitleId}
            aria-modal="true"
            className="search-dialog"
            onKeyDown={keepFocusInDialog}
            ref={searchDialogRef}
            role="dialog"
          >
            <h2 className="visually-hidden" id={searchDialogTitleId}>
              프로젝트 검색
            </h2>
            <div className="search-dialog__header">
              <SearchIcon className="search-icon" />
              <input
                aria-label="프로젝트 검색"
                autoFocus
                className="search-dialog__input"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search"
                type="search"
                value={query}
              />
              <button
                aria-label="검색 닫기"
                className="search-dialog__escape"
                onClick={() => setIsSearchOpen(false)}
                type="button"
              >
                ESC
              </button>
            </div>
            <div className="search-dialog__body" aria-live="polite">
              <div className="search-dialog__summary">
                <span>Projects</span>
                <span>{normalizedQuery ? `${visibleProjects.length} results` : "Type to search"}</span>
              </div>
              {normalizedQuery ? (
                visibleProjects.length > 0 ? (
                  <div className="search-results">
                    {visibleProjects.map((project) => (
                      <Link
                        className="search-result"
                        href={`/projects/${project.slug}`}
                        key={project.slug}
                        onClick={() => setIsSearchOpen(false)}
                      >
                        <span>{project.title}</span>
                        <span>{project.period}</span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="search-dialog__empty">일치하는 프로젝트가 없습니다.</p>
                )
              ) : null}
            </div>
          </div>
        </div>
      ) : null}

      {visibleProjects.length > 0 ? (
        <div className="work-grid" aria-live="polite" ref={gridRef}>
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index + 1} />
          ))}
        </div>
      ) : (
        <div className="empty-state" role="status">
          <p>조건에 맞는 프로젝트가 없습니다. 다른 카테고리나 검색어를 사용해 보세요.</p>
        </div>
      )}
    </div>
  );
}
