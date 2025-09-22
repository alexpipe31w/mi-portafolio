import { useState } from "react";

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pages = ["About", "Resume", "Portfolio", "Blog", "Contact"];

  return (
    <nav className="bg-gray-800 shadow p-4 rounded-lg">
      <div className="flex justify-between items-center">
        {/* Logo o nombre solo visible en móvil */}
        <h1 className="text-lg font-bold md:hidden">Menu</h1>

        {/* Botón hamburguesa */}
        <button
          className="relative w-8 h-8 flex flex-col justify-between items-center md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block h-1 w-8 bg-white rounded transform transition duration-300 ${
              isOpen ? "rotate-45 translate-y-3" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-8 bg-white rounded transition duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-8 bg-white rounded transform transition duration-300 ${
              isOpen ? "-rotate-45 -translate-y-3" : ""
            }`}
          ></span>
        </button>

        {/* Menú en desktop */}
        <ul className="hidden md:flex space-x-6">
          {pages.map((page) => (
            <li key={page}>
              <button
                onClick={() => setActivePage(page)}
                className={`relative pb-1 transition-colors duration-300 ${
                  activePage === page
                    ? "text-blue-500 font-bold"
                    : "text-gray-300 hover:text-gray-100"
                } 
                after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 
                after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full`}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Menú móvil desplegable */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        } md:hidden`}
      >
        <ul className="flex flex-col space-y-4">
          {pages.map((page) => (
            <li key={page}>
              <button
                onClick={() => {
                  setActivePage(page);
                  setIsOpen(false);
                }}
                className={`block w-full text-left ${
                  activePage === page
                    ? "text-blue-500 font-bold"
                    : "text-gray-300 hover:text-gray-100"
                }`}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
