import { useState } from "react";
import { contactList, privacyPolicy } from "../data/content";

export default function Contact() {
  const [showPolicy, setShowPolicy] = useState(false);

  return (
    <section className="section" id="contact">
      <div className="section-head reveal">
        <div className="section-label">聯絡</div>
        <h2>與我們聯繫</h2>
        <p>聯絡方式尚未全面公布，先提供服務處資訊與電話。</p>
      </div>
      <div className="policy-list">
        {contactList.map((item) => (
          <div className="policy-item reveal" key={item.title}>
            <div className="policy-title">{item.title}</div>
            <div className="policy-link">
              {item.href ? (
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.value}
                </a>
              ) : (
                item.value
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="legal-note reveal">
        <div className="legal-title">聲明與隱私</div>
        <div className="legal-text">
          本網站蒐集之個人資料（如志工報名表單）僅用於競選團隊聯繫用途，並使用 Google
          表單、Facebook、LINE、Vercel Analytics 等第三方服務。
        </div>
        <button
          type="button"
          className="legal-toggle"
          onClick={() => setShowPolicy((v) => !v)}
        >
          {showPolicy ? "收合完整隱私權政策 ▲" : "查看完整隱私權政策 ▼"}
        </button>

        {showPolicy && (
          <div className="legal-full">
            {privacyPolicy.sections.map((section) => (
              <div className="legal-section" key={section.title}>
                <div className="legal-section-title">{section.title}</div>
                <p>{section.body}</p>
              </div>
            ))}
            <div className="legal-updated">最後更新：{privacyPolicy.updated}</div>
          </div>
        )}
      </div>
    </section>
  );
}
