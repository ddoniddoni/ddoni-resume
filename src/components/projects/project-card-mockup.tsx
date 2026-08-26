import type { ProjectCardMockupKind } from "@/content/site";

type ProjectCardMockupProps = {
  kind?: ProjectCardMockupKind;
  title: string;
};

const rackUnits = Array.from({ length: 9 });

export function ProjectCardMockup({ kind, title }: ProjectCardMockupProps) {
  if (kind === "social") {
    return (
      <div className="project-card-mockup project-card-mockup--social" aria-hidden="true">
        <div className="project-card-mockup__window-bar">
          <span />
          <span />
          <span />
          <b>LIVE</b>
        </div>
        <div className="project-card-mockup__social-layout">
          <div className="project-card-mockup__room-list">
            <span className="project-card-mockup__room-list-title">내 방</span>
            <span className="project-card-mockup__room-list-item project-card-mockup__room-list-item--selected" />
            <span className="project-card-mockup__room-list-item" />
            <span className="project-card-mockup__room-list-item" />
          </div>
          <div className="project-card-mockup__social-main">
            <span className="project-card-mockup__social-title">커스텀 방</span>
            <div className="project-card-mockup__avatars">
              <span>J</span>
              <span>S</span>
              <span>D</span>
              <span>+</span>
            </div>
            <div className="project-card-mockup__invite">
              <i />
              <span>친구 초대가 도착했어요</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (kind === "translation") {
    return (
      <div className="project-card-mockup project-card-mockup--translation" aria-hidden="true">
        <div className="project-card-mockup__window-bar">
          <span />
          <span />
          <span />
          <b>i18n</b>
        </div>
        <div className="project-card-mockup__translation-flow">
          <div className="project-card-mockup__code-panel">
            <span>t(&quot;room.invite&quot;)</span>
            <span>t(&quot;notice.title&quot;)</span>
            <span>t(&quot;game.start&quot;)</span>
          </div>
          <span className="project-card-mockup__flow-arrow">→</span>
          <div className="project-card-mockup__sheet-panel">
            <span>KEY</span>
            <span>KO</span>
            <span>EN</span>
            <span>JA</span>
          </div>
          <span className="project-card-mockup__flow-arrow">→</span>
          <div className="project-card-mockup__json-panel">
            <span>{"{"}</span>
            <span>ko.json</span>
            <span>en.json</span>
            <span>{"}"}</span>
          </div>
        </div>
        <span className="project-card-mockup__translation-caption">코드 스캔 · 시트 동기화 · JSON 생성</span>
      </div>
    );
  }

  if (kind === "rack") {
    return (
      <div className="project-card-mockup project-card-mockup--rack" aria-hidden="true">
        <div className="project-card-mockup__window-bar">
          <span />
          <span />
          <span />
          <b>42U</b>
        </div>
        <div className="project-card-mockup__rack-layout">
          <div className="project-card-mockup__rack-scale">
            <span>42</span>
            <span>28</span>
            <span>14</span>
            <span>01</span>
          </div>
          <div className="project-card-mockup__rack-units">
            {rackUnits.map((_, index) => (
              <span key={index} className={`project-card-mockup__rack-unit project-card-mockup__rack-unit--${index + 1}`} />
            ))}
          </div>
          <div className="project-card-mockup__rack-summary">
            <span>가동 장비</span>
            <strong>18</strong>
            <span>유휴 공간</span>
            <strong>12U</strong>
          </div>
        </div>
      </div>
    );
  }

  if (kind === "topology") {
    return (
      <div className="project-card-mockup project-card-mockup--topology" aria-hidden="true">
        <div className="project-card-mockup__window-bar">
          <span />
          <span />
          <span />
          <b>TOPOLOGY</b>
        </div>
        <div className="project-card-mockup__topology-map">
          <span className="project-card-mockup__topology-line project-card-mockup__topology-line--one" />
          <span className="project-card-mockup__topology-line project-card-mockup__topology-line--two" />
          <span className="project-card-mockup__topology-line project-card-mockup__topology-line--three" />
          <span className="project-card-mockup__topology-node project-card-mockup__topology-node--core">CORE</span>
          <span className="project-card-mockup__topology-node project-card-mockup__topology-node--vm">VM</span>
          <span className="project-card-mockup__topology-node project-card-mockup__topology-node--storage">STORAGE</span>
          <span className="project-card-mockup__topology-node project-card-mockup__topology-node--switch">SWITCH</span>
        </div>
        <div className="project-card-mockup__status-legend">
          <span><i />정상</span>
          <span><i />경고</span>
          <span><i />꺼짐</span>
        </div>
      </div>
    );
  }

  return (
    <div className="project-card-mockup project-card-mockup--default" aria-hidden="true">
      <div className="project-card__mockup-bar">
        <span />
        <span />
        <span />
      </div>
      <p>{title}</p>
      <div className="project-card__mockup-grid">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
