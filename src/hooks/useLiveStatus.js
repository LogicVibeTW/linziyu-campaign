import { useMemo } from "react";
import { useSheetData } from "./useSheetData";
import { site } from "../data/content";
import { toYoutubeEmbedUrl } from "../utils/youtube";

export function useLiveStatus() {
  const { data, loading, error } = useSheetData(site.liveSheetUrl);

  const live = useMemo(() => {
    if (!data) return null;
    const row = data.find((r) => r.live_url && r.live_url.trim() !== "");
    if (!row) return { isLive: false };
    return {
      isLive: true,
      embedUrl: toYoutubeEmbedUrl(row.live_url),
      note: row.note,
    };
  }, [data]);

  return { live, loading, error };
}
