// hooks.jsx — shared hooks and utilities

const { useEffect, useRef, useState, useMemo, useCallback } = React;

// Scroll-based reveal — IntersectionObserver AND requestAnimationFrame are unreliable
// in cross-origin iframes, so we use setTimeout-based scheduling instead.
const __revealQueue = new Set();
let __revealTimer = 0;
function __revealCheck() {
  __revealTimer = 0;
  const vh = window.innerHeight;
  const trigger = vh * 0.92;
  for (const n of [...__revealQueue]) {
    if (!n.isConnected) { __revealQueue.delete(n); continue; }
    const r = n.getBoundingClientRect();
    if (r.top < trigger && r.bottom > 0) {
      n.classList.add("is-in");
      __revealQueue.delete(n);
    }
  }
}
function __revealSchedule() {
  if (__revealTimer) return;
  __revealTimer = setTimeout(__revealCheck, 16);
}
if (typeof window !== "undefined" && !window.__revealBound) {
  window.__revealBound = true;
  window.addEventListener("scroll", __revealSchedule, { passive: true });
  window.addEventListener("resize", __revealSchedule, { passive: true });
}

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = [el, ...el.querySelectorAll(".reveal, .word-reveal")];
    targets.forEach((n) => __revealQueue.add(n));
    // Run initial pass several times — layout, fonts, and image-slot upgrades
    // can shift positions for ~1s after mount.
    [0, 60, 200, 500, 1000].forEach((d) => setTimeout(__revealSchedule, d));
    return () => { targets.forEach((n) => __revealQueue.delete(n)); };
  }, []);
  return ref;
}

// Word-by-word reveal helper
function WordReveal({ text, delayStep = 60, baseDelay = 0, className = "" }) {
  const ref = useRef(null);
  const words = String(text).split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = [...el.querySelectorAll(".word-reveal")];
    targets.forEach((n) => __revealQueue.add(n));
    [0, 60].forEach((d) => setTimeout(__revealSchedule, d));
    return () => { targets.forEach((n) => __revealQueue.delete(n)); };
  }, [text]);

  return (
    <span ref={ref} className={className}>
      {words.map((w, i) => (
        <span
          key={`${text}-${i}`}
          className="word-reveal"
          style={{ "--delay": `${baseDelay + i * delayStep}ms` }}
        >
          <span>{w}{i < words.length - 1 ? "\u00A0" : ""}</span>
        </span>
      ))}
    </span>
  );
}

// Magnet cursor
function MagnetCursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const root = useRef(null);
  useEffect(() => {
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let timer;
    const onMove = (e) => { mx = e.clientX; my = e.clientY; };
    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (root.current) {
        root.current.style.transform = `translate(${rx}px, ${ry}px)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx - rx}px, ${my - ry}px)`;
      }
    };
    const onOver = (e) => {
      const t = e.target.closest("a, button, .skill-card, .contact-pill, .btn, .edu-item, .nav-link");
      if (t) root.current?.classList.add("is-hover");
    };
    const onOut = (e) => {
      const t = e.target.closest("a, button, .skill-card, .contact-pill, .btn, .edu-item, .nav-link");
      if (t) root.current?.classList.remove("is-hover");
    };
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    timer = setInterval(tick, 16);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      clearInterval(timer);
    };
  }, []);
  // Hide on touch devices
  const [touch, setTouch] = useState(false);
  useEffect(() => {
    setTouch(matchMedia("(hover: none)").matches);
  }, []);
  if (touch) return null;
  return (
    <div ref={root} className="magnet">
      <div ref={ringRef} className="ring" />
      <div ref={dotRef} className="dot" />
    </div>
  );
}

// Mouse-tracking glow inside a card
function useGlow(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);
}

// Markdown-ish bold parser: **text** -> <strong>text</strong>
function richText(s) {
  const parts = String(s).split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    /^\*\*[^*]+\*\*$/.test(p)
      ? <strong key={i}>{p.slice(2, -2)}</strong>
      : <React.Fragment key={i}>{p}</React.Fragment>
  );
}

// Icon set (inline SVG)
const Icon = {
  arrow: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  mail: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  github: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.25 5.65.41.36.78 1.06.78 2.13v3.16c0 .31.21.66.8.55 4.56-1.52 7.85-5.83 7.85-10.91C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  ),
  linkedin: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v15.5H.22V8zm7.6 0h4.37v2.13h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 6.99v8.76h-4.55v-7.77c0-1.85-.03-4.23-2.58-4.23-2.58 0-2.97 2.01-2.97 4.09v7.91H7.82V8z" />
    </svg>
  ),
  cv: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" strokeLinecap="round" />
    </svg>
  ),
  external: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M14 4h6v6M10 14L20 4M19 14v6H4V5h6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  code: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M8 6L2 12l6 6M16 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
};

Object.assign(window, { useReveal, WordReveal, MagnetCursor, useGlow, richText, Icon });
