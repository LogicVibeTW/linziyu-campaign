import { useEffect, useState } from "react";
import { useAnnouncement } from "../hooks/useAnnouncement";

export default function Announcement() {
  const { announcement } = useAnnouncement();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!announcement) {
      setVisible(false);
      return;
    }
    try {
      const dismissedAt = localStorage.getItem(announcement.dismissKey);
      if (!dismissedAt) {
        setVisible(true);
        return;
      }
      // 沒設定 repeatMinutes：關過一次就不再顯示（原本的行為）
      if (!announcement.repeatMinutes) {
        setVisible(false);
        return;
      }
      // 設定了 repeatMinutes：經過指定分鐘數後，重新顯示
      const elapsedMinutes = (Date.now() - Number(dismissedAt)) / (1000 * 60);
      setVisible(elapsedMinutes >= announcement.repeatMinutes);
    } catch {
      // localStorage 不可用（例如無痕模式部分情況），就照樣顯示，不擋內容
      setVisible(true);
    }
  }, [announcement]);

  if (!announcement || !visible) return null;

  function handleClose() {
    try {
      localStorage.setItem(announcement.dismissKey, String(Date.now()));
    } catch {
      // 存不了就算了，不影響關閉這個動作本身
    }
    setVisible(false);
  }

  return (
    <div
      className="announcement-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={announcement.title}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="announcement-card">
        {announcement.imageUrl && (
          <img
            className="announcement-image"
            src={announcement.imageUrl}
            alt={announcement.title}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        )}
        <div className="announcement-body">
          <h3>{announcement.title}</h3>
          {announcement.detail && <p>{announcement.detail}</p>}
          <div className="announcement-actions">
            {announcement.linkUrl && (
              <a
                className="btn btn-line"
                href={announcement.linkUrl}
                target="_blank"
                rel="noreferrer"
              >
                前往報名
              </a>
            )}
            <button
              type="button"
              className="announcement-close"
              onClick={handleClose}
              aria-label="關閉公告"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
