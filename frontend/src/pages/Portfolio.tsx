// frontend/src/components/Portfolio.tsx
import { useState } from "react";

const projects = [
  {
    title: "Panel Plus Solar",
    image: "/images/panelplus.png",
    description:
      "Corporate website with investment simulator. Developed with React, TailwindCSS, and backend integration.",
    tech: ["React", "TailwindCSS", "JavaScript"],
    link: "https://www.panelplussolar.com/",
  },
  {
    title: "FlyTours SaaS",
    image: "/images/flytours.png",
    description:
      "SaaS platform for travel companies. Modules for search, selection, and quotation. Role: Project Leader.",
    tech: ["React", "Node.js", "TypeScript", "MySQL"],
    link: "https://github.com/alexpipe31w/Flytours",
  },
  {
    title: "Nequi Payment Automation",
    image: "/images/nequi.png",
    description:
      "Independent system that validates Nequi payment receipts through a chatbot and stores transactions in a database.",
    tech: ["Node.js", "Express", "MySQL", "Python"],
    link: "https://github.com/tuusuario/nequi-automation",
  },
  {
    title: "Portfolio Website",
    image: "/images/portfolio.png",
    description:
      "Personal website to showcase projects and skills. Built with React, Vite, and TailwindCSS.",
    tech: ["React", "Vite", "TailwindCSS"],
    link: "https://alex-rodriguez-portfol.vercel.app/",
  },
];

function Portfolio() {
  // Estado para controlar qué card está abierta en móvil (null = ninguna)
  const [openCard, setOpenCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    // Si ya está abierta, la cierra; si no, la abre
    setOpenCard(openCard === index ? null : index);
  };

  return (
    <section className="p-6 md:p-10 border border-gray-700 rounded-lg bg-gray-700 text-white">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
        📂 Portfolio
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="relative group bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
            onClick={() => toggleCard(index)}
          >
            {/* Imagen */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 md:group-hover:scale-105"
            />

            {/* Overlay: desliza desde abajo */}
            {/* eslint-disable-next-line */}
            <div
              className={`
                absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/95 to-transparent
                flex flex-col justify-end items-center text-center
                px-4 py-6
                transition-all duration-500 ease-out
                ${
                  openCard === index
                    ? "translate-y-0 opacity-100"
                    : "translate-y-full opacity-0"
                }
                md:translate-y-0 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100
              `}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs sm:text-sm bg-blue-600 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm sm:text-base font-medium transition"
              >
                🔗 View Project
              </a>
            </div>

            {/* Indicador de "tap" solo en móvil */}
            <div
              className={`
                md:hidden absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-2
                transition-opacity duration-300
                ${openCard === index ? "opacity-0" : "opacity-100"}
              `}
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
