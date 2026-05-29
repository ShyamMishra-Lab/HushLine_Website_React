import { BookOpen, Download, Github, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import { ControllerDemo } from "../../../components/ControllerDemo.jsx";
import { useDownloadModal } from "../../../context/DownloadModalContext.jsx";

export function HeroSection() {
  const { openModal } = useDownloadModal();

  return (
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
            <button className="button primary" onClick={openModal}>
              <Download />
              Download for Windows
            </button>
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
  );
}
