import { FiArrowUpRight } from "react-icons/fi";
import { eventos } from "../content";
import { useT } from "../i18n/core";
import { useReveal } from "../hooks/useReveal";

export default function Activity() {
  const { t, pick } = useT();
  const headRef = useReveal<HTMLElement>();

  return (
    <div className="pb-24">
      <header ref={headRef} className="reveal pt-14 lg:pt-20">
        <h2 className="t-display max-w-[16ch]">
          {pick({ es: "Fuera del editor", en: "Away from the editor" })}
        </h2>
        <p
          className="mt-5 max-w-[56ch] leading-relaxed"
          style={{ fontSize: "var(--step-1)", color: "var(--color-ink-2)" }}
        >
          {t("activity.intro")}
        </p>
      </header>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventos.map((e, i) => (
          <Tarjeta key={e.id} evento={e} delay={i * 60} />
        ))}
      </div>
    </div>
  );
}

function Tarjeta({ evento: e, delay }: { evento: (typeof eventos)[number]; delay: number }) {
  const { t, pick } = useT();
  const ref = useReveal<HTMLElement>(delay);

  return (
    <article ref={ref} className="reveal">
      <a
        href={e.url}
        target="_blank"
        rel="noreferrer"
        className="surface lift press block overflow-hidden h-full"
      >
        <div
          className="relative overflow-hidden bg-[var(--color-surface-2)]"
          style={{ aspectRatio: "3 / 2" }}
        >
          <img
            src={e.imagen}
            alt=""
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <span
            className="absolute top-3 left-3 t-label px-2 py-1 rounded-md"
            style={{
              background: "oklch(0.16 0.01 265 / 0.82)",
              backdropFilter: "blur(8px)",
              color: "var(--color-ink-2)",
              letterSpacing: "0.08em",
            }}
          >
            {pick(e.etiqueta)}
          </span>
        </div>

        <div className="p-5">
          {/* Fecha y lugar en líneas propias. Con "fecha · lugar" en una
              sola línea el separador se quedaba huérfano al final cuando el
              lugar no cabía, y se leía "16–17 May 2024 ·" cortado. */}
          <div className="space-y-0.5">
            <p className="t-meta">{pick(e.fecha)}</p>
            <p className="t-meta">{pick(e.lugar)}</p>
          </div>

          <h3 className="t-card mt-2.5">{pick(e.titulo)}</h3>

          <p
            className="mt-2 leading-relaxed text-[0.9375rem]"
            style={{ color: "var(--color-ink-2)" }}
          >
            {pick(e.desc)}
          </p>

          <span
            className="mt-4 inline-flex items-center gap-1.5 text-[0.875rem] font-medium"
            style={{ color: "var(--color-accent)" }}
          >
            {t("activity.link")}
            <FiArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </a>
    </article>
  );
}
