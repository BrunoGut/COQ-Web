import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import "../css/esteticaComponent.css";
import esteticaImg from "../images/estetica/estetica1.jpg";
import ESTETICA from "./data/EsteticaArray";
import BannerComponent from "./BannerComponent";

function EsteticaComponent() {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(ESTETICA[0].id);
  //const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);

  // Filtrado simple
  const esteticaFiltrados = ESTETICA.filter(item =>
    item.titulo.toLowerCase().includes(search.toLowerCase())
  );

  // Item seleccionado
  const selectedItem = ESTETICA.find(item => item.id === selectedId);

useEffect(() => {
  const hasText = search.trim().length > 0;
  const hasResults = esteticaFiltrados.length > 0;

  // Si no hay coincidencias, cerrar SIEMPRE (desktop y mobile)
  if (!hasResults) {
    setIsSidebarOpen(false);
    return;
  }

  // Si hay texto (y hay resultados), abrir
  if (hasText) {
    setIsSidebarOpen(true);
    return;
  }

  // Si no hay texto, en desktop lo dejamos abierto (vista normal)
  if (window.innerWidth > 768) {
    setIsSidebarOpen(true);
  } else {
    setIsSidebarOpen(false);
  }
}, [search, esteticaFiltrados]);

  return (
    <section className="estetica">
      <div className="estetica__inner">
        <SectionHeading title="ESTÉTICA" />
      </div>

      <BannerComponent
        className="estetica__banner"
        title="Información sobre nuestros procedimientos estéticos"
        urlImg={esteticaImg}
        ariaLabel="Estetica"
      />

      <div className="estetica__inner">
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
