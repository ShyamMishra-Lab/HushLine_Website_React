import { Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useDownloadModal } from "../context/DownloadModalContext.jsx";
import { outboundLinks } from "../links.js";

export function SiteHeader() {
  const { openModal } = useDownloadModal();

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Hushline home">
        <span className="brand-mark" aria-hidden="true" />
        Hushline
      </Link>
      <nav aria-label="Primary navigation">
        <Link to="/docs">Docs</Link>
        <a href={outboundLinks.repository}>Source</a>
        <button className="nav-download" onClick={openModal}>
          <Download />
          Download
        </button>
      </nav>
    </header>
  );
}
