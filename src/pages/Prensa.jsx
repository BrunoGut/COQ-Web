import React from 'react'
import PrensaComponent from '../components/PrensaComponent'
import CoqShorts from '../components/CoqShortsComponent'

function Prensa() {
  return (
    <>
      <section className="prensa__banner" aria-label="Prensa">
        <div className="prensa__banner-contenido">
          <h2 className="prensa__banner-titulo">PRENSA</h2>
        </div>
      </section>
      <CoqShorts />
      <PrensaComponent />
    </>
  )
}

export default Prensa