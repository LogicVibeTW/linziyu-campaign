import { joinActions, site } from "../data/content";

export default function Join() {
  return (
    <section className="section" id="join">
      <div className="section-head reveal">
        <div className="section-label">加入我們</div>
        <h2>加入團隊，一起把想法變成行動</h2>
        <p>加入 LINE 官方帳號，第一時間收到志工任務、活動通知與最新政見進度。</p>
      </div>
      <div className="action-grid">
        {joinActions.map((action) => (
          <div className="action-card reveal" key={action.title}>
            <div className="action-title">{action.title}</div>
            <p>{action.text}</p>
            <a
              className={`btn btn-${action.variant}`}
              href={action.href}
              target="_blank"
              rel="noreferrer"
            >
              {action.cta}
            </a>
            {action.note && <p className="action-note">{action.note}</p>}
          </div>
        ))}
      </div>

      <div className="form-section reveal" id="volunteer-form">
        <div className="form-section-head">
          <div className="action-title">志工報名表</div>
          <p>想更明確地告訴我們你能協助的項目與時段？填寫這份表單，讓分工更有效率。</p>
        </div>
        <div className="form-embed-wrap">
          <iframe
            src={site.volunteerFormUrl}
            title="志工報名表"
            width="100%"
            height="900"
            loading="lazy"
          >
            載入中…
          </iframe>
        </div>
      </div>
    </section>
  );
}
