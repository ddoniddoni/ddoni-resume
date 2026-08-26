import "@/styles/ui/section-heading.scss";
import { ShimmerEyebrow } from "@/components/ui/shimmer-eyebrow";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  id: string;
  count?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  count,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div className="section-heading__topline">
        <ShimmerEyebrow>{eyebrow}</ShimmerEyebrow>
        {count ? <span className="section-heading__count">{count}</span> : null}
      </div>
      <h2 id={id} className="section-heading__title">
        {title}
      </h2>
      <p className="section-heading__description">{description}</p>
    </div>
  );
}
