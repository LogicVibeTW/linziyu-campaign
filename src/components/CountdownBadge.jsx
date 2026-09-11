import { useDaysToElection } from "../hooks/useDaysToElection";

// 電腦版：固定在畫面右側、垂直置中的浮動卡片
export default function CountdownBadge() {
  const daysLeft = useDaysToElection();

  // 投票日當天或已過就不再顯示
  if (daysLeft <= 0) return null;

  return (
    <div className="countdown-card" role="status" aria-live="off">
      <div className="countdown-card-date">11.28</div>
      <div className="countdown-card-label">投票日</div>
      <div className="countdown-card-divider"></div>
      <div className="countdown-card-sub">選戰倒數</div>
      <div className="countdown-card-days">
        {daysLeft}
        <span>天</span>
      </div>
    </div>
  );
}
