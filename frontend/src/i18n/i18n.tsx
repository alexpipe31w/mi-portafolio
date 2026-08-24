import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  CLAVE_IDIOMA, I18nCtx, UI, idiomaInicial,
  type CtxI18n, type Lang,
} from "./core";

const TITULO: Record<Lang, string> = {
  es: "Alex Felipe Rodríguez — Desarrollador Full-Stack, IA y automatización",
  en: "Alex Felipe Rodríguez — Full-Stack Developer, AI & automation",
};

const DESCRIPCION: Record<Lang, string> = {
  es: "Construyo plataformas SaaS multiinquilino, CRMs sobre WhatsApp y agentes de IA. Siete proyectos en producción con clientes reales. Neiva, Colombia — disponible en remoto.",
  en: "I build multitenant SaaS platforms, WhatsApp CRMs and AI agents. Seven projects in production with real clients. Neiva, Colombia — available remotely.",
};

/**
 * Provee el idioma a toda la aplicación.
 *
 * Este módulo exporta SOLO el componente: el contexto, el diccionario y el
 * hook viven en `core.ts`. Mezclarlos rompe Fast Refresh de React.
 */
export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(idiomaInicial);

  // El atributo `lang` del documento importa para lectores de pantalla y
  // para que el navegador ofrezca traducir la página con criterio. El
  // título y la descripción acompañan: si no, la pestaña y lo que se ve al
  // compartir el enlace se quedan en el idioma que no toca.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = TITULO[lang];

    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", DESCRIPCION[lang]);
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(CLAVE_IDIOMA, l);
    } catch {
      // Si no se puede guardar, el idioma sigue vivo en memoria.
    }
  }, []);

  const valor = useMemo<CtxI18n>(() => ({
    lang,
    setLang,
    t: (k) => UI[k][lang],
    pick: (v) => v[lang],
  }), [lang, setLang]);

  return <I18nCtx.Provider value={valor}>{children}</I18nCtx.Provider>;
}
