import React from 'react'
import PrensaComponent from '../components/PrensaComponent'
import CoqShorts from '../components/CoqShortsComponent'
import bannerPrensa from "../../../assets/images/banner-prensa.png";
import bannerPrensaMobile from "../../../assets/images/banner-prensa-mobile.png";

function Prensa() {
  return (
    <>
      <section className="prensa__hero">
              <div className="prensa__hero-izquierda">
                <h1 className="prensa__banner-titulo">PRENSA</h1>
                <p className="prensa__banner-subtitulo">
                  Información y novedades del Instituto
                </p>
              </div>
              <div className="prensa__hero-imagen">
                <picture>
                  <source 
                    media="(max-width: 600px)"
                    srcSet={bannerPrensaMobile}
                  />
                  <img
                    src={bannerPrensa}
                    alt="Espacio de prensa del Centro de Ojos Quilmes"
                    className="prensa__hero-img"
                  />
                </picture>
              </div>
            </section>
      <CoqShorts />
      <PrensaComponent />
    </>
  )
}

export default Prensa
