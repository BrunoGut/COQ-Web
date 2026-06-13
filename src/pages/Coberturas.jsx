import React from 'react'
import CoberturasComponent from '../components/CoberturasComponent'
import '../css/coberturasComponent.css'

function Coberturas() {
  return (
    <>
    <section className="coberturas__banner" aria-label="Coberturas">
        <div className="coberturas__banner-contenido">
          <h2 className="coberturas__banner-titulo">COBERTURAS MÉDICAS</h2>
          <h4 className="coberturas__banner-subtitulo">
            Descubrí si tu obra social o prepaga tiene convenio con nosotros
          </h4>
        </div>
      </section>
    <CoberturasComponent />
    </>
  )
}

export default Coberturas