import "../css/ingresoResidenciaComponent.css";

function IngresoResidenciaComponent() {
  return (
    <>
      <section id="ingreso-residencia" className="ingresoResidencia__banner" aria-label="Ingreso 2026">
        <div className="ingresoResidencia__banner-contenido">
          <h2 className="ingresoResidencia__banner-titulo">Ingreso <br /> 2026</h2>
        </div>
      </section>

      <section className="ingresoResidencia__contenido" aria-labelledby="ingreso-uba">
        <div className="ingresoResidencia__container">
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
              <p className="ingresoResidencia__requisito-texto">Fechas de examen y entrevistas a confirmar</p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default IngresoResidenciaComponent;
