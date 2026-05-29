import { ArrowRight, Download, Github } from "lucide-react";
import { SiteFooter } from "../components/SiteFooter.jsx";
import { SiteHeader } from "../components/SiteHeader.jsx";
import { outboundLinks } from "../links.js";

export function DocsPage() {
  return (
    <div className="site-shell docs-shell">
      <SiteHeader />
      <main className="docs-layout">
        <aside className="docs-index" aria-label="Documentation sections">
          <p className="eyebrow">Documentation</p>
          <a href="#install">Install</a>
          <a href="#usage">Usage</a>
          <a href="#permissions">Permissions</a>
          <a href="#troubleshooting">Troubleshooting</a>
        </aside>
        <article className="docs-article">
          <header>
            <p className="eyebrow">Getting started</p>
            <h1>Bring ambient control to your Windows headset.</h1>
            <p>
              Hushline keeps media behavior close to the sound around you:
              pause when speaking starts, hold when presence changes, and return
              to playback when the moment clears.
            </p>
            <div className="docs-actions">
              <a className="button primary" href={outboundLinks.installer}>
                <Download />
                Download installer
              </a>
              <a className="button ghost" href={outboundLinks.repository}>
                <Github />
                Source repo
              </a>
            </div>
          </header>

          <section id="install">
            <h2>Install on Windows</h2>
            <ol>
              <li>Download the latest Hushline installer.</li>
              <li>Run setup and allow Windows to finish the installation.</li>
              <li>Select the headset and media apps you want Hushline to follow.</li>
            </ol>
          </section>

          <section id="usage">
            <h2>Use the ambient controller</h2>
            <div className="docs-columns">
              <p>
                The compact media surface shows whether playback is running,
                held for conversation, or waiting for you to return.
              </p>
              <p>
                Start with automatic pause and presence behavior enabled, then
                tune the assistant until it matches your desk and calls.
              </p>
            </div>
          </section>

          <section id="permissions">
            <h2>Permissions and privacy</h2>
            <p>
              Voice-aware media control needs microphone access to detect when
              speaking changes the listening context. Presence features may use
              supported device or desktop signals. Keep those permissions off
              when the behavior does not fit your setup.
            </p>
            <p>
              Because Hushline is open source, the behavior and defaults should
              remain inspectable as the app evolves.
            </p>
          </section>

          <section id="troubleshooting">
            <h2>Troubleshooting starters</h2>
            <ul>
              <li>Confirm Windows microphone permission is available to Hushline.</li>
              <li>Check the correct headset and media session are selected.</li>
              <li>Review releases for device-specific fixes and known issues.</li>
            </ul>
            <a className="text-link" href={outboundLinks.releases}>
              Browse releases <ArrowRight />
            </a>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
