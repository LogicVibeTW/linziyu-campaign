import { useEffect, useState } from "react";
import { parseCSV } from "../utils/csv";

/**
 * 讀取已發布為 CSV 的 Google 試算表資料。
 * @param {string} url - 試算表「發布到網路」產生的 CSV 網址
 */
export function useSheetData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const MAX_RETRIES = 2;
    const RETRY_DELAY_MS = 1000;

    function wait(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function loadWithRetry(attempt = 0) {
      try {
        setLoading(true);
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const text = await res.text();
        const rows = parseCSV(text);
        if (!cancelled) {
          setData(rows);
          setError(null);
          setLoading(false);
        }
      } catch (err) {
        if (cancelled) return;
        // 同時間要抓很多份試算表資料，偶爾會遇到暫時性連線失敗，
        // 先自動重試幾次，而不是馬上顯示錯誤給訪客看
        if (attempt < MAX_RETRIES) {
          await wait(RETRY_DELAY_MS * (attempt + 1));
          if (!cancelled) await loadWithRetry(attempt + 1);
        } else {
          setError(err);
          setLoading(false);
        }
      }
    }

    if (url) loadWithRetry();

    return () => {
      cancelled = true;
    };
  }, [url]);

  return { data, loading, error };
}
