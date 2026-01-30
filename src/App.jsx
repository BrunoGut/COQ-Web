import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BotonWhatsapp from "./components/BotonWhatsapp";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; 
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import PacienteQueTratamos from "./pages/PacienteQueTratamos";
import ScrollToTop from "./components/ScrollToTop";
import Guardia from "./pages/Guardia";
import Estudios from "./pages/Estudios";




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
           <Route path="/guardia" element={<Guardia />}></Route>
           <Route path="/estudios" element={<Estudios />}></Route>
         </Routes>

         <Footer />
         
      </BrowserRouter>
    </div>
  );
}

export default App;
