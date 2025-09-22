// frontend/src/components/Portfolio.tsx
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
    link: "https://tusitio.com/flytours",
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
    link: "https://tusitio.com",
  },
];

function Portfolio() {
  return (
    <section className="p-6 md:p-10 border border-gray-700 rounded-lg bg-gray-700 text-white">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
        📂 Portfolio
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="relative group bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
          >
            {/* Imagen */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* Overlay: visible siempre en mobile, hover en desktop */}
            <div
              className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center 
              px-3 md:px-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
            >
              <h3 className="text-lg md:text-xl font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-300 mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] md:text-xs bg-blue-600 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="px-3 md:px-4 py-1.5 md:py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm md:text-base"
              >
                🔗 View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
