// 把試算表 image_url 欄位的值，轉換成可以直接顯示的圖片網址。
// 支援三種填法：
//   1. 純檔名（例如 "2026-08-13-fude.jpg"）→ 對應到網站內建的
//      /schedule-photos/ 資料夾，這是預設、推薦的做法。
//   2. 完整外部網址（http/https 開頭）→ 原樣使用，保留彈性
//      （例如未來想改用其他圖床）。
//   3. Google Drive 分享連結 → 嘗試自動轉換（僅供備用，
//      Google 官方已不保證這種用法穩定，建議優先使用方式一）。

export function toDisplayableImageUrl(rawValue) {
  if (!rawValue) return "";
  const value = rawValue.trim();
  if (!value) return "";

  // 完整網址：直接使用
  if (value.startsWith("http://") || value.startsWith("https://")) {
    if (value.includes("drive.google.com")) {
      return convertDriveShareLink(value);
    }
    return value;
  }

  // 純檔名：對應到網站內建的 /schedule-photos/ 資料夾
  const filename = value.startsWith("/") ? value.slice(1) : value;
  return `/schedule-photos/${filename}`;
}

function convertDriveShareLink(url) {
  let fileId = null;

  const pathMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (pathMatch) fileId = pathMatch[1];

  if (!fileId) {
    const idMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (idMatch) fileId = idMatch[1];
  }

  if (!fileId) return url;
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
}
