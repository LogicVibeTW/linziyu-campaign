import {
  dashboardMeta,
  dashboardKpis,
  statusBreakdown,
  topicBreakdown,
  districtBreakdown,
  ageBreakdown,
} from "../data/dashboardData";

function BarList({ title, data }) {
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div className="dash-card">
      <div className="dash-card-title">{title}</div>
      <div className="dash-bars">
        {data.map((item) => (
          <div className="dash-bar-row" key={item.label}>
            <div className="dash-bar-label">{item.label}</div>
            <div className="dash-bar-track">
              <div
                className="dash-bar-fill"
                style={{ width: `${(item.value / max) * 100}%` }}
                aria-hidden="true"
              ></div>
            </div>
            <div className="dash-bar-value">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Dashboard() {
  const total = statusBreakdown.reduce((sum, s) => sum + s.value, 0);
  let cumulativePercent = 0;
  const gradientStops = statusBreakdown
    .map((s) => {
      const start = cumulativePercent;
      cumulativePercent += (s.value / total) * 100;
      return `${s.color} ${start}% ${cumulativePercent}%`;
    })
    .join(", ");

  return (
    <section className="section dash-section" id="dashboard">
      <div className="section-inner">
        {dashboardMeta.isSample && (
          <div className="dash-sample-banner">
            ⚠️ 示意畫面 — 目前為假資料，非正式統計數據
          </div>
        )}
        <div className="section-head reveal">
          <div className="dash-label">民意儀表板</div>
          <h2 className="dash-heading">板橋民眾意見總覽</h2>
          <p className="dash-sub">
            彙整「在地回報」與「意見建議」表單的統計結果，只呈現聚合後的比例與數量，不顯示個別意見原文。
          </p>
          <div className="dash-updated">資料狀態：{dashboardMeta.lastUpdated}</div>
        </div>

        <div className="dash-kpi-row reveal">
          {dashboardKpis.map((kpi) => (
            <div className="dash-kpi-card" key={kpi.label}>
              <div className="dash-kpi-value">{kpi.value}</div>
              <div className="dash-kpi-label">{kpi.label}</div>
            </div>
          ))}
        </div>

        <div className="dash-grid reveal">
          <div className="dash-card dash-donut-card">
            <div className="dash-card-title">處理進度</div>
            <div className="dash-donut-wrap">
              <div
                className="dash-donut"
                style={{ background: `conic-gradient(${gradientStops})` }}
                aria-hidden="true"
              >
                <div className="dash-donut-center">
                  <div className="dash-donut-total">{total}</div>
                  <div className="dash-donut-total-label">總件數</div>
                </div>
              </div>
              <div className="dash-legend">
                {statusBreakdown.map((s) => (
                  <div className="dash-legend-item" key={s.label}>
                    <span
                      className="dash-legend-dot"
                      style={{ background: s.color }}
                    ></span>
                    {s.label}（{s.value}）
                  </div>
                ))}
              </div>
            </div>
          </div>

          <BarList title="關心議題分布" data={topicBreakdown} />
          <BarList title="地區分布" data={districtBreakdown} />
          <BarList title="年齡層分布" data={ageBreakdown} />
        </div>
      </div>
    </section>
  );
}
