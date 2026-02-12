import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import "../css/ingresoResidenciaComponent.css";
import Modal from "./Modal";

function IngresoResidenciaComponent() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  return (
    <section className="ingresoResidencia" id="ingreso-residencia">
      <div className="ingreso__residencia__inner">
        <SectionHeading title="INGRESO A RESIDENCIA" />
      </div>

      <div className="info__grid__ingreso">
        <div className="info__div__ingreso">
          <h3 className="info__text__ingreso">
            Apertura inscripción a residencia 2026
          </h3>
          <p>
            La residencia del Centro de Ojos Quilmes cuenta con 4 (cuatro)
            vacantes, 1 (Una) es otorgada a través de la Universidad de Buenos
            Aires y las otras 3 (Tres) restantes a través del Colegio Médico de
            la Provincia de Bs As. <br />
            Si queres conocer nuestra residencia y las instalaciones podes
            coordinar una rotación enviando un mail a{" "}
            <span className="destacado_negro">Mariana De Muro</span>{" "}
            <span className="destacado_azul">mdemuro@fibertel.com.ar</span>
          </p>
        </div>

        <div className="info__div__ingreso">
          <h3 className="info__text__ingreso">
            Ingreso a través del Colegio Médico de la Pcia. de Bs. As.
          </h3>
          <h4>Profesionales Nacionales</h4>
          <div className="div__ingreso__list">
            <ul className="info__ingreso__list">
              <li>
                <i className="bi bi-chevron-right" aria-hidden="true"></i>
                <span>
                  <span className="destacado_negro">DNI</span>
                </span>
              </li>
              <li>
                <i className="bi bi-chevron-right" aria-hidden="true"></i>
                <span>
                  <span className="destacado_negro">Título o certificado de Título en trámite</span>
                </span>
              </li>
              <li>
                <i className="bi bi-chevron-right" aria-hidden="true"></i>
                <span>
                  <span className="destacado_negro">Matricula Nacional Habilitante o constancia de matrícula en trámite</span>
                </span>
              </li>
            </ul>
          </div>

          <h4>Profesionales Extranjeros</h4>
          <div className="div__ingreso__list">
            <ul className="info__ingreso__list">
              <li>
                <i className="bi bi-chevron-right" aria-hidden="true"></i>
                <span>
                  <span className="destacado_negro">DNI vigente emitido por autoridad argentina.(no se admitirán extranjeros con DNI vencido o en trámite por el tiempo que demanda su normalización)</span>
                </span>
              </li>
              <li>
                <i className="bi bi-chevron-right" aria-hidden="true"></i>
                <span>
                  <span className="destacado_negro">Tener realizada la revalida o convalida de título expedida por autoridad competente</span>
                </span>
              </li>
              <li>
                <i className="bi bi-chevron-right" aria-hidden="true"></i>
                <span>
                  <span className="destacado_negro">Matricula Nacional Habilitante o constancia de matrícula en trámite</span>
                </span>
              </li>
            </ul>            
          </div>

          <h4>Cronograma</h4>
          <div className="div__ingreso__list">
            <ul className="info__ingreso__list">
              <li>
                <i className="bi bi-chevron-right" aria-hidden="true"></i>
                <span>
                  <span className="destacado_negro">Cierre de Inscripción 4  de julio de 2025</span>
                </span>
              </li>
              <li>
                <i className="bi bi-chevron-right" aria-hidden="true"></i>
                <span>
                  <span className="destacado_negro">Examen  a confirmar (14 al 18 de julio de 2026)</span>
                </span>
              </li>
              <li>
                <i className="bi bi-chevron-right" aria-hidden="true"></i>
                <span>
                  <span className="destacado_negro">Entrevistas a confirmar</span>
                </span>
              </li>
              <li>
                <i className="bi bi-chevron-right" aria-hidden="true"></i>
                <span>
                  <span className="destacado_negro">Inicio de Residencia  1 de Septiembre de 2026</span>
                </span>
              </li>
            </ul>
                <div className="div__boton">
                {/*abrir modal al tocar boton*/}
                <button className="boton-guardia"
                type="button"
                onClick={openModal}
                >Inscripción</button>

                <Modal isOpen={isModalOpen} closeModal={closeModal}>
                    <h2>INSCRIPCIÓN AL EXAMEN 2026</h2>
                    <ul>
                        <li>
                            Enviar un mail a <a href="mailto:residencia@centrodeojosquilmes.com.ar" className="destacado_azul">residencia@centrodeojosquilmes.com.ar</a>
                        </li>
                        <li>
                            <span className="destacado_negro_2">Asunto:</span> Inscripción al examen de residencia 2026.
                        </li> 
                        <li>
                            <span className="destacado_negro_2">Cuerpo del mensaje:</span> nombre, apellido, DNI y teléfono de contacto.
                        </li>
                        <li>
                            Adjuntar CV completo(<span className="destacado_negro">formato .doc .docx o .pdf</span>), Copia de DNI(<span className="destacado_negro">formato jpg o pdf</span>), y Matricula Nacional ( en el caso de Argentinos se puede adjuntar constancia de tramite)
                        </li> 
                    </ul>    
                </Modal> 
            </div>          
          </div>     
        </div>
        <div className="info__div__ingreso">
          <h3 className="info__text__ingreso">
            Ingreso a través de la UBA
          </h3>
          <p>
            <span className="destacado_negro_2">La inscripción es desde la página de la UBA.</span>
          </p>
          <h4>Cronograma</h4>
          <div className="div__ingreso__list">
            <ul className="info__ingreso__list">
              <li>
                <i className="bi bi-chevron-right" aria-hidden="true"></i>
                <span>
                  <span className="destacado_negro">Inscripción del 21 de Abril 2025 al 9 de Mayo de 2025</span>
                </span>
              </li>
              <li>
                <i className="bi bi-chevron-right" aria-hidden="true"></i>
                <span>
                  <span className="destacado_negro">Examen  2 de Julio de 2025 en forma PRESCENCIAL (EXAMEN UNICO)</span>
                </span>
              </li>
              <li>
                <i className="bi bi-chevron-right" aria-hidden="true"></i>
                <span>
                  <span className="destacado_negro">Inicio de Residencia  1 de Septiembre de 2024</span>
                </span>
              </li>
            </ul>
                <div className="div__boton">
                <a href="https://inscripcion.fmed.uba.ar/cgi-bin/residencias/infoBasicas.py">
                <button className="boton-guardia">Información</button>
                </a> 
            </div>          
          </div>
        </div>
        <div className="info__div__ingreso">
          <h3 className="info__text__ingreso">
            Cronograma examen único (EU)
          </h3>
          <p>
            <span className="destacado_negro">Enviar mail a</span> <span className="destacado_azul">residencia@centrodeojosquilmes.com.ar</span> <br />
            <span className="destacado_negro_2">Asunto:</span> <span className="destacado_negro">Ingreso por UBA.</span> <br />
            <span className="destacado_negro">Adjuntar el CV (en .pdf, .doc o .docx)</span>
          </p>
          <div className="div__boton">
            <a href="https://www.argentina.gob.ar/salud/residencias/ingreso/examen-unico"><button className="boton-guardia">Información</button></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IngresoResidenciaComponent;
