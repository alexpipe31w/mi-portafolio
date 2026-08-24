import type { Bi } from "../i18n/core";

/* ═══════════════════════════════════════════════════════════════════════
   CONTENIDO

   Todo el texto vive aquí, en las dos lenguas, separado de la
   presentación. Antes estaba incrustado en el JSX de cada página, así que
   traducir obligaba a tocar el maquetado y era fácil que una página se
   quedara descolgada.
   ═══════════════════════════════════════════════════════════════════════ */

export const perfil = {
  nombre: "Alex Felipe Rodríguez P.",
  /* "Ingeniero de IA" no: es un título que no está expedido. Esto describe
     lo que hace de verdad — desarrollar, e implementar IA y automatización
     dentro de lo que desarrolla. */
  rol: {
    es: "Desarrollador Full-Stack · IA y automatización",
    en: "Full-Stack Developer · AI & automation",
  } satisfies Bi,
  ubicacion: { es: "Neiva, Colombia", en: "Neiva, Colombia" } satisfies Bi,
  email: "alexpipe31w@gmail.com",
  telefono: "+57 314 237 8407",
  whatsapp: "https://wa.me/573142378407",
  cv: "/cv.pdf",

  /* El titular de la home. Concreto y comprobable: dice qué construye y
     para quién, no "apasionado por la tecnología".                      */
  titular: {
    es: "Construyo plataformas SaaS que automatizan el negocio de verdad.",
    en: "I build SaaS platforms that actually automate the business.",
  } satisfies Bi,

  intro: {
    es: "Desarrollo sistemas que hacen el trabajo solos: plataformas de e-commerce multiinquilino, CRMs conectados a WhatsApp y agentes de IA que atienden clientes y cierran ventas. Siete de ellos están hoy en producción con clientes reales. Técnico Profesional en Soporte de Sistemas y Redes, estudiando Ingeniería de Software.",
    en: "I develop systems that do the work on their own: multitenant e-commerce platforms, WhatsApp-connected CRMs and AI agents that handle customers and close sales. Seven of them are in production today with real clients. Certified IT Systems & Networks technician, currently studying Software Engineering.",
  } satisfies Bi,
} as const;

export const redes = [
  { id: "github",    nombre: "GitHub",    url: "https://github.com/alexpipe31w" },
  { id: "linkedin",  nombre: "LinkedIn",  url: "https://www.linkedin.com/in/alex-felipe-rodriguez-b45778360" },
  { id: "x",         nombre: "X",         url: "https://x.com/ALEXFELIPE67363" },
  { id: "instagram", nombre: "Instagram", url: "https://www.instagram.com/alex_pip31?igsh=Z213aTFmNnZtcWFk&utm_source=qr" },
  { id: "whatsapp",  nombre: "WhatsApp",  url: "https://wa.me/573142378407" },
] as const;

/* Cifras que sostienen el titular. Cada una sale de algo real: los siete
   proyectos con enlace en vivo de más abajo, y los años que aparecen en
   la trayectoria. Nada inventado.                                        */
export const cifras: { valor: string; etiqueta: Bi }[] = [
  { valor: "7", etiqueta: { es: "proyectos en producción", en: "projects in production" } },
  { valor: "3", etiqueta: { es: "años construyendo", en: "years shipping" } },
  { valor: "2", etiqueta: { es: "SaaS propios", en: "SaaS products of my own" } },
];

export const stack = [
  "React", "Next.js", "TypeScript", "Node.js", "NestJS",
  "PostgreSQL", "Prisma", "TailwindCSS", "Docker", "Linux",
] as const;

/* ── Qué hago ─────────────────────────────────────────────────────────
   Seis áreas. Antes cada una tenía su propio degradado de color: seis
   colores compitiendo. Ahora se distinguen por contenido y orden, que es
   lo que de verdad importa.                                             */
export interface Area { id: string; titulo: Bi; desc: Bi }

export const areas: Area[] = [
  {
    id: "ai",
    titulo: { es: "Agentes de IA y automatización", en: "AI agents & automation" },
    desc: {
      es: "Agentes y flujos que trabajan solos, con n8n, LangChain y Groq. Conecto sistemas que no se hablaban entre sí para que operen sin nadie delante.",
      en: "Agents and workflows that run themselves, with n8n, LangChain and Groq. I connect systems that didn't talk to each other so they operate unattended.",
    },
  },
  {
    id: "saas",
    titulo: { es: "SaaS de e-commerce", en: "E-commerce SaaS" },
    desc: {
      es: "Plataformas multiinquilino como StockUp: analítica, inventario, pasarelas de pago y facturación por suscripción, con el aislamiento entre clientes resuelto en la base de datos.",
      en: "Multitenant platforms like StockUp: analytics, inventory, payment gateways and subscription billing, with tenant isolation solved at the database level.",
    },
  },
  {
    id: "crm",
    titulo: { es: "CRM sobre WhatsApp", en: "WhatsApp CRM" },
    desc: {
      es: "Plataformas conectadas a WhatsApp que reciben al cliente, toman el pedido, agendan la cita y responden con IA. Tiempo real con Socket.io.",
      en: "WhatsApp-connected platforms that greet the customer, take the order, book the appointment and reply with AI. Real time over Socket.io.",
    },
  },
  {
    id: "qa",
    titulo: { es: "Testing y QA automatizado", en: "Automated testing & QA" },
    desc: {
      es: "Pipelines de prueba con Postman, Cypress y JMeter, y pruebas de seguridad de API con herramientas OWASP.",
      en: "Test pipelines with Postman, Cypress and JMeter, plus API security testing with OWASP tooling.",
    },
  },
  {
    id: "fullstack",
    titulo: { es: "Desarrollo full-stack", en: "Full-stack development" },
    desc: {
      es: "Interfaces y APIs con React, Next.js, NestJS y TypeScript. Diseño responsive y rendimiento cuidado desde el primer commit.",
      en: "Interfaces and APIs with React, Next.js, NestJS and TypeScript. Responsive by default and performance minded from the first commit.",
    },
  },
  {
    id: "infra",
    titulo: { es: "Sistemas y redes", en: "Systems & networks" },
    desc: {
      es: "Técnico profesional titulado: administración de Linux, infraestructura con Docker, configuración de red y soporte de hardware.",
      en: "Certified technician: Linux administration, Docker infrastructure, network configuration and hardware support.",
    },
  },
];

/* ── Proyectos ────────────────────────────────────────────────────────
   `destacado` decide el tamaño en la rejilla: los dos primeros ocupan el
   ancho completo. Sin jerarquía, siete tarjetas idénticas no dicen cuál
   mirar primero.                                                        */
export interface Proyecto {
  id: string;
  titulo: string;
  año: string;
  rol: Bi;
  resumen: Bi;          // una línea, la que se lee en la tarjeta
  desc: Bi;             // el detalle
  tech: string[];
  url: string;
  tipo: "live" | "repo";
  video?: string;
  imagen?: string;
  destacado?: boolean;
  nuevo?: boolean;
}

export const proyectos: Proyecto[] = [
  {
    id: "stockup",
    titulo: "StockUp",
    año: "2026",
    rol: { es: "Producto propio", en: "My own product" },
    resumen: {
      es: "SaaS de e-commerce multiinquilino con analítica por IA",
      en: "Multitenant e-commerce SaaS with AI analytics",
    },
    desc: {
      es: "Plataforma para pymes: analítica y reportes con IA, campañas de email automatizadas, inventario y pedidos, planes de suscripción, pagos con Mercado Pago y Wompi, envíos multitransportista y autenticación en dos pasos. El stock se descuenta cuando entra el pago, no cuando alguien se acuerda.",
      en: "A platform for small businesses: AI analytics and reporting, automated email campaigns, inventory and orders, subscription plans, Mercado Pago and Wompi payments, multi-carrier shipping and two-factor auth. Stock is deducted when payment lands, not when someone remembers.",
    },
    tech: ["Next.js", "Prisma", "PostgreSQL", "Groq AI", "Mercado Pago", "Redis"],
    url: "https://stock-up-ashy.vercel.app/",
    tipo: "live",
    video: "/videos/stockup.mp4",
    imagen: "/images/stockup.png",
    destacado: true,
  },
  {
    id: "duvcore",
    titulo: "Duvcore Technology",
    año: "2026",
    rol: { es: "Desarrollo completo", en: "End-to-end build" },
    resumen: {
      es: "E-commerce con montaje de PC animado al scroll",
      en: "E-commerce with a scroll-driven PC build animation",
    },
    desc: {
      es: "Tienda para una marca colombiana de tecnología. Integrada con la API de StockUp para inventario y pago, animación de montaje de PC de 154 fotogramas ligada al scroll, chatbot con Groq, feed de TikTok vía Apify y un simulador para configurar tu equipo.",
      en: "Storefront for a Colombian tech brand. Wired to the StockUp API for inventory and checkout, a 154-frame scroll-driven PC assembly animation, a Groq-powered chatbot, a TikTok feed via Apify and a build-your-own-PC simulator.",
    },
    tech: ["Next.js", "TypeScript", "Framer Motion", "Groq AI", "StockUp API"],
    url: "https://duvcore-technology.vercel.app/",
    tipo: "live",
    video: "/videos/duvcore.mp4",
    destacado: true,
    nuevo: true,
  },
  {
    id: "mensajes",
    titulo: "StockUp Mensajes",
    año: "2026",
    rol: { es: "Producto propio", en: "My own product" },
    resumen: {
      es: "CRM sobre WhatsApp con respuestas de IA",
      en: "WhatsApp CRM with AI replies",
    },
    desc: {
      es: "Recibe al cliente por WhatsApp, toma el pedido, agenda la cita y conversa con IA. Tiempo real con Socket.io, arquitectura multiinquilino y panel de CRM completo.",
      en: "Greets the customer on WhatsApp, takes the order, books the appointment and holds the conversation with AI. Real time over Socket.io, multitenant architecture and a full CRM dashboard.",
    },
    tech: ["NestJS", "React", "Prisma", "Baileys", "Groq AI", "Socket.io"],
    url: "https://stockup-frontend.vercel.app/login",
    tipo: "live",
    imagen: "/images/stockup-mensajes.png",
    nuevo: true,
  },
  {
    id: "frutaza",
    titulo: "Frutaza",
    año: "2025",
    rol: { es: "Full-stack freelance", en: "Freelance full-stack" },
    resumen: {
      es: "E-commerce de fruta amazónica con Shopify headless",
      en: "Amazonian fruit e-commerce on headless Shopify",
    },
    desc: {
      es: "Tienda completa para productos de fruta amazónica: Shopify Storefront API en headless, scraping automatizado de TikTok con tareas programadas, chatbot con Dialogflow, pagos con Mercado Pago y animaciones de parallax.",
      en: "A full store for Amazonian fruit products: headless Shopify Storefront API, automated TikTok scraping on scheduled jobs, a Dialogflow chatbot, Mercado Pago payments and parallax animation.",
    },
    tech: ["Next.js", "Shopify API", "Node.js", "Dialogflow"],
    url: "https://www.frutaza.com.co/",
    tipo: "live",
    video: "/videos/frutaza.mp4",
    imagen: "/images/frutaza.png",
  },
  {
    id: "coffee",
    titulo: "Coffee Masfred",
    año: "2025",
    rol: { es: "Diseño y desarrollo", en: "Design & build" },
    resumen: {
      es: "Tienda para una marca de café de especialidad",
      en: "Storefront for a specialty coffee brand",
    },
    desc: {
      es: "Web de marca y tienda para un café de especialidad. Catálogo de producto, diseño responsive y maquetado pensado para convertir.",
      en: "Brand site and store for a specialty coffee roaster. Product catalogue, responsive design and a layout built to convert.",
    },
    tech: ["Next.js", "TailwindCSS", "TypeScript"],
    url: "https://coffee-masfred.vercel.app/",
    tipo: "live",
    video: "/videos/coffee-masfred.mp4",
    imagen: "/images/coffee-masfred.png",
  },
  {
    id: "panelplus",
    titulo: "Panel Plus Solar",
    año: "2024",
    rol: { es: "Desarrollo", en: "Development" },
    resumen: {
      es: "Web corporativa con simulador de inversión solar",
      en: "Corporate site with a solar investment simulator",
    },
    desc: {
      es: "Sitio corporativo con módulo de simulación para estimar el presupuesto de una instalación de paneles solares. Responsive, optimizado para SEO, con CMS y formularios de contacto.",
      en: "Corporate site with a simulation module that estimates the budget for a solar panel installation. Responsive, SEO-optimised, with a CMS and contact forms.",
    },
    tech: ["React", "TailwindCSS", "JavaScript"],
    url: "https://www.panelplussolar.com.co/",
    tipo: "live",
    video: "/videos/panelplus.mp4",
    imagen: "/images/panelplus.png",
  },
  {
    id: "flytours",
    titulo: "FlyTours",
    año: "2025",
    rol: { es: "Líder de proyecto", en: "Project lead" },
    resumen: {
      es: "SaaS de cotización para agencias de viaje",
      en: "Quotation SaaS for travel agencies",
    },
    desc: {
      es: "Plataforma para agencias de viaje con módulos de búsqueda de destino, selección de paquete y cotización automática. Definí los requisitos, repartí las tareas y supervisé el desarrollo del equipo.",
      en: "A platform for travel agencies with destination search, package selection and automated quotation. I defined the requirements, assigned the tasks and supervised the team's work.",
    },
    tech: ["React", "Node.js", "TypeScript", "MySQL"],
    url: "https://github.com/alexpipe31w/Flytours",
    tipo: "repo",
    imagen: "/images/flytours.png",
  },
];

/* ── Trayectoria ─────────────────────────────────────────────────── */
export interface Entrada {
  titulo: Bi;
  lugar: Bi;
  fecha: Bi;
  desc?: Bi;
  actual?: boolean;
}

export const experiencia: Entrada[] = [
  /* El empleo actual va primero: es lo que un reclutador busca antes que
     nada, y es lo más reciente de la lista. */
  {
    titulo: { es: "Soporte y desarrollo TIC — Discolmets", en: "IT support & development — Discolmets" },
    lugar: { es: "Discolmets · Área de TIC", en: "Discolmets · IT department" },
    fecha: { es: "Jul 2026 — Actualidad", en: "Jul 2026 — Present" },
    actual: true,
    desc: {
      es: "Doy soporte al ERP con el que opera la compañía: atiendo las incidencias y solicitudes de la plataforma y desarrollo los requerimientos que pide el negocio sobre ella.",
      en: "I support the ERP the company runs on: I handle the platform's incidents and requests, and build the requirements the business asks for on top of it.",
    },
  },
  {
    titulo: { es: "Desarrollador independiente — StockUp", en: "Independent developer — StockUp" },
    lugar: { es: "Producto propio", en: "My own product" },
    fecha: { es: "Feb 2026 — Actualidad", en: "Feb 2026 — Present" },
    actual: true,
    desc: {
      es: "Diseñé y construí StockUp de cero: SaaS de e-commerce multiinquilino con analítica por IA, email marketing automatizado, inventario, facturación por suscripción, Mercado Pago, envíos multitransportista y caché con Redis.",
      en: "Designed and built StockUp from scratch: a multitenant e-commerce SaaS with AI analytics, automated email marketing, inventory, subscription billing, Mercado Pago, multi-carrier shipping and Redis caching.",
    },
  },
  {
    titulo: { es: "Desarrollador independiente — StockUp Mensajes", en: "Independent developer — StockUp Mensajes" },
    lugar: { es: "Producto propio", en: "My own product" },
    fecha: { es: "Mar 2026 — Actualidad", en: "Mar 2026 — Present" },
    actual: true,
    desc: {
      es: "CRM conectado a WhatsApp con NestJS, React, Prisma y Baileys. Recepción de clientes, pedidos, agenda de citas y respuestas automáticas con Groq. Eventos en tiempo real con Socket.io y aislamiento multiinquilino.",
      en: "A WhatsApp-connected CRM with NestJS, React, Prisma and Baileys. Customer intake, orders, appointment booking and automatic replies with Groq. Real-time events over Socket.io and multitenant isolation.",
    },
  },
  {
    titulo: { es: "Desarrollador freelance — Coffee Masfred", en: "Freelance developer — Coffee Masfred" },
    lugar: { es: "Freelance", en: "Freelance" },
    fecha: { es: "2025", en: "2025" },
    desc: {
      es: "Web de marca y e-commerce para un café de especialidad, con Next.js y TailwindCSS.",
      en: "Brand site and e-commerce for a specialty coffee roaster, with Next.js and TailwindCSS.",
    },
  },
  {
    titulo: { es: "Full-stack freelance — Frutaza", en: "Freelance full-stack — Frutaza" },
    lugar: { es: "Neiva, Huila", en: "Neiva, Huila" },
    fecha: { es: "Nov 2025 — Dic 2025", en: "Nov 2025 — Dec 2025" },
    desc: {
      es: "E-commerce completo para productos de fruta amazónica: Next.js con SSR, Shopify Storefront API, Mercado Pago, scraping de TikTok con tareas programadas y chatbot de WhatsApp.",
      en: "A complete e-commerce for Amazonian fruit products: Next.js with SSR, Shopify Storefront API, Mercado Pago, TikTok scraping on scheduled jobs and a WhatsApp chatbot.",
    },
  },
  {
    titulo: { es: "Desarrollador — Panel Plus Solar", en: "Developer — Panel Plus Solar" },
    lugar: { es: "Neiva, Colombia", en: "Neiva, Colombia" },
    fecha: { es: "Ene 2024 — May 2024", en: "Jan 2024 — May 2024" },
    desc: {
      es: "Sitio oficial de la empresa: diseño responsive, SEO, CMS, formularios de contacto y módulo de simulación de inversión.",
      en: "The company's official site: responsive design, SEO, CMS, contact forms and an investment simulation module.",
    },
  },
  {
    titulo: { es: "Líder de proyecto — FlyTours", en: "Project lead — FlyTours" },
    lugar: { es: "Neiva, Colombia", en: "Neiva, Colombia" },
    fecha: { es: "Ene 2025 — Jul 2025", en: "Jan 2025 — Jul 2025" },
    desc: {
      es: "Dirigí el desarrollo de un SaaS para agencias de viaje. Definí requisitos, asigné tareas, supervisé al equipo e integré los módulos de búsqueda, selección y cotización.",
      en: "Led development of a SaaS for travel agencies. Defined requirements, assigned tasks, supervised the team and integrated the search, selection and quotation modules.",
    },
  },
];

export const educacion: Entrada[] = [
  {
    titulo: { es: "Ingeniería de Software", en: "Software Engineering" },
    lugar: { es: "Universidad FETJOP", en: "FETJOP University" },
    fecha: { es: "En curso", en: "Currently studying" },
    actual: true,
  },
  {
    titulo: {
      es: "Téc. Profesional en Soporte de Sistemas Informáticos y Redes",
      en: "Professional Technician in IT Systems & Networks Support",
    },
    lugar: { es: "Instituto Politécnico Americano", en: "Instituto Politécnico Americano" },
    fecha: { es: "2023 — 2024", en: "2023 — 2024" },
  },
  {
    titulo: {
      es: "Técnico en Electrónica y Telecomunicaciones",
      en: "Technical Diploma in Electronics & Telecommunications",
    },
    lugar: { es: "Instituto Politécnico Americano", en: "Instituto Politécnico Americano" },
    fecha: { es: "Ene — Dic 2023", en: "Jan — Dec 2023" },
  },
  {
    titulo: { es: "Técnico en Electromecánica", en: "Technical Diploma in Electromechanics" },
    lugar: { es: "Instituto Politécnico Americano", en: "Instituto Politécnico Americano" },
    fecha: { es: "Ene 2023 — Mar 2024", en: "Jan 2023 — Mar 2024" },
  },
  {
    titulo: {
      es: "Diplomado en Testing de Software y Pruebas Automatizadas",
      en: "Diploma in Software Testing & Automated Testing",
    },
    lugar: { es: "Universidad FETJOP", en: "FETJOP University" },
    fecha: { es: "Oct — Dic 2024", en: "Oct — Dec 2024" },
  },
  {
    titulo: { es: "Diplomado en Programación con Python", en: "Diploma in Python Programming" },
    lugar: { es: "Universidad FETJOP", en: "FETJOP University" },
    fecha: { es: "Nov — Dic 2024", en: "Nov — Dec 2024" },
  },
  {
    titulo: { es: "Inglés intensivo (A1 — B2)", en: "Intensive English (A1 — B2)" },
    lugar: { es: "Compañía KOE", en: "Compañía KOE" },
    fecha: { es: "Ene 2024 — May 2025", en: "Jan 2024 — May 2025" },
  },
  {
    titulo: { es: "Certificado de Inglés Avanzado", en: "Advanced English Certificate" },
    lugar: { es: "Ileusco, Universidad Surcolombiana", en: "Ileusco, Universidad Surcolombiana" },
    fecha: { es: "Ene 2025 — Actualidad", en: "Jan 2025 — Present" },
    actual: true,
  },
];

export const cursos: Entrada[] = [
  {
    titulo: { es: "Cisco Networking Academy", en: "Cisco Networking Academy" },
    lugar: {
      es: "Introducción a la Ciberseguridad · Linux Uncharted · Linux Essentials",
      en: "Introduction to Cybersecurity · Linux Uncharted · Linux Essentials",
    },
    fecha: { es: "", en: "" },
  },
  {
    titulo: { es: "Udemy", en: "Udemy" },
    lugar: {
      es: "Agentes RAG — Apps y GPTs con APIs, MCP, LangChain y n8n",
      en: "RAG Agents — Build apps & GPTs with APIs, MCP, LangChain and n8n",
    },
    fecha: { es: "", en: "" },
  },
  {
    titulo: { es: "IBM", en: "IBM" },
    lugar: {
      es: "IA Generativa: fundamentos de Prompt Engineering",
      en: "Generative AI: Prompt Engineering Basics",
    },
    fecha: { es: "", en: "" },
  },
  {
    titulo: { es: "Claseflix", en: "Claseflix" },
    lugar: { es: "JavaScript · SEO · Inglés A1–B2", en: "JavaScript · SEO · English A1–B2" },
    fecha: { es: "", en: "" },
  },
];

/* ── Actividad ───────────────────────────────────────────────────── */
export interface Evento {
  id: string;
  titulo: Bi;
  fecha: Bi;
  lugar: Bi;
  etiqueta: Bi;
  desc: Bi;
  url: string;
  imagen: string;
}

export const eventos: Evento[] = [
  {
    id: "col40",
    titulo: { es: "Colombia 4.0", en: "Colombia 4.0" },
    fecha: { es: "11–14 Sep 2025", en: "Sep 11–14, 2025" },
    lugar: { es: "Bogotá, Colombia", en: "Bogotá, Colombia" },
    etiqueta: { es: "Congreso", en: "Conference" },
    desc: {
      es: "Uno de los eventos de tecnología e innovación más grandes de Latinoamérica. Charlas de desarrollo de software, IA y ciberseguridad.",
      en: "One of Latin America's largest technology and innovation events. Talks on software development, AI and cybersecurity.",
    },
    url: "https://col40.co/",
    imagen: "/images/colombia40.jpeg",
  },
  {
    id: "hack1",
    titulo: { es: "Hackathon universitaria #1", en: "University hackathon #1" },
    fecha: { es: "16–17 May 2024", en: "May 16–17, 2024" },
    lugar: { es: "Universidad FETJOP, Neiva", en: "FETJOP University, Neiva" },
    etiqueta: { es: "Hackathon", en: "Hackathon" },
    desc: {
      es: "48 horas resolviendo un problema real en equipo, con la presión del reloj encima.",
      en: "48 hours solving a real problem as a team, with the clock against us.",
    },
    url: "https://www.facebook.com/share/v/1FXpr9AeGv/?mibextid=wwXIfr",
    imagen: "/images/hackathon-mayo.jpeg",
  },
  {
    id: "hack2",
    titulo: { es: "Hackathon universitaria #2", en: "University hackathon #2" },
    fecha: { es: "14 Nov 2024", en: "Nov 14, 2024" },
    lugar: { es: "Universidad FETJOP, Neiva", en: "FETJOP University, Neiva" },
    etiqueta: { es: "Hackathon", en: "Hackathon" },
    desc: {
      es: "Segunda participación, esta vez liderando el equipo y repartiendo el trabajo.",
      en: "Second time round, this time leading the team and splitting up the work.",
    },
    url: "https://www.facebook.com/share/p/19wLgSpHPR/?mibextid=wwXIfr",
    imagen: "/images/hackathon-nov.png",
  },
  {
    id: "feria",
    titulo: { es: "Feria de Ciencia y Tecnología del Huila", en: "Huila Science & Tech Fair" },
    fecha: { es: "16 Oct 2025", en: "Oct 16, 2025" },
    lugar: { es: "Oasis Plaza, Neiva", en: "Oasis Plaza, Neiva" },
    etiqueta: { es: "Feria", en: "Fair" },
    desc: {
      es: "Presenté proyectos ante estudiantes, emprendedores y profesionales de la región.",
      en: "Showed projects to students, founders and professionals from the region.",
    },
    url: "https://www.facebook.com/share/p/1RhWT6maro/?mibextid=wwXIfr",
    imagen: "/images/feriatec.jpeg",
  },
  {
    id: "electronica",
    titulo: { es: "Ferias de tecnología y electrónica", en: "Tech & electronics fairs" },
    fecha: { es: "2024 — 2025", en: "2024 — 2025" },
    lugar: { es: "Neiva, Colombia", en: "Neiva, Colombia" },
    etiqueta: { es: "Electrónica", en: "Electronics" },
    desc: {
      es: "Prototipos electrónicos en varias ferias, aplicando lo aprendido en el técnico de electrónica y telecomunicaciones.",
      en: "Electronic prototypes at several fairs, putting the electronics and telecoms diploma to use.",
    },
    url: "https://www.facebook.com/share/p/1CccoviLwz/?mibextid=wwXIfr",
    imagen: "/images/feria-tecnologia.JPG",
  },
];
