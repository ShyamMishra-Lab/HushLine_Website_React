import { Github, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { outboundLinks } from "../../../links.js";

export function CommunityBand() {
  return (
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
  );
}
