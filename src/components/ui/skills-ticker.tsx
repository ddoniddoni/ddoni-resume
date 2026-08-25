"use client";

import { useRef } from "react";
import { SkillTickerIcon } from "@/components/ui/icons";
import type { SkillTickerItem } from "@/content/site";
import "./skills-ticker.scss";

type SkillsTickerProps = {
  skills: SkillTickerItem[];
};

export function SkillsTicker({ skills }: SkillsTickerProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const setTickerSpeed = (playbackRate: number) => {
    for (const animation of trackRef.current?.getAnimations() ?? []) {
      animation.playbackRate = playbackRate;
    }
  };

  return (
    <section
      className="skills-ticker"
      aria-label="주요 기술"
      onPointerEnter={() => setTickerSpeed(0.35)}
      onPointerLeave={() => setTickerSpeed(1)}
    >
      <div className="skills-ticker__viewport">
        <div className="skills-ticker__track" ref={trackRef}>
          <ul className="skills-ticker__list">
            {skills.map((skill) => (
              <li className="skills-ticker__item" key={skill.label}>
                <SkillTickerIcon className="skills-ticker__icon" iconName={skill.icon} />
                <span>{skill.label}</span>
              </li>
            ))}
          </ul>
          <ul aria-hidden="true" className="skills-ticker__list">
            {skills.map((skill) => (
              <li className="skills-ticker__item" key={`${skill.label}-duplicate`}>
                <SkillTickerIcon className="skills-ticker__icon" iconName={skill.icon} />
                <span>{skill.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
