import { useSchedule } from "../hooks/useSchedule";

export default function Schedule() {
  const { schedule, loading, error } = useSchedule();

  return (
    <section className="section" id="schedule">
      <div className="section-head reveal">
        <div className="section-label">行程</div>
        <h2>子宇去哪兒？</h2>
        <p>公開行程與掃街拜訪地點會公告於此，歡迎現場一起交流。</p>
      </div>

      {loading && <div className="sheet-status">行程載入中…</div>}
      {error && (
        <div className="sheet-status sheet-status-error">
          行程資訊暫時無法讀取，請稍後再試。
        </div>
      )}

      {schedule && schedule.length === 0 && !loading && (
        <div className="appearance-empty reveal">
          目前沒有排定的公開行程，最新資訊請鎖定官方社群。
        </div>
      )}

      {schedule && schedule.length > 0 && (
        <div className="schedule-grid">
          {schedule.map((item) => (
            <div className="schedule-card reveal" key={item.id}>
              {item.imageUrl && (
                <div className="schedule-image-wrap">
                  <img
                    className="schedule-image"
                    src={item.imageUrl}
                    alt={item.title}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.closest(".schedule-image-wrap").style.display = "none";
                    }}
                  />
                </div>
              )}
              <div className="schedule-date">{item.date}</div>
              <h3>{item.title}</h3>
              {item.note && <p>{item.note}</p>}
              {item.mapUrl && (
                <a
                  className="schedule-map-link"
                  href={item.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  查看地圖 →
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
