// 輕量 CSV 解析工具，處理 Google 試算表「發布為 CSV」的輸出格式，
// 正確處理欄位內含逗號、換行、雙引號跳脫等情況。

export function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (char === '"' && next === '"') {
        field += '"';
        i++;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        field += char;
      }
    } else if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (char === "\r") {
      // 忽略，交給 \n 處理換行
    } else {
      field += char;
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  if (rows.length === 0) return [];
  const headers = rows[0].map((h) => h.trim());
  return rows
    .slice(1)
    .filter((r) => r.some((cell) => cell.trim() !== ""))
    .map((r) => {
      const obj = {};
      headers.forEach((header, index) => {
        obj[header] = (r[index] ?? "").trim();
      });
      return obj;
    });
}
