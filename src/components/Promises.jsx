import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { promises } from "../data/content";

export default function Promises() {
  const [active, setActive] = useState(null);
  const triggerRef = useRef(null);
  const closeRef = useRef(null);

  function open(item, el) {
    triggerRef.current = el;
    setActive(item);
  }

  function close() {
    setActive(null);
    // 關閉後把焦點還給原本點的按鈕，鍵盤與螢幕閱讀器使用者才不會迷路
    if (triggerRef.current) triggerRef.current.focus();
  }

  useEffect(() => {
    if (!active) return;
    closeRef.current?.focus();
    function onKey(e) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <section className="section" id="promises">
      <div className="section-inner">
        <div className="section-head reveal">
          <div className="section-label">承諾書</div>
          <h2>林子宇的承諾</h2>
          <p>子宇簽署過的公開承諾書，立場與簽署日期都留有紀錄，歡迎居民查閱。</p>
        </div>

        <div className="promise-grid">
          {promises.map((item) => (
            <article className="promise-card reveal" key={item.id}>
              <button
                type="button"
                className="promise-thumb"
                onClick={(e) => open(item, e.currentTarget)}
                aria-label={`放大查看「${item.title}」簽署文件`}
              >
                <img src={item.image} alt={item.imageAlt} loading="lazy" decoding="async" />
              </button>

              <div className="promise-body">
                <div className="promise-meta">
                  <span className="promise-tag">{item.tag}</span>
                  <span className="promise-date">簽署日期 {item.date}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <ul className="promise-points">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="btn ghost promise-open"
                  onClick={(e) => open(item, e.currentTarget)}
                >
                  查看簽署文件
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {active &&
        createPortal(
          <div
            className="promise-viewer"
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            onClick={(e) => {
              if (e.target === e.currentTarget) close();
            }}
          >
            <div className="promise-viewer-inner">
              <button
                type="button"
                ref={closeRef}
                className="promise-viewer-close"
                onClick={close}
                aria-label="關閉簽署文件"
              >
                ✕
              </button>
              <img src={active.image} alt={active.imageAlt} />
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
