import type { ReactNode } from "react";
import { SparkleIcon } from "@/components/ui/icons";
import "@/styles/ui/shimmer-eyebrow.scss";

type ShimmerEyebrowProps = {
  ariaHidden?: boolean;
  children: ReactNode;
  className?: string;
};

export function ShimmerEyebrow({ ariaHidden, children, className }: ShimmerEyebrowProps) {
  const classes = ["shimmer-eyebrow", className].filter(Boolean).join(" ");

  return (
    <p aria-hidden={ariaHidden} className={classes}>
      <SparkleIcon />
      <span>{children}</span>
    </p>
  );
}
