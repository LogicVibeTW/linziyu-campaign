import { useEffect, useState } from "react";

// 2026 年九合一選舉投票日（中選會正式公告：2026/11/28 星期六）
const ELECTION_DATE = new Date("2026-11-28T00:00:00+08:00");

function getDaysLeft() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const election = new Date(
    ELECTION_DATE.getFullYear(),
    ELECTION_DATE.getMonth(),
    ELECTION_DATE.getDate()
  );
  const diffMs = election - today;
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

export default function CountdownBadge() {
  const [daysLeft, setDaysLeft] = useState(getDaysLeft);

  useEffect(() => {
    // 每小時重新計算一次即可（避免使用者長時間開著頁面，天數卻沒跟著跳）
    const timer = setInterval(() => setDaysLeft(getDaysLeft()), 60 * 60 * 1000);
    return () => clearInterval(timer);
  }, []);

  // 投票日當天或已過就不再顯示
  if (daysLeft <= 0) return null;

  return (
    <div className="countdown-badge" role="status" aria-live="off">
      <span className="countdown-badge-days">投票倒數 {daysLeft} 天</span>
    </div>
  );
}
