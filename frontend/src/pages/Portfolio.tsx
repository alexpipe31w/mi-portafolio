// frontend/src/components/Portfolio.tsx
import { useState } from "react";

const projects = [
  {
    title: "Frutaza E-commerce",
    image: "/images/frutaza.png",
    description:
      "Full-stack e-commerce platform. Features: Shopify integration, automated TikTok content scraping with CRON jobs, chatbot with Dialogflow, parallax animations.",
    tech: ["Next.js", "React", "Tailwind", "Shopify API", "Node.js", "Dialogflow"],
    link: "https://www.frutaza.com.co/",
  },
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
  const [openCard, setOpenCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenCard(openCard === index ? null : index);
  };

  return (
    <section className="p-6 md:p-10 border border-gray-700 rounded-lg bg-gray-700 text-white">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left flex items-center gap-3 justify-center md:justify-start">
        <svg
          className="w-7 h-7 md:w-8 md:h-8"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M16 18L22 12L16 6"
            stroke="url(#codeGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 6L2 12L8 18"
            stroke="url(#codeGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="codeGradient" x1="2" y1="6" x2="22" y2="18">
              <stop stopColor="#3b82f6" />
              <stop offset="1" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
        Portfolio
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="relative group bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer min-h-[400px] sm:min-h-[450px] md:min-h-[500px]"
            onClick={() => toggleCard(index)}
          >
            {/* IMAGEN - OCUPA TODA LA CARD */}
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 md:group-hover:scale-105"
            />

            {/* OVERLAY OSCURO PARA LEGIBILIDAD */}
            <div className="absolute inset-0 bg-black/30 md:bg-black/20 md:group-hover:bg-black/40 transition-all duration-300"></div>

            {/* OVERLAY CON CONTENIDO */}
            <div
              className={`
                absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/98 to-transparent
                flex flex-col justify-center items-center text-center
                px-6 sm:px-8
                py-8 sm:py-10
                transition-all duration-500 ease-out
                ${
                  openCard === index
                    ? "h-full translate-y-0 opacity-100"
                    : "h-0 translate-y-full opacity-0"
                }
                md:h-full md:translate-y-0 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100
              `}
            >
              <h3 className="text-xl sm:text-2xl md:text-2xl font-bold mb-3 sm:mb-4">
                {project.title}
              </h3>
              
              <p className="text-sm sm:text-base md:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed max-w-lg">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-5 sm:mb-6 justify-center">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-sm sm:text-base bg-blue-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-medium"
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
                className="px-6 py-3 sm:px-8 sm:py-4 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-base sm:text-lg font-semibold transition transform hover:scale-105 shadow-lg"
              >
                🔗 View Project
              </a>
            </div>

            {/* INDICADOR DE TAP EN MÓVIL */}
            <div
              className={`
                md:hidden absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-2 z-10
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
