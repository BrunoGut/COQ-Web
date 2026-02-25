import EstudiosComponent from "../components/EstudiosComponent";
import BannerComponent from "../components/BannerComponent";
import estudiosBannerImg from "../images/estudios/estudios-banner.jpg";
import "../css/estudiosComponent.css";
import "../css/patologias.css";
import SectionHeading from "../components/SectionHeading";

export default function Estudios() {
  return (
    <>
      <BannerComponent
        className="estudios__banner"
        title="Nuestros estudios"
        urlImg={estudiosBannerImg}
        ariaLabel="Estudios"
      >
        <a
          href="https://wa.me/541138721437"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="boton-cirugia" type="button">
            <i className="bi bi-whatsapp" aria-hidden="true" />
            <span>SOLICITA TU TURNO</span>
          </button>
        </a>
      </BannerComponent>

      <div className="estudios__inner">
        <SectionHeading title="Estudios" />
      </div>
      <EstudiosComponent />
    </>
  );
}
