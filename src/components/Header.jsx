import { nav, site } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";

export default function Header() {
  const ids = nav.map((item) => item.href.replace("#", ""));
  const activeId = useActiveSection(ids);

  return (
    <header className="site-header">
      <nav className="nav">
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
      <a className="nav-cta" href={site.lineUrl} target="_blank" rel="noreferrer">
        加入我們
      </a>
    </header>
  );
}
