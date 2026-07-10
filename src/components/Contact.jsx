import { contactList } from "../data/content";

export default function Contact() {
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
        <div className="legal-text">個資與隱私政策連結可放此區，僅占位不提供點擊。</div>
      </div>
    </section>
  );
}
