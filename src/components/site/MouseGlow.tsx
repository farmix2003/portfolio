import { useEffect } from "react";

export function MouseGlow() {
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background:
          "radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), oklch(0.62 0.19 256 / 0.12), transparent 55%)",
      }}
    />
  );
}
