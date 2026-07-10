import { site, meta } from "../data/content";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-content reveal">
        <div className="eyebrow">
          {site.party}｜{site.district}議員參選人
        </div>
        <h1>{site.slogan}</h1>
        <p className="lead">{site.lead}</p>
        <div className="cta-row">
          <a className="btn primary" href={site.lineUrl} target="_blank" rel="noreferrer">
            加入 LINE 好友
          </a>
          <a className="btn ghost" href="#policies">
            了解核心政見
          </a>
        </div>
        <div className="hero-tags">
          {site.tags.map((tag) => (
            <span className="hero-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="meta-row">
          {meta.map((item) => (
            <div className="meta-card" key={item.title}>
              <div className="meta-title">{item.title}</div>
              <div className="meta-value">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-visual reveal">
        <div className="orb orb-1" aria-hidden="true"></div>
        <div className="orb orb-2" aria-hidden="true"></div>
        <div className="portrait-card">
          <div className="portrait-badge">候選人</div>
          <img className="portrait" src="/linziyu.jpg" alt={`${site.name} 候選人照片`} />
          <div className="portrait-caption">
            <div className="portrait-name">{site.name}</div>
            <div className="portrait-party">民眾黨</div>
          </div>
        </div>
      </div>
    </section>
  );
}
