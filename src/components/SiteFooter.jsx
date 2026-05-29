import { Link } from "react-router-dom";
import { outboundLinks } from "../links.js";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="brand" to="/">
          <span className="brand-mark" aria-hidden="true" />
          Hushline
        </Link>
        <p>Ambient media control that respects the desktop around it.</p>
      </div>
      <div className="footer-links">
        <Link to="/docs">Docs</Link>
        <a href={outboundLinks.repository}>Source</a>
        <a href={outboundLinks.releases}>Releases</a>
        <a href={outboundLinks.installer}>Download</a>
      </div>
    </footer>
  );
}
