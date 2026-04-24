import React, { useDeferredValue, useEffect, useState } from "react";
import CIRUGIAS from "./data/CirugiasArray";
import "../css/cirugiasComponent.css";

const normalize = (value) => value.trim().toLowerCase(); // Normaliza el texto para búsquedas

function CirugiasComponent() {
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search); //retarda el valor de búsqueda para optimizar el rendimiento
  const [query, setQuery] = useState("");
  const [isFading, setIsFading] = useState(false);

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

  const cirugiasFiltradas = query
    ? CIRUGIAS.filter((item) => item.title.toLowerCase().includes(query))
    : CIRUGIAS;

  return (
    <>
      <section className="cirugias__banner" aria-label="Cirugias">
        <div className="cirugias__banner-contenido">
          <h2 className="cirugias__banner-titulo">Cirugías</h2>
          <h4 className="cirugias__banner-subtitulo">
            Contamos con un quirófano equipado para realizar cirugías
            oftalmológicas de alta complejidad
          </h4>
        </div>
      </section>

      <section className="cirugias" id="cirugias-medicas">
        <div className="cirugias__search" role="search">
          <span className="cirugias__searchIcon" aria-hidden="true">
            Q
          </span>
          <input
            type="text"
            className="cirugias__searchInput"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar en el listado"
            aria-label="Buscar cirugías"
          />
        </div>

        <ul
          className={`cirugias__grid${isFading ? " cirugias__grid--fading" : ""}`}
        >
          {cirugiasFiltradas.map((item) => (
            <li
              className="cirugias__item"
              key={item.id}
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
            >
              <h3 className="cirugias__itemTitle">{item.title}</h3>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default CirugiasComponent;
