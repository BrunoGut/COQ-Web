import GuardiaComponent from "../components/GuardiaComponent";
import BannerComponent from "../components/BannerComponent";
import SectionHeading from "../components/SectionHeading";
import guardiaImg from "../images/guardia/guardia.jpeg";
import causasImg from "../images/guardia/imagen2.jpg";
import "../css/guardiaComponent.css";

export default function Guardia() {
  return (
    <>
      <div className="guardia__banner" aria-label="Atención de guardia">
        <div className="guardia__contenido">
          <h2 className="guardia__banner-titulo">GUARDIA OFTALMOLÓGICA</h2>
          <h4 className="guardia__banner-subtitulo">
            Servicio de guardia para urgencias
          </h4>
        </div>
      </div>
      <GuardiaComponent />
    </>
  );
}
