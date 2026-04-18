import React from 'react'
import FormularioEmail from '../components/FormularioEmail'
import flechaImg from '../images/turnos/flecha.png'
import "../css/formularioEmail.css";

function Contacto() {
  return (
    <main className="contactoPage">
      <div className="contactoPage__inner">
        <header className="contactoPage__header">
          <h1 className="contactoPage__title">
            <span>Contacto</span>
            <img
              className="contactoPage__titleIcon"
              src={flechaImg}
              alt=""
              aria-hidden="true"
            />
          </h1>
        </header>

        <FormularioEmail flechaImg={flechaImg} />
      </div>
    </main>
  )
}

export default Contacto