import { useState } from "react";
import SectionHeading from "./SectionHeading";
import "../css/esteticaComponent.css";
import esteticaImg from "../images/ojo-estetica.jpeg";
import ESTETICA from "./data/EsteticaArray";

function EsteticaComponent() {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(ESTETICA[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Filtrado simple
  const esteticaFiltrados = ESTETICA.filter(item =>
    item.titulo.toLowerCase().includes(search.toLowerCase())
  );

  // Item seleccionado
  const selectedItem = ESTETICA.find(item => item.id === selectedId);

  return (
    <section className="estetica">
      <div className="estetica__inner">
        <SectionHeading title="ESTÉTICA" />

        <div className="info__img__estetica">
          <div className="info__title__estetica">
            <h2>
              INFORMACION SOBRE ESTÉTICA <br /> PARA EL PACIENTE
            </h2>
          </div>
          <img src={esteticaImg} alt="Estética" />
        </div>

        <div className="estetica__content">
          {/* BUSCADOR */}
          <div className="estetica__search">
            <span className="estetica__searchIcon">Q</span>
            <input
              className="estetica__searchInput"
              type="text"
              placeholder="Buscar en el listado"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="estetica__layout">
            {/* LISTA */}
            <aside className={`estetica__sidebar${isSidebarOpen ? " is-open" : ""}`}>
              <button
                type="button"
                className="estetica__sidebarToggle"
                onClick={() => setIsSidebarOpen((prev) => !prev)}
                aria-expanded={isSidebarOpen}
                aria-controls="esteticaList"
              >
                <span className="estetica__sidebarToggleText">Lista de procedimientos</span>
                <span className="estetica__sidebarToggleIcon" aria-hidden="true">
                  <i className="bi bi-chevron-down" />
                </span>
              </button>

              <div id="esteticaList" className="estetica__sidebarContent">
                <ul className="estetica__list">
                  {esteticaFiltrados.map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        className={
                          item.id === selectedId
                            ? "estetica__listButton is-active"
                            : "estetica__listButton"
                        }
                        onClick={() => {
                          setSelectedId(item.id);
                          setIsSidebarOpen(false);
                        }}
                        aria-pressed={item.id === selectedId}
                      >
                        {item.titulo}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* DETALLE */}
            <div className="estetica__detail">
              {selectedItem && (
                <div
                  key={selectedItem.id}
                  className="estetica__detailInner estetica__detailInner--animated"
                >
                  <h3 className="estetica__detailTitle">{selectedItem.titulo}</h3>
                  <div className="estetica__detailText">{selectedItem.descripcion}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EsteticaComponent;
