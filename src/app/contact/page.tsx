import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { heroLinks, profile } from "@/content/site";
import "@/styles/sections/contact.scss";

export const metadata: Metadata = {
  title: "연락",
  description: "프론트엔드 개발자 박상돈에게 프로젝트와 협업에 대해 연락하세요.",
  openGraph: {
    title: "연락",
    description: "프론트엔드 개발자 박상돈에게 프로젝트와 협업에 대해 연락하세요.",
  },
};

export default function ContactPage() {
  const github = heroLinks.find((link) => link.label === "GitHub");

  return (
    <main id="main-content" className="page contact-page">
      <div className="contact-page__layout">
        <header className="contact-page__hero">
          <p className="contact-page__eyebrow">연락하기</p>
          <h1 className="contact-page__title">
            함께 더 나은 경험을
            <br />
            만들어가요.
          </h1>
          <p className="contact-page__description">
            프로젝트의 목적과 현재 고민을 들려주세요. 사용자에게 자연스럽고 안정적인 경험을 만드는 방법을 함께 찾겠습니다.
          </p>
        </header>

        <section aria-labelledby="contact-details-title" className="contact-page__workspace">
          <h2 className="visually-hidden" id="contact-details-title">
            연락 정보
          </h2>
          <aside aria-label="연락 정보" className="contact-card">
            <p className="contact-card__status">
              <span aria-hidden="true" /> 이메일 문의
            </p>
            <div className="contact-card__profile">
              <Image
                alt="프론트엔드 개발자 박상돈"
                className="contact-card__photo"
                height={96}
                sizes="96px"
                src="/profile.jpg"
                width={96}
              />
              <div>
                <p className="contact-card__name">{profile.name}</p>
                <p className="contact-card__role">{profile.role}</p>
              </div>
            </div>
            <p className="contact-card__copy">
              문의 내용을 메일로 남겨주시면, 프로젝트의 맥락과 필요한 역할을 확인할 수 있습니다.
            </p>
            <div className="contact-card__links">
              <a href={`mailto:${profile.email}`}>이메일 <span aria-hidden="true">↗</span></a>
              {github ? (
                <a href={github.href} rel="noreferrer" target="_blank">
                  GitHub <span aria-hidden="true">↗</span>
                </a>
              ) : null}
              <Link href="/projects">프로젝트 <span aria-hidden="true">↗</span></Link>
            </div>
          </aside>
        </section>
      </div>

      {/*
        FAQ 섹션은 다음 콘텐츠 확정 시 다시 노출합니다.
        <section aria-labelledby="contact-faq-title" className="contact-faq">
          <div className="contact-faq__intro">
            <p className="contact-page__eyebrow">자주 묻는 질문</p>
            <h2 id="contact-faq-title">궁금한 점이 있나요?</h2>
          </div>
          <div className="contact-faq__list">
            {contactFaqs.map((faq, index) => (
              <details className="contact-faq__item" key={faq.question}>
                <summary>
                  <span>
                    <span className="contact-faq__number">{String(index + 1).padStart(2, "0")}.</span>
                    {faq.question}
                  </span>
                  <span aria-hidden="true" className="contact-faq__mark">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      */}
    </main>
  );
}
