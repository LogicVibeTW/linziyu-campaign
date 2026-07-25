import { useEffect, useState } from "react";
import { site } from "../data/content";
import { getYoutubeVideoId } from "../utils/youtube";

const STORAGE_KEY = "linziyu-intro-seen-v1";

export default function IntroSplash({ enabled, previewMode }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setShow(false);
      return;
    }

    // 預覽比較模式：每次切換都顯示，方便測試。
    // 正式上線後（previewMode = false）：只在瀏覽器沒看過時顯示一次。
    if (previewMode) {
      setShow(true);
      return;
    }

    const seen = window.localStorage.getItem(STORAGE_KEY);
    if (!seen) {
      setShow(true);
    }
  }, [enabled, previewMode]);

  function close() {
    setShow(false);
    if (!previewMode) {
      window.localStorage.setItem(STORAGE_KEY, "1");
    }
  }

  if (!show) return null;

  const id = getYoutubeVideoId(site.shortVideoUrl);

  return (
    <div className="intro-splash">
      <button
        type="button"
        className="intro-splash-close"
        onClick={close}
        aria-label="關閉影片"
      >
        ✕
      </button>
      <div className="intro-splash-video">
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&playsinline=1&controls=1&rel=0`}
          title="開場短影音"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
