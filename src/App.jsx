import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Download,
  Github,
  Headphones,
  Mic,
  MonitorPlay,
  Pause,
  Play,
  Radar,
  ShieldCheck,
  Sparkles,
  Users,
  Volume2,
} from "lucide-react";
import { Link, Route, Routes } from "react-router-dom";
import { outboundLinks } from "./links.js";

const demoStates = [
  {
    mode: "playback",
    title: "Lo-fi compiler run",
    note: "Playback riding your focus",
    presence: "At desk",
    voice: "Quiet",
    track: "Media playing",
    progress: 38,
    tint: "cyan",
  },
  {
    mode: "speaking",
    title: "Voice detected",
    note: "Conversation opened nearby",
    presence: "At desk",
    voice: "Speaking",
    track: "Auto pause armed",
    progress: 48,
    tint: "coral",
  },
  {
    mode: "paused",
    title: "Media paused",
    note: "Your headset stopped competing",
    presence: "At desk",
    voice: "Listening",
    track: "Resume after quiet",
    progress: 48,
    tint: "coral",
  },
  {
    mode: "away",
    title: "Presence changed",
    note: "Desk audio stays put",
    presence: "Away",
    voice: "Idle",
    track: "Session held",
    progress: 48,
    tint: "lime",
  },
  {
    mode: "playback",
    title: "Playback resumed",
    note: "Back in your listening lane",
    presence: "At desk",
    voice: "Quiet",
    track: "Media playing",
    progress: 63,
    tint: "cyan",
  },
];

const features = [
  {
    icon: Mic,
    title: "Talk without scrambling",
    body: "Hushline notices when conversation matters and pauses desktop media before it talks over you.",
  },
  {
    icon: Radar,
    title: "Presence-aware listening",
    body: "Keep playback matched to whether you are at the PC, returning to it, or stepping away.",
  },
  {
    icon: MonitorPlay,
    title: "A controller built for PC",
    body: "See track, pause state, voice activity, and quick media actions in one compact desktop surface.",
  },
  {
    icon: Sparkles,
    title: "Ambient by default",
    body: "Make your headset feel less like an output jack and more like a responsive device in your workflow.",
  },
];

const steps = [
  "Your headset and desktop media session stay connected.",
  "Speech and presence signals change the assistant state.",
  "Hushline pauses, holds, or resumes without stealing focus.",
];

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/docs" element={<DocsPage />} />
    </Routes>
  );
}

function SiteHeader() {
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

function HomePage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="hero">
          <img
            className="hero-scene"
            src="/hushline-hero.png"
            alt="A headset beside a desktop listening setup."
          />
          <div className="hero-wash" />
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Open-source ambient audio for Windows</p>
              <h1>Hushline</h1>
              <p className="hero-lede">
                Turn your headset into a smarter PC device that makes room for
                conversation, reacts to presence, and keeps media control close.
              </p>
              <div className="hero-actions">
                <a className="button primary" href={outboundLinks.installer}>
                  <Download />
                  Download for Windows
                </a>
                <Link className="button ghost" to="/docs">
                  <BookOpen />
                  Read docs
                </Link>
              </div>
              <div className="hero-meta" aria-label="Hushline highlights">
                <span>
                  <Headphones />
                  Headset aware
                </span>
                <span>
                  <Github />
                  Built in public
                </span>
              </div>
            </div>
            <ControllerDemo />
          </div>
        </section>

        <section className="feature-band" aria-label="Features">
          <div className="section-intro">
            <p className="eyebrow">Audio that reads the room</p>
            <h2>The useful parts of a smart headset, on the PC you already use.</h2>
          </div>
          <div className="feature-grid">
            {features.map(({ icon: Icon, title, body }) => (
              <article className="feature-card" key={title}>
                <Icon />
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="flow-band">
          <div className="flow-copy">
            <p className="eyebrow">How it works</p>
            <h2>Media behavior follows the moment, not another tray menu.</h2>
          </div>
          <ol className="signal-flow">
            {steps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        <section className="trust-band">
          <div>
            <p className="eyebrow">Trust the ambient layer</p>
            <h2>Close to your microphone. Clear about control.</h2>
          </div>
          <div className="trust-points">
            <article>
              <ShieldCheck />
              <h3>Local-first posture</h3>
              <p>
                The product story starts with understandable signals, explicit
                permissions, and controls that stay visible.
              </p>
            </article>
            <article>
              <Mic />
              <h3>Mic behavior explained</h3>
              <p>
                Documentation calls out why voice detection is used and what to
                check when ambient behavior is not wanted.
              </p>
            </article>
          </div>
        </section>

        <section className="community-band">
          <div className="community-copy">
            <p className="eyebrow">Open source by design</p>
            <h2>Build the assistant layer your headset should have shipped with.</h2>
            <p>
              Trace the behavior, file issues, tune integrations, and help make
              Hushline calmer for the next desktop setup.
            </p>
          </div>
          <div className="community-actions">
            <a className="button primary" href={outboundLinks.repository}>
              <Github />
              View source
            </a>
            <Link className="button ghost" to="/docs">
              <Users />
              Start with docs
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function ControllerDemo() {
  const [stateIndex, setStateIndex] = useState(0);
  const reduceMotion = usePrefersReducedMotion();
  const state = demoStates[stateIndex];

  useEffect(() => {
    if (reduceMotion) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setStateIndex((current) => (current + 1) % demoStates.length);
    }, 2400);

    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  const bars = useMemo(
    () => Array.from({ length: 8 }, (_, index) => index),
    [],
  );

  return (
    <div className={`controller-frame ${state.tint}`} aria-live="polite">
      <div className="island">
        <div className="album-dot">
          {state.mode === "paused" || state.mode === "away" ? (
            <Pause />
          ) : (
            <Play />
          )}
        </div>
        <div className="controller-copy">
          <strong>{state.title}</strong>
          <span>{state.note}</span>
        </div>
        <div className={`voice-bars ${state.mode}`}>
          {bars.map((bar) => (
            <i key={bar} />
          ))}
        </div>
      </div>
      <div className="controller-panel">
        <div className="track-row">
          <span>{state.track}</span>
          <span>{state.progress}%</span>
        </div>
        <div className="progress" aria-hidden="true">
          <span style={{ width: `${state.progress}%` }} />
        </div>
        <div className="signal-row">
          <span className={state.presence === "Away" ? "away" : ""}>
            <Radar />
            {state.presence}
          </span>
          <span>
            <Mic />
            {state.voice}
          </span>
        </div>
      </div>
    </div>
  );
}

function DocsPage() {
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

function SiteFooter() {
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

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return reduced;
}

export default App;
