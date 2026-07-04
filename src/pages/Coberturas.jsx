import React from "react";
import CoberturasComponent from "../components/CoberturasComponent";
import "../css/coberturasComponent.css";
import coberturasImg from "../images/banner-coberturas.png";
import coberturasImgMobile from "../images/banner-coberturas-mobile.png";

function Coberturas() {
  return (
    <>
      <section className="coberturas__hero" aria-label="Coberturas médicas">
        <div className="coberturas__hero-izquierda">
          <h2 className="coberturas__banner-titulo">COBERTURAS MÉDICAS</h2>
          <h4 className="coberturas__banner-subtitulo">
            Descubrí si tu obra social o prepaga <br /> tiene convenio con nosotros
          </h4>
        </div>
        <div className="coberturas__hero-imagen">
          <picture>
            <source 
              media="(max-width: 600px)"
              srcSet={coberturasImgMobile}
            />
            <img src={coberturasImg} alt="Coberturas médicas" className="coberturas__hero-img" />
          </picture>
        </div>
      </section>
      <CoberturasComponent />
    </>
  );
}

export default Coberturas;
