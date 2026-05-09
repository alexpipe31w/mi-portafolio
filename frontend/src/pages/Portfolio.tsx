// frontend/src/pages/Portfolio.tsx
import { useState } from "react";
import Icons from "../components/Icons";

interface Project {
  title: string;
  image: string;
  video?: string;
  gradient: string;
  emoji: string;
  badge?: string;
  badgeColor?: string;
  description: string;
  tech: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "Duvcore Technology — E-commerce",
    image: "",
    video: "/videos/duvcore.mp4",
    gradient: "from-cyan-900 via-violet-900 to-indigo-900",
    emoji: "🖥️",
    badge: "NEW",
    badgeColor: "bg-cyan-600",
    description:
      "Full e-commerce platform for a Colombian tech brand. StockUp API integration for inventory & checkout, scroll-driven PC assembly animation (154 frames), AI chatbot powered by Groq, TikTok blog feed via Apify, Vercel Edge Config, and a custom PC simulator.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Groq AI", "StockUp API"],
    link: "https://duvcore-technology.vercel.app/",
  },
  {
    title: "StockUp — AI SaaS E-commerce",
    image: "",
    video: "/videos/stockup.mp4",
    gradient: "from-blue-900 via-indigo-900 to-purple-900",
    emoji: "🛒",
    badge: "FEATURED",
    badgeColor: "bg-blue-600",
    description:
      "Multitenant SaaS platform for SMBs. AI-powered analytics and reporting, automated email marketing campaigns, inventory & order management, subscription plans (BASIC/PRO/ENTERPRISE), Mercado Pago payments, multi-carrier shipping via Envia.com, and 2FA authentication.",
    tech: ["Next.js", "React", "Prisma", "PostgreSQL", "Groq AI", "Mercado Pago", "NextAuth", "Redis"],
    link: "https://stock-up-ashy.vercel.app/",
  },
  {
    title: "StockUp Mensajes — WhatsApp CRM",
    image: "/images/stockup-mensajes.png",
    gradient: "from-green-900 via-teal-900 to-cyan-900",
    emoji: "💬",
    badge: "NEW",
    badgeColor: "bg-green-600",
    description:
      "WhatsApp-connected platform for automated customer intake, order taking, appointment scheduling, and AI conversation flows. Real-time updates via Socket.io, multi-tenant architecture, AI responses powered by Groq, and complete CRM dashboard.",
    tech: ["React", "NestJS", "PostgreSQL", "Prisma", "Baileys", "Groq AI", "Socket.io", "Docker"],
    link: "https://stockup-frontend.vercel.app/login",
  },
  {
    title: "Coffee Masfred",
    image: "",
    video: "/videos/coffee-masfred.mp4",
    gradient: "from-amber-900 via-orange-900 to-yellow-900",
    emoji: "☕",
    description:
      "Landing page and e-commerce site for a specialty coffee brand. Modern design, product catalog, responsive layout, and optimized for conversions with Next.js and TailwindCSS.",
    tech: ["Next.js", "React", "TailwindCSS", "TypeScript"],
    link: "https://coffee-masfred.vercel.app/",
  },
  {
    title: "Frutaza E-commerce",
    image: "",
    video: "/videos/frutaza.mp4",
    gradient: "from-green-900 via-emerald-900 to-lime-900",
    emoji: "🍇",
    description:
      "Full-stack e-commerce platform for Amazonian fruit products. Shopify Storefront API integration, automated TikTok content scraping with CRON jobs, AI chatbot with Dialogflow, Mercado Pago payments, and advanced parallax animations.",
    tech: ["Next.js", "React", "Tailwind", "Shopify API", "Node.js", "Dialogflow"],
    link: "https://www.frutaza.com.co/",
  },
  {
    title: "Panel Plus Solar",
    image: "",
    video: "/videos/panelplus.mp4",
    gradient: "from-yellow-900 via-amber-900 to-orange-900",
    emoji: "☀️",
    description:
      "Corporate website with investment simulator. Responsive design, SEO optimization, CMS, contact forms, social media integration, and a simulation module for solar panel investment budget estimation.",
    tech: ["React", "TailwindCSS", "JavaScript"],
    link: "https://www.panelplussolar.com.co/",
  },
  {
    title: "FlyTours SaaS",
    image: "/images/flytours.png",
    gradient: "from-sky-900 via-blue-900 to-indigo-900",
    emoji: "✈️",
    description:
      "SaaS platform for travel companies. Modules for destination search, package selection, and automated quotation. Role: Project Leader — defined requirements, assigned tasks, and supervised development.",
    tech: ["React", "Node.js", "TypeScript", "MySQL"],
    link: "https://github.com/alexpipe31w/Flytours",
  },
];

function Portfolio() {
  const [openCard, setOpenCard] = useState<number | null>(null);

  return (
    <section className="p-6 md:p-10 border border-gray-700/50 rounded-xl bg-gray-800/40 text-white">

      {/* Header */}
      <h1 className="animate-fade-in-up text-2xl md:text-3xl font-bold mb-2 text-center md:text-left flex items-center gap-3 justify-center md:justify-start">
        <svg className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none">
          <path d="M16 18L22 12L16 6" stroke="url(#codeGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 6L2 12L8 18"   stroke="url(#codeGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="codeGrad" x1="2" y1="6" x2="22" y2="18">
              <stop stopColor="#3b82f6"/><stop offset="1" stopColor="#8b5cf6"/>
            </linearGradient>
          </defs>
        </svg>
        <span className="gradient-text">Portfolio</span>
      </h1>
      <p className="animate-fade-in-up delay-100 text-gray-400 text-sm mb-8 text-center md:text-left">
        {projects.length} projects — click or hover to see details
      </p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="animate-fade-in-up card-hover relative group rounded-xl overflow-hidden shadow-lg cursor-pointer min-h-[380px] sm:min-h-[420px] md:min-h-[460px]"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setOpenCard(openCard === index ? null : index)}
          >
            {/* Background: video, image, or gradient */}
            {project.video ? (
              <video
                src={project.video}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-105"
              />
            ) : project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-110"
              />
            ) : (
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-500 md:group-hover:scale-105`}>
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <span className="text-[8rem]">{project.emoji}</span>
                </div>
              </div>
            )}

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30 md:bg-black/20 md:group-hover:bg-black/50 transition-all duration-300" />

            {/* Badge */}
            {project.badge && (
              <div className={`absolute top-4 left-4 ${project.badgeColor} text-white text-xs px-3 py-1 rounded-full font-bold z-10 shadow-lg animate-float`}>
                {project.badge}
              </div>
            )}

            {/* Icon indicator (always visible) */}
            <div className="absolute top-4 right-4 z-10 bg-black/30 backdrop-blur-sm rounded-full p-2">
              <Icons.Code className="w-5 h-5" />
            </div>

            {/* Project title always visible at bottom */}
            <div className={`
              absolute inset-x-0 bottom-0 p-4 z-10
              bg-gradient-to-t from-black/90 to-transparent
              transition-all duration-300
              ${openCard === index ? "opacity-0" : "opacity-100"}
              md:opacity-0 md:group-hover:opacity-0
            `}>
              <h3 className="text-lg font-bold text-white drop-shadow">{project.title}</h3>
              <div className="flex flex-wrap gap-1 mt-1">
                {project.tech.slice(0, 3).map(t => (
                  <span key={t} className="text-xs bg-white/10 backdrop-blur-sm px-2 py-0.5 rounded text-gray-200">{t}</span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-xs bg-white/10 backdrop-blur-sm px-2 py-0.5 rounded text-gray-300">+{project.tech.length - 3}</span>
                )}
              </div>
            </div>

            {/* Expanded content overlay */}
            <div
              className={`
                absolute inset-0 bg-gradient-to-t from-black via-black/97 to-black/60
                flex flex-col justify-center items-center text-center
                px-6 py-8
                transition-all duration-500 ease-out z-20
                ${openCard === index
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
                }
                md:opacity-0 md:pointer-events-none md:group-hover:opacity-100 md:group-hover:pointer-events-auto
              `}
            >
              <Icons.Rocket className="w-10 h-10 mb-3" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-5 leading-relaxed max-w-md">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5 justify-center">
                {project.tech.map(t => (
                  <span key={t} className="text-sm bg-blue-600/70 border border-blue-500/40 px-3 py-1 rounded-full font-medium">
                    {t}
                  </span>
                ))}
              </div>
              {project.link !== "#" ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-lg text-base font-semibold transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-900/50"
                >
                  <Icons.ExternalLink className="w-4 h-4" />
                  View Project
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700/70 border border-gray-600/40 rounded-lg text-base text-gray-400">
                  <Icons.Lock className="w-4 h-4" />
                  Private / In Development
                </span>
              )}
            </div>

            {/* Tap indicator on mobile */}
            <div className={`
              md:hidden absolute bottom-16 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 z-10
              transition-opacity duration-300
              ${openCard === index ? "opacity-0" : "opacity-100"}
            `}>
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
