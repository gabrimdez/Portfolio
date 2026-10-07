// i18n.js — bilingual content
window.I18N = {
  es: {
    nav: { about: "Sobre mí", skills: "Stack", projects: "Proyectos", education: "Formación", contact: "Contacto" },
    heroLine1: "Construyo",
    heroLine2: "ideas",
    heroLineAccent: "que se sienten",
    heroLine3: "vivas.",
    role: "Desarrollador de IA aplicada y automatización de procesos",
    photoCaption: "Gabriel Acevedo · 2026",
    contacts: { email: "Email", github: "GitHub", linkedin: "LinkedIn", cv: "CV" },
    about: {
      eyebrow: "01 — Sobre mí",
      title: "Sobre mí",
      meta: "Bio",
      body: "Desarrollador de Aplicaciones Multiplataforma con experiencia en desarrollo web y creación de apps móviles. Trabajo como freelance con mi marca Fío Dixital (fiodixital.com), creando automatizaciones con n8n e IA para pymes, y desde octubre de 2026 curso a distancia la especialización en Inteligencia Artificial y Big Data. Me interesa construir soluciones eficientes y escalables, con especial foco en frontend moderno, buenas prácticas de desarrollo y una base técnica clara. Vengo de una formación científica y me caracteriza la curiosidad por entender el porqué de las cosas. Esa forma de pensar me ayuda a analizar problemas, aprender con autonomía y adaptarme a nuevos entornos. Busco aportar valor como desarrollador junior, seguir creciendo profesionalmente y formar parte de equipos donde pueda aprender, contribuir y construir productos bien pensados."
    },
    skills: {
      eyebrow: "02 — Stack",
      title: "Lo que uso a diario",
      meta: "20 tecnologías"
    },
    projects: {
      eyebrow: "03 — Proyectos seleccionados",
      title: "Cosas que he construido",
      meta: "5 destacados"
    },
    education: {
      eyebrow: "04 — Formación",
      title: "Camino recorrido",
      meta: "Trayectoria"
    },
    asistente: {
      tag: "IA conversacional · En producción",
      title: "Asistente de IA para citas por WhatsApp",
      tagline: "Agente que gestiona las citas de una clínica dental por WhatsApp.",
      body: [
        "**Agente conversacional con Claude**, con memoria de pacientes y transcripción de audios con Whisper. Consulta, crea, mueve y cancela citas de forma autónoma mediante herramientas (tool calling).",
        "**Ciclo de la cita automatizado**: recordatorios automáticos a 48 h y 24 h con confirmación, lista de espera con oferta automática de huecos liberados y derivación de urgencias a recepción.",
        "**Datos propios y panel para el personal**: migración de Google Calendar a base de datos propia (PostgreSQL/NocoDB) con panel web de agenda para el personal. Importación y reconciliación de 4.984 fichas de pacientes desde PDF.",
        "**Seguridad y fiabilidad**: auditoría de seguridad con 10 hallazgos resueltos (inyección, rate limiting, gestión de secretos) y corrección de condiciones de carrera en reservas. Diseño conforme a RGPD."
      ],
      tags: ["n8n", "Claude", "Whisper", "WhatsApp Business API", "PostgreSQL", "NocoDB", "Docker", "Caddy", "Cloudflare"]
    },
    captacion: {
      tag: "Automatización con IA",
      title: "Sistema automatizado de captación de clientes",
      tagline: "Prospección de negocios locales con datos abiertos y mensajes redactados por IA.",
      body: [
        "**Flujo en n8n** que localiza negocios locales con datos abiertos (OpenStreetMap / Overpass API).",
        "**Mensajes personalizados con un LLM (Groq)**: el flujo redacta los mensajes de contacto para cada negocio, con coste de infraestructura cero."
      ],
      tags: ["n8n", "Overpass API", "Groq"]
    },
    integracion: {
      tag: "Integración · En desarrollo",
      title: "Integración con software de gestión clínica",
      tagline: "En desarrollo · fase inicial.",
      body: [
        "**Adaptación del asistente de citas** para registrar las citas directamente en el software de gestión de otra clínica (Nubimed) mediante su API REST y webhooks."
      ],
      tags: ["Nubimed", "API REST", "Webhooks"]
    },
    nutria: {
      tag: "App móvil con IA",
      title: "NutrIA",
      tagline: "Nutrición y entrenamiento personalizado con IA multimodal.",
      body: [
        "**App móvil multiplataforma** de nutrición y entrenamiento personalizado con IA, desarrollada durante mis prácticas en SiwebAI Solutions. El sistema analiza objetivos, hábitos, alergias, progreso físico y nivel de actividad para crear planes de alimentación y rutina ajustados a cada usuario. La aplicación combina experiencia guiada en mobile, seguimiento diario de comidas, chat inteligente tipo coach y recomendaciones dinámicas según los cambios reales del cuerpo.",
        "**IA multimodal con Groq API** para las tareas clave: generación de planes, análisis de fotos de comida y sugerencias de ajuste cuando el usuario se estanca. La IA trabaja junto a un motor de reglas nutricionales en un backend FastAPI: el flujo no entrega respuestas genéricas; valida datos, aplica restricciones de salud y prioriza decisiones prácticas para la adherencia a largo plazo.",
        "**Arquitectura de producto real**: PostgreSQL con SQLAlchemy async, autenticación JWT con refresh tokens rotatorios, OAuth (Google/Apple), integración con HealthKit / Health Connect, control por niveles de suscripción, manejo de uso por funcionalidades premium y soporte para catálogos de alimentos. El resultado: una herramienta que no solo «calcula calorías», sino que acompaña el proceso completo de cambio físico con contexto, precisión y foco en constancia.",
        "**Diferencial**: mezcla de IA + reglas determinísticas + UX clara. La IA propone, las reglas validan, el usuario ejecuta con confianza. Siguiente paso: expandir integraciones con wearables y reforzar la analítica de progreso para recomendaciones aún más finas."
      ],
      tags: ["IA multimodal", "Groq API", "React Native", "Expo", "TypeScript", "FastAPI", "PostgreSQL", "SQLAlchemy async", "JWT", "OAuth", "HealthKit / Health Connect"]
    },
    aparcaya: {
      tag: "Proyecto full-stack",
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
      { title: "Curso de Especialización en Inteligencia Artificial y Big Data", where: "A distancia", tag: "Desde 14 oct 2026 · En curso" },
      { title: "Ciclo Superior DAM", where: "CEBEM · Desarrollo de Aplicaciones Multiplataforma", tag: "2024 - 2026 · Finalizado" },
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
    role: "Applied AI & process automation developer",
    photoCaption: "Gabriel Acevedo · 2026",
    contacts: { email: "Email", github: "GitHub", linkedin: "LinkedIn", cv: "Resume" },
    about: {
      eyebrow: "01 — About",
      title: "About me",
      meta: "Bio",
      body: "Multiplatform Application Developer with experience in web development and mobile app creation. I work as a freelancer under my brand Fío Dixital (fiodixital.com), building n8n and AI automations for small and medium-sized businesses, and since October 2026 I've been taking the Specialization Course in Artificial Intelligence and Big Data through distance learning. I'm interested in building efficient, scalable solutions, with a strong focus on modern frontend, good development practices and a clear technical foundation. My scientific background shaped the way I approach problems: I like understanding why things work, learning independently and adapting to new environments. I'm looking to bring value as a junior developer, keep growing professionally and join teams where I can learn, contribute and build thoughtful products."
    },
    skills: {
      eyebrow: "02 — Stack",
      title: "Tools I use daily",
      meta: "20 technologies"
    },
    projects: {
      eyebrow: "03 — Selected work",
      title: "Things I've shipped",
      meta: "5 featured"
    },
    education: {
      eyebrow: "04 — Education",
      title: "The path so far",
      meta: "Background"
    },
    asistente: {
      tag: "Conversational AI · In production",
      title: "AI appointment assistant on WhatsApp",
      tagline: "An agent that manages a dental clinic's appointments over WhatsApp.",
      body: [
        "**Conversational agent built with Claude**, with patient memory and voice-note transcription via Whisper. It checks, books, reschedules and cancels appointments autonomously through tools (tool calling).",
        "**Automated appointment lifecycle**: automatic reminders 48 h and 24 h ahead with confirmation, a waiting list that automatically offers freed-up slots, and urgent cases routed to the front desk.",
        "**Own data and a staff dashboard**: migration from Google Calendar to a dedicated database (PostgreSQL/NocoDB) with a web scheduling panel for the staff. Import and reconciliation of 4,984 patient records from PDF.",
        "**Security and reliability**: security audit with 10 findings resolved (injection, rate limiting, secrets management) and booking race conditions fixed. GDPR-compliant design."
      ],
      tags: ["n8n", "Claude", "Whisper", "WhatsApp Business API", "PostgreSQL", "NocoDB", "Docker", "Caddy", "Cloudflare"]
    },
    captacion: {
      tag: "AI automation",
      title: "Automated client acquisition system",
      tagline: "Local business prospecting with open data and AI-written outreach.",
      body: [
        "**n8n workflow** that finds local businesses using open data (OpenStreetMap / Overpass API).",
        "**Personalized messages with an LLM (Groq)**: the workflow drafts the outreach message for each business, with zero infrastructure cost."
      ],
      tags: ["n8n", "Overpass API", "Groq"]
    },
    integracion: {
      tag: "Integration · In development",
      title: "Clinic management software integration",
      tagline: "In development · early stage.",
      body: [
        "**Adapting the appointment assistant** to log appointments directly in another clinic's management software (Nubimed) through its REST API and webhooks."
      ],
      tags: ["Nubimed", "REST API", "Webhooks"]
    },
    nutria: {
      tag: "AI mobile app",
      title: "NutrIA",
      tagline: "Personalized nutrition and training, powered by multimodal AI.",
      body: [
        "**Cross-platform mobile app** for AI-driven personalized nutrition and training, built during my internship at SiwebAI Solutions. The system analyses goals, habits, allergies, physical progress and activity level to generate meal and workout plans tailored to each user. The mobile app combines guided experience, daily meal tracking, an intelligent coach-style chat and dynamic recommendations based on real body changes.",
        "**Multimodal AI via the Groq API** for the key tasks: plan generation, food-photo analysis and adjustment suggestions when the user plateaus. The AI works alongside a nutrition rule engine on a FastAPI backend: the flow doesn't return generic answers; it validates data, applies health constraints and prioritizes practical decisions for long-term adherence.",
        "**Production-grade architecture**: PostgreSQL with async SQLAlchemy, JWT auth with rotating refresh tokens, OAuth (Google/Apple), HealthKit / Health Connect integration, subscription tiers, usage control on premium features and food-catalog support. The result: a tool that doesn't just \"count calories\" — it walks alongside the full body-transformation process with context, precision and a focus on consistency.",
        "**The edge**: AI + deterministic rules + clear UX. AI proposes, rules validate, the user executes with confidence. Next step: expanding wearable integrations and tightening the progress analytics for even sharper recommendations."
      ],
      tags: ["Multimodal AI", "Groq API", "React Native", "Expo", "TypeScript", "FastAPI", "PostgreSQL", "Async SQLAlchemy", "JWT", "OAuth", "HealthKit / Health Connect"]
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
      { title: "Specialization Course in Artificial Intelligence and Big Data", where: "Distance learning", tag: "Since 14 Oct 2026 · In progress" },
      { title: "Higher VET — DAM", where: "CEBEM · Multiplatform Application Development", tag: "2024 - 2026 · Completed" },
      { title: "Science high school", where: "IES Val do Tea", tag: "2022 - 2024 · Completed" },
      { title: "Intro to AI Development Course", where: "BIG school", tag: "2026 · Certified" }
    ],
    code: "View code", web: "View site", view: "Open",
    footer: "© 2026 Gabriel Acevedo — Personal portfolio",
    scroll: "Scroll to explore"
  }
};

// name / kind: string, or { es, en } when the label differs per language
window.SKILLS = [
  { name: { es: "LLM vía API", en: "LLM via API" }, kind: "Claude · Llama/Groq · Whisper", icon: "LL" },
  { name: { es: "Agentes IA", en: "AI agents" },    kind: "Tool calling",                  icon: "Ag" },
  { name: "MCP",          kind: "Model Context Protocol", icon: "Mc" },
  { name: "n8n",          kind: { es: "Automatización", en: "Automation" }, icon: "n8" },
  { name: "WhatsApp API", kind: "Business API · Meta",    icon: "Wa" },
  { name: "React",        kind: "Library / UI",   icon: "Re" },
  { name: "React Native", kind: "Mobile",         icon: "RN" },
  { name: "Angular",      kind: "Framework",      icon: "Ng" },
  { name: "Astro",        kind: "Framework",      icon: "As" },
  { name: "TypeScript",   kind: "Lenguaje",       icon: "Ts" },
  { name: "JavaScript",   kind: "Lenguaje",       icon: "Js" },
  { name: "Java",         kind: "Lenguaje",       icon: "Jv" },
  { name: "Python",       kind: "Lenguaje",       icon: "Py" },
  { name: "Tailwind",     kind: "Estilos",        icon: "Tw" },
  { name: "Bases de datos", kind: "SQL · NoSQL",  icon: "DB" },
  { name: "PostgreSQL",   kind: { es: "Base de datos", en: "Database" }, icon: "Pg" },
  { name: "NocoDB",       kind: { es: "Base de datos", en: "Database" }, icon: "Nc" },
  { name: { es: "APIs REST", en: "REST APIs" }, kind: "Webhooks", icon: "Rs" },
  { name: "Docker",       kind: "DevOps",         icon: "Dk" },
  { name: "Cloudflare",   kind: "DevOps",         icon: "Cf" }
];
