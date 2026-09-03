import { useMemo } from "react";
import { useSheetData } from "./useSheetData";
import { site } from "../data/content";
import { toDisplayableImageUrl } from "../utils/scheduleImage";

export function useSchedule() {
  const { data, loading, error } = useSheetData(site.scheduleSheetUrl);

  const schedule = useMemo(() => {
    if (!data) return null;
    return data
      .filter((row) => row.title && row.title.trim() !== "")
      .map((row, index) => ({
        id: `${row.date}-${index}`,
        date: row.date,
        title: row.title,
        note: row.note,
        mapUrl: row.map_url,
        imageUrl: toDisplayableImageUrl(row.image_url),
      }));
  }, [data]);

  return { schedule, loading, error };
}
