import SectionHeading from "./SectionHeading"
import '../css/quienesSomos.css'
import quienesSomosImg from '../images/quienes-somos.png'

export default function QuienesSomos() {
  return (
    <section className="quienesSomos" id="quienes-somos" aria-label="Quiénes somos">
      <div className="quienesSomos__inner">
        <SectionHeading title="¿Quiénes somos?" />

        <div className="quienesSomos__grid">
          <div>
            <p className="quienesSomos__text">
              Centro De Ojos Quilmes nace en 1980 con el fin de mejorar la calidad visual de los pacientes brindando un servicio de excelencia basado en la especialización de sus profesionales y la alta complejidad. Siguiendo estos fundamentos como base de su filosofía, sus cuatro socios fundadores, ampliaron el directorio sumando a reconocidos médicos especialistas.
            </p>
            <p className="quienesSomos__text">
              Hoy en día, es una reconocida clínica privada de microcirugía y láser dedicada al tratamiento de diversas patologías oculares realizando mas de 12.000 consultas y 500 cirugías mensuales. Ademas, cuenta con un programa de residentes que lleva más de 20 años formando profesionales, fruto de su compromiso con la excelencia médica.
            </p>
            <p className="quienesSomos__text">
                Centro De Ojos Quilmes está habilitado por C.U.C.A.I.B.A. como Centro de Transplantes de Cornea y del Ministerio de Buenos Aires.
            </p>
          </div>

          <div className="quienesSomos__media">
            <img
              className="quienesSomos__image"
              src={quienesSomosImg}
              alt="Quiénes somos"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
