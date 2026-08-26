import type { Metadata } from "next";
import "@/styles/sections/contact.scss";
import "@/styles/ui/content-panel.scss";
import { profile } from "@/content/site";

export const metadata: Metadata = {
  title: "연락",
  description: "프론트엔드 개발자 박상돈에게 이메일로 연락할 수 있습니다.",
  openGraph: {
    title: "연락",
    description: "프론트엔드 개발자 박상돈에게 이메일로 연락할 수 있습니다.",
  },
};

export default function ContactPage() {
  return (
    <main id="main-content" className="page">
      <header className="page-header">
        <p className="eyebrow">연락</p>
        <h1 className="page-header__title">다음 대화를 시작할 곳.</h1>
        <p className="page-header__description">
          프로젝트의 목적, 시작 희망 시점, 필요한 역할을 알려주시면 좋습니다.
        </p>
      </header>

      <div className="contact-layout">
        <div className="contact-copy">
          <p>
            프론트엔드 개발 관련 문의는 아래 이메일로 편하게 보내주세요.
          </p>
          <p className="notice">현재 상태: {profile.availability}</p>
        </div>
        <div className="content-panel" aria-label="연락 정보">
          <div className="content-panel__row">
            <p className="content-panel__label">이메일</p>
            <div>
              <a className="text-link" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <p className="content-panel__hint">메일 앱에서 바로 작성할 수 있습니다.</p>
            </div>
          </div>
          <div className="content-panel__row">
            <p className="content-panel__label">소셜</p>
            <div>
              <p className="content-panel__value">소셜 링크 준비 중</p>
              <p className="content-panel__hint">공개 가능한 프로필만 연결합니다.</p>
            </div>
          </div>
          <div className="content-panel__row">
            <p className="content-panel__label">이력서</p>
            <div>
              <p className="content-panel__value">이력서 링크 준비 중</p>
              <p className="content-panel__hint">최신 정보 확인 후 다운로드 링크를 제공합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
