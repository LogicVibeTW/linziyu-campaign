import { useEffect, useRef } from "react";
import { nav, site } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";

export default function Header() {
  const ids = nav.map((item) => item.href.replace("#", ""));
  const activeId = useActiveSection(ids);
  const navRef = useRef(null);

  useEffect(() => {
    // 手機版導覽列可左右滑動，但使用者不一定看得出來，
    // 進場時輕輕滑動一下再彈回來，暗示這個區塊是可以滑的。
    const el = navRef.current;
    if (!el || window.innerWidth > 900) return;

    const timer = setTimeout(() => {
      el.scrollTo({ left: 56, behavior: "smooth" });
      setTimeout(() => {
        el.scrollTo({ left: 0, behavior: "smooth" });
      }, 450);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <nav className="nav" ref={navRef}>
          {nav.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = id === activeId;
            return (
              <a
                key={item.href}
                href={item.href}
                className={isActive ? "is-active" : ""}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
      <a className="nav-cta" href={site.lineUrl} target="_blank" rel="noreferrer">
        加入我們
      </a>
    </header>
  );
}
