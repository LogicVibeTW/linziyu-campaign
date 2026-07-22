import { useState, useRef, useEffect } from "react";
import { site, policyCategories } from "../data/content";

function AccordionItem({ category, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className={`policy-accordion-item reveal ${isOpen ? "is-open" : ""}`}>
      <button
        type="button"
        className="policy-accordion-header"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div>
          <div className="policy-accordion-title">{category.title}</div>
          <div className="policy-accordion-subtitle">{category.subtitle}</div>
        </div>
        <span className="policy-accordion-chevron" aria-hidden="true">
          {isOpen ? "－" : "＋"}
        </span>
      </button>

      <div className="policy-accordion-collapse" style={{ maxHeight }}>
        <div ref={contentRef} className="policy-accordion-body">
          {category.items.map((item, index) => (
            <div className="policy-accordion-row" key={item.title}>
              <div className="policy-accordion-index">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Policies() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="section alt" id="policies">
      <div className="section-inner">
        <div className="section-head reveal">
          <div className="section-label">核心政見</div>
          <h2>優先推動的政見方向</h2>
          <p>點擊分類展開詳細內容，完整政見將陸續補充細節與時程。</p>
        </div>

        <div className="policy-accordion">
          {policyCategories.map((category) => (
            <AccordionItem
              key={category.id}
              category={category}
              isOpen={openId === category.id}
              onToggle={() => setOpenId(openId === category.id ? null : category.id)}
            />
          ))}
        </div>

        <div className="report-strip reveal">
          <div className="report-text">
            <div className="join-label">在地回報</div>
            <h3>你的巷弄日常，由你與我們共同守護</h3>
            <p>若發現任何影響生活品質的狀況，或有希望改善的地方，歡迎拍照上傳。您的每一次回報，都是讓板橋進步的關鍵力量。</p>
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
