// frontend/src/components/Sidebar.tsx
import type { FC } from "react";
import { useEffect, useState } from "react";
import {
  FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp, FaEnvelope,
  FaMoon, FaSun
} from "react-icons/fa";
import { SiReact, SiNodedotjs, SiTypescript, SiTailwindcss } from "react-icons/si";
import avatar from "../assets/avatar.webp";

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
    <aside
      className="
        w-full md:w-72
        bg-white text-gray-900
        dark:bg-gray-700 dark:text-white
        flex flex-col items-center p-6 space-y-6
        rounded-none md:rounded-lg shadow-lg md:mx-4 md:my-4
      "
    >
      {/* Tarjeta: selector de tema */}
      <div
        className="
          w-full flex items-center justify-between
          rounded-lg border p-3 shadow-sm
          bg-gray-100 border-gray-200
          dark:bg-gray-800 dark:border-gray-600
        "
      >
        <div className="text-left">
          <p className="text-sm font-semibold">Tema</p>
          <p className="text-xs text-gray-600 dark:text-gray-300">
            {isDark ? "Oscuro" : "Claro"}
          </p>
        </div>
        <button
          type="button"
          aria-label="Cambiar tema"
          onClick={() => setIsDark(v => !v)}
          className="
            inline-flex items-center gap-2
            px-3 py-2 rounded-md
            bg-white text-gray-900
            hover:bg-gray-50
            dark:bg-gray-700 dark:text-white
            dark:hover:bg-gray-600
            border border-gray-200 dark:border-gray-500
            transition
          "
        >
          {isDark ? (
            <>
              <FaSun className="text-yellow-400" />
              <span className="text-sm">Claro</span>
            </>
          ) : (
            <>
              <FaMoon className="text-indigo-500" />
              <span className="text-sm">Oscuro</span>
            </>
          )}
        </button>
      </div>

      {/* Foto */}
      <img
        src={avatar}
        alt="Tu Nombre"
        className="w-28 h-28 rounded-full border-4 border-gray-200 dark:border-gray-700"
      />

      {/* Nombre y rol */}
      <div className="text-center">
        <h2 className="text-2xl font-bold">Alex Felipe Rodriguez P.</h2>
        <p className="text-gray-500 dark:text-gray-300">Developer</p>
      </div>

      {/* Info de contacto */}
      <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300 text-center">
        <p>Neiva, Colombia</p>
        <p>alexpipe31w@gmail.com</p>
        <p>+57 3142378407</p>
      </div>

      {/* Redes */}
      <div className="flex flex-wrap justify-center gap-4 text-xl">
        <a href="https://github.com/alexpipe31w" target="_blank" rel="noreferrer">
          <FaGithub className="hover:text-gray-700 dark:hover:text-gray-300" />
        </a>
        <a href="https://www.linkedin.com/in/alex-felipe-rodriguez-b45778360" target="_blank" rel="noreferrer">
          <FaLinkedin className="hover:text-blue-600 dark:hover:text-blue-400" />
        </a>
        <a href="https://x.com/ALEXFELIPE67363" target="_blank" rel="noreferrer">
          <FaTwitter className="hover:text-sky-600 dark:hover:text-sky-400" />
        </a>
        <a href="https://www.instagram.com/alex_pip31?igsh=Z213aTFmNnZtcWFk&utm_source=qr" target="_blank" rel="noreferrer">
          <FaInstagram className="hover:text-pink-600 dark:hover:text-pink-500" />
        </a>
        <a href="https://wa.me/573142378407" target="_blank" rel="noreferrer">
          <FaWhatsapp className="hover:text-green-600 dark:hover:text-green-500" />
        </a>
        <a href="mailto:alexpipe31w@gmail.com" target="_blank" rel="noreferrer">
          <FaEnvelope className="hover:text-red-600 dark:hover:text-red-500" />
        </a>
      </div>

      {/* NUEVO CONTENIDO */}
      <div className="w-full space-y-6 text-center text-sm text-gray-700 dark:text-gray-300">
        {/* Stack */}
        <div>
          <h3 className="font-bold text-gray-900 dark:text-white">Tech Stack</h3>
          <div className="flex justify-center gap-4 mt-2">
            <SiReact className="w-6 h-6 text-cyan-500" title="React" />
            <SiNodedotjs className="w-6 h-6 text-green-500" title="Node.js" />
            <SiTypescript className="w-6 h-6 text-blue-500" title="TypeScript" />
            <SiTailwindcss className="w-6 h-6 text-sky-500" title="TailwindCSS" />
          </div>
        </div>

        {/* Idiomas */}
        <div>
          <h3 className="font-bold text-gray-900 dark:text-white">Idiomas</h3>
          <p>🇪🇸 Español (Nativo)</p>
          <p>🇬🇧 Inglés (Intermedio)</p>
        </div>

        {/* Botón CV */}
        <a
          href="/cv.pdf"
          target="_blank"
          className="
            inline-block px-4 py-2
            bg-indigo-600 text-white
            rounded-lg shadow
            hover:bg-indigo-500 transition
          "
        >
          📄 Descargar CV
        </a>

        {/* Disponibilidad */}
        <div>
          <h3 className="font-bold text-gray-900 dark:text-white">Disponibilidad</h3>
          <p>Abierto a proyectos freelance</p>
          <p>Disponible para trabajo remoto</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
