export default function PreviewSwitcher({
  liveMode,
  setLiveMode,
  heroMode,
  setHeroMode,
  introEnabled,
  setIntroEnabled,
}) {
  return (
    <div className="preview-switcher">
      <div className="preview-switcher-title">🔧 預覽比較面板（決定版本後會移除）</div>

      <div className="preview-switcher-group">
        <div className="preview-switcher-label">直播區塊</div>
        <button
          type="button"
          className={liveMode === "auto-mute" ? "is-active" : ""}
          onClick={() => setLiveMode("auto-mute")}
        >
          現況：靜音自動播放
        </button>
        <button
          type="button"
          className={liveMode === "click-sound" ? "is-active" : ""}
          onClick={() => setLiveMode("click-sound")}
        >
          A：點擊播放＋有聲音
        </button>
      </div>

      <div className="preview-switcher-group">
        <div className="preview-switcher-label">首頁 Hero 視覺</div>
        <button
          type="button"
          className={heroMode === "photo" ? "is-active" : ""}
          onClick={() => setHeroMode("photo")}
        >
          現況：候選人照片
        </button>
        <button
          type="button"
          className={heroMode === "video-above" ? "is-active" : ""}
          onClick={() => setHeroMode("video-above")}
        >
          B：短影音＋照片並存
        </button>
        <button
          type="button"
          className={heroMode === "video-replace" ? "is-active" : ""}
          onClick={() => setHeroMode("video-replace")}
        >
          C：短影音取代照片
        </button>
      </div>
      <div className="preview-switcher-group">
        <div className="preview-switcher-label">進站片頭影片</div>
        <button
          type="button"
          className={!introEnabled ? "is-active" : ""}
          onClick={() => setIntroEnabled(false)}
        >
          現況：無片頭
        </button>
        <button
          type="button"
          className={introEnabled ? "is-active" : ""}
          onClick={() => setIntroEnabled(true)}
        >
          D：進站先看短影音（可關閉）
        </button>
      </div>
    </div>
  );
}
