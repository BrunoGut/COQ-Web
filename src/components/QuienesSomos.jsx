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
              <span className="destacado_azul_qs">Centro De Ojos Quilmes</span> nace en <span className="destacado_negro_qs">1980</span> con el fin de mejorar la <span className="destacado_negro_qs">calidad visual de los pacientes</span> brindando un servicio de excelencia basado en la <span className="destacado_negro_qs">especialización de sus profesionales</span> y la <span className="destacado_negro_qs">alta complejidad</span> . Siguiendo estos fundamentos como base de su filosofía, sus <span className="destacado_negro_qs">cuatro socios fundadores</span>, ampliaron el directorio sumando a <span className="destacado_negro_qs">reconocidos médicos especialistas</span>.
            </p>
            <p className="quienesSomos__text">
              Hoy en día, es una <span className="destacado_azul_qs">reconocida clínica privada de microcirugía y láser</span> dedicada al tratamiento de diversas patologías oculares realizando mas de <span className="destacado_negro_qs">12.000 consultas y 500 cirugías mensuales</span>. Ademas, cuenta con un <span className="destacado_negro_qs">programa de residentes</span> que lleva más de <span className="destacado_negro_qs">20 años formando profesionales</span>, fruto de su compromiso con la excelencia médica.
            </p>
            <p className="quienesSomos__text">
                <span className="destacado_negro_qs_cursiva">Centro De Ojos Quilmes está habilitado por C.U.C.A.I.B.A. como Centro de Transplantes de Cornea y del Ministerio de Buenos Aires.</span>
            </p>
          </div>

          <div className="quienesSomos__media">
            <div className="quienesSomos__img">
              <img
              className="quienesSomos__image"
              src={quienesSomosImg}
              alt="Quiénes somos"
              fetchPriority="high"
            /> 
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
