import { useEffect, useRef } from "react";

/**
 * Revela un elemento cuando entra en pantalla, una sola vez.
 *
 * Se deja de observar en cuanto entra: un portafolio se recorre de arriba
 * abajo y volver a animar al subir marea. El estado va en un atributo
 * (`data-visible`) y no en `useState` para no re-renderizar React en cada
 * scroll — la transición la lleva el CSS.
 *
 * Si el usuario pide movimiento reducido no se observa nada y el elemento
 * queda visible desde el principio.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(delay = 0) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const sinMovimiento =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

    if (sinMovimiento || typeof IntersectionObserver === "undefined") {
      el.dataset.visible = "true";
      return;
    }

    if (delay) el.style.transitionDelay = `${delay}ms`;

    const obs = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) {
            (entrada.target as HTMLElement).dataset.visible = "true";
            obs.unobserve(entrada.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return ref;
}
