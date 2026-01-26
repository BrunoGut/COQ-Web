import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BotonWhatsapp from "./components/BotonWhatsapp";
import { BrowserRouter, Routes, Route} from "react-router-dom"; 
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
function App() {
  return (
    <div>
      <BrowserRouter>

        <Navbar />
        <BotonWhatsapp />
        
         
         <Routes>
           <Route path="/" element={<Inicio />} />
           <Route path="/inicio" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
         </Routes>

         <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
