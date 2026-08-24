import { useRef, useState } from "react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import type { Proyecto } from "../content";
import { useT } from "../i18n/core";
import { useReveal } from "../hooks/useReveal";

interface Props {
  proyecto: Proyecto;
  /** Ancho completo con la imagen al lado del texto. Para los destacados. */
  ancho?: boolean;
  delay?: number;
}

export default function ProjectCard({ proyecto: p, ancho = false, delay = 0 }: Props) {
  const { t, pick } = useT();
  const ref = useReveal<HTMLElement>(delay);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reproduciendo, setReproduciendo] = useState(false);

  /* El vídeo no se reproduce solo. Siete tarjetas reproduciendo a la vez
     calientan el portátil y se comen los datos del móvil, y el movimiento
     constante compite con el texto. Arranca al pasar por encima, que es
     cuando el visitante ha mostrado interés en ESA tarjeta. */
  const entrar = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play().then(() => setReproduciendo(true)).catch(() => {
      // Autoplay bloqueado: la miniatura se queda, que es un final digno.
    });
  };

  const salir = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
    setReproduciendo(false);
  };

  const media = (
    <div
      className={`relative overflow-hidden bg-[var(--color-surface-2)] ${ancho ? "h-full min-h-[15rem]" : ""}`}
      /* En la tarjeta ancha la imagen debe llenar el alto de la fila. Con
         una proporción fija se quedaba corta y dejaba un hueco muerto
         debajo, porque la columna de texto es más alta. */
      style={ancho ? undefined : { aspectRatio: "16 / 10" }}
    >
      {p.imagen && (
        <img
          src={p.imagen}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-top"
          style={{
            opacity: reproduciendo ? 0 : 1,
            transition: "opacity 260ms var(--ease-out)",
          }}
        />
      )}

      {p.video && (
        <video
          ref={videoRef}
          src={p.video}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      )}

      {/* Velo inferior: separa la imagen del borde de la tarjeta sin
          tapar la captura, que es lo que el visitante vino a ver. */}
      <div
        className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--color-surface-1), transparent)" }}
      />
    </div>
  );

  const cuerpo = (
    <div className={ancho ? "p-6 lg:p-8 flex flex-col justify-center" : "p-5"}>
      <div className="flex items-center gap-2.5 flex-wrap">
        <span className="t-meta">{p.año}</span>
        <span style={{ color: "var(--color-line-3)" }}>·</span>
        <span className="t-meta">{pick(p.rol)}</span>

        {p.destacado && (
          <span
            className="t-label px-2 py-0.5 rounded-full"
            style={{
              color: "var(--color-accent)",
              border: "1px solid var(--color-accent-lo)",
              letterSpacing: "0.08em",
            }}
          >
            {t("work.featured")}
          </span>
        )}
        {p.nuevo && !p.destacado && (
          <span
            className="t-label px-2 py-0.5 rounded-full"
            style={{ color: "var(--color-live)", border: "1px solid oklch(0.74 0.17 155 / 0.35)" }}
          >
            {t("work.new")}
          </span>
        )}
      </div>

      {/* El título SIEMPRE se ve. En la versión anterior estaba oculto tras
          `md:opacity-0`, así que en escritorio no se leía ni un nombre. */}
      <h3 className={ancho ? "t-section mt-3" : "t-card mt-2.5"}>{p.titulo}</h3>

      <p
        className="mt-2 leading-relaxed"
        style={{
          color: "var(--color-ink-2)",
          fontSize: ancho ? "var(--step-1)" : "0.9375rem",
        }}
      >
        {ancho ? pick(p.desc) : pick(p.resumen)}
      </p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {p.tech.map((tec) => (
          <li
            key={tec}
            className="px-2 py-1 rounded-md text-[0.6875rem]"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-ink-3)",
              background: "var(--color-surface-2)",
              border: "1px solid var(--color-line)",
            }}
          >
            {tec}
          </li>
        ))}
      </ul>

      <span
        className="mt-5 inline-flex items-center gap-1.5 text-[0.875rem] font-medium"
        style={{ color: "var(--color-accent)" }}
      >
        {p.tipo === "repo" ? <FiGithub className="w-4 h-4" /> : null}
        {t(p.tipo === "repo" ? "work.repo" : "work.visit")}
        <FiArrowUpRight className="w-4 h-4" />
      </span>
    </div>
  );

  return (
    <article ref={ref} className="reveal">
      {/* La tarjeta entera es el enlace: obliga a apuntar a un texto de
          cuatro palabras para abrir un proyecto era trabajo de más. */}
      <a
        href={p.url}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={entrar}
        onMouseLeave={salir}
        onFocus={entrar}
        onBlur={salir}
        className="surface lift press block overflow-hidden h-full"
      >
        {ancho ? (
          <div className="grid lg:grid-cols-2 items-stretch">
            <div className="lg:order-2">{media}</div>
            <div className="lg:order-1">{cuerpo}</div>
          </div>
        ) : (
          <>
            {media}
            {cuerpo}
          </>
        )}
      </a>
    </article>
  );
}
