import { FiDownload } from "react-icons/fi";
import { experiencia, educacion, cursos, perfil, type Entrada } from "../content";
import { useT, type ClaveUI } from "../i18n/core";
import { useReveal } from "../hooks/useReveal";

/**
 * Una entrada de la trayectoria.
 *
 * La fecha vive en su propia columna, no en un punto colocado con
 * `position:absolute` y desplazamiento negativo. Así era antes y el punto
 * caía encima de la primera letra de cada título: se leía "oftware
 * Engineering". Con una rejilla, nada puede solaparse.
 */
function Fila({ entrada, ultima }: { entrada: Entrada; ultima: boolean }) {
  const { pick } = useT();
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="reveal grid sm:grid-cols-[10.5rem_1fr] gap-x-6">
      {/* Columna de fecha */}
      <div className="pt-0.5">
        <span className="t-meta">{pick(entrada.fecha)}</span>
      </div>

      {/* Columna de contenido, con la guía vertical y su punto */}
      <div className="relative pl-6 pb-9">
        <span
          aria-hidden
          className="absolute left-0 top-[0.4rem] w-[7px] h-[7px] rounded-full"
          style={{
            background: entrada.actual ? "var(--color-live)" : "var(--color-line-3)",
            transform: "translateX(-3px)",
          }}
        />
        {!ultima && (
          <span
            aria-hidden
            className="absolute left-0 top-[0.9rem] bottom-0 w-px"
            style={{ background: "var(--color-line)" }}
          />
        )}

        <h4
          className="font-semibold"
          style={{ fontFamily: "var(--font-display)", fontSize: "1.0625rem", letterSpacing: "-0.01em" }}
        >
          {pick(entrada.titulo)}
        </h4>
        <p className="mt-1 text-[0.875rem]" style={{ color: "var(--color-ink-3)" }}>
          {pick(entrada.lugar)}
        </p>
        {entrada.desc && (
          <p
            className="mt-3 leading-relaxed text-[0.9375rem] max-w-[68ch]"
            style={{ color: "var(--color-ink-2)" }}
          >
            {pick(entrada.desc)}
          </p>
        )}
      </div>
    </div>
  );
}

function Bloque({ clave, entradas }: { clave: ClaveUI; entradas: Entrada[] }) {
  const { t } = useT();
  return (
    <section className="mt-16 lg:mt-20">
      <h3 className="t-label pb-5" style={{ borderBottom: "1px solid var(--color-line)" }}>
        {t(clave)}
      </h3>
      <div className="mt-8">
        {entradas.map((e, i) => (
          <Fila key={`${e.titulo.es}-${i}`} entrada={e} ultima={i === entradas.length - 1} />
        ))}
      </div>
    </section>
  );
}

export default function Resume() {
  const { t, pick } = useT();
  const headRef = useReveal<HTMLElement>();

  return (
    <div className="pb-24">
      <header ref={headRef} className="reveal pt-14 lg:pt-20 flex items-end justify-between gap-6 flex-wrap">
        <h2 className="t-display max-w-[15ch]">
          {pick({ es: "Cómo llegué hasta aquí", en: "How I got here" })}
        </h2>

        <a
          href={perfil.cv}
          target="_blank"
          rel="noreferrer"
          className="press lift inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-[0.875rem] font-medium"
          style={{ border: "1px solid var(--color-line-2)", color: "var(--color-ink-2)" }}
        >
          <FiDownload className="w-4 h-4" />
          {t("side.cv")}
        </a>
      </header>

      <Bloque clave="resume.experience" entradas={experiencia} />
      <Bloque clave="resume.education" entradas={educacion} />
      <Bloque clave="resume.courses" entradas={cursos} />
    </div>
  );
}
