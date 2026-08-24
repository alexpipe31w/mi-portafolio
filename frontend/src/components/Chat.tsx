import { useEffect, useRef, useState } from "react";
import { FiX, FiSend, FiMessageSquare } from "react-icons/fi";
import { useT } from "../i18n/core";

const ENDPOINT = "https://mi-portafolio-backend-nxii.onrender.com/api/chat";

interface Mensaje { role: "user" | "bot"; content: string }

export default function Chat() {
  const { t } = useT();
  const [abierto, setAbierto] = useState(false);
  const [mensajes, setMensajes] = useState<Mensaje[]>([]);
  const [texto, setTexto] = useState("");
  const [cargando, setCargando] = useState(false);

  const finRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    finRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [mensajes, cargando]);

  // Al abrir, el foco va al campo: si hay que buscar dónde escribir, el
  // panel ha fallado. Escape cierra, como cualquier capa flotante.
  useEffect(() => {
    if (!abierto) return;
    inputRef.current?.focus();

    const alPulsar = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbierto(false);
    };
    document.addEventListener("keydown", alPulsar);
    return () => document.removeEventListener("keydown", alPulsar);
  }, [abierto]);

  const enviar = async () => {
    const pregunta = texto.trim();
    if (!pregunta || cargando) return;

    setMensajes((prev) => [...prev, { role: "user", content: pregunta }]);
    setTexto("");
    setCargando(true);

    const corte = new AbortController();
    const reloj = setTimeout(() => corte.abort(), 30000);

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: pregunta, history: mensajes }),
        signal: corte.signal,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const datos = await res.json();
      setMensajes((prev) => [
        ...prev,
        { role: "bot", content: datos.response ?? "…" },
      ]);
    } catch (err) {
      console.error("[chat] fallo la consulta:", err);
      setMensajes((prev) => [
        ...prev,
        {
          role: "bot",
          content: t("contact.error"),
        },
      ]);
    } finally {
      clearTimeout(reloj);
      setCargando(false);
    }
  };

  return (
    <>
      {/* Disparador */}
      <button
        type="button"
        onClick={() => setAbierto((v) => !v)}
        aria-label={abierto ? t("chat.close") : t("chat.open")}
        aria-expanded={abierto}
        className="press fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-150"
        style={{
          background: abierto ? "var(--color-surface-3)" : "var(--color-accent)",
          color: abierto ? "var(--color-ink)" : "var(--color-accent-ink)",
          border: "1px solid var(--color-line-2)",
        }}
      >
        {abierto ? <FiX className="w-5 h-5" /> : <FiMessageSquare className="w-5 h-5" />}
      </button>

      {/* Panel. El origen de la escala está en la esquina del botón, no en
          el centro: el panel debe parecer que sale de donde se pulsó.
          Arranca en 0.96, nunca en 0 — nada del mundo real aparece de la
          nada. */}
      <div
        ref={panelRef}
        role="dialog"
        aria-label={t("chat.title")}
        aria-hidden={!abierto}
        className="fixed bottom-20 right-5 z-50 w-[min(23rem,calc(100vw-2.5rem))] rounded-2xl overflow-hidden flex flex-col"
        style={{
          height: "min(30rem, calc(100vh - 8rem))",
          background: "var(--color-surface-1)",
          border: "1px solid var(--color-line-2)",
          boxShadow: "0 24px 60px -20px oklch(0 0 0 / 0.7)",
          transformOrigin: "bottom right",
          opacity: abierto ? 1 : 0,
          transform: abierto ? "scale(1)" : "scale(0.96)",
          pointerEvents: abierto ? "auto" : "none",
          transition: "opacity 200ms var(--ease-out), transform 200ms var(--ease-out)",
        }}
      >
        <header
          className="px-4 py-3 flex items-center gap-3 shrink-0"
          style={{ borderBottom: "1px solid var(--color-line)" }}
        >
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: "var(--color-accent-lo)", color: "var(--color-ink)" }}
          >
            <FiMessageSquare className="w-4 h-4" />
          </span>
          <div className="min-w-0">
            <p className="text-[0.875rem] font-semibold leading-tight">{t("chat.title")}</p>
            <p className="text-[0.75rem] truncate" style={{ color: "var(--color-ink-3)" }}>
              {t("chat.subtitle")}
            </p>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
          {mensajes.length === 0 && (
            <p className="text-[0.875rem] leading-relaxed" style={{ color: "var(--color-ink-3)" }}>
              {t("chat.subtitle")}
            </p>
          )}

          {mensajes.map((m, i) => (
            <div
              key={i}
              className="max-w-[85%] px-3.5 py-2.5 rounded-xl text-[0.875rem] leading-relaxed"
              style={
                m.role === "user"
                  ? {
                      marginLeft: "auto",
                      background: "var(--color-accent)",
                      color: "var(--color-accent-ink)",
                    }
                  : {
                      background: "var(--color-surface-2)",
                      color: "var(--color-ink-2)",
                      border: "1px solid var(--color-line)",
                    }
              }
            >
              {m.content}
            </div>
          ))}

          {cargando && (
            <div
              className="w-fit px-3.5 py-3 rounded-xl flex items-center gap-1.5"
              style={{ background: "var(--color-surface-2)", border: "1px solid var(--color-line)" }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: "var(--color-ink-3)",
                    animation: `puntos 1.1s ${i * 0.15}s infinite ease-in-out`,
                  }}
                />
              ))}
            </div>
          )}
          <div ref={finRef} />
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); enviar(); }}
          className="p-3 flex items-center gap-2 shrink-0"
          style={{ borderTop: "1px solid var(--color-line)" }}
        >
          <input
            ref={inputRef}
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder={t("chat.placeholder")}
            aria-label={t("chat.placeholder")}
            className="flex-1 min-w-0 px-3.5 py-2.5 rounded-lg text-[0.875rem] outline-none"
            style={{
              background: "var(--color-bg)",
              border: "1px solid var(--color-line-2)",
              color: "var(--color-ink)",
            }}
          />
          <button
            type="submit"
            disabled={cargando || !texto.trim()}
            aria-label={t("chat.send")}
            className="press w-10 h-10 shrink-0 rounded-lg flex items-center justify-center transition-opacity duration-150 disabled:opacity-40"
            style={{ background: "var(--color-accent)", color: "var(--color-accent-ink)" }}
          >
            <FiSend className="w-4 h-4" />
          </button>
        </form>
      </div>

      <style>{`
        @keyframes puntos {
          0%, 60%, 100% { opacity: 0.3; transform: translateY(0); }
          30%           { opacity: 1;   transform: translateY(-3px); }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes puntos { 0%, 100% { opacity: 0.6; transform: none; } }
        }
      `}</style>
    </>
  );
}
