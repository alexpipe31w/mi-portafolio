import Navbar from "./Navbar";
import About from "../pages/About";
import Resume from "../pages/Resume";
import Portfolio from "../pages/Portfolio";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import ChatbotWidget from "./ChatbotWidget";

interface LayoutProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export default function Layout({ activePage, setActivePage }: LayoutProps) {
  const renderPage = () => {
    switch (activePage) {
      case "About": return <About />;
      case "Resume": return <Resume />;
      case "Portfolio": return <Portfolio />;
      case "Blog": return <Blog />;
      case "Contact": return <Contact />;
      default: return <About />;
    }
  };

  return (
    <>
      <div className="border-2 border-gray-500 rounded-lg p-6 bg-gray-700 shadow-md mx-6 my-6">
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        <main className="mt-4">{renderPage()}</main>
      </div>
      <ChatbotWidget />
    </>
  );
}
