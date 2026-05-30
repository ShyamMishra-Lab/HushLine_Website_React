import { Cpu, Mic, Radar, ShieldCheck } from "lucide-react";

const specs = [
  { icon: Mic, label: "Voice detection" },
  { icon: Radar, label: "Presence sensing" },
  { icon: ShieldCheck, label: "100% local" },
  { icon: Cpu, label: "Windows 10 / 11" },
];

export function SpecsStrip() {
  return (
    <div className="specs-strip" aria-label="Key capabilities">
      {specs.map(({ icon: Icon, label }) => (
        <span className="specs-pill" key={label}>
          <Icon />
          {label}
        </span>
      ))}
    </div>
  );
}
