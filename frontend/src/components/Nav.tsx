import { useLayoutEffect, useRef, useState } from "react";
import { useT, type ClaveUI } from "../i18n/core";

export const SECCIONES = ["about", "work", "resume", "activity", "contact"] as const;
export type Seccion = (typeof SECCIONES)[number];

interface Props {
  activa: Seccion;
  onChange: (s: Seccion) => void;
}

/**
 * Navegación principal.
 *
 * El indicador de la sección activa es un único elemento que se mide y se
 * mueve, en lugar de un fondo que se enciende en un botón y se apaga en
 * otro. Se mide en `useLayoutEffect` (antes de pintar) para que no haya un
 * fotograma con la pastilla en el sitio equivocado, y se vuelve a medir al
 * cambiar de idioma, porque "Trayectoria" y "Resume" no miden lo mismo.
 */
export default function Nav({ activa, onChange }: Props) {
  const { t, lang } = useT();
  const listaRef = useRef<HTMLDivElement>(null);
  const botones = useRef(new Map<Seccion, HTMLButtonElement>());
  const [pastilla, setPastilla] = useState({ left: 0, width: 0, listo: false });

  useLayoutEffect(() => {
    const btn = botones.current.get(activa);
    const lista = listaRef.current;
    if (!btn || !lista) return;

    const medir = () => {
      setPastilla({
        left: btn.offsetLeft,
        width: btn.offsetWidth,
        listo: true,
      });
    };
    medir();

    // El ancho de los botones cambia con la tipografía y con el idioma.
    const ro = new ResizeObserver(medir);
    ro.observe(lista);
    return () => ro.disconnect();
  }, [activa, lang]);

  return (
    <nav
      className="glass sticky top-0 z-30 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10"
      style={{ borderLeft: 0, borderRight: 0, borderTop: 0 }}
    >
      <div
        ref={listaRef}
        className="relative flex items-center gap-1 overflow-x-auto py-3"
        style={{ scrollbarWidth: "none" }}
      >
        {pastilla.listo && (
          <span
            aria-hidden
            className="absolute rounded-lg"
            style={{
              left: 0,
              top: "0.75rem",
              bottom: "0.75rem",
              width: pastilla.width,
              background: "var(--color-surface-2)",
              border: "1px solid var(--color-line-2)",
              transform: `translateX(${pastilla.left}px)`,
              transition:
                "transform 300ms var(--ease-out), width 300ms var(--ease-out)",
            }}
          />
        )}

        {SECCIONES.map((s) => {
          const esActiva = s === activa;
          return (
            <button
              key={s}
              ref={(el) => {
                if (el) botones.current.set(s, el);
                else botones.current.delete(s);
              }}
              type="button"
              onClick={() => onChange(s)}
              aria-current={esActiva ? "page" : undefined}
              className="press relative z-10 shrink-0 px-3.5 py-2 rounded-lg text-[0.875rem] font-medium transition-colors duration-150"
              style={{ color: esActiva ? "var(--color-ink)" : "var(--color-ink-3)" }}
            >
              {t(`nav.${s}` as ClaveUI)}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
