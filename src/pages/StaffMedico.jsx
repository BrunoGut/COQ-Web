import React from "react";
import DirectoresMedicos from "../components/DirectoresMedicos.jsx";
import MedicosPlanta from "../components/MedicosPlanta.jsx";

function StaffMedico() {
  return (
    <>
      <section className="directoresMedicos__banner" aria-label="Cuerpo médico">
        <div className="directoresMedicos__banner-contenido">
          <h2 className="directoresMedicos__banner-titulo">CUERPO MÉDICO</h2>
          <h4 className="directoresMedicos__banner-subtitulo">
            Excelencia Médica y Especialización
          </h4>
        </div>
      </section>
      <DirectoresMedicos />
      <MedicosPlanta />
    </>
  );
}

export default StaffMedico;
