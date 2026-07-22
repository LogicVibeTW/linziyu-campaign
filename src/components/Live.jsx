import { site } from "../data/content";

export default function Live() {
  return (
    <section className="section alt" id="live">
      <div className="section-inner">
        <div className="section-head reveal">
          <div className="section-label">直播</div>
          <h2>即時直播</h2>
          <p>
            當子宇正在 YouTube 頻道開播時，畫面會自動顯示於此；沒有直播時，這裡會是待機畫面，
            可以直接前往
            <a href={site.youtubeUrl} target="_blank" rel="noreferrer">
              {" "}
              YouTube 頻道{" "}
            </a>
            查看過往影片。
          </p>
        </div>
        <div className="live-embed-wrap reveal">
          <iframe
            src={`https://www.youtube.com/embed/live_stream?channel=${site.youtubeChannelId}`}
            title="即時直播"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
