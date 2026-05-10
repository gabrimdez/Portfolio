// sections.jsx — Hero, About, Skills, Projects, Education, Footer

const { useEffect, useRef, useState, useMemo } = React;

function Nav({ t, lang, setLang, dict }) {
  return (
    <nav className="nav">
      <a href="#top" className="nav-mark">
        <span className="glyph">G</span>
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

function NutriaProject({ dict, lang }) {
  return (
    <article className="project" data-screen-label="NutrIA">
      <ProjectMedia
        slotId="nutria-shot"
        placeholder={lang === "es" ? "Capturas próximamente" : "Screenshots coming soon"}
        badge={dict.nutria.tag}
        mark="01 / NUTRIA"
      />
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

function AsesoriasProject({ dict, lang }) {
  return (
    <article className="project flip" data-screen-label="Asesorias">
      <ProjectMedia
        slotId="asesorias-shot"
        placeholder={lang === "es" ? "Capturas próximamente" : "Screenshots coming soon"}
        badge={dict.asesorias.tag}
        mark="02 / ASESORIAS"
      />
      <div className="project-info">
        <div className="project-eyebrow reveal">{dict.asesorias.tag}</div>
        <h3 className="project-title">
          <WordReveal text={dict.asesorias.title} delayStep={50} />
        </h3>
        <p className="project-tagline reveal" style={{ "--delay": "100ms" }}>{dict.asesorias.tagline}</p>
        <div className="project-body">
          {dict.asesorias.body.map((p, i) => (
            <p key={i} className="reveal" style={{ "--delay": `${150 + i * 80}ms` }}>{richText(p)}</p>
          ))}
        </div>
        <div className="project-tags reveal" style={{ "--delay": "400ms" }}>
          {dict.asesorias.tags.map((tg) => <span key={tg} className="project-tag">{tg}</span>)}
        </div>
        <div className="project-actions reveal" style={{ "--delay": "500ms" }}>
          <a className="btn" href="https://github.com/gabrimdez/Asesorias-SKFIT" target="_blank" rel="noreferrer">
            <Icon.code /> {dict.code}
          </a>
          <a className="btn primary" href="https://asesorias-skfit.free.nf/?i=1" target="_blank" rel="noreferrer">
            {dict.web} <Icon.arrow className="arrow" />
          </a>
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
        <AsesoriasProject dict={dict} lang={lang} />
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
