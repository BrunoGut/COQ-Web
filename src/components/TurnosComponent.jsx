import React from "react";
import SectionHeading from "./SectionHeading";
import BannerComponent from "./BannerComponent";
import turnosImg from "../images/turnos/turnos.png";
import "../css/turnosComponent.css";

function TurnosComponent() {
  return (
    <section className="turnos">
      <BannerComponent
        className="turnos__banner"
        title="Solicitá tu turno online"
        urlImg={turnosImg}
        ariaLabel="Turnos online"
      >
        <a
          href="https://wa.me/541138721437"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="boton-turnos" type="button">
            <i className="bi bi-calendar-check-fill" aria-hidden="true" />
            <span>CLICK AQUÍ</span>
          </button>
        </a>
      </BannerComponent>

      <div className="turnos__inner">
        <SectionHeading title="TURNOS ONLINE" />
      </div>

      <div className="info__grid__turnos">
        <div className="info__div__turnos">
          <h2 className="info__text__turnos">
            Encontrá toda la información para agendar tu consulta medica, estudio o cirugía
          </h2>
          <p>Enviá un mensaje de WhastApp al <span className="destacado__subrayado">(011) 6513-2161</span> haciendo <a className="info__link" href="https://wa.me/541138721437" target="_blank" rel="noopener noreferrer">click aquí</a>, <br /> indicando tu <span className="destacado__subrayado">nombre completo, DNI, obra social, motivo de la consulta y fecha y horario preferido.</span></p>
        </div>
      </div>

      <div className="info__grid__turnos">
        <div className="info__div__turnos">
          <h2 className="info__text__turnos">
            Horarios de atención
          </h2>
          <p>Lunes a viernes de <strong>08:00 a 19:30hs.</strong> <br />
          Sabados de <strong>08:00 a 12:00hs.</strong></p>
        </div>
      </div>
    </section>
  );
}

export default TurnosComponent;
