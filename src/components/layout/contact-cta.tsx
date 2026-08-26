import Link from "next/link";
import { ShimmerEyebrow } from "@/components/ui/shimmer-eyebrow";
import "@/styles/layout/contact-cta.scss";

export function ContactCta() {
  return (
    <section className="contact-cta" aria-labelledby="contact-cta-title">
      <ShimmerEyebrow className="contact-cta__topline">연락</ShimmerEyebrow>
      <h2 id="contact-cta-title" className="contact-cta__title">
        사용자에게 더 좋은 경험을 만드는 일,
        <br />
        함께하고 싶습니다.
      </h2>
      <div className="contact-cta__body">
        <Link className="button button--signal button--ripple" href="/contact">
          <span className="button__ripple" aria-hidden="true" />
          <span className="button__label" aria-hidden="true">
            <span className="button__label-text" data-label="연락 방법 보기">
              연락 방법 보기
            </span>
          </span>
          <span className="visually-hidden">연락 방법 보기</span>
        </Link>
      </div>
    </section>
  );
}
