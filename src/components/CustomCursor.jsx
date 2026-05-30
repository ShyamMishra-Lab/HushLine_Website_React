import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.documentElement.classList.add("custom-cursor-active");

    let mx = -200, my = -200;
    let rx = -200, ry = -200;
    let raf;

    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      rx = lerp(rx, mx, 0.1);
      ry = lerp(ry, my, 0.1);
      dot.style.transform = `translate(${mx}px, ${my}px)`;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.classList.add("visible");
      ring.classList.add("visible");
    };

    const onLeave = () => {
      dot.classList.remove("visible");
      ring.classList.remove("visible");
    };

    const addHover = () => {
      dot.classList.add("hovered");
      ring.classList.add("hovered");
    };

    const removeHover = () => {
      dot.classList.remove("hovered");
      ring.classList.remove("hovered");
    };

    const attachInteractives = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });
    };

    attachInteractives();
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);

    const observer = new MutationObserver(attachInteractives);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
