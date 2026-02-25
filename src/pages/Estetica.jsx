import React from 'react'
import EsteticaComponent from '../components/EsteticaComponent'
import BannerComponent from '../components/BannerComponent'
import SectionHeading from '../components/SectionHeading'
import "../css/esteticaComponent.css";
import esteticaImg from "../images/estetica/estetica1.jpg";

function Estetica() {
  return (
    <>
      <BannerComponent
        className="estetica__banner"
        title="Información sobre nuestros procedimientos estéticos"
        urlImg={esteticaImg}
        ariaLabel="Estetica"
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

      <div className="estetica__inner">
        <SectionHeading title="ESTÉTICA" />
      </div>

      <EsteticaComponent />
    </>
  )
}

export default Estetica