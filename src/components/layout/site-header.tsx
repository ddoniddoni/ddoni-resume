"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { NavigationIcon, ThemeIcon } from "@/components/ui/icons";
import { navigation, siteConfig } from "@/content/site";
import "./site-header.scss";

const themeStorageKey = "ddoni-resume-theme";

type Theme = "dark" | "light";

function isCurrentPath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function getDocumentTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isCompact, setIsCompact] = useState(false);
  const isThemeTransitioning = useRef(false);

  useEffect(() => {
    let animationFrame = 0;

    const updateHeader = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        setIsCompact(window.scrollY > 64);
      });
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateHeader);
    };
  }, []);

  const toggleTheme = (event: MouseEvent<HTMLButtonElement>) => {
    if (isThemeTransitioning.current) {
      return;
    }

    const nextTheme = getDocumentTheme() === "dark" ? "light" : "dark";
    const applyTheme = () => {
      document.documentElement.dataset.theme = nextTheme;
      document.documentElement.style.colorScheme = nextTheme;
      localStorage.setItem(themeStorageKey, nextTheme);
    };

    const hasReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hasReducedMotion || !document.startViewTransition) {
      applyTheme();
      return;
    }

    const buttonBounds = event.currentTarget.getBoundingClientRect();
    const originX = buttonBounds.left + buttonBounds.width / 2;
    const originY = buttonBounds.top + buttonBounds.height / 2;
    const revealDiameter = Math.max(window.innerWidth, window.innerHeight) * 3.5;
    const root = document.documentElement;

    isThemeTransitioning.current = true;
    root.dataset.themeTransitioning = "true";
    root.style.setProperty("--theme-reveal-origin-x", `${originX}px`);
    root.style.setProperty("--theme-reveal-origin-y", `${originY}px`);
    root.style.setProperty("--theme-reveal-diameter", `${revealDiameter}px`);

    const transition = document.startViewTransition(applyTheme);

    void transition.finished
      .catch(() => undefined)
      .finally(() => {
        isThemeTransitioning.current = false;
        delete root.dataset.themeTransitioning;
        root.style.removeProperty("--theme-reveal-origin-x");
        root.style.removeProperty("--theme-reveal-origin-y");
        root.style.removeProperty("--theme-reveal-diameter");
      });
  };

  return (
    <header className="site-header" data-compact={isCompact ? "true" : "false"}>
      <div className="site-header__inner">
        <Link className="brand-mark" href="/" aria-label={`${siteConfig.name} 홈`}>
          DD
        </Link>
        <nav className="site-nav" aria-label="주요 메뉴">
          {navigation.map((item) => {
            const isCurrent = isCurrentPath(pathname, item.href);

            return (
              <Link
                aria-label={item.label}
                aria-current={isCurrent ? "page" : undefined}
                className="site-nav__link"
                href={item.href}
                key={item.href}
              >
                <span className="rolling-text" aria-hidden="true">
                  <span className="rolling-text__primary">{item.label}</span>
                  <span className="rolling-text__secondary">{item.label}</span>
                </span>
              </Link>
            );
          })}
        </nav>
        <button
          aria-label="테마 전환"
          className="theme-toggle"
          onClick={toggleTheme}
          type="button"
        >
          <span
            aria-hidden="true"
            className="theme-toggle__icon theme-toggle__icon--sun"
          >
            <ThemeIcon theme="light" />
          </span>
          <span
            aria-hidden="true"
            className="theme-toggle__icon theme-toggle__icon--moon"
          >
            <ThemeIcon theme="dark" />
          </span>
        </button>
      </div>
      <nav className="mobile-nav" aria-label="모바일 주요 메뉴">
        {navigation.map((item) => {
          const isCurrent = isCurrentPath(pathname, item.href);

          return (
            <Link
              aria-current={isCurrent ? "page" : undefined}
              className="mobile-nav__link"
              href={item.href}
              key={item.href}
            >
              <NavigationIcon href={item.href} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
