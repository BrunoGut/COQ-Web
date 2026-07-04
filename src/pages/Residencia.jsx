import React from "react";
import ProgramaResidencia from "../components/ProgramaResidencia";
import IngresoResidenciaComponent from "../components/IngresoResidenciaComponent";
import residencia1Img from "../images/banner-residencia1.png";
import residencia2Img from "../images/banner-residencia2.png";
import residenciaMobile from "../images/banner-residencia-mobile.png";
import ringresoResidenciaMobile from "../images/banner-ingreso-residencia-mobile.png";

function Residencia() {
  return (
    <>
      <section
        className="programaResidencia__hero"
        aria-label="Atención de guardia"
        id="programa-residencias"
      >
        <div className="programaResidencia__hero-izquierda">
          <h2 className="programaResidencia__banner-titulo">
            PROGRAMA DE RESIDENCIA
          </h2>
          <h4 className="programaResidencia__banner-subtitulo">
            Excelencia académica y práctica clínica de alta complejidad
          </h4>
        </div>
        <div className="programaResidencia__hero-imagen">
          <picture>
            <source
              media="(max-width: 600px)"
             srcSet={residenciaMobile} 
            />
            <img
              src={residencia1Img}
              alt="Programa de Residencia"
              className="programaResidencia__hero-img"
            />
          </picture>
        </div>
      </section>
      <ProgramaResidencia />
      <section className="ingresoResidencia__hero" id="ingreso-residencia">
        <div className="ingresoResidencia__hero-izquierda">
          <h2 className="ingresoResidencia__banner-titulo">INGRESO <br /> 2026</h2>

        </div>
        <div className="ingresoResidencia__hero-imagen">
          <picture>
            <source
              media="(max-width: 600px)"
             srcSet={ringresoResidenciaMobile}
            />
            <img
              src={residencia2Img}
              alt="Ingreso Residencia 2026"
              className="ingresoResidencia__hero-img"
            />
          </picture>
        </div>
      </section>
      <IngresoResidenciaComponent />
    </>
  );
}

export default Residencia;
