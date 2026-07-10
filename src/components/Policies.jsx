import { site, policies } from "../data/content";

export default function Policies() {
  return (
    <section className="section alt" id="policies">
      <div className="section-inner">
        <div className="section-head reveal">
          <div className="section-label">核心政見</div>
          <h2>優先推動的三項行動</h2>
          <p>從板橋日常最有感的問題著手，完整政見將陸續補充細節與時程。</p>
        </div>
        <div className="feature-grid">
          {policies.map((policy) => (
            <div className="feature reveal" key={policy.id}>
              <div className="feature-icon">{policy.id}</div>
              <div>
                <h3>{policy.title}</h3>
                <p>{policy.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="report-strip reveal">
          <div className="report-text">
            <div className="join-label">在地回報</div>
            <h3>看到人行道被佔用、停車亂象？</h3>
            <p>拍張照片回報給我們，讓政見更貼近你家巷口的真實狀況。</p>
          </div>
          <a className="btn primary" href={site.reportFormUrl} target="_blank" rel="noreferrer">
            立即回報並附照片
          </a>
          <div className="report-note">需登入 Google 帳號，以便上傳照片</div>
        </div>
      </div>
    </section>
  );
}
