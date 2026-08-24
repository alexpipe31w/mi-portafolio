import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { perfil, cifras, areas, proyectos, stack } from "../content";
import { useT } from "../i18n/core";
import { useReveal } from "../hooks/useReveal";
import ProjectCard from "../components/ProjectCard";
import type { Seccion } from "../components/Nav";

export default function About({ ir }: { ir: (s: Seccion) => void }) {
  const { t, pick } = useT();
  const heroRef = useReveal<HTMLDivElement>();
  const areasRef = useReveal<HTMLDivElement>();
  const stackRef = useReveal<HTMLDivElement>();

  const destacados = proyectos.filter((p) => p.destacado);

  return (
    <div className="pb-24">
      {/* ── Portada ───────────────────────────────────────────────────
          Un titular que dice qué construye, la prueba en números justo
          debajo, y dos acciones. Antes esto era "About Me" en degradado
          con brillo animado: bonito de lejos, vacío de cerca. */}
      <section ref={heroRef} className="reveal pt-14 lg:pt-20">
        <h2 className="t-display max-w-[19ch]">{pick(perfil.titular)}</h2>

        <p
          className="mt-6 max-w-[62ch] leading-relaxed"
          style={{ fontSize: "var(--step-1)", color: "var(--color-ink-2)" }}
        >
          {pick(perfil.intro)}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => ir("work")}
            className="press inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[0.9375rem] font-semibold transition-colors duration-150"
            style={{ background: "var(--color-accent)", color: "var(--color-accent-ink)" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--color-accent-hi)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "var(--color-accent)"; }}
          >
            {t("about.seeAll")}
            <FiArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => ir("contact")}
            className="press lift inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[0.9375rem] font-medium"
            style={{ border: "1px solid var(--color-line-2)", color: "var(--color-ink-2)" }}
          >
            {t("contact.title")}
          </button>
        </div>

        {/* Cifras. Cada una sale de datos reales de esta misma página. */}
        <dl
          className="mt-12 grid grid-cols-3 gap-6 max-w-lg pt-8"
          style={{ borderTop: "1px solid var(--color-line)" }}
        >
          {cifras.map((c) => (
            <div key={c.valor}>
              <dt className="sr-only">{pick(c.etiqueta)}</dt>
              <dd>
                <span
                  className="block font-semibold"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.875rem",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  {c.valor}
                </span>
                <span
                  className="block mt-2 text-[0.8125rem] leading-snug"
                  style={{ color: "var(--color-ink-3)" }}
                >
                  {pick(c.etiqueta)}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── Trabajo destacado ─────────────────────────────────────── */}
      <section className="mt-24 lg:mt-32">
        <header className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="t-label">{t("about.selected")}</p>
            <h3 className="t-section mt-2">
              {pick({ es: "Dos que enseñan mejor cómo trabajo", en: "Two that show best how I work" })}
            </h3>
          </div>
          <button
            type="button"
            onClick={() => ir("work")}
            className="press inline-flex items-center gap-1.5 text-[0.875rem] font-medium transition-colors duration-150"
            style={{ color: "var(--color-accent)" }}
          >
            {t("about.seeAll")}
            <FiArrowUpRight className="w-4 h-4" />
          </button>
        </header>

        <div className="mt-8 space-y-6">
          {destacados.map((p, i) => (
            <ProjectCard key={p.id} proyecto={p} ancho delay={i * 70} />
          ))}
        </div>
      </section>

      {/* ── Qué hago ──────────────────────────────────────────────────
          Seis áreas separadas por líneas y numeradas, no seis cajas de
          seis colores. La numeración da orden de lectura; el color se
          reserva para las acciones. */}
      <section ref={areasRef} className="reveal mt-24 lg:mt-32">
        <p className="t-label">{t("about.lede")}</p>
        <h3 className="t-section mt-2 max-w-[24ch]">
          {pick({
            es: "De la idea al sistema que funciona solo",
            en: "From the idea to a system that runs itself",
          })}
        </h3>

        <div className="mt-10 grid md:grid-cols-2 gap-x-12">
          {areas.map((a, i) => (
            <article
              key={a.id}
              className="py-6 flex gap-5"
              style={{ borderTop: "1px solid var(--color-line)" }}
            >
              <span
                className="shrink-0 pt-1"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--color-ink-3)",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h4
                  className="font-semibold"
                  style={{ fontFamily: "var(--font-display)", fontSize: "1.0625rem", letterSpacing: "-0.01em" }}
                >
                  {pick(a.titulo)}
                </h4>
                <p
                  className="mt-2 leading-relaxed text-[0.9375rem]"
                  style={{ color: "var(--color-ink-2)" }}
                >
                  {pick(a.desc)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Stack ─────────────────────────────────────────────────── */}
      <section ref={stackRef} className="reveal mt-24 lg:mt-32">
        <p className="t-label">{t("about.stack")}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {stack.map((s) => (
            <li
              key={s}
              className="px-3 py-1.5 rounded-lg text-[0.8125rem]"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--color-ink-2)",
                background: "var(--color-surface-1)",
                border: "1px solid var(--color-line)",
              }}
            >
              {s}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
