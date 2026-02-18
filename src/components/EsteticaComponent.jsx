import { useDeferredValue, useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import "../css/esteticaComponent.css";
import esteticaImg from "../images/estetica/estetica1.jpg";
import ESTETICA from "./data/EsteticaArray";
import BannerComponent from "./BannerComponent";

const normalize = (value) => value.trim().toLowerCase();

function EsteticaComponent() {
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search);
  const [query, setQuery] = useState("");
  const [isFading, setIsFading] = useState(false);
  const [selectedId, setSelectedId] = useState(ESTETICA[0].id);
  //const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const nextQuery = normalize(deferredSearch);
    if (nextQuery === query) return;

    setIsFading(true);
    const timeoutId = setTimeout(() => {
      setQuery(nextQuery);
      setIsFading(false);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [deferredSearch, query]);

  const esteticaFiltrados = query
    ? ESTETICA.filter((item) => normalize(item.titulo ?? "").includes(query))
    : ESTETICA;

  const trimmedSearch = search.trim();
  const hasResults = esteticaFiltrados.length > 0;
  const MAX_SEARCH_CHARS = 15;
  const searchPreview =
    trimmedSearch.length > MAX_SEARCH_CHARS
      ? `${trimmedSearch.slice(0, MAX_SEARCH_CHARS)}…`
      : trimmedSearch;

  // Item seleccionado
  const selectedItem = ESTETICA.find(item => item.id === selectedId);

useEffect(() => {
  const hasText = trimmedSearch.length > 0;

  // Si no hay coincidencias, mantener visible el sidebar para mostrar el mensaje
  if (!hasResults) {
    setIsSidebarOpen(true);
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
}, [trimmedSearch, hasResults]);

  return (
    <section className="estetica">
        <BannerComponent
        className="estetica__banner"
        title="Información sobre nuestros procedimientos estéticos"
        urlImg={esteticaImg}
        ariaLabel="Estetica"
      >
        <a
          href="https://wa.me/541138721437"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="boton-cirugia" type="button">
            <i className="bi bi-calendar-check-fill" aria-hidden="true" />
            <span>SOLICITA TU TURNO</span>
          </button>
        </a>
      </BannerComponent>

      <div className="estetica__inner">
        <SectionHeading title="ESTÉTICA" />
      </div>

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

          <div className={`estetica__layout${isFading ? " estetica__layout--fading" : ""}`}>
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
                {hasResults ? (
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
                ) : (
                  trimmedSearch.length > 0 && (
                    <p className="estetica__empty">
                      No hay coincidencias para “{searchPreview}”.
                    </p>
                  )
                )}
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
