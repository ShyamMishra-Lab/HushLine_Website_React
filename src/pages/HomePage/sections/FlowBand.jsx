import { steps } from "../../../data/features.js";

export function FlowBand() {
  return (
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
  );
}
