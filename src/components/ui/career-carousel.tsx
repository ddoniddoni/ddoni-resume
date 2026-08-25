"use client";

import { useState } from "react";
import type { CareerEntry } from "@/content/site";
import "./career-carousel.scss";

type CareerCarouselProps = {
  entries: CareerEntry[];
};

export function CareerCarousel({ entries }: CareerCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const entryCount = entries.length;

  if (entryCount === 0) {
    return null;
  }

  const showPreviousEntry = () => {
    setActiveIndex((index) => (index - 1 + entryCount) % entryCount);
  };

  const showNextEntry = () => {
    setActiveIndex((index) => (index + 1) % entryCount);
  };

  return (
    <div
      aria-label="경력 하이라이트"
      aria-roledescription="carousel"
      className="career-carousel"
    >
      <div className="career-carousel__viewport">
        <div
          className="career-carousel__track"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {entries.map((entry, index) => {
            const isActive = index === activeIndex;

            return (
              <article
                aria-hidden={!isActive}
                aria-label={`${index + 1} / ${entryCount}`}
                aria-roledescription="slide"
                className="career-carousel__slide"
                key={`${entry.company}-${entry.period}`}
              >
                <div className="career-carousel__monogram" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="career-carousel__content">
                  <div className="career-carousel__meta">
                    <span>{entry.period}</span>
                    <span>{entry.duration}</span>
                  </div>
                  <h3>{entry.company}</h3>
                  <p className="career-carousel__team">{entry.team}</p>
                  <p className="career-carousel__highlight">{entry.highlights[0]}</p>
                  <span className="career-carousel__role">{entry.role}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <div className="career-carousel__controls">
        <span aria-live="polite" className="career-carousel__count">
          {String(activeIndex + 1).padStart(2, "0")} / {String(entryCount).padStart(2, "0")}
        </span>
        <div className="career-carousel__buttons">
          <button aria-label="이전 경력" onClick={showPreviousEntry} type="button">
            ←
          </button>
          <button aria-label="다음 경력" onClick={showNextEntry} type="button">
            →
          </button>
        </div>
      </div>
    </div>
  );
}
