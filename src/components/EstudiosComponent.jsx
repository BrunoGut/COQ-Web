import { useState } from "react";
import ESTUDIOS_ARRAY from "./data/EstudiosArray";
import SectionHeading from "./SectionHeading";
import Modal from "./Modal";
import "../css/estudiosComponent.css";
import "../css/patologias.css";
import BannerComponent from "./BannerComponent";
import estudiosBannerImg from "../images/estudios/estudios-banner.jpg";

export default function Estudios() {
    const firstId = ESTUDIOS_ARRAY[0]?.id ?? null;

    const [selectedId, setSelectedId] = useState(firstId);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const selectedItem = ESTUDIOS_ARRAY.find((x) => x.id === selectedId) ?? null; //buscar el item seleccionado

    const selectItem = (id) => {
        setSelectedId(id);
        setIsSidebarOpen(false); //cerrar sidebar al seleccionar un item
    };

    const openModal = (id) => {
        if (id != null) {
            setSelectedId(id);
        } else if (selectedId == null && firstId != null) {
            setSelectedId(firstId);
        }
        setIsModalOpen(true);
        setIsSidebarOpen(false);
    };

    return (
        <section className="estudios" aria-label="Estudios">
            <div className="estudios__inner">
                <SectionHeading title="Estudios" />
            </div>

            <BannerComponent
                className="estudios__banner"
                title="Nuestros estudios"
                urlImg={estudiosBannerImg}
                ariaLabel="Estudios"
            />

            <div className="estudios__inner">
                <div className="card-wrapper estudios__grid" role="list" aria-label="Lista de estudios">
                    {ESTUDIOS_ARRAY.map((item) => (
                        <article key={item.id} className="card" role="listitem">
                            <div className="card-header" aria-hidden="true" />

                            <div className="card-image-estudios">
                                <img
                                    src={item.imagen}
                                    alt={item.title || "Imagen del estudio"}
                                    className="card-img-estudios"
                                />
                            </div>

                            <div className="card-content">
                                <h3 className="card-name">{item.title}</h3>
                                <div className="card-description">
                                    {item.descripcion || "Descripción no disponible."}
                                </div>
                                <button
                                    type="button"
                                    className="card-button"
                                    onClick={() => openModal(item.id)}
                                    aria-label={`Ver más sobre ${item.title}`}
                                >
                                    Ver más
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

                <Modal
                    isOpen={isModalOpen}
                    closeModal={() => setIsModalOpen(false)}
                    containerClassName="container__modal--wide"
                >
                    <div className="guardiaModal__layout" aria-label="Detalle de estudios">
                        <aside
                            className={`guardiaModal__sidebar${isSidebarOpen ? " is-open" : ""}`}
                            aria-label="Lista de estudios"
                        >
                            <button
                                type="button"
                                className="guardiaModal__sidebarToggle"
                                onClick={() => setIsSidebarOpen((prev) => !prev)}
                                aria-expanded={isSidebarOpen}
                                aria-controls="estudiosModalList"
                            >
                                <span className="guardiaModal__sidebarToggleText">Lista de estudios</span>
                                <span className="guardiaModal__sidebarToggleIcon" aria-hidden="true">
                                    <i className="bi bi-chevron-down" />
                                </span>
                            </button>

                            <div id="estudiosModalList" className="guardiaModal__sidebarContent">
                                <ul className="guardiaModal__list" role="list">
                                    {ESTUDIOS_ARRAY.map((item) => {
                                        const active = item.id === selectedId;
                                        return (
                                            <li key={item.id} className="guardiaModal__listItem">
                                                <button
                                                    type="button"
                                                    className={`guardiaModal__listButton${active ? " is-active" : ""}`}
                                                    onClick={() => selectItem(item.id)}
                                                    aria-pressed={active}
                                                >
                                                    <span className="guardiaModal__listLabel">{item.title}</span>
                                                </button>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </aside>

                        <div aria-label="Contenido">
                            {!selectedItem ? (
                                <p>No hay información para mostrar.</p>
                            ) : (
                                <article className="guardiaModal__detail">
                                    <header className="guardiaModal__detailHeader">
                                        <h3 className="guardiaModal__detailTitle">{selectedItem.title}</h3>
                                        <div className="guardiaModal__detailText">{selectedItem.descripcion}</div>
                                    </header>
                                </article>
                            )}
                        </div>
                    </div>
                </Modal>
        </section>
    )
}