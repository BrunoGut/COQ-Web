import React from 'react'
import FormularioEmail from '../components/FormularioEmail'
import SectionHeading from '../components/SectionHeading'
import BannerComponent from '../components/BannerComponent'
import contactoImg from "../images/contacto/contacto.png";
import "../css/formularioEmail.css";

function Contacto() {
  return (
    <>
      <BannerComponent
        className="formulario__banner"
        title="Recibí nuestra información de contacto"
        urlImg={contactoImg}
        ariaLabel="Formulario de contacto"
      />

      <div className="formulario__inner">
        <SectionHeading title="CONTACTO" />
      </div>

      <FormularioEmail />
    </>
  )
}

export default Contacto