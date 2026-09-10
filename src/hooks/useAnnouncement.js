import { useMemo } from "react";
import { useSheetData } from "./useSheetData";
import { site } from "../data/content";
import { toDisplayableImageUrl } from "../utils/scheduleImage";

function isTruthy(value) {
  if (!value) return false;
  const v = value.trim().toUpperCase();
  return v === "TRUE" || v === "1" || v === "是" || v === "Y";
}

function isNotExpired(expireDate) {
  if (!expireDate || !expireDate.trim()) return true; // 沒填過期日 = 一直顯示
  const expire = new Date(expireDate.trim());
  if (isNaN(expire.getTime())) return true; // 日期格式看不懂就不擋，避免誤判
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  expire.setHours(23, 59, 59, 999); // 當天結束前都算有效
  return expire >= today;
}

export function useAnnouncement() {
  const { data, loading, error } = useSheetData(site.announcementSheetUrl);

  const announcement = useMemo(() => {
    if (!data) return null;
    const match = data.find(
      (row) =>
        isTruthy(row.active) &&
        row.title &&
        row.title.trim() !== "" &&
        isNotExpired(row.expire_date)
    );
    if (!match) return null;
    const repeatMinutes = Number(match.repeat_minutes);
    return {
      title: match.title,
      detail: match.detail,
      imageUrl: toDisplayableImageUrl(match.image_url),
      linkUrl: match.link_url,
      repeatMinutes:
        Number.isFinite(repeatMinutes) && repeatMinutes > 0 ? repeatMinutes : null,
      // 用標題+過期日組成唯一 key，內容換了 key 就會變，之前關閉過的紀錄會失效、重新顯示
      dismissKey: `announcement-dismissed:${match.title}:${match.expire_date || ""}`,
    };
  }, [data]);

  return { announcement, loading, error };
}
