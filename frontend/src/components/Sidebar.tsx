// frontend/src/components/Sidebar.tsx
import type { FC } from "react";
import { useEffect, useState } from "react";
import {
  FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp, FaEnvelope,
  FaMoon, FaSun,
} from "react-icons/fa";
import Icons from "./Icons";
import {
  SiReact, SiNodedotjs, SiTypescript, SiTailwindcss,
  SiLinux, SiPostman, SiDocker, SiNestjs,
} from "react-icons/si";
import avatar from "../assets/avatar.webp";

const techStack = [
  { Icon: SiReact,      color: "text-cyan-400",   label: "React"      },
  { Icon: SiNodedotjs,  color: "text-green-400",  label: "Node.js"    },
  { Icon: SiNestjs,     color: "text-red-400",    label: "NestJS"     },
  { Icon: SiTypescript, color: "text-blue-400",   label: "TypeScript" },
  { Icon: SiTailwindcss,color: "text-sky-400",    label: "Tailwind"   },
  { Icon: SiLinux,      color: "text-yellow-400", label: "Linux"      },
  { Icon: SiPostman,    color: "text-orange-400", label: "Postman"    },
  { Icon: SiDocker,     color: "text-blue-300",   label: "Docker"     },
];

const Sidebar: FC = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return stored ? stored === "dark" : prefers;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <aside className="
      w-full md:w-72
      bg-white text-gray-900
      dark:bg-gray-800/80 dark:text-white
      flex flex-col items-center p-6 space-y-5
      rounded-none md:rounded-xl shadow-xl md:mx-4 md:my-4
      dark:border dark:border-gray-700/50
      dark:backdrop-blur-sm
    ">

      {/* Theme toggle */}
      <div className="w-full flex items-center justify-between rounded-lg border p-3 shadow-sm
        bg-gray-100 border-gray-200 dark:bg-gray-900/60 dark:border-gray-700/50">
        <div className="text-left">
          <p className="text-sm font-semibold">Tema</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{isDark ? "Oscuro" : "Claro"}</p>
        </div>
        <button
          type="button"
          aria-label="Cambiar tema"
          onClick={() => setIsDark(v => !v)}
          className="inline-flex items-center gap-2 px-3 py-2 rounded-md
            bg-white text-gray-900 hover:bg-gray-50
            dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600
            border border-gray-200 dark:border-gray-600 transition"
        >
          {isDark ? (
            <><FaSun className="text-yellow-400" /><span className="text-sm">Claro</span></>
          ) : (
            <><FaMoon className="text-indigo-500" /><span className="text-sm">Oscuro</span></>
          )}
        </button>
      </div>

      {/* Avatar with glow ring */}
      <div className="relative animate-float">
        <div className="absolute inset-0 rounded-full animate-glow" />
        <img
          src={avatar}
          alt="Alex Felipe Rodriguez"
          className="relative w-28 h-28 rounded-full border-4 border-blue-500/60 dark:border-purple-500/60 shadow-lg"
        />
        {/* Online indicator */}
        <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full" title="Available" />
      </div>

      {/* Name & role */}
      <div className="text-center">
        <h2 className="text-xl font-bold">Alex Felipe Rodriguez P.</h2>
        <p className="text-sm font-medium mt-1 gradient-text">
          Developer &amp; AI Specialist
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-tight">
          Téc. Prof. Soporte de Sistemas y Redes
        </p>
      </div>

      {/* Availability badge */}
      <div className="flex items-center gap-2 bg-green-900/30 border border-green-600/30 text-green-400 text-xs px-4 py-2 rounded-full">
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        Open to remote work &amp; freelance
      </div>

      {/* Contact info */}
      <div className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400 text-center">
        <p className="flex items-center justify-center gap-2">
          <Icons.MapPin className="w-4 h-4" /> Neiva, Colombia
        </p>
        <p className="flex items-center justify-center gap-2">
          <Icons.Mail className="w-4 h-4" /> alexpipe31w@gmail.com
        </p>
        <p className="flex items-center justify-center gap-2">
          <Icons.Phone className="w-4 h-4" /> +57 314 237 8407
        </p>
      </div>

      {/* Social links */}
      <div className="flex flex-wrap justify-center gap-4 text-xl">
        <a href="https://github.com/alexpipe31w" target="_blank" rel="noreferrer" title="GitHub"
          className="transition-all duration-200 hover:scale-125 hover:text-gray-400 dark:hover:text-white">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/alex-felipe-rodriguez-b45778360" target="_blank" rel="noreferrer" title="LinkedIn"
          className="transition-all duration-200 hover:scale-125 hover:text-blue-600 dark:hover:text-blue-400">
          <FaLinkedin />
        </a>
        <a href="https://x.com/ALEXFELIPE67363" target="_blank" rel="noreferrer" title="X / Twitter"
          className="transition-all duration-200 hover:scale-125 hover:text-sky-500 dark:hover:text-sky-400">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/alex_pip31?igsh=Z213aTFmNnZtcWFk&utm_source=qr" target="_blank" rel="noreferrer" title="Instagram"
          className="transition-all duration-200 hover:scale-125 hover:text-pink-600 dark:hover:text-pink-500">
          <FaInstagram />
        </a>
        <a href="https://wa.me/573142378407" target="_blank" rel="noreferrer" title="WhatsApp"
          className="transition-all duration-200 hover:scale-125 hover:text-green-600 dark:hover:text-green-500">
          <FaWhatsapp />
        </a>
        <a href="mailto:alexpipe31w@gmail.com" title="Email"
          className="transition-all duration-200 hover:scale-125 hover:text-red-600 dark:hover:text-red-500">
          <FaEnvelope />
        </a>
      </div>

      {/* Tech stack icons */}
      <div className="w-full">
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 text-center mb-3">
          Tech Stack
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map(({ Icon, color, label }) => (
            <div key={label} className="group relative flex flex-col items-center">
              <Icon
                className={`w-6 h-6 ${color} transition-transform duration-200 group-hover:scale-125`}
                title={label}
              />
              <span className="absolute -bottom-5 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* AI specialty badge */}
      <div className="w-full glass rounded-lg p-3 text-center">
        <p className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">AI Specialist</p>
        <div className="flex justify-center gap-2 flex-wrap">
          {["n8n", "Groq", "Agents", "RAG"].map(tag => (
            <span key={tag} className="text-xs bg-cyan-900/40 border border-cyan-500/30 text-cyan-300 px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="text-center text-sm text-gray-600 dark:text-gray-400">
        <h3 className="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-widest mb-2">Idiomas</h3>
        <p>🇪🇸 Español (Nativo)</p>
        <p>🇬🇧 Inglés (Intermedio B2)</p>
      </div>

      {/* CV download */}
      <a
        href="/cv.pdf"
        target="_blank"
        className="
          inline-flex items-center gap-2 px-5 py-2.5
          bg-gradient-to-r from-blue-600 to-purple-600
          hover:from-blue-500 hover:to-purple-500
          text-white rounded-lg shadow-lg shadow-blue-900/30
          transition-all duration-200 hover:scale-105 text-sm font-semibold
        "
      >
        <Icons.Download className="w-4 h-4" />
        Descargar CV
      </a>
    </aside>
  );
};

export default Sidebar;
