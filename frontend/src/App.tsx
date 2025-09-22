import { useState } from "react"; 
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";

function App() {
  const [activePage, setActivePage] = useState("About");

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-white md:gap-x-6">
      {/* Sidebar */}
      <div className="w-full md:w-72 md:ml-0">
        <Sidebar />
      </div>

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col">
        <Layout activePage={activePage} setActivePage={setActivePage} />
      </div>
    </div>
  );
}

export default App;
