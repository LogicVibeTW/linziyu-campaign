import { useEffect, useState } from "react";

/**
 * 追蹤目前捲動到哪個區塊，回傳該區塊的 id。
 * 用於導覽列自動反白目前所在位置。
 */
export function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids[0] ?? null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        // 讓「目前所在區塊」的判定發生在固定導覽列下方一點的位置，
        // 而不是整個區塊完全進入畫面才算數。
        rootMargin: "-100px 0px -70% 0px",
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(",")]);

  return activeId;
}
