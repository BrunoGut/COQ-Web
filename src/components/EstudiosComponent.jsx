import { useEffect, useMemo, useState } from "react";
import ESTUDIOS_ARRAY from "./data/EstudiosArray";
import flechaImg from "../images/patologias/flecha.png";
import "../css/tratamientos.css";
import "../css/estudiosComponent.css";

const estudiosOrdenados = [...ESTUDIOS_ARRAY].sort((a, b) =>
  (a.titulo ?? "").localeCompare(b.titulo ?? "", "es", { sensitivity: "base" })
);

const MOBILE_BREAKPOINT = 992;

export default function Estudios() {
  const [estudioSeleccionadoId, setEstudioSeleccionadoId] = useState(
    () => estudiosOrdenados[0]?.id ?? null
  );

  const [isSidebarOpen, setIsSidebarOpen] = useState(
    window.innerWidth >= MOBILE_BREAKPOINT
  );

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= MOBILE_BREAKPOINT) {
        setIsSidebarOpen(true);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const estudioSeleccionado = useMemo(
    () => ESTUDIOS_ARRAY.find((e) => e.id === estudioSeleccionadoId) ?? null,
    [estudioSeleccionadoId]
  );

  return (
    <>
      <section className="tratamientos__banner" aria-label="Estudios">
        <div className="tratamientos__banner-contenido">
          <h2 className="tratamientos__banner-titulo">Estudios</h2>
          <h4 className="tratamientos__banner-subtitulo">Diagnóstico de precisión para cada paciente</h4>
        </div>
      </section>

      <section className="tratamientos" id="estudios" aria-label="Estudios">
        <div className="tratamientos__inner">
          <div
            className="tratamientos__layout"
            aria-label="Listado y detalle de estudios"
          >
            <aside
              className={`tratamientos__sidebar${isSidebarOpen ? " is-open" : ""}`}
              aria-label="Lista de estudios"
            >
              <button
                type="button"
                className="tratamientos__sidebarToggle"
                onClick={() => setIsSidebarOpen((prev) => !prev)}
                aria-expanded={isSidebarOpen}
                aria-controls="estudiosList"
              >
                <span className="tratamientos__sidebarToggleText">
                  {estudioSeleccionado?.titulo ?? "Estudios"}
                </span>
                <span className="tratamientos__sidebarToggleIcon" aria-hidden="true">
                  <i className="bi bi-chevron-down" />
                </span>
              </button>

              <div id="estudiosList" className="tratamientos__sidebarContent">
                <ul className="tratamientos__list" role="list">
                  {estudiosOrdenados.map((estudio) => {
                    const isActive = estudio.id === estudioSeleccionadoId;
                    return (
                      <li key={estudio.id} className="tratamientos__listItem" role="listitem">
                        <button
                          type="button"
                          className={`tratamientos__listButton${isActive ? " is-active" : ""}`}
                          onClick={() => {
                            setEstudioSeleccionadoId(estudio.id);
                            if (window.innerWidth < MOBILE_BREAKPOINT) {
                              setIsSidebarOpen(false);
                            }
                          }}
                          aria-pressed={isActive}
                        >
                          <span className="tratamientos__listLabel">{estudio.titulo}</span>
                          <span className="tratamientos__listArrow" aria-hidden="true">
                            <img
                              className="tratamientos__listArrowImg"
                              src={flechaImg}
                              alt=""
                            />
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>

            <div className="tratamientos__content" aria-label="Detalle del estudio">
              {estudioSeleccionado ? (
                <article
                  key={estudioSeleccionado.id}
                  className="tratamientos__detail tratamientos__detail--animated"
                  aria-label={`Detalle de ${estudioSeleccionado.titulo}`}
                >
                  <div className="tratamientos__detailTop">
                    <header className="tratamientos__detailHeader">
                      <h3 className="tratamientos__detailTitle">
                        {estudioSeleccionado.titulo}
                      </h3>
                      <div className="tratamientos__detailDivider" aria-hidden="true" />
                      <div className="tratamientos__detailText">
                        {estudioSeleccionado.descripcion || "Descripción no disponible."}
                      </div>
                    </header>
                  </div>
                </article>
              ) : (
                <div className="tratamientos__placeholder" aria-live="polite">
                  <p className="tratamientos__placeholderEyebrow">Estudios</p>
                  <h3 className="tratamientos__placeholderTitle">Seleccioná un estudio</h3>
                  <p className="tratamientos__placeholderText">
                    Elegí una opción del listado para ver la descripción del estudio.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
