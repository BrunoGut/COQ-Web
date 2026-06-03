import "../css/ingresoResidenciaComponent.css";
import { useState } from "react";
import Modal from "./Modal";

function IngresoResidenciaComponent() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <section id="ingreso-residencia" className="ingresoResidencia__banner" aria-label="Ingreso 2026">
        <div className="ingresoResidencia__banner-contenido">
          <h2 className="ingresoResidencia__banner-titulo">Ingreso <br /> 2026</h2>
        </div>
      </section>

      <section className="ingresoResidencia__contenido" aria-labelledby="ingreso-uba">
        <div className="ingresoResidencia__container">
          <article className="ingresoResidencia__bloque ingresoResidencia__bloque--secundario" aria-labelledby="ingreso-cm">
            <h3 className="ingresoResidencia__titulo" id="ingreso-cm">Ingreso Colegio de Médicos (PBA)</h3>

            <div className="ingresoResidencia__requisitos">
              <div className="ingresoResidencia__requisito-item">
                <h4 className="ingresoResidencia__requisito-titulo">Requisitos nacionales</h4>
                <p className="ingresoResidencia__requisito-texto">
                  DNI <span>|</span> Título o certificado en trámite <span>|</span> Matrícula nacional
                </p>
              </div>

              <div className="ingresoResidencia__requisito-divisor" aria-hidden="true" />

              <div className="ingresoResidencia__requisito-item">
                <h4 className="ingresoResidencia__requisito-titulo">Requisitos extranjeros</h4>
                <p className="ingresoResidencia__requisito-texto ingresoResidencia__requisito-texto--ancho">
                  DNI argentino vigente y con validación <span>|</span> Reválida de título y <br />
                  Matrícula nacional habilitante (sin excepción)
                </p>
              </div>
            </div>

            <div className="ingresoResidencia__requisito-divisor" aria-hidden="true" />

            <div className="ingresoResidencia__cronograma">
              <h4 className="ingresoResidencia__requisito-titulo">Cronograma</h4>
              <p className="ingresoResidencia__requisito-texto"><span className="texto__subrayado">Inscripción</span>: 01/06/2026 - 01/07/2026</p>
              <p className="ingresoResidencia__requisito-texto"><span className="texto__subrayado">EIRU (Examen de Ingreso a Residencias Único)</span><span className="texto__destacado">14/07/2026</span></p>
              <p className="ingresoResidencia__requisito-texto"><span className="texto__subrayado">Entrevistas</span>: Semana del 20 al 31 de julio</p>
              <p className="ingresoResidencia__requisito-texto"><span className="texto__subrayado">Adjudicación</span>01/09/2026</p>
            </div>

            <button
              className="ingresoResidencia__btn-inscripcion"
              onClick={() => setModalOpen(true)}
            >
              Inscripción
            </button>
          </article>

          <article className="ingresoResidencia__bloque">
            <h3 className="ingresoResidencia__titulo" id="ingreso-uba">Ingreso UBA</h3>

            <p className="ingresoResidencia__descripcion">
              Para participar del Concurso de Residencias 2026, los aspirantes <br />
              deberán rendir el examen del GCBA y seleccionar el Concurso UBA <br />
              al momento de la inscripción.
            </p>

            <div className="ingresoResidencia__fechas" aria-label="Fechas de ingreso UBA">
              <div className="ingresoResidencia__fecha-item">
                <h4 className="ingresoResidencia__fecha-titulo">Cierre de Inscripción</h4>
                <p className="ingresoResidencia__fecha-texto">24 abril 2026</p>
              </div>

              <div className="ingresoResidencia__fecha-separador" aria-hidden="true" />

              <div className="ingresoResidencia__fecha-item">
                <h4 className="ingresoResidencia__fecha-titulo">Inicio de Residencia</h4>
                <p className="ingresoResidencia__fecha-texto">01 agosto 2026</p>
              </div>
            </div>

            <a className="ingresoResidencia__link" href="https://inscripcion.fmed.uba.ar/cgi-bin/residencias/infoBasicas.py">Inscripción UBA</a>
          </article>
        </div>
      </section>

      <Modal isOpen={modalOpen} closeModal={() => setModalOpen(false)} title="Inscripción al Examen 2026">
        <div className="ingresoResidencia__modal-contenido">
          <ul className="ingresoResidencia__modal-lista">
            <li>Enviar un mail a <a href="mailto:residencia@centrodeojosquilmes.com.ar" className="ingresoResidencia__modal-link">residencia@centrodeojosquilmes.com.ar</a></li>
            <li>Cuerpo del mensaje poner nombre, apellido y DNI y un Nro. de Celular</li>
            <li>Adjuntar CV completo (formato .doc, .docx o .pdf), Copia de DNI (formato jpg o pdf), y Matrícula Nacional (en el caso de Argentinos se puede adjuntar constancia de trámite)</li>
          </ul>
          <button className="ingresoResidencia__modal-btn-cerrar" onClick={() => setModalOpen(false)}>Cerrar</button>
        </div>
      </Modal>
    </>
  );
}

export default IngresoResidenciaComponent;
