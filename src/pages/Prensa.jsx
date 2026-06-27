import React from 'react'
import PrensaComponent from '../components/PrensaComponent'
import CoqShorts from '../components/CoqShortsComponent'
import bannerPrensa from "../images/prensa/banner-prensa.png";

function Prensa() {
  return (
    <>
      <section className="prensa__banner" aria-label="Prensa">
        <div className="prensa__banner-contenido">
          <h2 className="prensa__banner-titulo">PRENSA</h2>
          <h4 className="prensa__banner-subtitulo">Información y novedades del Instituto</h4>
        </div>
      </section>
      <CoqShorts />
      <PrensaComponent />
    </>
  )
}

export default Prensa