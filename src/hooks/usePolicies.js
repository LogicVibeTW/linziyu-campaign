import { useMemo } from "react";
import { useSheetData } from "./useSheetData";
import { site } from "../data/content";

export function usePolicies() {
  const { data, loading, error } = useSheetData(site.policiesSheetUrl);

  const categories = useMemo(() => {
    if (!data) return null;

    const map = new Map();
    data.forEach((row) => {
      const id = row.category_id;
      if (!id) return;
      if (!map.has(id)) {
        map.set(id, {
          id,
          title: row.category_title,
          subtitle: row.category_subtitle,
          items: [],
        });
      }
      map.get(id).items.push({
        title: row.item_title,
        text: row.item_text,
        order: Number(row.item_order) || 0,
      });
    });

    const result = Array.from(map.values());
    result.forEach((cat) => cat.items.sort((a, b) => a.order - b.order));
    return result;
  }, [data]);

  return { categories, loading, error };
}
