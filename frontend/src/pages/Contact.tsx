import { useState, type FormEvent } from "react";
import { FiMail, FiArrowUpRight, FiCheck, FiAlertCircle } from "react-icons/fi";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa6";
import { perfil, redes } from "../content";
import { useT } from "../i18n/core";
import { useReveal } from "../hooks/useReveal";

const ENDPOINT = "https://mi-portafolio-backend-nxii.onrender.com/send-email";

type Estado = "listo" | "enviando" | "enviado" | "error";

export default function Contact() {
  const { t, pick } = useT();
  const headRef = useReveal<HTMLElement>();
  const formRef = useReveal<HTMLDivElement>();

  const [estado, setEstado] = useState<Estado>("listo");
  const [aviso, setAviso] = useState("");

  const enviar = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (estado === "enviando") return;

    const form = e.currentTarget;
    const datos = new FormData(form);
    const name = String(datos.get("name") ?? "").trim();
    const email = String(datos.get("email") ?? "").trim();
    const message = String(datos.get("message") ?? "").trim();

    // Validación en el cliente. La de verdad la hace el servidor, pero
    // decírselo al visitante aquí le ahorra un viaje de ida y vuelta.
    if (!name || !email || !message) {
      setEstado("error");
      setAviso(t("contact.required"));
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setEstado("error");
      setAviso(t("contact.bademail"));
      return;
    }

    setEstado("enviando");
    setAviso("");

    /* El backend duerme en el plan gratuito de Render y puede tardar en
       despertar. Sin tope, el botón se queda en "Enviando…" para siempre;
       con tope, el visitante recibe una salida y los canales directos. */
    const corte = AbortController ? new AbortController() : null;
    const reloj = setTimeout(() => corte?.abort(), 15000);

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
        signal: corte?.signal,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      setEstado("enviado");
      setAviso(t("contact.sent"));
      form.reset();
    } catch (err) {
      // Nunca tragarse el error en silencio: si no llega, hay que decirlo
      // y ofrecer otra vía, no dejar al visitante esperando.
      console.error("[contact] no se pudo enviar:", err);
      setEstado("error");
      setAviso(t("contact.error"));
    } finally {
      clearTimeout(reloj);
    }
  };

  const campo = {
    background: "var(--color-surface-1)",
    border: "1px solid var(--color-line-2)",
    color: "var(--color-ink)",
  } as const;

  const canales = [
    { id: "mail", Icon: FiMail, etiqueta: perfil.email, url: `mailto:${perfil.email}` },
    { id: "wa", Icon: FaWhatsapp, etiqueta: perfil.telefono, url: perfil.whatsapp },
    { id: "in", Icon: FaLinkedin, etiqueta: "LinkedIn", url: redes.find((r) => r.id === "linkedin")!.url },
  ];

  return (
    <div className="pb-24">
      <header ref={headRef} className="reveal pt-14 lg:pt-20">
        <h2 className="t-display">{t("contact.title")}</h2>
        <p
          className="mt-5 max-w-[52ch] leading-relaxed"
          style={{ fontSize: "var(--step-1)", color: "var(--color-ink-2)" }}
        >
          {t("contact.lede")}
        </p>
      </header>

      <div ref={formRef} className="reveal mt-12 grid lg:grid-cols-[1fr_20rem] gap-10 lg:gap-14 items-start">
        {/* Formulario ─────────────────────────────────────────────── */}
        <form onSubmit={enviar} noValidate className="surface p-6 lg:p-8">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              {/* Etiqueta visible, no solo placeholder: el placeholder
                  desaparece al escribir y deja el campo sin identificar. */}
              <label htmlFor="name" className="t-label block mb-2">{t("contact.name")}</label>
              <input
                id="name" name="name" type="text" autoComplete="name"
                className="w-full px-3.5 py-2.5 rounded-lg text-[0.9375rem] outline-none"
                style={campo}
              />
            </div>
            <div>
              <label htmlFor="email" className="t-label block mb-2">{t("contact.email")}</label>
              <input
                id="email" name="email" type="email" autoComplete="email"
                className="w-full px-3.5 py-2.5 rounded-lg text-[0.9375rem] outline-none"
                style={campo}
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="t-label block mb-2">{t("contact.message")}</label>
            <textarea
              id="message" name="message" rows={6}
              className="w-full px-3.5 py-2.5 rounded-lg text-[0.9375rem] outline-none resize-y"
              style={campo}
            />
          </div>

          <div className="mt-6 flex items-center gap-4 flex-wrap">
            <button
              type="submit"
              disabled={estado === "enviando"}
              className="press inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[0.9375rem] font-semibold transition-colors duration-150 disabled:opacity-60"
              style={{ background: "var(--color-accent)", color: "var(--color-accent-ink)" }}
            >
              {estado === "enviando" ? t("contact.sending") : t("contact.send")}
            </button>

            {aviso && (
              <p
                role="status"
                aria-live="polite"
                className="inline-flex items-center gap-2 text-[0.875rem]"
                style={{ color: estado === "enviado" ? "var(--color-live)" : "oklch(0.70 0.17 25)" }}
              >
                {estado === "enviado"
                  ? <FiCheck className="w-4 h-4 shrink-0" />
                  : <FiAlertCircle className="w-4 h-4 shrink-0" />}
                {aviso}
              </p>
            )}
          </div>
        </form>

        {/* Canales directos. Sustituyen al mapa de Google que ocupaba media
            pantalla en verde brillante: a un cliente remoto le sirve más
            un correo en el que pueda pulsar que ver dónde está Neiva. */}
        <aside>
          <p className="t-label">{t("contact.direct")}</p>
          <ul className="mt-5 space-y-2.5">
            {canales.map(({ id, Icon, etiqueta, url }) => (
              <li key={id}>
                <a
                  href={url}
                  target={url.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="surface lift press flex items-center gap-3 px-4 py-3 text-[0.875rem]"
                  style={{ color: "var(--color-ink-2)" }}
                >
                  <Icon className="w-4 h-4 shrink-0" style={{ color: "var(--color-ink-3)" }} />
                  <span className="truncate">{etiqueta}</span>
                  <FiArrowUpRight className="w-4 h-4 ml-auto shrink-0" style={{ color: "var(--color-ink-3)" }} />
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-[0.8125rem] leading-relaxed" style={{ color: "var(--color-ink-3)" }}>
            {pick({
              es: "Trabajo con clientes de cualquier huso horario. Respondo en menos de 24 horas.",
              en: "I work with clients in any time zone. I reply within 24 hours.",
            })}
          </p>
        </aside>
      </div>
    </div>
  );
}
