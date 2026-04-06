import React from 'react'
import '../css/bienvenidaComponent.css'

function BienvenidaComponent() {
  return (
    <section className="bienvenida__section">
        <div className="bienvenida__texto">
          <h3 className="bienvenida__titulo">Bienvenidos al <br /> Centro de Ojos Quilmes</h3>
        </div>
        <div className="bienvenida__cards">
            <div className="bienvenida__card">
              <h3 className="bienvenida__card-titulo">Cuerpo médico <br /> de excelencia</h3>
              <hr className="bienvenida__card-linea" />
              <p className="bienvenida__card-descripcion">
                Un <span className='destacado-gris'>equipo de especialistas referentes en cada área de la oftalmología</span>, dedicados a brindar diagnósticos precisos con el respaldo de una trayectoria confortable.
              </p>
            </div>

            <div className="bienvenida__card">
              <h3 className="bienvenida__card-titulo">Precisión <br /> y vanguardia</h3>
              <hr className="bienvenida__card-linea" />
              <p className="bienvenida__card-descripcion">
                <span className="destacado-gris">Equipamiento de última generación</span> para procedimientos de alta complejidad. Innovación constante para garantizar resultados óptimos en tu salud visual.
              </p>
            </div>

            <div className="bienvenida__card">
              <h3 className="bienvenida__card-titulo">Atención personalizada</h3>
              <hr className="bienvenida__card-linea" />
              <p className="bienvenida__card-descripcion">
                Entendemos que cada mirada es única. <span className="destacado-gris">Brindamos una atención humana y cercana</span>, adaptada a las necesidades específicas de cada uno de nuestros pacientes.
              </p>
            </div>
        </div>
    </section>
  )
}

export default BienvenidaComponent