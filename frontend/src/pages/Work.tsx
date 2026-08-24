import { proyectos } from "../content";
import { useT } from "../i18n/core";
import { useReveal } from "../hooks/useReveal";
import ProjectCard from "../components/ProjectCard";

export default function Work() {
  const { t, pick } = useT();
  const headRef = useReveal<HTMLElement>();

  const destacados = proyectos.filter((p) => p.destacado);
  const resto = proyectos.filter((p) => !p.destacado);

  return (
    <div className="pb-24">
      <header ref={headRef} className="reveal pt-14 lg:pt-20">
        <h2 className="t-display max-w-[16ch]">
          {pick({ es: "Cosas que están funcionando ahora mismo", en: "Things running in production right now" })}
        </h2>
        <p className="t-meta mt-5">
          {proyectos.length} {t("work.count")}
        </p>
      </header>

      {/* Los dos destacados a ancho completo: la jerarquía dice cuál mirar
          primero. Siete tarjetas idénticas no dicen nada. */}
      <div className="mt-12 space-y-6">
        {destacados.map((p, i) => (
          <ProjectCard key={p.id} proyecto={p} ancho delay={i * 70} />
        ))}
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {resto.map((p, i) => (
          <ProjectCard key={p.id} proyecto={p} delay={i * 60} />
        ))}
      </div>
    </div>
  );
}
