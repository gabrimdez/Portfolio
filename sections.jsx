// sections.jsx — Hero, About, Skills, Projects, Education, Footer

const { useEffect, useRef, useState, useMemo } = React;

function Nav({ t, lang, setLang, dict }) {
  return (
    <nav className="nav">
      <a href="#top" className="nav-mark">
        <span>Gabriel Acevedo</span>
      </a>
      <div className="nav-links">
        <a href="#about" className="nav-link"><span className="num">01</span>{dict.nav.about}</a>
        <a href="#skills" className="nav-link"><span className="num">02</span>{dict.nav.skills}</a>
        <a href="#work" className="nav-link"><span className="num">03</span>{dict.nav.projects}</a>
        <a href="#education" className="nav-link"><span className="num">04</span>{dict.nav.education}</a>
      </div>
      <div className="nav-right">
        <div className="lang-toggle">
          <button className={lang === "es" ? "active" : ""} onClick={() => setLang("es")}>ES</button>
          <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
        </div>
      </div>
    </nav>
  );
}

function Hero({ dict, lang }) {
  const ref = useReveal();
  return (
    <section className="hero container" id="top" ref={ref}>
      <div className="hero-grid">
        <div>
          <h1 className="hero-title">
            <WordReveal text={dict.heroLine1} delayStep={50} baseDelay={100} />
            <br />
            <WordReveal text={dict.heroLine2} delayStep={50} baseDelay={250} />{" "}
            <span className="accent-text">
              <WordReveal text={dict.heroLineAccent} delayStep={50} baseDelay={350} />
            </span>
            <br />
            <WordReveal text={dict.heroLine3} delayStep={50} baseDelay={500} />
          </h1>
          <p className="hero-role reveal" style={{ "--delay": "700ms" }}>
            {dict.role}
          </p>
        </div>

        <div className="hero-side reveal" style={{ "--delay": "300ms" }}>
          <div className="hero-photo">
            <image-slot
              id="gabriel-photo"
              src="assets/gabriel-acevedo.jpg"
              shape="rounded"
              radius="22"
              placeholder={lang === "es" ? "Arrastra tu foto aquí" : "Drop your photo here"}
            ></image-slot>
            <div className="frame-meta">
              <span>{dict.photoCaption}</span>
            </div>
          </div>
          <div className="hero-contacts">
            <a href="mailto:acemengab@gmail.com" className="contact-pill">
              <Icon.mail /> <span>{dict.contacts.email}</span>
              <Icon.arrow className="arrow" />
            </a>
            <a href="https://github.com/gabrimdez" target="_blank" rel="noreferrer" className="contact-pill">
              <Icon.github /> <span>{dict.contacts.github}</span>
              <Icon.arrow className="arrow" />
            </a>
            <a href="https://www.linkedin.com/in/gabriel-acevedo-m%C3%A9ndez-0582a4382/" target="_blank" rel="noreferrer" className="contact-pill">
              <Icon.linkedin /> <span>{dict.contacts.linkedin}</span>
              <Icon.arrow className="arrow" />
            </a>
            <a href="static/CV.pdf" target="_blank" rel="noreferrer" className="contact-pill">
              <Icon.cv /> <span>{dict.contacts.cv}</span>
              <Icon.arrow className="arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["React", "React-Native", "Angular", "Astro", "TypeScript", "JavaScript", "Java", "Python", "Tailwind", "Base de datos"];
  const dup = [...items, ...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {dup.map((w, i) => (
          <span key={i} className={`marquee-item ${i % 3 === 1 ? "alt" : ""}`}>
            <span className="dot" />
            {w}
          </span>
        ))}
      </div>
    </div>
  );
}

function About({ dict }) {
  const ref = useReveal();
  return (
    <section className="section container" id="about" ref={ref} data-screen-label="About">
      <header className="section-head">
        <div>
          <div className="section-eyebrow reveal"><span className="dot" />{dict.about.eyebrow}</div>
          <h2 className="section-title">
            <WordReveal text={dict.about.title} delayStep={60} />
          </h2>
        </div>
        <div className="section-meta reveal">{dict.about.meta} · 2026</div>
      </header>
      <div className="about-copy">
        <p className="about-lead reveal" style={{ "--delay": "100ms" }}>
          {dict.about.body.split(". ")[0]}.
        </p>
        <p className="about-body reveal" style={{ "--delay": "200ms" }}>
          {dict.about.body.split(". ").slice(1).join(". ")}
        </p>
      </div>
    </section>
  );
}

function SkillCard({ skill, idx }) {
  const ref = useRef(null);
  useGlow(ref);
  return (
    <div ref={ref} className="skill-card reveal" style={{ "--delay": `${idx * 50}ms` }}>
      <div className="glow" />
      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-start" }}>
        <span className="icon">{skill.icon}</span>
      </div>
      <div className="name">{skill.name}</div>
      <div className="kind">{skill.kind}</div>
    </div>
  );
}

function Skills({ dict }) {
  const ref = useReveal();
  return (
    <section className="section container" id="skills" ref={ref} data-screen-label="Stack">
      <header className="section-head">
        <div>
          <div className="section-eyebrow reveal"><span className="dot" />{dict.skills.eyebrow}</div>
          <h2 className="section-title">
            <WordReveal text={dict.skills.title} delayStep={60} />
          </h2>
        </div>
        <div className="section-meta reveal">{dict.skills.meta}</div>
      </header>
      <div className="skills-grid">
        {window.SKILLS.map((s, i) => <SkillCard key={s.name} skill={s} idx={i} />)}
      </div>
    </section>
  );
}

function ProjectMedia({ slotId, placeholder, badge, mark, children }) {
  return (
    <div className="project-media reveal">
      <span className="badge">{badge}</span>
      <image-slot id={slotId} shape="rounded" radius="22" placeholder={placeholder}></image-slot>
      {children}
      <span className="corner-mark">{mark}</span>
    </div>
  );
}

const NUTRIA_SCREENSHOTS = [
  { src: "assets/nutria-01.png", label: { es: "Inicio - nutrición", en: "Home - nutrition" } },
  { src: "assets/nutria-02.png", label: { es: "Inicio - entrenamiento", en: "Home - training" } },
  { src: "assets/nutria-03.png", label: { es: "Entrenamiento", en: "Training" } },
  { src: "assets/nutria-04.png", label: { es: "Widget", en: "Widget" }, compact: true },
  { src: "assets/nutria-05.png", label: { es: "Planes", en: "Plans" } },
  { src: "assets/nutria-06.png", label: { es: "Perfil", en: "Profile" } },
  { src: "assets/nutria-07.png", label: { es: "NutriCoach", en: "NutriCoach" } },
  { src: "assets/nutria-08.png", label: { es: "Escáner", en: "Scanner" } }
];
const NUTRIA_IMAGE_EXTENSIONS = ["png", "jpg", "jpeg", "webp"];

function getNutriaCandidates(src) {
  return NUTRIA_IMAGE_EXTENSIONS.map((ext) => src.replace(/\.[^.]+$/, `.${ext}`));
}

function NutriaGallery({ dict, lang }) {
  const [active, setActive] = useState(null);
  const [sources, setSources] = useState({});

  useEffect(() => {
    let alive = true;
    NUTRIA_SCREENSHOTS.forEach((shot) => {
      const candidates = getNutriaCandidates(shot.src);
      const tryCandidate = (candidateIndex) => {
        if (!alive) return;
        const candidate = candidates[candidateIndex];
        if (!candidate) {
          if (alive) setSources((prev) => ({ ...prev, [shot.src]: "" }));
          return;
        }
        const img = new Image();
        img.onload = () => alive && setSources((prev) => ({ ...prev, [shot.src]: candidate }));
        img.onerror = () => alive && tryCandidate(candidateIndex + 1);
        img.src = candidate;
      };
      tryCandidate(0);
    });
    return () => { alive = false; };
  }, []);

  const getShotSrc = (index) => {
    const shot = NUTRIA_SCREENSHOTS[index];
    return sources[shot.src] || "";
  };

  const closeLightbox = () => setActive(null);
  const openShot = (index) => {
    if (!getShotSrc(index)) return;
    setActive(index);
  };
  const goTo = (delta) => {
    setActive((current) => {
      const next = (current + delta + NUTRIA_SCREENSHOTS.length) % NUTRIA_SCREENSHOTS.length;
      return next;
    });
  };

  useEffect(() => {
    if (active === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goTo(-1);
      if (e.key === "ArrowRight") goTo(1);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [active]);

  const activeShot = active === null ? null : NUTRIA_SCREENSHOTS[active];
  const activeSrc = active === null ? "" : getShotSrc(active);

  return (
    <>
      <div className="project-media nutria-gallery reveal">
        <span className="badge">{dict.nutria.tag}</span>
        <div className="nutria-shots">
          {NUTRIA_SCREENSHOTS.map((shot, index) => {
            const label = shot.label[lang] || shot.label.es;
            const resolvedSrc = sources[shot.src];
            const hasImage = Boolean(resolvedSrc);
            return (
              <div
                key={shot.src}
                className={`nutria-shot ${shot.compact ? "compact" : ""} ${hasImage ? "" : "is-empty"}`}
                role={hasImage ? "button" : "img"}
                tabIndex={hasImage ? "0" : undefined}
                aria-label={hasImage ? `${lang === "es" ? "Ver captura grande" : "View screenshot"}: ${label}` : label}
                onClick={hasImage ? () => openShot(index) : undefined}
                onKeyDown={(e) => {
                  if (hasImage && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    openShot(index);
                  }
                }}
              >
                {resolvedSrc ? (
                  <img src={resolvedSrc} alt={label} />
                ) : (
                  <div className="nutria-shot-empty">
                    {lang === "es" ? "Imagen no publicada" : "Image not published"}
                  </div>
                )}
                <span className="nutria-shot-label">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {label}
                </span>
              </div>
            );
          })}
        </div>
        <span className="corner-mark">01 / NUTRIA</span>
      </div>

      {activeShot && ReactDOM.createPortal(
        <div className="nutria-lightbox" role="dialog" aria-modal="true" aria-label={activeShot.label[lang] || activeShot.label.es}>
          <button className="nutria-lightbox-backdrop" type="button" aria-label={lang === "es" ? "Cerrar visor" : "Close viewer"} onClick={closeLightbox}></button>
          <div className="nutria-lightbox-shell">
            <div className="nutria-lightbox-top">
              <div>
                <span>{String(active + 1).padStart(2, "0")} / {String(NUTRIA_SCREENSHOTS.length).padStart(2, "0")}</span>
                <strong>{activeShot.label[lang] || activeShot.label.es}</strong>
              </div>
              <button className="nutria-lightbox-close" type="button" onClick={closeLightbox} aria-label={lang === "es" ? "Cerrar" : "Close"}>&times;</button>
            </div>
            <button className="nutria-lightbox-nav prev" type="button" onClick={() => goTo(-1)} aria-label={lang === "es" ? "Captura anterior" : "Previous screenshot"}>&lsaquo;</button>
            <div className="nutria-lightbox-media">
              {activeSrc ? (
                <img src={activeSrc} alt={activeShot.label[lang] || activeShot.label.es} />
              ) : (
                <div className="nutria-lightbox-empty">
                  {lang === "es"
                    ? `Añade la imagen en ${activeShot.src} para verla aquí.`
                    : `Add the image at ${activeShot.src} to view it here.`}
                </div>
              )}
            </div>
            <button className="nutria-lightbox-nav next" type="button" onClick={() => goTo(1)} aria-label={lang === "es" ? "Captura siguiente" : "Next screenshot"}>&rsaquo;</button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

function NutriaProject({ dict, lang }) {
  return (
    <article className="project" data-screen-label="NutrIA">
      <NutriaGallery dict={dict} lang={lang} />
      <div className="project-info">
        <div className="project-eyebrow reveal">{dict.nutria.tag}</div>
        <h3 className="project-title">
          <WordReveal text={dict.nutria.title} delayStep={50} />
        </h3>
        <p className="project-tagline reveal" style={{ "--delay": "100ms" }}>{dict.nutria.tagline}</p>
        <div className="project-body">
          {dict.nutria.body.map((p, i) => (
            <p key={i} className="reveal" style={{ "--delay": `${150 + i * 80}ms` }}>{richText(p)}</p>
          ))}
        </div>
        <div className="project-tags reveal" style={{ "--delay": "500ms" }}>
          {dict.nutria.tags.map((tg) => <span key={tg} className="project-tag">{tg}</span>)}
        </div>
      </div>
    </article>
  );
}

const APARCAYA_SCREENSHOTS = [
  { src: "assets/aparcaya-01.png", label: { es: "Mapa del parking", en: "Parking map" } },
  { src: "assets/aparcaya-02.png", label: { es: "Plano de planta", en: "Floor plan" } },
  { src: "assets/aparcaya-03.png", label: { es: "Vehículos", en: "Vehicles" } },
  { src: "assets/aparcaya-04.png", label: { es: "Asistente", en: "Assistant" } }
];

function AparcayaGallery({ dict, lang }) {
  const [active, setActive] = useState(null);
  const [sources, setSources] = useState({});

  useEffect(() => {
    let alive = true;
    APARCAYA_SCREENSHOTS.forEach((shot) => {
      const candidates = getNutriaCandidates(shot.src);
      const tryCandidate = (candidateIndex) => {
        if (!alive) return;
        const candidate = candidates[candidateIndex];
        if (!candidate) {
          if (alive) setSources((prev) => ({ ...prev, [shot.src]: "" }));
          return;
        }
        const img = new Image();
        img.onload = () => alive && setSources((prev) => ({ ...prev, [shot.src]: candidate }));
        img.onerror = () => alive && tryCandidate(candidateIndex + 1);
        img.src = candidate;
      };
      tryCandidate(0);
    });
    return () => { alive = false; };
  }, []);

  const getShotSrc = (index) => {
    const shot = APARCAYA_SCREENSHOTS[index];
    return sources[shot.src] || "";
  };

  const closeLightbox = () => setActive(null);
  const openShot = (index) => {
    if (!getShotSrc(index)) return;
    setActive(index);
  };
  const goTo = (delta) => {
    setActive((current) => {
      const next = (current + delta + APARCAYA_SCREENSHOTS.length) % APARCAYA_SCREENSHOTS.length;
      return next;
    });
  };

  useEffect(() => {
    if (active === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goTo(-1);
      if (e.key === "ArrowRight") goTo(1);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [active]);

  const activeShot = active === null ? null : APARCAYA_SCREENSHOTS[active];
  const activeSrc = active === null ? "" : getShotSrc(active);

  return (
    <>
      <div className="project-media nutria-gallery aparcaya-gallery reveal">
        <span className="badge">{dict.aparcaya.tag}</span>
        <div className="nutria-shots">
          {APARCAYA_SCREENSHOTS.map((shot, index) => {
            const label = shot.label[lang] || shot.label.es;
            const resolvedSrc = sources[shot.src];
            const hasImage = Boolean(resolvedSrc);
            return (
              <div
                key={shot.src}
                className={`nutria-shot ${hasImage ? "" : "is-empty"}`}
                role={hasImage ? "button" : "img"}
                tabIndex={hasImage ? "0" : undefined}
                aria-label={hasImage ? `${lang === "es" ? "Ver captura grande" : "View screenshot"}: ${label}` : label}
                onClick={hasImage ? () => openShot(index) : undefined}
                onKeyDown={(e) => {
                  if (hasImage && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    openShot(index);
                  }
                }}
              >
                {resolvedSrc ? (
                  <img src={resolvedSrc} alt={label} />
                ) : (
                  <div className="nutria-shot-empty">
                    {lang === "es" ? "Imagen no publicada" : "Image not published"}
                  </div>
                )}
                <span className="nutria-shot-label">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {label}
                </span>
              </div>
            );
          })}
        </div>
        <span className="corner-mark">02 / APARCAYA</span>
      </div>

      {activeShot && ReactDOM.createPortal(
        <div className="nutria-lightbox" role="dialog" aria-modal="true" aria-label={activeShot.label[lang] || activeShot.label.es}>
          <button className="nutria-lightbox-backdrop" type="button" aria-label={lang === "es" ? "Cerrar visor" : "Close viewer"} onClick={closeLightbox}></button>
          <div className="nutria-lightbox-shell">
            <div className="nutria-lightbox-top">
              <div>
                <span>{String(active + 1).padStart(2, "0")} / {String(APARCAYA_SCREENSHOTS.length).padStart(2, "0")}</span>
                <strong>{activeShot.label[lang] || activeShot.label.es}</strong>
              </div>
              <button className="nutria-lightbox-close" type="button" onClick={closeLightbox} aria-label={lang === "es" ? "Cerrar" : "Close"}>&times;</button>
            </div>
            <button className="nutria-lightbox-nav prev" type="button" onClick={() => goTo(-1)} aria-label={lang === "es" ? "Captura anterior" : "Previous screenshot"}>&lsaquo;</button>
            <div className="nutria-lightbox-media">
              {activeSrc ? (
                <img src={activeSrc} alt={activeShot.label[lang] || activeShot.label.es} />
              ) : (
                <div className="nutria-lightbox-empty">
                  {lang === "es"
                    ? `Añade la imagen en ${activeShot.src} para verla aquí.`
                    : `Add the image at ${activeShot.src} to view it here.`}
                </div>
              )}
            </div>
            <button className="nutria-lightbox-nav next" type="button" onClick={() => goTo(1)} aria-label={lang === "es" ? "Captura siguiente" : "Next screenshot"}>&rsaquo;</button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

function AparcayaProject({ dict, lang }) {
  return (
    <article className="project flip" data-screen-label="AparcaYa">
      <AparcayaGallery dict={dict} lang={lang} />
      <div className="project-info">
        <div className="project-eyebrow reveal">{dict.aparcaya.tag}</div>
        <h3 className="project-title">
          <WordReveal text={dict.aparcaya.title} delayStep={50} />
        </h3>
        <p className="project-tagline reveal" style={{ "--delay": "100ms" }}>{dict.aparcaya.tagline}</p>
        <div className="project-body">
          {dict.aparcaya.body.map((p, i) => (
            <p key={i} className="reveal" style={{ "--delay": `${150 + i * 80}ms` }}>{richText(p)}</p>
          ))}
        </div>
        <div className="project-tags reveal" style={{ "--delay": "400ms" }}>
          {dict.aparcaya.tags.map((tg) => <span key={tg} className="project-tag">{tg}</span>)}
        </div>
      </div>
    </article>
  );
}

function Projects({ dict, lang }) {
  const ref = useReveal();
  return (
    <section className="section container" id="work" ref={ref}>
      <header className="section-head">
        <div>
          <div className="section-eyebrow reveal"><span className="dot" />{dict.projects.eyebrow}</div>
          <h2 className="section-title">
            <WordReveal text={dict.projects.title} delayStep={60} />
          </h2>
        </div>
        <div className="section-meta reveal">{dict.projects.meta}</div>
      </header>
      <div className="projects">
        <NutriaProject dict={dict} lang={lang} />
        <AparcayaProject dict={dict} lang={lang} />
      </div>
    </section>
  );
}

function Education({ dict }) {
  const ref = useReveal();
  return (
    <section className="section container" id="education" ref={ref} data-screen-label="Education">
      <header className="section-head">
        <div>
          <div className="section-eyebrow reveal"><span className="dot" />{dict.education.eyebrow}</div>
          <h2 className="section-title">
            <WordReveal text={dict.education.title} delayStep={60} />
          </h2>
        </div>
        <div className="section-meta reveal">{dict.education.meta}</div>
      </header>
      <div className="edu-list">
        {dict.edu.map((e, i) => (
          <div key={i} className="edu-item reveal" style={{ "--delay": `${i * 80}ms` }}>
            <div className="edu-num">{String(i + 1).padStart(2, "0")}</div>
            <div className="edu-title">{e.title}</div>
            <div className="edu-where">{e.where}</div>
            <div className="edu-tag">{e.tag}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer({ dict }) {
  return (
    <footer className="foot">
        <span>{dict.footer}</span>
        <span>v2.0 · 2026</span>
    </footer>
  );
}

Object.assign(window, { Nav, Hero, Marquee, About, Skills, Projects, Education, Footer });
