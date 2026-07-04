import React from "react";
import DirectoresMedicos from "../components/DirectoresMedicos.jsx";
import MedicosPlanta from "../components/MedicosPlanta.jsx";
import bannerStaffMedico from "../images/banner-staff-medico.png";
import bannerStaffMedicoMobile from "../images/banner-staff-medico-mobile.png";

function StaffMedico() {
  return (
    <>
      <section className="staffMedico__hero">
        <div className="staffMedico__hero-izquierda">
          <h2 className="staffMedico__banner-titulo">CUERPO MÉDICO</h2>
          <h4 className="staffMedico__banner-subtitulo">
            Excelencia Médica y Especialización
          </h4>
        </div>
        <div className="staffMedico__hero-imagen">
          <picture>
            <source 
              media="(max-width: 600px)"
              srcSet={bannerStaffMedicoMobile}
            />
            <img src={bannerStaffMedico} alt="Staff Médico" className="staffMedico__hero-img" />
          </picture>
        </div>
      </section>
      <DirectoresMedicos />
      <MedicosPlanta />
    </>
  );
}

export default StaffMedico;
