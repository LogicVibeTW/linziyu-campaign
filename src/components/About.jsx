import { aboutCards, education, experience, site } from "../data/content";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-head reveal">
        <div className="section-label">關於</div>
        <h2>關於{site.name}與參選理念</h2>
        <p>以專業與同理，推動更有效率的地方治理。</p>
      </div>

      <div className="cards">
        {aboutCards.map((card) => (
          <article className="card reveal" key={card.title}>
            <div className="card-title">{card.title}</div>
            <p>{card.text}</p>
          </article>
        ))}
      </div>

      <div className="credentials-grid">
        <div className="credentials-card reveal">
          <div className="credentials-label">學歷</div>
          <ul className="credentials-list">
            {education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="credentials-card reveal">
          <div className="credentials-label">經歷</div>
          <ul className="credentials-list">
            {experience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="story-grid reveal">
        <div className="story-text">
          <div className="story-label">參選初衷</div>
          <h3>從地方需求出發，把政策做成可被驗證的改變</h3>
          <p>
            從國際事務、政黨發言到市府幕僚工作的歷練，讓{site.name}
            更確信地方治理需要專業與溝通並重。未來將持續深耕在地，將經驗轉化為推動板橋改變的實質力量。
          </p>
          <div className="story-tags">
            <span>#政策透明</span>
            <span>#服務即時</span>
            <span>#青年參與</span>
          </div>
        </div>
        <div className="quote-card">
          <div className="quote-mark">&ldquo;</div>
          <p>用理性與溫度，讓地方治理變得更可靠。</p>
          <div className="quote-name">{site.name}</div>
        </div>
      </div>
    </section>
  );
}
