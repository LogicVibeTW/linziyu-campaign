import { appearances } from "../data/appearances";

export default function Appearances() {
  return (
    <section className="section" id="appearances">
      <div className="section-inner">
        <div className="section-head reveal">
          <div className="section-label">通告</div>
          <h2>近期媒體通告</h2>
          <p>子宇受邀上節目、參與媒體訪談的行程與連結，會公告於此。</p>
        </div>

        {appearances.length === 0 ? (
          <div className="appearance-empty reveal">
            目前沒有排定的媒體通告，最新資訊請鎖定官方社群。
          </div>
        ) : (
          <div className="appearance-grid">
            {appearances.map((item) => (
              <div className="appearance-card reveal" key={item.id}>
                <div className="appearance-date">{item.date}</div>
                <h3>{item.program}</h3>
                {item.note && <p>{item.note}</p>}
                {item.embedUrl && (
                  <div className="appearance-embed-wrap">
                    <iframe
                      src={item.embedUrl}
                      title={item.program}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
