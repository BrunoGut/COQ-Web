import "../css/tratamientos.css";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PATOLOGIAS from "./data/PatologiasArray";
import flechaImg from "../images/patologias/flecha.png";

const SECCIONES_SIMPLES = [
  { key: "causa", titulo: "Causas" },
  { key: "sintomas", titulo: "Síntomas" },
  { key: "tratamiento", titulo: "Tratamiento" },
];

export default function Tratamientos() {
  const [searchParams] = useSearchParams();

  const MOBILE_BREAKPOINT = 992;

  const patologiasOrdenadas = useMemo(() => {
    return [...PATOLOGIAS].sort((a, b) =>
      (a.label ?? "").localeCompare(b.label ?? "", "es", {
        sensitivity: "base",
      }),
    );
  }, []);

  const [patologiaSeleccionadaId, setPatologiaSeleccionadaId] = useState(
    () => [...PATOLOGIAS].sort((a, b) =>
      (a.label ?? "").localeCompare(b.label ?? "", "es", {
        sensitivity: "base",
      }),
    )[0]?.id ?? null,
  );

  const [isSidebarOpen, setIsSidebarOpen] = useState(
    window.innerWidth >= MOBILE_BREAKPOINT,
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

  useEffect(() => {
    const raw = searchParams.get("patologia");
    if (!raw) return;

    const parsed = Number.parseInt(raw, 10);
    if (!Number.isFinite(parsed)) return;

    const exists = PATOLOGIAS.some((p) => p.id === parsed);
    if (!exists) return;

    setPatologiaSeleccionadaId(parsed);
  }, [searchParams]);

  const patologiaSeleccionada = useMemo(() => {
    return (
      PATOLOGIAS.find(
        (patologia) => patologia.id === patologiaSeleccionadaId,
      ) ?? null
    );
  }, [patologiaSeleccionadaId]);

  const seccionesSeleccionadas = useMemo(() => {
    if (!patologiaSeleccionada) return [];

    const sectionKeys = Object.keys(patologiaSeleccionada)
      .filter(
        (key) =>
          key.startsWith("seccion") &&
          Array.isArray(patologiaSeleccionada[key]),
      )
      .sort((a, b) => {
        const aNum = Number(a.replace(/\D+/g, "")) || 0;
        const bNum = Number(b.replace(/\D+/g, "")) || 0;
        return aNum - bNum;
      });

    if (sectionKeys.length > 0) {
      return sectionKeys
        .flatMap((key) => patologiaSeleccionada[key])
        .filter(
          (sec) =>
            sec &&
            (sec.titulo ||
              sec.texto ||
              sec.imagen ||
              sec.imageSrc ||
              sec.imagenSrc ||
              sec.image),
        );
    }

    return SECCIONES_SIMPLES.map(({ key, titulo }) => {
      const contenido = patologiaSeleccionada[key];

      if (!contenido) return null;

      return {
        titulo,
        texto: contenido,
      };
    }).filter(Boolean);
  }, [patologiaSeleccionada]);

  const renderTextoSeccion = (texto) => {
    if (!texto) return null;
    if (typeof texto === "string") {
      return <p className="tratamientos__sectionText">{texto}</p>;
    }
    if (Array.isArray(texto)) {
      return texto.map((item, index) => (
        <p key={index} className="tratamientos__sectionText">
          {item}
        </p>
      ));
    }
    return <div className="tratamientos__sectionRich">{texto}</div>;
  };

  const renderImagenSeccion = (seccion) => {
    const rawImagen =
      seccion?.imagen ??
      seccion?.imageSrc ??
      seccion?.imagenSrc ??
      seccion?.image;

    const normalized = (() => {
      if (!rawImagen) return null;

      if (typeof rawImagen === "string") {
        return { src: rawImagen, alt: seccion?.titulo ?? "" };
      }

      if (typeof rawImagen === "object") {
        if (typeof rawImagen.src === "string") {
          return {
            src: rawImagen.src,
            alt: rawImagen.alt ?? seccion?.titulo ?? "",
          };
        }
      }

      return null;
    })();

    if (!normalized?.src) return null;

    return (
      <div className="tratamientos__sectionImageWrap">
        <img
          className="tratamientos__sectionImage"
          src={normalized.src}
          alt={normalized.alt ?? ""}
          //loading="lazy" decoding="async"
        />
      </div>
    );
  };

  return (
    <>
      <section className="tratamientos__banner" aria-label="Tratamientos">
        <div className="tratamientos__banner-contenido">
          <h2 className="tratamientos__banner-titulo">Especialidades</h2>
          <h4 className="tratamientos__banner-subtitulo">Abordaje integral para cada patología</h4>
        </div>
      </section>
      <section
        className="tratamientos"
        id="que-tratamos"
        aria-label="Tratamientos"
      >
        <div className="tratamientos__inner">
          <div
            className="tratamientos__layout"
            aria-label="Listado y detalle de tratamientos"
          >
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
                <span className="tratamientos__sidebarToggleText">
                  {patologiaSeleccionada?.label ?? "Especialidades"}
                </span>
                <span
                  className="tratamientos__sidebarToggleIcon"
                  aria-hidden="true"
                >
                  <i className="bi bi-chevron-down" />
                </span>
              </button>

              <div
                id="tratamientosList"
                className="tratamientos__sidebarContent"
              >
                <ul className="tratamientos__list" role="list">
                  {patologiasOrdenadas.map((patologia) => {
                    const isActive = patologia.id === patologiaSeleccionadaId;

                    return (
                      <li
                        key={patologia.id}
                        className="tratamientos__listItem"
                        role="listitem"
                      >
                        <button
                          type="button"
                          className={`tratamientos__listButton${isActive ? " is-active" : ""}`}
                          onClick={() => {
                            setPatologiaSeleccionadaId(patologia.id);

                            if (window.innerWidth < MOBILE_BREAKPOINT) {
                              setIsSidebarOpen(false);
                            }
                          }}
                          aria-pressed={isActive}
                        >
                          <span className="tratamientos__listLabel">
                            {patologia.label}
                          </span>
                          <span
                            className="tratamientos__listArrow"
                            aria-hidden="true"
                          >
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

            <div
              className="tratamientos__content"
              aria-label="Detalle del tratamiento"
            >
              {patologiaSeleccionada ? (
                <article
                  key={patologiaSeleccionada.id}
                  className="tratamientos__detail tratamientos__detail--animated"
                  aria-label={`Detalle de ${patologiaSeleccionada.titulo}`}
                >
                  <div className="tratamientos__detailTop">
                    <header className="tratamientos__detailHeader">
                      <h3 className="tratamientos__detailTitle">
                        {patologiaSeleccionada.titulo}
                      </h3>
                      <div className="tratamientos__detailDivider" aria-hidden="true" />
                      <div className="tratamientos__detailText">
                        {patologiaSeleccionada.descripcion ||
                          "Descripción no disponible."}
                      </div>
                    </header>
                  </div>

                  <div
                    className="tratamientos__sections"
                    aria-label="Secciones del tratamiento"
                  >
                    {seccionesSeleccionadas.length === 0 ? (
                      <p className="tratamientos__empty">
                        Próximamente: información detallada.
                      </p>
                    ) : (
                      seccionesSeleccionadas.map((seccion, index) => (
                        <section
                          key={`${patologiaSeleccionada.id}-sec-${index}`}
                          className="tratamientos__sectionBlock"
                        >
                          <h4 className="tratamientos__sectionTitle">
                            {seccion.titulo || `Sección ${index + 1}`}
                          </h4>
                          <div className="tratamientos__sectionContent">
                            {renderTextoSeccion(seccion.texto)}
                            {renderImagenSeccion(seccion)}
                          </div>
                        </section>
                      ))
                    )}
                  </div>
                </article>
              ) : (
                <div className="tratamientos__placeholder" aria-live="polite">
                  <p className="tratamientos__placeholderEyebrow">
                    Especialidades
                  </p>
                  <h3 className="tratamientos__placeholderTitle">
                    Seleccioná una patología
                  </h3>
                  <p className="tratamientos__placeholderText">
                    Elegí una opción del listado para ver el detalle, los
                    síntomas y los tratamientos disponibles.
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
