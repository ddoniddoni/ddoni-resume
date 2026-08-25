"use client";

import { type CSSProperties, useEffect, useMemo, useRef } from "react";
import "./scroll-reveal-text.scss";

type ScrollRevealTextProps = {
  className?: string;
  text: string;
};

const clamp = (value: number) => Math.min(Math.max(value, 0), 1);

export function ScrollRevealText({ className, text }: ScrollRevealTextProps) {
  const textRef = useRef<HTMLParagraphElement>(null);
  const tokens = useMemo(() => text.split(/(\s+)/u).filter(Boolean), [text]);
  const characterCount = useMemo(
    () => Array.from(text).filter((character) => !/\s/u.test(character)).length,
    [text],
  );
  let characterIndex = 0;

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frameId = 0;

    const updateProgress = () => {
      frameId = 0;
      const textElement = textRef.current;

      if (!textElement) {
        return;
      }

      if (reducedMotion.matches) {
        textElement.style.setProperty("--scroll-reveal-cursor", String(characterCount));
        return;
      }

      const rect = textElement.getBoundingClientRect();
      const start = window.innerHeight * 0.9;
      const finishAt = (window.innerHeight - rect.height) / 2;
      const nextProgress = clamp((start - rect.top) / (start - finishAt));

      textElement.style.setProperty(
        "--scroll-reveal-cursor",
        String(nextProgress * characterCount),
      );
    };

    const requestProgressUpdate = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(updateProgress);
      }
    };

    requestProgressUpdate();
    window.addEventListener("scroll", requestProgressUpdate, { passive: true });
    window.addEventListener("resize", requestProgressUpdate);
    reducedMotion.addEventListener("change", requestProgressUpdate);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", requestProgressUpdate);
      window.removeEventListener("resize", requestProgressUpdate);
      reducedMotion.removeEventListener("change", requestProgressUpdate);
    };
  }, [characterCount]);

  return (
    <p className={`scroll-reveal-text ${className ?? ""}`.trim()} ref={textRef}>
      <span className="visually-hidden">{text}</span>
      <span aria-hidden="true" className="scroll-reveal-text__content">
        {tokens.map((token, tokenIndex) => {
          if (/^\s+$/u.test(token)) {
            return (
              <span className="scroll-reveal-text__space" key={`${token}-${tokenIndex}`}>
                {token}
              </span>
            );
          }

          return (
            <span className="scroll-reveal-text__word" key={`${token}-${tokenIndex}`}>
              {Array.from(token).map((character) => {
                const currentIndex = characterIndex;
                characterIndex += 1;

                return (
                  <span className="scroll-reveal-text__character" key={`${character}-${currentIndex}`}>
                    <span className="scroll-reveal-text__character-muted">{character}</span>
                    <span
                      className="scroll-reveal-text__character-active"
                      style={{ "--scroll-reveal-index": currentIndex } as CSSProperties}
                    >
                      {character}
                    </span>
                  </span>
                );
              })}
            </span>
          );
        })}
      </span>
    </p>
  );
}
