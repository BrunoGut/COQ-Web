import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BotonWhatsapp from "./components/BotonWhatsapp";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; 
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import PacienteQueTratamos from "./pages/PacienteQueTratamos";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  }, [location.pathname, location.search]);

  return null;
}

function App() {
  return (
    <div>
      <BrowserRouter>

        <ScrollToTop />

        <Navbar />
        <BotonWhatsapp />
        
         
         <Routes>
           <Route path="/" element={<Inicio />} />
           <Route path="/nosotros" element={<Nosotros />} />
           <Route path="/paciente/que-tratamos" element={<PacienteQueTratamos />}></Route>
         </Routes>

         <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
