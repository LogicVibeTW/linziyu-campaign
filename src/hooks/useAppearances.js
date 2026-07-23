import { useMemo } from "react";
import { useSheetData } from "./useSheetData";
import { site } from "../data/content";
import { toYoutubeEmbedUrl } from "../utils/youtube";

export function useAppearances() {
  const { data, loading, error } = useSheetData(site.appearancesSheetUrl);

  const appearances = useMemo(() => {
    if (!data) return null;
    return data
      .filter((row) => row.program && row.program.trim() !== "")
      .map((row) => ({
        id: row.id || row.program,
        program: row.program,
        date: row.date,
        note: row.note,
        embedUrl: toYoutubeEmbedUrl(row.embed_url),
      }));
  }, [data]);

  return { appearances, loading, error };
}
