import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Modal from "./Modal";
import "../css/guardiaComponent.css";
import GUARDIA from "./data/GuardiaArray";

export default function GuardiaComponent() {
  const firstId = GUARDIA[0]?.id ?? null; // Obtener el ID del primer elemento

  const [selectedId, setSelectedId] = useState(firstId); // Estado para el ID seleccionado
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar la visibilidad del modal
  const [openSec, setOpenSec] = useState(-1); // Estado para controlar la sección abierta
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Estado para controlar el desplegable del sidebar (mobile)

  const selectedItem = GUARDIA.find((x) => x.id === selectedId) ?? null;
  const sections = selectedItem?.sections ?? []; // Secciones del ítem seleccionado. si no tiene devuelve un array vacio

  const selectItem = (id) => { // Función para seleccionar un ítem por su ID
    setSelectedId(id);
    setOpenSec(-1); // Cerrar cualquier sección abierta al cambiar de ítem
    setIsSidebarOpen(false);
  };

  const toggleSec = (i) => setOpenSec((prev) => (prev === i ? -1 : i)); // Función para abrir/cerrar secciones

  const openModal = () => {
    if (selectedId == null && firstId != null) selectItem(firstId);
    setIsModalOpen(true);
    setIsSidebarOpen(false);
  };

  return (
    <section className="guardia">
      <div className="guardia__inner">
        <SectionHeading title="SERVICIOS" />
      </div>

      <div className="guardia__banner" aria-label="Atención de guardia">
        <div className="guardia__bannerInner">
          <h3 className="guardia__bannerTitle">Atención de guardia</h3>
        </div>
      </div>

      <div className="info__grid">
        <div className="info__div">
          <h2 className="info__text">Servicio de guardia para urgencias del paciente</h2>
          <p>Teléfono de contacto: (011) 4255-3120</p>
        </div>

        <div className="info__div">
          <h2 className="info__text">Horarios:</h2>
          <p>
            Lunes a viernes de 8:00 a 20:00 hs. Sabados de 8:00 a 18:00 hs.
            Domingos y feriados de 10:00 a 13:00 hs.
          </p>
        </div>

        <div className="info__div">
          <h2 className="info__text">¿Donde estamos?</h2>
          <p>Humberto Primo 298, Quilmes, Buenos Aires, Argentina.</p>
        </div>
      </div>

      <div className="causas__banner" aria-label="Causas de consulta">
        <div className="causas__bannerInner">
          <h3 className="causas__bannerTitle">Posibles causas</h3>

          <button type="button" className="card-button" onClick={openModal}> {/*evento de abrir el modal al hacer click*/}
            Saber más
          </button>

          <Modal
            isOpen={isModalOpen}
            closeModal={() => setIsModalOpen(false)} //cambio el estado para cerrar el modal
            containerClassName="container__modal--wide"
          >
            <div className="guardiaModal__layout" aria-label="Detalle de guardia">
              {/* Sidebar */}
              <aside
                className={`guardiaModal__sidebar${isSidebarOpen ? " is-open" : ""}`}
                aria-label="Lista de causas"
              >
                <button
                  type="button"
                  className="guardiaModal__sidebarToggle"
                  onClick={() => setIsSidebarOpen((prev) => !prev)}
                  aria-expanded={isSidebarOpen}
                  aria-controls="guardiaModalList"
                >
                  <span className="guardiaModal__sidebarToggleText">Lista de causas</span>
                  <span className="guardiaModal__sidebarToggleIcon" aria-hidden="true">
                    <i className="bi bi-chevron-down" />
                  </span>
                </button>

                <div id="guardiaModalList" className="guardiaModal__sidebarContent">
                  <ul className="guardiaModal__list" role="list">
                    {GUARDIA.map((item) => { // Recorro el array de guardia para crear la lista
                      const active = item.id === selectedId; // Verifico si el ítem es el seleccionado
                      return (
                        <li key={item.id} className="guardiaModal__listItem">
                          <button
                            type="button"
                            className={`guardiaModal__listButton${active ? " is-active" : ""}`} // Agrego clase si es el ítem activo
                            onClick={() => selectItem(item.id)} // Evento para seleccionar el ítem
                            aria-pressed={active} // Atributo aria para accesibilidad
                          >
                            <span className="guardiaModal__listLabel">{item.title}</span> {/* Título del ítem */}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </aside>

              {/* Detail */}
              <div aria-label="Contenido">
                {!selectedItem ? ( // Si no hay ítem seleccionado, muestro un mensaje
                  <p>No hay información para mostrar.</p>
                ) : (
                  <article className="guardiaModal__detail">
                    <header className="guardiaModal__detailHeader">
                      <h3 className="guardiaModal__detailTitle">{selectedItem.title}</h3>
                      <div className="guardiaModal__detailText">{selectedItem.descripcion}</div>
                    </header>

                    {!!sections.length && ( // Si hay secciones, las muestro en acordeones
                      <div className="guardiaModal__accordions" aria-label="Secciones">
                        {sections.map((sec, i) => { // Recorro las secciones para crear los acordeones
                          const isOpen = openSec === i; // Verifico si la sección está abierta
                          const panelId = `guardia-sec-${selectedItem.id}-${i}`; // ID único para el panel de la sección
                          return (
                            <section
                              key={panelId}
                              className={`guardiaModal__accordionItem${isOpen ? " is-open" : ""}`}
                            >
                              <button
                                type="button"
                                className="guardiaModal__accordionButton"
                                onClick={() => toggleSec(i)} // Evento para abrir/cerrar la sección
                                aria-expanded={isOpen}
                                aria-controls={panelId}
                              >
                                <span className="guardiaModal__accordionTitle">
                                  {sec.titulo || `Sección ${i + 1}`} 
                                </span>
                                <span className="guardiaModal__accordionIcon" aria-hidden="true">
                                  <i className="bi bi-chevron-down" />
                                </span>
                              </button>

                              <div id={panelId} className="guardiaModal__accordionPanel">
                                <div className="guardiaModal__accordionPanelInner">
                                  <div className="guardiaModal__accordionBody">{sec.texto}</div>
                                </div>
                              </div>
                            </section>
                          );
                        })}
                      </div>
                    )}
                  </article>
                )}
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </section>
  );
}
