import { useState } from "react";
import Navbar from "./Navbar";
import About from "../pages/About";
import Resume from "../pages/Resume";
import Portfolio from "../pages/Portfolio";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import ChatbotWidget from "./ChatbotWidget";
import RobotAlex from "./RobotAlex";

interface LayoutProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export default function Layout({ activePage, setActivePage }: LayoutProps) {
  // Chat state lifted here so RobotAlex can open it on click
  const [chatOpen, setChatOpen] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case "About":     return <About />;
      case "Resume":    return <Resume />;
      case "Portfolio": return <Portfolio />;
      case "Blog":      return <Blog />;
      case "Contact":   return <Contact />;
      default:          return <About />;
    }
  };

  return (
    <>
      <div className="glass border border-gray-700/50 rounded-xl p-4 md:p-6 shadow-xl mx-3 my-3 md:mx-6 md:my-6 min-h-screen">
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        <main className="animate-fade-in-up">{renderPage()}</main>
      </div>

      {/* RobotAlex — knows the current section, opens chat on click */}
      <RobotAlex
        activePage={activePage}
        onRobotClick={() => setChatOpen(true)}
      />

      {/* ChatbotWidget — controlled from here */}
      <ChatbotWidget isOpen={chatOpen} setIsOpen={setChatOpen} />
    </>
  );
}
