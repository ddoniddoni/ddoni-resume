"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation, siteConfig } from "@/content/site";
import "./site-header.scss";

const themeStorageKey = "ddoniddoni-theme";

function isCurrentPath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function toggleTheme() {
  const root = document.documentElement;
  const nextTheme = root.dataset.theme === "light" ? "dark" : "light";

  root.dataset.theme = nextTheme;
  root.style.colorScheme = nextTheme;
  window.localStorage.setItem(themeStorageKey, nextTheme);
}

function NavIcon({ href }: { href: (typeof navigation)[number]["href"] }) {
  if (href === "/") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="m4 10 8-6 8 6v9a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1Z" />
      </svg>
    );
  }

  if (href === "/about") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="3" />
        <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
      </svg>
    );
  }

  if (href === "/projects") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <rect x="4" y="4" width="6" height="6" rx="1" />
        <rect x="14" y="4" width="6" height="6" rx="1" />
        <rect x="4" y="14" width="6" height="6" rx="1" />
        <rect x="14" y="14" width="6" height="6" rx="1" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="m4 11 16-7-7 16-2-7Z" />
      <path d="m11 13 4-4" />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isCompact, setIsCompact] = useState(false);

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
        <button className="theme-toggle" onClick={toggleTheme} type="button">
          <span className="theme-icon theme-icon--sun" aria-hidden="true">
            <svg fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          </span>
          <span className="theme-icon theme-icon--moon" aria-hidden="true">
            <svg fill="none" viewBox="0 0 24 24">
              <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z" />
            </svg>
          </span>
          <span className="visually-hidden">테마 전환</span>
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
              <NavIcon href={item.href} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
