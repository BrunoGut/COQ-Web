import React from "react";
import ProgramaResidencia from "../components/ProgramaResidencia";
import IngresoResidenciaComponent from "../components/IngresoResidenciaComponent";

function Residencia() {
  return (
    <>
      <section
        id="programa-residencias"
        className="programaResidencia__banner"
        aria-label="Programa de residencia"
      >
        <div className="programaResidencia__banner-contenido">
          <h2 className="programaResidencia__banner-titulo">
            PROGRAMA DE RESIDENCIA
          </h2>
          <h4 className="programaResidencia__banner-subtitulo">
            Excelencia académica y práctica clínica de alta complejidad
          </h4>
        </div>
      </section>  
      <ProgramaResidencia />
      <section
        id="ingreso-residencia"
        className="ingresoResidencia__banner"
        aria-label="Ingreso 2026"
      >
        <div className="ingresoResidencia__banner-contenido">
          <h2 className="ingresoResidencia__banner-titulo">
            INGRESO <br /> 2026
          </h2>
        </div>
      </section>
      <IngresoResidenciaComponent />
    </>
  );
}

export default Residencia;
