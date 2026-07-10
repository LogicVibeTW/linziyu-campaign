import { nav, site } from "../data/content";

export default function Header() {
  return (
    <header className="site-header">
      <nav className="nav">
        {nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href={site.lineUrl} target="_blank" rel="noreferrer">
        加入我們
      </a>
    </header>
  );
}
