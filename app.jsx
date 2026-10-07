// app.jsx — root with tweaks integration

const { useEffect, useState, useMemo } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "vibe": "linear",
  "accent": "#2f80ff",
  "accent2": "#25e08a",
  "showGrid": true,
  "showNoise": true,
  "showMarquee": true,
  "showCursor": true,
  "lang": "es"
}/*EDITMODE-END*/;

const VIBE_PRESETS = {
  linear: {
    bg: "#07070a", bg1: "#0c0c11", bg2: "#14141c",
    label: "Linear · oscuro premium"
  },
  brutalist: {
    bg: "#0d0d0d", bg1: "#1a1a1a", bg2: "#222",
    label: "Brutalista · contraste alto"
  },
  editorial: {
    bg: "#0b0a09", bg1: "#15120e", bg2: "#1f1a14",
    label: "Editorial · cálido oscuro"
  },
  light: {
    bg: "#fafaf7", bg1: "#f0eee9", bg2: "#e7e5df",
    label: "Light · claro premium"
  }
};

function applyVibe(vibe, accent, accent2) {
  const root = document.documentElement;
  const v = VIBE_PRESETS[vibe] || VIBE_PRESETS.linear;
  root.style.setProperty("--bg", v.bg);
  root.style.setProperty("--bg-1", v.bg1);
  root.style.setProperty("--bg-2", v.bg2);
  root.style.setProperty("--accent", accent);
  root.style.setProperty("--accent-2", accent2);
  // hex -> rgba 18%
  const hex = accent.replace("#", "");
  const r = parseInt(hex.slice(0, 2), 16), g = parseInt(hex.slice(2, 4), 16), b = parseInt(hex.slice(4, 6), 16);
  root.style.setProperty("--accent-soft", `rgba(${r}, ${g}, ${b}, 0.18)`);

  // Light theme inverts ink colors
  if (vibe === "light") {
    root.style.setProperty("--ink", "#0c0c11");
    root.style.setProperty("--ink-2", "rgba(12, 12, 17, 0.72)");
    root.style.setProperty("--ink-3", "rgba(12, 12, 17, 0.45)");
    root.style.setProperty("--line", "rgba(0, 0, 0, 0.08)");
    root.style.setProperty("--line-strong", "rgba(0, 0, 0, 0.18)");
  } else {
    root.style.setProperty("--ink", "#f5f5f7");
    root.style.setProperty("--ink-2", "rgba(245, 245, 247, 0.72)");
    root.style.setProperty("--ink-3", "rgba(245, 245, 247, 0.48)");
    root.style.setProperty("--line", "rgba(255, 255, 255, 0.08)");
    root.style.setProperty("--line-strong", "rgba(255, 255, 255, 0.18)");
  }
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const lang = t.lang || "es";
  const setLang = (v) => setTweak("lang", v);
  const dict = window.I18N[lang] || window.I18N.es;

  useEffect(() => {
    applyVibe(t.vibe, t.accent, t.accent2);
  }, [t.vibe, t.accent, t.accent2]);

  // smooth scroll for anchor clicks
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      {t.showCursor && <MagnetCursor />}
      <div className="bg-canvas" />
      {t.showGrid && <div className="bg-grid" />}
      {t.showNoise && <div className="bg-noise" />}

      <Nav t={t} lang={lang} setLang={setLang} dict={dict} />
      <Hero dict={dict} lang={lang} />
      {t.showMarquee && <Marquee />}
      <About dict={dict} />
      <Skills dict={dict} lang={lang} />
      <Projects dict={dict} lang={lang} />
      <Education dict={dict} />
      <Footer dict={dict} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Idioma / Language" />
        <TweakRadio
          label="Idioma"
          value={lang}
          options={["es", "en"]}
          onChange={(v) => setLang(v)}
        />

        <TweakSection label="Vibra visual" />
        <TweakSelect
          label="Vibe"
          value={t.vibe}
          options={[
            { value: "linear", label: "Linear · oscuro premium" },
            { value: "brutalist", label: "Brutalista · contraste alto" },
            { value: "editorial", label: "Editorial · cálido oscuro" },
            { value: "light", label: "Light · claro premium" }
          ]}
          onChange={(v) => setTweak("vibe", v)}
        />

        <TweakSection label="Color de acento" />
        <TweakColor
          label="Acento principal"
          value={t.accent}
          options={["#2f80ff", "#25e08a", "#00c2ff", "#1d5fd1", "#18b978", "#ffd400"]}
          onChange={(v) => setTweak("accent", v)}
        />
        <TweakColor
          label="Acento secundario"
          value={t.accent2}
          options={["#25e08a", "#2f80ff", "#00c2ff", "#8eea6a", "#20c997", "#ffd400"]}
          onChange={(v) => setTweak("accent2", v)}
        />

        <TweakSection label="Efectos" />
        <TweakToggle label="Marquee infinito" value={t.showMarquee} onChange={(v) => setTweak("showMarquee", v)} />
        <TweakToggle label="Rejilla de fondo" value={t.showGrid} onChange={(v) => setTweak("showGrid", v)} />
        <TweakToggle label="Grano / ruido" value={t.showNoise} onChange={(v) => setTweak("showNoise", v)} />
        <TweakToggle label="Cursor magnético" value={t.showCursor} onChange={(v) => setTweak("showCursor", v)} />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
