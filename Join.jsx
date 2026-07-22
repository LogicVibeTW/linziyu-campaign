import { site } from "../data/content";

export default function Media() {
  return (
    <section className="section" id="media">
      <div className="section-head reveal">
        <div className="section-label">媒體</div>
        <h2>最新動態與媒體曝光</h2>
        <p>這裡放社群帳號與媒體報導摘要，維持一致的選戰訊息。</p>
      </div>
      <div className="social-grid">
        <a className="social-card reveal" href={site.facebookUtm} target="_blank" rel="noreferrer">
          <div className="social-name">Facebook</div>
          <div className="social-handle">facebook.com/Judie.CY.Lin</div>
          <div className="social-note">活動資訊與政策更新</div>
        </a>
        <a className="social-card reveal" href={site.instagramUrl} target="_blank" rel="noreferrer">
          <div className="social-name">Instagram</div>
          <div className="social-handle">@judielin.1995</div>
          <div className="social-note">街頭行程與視覺素材</div>
        </a>
        <a className="social-card reveal" href={site.youtubeUrl} target="_blank" rel="noreferrer">
          <div className="social-name">YouTube</div>
          <div className="social-handle">@Judie1995</div>
          <div className="social-note">政見影片與訪談</div>
        </a>
      </div>
    </section>
  );
}
