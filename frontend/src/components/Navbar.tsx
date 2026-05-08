import { useState } from "react";

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const pages = ["About", "Resume", "Portfolio", "Blog", "Contact"];

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass rounded-xl px-4 py-3 mb-5 border border-gray-700/50">
      <div className="flex justify-between items-center">

        {/* Mobile: name */}
        <span className="text-sm font-bold gradient-text md:hidden">Alex Rodriguez</span>

        {/* Hamburger */}
        <button
          className="relative w-8 h-8 flex flex-col justify-between items-center md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-7 bg-white rounded-full transform transition-all duration-300 ${isOpen ? "rotate-45 translate-y-3" : ""}`} />
          <span className={`block h-0.5 w-7 bg-white rounded-full transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block h-0.5 w-7 bg-white rounded-full transform transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-3" : ""}`} />
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center space-x-1">
          {pages.map(page => (
            <li key={page}>
              <button
                onClick={() => setActivePage(page)}
                className={`
                  relative px-4 py-2 rounded-lg text-sm font-medium
                  transition-all duration-200
                  ${activePage === page
                    ? "text-white bg-gradient-to-r from-blue-600/50 to-purple-600/50 border border-blue-500/40"
                    : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                  }
                `}
              >
                {page}
                {activePage === page && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile dropdown */}
      <div className={`overflow-hidden transition-all duration-400 ease-in-out md:hidden ${isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
        <ul className="flex flex-col space-y-1 pt-2 border-t border-gray-700/50">
          {pages.map(page => (
            <li key={page}>
              <button
                onClick={() => { setActivePage(page); setIsOpen(false); }}
                className={`
                  block w-full text-left px-4 py-3 rounded-lg text-sm font-medium
                  transition-all duration-200
                  ${activePage === page
                    ? "text-white bg-gradient-to-r from-blue-600/40 to-purple-600/40 border border-blue-500/30"
                    : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                  }
                `}
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
