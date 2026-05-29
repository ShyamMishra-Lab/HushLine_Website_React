import { features } from "../../../data/features.js";

export function FeatureBand() {
  return (
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
  );
}
