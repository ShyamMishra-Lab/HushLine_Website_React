import { Mic, ShieldCheck } from "lucide-react";

export function TrustBand() {
  return (
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
  );
}
