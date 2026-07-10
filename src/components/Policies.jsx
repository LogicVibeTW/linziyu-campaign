import { policies } from "../data/content";

export default function Policies() {
  return (
    <section className="section alt" id="policies">
      <div className="section-inner">
        <div className="section-head reveal">
          <div className="section-label">核心政見</div>
          <h2>政見整理中</h2>
          <p>核心政策細項將陸續公布，敬請期待。</p>
        </div>
        <div className="feature-grid">
          {policies.map((policy) => (
            <div className="feature reveal" key={policy.id}>
              <div className="feature-icon">{policy.id}</div>
              <div>
                <h3>{policy.title}</h3>
                <p>{policy.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
