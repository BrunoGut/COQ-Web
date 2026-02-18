import React, { useEffect, useState, useDeferredValue } from "react";
import COBERTURAS from "./data/CoberturasArray";
import "../css/coberturasComponent.css";
import SectionHeading from "./SectionHeading";
import BannerComponent from "./BannerComponent";
import coberturasBannerImg from "../images/coberturas.jpg";
const normalize = (value) => value.trim().toLowerCase(); // Normaliza el texto para búsquedas

function CoberturasComponent() {
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search); //retarda el valor de búsqueda para optimizar el rendimiento
  const [query, setQuery] = useState("");
  const [isFading, setIsFading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCobertura, setSelectedCobertura] = useState(null);

  const openModal = (cobertura) => {
    selectedCobertura(cobertura);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCobertura(null);
  };

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

  const coberturasFiltradas = query
    ? COBERTURAS.filter((item) => item.title.toLowerCase().includes(query))
    : COBERTURAS;

  const handleItemKeyDown = (event, item) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal(item);
    }
  };

  return (
    <section className="coberturas" id="cobertura-medica">
      <BannerComponent
        className="coberturas__banner"
        title="Busca todas las coberturas con las que trabajamos"
        urlImg={coberturasBannerImg}
        ariaLabel="Coberturas"
      />
      
      <div className="coberturas__inner">
        <SectionHeading title="Coberturas" />
      </div>

      <div className="coberturas__search" role="search">
        <span className="coberturas__searchIcon" aria-hidden="true">
          Q
        </span>
        <input
          type="text"
          className="coberturas__searchInput"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar en el listado"
          aria-label="Buscar coberturas"
        />
      </div>

      <ul
        className={`coberturas__grid${isFading ? " coberturas__grid--fading" : ""}`}
      >
        {coberturasFiltradas.map((item) => (
          <li
            className="coberturas__item"
            key={item.id}
            role="button"
            tabIndex={0}
            aria-haspopup="dialog"
            onClick={() => openModal(item)}
            onKeyDown={(event) => handleItemKeyDown(event, item)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CoberturasComponent;
