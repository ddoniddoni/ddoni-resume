"use client";

import { useState } from "react";
import type { ExpertiseArea } from "@/content/site";
import "./expertise-accordion.scss";

type ExpertiseAccordionProps = {
  areas: ExpertiseArea[];
};

export function ExpertiseAccordion({ areas }: ExpertiseAccordionProps) {
  const [openAreaId, setOpenAreaId] = useState<string | null>(null);

  return (
    <div className="expertise-accordion">
      {areas.map((area) => {
        const isOpen = openAreaId === area.id;
        const panelId = `expertise-panel-${area.id}`;

        return (
          <article className="expertise-accordion__item" key={area.id}>
            <h3 className="expertise-accordion__title">
              <button
                aria-controls={panelId}
                aria-expanded={isOpen}
                className="expertise-accordion__trigger"
                onClick={() => setOpenAreaId(isOpen ? null : area.id)}
                type="button"
              >
                <span>{area.title}</span>
                <span aria-hidden="true" className="expertise-accordion__indicator">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div
              aria-hidden={!isOpen}
              className="expertise-accordion__panel"
              data-open={isOpen}
              id={panelId}
              role="region"
            >
              <div className="expertise-accordion__panel-inner">
                <p>{area.description}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
