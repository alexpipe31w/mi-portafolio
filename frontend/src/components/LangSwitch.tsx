import { useT, type Lang } from "../i18n/core";

const OPCIONES: { id: Lang; etiqueta: string }[] = [
  { id: "es", etiqueta: "ES" },
  { id: "en", etiqueta: "EN" },
];

/**
 * Conmutador de idioma.
 *
 * El fondo del estado activo es un solo elemento que se desliza, no un
 * color que aparece y desaparece en cada botón: así el cambio se lee como
 * un movimiento continuo entre dos posiciones y no como dos parpadeos.
 */
export default function LangSwitch() {
  const { lang, setLang } = useT();
  const indice = OPCIONES.findIndex((o) => o.id === lang);

  return (
    <div
      role="group"
      aria-label="Idioma / Language"
      className="relative inline-flex p-0.5 rounded-lg"
      style={{ background: "var(--color-surface-2)", border: "1px solid var(--color-line)" }}
    >
      {/* Pastilla deslizante */}
      <span
        aria-hidden
        className="absolute top-0.5 bottom-0.5 rounded-[6px]"
        style={{
          left: 2,
          width: "calc(50% - 2px)",
          background: "var(--color-surface-3)",
          border: "1px solid var(--color-line-2)",
          transform: `translateX(${indice * 100}%)`,
          transition: "transform 220ms var(--ease-out)",
        }}
      />

      {OPCIONES.map((o) => {
        const activo = o.id === lang;
        return (
          <button
            key={o.id}
            type="button"
            onClick={() => setLang(o.id)}
            aria-pressed={activo}
            className="relative z-10 px-3.5 py-1.5 text-[0.6875rem] font-semibold tracking-[0.08em] transition-colors duration-150"
            style={{
              fontFamily: "var(--font-mono)",
              color: activo ? "var(--color-ink)" : "var(--color-ink-3)",
            }}
          >
            {o.etiqueta}
          </button>
        );
      })}
    </div>
  );
}
