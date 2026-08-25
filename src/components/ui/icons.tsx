import type { SVGProps } from "react";
import {
  siAngular,
  siNextdotjs,
  siReact,
  siSass,
  siTypescript,
  type SimpleIcon,
} from "simple-icons";
import type { SkillTickerIcon as SkillTickerIconName } from "@/content/site";

type IconProps = Omit<SVGProps<SVGSVGElement>, "children">;

type BrandIconName = Exclude<SkillTickerIconName, "browser-testing" | "websocket">;

const brandIcons: Record<BrandIconName, SimpleIcon> = {
  angular: siAngular,
  nextjs: siNextdotjs,
  react: siReact,
  sass: siSass,
  typescript: siTypescript,
};

const skillIconColors: Record<SkillTickerIconName, string> = {
  angular: "#DD0031",
  "browser-testing": "#2EAD33",
  nextjs: "#FFFFFF",
  react: `#${siReact.hex}`,
  sass: `#${siSass.hex}`,
  typescript: `#${siTypescript.hex}`,
  websocket: "#0EA5E9",
};

export function HandWaveIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path d="M8.5 10.5V5.75a1.75 1.75 0 0 1 3.5 0V9" />
      <path d="M12 9V4.75a1.75 1.75 0 0 1 3.5 0V9" />
      <path d="M15.5 9V6.25a1.75 1.75 0 0 1 3.5 0v6.25" />
      <path d="M8.5 8.5V7.25a1.75 1.75 0 0 0-3.5 0v5.25l-1.13-1.13a1.75 1.75 0 0 0-2.47 2.48l4.31 4.3A5.5 5.5 0 0 0 9.6 19.8h4.65A5.75 5.75 0 0 0 20 14.05v-1.54" />
    </svg>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
      <path d="m12 2.5 1.6 6.4a2.1 2.1 0 0 0 1.5 1.5l6.4 1.6-6.4 1.6a2.1 2.1 0 0 0-1.5 1.5L12 21.5l-1.6-6.4a2.1 2.1 0 0 0-1.5-1.5L2.5 12l6.4-1.6a2.1 2.1 0 0 0 1.5-1.5Z" />
    </svg>
  );
}

export function NavigationIcon({ href, ...props }: IconProps & { href: string }) {
  if (href === "/") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
        <path d="m4 10 8-6 8 6v9a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1Z" />
      </svg>
    );
  }

  if (href === "/about") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
        <circle cx="12" cy="8" r="3" />
        <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
      </svg>
    );
  }

  if (href === "/projects") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
        <rect x="4" y="4" width="6" height="6" rx="1" />
        <rect x="14" y="4" width="6" height="6" rx="1" />
        <rect x="4" y="14" width="6" height="6" rx="1" />
        <rect x="14" y="14" width="6" height="6" rx="1" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path d="m4 11 16-7-7 16-2-7Z" />
      <path d="m11 13 4-4" />
    </svg>
  );
}

export function ThemeIcon({
  theme,
  ...props
}: IconProps & { theme: "light" | "dark" }) {
  if (theme === "light") {
    return (
      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
      <path d="M20.5 14.2A8.6 8.6 0 0 1 9.8 3.5 8.6 8.6 0 1 0 20.5 14.2Z" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </svg>
  );
}

export function SkillTickerIcon({
  iconName,
  style,
  ...props
}: IconProps & { iconName: SkillTickerIconName }) {
  const iconStyle = { color: skillIconColors[iconName], ...style };

  if (iconName === "websocket") {
    return (
      <svg aria-hidden="true" style={iconStyle} viewBox="0 0 24 24" {...props}>
        <circle cx="5" cy="12" r="2" />
        <circle cx="19" cy="6" r="2" />
        <circle cx="19" cy="18" r="2" />
        <path d="m6.8 11 10.2-4M6.8 13l10.2 4" />
      </svg>
    );
  }

  if (iconName === "browser-testing") {
    return (
      <svg aria-hidden="true" style={iconStyle} viewBox="0 0 24 24" {...props}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 8h18M8 14l2.25 2.25L16 11" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      style={iconStyle}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d={brandIcons[iconName].path} />
    </svg>
  );
}
