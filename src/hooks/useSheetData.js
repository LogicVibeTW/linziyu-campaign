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

    async function load() {
      try {
        setLoading(true);
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const text = await res.text();
        const rows = parseCSV(text);
        if (!cancelled) {
          setData(rows);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) setError(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    if (url) load();

    return () => {
      cancelled = true;
    };
  }, [url]);

  return { data, loading, error };
}
