import React from 'react'
import '../css/bienvenidaComponent.css'

function BienvenidaComponent() {
  return (
    <section className="bienvenida__section">
        <div className="bienvenida__texto">
          <h2 className="bienvenida__titulo">¡Bienvenidos al Centro de Ojos Quilmes!</h2>
        </div>
        <div className="bienvenida__cards">
            <div className="bienvenida__card">
              <div className="bienvenida__card-icon">
                <i className="bi bi-star-fill" />
              </div>
              <h3 className="bienvenida__card-titulo">Cuerpo médico <br /> de excelencia</h3>
              <p className="bienvenida__card-descripcion">
                Un equipo de especialistas referentes en cada área de la oftalmología, dedicados a brindar diagnósticos precisos con el respaldo de una trayectoria confortable.
              </p>
            </div>

            <div className="bienvenida__card">
              <div className="bienvenida__card-icon">
                <i className="bi bi-robot" />
              </div>
              <h3 className="bienvenida__card-titulo">Precisión y vanguardia</h3>
              <p className="bienvenida__card-descripcion">
                Equipamiento de última generación para procedimientos de alta complejidad. Innovación constante para garantizar resultados óptimos en tu salud visual.
              </p>
            </div>

            <div className="bienvenida__card">
              <div className="bienvenida__card-icon">
                <i className="bi bi-eye-fill" />
              </div>
              <h3 className="bienvenida__card-titulo">Atención personalizada</h3>
              <p className="bienvenida__card-descripcion">
                Entendemos que cada mirada es única. Ofrecemos una atención humana y cercana, adaptada a las necesidades específicas de cada uno de nuestros pacientes.
              </p>
            </div>
        </div>
    </section>
  )
}

export default BienvenidaComponent