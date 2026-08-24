import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { FiMapPin, FiMail, FiPhone, FiDownload, FiArrowUpRight } from "react-icons/fi";
import {
  SiReact, SiNodedotjs, SiTypescript, SiTailwindcss,
  SiLinux, SiDocker, SiNestjs, SiPostgresql,
} from "react-icons/si";
import avatar from "../assets/avatar.webp";
import { perfil, redes } from "../content";
import { useT } from "../i18n/core";
import LangSwitch from "./LangSwitch";

const iconosRed = {
  github: FaGithub, linkedin: FaLinkedin, x: FaXTwitter,
  instagram: FaInstagram, whatsapp: FaWhatsapp,
} as const;

/* Los iconos de tecnología van en monocromo a propósito. Con el color de
   cada marca eran ocho colores distintos peleándose en 200px — el mismo
   arcoíris que el resto del rediseño elimina. En gris se leen como un
   grupo, y el color queda libre para lo que sí importa: las acciones. */
const tecnologias = [
  { Icon: SiReact, label: "React" },
  { Icon: SiNodedotjs, label: "Node.js" },
  { Icon: SiNestjs, label: "NestJS" },
  { Icon: SiTypescript, label: "TypeScript" },
  { Icon: SiPostgresql, label: "PostgreSQL" },
  { Icon: SiTailwindcss, label: "Tailwind" },
  { Icon: SiDocker, label: "Docker" },
  { Icon: SiLinux, label: "Linux" },
];

export default function Sidebar() {
  const { t, pick } = useT();

  return (
    <aside
      className="
        lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto
        w-full lg:w-[19rem] shrink-0
        px-6 py-8 lg:px-7 lg:py-9
        border-b lg:border-b-0 lg:border-r
      "
      style={{ borderColor: "var(--color-line)" }}
    >
      {/* Identidad ───────────────────────────────────────────────────
          En móvil esto es una cabecera compacta, no la ficha entera: si
          ocupa toda la primera pantalla, el visitante llega y ve datos en
          vez de trabajo. Los bloques secundarios (contacto detallado,
          stack, idiomas) aparecen solo a partir de `lg`; en móvil esa
          información vive en la página de Contacto, que es donde se busca. */}
      <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-0">
        <img
          src={avatar}
          alt={perfil.nombre}
          width={72}
          height={72}
          className="w-[4.5rem] h-[4.5rem] rounded-full object-cover shrink-0"
          style={{ border: "1px solid var(--color-line-2)" }}
        />

        <div className="lg:mt-5 min-w-0">
          <h1
            className="font-semibold leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.0625rem",
              letterSpacing: "-0.015em",
            }}
          >
            {perfil.nombre}
          </h1>
          <p className="text-[0.8125rem] mt-1" style={{ color: "var(--color-ink-2)" }}>
            {pick(perfil.rol)}
          </p>
        </div>
      </div>

      {/* Disponibilidad. Punto estático: una pulsación lenta e infinita en
          la periferia distrae durante toda la visita y no aporta nada. */}
      <p
        className="mt-5 inline-flex items-center gap-2 text-[0.8125rem]"
        style={{ color: "var(--color-live)" }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full shrink-0"
          style={{ background: "var(--color-live)", boxShadow: "0 0 0 3px oklch(0.74 0.17 155 / 0.16)" }}
        />
        {t("side.available")}
      </p>

      {/* Contacto ──────────────────────────────────────────────────── */}
      <ul className="hidden lg:block mt-7 space-y-2.5 text-[0.8125rem]">
        <li className="flex items-center gap-2.5" style={{ color: "var(--color-ink-2)" }}>
          <FiMapPin className="w-4 h-4 shrink-0" style={{ color: "var(--color-ink-3)" }} />
          {pick(perfil.ubicacion)}
        </li>
        <li>
          <a
            href={`mailto:${perfil.email}`}
            className="flex items-center gap-2.5 transition-colors duration-150 hover:text-[var(--color-accent)] break-all"
            style={{ color: "var(--color-ink-2)" }}
          >
            <FiMail className="w-4 h-4 shrink-0" style={{ color: "var(--color-ink-3)" }} />
            {perfil.email}
          </a>
        </li>
        <li>
          <a
            href={`tel:${perfil.telefono.replace(/\s/g, "")}`}
            className="flex items-center gap-2.5 transition-colors duration-150 hover:text-[var(--color-accent)]"
            style={{ color: "var(--color-ink-2)" }}
          >
            <FiPhone className="w-4 h-4 shrink-0" style={{ color: "var(--color-ink-3)" }} />
            {perfil.telefono}
          </a>
        </li>
      </ul>

      {/* Redes ─────────────────────────────────────────────────────── */}
      <div className="hidden lg:flex mt-6 items-center gap-1">
        {redes.map(({ id, nombre, url }) => {
          const Icon = iconosRed[id as keyof typeof iconosRed];
          return (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noreferrer"
              title={nombre}
              aria-label={nombre}
              className="press p-2 rounded-lg transition-colors duration-150 hover:bg-[var(--color-surface-2)] hover:text-[var(--color-ink)]"
              style={{ color: "var(--color-ink-3)" }}
            >
              <Icon className="w-[1.05rem] h-[1.05rem]" />
            </a>
          );
        })}
      </div>

      {/* Stack ─────────────────────────────────────────────────────── */}
      <div className="hidden lg:block mt-8">
        <h2 className="t-label">{t("side.stack")}</h2>
        <div className="mt-3 flex flex-wrap gap-x-3.5 gap-y-3">
          {tecnologias.map(({ Icon, label }) => (
            <span
              key={label}
              title={label}
              className="transition-colors duration-150 hover:text-[var(--color-ink)]"
              style={{ color: "var(--color-ink-3)" }}
            >
              <Icon className="w-[1.15rem] h-[1.15rem]" />
              <span className="sr-only">{label}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Idiomas ───────────────────────────────────────────────────── */}
      <div className="hidden lg:block mt-8">
        <h2 className="t-label">{t("side.languages")}</h2>
        <ul className="mt-3 space-y-1.5 text-[0.8125rem]" style={{ color: "var(--color-ink-2)" }}>
          <li>{t("side.spanish")}</li>
          <li>{t("side.english")}</li>
        </ul>
      </div>

      {/* Acciones. Lado a lado en móvil, apiladas en la columna. ───── */}
      <div className="mt-6 lg:mt-8 grid grid-cols-2 lg:grid-cols-1 gap-3">
        <a
          href={perfil.cv}
          target="_blank"
          rel="noreferrer"
          className="press w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-[0.8125rem] font-semibold transition-colors duration-150"
          style={{ background: "var(--color-accent)", color: "var(--color-accent-ink)" }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "var(--color-accent-hi)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "var(--color-accent)"; }}
        >
          <FiDownload className="w-4 h-4" />
          {t("side.cv")}
        </a>

        <a
          href={perfil.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="press lift w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-[0.8125rem] font-medium"
          style={{
            border: "1px solid var(--color-line-2)",
            color: "var(--color-ink-2)",
            background: "transparent",
          }}
        >
          WhatsApp
          <FiArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      {/* Idioma de la interfaz ─────────────────────────────────────── */}
      <div
        className="mt-6 lg:mt-8 lg:pt-6"
        style={{ borderTop: "1px solid var(--color-line)" }}
      >
        <div className="pt-6 lg:pt-0">
          <LangSwitch />
        </div>
      </div>
    </aside>
  );
}
