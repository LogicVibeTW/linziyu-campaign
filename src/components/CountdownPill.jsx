import { useDaysToElection } from "../hooks/useDaysToElection";

// 手機版：嵌在導覽列裡的小圓角徽章（電腦版另外用 CountdownBadge 浮動卡片）
export default function CountdownPill() {
  const daysLeft = useDaysToElection();

  if (daysLeft <= 0) return null;

  return (
    <div className="countdown-pill" role="status" aria-live="off">
      <span className="countdown-pill-label">選戰倒數</span>
      <span className="countdown-pill-days">
        {daysLeft}
        <span className="countdown-pill-unit">天</span>
      </span>
    </div>
  );
}
