import { createContext, useContext } from "react";

/* ═══════════════════════════════════════════════════════════════════════
   BILINGÜE ES/EN — contexto, diccionario y hook.

   Va aparte del Provider a propósito: un módulo que exporta a la vez un
   componente y constantes rompe Fast Refresh de React, y el linter lo
   marca. Aquí no hay componentes; el Provider vive en `i18n.tsx`.

   Sin librería de i18n: dos idiomas y un diccionario plano no justifican
   meter i18next en el bundle. Dos piezas:

   - `Bi<T>` — cualquier dato con versión en cada idioma. El contenido
               (proyectos, experiencia, eventos) se escribe así.
   - `UI`    — cadenas sueltas de interfaz, por clave.
   ═══════════════════════════════════════════════════════════════════════ */

export type Lang = "es" | "en";

/** Un valor con sus dos versiones. */
export type Bi<T = string> = { es: T; en: T };

export const CLAVE_IDIOMA = "lang";

export const UI = {
  // Navegación
  "nav.about":     { es: "Perfil",      en: "About"     },
  "nav.work":      { es: "Proyectos",   en: "Work"      },
  "nav.resume":    { es: "Trayectoria", en: "Resume"    },
  "nav.activity":  { es: "Actividad",   en: "Activity"  },
  "nav.contact":   { es: "Contacto",    en: "Contact"   },

  // Sidebar
  "side.available":  { es: "Disponible para proyectos",  en: "Available for work" },
  "side.stack":      { es: "Stack",                      en: "Stack"              },
  "side.languages":  { es: "Idiomas",                    en: "Languages"          },
  "side.cv":         { es: "Descargar CV",               en: "Download CV"        },
  "side.spanish":    { es: "Español — nativo",           en: "Spanish — native"   },
  "side.english":    { es: "Inglés — B2",                en: "English — B2"       },

  // Perfil
  "about.lede":      { es: "Qué hago",              en: "What I do"          },
  "about.selected":  { es: "Trabajo destacado",     en: "Selected work"      },
  "about.stack":     { es: "Tecnologías",           en: "Technologies"       },
  "about.seeAll":    { es: "Ver los 7 proyectos",   en: "See all 7 projects" },

  // Proyectos
  "work.count":      { es: "proyectos en producción", en: "projects in production" },
  "work.visit":      { es: "Ver en vivo",             en: "Visit live"             },
  "work.repo":       { es: "Ver repositorio",         en: "View repository"        },
  "work.featured":   { es: "Destacado",               en: "Featured"               },
  "work.new":        { es: "Nuevo",                   en: "New"                    },

  // Trayectoria
  "resume.experience": { es: "Experiencia",              en: "Experience"               },
  "resume.education":  { es: "Formación",                en: "Education"                },
  "resume.courses":    { es: "Cursos y certificaciones", en: "Courses & certifications" },

  // Actividad
  "activity.intro":  { es: "Eventos, hackathons y ferias en los que he participado.",
                       en: "Events, hackathons and fairs I've taken part in." },
  "activity.link":   { es: "Ver publicación", en: "View post" },

  // Contacto
  "contact.title":   { es: "Hablemos", en: "Let's talk" },
  "contact.lede":    { es: "¿Tienes un proyecto en mente? Escríbeme y respondo en menos de 24 horas.",
                       en: "Got a project in mind? Drop me a line — I reply within 24 hours." },
  "contact.name":    { es: "Nombre",  en: "Name"    },
  "contact.email":   { es: "Correo",  en: "Email"   },
  "contact.message": { es: "Mensaje", en: "Message" },
  "contact.send":    { es: "Enviar mensaje", en: "Send message" },
  "contact.sending": { es: "Enviando…",      en: "Sending…"     },
  "contact.sent":    { es: "Mensaje enviado. Gracias.", en: "Message sent. Thank you." },
  "contact.error":   { es: "No se pudo enviar. Escríbeme por correo o WhatsApp.",
                       en: "Couldn't send. Reach me by email or WhatsApp instead." },
  "contact.direct":  { es: "O directamente",             en: "Or reach me directly"        },
  "contact.required":{ es: "Rellena todos los campos.",  en: "Please fill in every field." },
  "contact.bademail":{ es: "Ese correo no parece válido.", en: "That email doesn't look valid." },

  // Chat
  "chat.open":        { es: "Abrir el asistente",          en: "Open the assistant" },
  "chat.close":       { es: "Cerrar",                      en: "Close"              },
  "chat.title":       { es: "Asistente IA",                en: "AI assistant"       },
  "chat.subtitle":    { es: "Pregúntale sobre mi trabajo", en: "Ask about my work"  },
  "chat.placeholder": { es: "Escribe tu pregunta…",        en: "Type your question…" },
  "chat.send":        { es: "Enviar",                      en: "Send"               },
} satisfies Record<string, Bi>;

export type ClaveUI = keyof typeof UI;

export interface CtxI18n {
  lang: Lang;
  setLang: (l: Lang) => void;
  /** Cadena de interfaz por clave. */
  t: (k: ClaveUI) => string;
  /** Resuelve un dato bilingüe al idioma activo. */
  pick: <T>(v: Bi<T>) => T;
}

export const I18nCtx = createContext<CtxI18n | null>(null);

export function useT(): CtxI18n {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useT() necesita estar dentro de <I18nProvider>");
  return ctx;
}

export function idiomaInicial(): Lang {
  if (typeof window === "undefined") return "es";
  try {
    const guardado = localStorage.getItem(CLAVE_IDIOMA);
    if (guardado === "es" || guardado === "en") return guardado;
  } catch {
    // Modo privado o cookies bloqueadas: no es motivo para romper la página.
  }
  return navigator.language?.toLowerCase().startsWith("en") ? "en" : "es";
}
