import { site, meta } from "../data/content";
import { getYoutubeVideoId } from "../utils/youtube";

const SHORT_VIDEO_URL = "https://www.youtube.com/shorts/Hd-VEFDzT_A";

function ShortVideoEmbed() {
  const id = getYoutubeVideoId(SHORT_VIDEO_URL);
  return (
    <div className="hero-video-wrap">
      <iframe
        src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&playsinline=1&rel=0`}
        title="短影音"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default function Hero({ heroMode = "photo" }) {
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

        {heroMode === "video-above" && <ShortVideoEmbed />}

        {heroMode === "video-replace" ? (
          <div className="portrait-card">
            <div className="portrait-badge">候選人</div>
            <ShortVideoEmbed />
            <div className="portrait-caption">
              <div className="portrait-name">{site.name}</div>
              <div className="portrait-party">民眾黨</div>
            </div>
          </div>
        ) : (
          <div className="portrait-card">
            <div className="portrait-badge">候選人</div>
            <picture>
              <source srcSet="/linziyu.webp" type="image/webp" />
              <img
                className="portrait"
                src="/linziyu.jpg"
                alt={`${site.name} 候選人照片`}
                fetchPriority="high"
                decoding="async"
              />
            </picture>
            <div className="portrait-caption">
              <div className="portrait-name">{site.name}</div>
              <div className="portrait-party">民眾黨</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
