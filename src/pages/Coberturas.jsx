import React from 'react'
import CoberturasComponent from '../components/CoberturasComponent'
import BannerComponent from '../components/BannerComponent'
import SectionHeading from '../components/SectionHeading'
import coberturasBannerImg from '../images/coberturas.jpg'
import '../css/coberturasComponent.css'

function Coberturas() {
  return (
    <>
      <BannerComponent
        className="coberturas__banner"
        title="Busca todas las coberturas con las que trabajamos"
        urlImg={coberturasBannerImg}
        ariaLabel="Coberturas"
      />
      
      <div className="coberturas__inner">
        <SectionHeading title="Coberturas" />
      </div>

      <CoberturasComponent />
    </>
  )
}

export default Coberturas