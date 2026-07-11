export function ScrollProgress() {
  // Pure CSS scroll-driven animation — no JS scroll listener, no React re-renders on scroll.
  // The .scroll-progress class in styles.css uses animation-timeline: scroll(root).
  return <div className="scroll-progress" aria-hidden />;
}
