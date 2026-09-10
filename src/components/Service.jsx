import { site, legalService } from "../data/content";

export default function Service() {
  return (
    <section className="section alt" id="service">
      <div className="section-inner">
        <div className="section-head reveal">
          <div className="section-label">服務</div>
          <h2>選民服務與法律諮詢</h2>
          <p>不管你是不是子宇的支持者，只要有需要，都歡迎來找我們。</p>
        </div>

        <div className="action-grid">
          <div className="action-card reveal">
            <div className="action-title">{legalService.title}</div>
            <p>{legalService.team}</p>
            <div className="policy-list" style={{ marginTop: "16px" }}>
              <div className="policy-item">
                <div className="policy-title">諮詢時間</div>
                <div className="policy-link">{legalService.schedule}</div>
              </div>
              <div className="policy-item">
                <div className="policy-title">地點</div>
                <div className="policy-link">{legalService.location}</div>
              </div>
              <div className="policy-item">
                <div className="policy-title">預約電話</div>
                <div className="policy-link">
                  <a href={site.phoneHref}>{site.phone}</a>
                </div>
              </div>
            </div>
            <p className="action-note">{legalService.note}</p>
            <a
              className="btn btn-feedback"
              href={site.legalConsultUrl}
              target="_blank"
              rel="noreferrer"
            >
              線上預約諮詢
            </a>
          </div>

          <div className="action-card reveal">
            <div className="action-title">想讓子宇聽見你的聲音？</div>
            <p>分享你關心的議題與需求，讓政策更貼近現場。</p>
            <a
              className="btn btn-feedback"
              href={site.feedbackFormUrl}
              target="_blank"
              rel="noreferrer"
            >
              填寫建議
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
