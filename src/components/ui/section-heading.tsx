import "@/styles/ui/section-heading.scss";

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
        <p className="eyebrow">{eyebrow}</p>
        {count ? <span className="section-heading__count">{count}</span> : null}
      </div>
      <h2 id={id} className="section-heading__title">
        {title}
      </h2>
      <p className="section-heading__description">{description}</p>
    </div>
  );
}
