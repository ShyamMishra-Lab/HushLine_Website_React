import { ArrowRight, Download, ExternalLink, X } from "lucide-react";
import { useEffect } from "react";
import { versions } from "../data/versions.js";
import { useDownloadModal } from "../context/DownloadModalContext.jsx";

export function DownloadModal() {
  const { open, closeModal } = useDownloadModal();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeModal]);

  if (!open) return null;

  return (
    <div
      className="download-backdrop"
      onClick={closeModal}
      role="presentation"
    >
      <div
        className="download-dialog-inner"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Download Hushline"
      >
        <div className="download-dialog-header">
          <div>
            <p className="eyebrow">Download Hushline</p>
            <h2>Choose your version</h2>
          </div>
          <button
            className="dialog-close"
            onClick={closeModal}
            aria-label="Close download dialog"
          >
            <X />
          </button>
        </div>

        <div className="version-list">
          {versions.map((v) => (
            <div className="version-card" key={v.id}>
              <div className="version-card-header">
                <div className="version-title-row">
                  <strong className="version-tag">{v.tag}</strong>
                  <span className={`version-badge ${v.badge.toLowerCase()}`}>
                    {v.badge}
                  </span>
                  {v.isLatest && (
                    <span className="version-badge latest">Latest</span>
                  )}
                </div>
                <time className="version-date" dateTime={v.date}>
                  {new Date(v.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>

              <p className="version-description">{v.description}</p>

              <ul className="version-highlights">
                {v.highlights.map((item) => (
                  <li key={item}>
                    <ArrowRight />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="version-actions">
                <a
                  className="button primary"
                  href={v.installerUrl}
                  onClick={closeModal}
                >
                  <Download />
                  Download {v.tag}
                </a>
                <a
                  className="button ghost"
                  href={v.releaseNotesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink />
                  Release notes
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="dialog-footnote">
          Hushline runs on Windows 10 and Windows 11.{" "}
          <a
            href="https://github.com/example/hushline/releases"
            target="_blank"
            rel="noopener noreferrer"
          >
            All releases on GitHub
          </a>
        </p>
      </div>
    </div>
  );
}
