import Link from "next/link";
import "@/styles/layout/contact-cta.scss";

export function ContactCta() {
  return (
    <section className="contact-cta" aria-labelledby="contact-cta-title">
      <div className="contact-cta__topline">
        <span>연락</span>
        <span>다음 작업을 준비하고 있습니다</span>
      </div>
      <h2 id="contact-cta-title" className="contact-cta__title">
        다음 작업을 함께
        <br />
        정리해볼까요?
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
