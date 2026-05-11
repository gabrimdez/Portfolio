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
    aparcaya: {
      tag: "Producto full-stack",
      title: "AparcaYa",
      tagline: "Gestión de parking corporativo con asistente inteligente.",
      body: [
        "**Plataforma digital** para la gestión de parkings en entornos corporativos. El sistema organiza empresas, parkings, plantas, zonas y plazas, y permite a los empleados reservar, hacer check-in y consultar su plaza en tiempo real desde el móvil. Combina un panel web completo para administradores con una app mobile orientada al uso diario: mapa del parking, reservas, vehículos y asistente conversacional con soporte de voz.",
        "**Backend con API REST segura**, soporte multiempresa, control de ocupación por eventos y asistente con intents de parking e integración opcional con Gemini. El flujo valida disponibilidad, gestiona sesiones fuera de horario y mantiene el historial de ocupación con coherencia en tiempo real mediante WebSockets.",
        "**Arquitectura de producto completa**: autenticación JWT, roles diferenciados (superadmin, admin, empleado), control de CORS por origen, rate limiting configurable por endpoint y documentación Swagger generada automáticamente. Tres clientes independientes (API, web, móvil) coordinados sobre la misma base de datos PostgreSQL con migraciones versionadas via Prisma.",
        "**Diferencial**: tres superficies de uso (web admin + app empleado + API) que comparten lógica de negocio sin duplicarla. El asistente propone, las reglas de ocupación validan, el empleado actúa con una sola app. Siguiente paso: historial persistente del asistente, ranking espacial de plazas y pipeline CI/CD para despliegue continuo."
      ],
      tags: ["React Native", "React", "Node.js", "PostgreSQL", "Prisma", "WebSockets", "JWT", "Gemini"]
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
    aparcaya: {
      tag: "Full-stack product",
      title: "AparcaYa",
      tagline: "Corporate parking management with an intelligent assistant.",
      body: [
        "**Digital platform** for managing parking in corporate environments. The system organizes companies, parking lots, floors, zones and spaces, and lets employees reserve, check in and view their assigned space in real time from mobile. It combines a complete web admin panel with a daily-use mobile app: parking map, reservations, vehicles and a conversational assistant with voice support.",
        "**Secure REST API backend** with multi-company support, event-based occupancy control and a parking-intent assistant with optional Gemini integration. The flow validates availability, handles out-of-hours sessions and keeps occupancy history coherent in real time through WebSockets.",
        "**Complete product architecture**: JWT authentication, differentiated roles (superadmin, admin, employee), origin-based CORS control, configurable endpoint rate limiting and automatically generated Swagger documentation. Three independent clients (API, web, mobile) coordinated over the same PostgreSQL database with versioned Prisma migrations.",
        "**The edge**: three product surfaces (web admin + employee app + API) sharing business logic without duplicating it. The assistant proposes, occupancy rules validate, and the employee acts from a single app. Next step: persistent assistant history, spatial parking-space ranking and a CI/CD pipeline for continuous deployment."
      ],
      tags: ["React Native", "React", "Node.js", "PostgreSQL", "Prisma", "WebSockets", "JWT", "Gemini"]
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
