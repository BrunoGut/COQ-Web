import Navbar from "../shared/components/Navbar";
import Footer from "../shared/components/Footer";
import BotonWhatsapp from "../shared/components/BotonWhatsApp";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; 
import Inicio from "../modules/inicio/pages/Inicio";
import Nosotros from "../modules/nosotros/pages/Nosotros";
import PacienteQueTratamos from "../modules/paciente/pages/PacienteQueTratamos";
import ScrollToTop from "../shared/components/ScrollToTop";
import Guardia from "../modules/guardia/pages/Guardia";
import Estudios from "../modules/estudios/pages/Estudios";
import Cirugias from "../modules/cirugias/pages/Cirugias";
import Turnos from "../modules/turnos/pages/Turnos";
import Oftalmopediatria from "../modules/oftalmopediatria/pages/Oftalmopediatria";
import Coberturas from "../modules/coberturas/pages/Coberturas";
import StaffMedico from "../modules/staff-medico/pages/StaffMedico.jsx";
import Residencia from "../modules/residencia/pages/Residencia.jsx";
import Prensa from "../modules/prensa/pages/Prensa.jsx";
import QueTratamos from "../modules/tratamientos/pages/QueTratamos";
import Servicios from "../modules/servicios/pages/Servicios";
import Contacto from "../modules/contacto/pages/Contacto";

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
           <Route path="/que-tratamos" element={<QueTratamos />} />
           <Route path="/servicios" element={<Servicios />} />
           {/* <Route path="/paciente" element={<Paciente />}></Route> */}
           <Route path="/paciente/que-tratamos" element={<PacienteQueTratamos />}></Route>
           <Route path="/guardia" element={<Guardia />}></Route>
           <Route path="/estudios" element={<Estudios />}></Route>
           <Route path="/estudios/:slug" element={<Estudios />}></Route>
           <Route path="/cirugias" element={<Cirugias />}></Route>
           <Route path="/turnos-online" element={<Turnos />}></Route>
           <Route path="/oftalmopediatria" element={<Oftalmopediatria />}></Route>
           <Route path="/coberturas" element={<Coberturas />}></Route>
           <Route path="/staff-medico" element={<StaffMedico   />}></Route>
           <Route path="/residencia" element={<Residencia />}></Route>
           <Route path="/prensa" element={<Prensa />}></Route>
           <Route path="/contacto" element={<Contacto />}></Route>
         </Routes>

         <Footer />
         
      </BrowserRouter>
    </div>
  );
}

export default App;
