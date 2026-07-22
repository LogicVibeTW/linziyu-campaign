import { useEffect, useState } from "react";
import { site } from "../data/content";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShowTop(window.scrollY > 480);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="floating-actions" aria-hidden={false}>
      <a
        className="floating-line"
        href={site.lineUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="加入 LINE 好友"
      >
        加入 LINE
      </a>
      {showTop && (
        <button
          className="floating-top"
          onClick={scrollToTop}
          aria-label="回到頂部"
          type="button"
        >
          ↑
        </button>
      )}
    </div>
  );
}
