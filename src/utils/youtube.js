// 將各種常見的 YouTube 網址格式，統一轉換成可嵌入 iframe 的 embed 格式。
// 支援：
//  - https://www.youtube.com/watch?v=VIDEO_ID
//  - https://youtu.be/VIDEO_ID
//  - https://www.youtube.com/embed/VIDEO_ID（已經是正確格式，原樣返回）
//  - https://www.youtube.com/live/VIDEO_ID

export function toYoutubeEmbedUrl(url) {
  if (!url) return "";
  const trimmed = url.trim();
  if (!trimmed) return "";

  try {
    const u = new URL(trimmed);

    // 已經是 embed 格式
    if (u.pathname.startsWith("/embed/")) {
      return trimmed;
    }

    // youtu.be/VIDEO_ID
    if (u.hostname === "youtu.be") {
      const id = u.pathname.replace("/", "");
      return id ? `https://www.youtube.com/embed/${id}` : trimmed;
    }

    // www.youtube.com/watch?v=VIDEO_ID
    if (u.searchParams.get("v")) {
      return `https://www.youtube.com/embed/${u.searchParams.get("v")}`;
    }

    // www.youtube.com/live/VIDEO_ID
    if (u.pathname.startsWith("/live/")) {
      const id = u.pathname.replace("/live/", "");
      return id ? `https://www.youtube.com/embed/${id}` : trimmed;
    }

    // 無法辨識格式，原樣返回，讓瀏覽器自己嘗試
    return trimmed;
  } catch {
    return trimmed;
  }
}
