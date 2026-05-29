import { Download } from "lucide-react";
import { Link } from "react-router-dom";
import { outboundLinks } from "../links.js";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Hushline home">
        <span className="brand-mark" aria-hidden="true" />
        Hushline
      </Link>
      <nav aria-label="Primary navigation">
        <Link to="/docs">Docs</Link>
        <a href={outboundLinks.repository}>Source</a>
        <a className="nav-download" href={outboundLinks.installer}>
          <Download />
          Download
        </a>
      </nav>
    </header>
  );
}
