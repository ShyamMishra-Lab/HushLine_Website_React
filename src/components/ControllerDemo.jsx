import { Mic, Pause, Play, Radar } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { demoStates } from "../data/demoStates.js";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion.js";

export function ControllerDemo() {
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
