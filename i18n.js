// i18n.js — bilingual content
window.I18N = {
  es: {
    nav: { about: "Sobre mí", skills: "Stack", projects: "Proyectos", education: "Formación", contact: "Contacto" },
    heroLine1: "Construyo",
    heroLine2: "ideas",
    heroLineAccent: "que se sienten",
    heroLine3: "vivas.",
    role: "Desarrollador de Aplicaciones Multiplataforma · Junior Software Developer",
    photoCaption: "Gabriel Acevedo · 2026",
    contacts: { email: "Email", github: "GitHub", linkedin: "LinkedIn", cv: "CV" },
    about: {
      eyebrow: "01 — Sobre mí",
      title: "Sobre mí",
      meta: "Bio",
      body: "Desarrollador de Aplicaciones Multiplataforma con experiencia en desarrollo web y creación de apps móviles. Me interesa construir soluciones eficientes y escalables, con especial foco en frontend moderno, buenas prácticas de desarrollo y una base técnica clara. Vengo de una formación científica y me caracteriza la curiosidad por entender el porqué de las cosas. Esa forma de pensar me ayuda a analizar problemas, aprender con autonomía y adaptarme a nuevos entornos. Busco aportar valor como desarrollador junior, seguir creciendo profesionalmente y formar parte de equipos donde pueda aprender, contribuir y construir productos bien pensados."
    },
    skills: {
      eyebrow: "02 — Stack",
      title: "Lo que uso a diario",
      meta: "10 tecnologías"
    },
    projects: {
      eyebrow: "03 — Proyectos seleccionados",
      title: "Cosas que he construido",
      meta: "2 destacados"
    },
    education: {
      eyebrow: "04 — Formación",
      title: "Camino recorrido",
      meta: "Trayectoria"
    },
    nutria: {
      tag: "Producto destacado",
      title: "NutrIA",
      tagline: "Nutrición y entrenamiento personalizado con IA.",
      body: [
        "**Plataforma digital** de nutrición y entrenamiento personalizado con IA. El sistema analiza objetivos, hábitos, alergias, progreso físico y nivel de actividad para crear planes de alimentación y rutina ajustados a cada usuario. La aplicación combina experiencia guiada en mobile, seguimiento diario de comidas, chat inteligente tipo coach y recomendaciones dinámicas según los cambios reales del cuerpo.",
        "**Backend robusto** con API segura, motor de reglas nutricionales y modelos de IA para tareas clave: generación de planes, análisis de fotos de comida y sugerencias de ajuste cuando el usuario se estanca. El flujo no entrega respuestas genéricas; valida datos, aplica restricciones de salud y prioriza decisiones prácticas para la adherencia a largo plazo.",
        "**Arquitectura de producto real**: autenticación con sesiones protegidas, control por niveles de suscripción, manejo de uso por funcionalidades premium, soporte para catálogos de alimentos y escalabilidad para nuevas integraciones. El resultado: una herramienta que no solo «calcula calorías», sino que acompaña el proceso completo de cambio físico con contexto, precisión y foco en constancia.",
        "**Diferencial**: mezcla de IA + reglas determinísticas + UX clara. La IA propone, las reglas validan, el usuario ejecuta con confianza. Siguiente paso: expandir integraciones con wearables y reforzar la analítica de progreso para recomendaciones aún más finas."
      ],
      tags: ["React Native", "TypeScript", "Python", "IA", "API", "Auth"]
    },
    asesorias: {
      tag: "Cliente real",
      title: "Asesorías",
      tagline: "Captación y gestión de clientes para asesorías fitness.",
      body: [
        "**Página web** desarrollada para la captación y gestión de clientes de asesorías fitness personalizadas. Incluye landing page de presentación, formulario avanzado para recopilar información relevante de los clientes interesados (hábitos, objetivos, contacto y motivaciones) y mensajes personalizados que refuerzan el acompañamiento.",
        "Cuenta con una **sección privada protegida** por usuario y contraseña donde el influencer accede de forma segura a los datos sin exponer información confidencial. El proyecto destaca por su enfoque en la privacidad, el diseño centrado en el usuario y la atención al detalle en el proceso de onboarding."
      ],
      tags: ["JavaScript", "HTML", "CSS", "Auth", "Forms"]
    },
    edu: [
      { title: "Ciclo Superior DAM", where: "Desarrollo de Aplicaciones Multiplataforma", tag: "2024 - 2026 · Finalizado" },
      { title: "Bachillerato científico", where: "IES Val do Tea", tag: "2022 - 2024 · Completado" },
      { title: "Curso de Iniciación al Desarrollo con IA", where: "BIG school", tag: "2026 · Certificado" }
    ],
    code: "Ver código", web: "Ver web", view: "Abrir",
    footer: "© 2026 Gabriel Acevedo — Portafolio personal",
    scroll: "Desliza para explorar"
  },
  en: {
    nav: { about: "About", skills: "Stack", projects: "Work", education: "Education", contact: "Contact" },
    heroLine1: "I\u00A0build",
    heroLine2: "ideas",
    heroLineAccent: "that feel",
    heroLine3: "alive.",
    role: "Multiplatform Application Developer · Junior Software Developer",
    photoCaption: "Gabriel Acevedo · 2026",
    contacts: { email: "Email", github: "GitHub", linkedin: "LinkedIn", cv: "Resume" },
    about: {
      eyebrow: "01 — About",
      title: "About me",
      meta: "Bio",
      body: "Multiplatform Application Developer with experience in web development and mobile app creation. I'm interested in building efficient, scalable solutions, with a strong focus on modern frontend, good development practices and a clear technical foundation. My scientific background shaped the way I approach problems: I like understanding why things work, learning independently and adapting to new environments. I'm looking to bring value as a junior developer, keep growing professionally and join teams where I can learn, contribute and build thoughtful products."
    },
    skills: {
      eyebrow: "02 — Stack",
      title: "Tools I use daily",
      meta: "10 technologies"
    },
    projects: {
      eyebrow: "03 — Selected work",
      title: "Things I've shipped",
      meta: "2 featured"
    },
    education: {
      eyebrow: "04 — Education",
      title: "The path so far",
      meta: "Background"
    },
    nutria: {
      tag: "Flagship project",
      title: "NutrIA",
      tagline: "AI-powered nutrition and training, made personal.",
      body: [
        "**Digital platform** for AI-driven personalized nutrition and training. The system analyses goals, habits, allergies, physical progress and activity level to generate meal and workout plans tailored to each user. The mobile app combines guided experience, daily meal tracking, an intelligent coach-style chat and dynamic recommendations based on real body changes.",
        "**Robust backend** with secure API, a nutrition rule engine and AI models for the key tasks: plan generation, food-photo analysis and adjustment suggestions when the user plateaus. The flow doesn't return generic answers; it validates data, applies health constraints and prioritizes practical decisions for long-term adherence.",
        "**Production-grade architecture**: protected session auth, subscription tiers, usage control on premium features, food-catalog support and a runway to ship new integrations. The result: a tool that doesn't just \"count calories\" — it walks alongside the full body-transformation process with context, precision and a focus on consistency.",
        "**The edge**: AI + deterministic rules + clear UX. AI proposes, rules validate, the user executes with confidence. Next step: expanding wearable integrations and tightening the progress analytics for even sharper recommendations."
      ],
      tags: ["React Native", "TypeScript", "Python", "AI", "API", "Auth"]
    },
    asesorias: {
      tag: "Real client",
      title: "Asesorías",
      tagline: "Lead capture and client management for fitness coaching.",
      body: [
        "**Web platform** built to capture and manage clients for personalized fitness coaching. Includes a landing page, an advanced form to collect relevant info from prospects (habits, goals, contact, motivations) and personalized messaging that reinforces the experience.",
        "Includes a **protected private area** where the coach accesses client data securely without ever exposing confidential information. The project stands out for privacy-first thinking, user-centered design and the level of detail in the onboarding flow."
      ],
      tags: ["JavaScript", "HTML", "CSS", "Auth", "Forms"]
    },
    edu: [
      { title: "Higher VET — DAM", where: "Multiplatform Application Development", tag: "2024 - 2026 · Completed" },
      { title: "Science high school", where: "IES Val do Tea", tag: "2022 - 2024 · Completed" },
      { title: "Intro to AI Development Course", where: "BIG school", tag: "2026 · Certified" }
    ],
    code: "View code", web: "View site", view: "Open",
    footer: "© 2026 Gabriel Acevedo — Personal portfolio",
    scroll: "Scroll to explore"
  }
};

window.SKILLS = [
  { name: "React",        kind: "Library / UI",   icon: "Re" },
  { name: "React Native", kind: "Mobile",         icon: "RN" },
  { name: "Angular",      kind: "Framework",      icon: "Ng" },
  { name: "Astro",        kind: "Framework",      icon: "As" },
  { name: "TypeScript",   kind: "Lenguaje",       icon: "Ts" },
  { name: "JavaScript",   kind: "Lenguaje",       icon: "Js" },
  { name: "Java",         kind: "Lenguaje",       icon: "Jv" },
  { name: "Python",       kind: "Lenguaje",       icon: "Py" },
  { name: "Tailwind",     kind: "Estilos",        icon: "Tw" },
  { name: "Bases de datos", kind: "SQL · NoSQL",  icon: "DB" }
];
