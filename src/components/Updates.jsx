import { useEffect, useRef, useState } from "react";
import { site } from "../data/content";

const FB_SDK_ID = "facebook-jssdk";

export default function Updates() {
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    function parseXfbml() {
      if (window.FB && window.FB.XFBML) {
        window.FB.XFBML.parse(containerRef.current);
      }
      setLoaded(true);
    }

    if (document.getElementById(FB_SDK_ID)) {
      parseXfbml();
      return;
    }

    const script = document.createElement("script");
    script.id = FB_SDK_ID;
    script.src = "https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v19.0";
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    script.onload = parseXfbml;
    document.body.appendChild(script);

    if (!document.getElementById("fb-root")) {
      const root = document.createElement("div");
      root.id = "fb-root";
      document.body.prepend(root);
    }
  }, []);

  return (
    <section className="section alt" id="updates">
      <div className="section-inner">
        <div className="section-head reveal">
          <div className="section-label">最新</div>
          <h2>最新動態與活動紀錄</h2>
          <p>以下同步自 Facebook 粉專，貼文發布後將自動顯示於此，最新資訊請以粉專為準。</p>
        </div>
        <div className="fb-feed-wrap reveal" ref={containerRef}>
          {!loaded && (
            <div className="fb-skeleton" aria-hidden="true">
              <div className="fb-skeleton-header">
                <div className="fb-skeleton-avatar"></div>
                <div className="fb-skeleton-lines">
                  <div className="fb-skeleton-line short"></div>
                  <div className="fb-skeleton-line shorter"></div>
                </div>
              </div>
              <div className="fb-skeleton-body"></div>
            </div>
          )}
          <div
            className="fb-page"
            data-href={site.facebookUrl.split("?")[0]}
            data-tabs="timeline"
            data-width=""
            data-height="620"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote cite={site.facebookUrl} className="fb-xfbml-parse-ignore">
              <a href={site.facebookUrl}>{site.name}</a>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
