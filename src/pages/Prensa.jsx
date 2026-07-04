import React from 'react'
import PrensaComponent from '../components/PrensaComponent'
import CoqShorts from '../components/CoqShortsComponent'
import bannerPrensa from "../images/banner-prensa.png";
import bannerPrensaMobile from "../images/banner-prensa-mobile.png";

function Prensa() {
  return (
    <>
      <section className="prensa__hero">
              <div className="prensa__hero-izquierda">
                <h2 className="prensa__banner-titulo">PRENSA</h2>
                <h4 className="prensa__banner-subtitulo">
                  Información y novedades del Instituto
                </h4>
              </div>
              <div className="prensa__hero-imagen">
                <picture>
                  <source 
                    media="(max-width: 600px)"
                    srcSet={bannerPrensaMobile}
                  />
                  <img src={bannerPrensa} alt="Prensa" className="prensa__hero-img" />
                </picture>
              </div>
            </section>
      <CoqShorts />
      <PrensaComponent />
    </>
  )
}

export default Prensa