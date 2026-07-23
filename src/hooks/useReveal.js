import { useEffect } from "react";

/**
 * 讓所有帶有 .reveal class 的元素在捲動進入畫面時淡入。
 * 除了掃描頁面載入當下既有的元素，也持續監看之後動態新增的元素
 * （例如：等 Google 試算表資料回來才出現的區塊），避免這些元素
 * 因為「初次掃描時還不存在」而永遠停在透明狀態。
 */
export function useReveal(deps = []) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    function observeWithin(root) {
      if (!root || typeof root.querySelectorAll !== "function") return;

      if (
        root.classList &&
        root.classList.contains("reveal") &&
        !root.classList.contains("is-visible")
      ) {
        observer.observe(root);
      }

      root.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => {
        observer.observe(el);
      });
    }

    // 頁面載入當下，先掃描一次既有的元素
    observeWithin(document.body);

    // 持續監看之後動態新增的節點（例如非同步資料載入完成後才出現的區塊）
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            observeWithin(node);
          }
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
