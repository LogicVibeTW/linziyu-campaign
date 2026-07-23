export const site = {
  name: "林子宇",
  party: "台灣民眾黨",
  district: "板橋",
  slogan: "板橋林子宇 民眾及時雨",
  lead: "以理性溝通與專業治理，讓政策更透明、服務更即時、板橋更值得期待。",
  tags: ["#板橋", "#務實治理", "#民眾及時雨"],
  lineUrl: "https://line.me/R/ti/p/@384xzlnn?utm_source=website&utm_medium=cta",
  donateUrl: "https://donate.tpp.org.tw/support/LoUdcTJR#action",
  facebookUrl: "https://www.facebook.com/Judie.CY.Lin/?locale=zh_TW",
  facebookUtm: "https://www.facebook.com/Judie.CY.Lin/?locale=zh_TW&utm_source=website&utm_medium=social_card",
  instagramUrl: "https://www.instagram.com/judielin.1995/?utm_source=website&utm_medium=social_card",
  youtubeUrl: "https://www.youtube.com/@Judie1995?sub_confirmation=1&utm_source=website&utm_medium=social_card",
  youtubeChannelId: "UCYwrW6fF0ZJPaRpJEFfq96w",
  phone: "02-2250-8050",
  phoneHref: "tel:0222508050",
  address: "220 新北市板橋區雙十路一段 6 號",
  addressHref: "https://www.google.com/maps/search/?api=1&query=220+%E6%96%B0%E5%8C%97%E5%B8%82%E6%9D%BF%E6%A9%8B%E5%8D%80%E9%9B%99%E5%8D%81%E8%B7%AF%E4%B8%80%E6%AE%B5+6+%E8%99%9F",
  volunteerFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSe3Z3mSSenV6Ic3uBZLlmBrm2fXevVU27y7wg6MRkVK4foRfA/viewform?embedded=true",
  feedbackFormUrl: "https://forms.gle/BkXe2N9DrH5TaVfa8",
  reportFormUrl: "https://forms.gle/FN2fdpPKhmjJse7V9",
  policiesSheetUrl:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZwGyQTZvDSGmHScKFtoIQOLeZOaUTEFcpSc0KyH295YbZVD0m7Lejd5W26hWuK8JH5744KNDb6O2P/pub?gid=0&single=true&output=csv",
  appearancesSheetUrl:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZwGyQTZvDSGmHScKFtoIQOLeZOaUTEFcpSc0KyH295YbZVD0m7Lejd5W26hWuK8JH5744KNDb6O2P/pub?gid=1470007051&single=true&output=csv",
  liveSheetUrl:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZwGyQTZvDSGmHScKFtoIQOLeZOaUTEFcpSc0KyH295YbZVD0m7Lejd5W26hWuK8JH5744KNDb6O2P/pub?gid=64483819&single=true&output=csv",
};

export const nav = [
  { label: "關於", href: "#about" },
  { label: "核心政見", href: "#policies" },
  { label: "加入我們", href: "#join" },
  { label: "最新", href: "#updates" },
  { label: "直播", href: "#live" },
  { label: "通告", href: "#appearances" },
  { label: "媒體", href: "#media" },
  { label: "聯絡", href: "#contact" },
];

export const meta = [
  { title: "選區", value: "板橋" },
  { title: "關注議題", value: "交通 / 居住 / 青年" },
  { title: "核心主張", value: "民眾及時雨" },
];

export const aboutCards = [
  {
    title: "公民參與",
    text: "建立更開放的溝通機制，讓政策不只被討論，也能被落實。",
  },
  {
    title: "透明治理",
    text: "公開決策流程，強化預算與成果的可視化。",
  },
  {
    title: "青年與家庭",
    text: "用可負擔的居住與就業支持，讓年輕人留在城市。",
  },
];

export const education = [
  "美國南加州大學公共政策管理學碩士",
  "國立成功大學台灣文學系學士",
  "國立蘭陽女中 語文資優班",
];

export const experience = [
  "台灣民眾黨國際部主任",
  "台灣民眾黨發言人",
  "2024 年不分區立法委員被提名人",
  "台北市政府市長室聘用研究員",
];

// 政見資料已改由 Google 試算表驅動，請至 Policies 分頁編輯。
// 參見 src/hooks/usePolicies.js

export const joinActions = [
  {
    title: "加入官方 LINE",
    text: "第一時間收到志工任務、活動通知與最新政見進度，隨時掌握子宇的最新消息。",
    cta: "加入 LINE 好友",
    href: site.lineUrl,
    variant: "line",
  },
  {
    title: "想讓子宇聽見你的聲音？",
    text: "分享你關心的議題與需求，讓政策更貼近現場。",
    cta: "填寫建議",
    href: site.feedbackFormUrl,
    variant: "feedback",
  },
  {
    title: "支持方式",
    text: "支持選戰、贊助文宣與活動經費，可透過民眾黨政治獻金專戶捐款。",
    cta: "前往政治獻金捐款",
    href: site.donateUrl,
    variant: "donate",
  },
];

export const news = [
  {
    date: "2026 / 03 / 02",
    title: "新北歡唱巴士",
    text: "活動紀錄與現場互動摘要，詳情以社群公告為準。",
  },
  {
    date: "2026 / 02 / 28",
    title: "2026 一日北高",
    text: "行程紀錄與沿途心得，詳情以社群公告為準。",
  },
  {
    date: "2026 / 待補",
    title: "掃市場拜票行程",
    text: "市場拜訪與民意交流重點，詳情以社群公告為準。",
  },
];

export const contactList = [
  { title: "LINE 官方帳號", value: "@384xzlnn（點擊加好友）", href: site.lineUrl },
  { title: "官方信箱", value: "尚未公布", href: null },
  { title: "聯絡電話", value: site.phone, href: site.phoneHref },
  { title: "服務處地址", value: site.address, href: site.addressHref },
];

export const privacyPolicy = {
  updated: "2026 年 7 月",
  sections: [
    {
      title: "一、適用範圍",
      body: "本隱私權政策適用於「林子宇競選網站」（以下稱本網站）。當您瀏覽本網站、填寫志工報名表單，或透過本網站連結至 LINE、Facebook、Instagram、YouTube 等第三方服務時，即適用本政策所載內容。",
    },
    {
      title: "二、蒐集的個人資料與用途",
      body: "本網站透過「志工報名表單」蒐集您主動提供的姓名、聯絡電話、Email（選填）、可協助項目、可配合時段及留言內容，僅用於志工任務分派、活動通知與競選團隊聯繫，不會轉作其他用途，亦不會出售或提供予無關第三方。",
    },
    {
      title: "三、第三方服務與 Cookie",
      body: "本網站使用以下第三方服務，各自可能依其自身政策蒐集資料：(1) Google 表單／試算表：用於接收志工報名資料，受 Google 隱私權政策規範；(2) Facebook 粉專嵌入元件：載入時可能由 Meta 設定 Cookie，受 Meta 資料政策規範；(3) LINE 官方帳號：點擊後將導向 LINE 平台，加好友後的互動資料由 LINE 平台處理；(4) Vercel Web Analytics：用於統計匿名瀏覽數據（如造訪頁數、裝置類型），不使用 Cookie、不蒐集可識別個人身分之資訊；(5) Google Fonts：載入網頁字體時，您的瀏覽器會與 Google 伺服器連線，可能傳輸 IP 位址等基本連線資訊。",
    },
    {
      title: "四、資料保存期間",
      body: "志工報名資料將保存至本次選舉活動結束後，或您主動要求刪除為止，屆時將依法刪除或去識別化處理。",
    },
    {
      title: "五、您的權利",
      body: "依據《個人資料保護法》，您就本網站蒐集之個人資料，得行使查詢、請求閱覽、請求製給複製本、請求補充或更正、請求停止蒐集處理或利用，以及請求刪除等權利。如需行使前述權利，請透過本頁面提供之電話或 LINE 官方帳號與我們聯繫。",
    },
    {
      title: "六、政策更新",
      body: "本政策將依法規或服務內容變動適時更新，最新版本將公告於本頁面。",
    },
  ],
};
