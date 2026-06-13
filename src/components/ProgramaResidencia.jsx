import "../css/programaResidencia.css";
import caoImg from "../images/residencia/cao_img.png";


function ProgramaResidencia() {
  return (
    <>
      <section className="programaResidencia__info" aria-labelledby="programa-residencia-info">
        <div className="programaResidencia__info-container">
          <p className="programaResidencia__intro" id="programa-residencia-info">
            El Programa de Residencia del Centro de Ojos Quilmes es un <strong>pilar fundamental </strong><br />
            de nuestra institución. Con más de 25 años de trayectoria, ofrecemos una <br /> formación integral
            basada en la evidencia científica, el rigor clínico y el acceso <br /> temprano a tecnología
            quirúrgica de última generación.
          </p>

          <div className="programaResidencia__bloque">
            <h3 className="programaResidencia__titulo-seccion">Acreditaciones y avales institucionales</h3>
            <p className="programaResidencia__texto-centro">
              Nuestro programa de primer nivel opera bajo los más altos estándares <br /> regulatorios. Avalado
              y fiscalizado por la Escuela Superior de Enseñanza <br /> Médica del Colegio de Médicos de la Provincia de Buenos Aires (Distrito II).
            </p>
            <p className="programaResidencia__texto-centro programaResidencia__texto-centro--destacado">
              Nuestra institución está afiliada a:
            </p>

            <div className="programaResidencia__cao-img" aria-label="Consejo Argentino de Oftalmología">
              <img src={caoImg} alt="Consejo Argentino de Oftalmología" />
            </div>
          </div>

          <div className="programaResidencia__grid">
            <article className="programaResidencia__columna">
              <h3 className="programaResidencia__subtitulo-columna">Estructura <br /> del programa</h3>

              <div className="programaResidencia__item">
                <p className="programaResidencia__descripcion">
                  Diseñado para una transición progresiva hacia la autonomía profesional.
                </p>
              </div>

              <div className="programaResidencia__item">
                <h4 className="programaResidencia__item-titulo">Dirección General y Académica</h4>
                <p className="programaResidencia__item-texto">Dra. Virginia Zanutigh</p>
              </div>

              <div className="programaResidencia__item">
                <h4 className="programaResidencia__item-titulo">Dirección asistencial</h4>
                <p className="programaResidencia__item-texto">Dr. Gerardo Valvecchia</p>
              </div>

              <div className="programaResidencia__item">
                <h4 className="programaResidencia__item-titulo">Duración</h4>
                <p className="programaResidencia__item-texto">3 años de formación intensiva</p>
              </div>

              <div className="programaResidencia__item programaResidencia__item--sin-borde">
                <h4 className="programaResidencia__item-titulo">Vacantes anuales</h4>
                <p className="programaResidencia__item-texto">1 plazas vía UBA | 2 plazas vía Colegio de Médicos (PBA)</p>
                <p className="programaResidencia__item-texto">3 plazas en total</p>
              </div>
            </article>

            <article className="programaResidencia__columna">
              <h3 className="programaResidencia__subtitulo-columna">Régimen <br /> de formación</h3>

              <div className="programaResidencia__item">
                <p className="programaResidencia__descripcion">
                  Formación intensiva, práctica y supervisada. Nuestro esquema horario y de guardias está
                  pensado para maximizar la exposición quirúrgica y clínica, brindando al residente las
                  herramientas necesarias para liderar la oftalmología del futuro.
                </p>
              </div>

              <div className="programaResidencia__item">
                <h4 className="programaResidencia__item-titulo">Carga horaria</h4>
                <p className="programaResidencia__item-texto">Lunes a viernes (8h) y sábados (4h)</p>
              </div>

              <div className="programaResidencia__item programaResidencia__item--sin-borde">
                <h4 className="programaResidencia__item-titulo">Sistema de Guardias</h4>
                <p className="programaResidencia__item-texto">1er año: 6 guardias mensuales</p>
                <p className="programaResidencia__item-texto">2do año: 4 guardias mensuales</p>
                <p className="programaResidencia__item-texto">3er año: 2 guardias mensuales</p>
              </div>
            </article>
          </div>

          <section className="programaResidencia__motivos" aria-labelledby="programa-residencia-motivos">
            <h3 className="programaResidencia__motivos-titulo" id="programa-residencia-motivos">
              ¿Por qué formarse en Centro de Ojos Quilmes?
            </h3>

            <div className="programaResidencia__motivos-grid">
              <article className="programaResidencia__motivo-card">
                <span className="programaResidencia__motivo-numero">01</span>
                <h4 className="programaResidencia__motivo-titulo">Prestigio académico</h4>
                <p className="programaResidencia__motivo-texto">
                  Programa de formación superior con aval de la UBA.
                </p>
              </article>

              <article className="programaResidencia__motivo-card">
                <span className="programaResidencia__motivo-numero">02</span>
                <h4 className="programaResidencia__motivo-titulo">Tecnología de Vanguardia</h4>
                <p className="programaResidencia__motivo-texto">
                  Acceso a equipamiento de última generación.
                </p>
              </article>

              <article className="programaResidencia__motivo-card">
                <span className="programaResidencia__motivo-numero">03</span>
                <h4 className="programaResidencia__motivo-titulo">Liderazgo profesional</h4>
                <p className="programaResidencia__motivo-texto">
                  Aprendizaje directo con especialistas referentes y un enfoque multidisciplinario.
                </p>
              </article>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default ProgramaResidencia;
