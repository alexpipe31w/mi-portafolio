import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Nav, { type Seccion } from "./components/Nav";
import Chat from "./components/Chat";
import About from "./pages/About";
import Work from "./pages/Work";
import Resume from "./pages/Resume";
import Activity from "./pages/Activity";
import Contact from "./pages/Contact";
import { I18nProvider } from "./i18n/i18n";

function Portafolio() {
  const [seccion, setSeccion] = useState<Seccion>("about");

  /* Al cambiar de sección se vuelve arriba. Sin esto, saltar de una página
     larga a una corta te deja mirando el pie de una página que ya no está.
     `instant` a propósito: un desplazamiento suave de 4000px por una
     pulsación de menú es esperar por nada. */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [seccion]);

  const ir = (s: Seccion) => setSeccion(s);

  return (
    <div className="lg:flex min-h-screen">
      <Sidebar />

      <div className="flex-1 min-w-0">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-10">
          <Nav activa={seccion} onChange={setSeccion} />

          {/* La clave fuerza el remontaje al cambiar de sección: así el
              revelado al scroll vuelve a dispararse en la nueva página. */}
          <main key={seccion}>
            {seccion === "about"    && <About ir={ir} />}
            {seccion === "work"     && <Work />}
            {seccion === "resume"   && <Resume />}
            {seccion === "activity" && <Activity />}
            {seccion === "contact"  && <Contact />}
          </main>
        </div>
      </div>

      <Chat />
    </div>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <Portafolio />
    </I18nProvider>
  );
}
