import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BotonWhatsapp from "./components/BotonWhatsapp";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; 
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Paciente from "./pages/Paciente";
import PacienteQueTratamos from "./pages/PacienteQueTratamos";
import ScrollToTop from "./components/ScrollToTop";
import Guardia from "./pages/Guardia";
import Estudios from "./pages/Estudios";
import Cirugias from "./pages/Cirugias";
import Turnos from "./pages/Turnos";
import Oftalmopediatria from "./pages/Oftalmopediatria";
import Estetica from "./pages/Estetica";
import Coberturas from "./pages/Coberturas";
import StaffMedico from "./pages/StaffMedico.jsx";
import Residencia from "./pages/Residencia.jsx";

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
           <Route path="/paciente" element={<Paciente />}></Route>
           <Route path="/paciente/que-tratamos" element={<PacienteQueTratamos />}></Route>
           <Route path="/guardia" element={<Guardia />}></Route>
           <Route path="/estudios" element={<Estudios />}></Route>
           <Route path="/cirugias" element={<Cirugias />}></Route>
           <Route path="/turnos-online" element={<Turnos />}></Route>
           <Route path="/oftalmopediatria" element={<Oftalmopediatria />}></Route>
           <Route path="/estetica" element={<Estetica />}></Route>
           <Route path="/coberturas" element={<Coberturas />}></Route>
           <Route path="/staff-medico" element={<StaffMedico   />}></Route>
           <Route path="/residencia" element={<Residencia />}></Route>
         </Routes>

         <Footer />
         
      </BrowserRouter>
    </div>
  );
}

export default App;
