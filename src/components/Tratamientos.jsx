import '../css/tratamientos.css';
import SectionHeading from './SectionHeading';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PATOLOGIAS from './data/PatologiasArray';

export default function Tratamientos() {
  const [searchParams] = useSearchParams();

  const MOBILE_BREAKPOINT = 992;

  const [patologiaSeleccionadaId, setPatologiaSeleccionadaId] = useState(
    PATOLOGIAS[0]?.id ?? null
  );

  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= MOBILE_BREAKPOINT);

  const [seccionAbiertaIndex, setSeccionAbiertaIndex] = useState(-1);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= MOBILE_BREAKPOINT) {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const raw = searchParams.get('patologia');
    if (!raw) return;

    const parsed = Number.parseInt(raw, 10);
    if (!Number.isFinite(parsed)) return;

    const exists = PATOLOGIAS.some((p) => p.id === parsed);
    if (!exists) return;

    setPatologiaSeleccionadaId(parsed);
    setSeccionAbiertaIndex(-1);
  }, [searchParams]);

  const patologiaSeleccionada = useMemo(() => {
    return (
      PATOLOGIAS.find((patologia) => patologia.id === patologiaSeleccionadaId) ??
      PATOLOGIAS[0]
    );
  }, [patologiaSeleccionadaId]);

  const seccionesSeleccionadas = useMemo(() => {
    if (!patologiaSeleccionada) return [];

    const sectionKeys = Object.keys(patologiaSeleccionada)
      .filter((key) => key.startsWith("seccion") && Array.isArray(patologiaSeleccionada[key]))
      .sort((a, b) => {
        const aNum = Number(a.replace(/\D+/g, "")) || 0;
        const bNum = Number(b.replace(/\D+/g, "")) || 0;
        return aNum - bNum;
      });

    return sectionKeys
      .flatMap((key) => patologiaSeleccionada[key])
      .filter((sec) => sec && (sec.titulo || sec.texto || sec.imagen));
  }, [patologiaSeleccionada]);

  const toggleSeccion = (index) => {
    setSeccionAbiertaIndex((prev) => (prev === index ? -1 : index));
  };

  const renderTextoSeccion = (texto) => {
    if (!texto) return null;
    if (typeof texto === "string") {
      return <p className="tratamientos__sectionText">{texto}</p>;
    }
    if (Array.isArray(texto)) {
      return texto.map((item, index) => (
        <p key={index} className="tratamientos__sectionText">{item}</p>
      ));
    }
    return <div className="tratamientos__sectionRich">{texto}</div>;
  };

  const renderImagenSeccion = (seccion) => {
    const imagen = seccion?.imagen;
    if (!imagen?.src) return null;

    return (
      <div className="tratamientos__sectionImageWrap">
        <img className="tratamientos__sectionImage" src={imagen.src} alt={imagen.alt ?? ""} loading="lazy" />
      </div>
    );
  };

  return(
    <section className="tratamientos" id="que-tratamos" aria-label="Tratamientos">
      <div className="tratamientos__inner">
        <SectionHeading className="tratamientos__heading" title="TRATAMIENTOS" />

        <div className="tratamientos__layout" aria-label="Listado y detalle de tratamientos">
          <aside
            className={`tratamientos__sidebar${isSidebarOpen ? " is-open" : ""}`}
            aria-label="Lista de tratamientos"
          >
            <button
              type="button"
              className="tratamientos__sidebarToggle"
              onClick={() => setIsSidebarOpen((prev) => !prev)}
              aria-expanded={isSidebarOpen}
              aria-controls="tratamientosList"
            >
              <span className="tratamientos__sidebarToggleText">Lista de tratamientos</span>
              <span className="tratamientos__sidebarToggleIcon" aria-hidden="true">
                <i className="bi bi-chevron-down" />
              </span>
            </button>

            <div id="tratamientosList" className="tratamientos__sidebarContent">
              <ul className="tratamientos__list" role="list">
                {PATOLOGIAS.map((patologia) => {
                  const isActive = patologia.id === patologiaSeleccionadaId;

                  return (
                    <li key={patologia.id} className="tratamientos__listItem" role="listitem">
                      <button
                        type="button"
                        className={`tratamientos__listButton${isActive ? " is-active" : ""}`}
                        onClick={() => {
                          setPatologiaSeleccionadaId(patologia.id);
                          setSeccionAbiertaIndex(-1);

                          if (window.innerWidth < MOBILE_BREAKPOINT) {
                            setIsSidebarOpen(false);
                          }
                        }}
                        aria-pressed={isActive}
                      >
                        <span className="tratamientos__thumb" aria-hidden="true">
                          <img
                            className="tratamientos__thumbImg"
                            src={patologia.imageSrc}
                            alt=""
                            loading="lazy"
                          />
                        </span>
                        <span className="tratamientos__listLabel">{patologia.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

          <div className="tratamientos__content" aria-label="Detalle del tratamiento">
            {patologiaSeleccionada && (
              <article
                key={patologiaSeleccionada.id}
                className="tratamientos__detail tratamientos__detail--animated"
                aria-label={`Detalle de ${patologiaSeleccionada.titulo}`}
              >
                <div className="tratamientos__detailTop">
                  <div className="tratamientos__detailMedia" aria-hidden="true">
                    <img
                      className="tratamientos__detailImage"
                      src={patologiaSeleccionada.imageSrc}
                      alt=""
                      loading="lazy"
                    />
                  </div>

                  <header className="tratamientos__detailHeader">
                    <h3 className="tratamientos__detailTitle">{patologiaSeleccionada.titulo}</h3>
                    <div className="tratamientos__detailText">
                      {patologiaSeleccionada.descripcion || "Descripción no disponible."}
                    </div>
                  </header>
                </div>

                <div className="tratamientos__accordions" aria-label="Secciones del tratamiento">
                  {seccionesSeleccionadas.length === 0 ? (
                    <p className="tratamientos__empty">
                      Próximamente: información detallada.
                    </p>
                  ) : (
                    seccionesSeleccionadas.map((seccion, index) => (
                      <section
                        key={`${patologiaSeleccionada.id}-sec-${index}`}
                        className={`tratamientos__accordionItem${seccionAbiertaIndex === index ? " is-open" : ""}`}
                      >
                        <button
                          type="button"
                          className="tratamientos__accordionButton"
                          onClick={() => toggleSeccion(index)}
                          aria-expanded={seccionAbiertaIndex === index}
                          aria-controls={`tratamientos-sec-${patologiaSeleccionada.id}-${index}`}
                        >
                          <span className="tratamientos__accordionTitle">
                            {seccion.titulo || `Sección ${index + 1}`}
                          </span>
                          <span className="tratamientos__accordionIcon" aria-hidden="true">
                            <i className="bi bi-chevron-down" />
                          </span>
                        </button>

                        <div
                          id={`tratamientos-sec-${patologiaSeleccionada.id}-${index}`}
                          className="tratamientos__accordionPanel"
                        >
                          <div className="tratamientos__accordionPanelInner">
                            <div className="tratamientos__accordionBody">
                              {renderTextoSeccion(seccion.texto)}
                              {renderImagenSeccion(seccion)}
                            </div>
                          </div>
                        </div>
                      </section>
                    ))
                  )}
                </div>
              </article>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}