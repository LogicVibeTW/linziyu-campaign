import { site } from "../data/content";
import { useLiveStatus } from "../hooks/useLiveStatus";

export default function Live() {
  const { live, loading, error } = useLiveStatus();

  return (
    <section className="section alt" id="live">
      <div className="section-inner">
        <div className="section-head reveal">
          <div className="section-label">直播</div>
          <h2>即時直播</h2>
          <p>
            子宇開播時，畫面會顯示於此；沒有直播時，可以直接前往
            <a href={site.youtubeUrl} target="_blank" rel="noreferrer">
              {" "}
              YouTube 頻道{" "}
            </a>
            查看過往影片。
          </p>
        </div>

        {loading && <div className="sheet-status">直播狀態載入中…</div>}
        {error && (
          <div className="sheet-status sheet-status-error">
            直播狀態暫時無法讀取，請稍後再試。
          </div>
        )}

        {live && !live.isLive && !loading && (
          <div className="appearance-empty reveal">
            目前沒有直播，歡迎追蹤 LINE／社群掌握開播通知。
          </div>
        )}

        {live && live.isLive && (
          <div className="live-embed-wrap reveal">
            <iframe
              src={`${live.embedUrl}?autoplay=1&mute=1&playsinline=1`}
              title="即時直播"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
}
