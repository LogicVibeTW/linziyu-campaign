import { site } from "../data/content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        © 2026 {site.name}．民眾黨 議員參選人
      </div>
      <div className="footer-tag">Minimal • Flat • Civic</div>
    </footer>
  );
}
