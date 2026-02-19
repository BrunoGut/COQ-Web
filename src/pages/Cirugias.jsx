import CirugiasComponent from "../components/CirugiasComponent";
import BannerComponent from "../components/BannerComponent";
import SectionHeading from "../components/SectionHeading";
import '../css/cirugiasComponent.css'
import cirugiasBannerImg from '../images/cirugias/cirugia.jpg'

export default function Cirugias() {
  return (
    <>
      <BannerComponent
        className="cirugias__banner"
        title="Busca todas nuestras cirugías"
        urlImg={cirugiasBannerImg}
        ariaLabel="Cirugías"
      >
        <a
          href="https://wa.me/541138721437"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="boton-cirugia" type="button">
            <i className="bi bi-calendar-check-fill" aria-hidden="true" />
            <span>SOLICITA TU TURNO</span>
          </button>
        </a>
      </BannerComponent>

      <div className="cirugias__inner">
            <SectionHeading title="Cirugías" />
        </div>

      <CirugiasComponent />
    </>
  );
}
