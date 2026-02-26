import React from "react";
import SectionHeading from "./SectionHeading.jsx";
import "../css/directoresMedicos.css";
import DIRECTORES_MEDICOS from "./data/DirectoresMedicos.jsx";

function DirectoresMedicos() {
  return (
    <section className="directoresMedicos">
      <div className="directoresMedicos__inner">
        <SectionHeading title="DIRECTORES MÉDICOS" />
      </div>

      <div className="directoresMedicos__cards">
        {DIRECTORES_MEDICOS.map((director) => (
          <article className="card" key={director.id}>
            <div className="card-header"></div>

            <div className="card-image">
              <img src={director.imagen} alt={`${director.nombre}`} fetchPriority="high" decoding="async" />
            </div>

            <div className="card-content">
              <h3 className="card-name">{`${director.nombre}`}</h3>
              <div className="card-description">
                <p>{director.descripcion}</p>
              </div>
              <div className="card-button">
                <a href={director.linkedin} target="_blank" rel="noreferrer">
                  <i className="bi bi-linkedin" aria-hidden="true" />
                  <span>Linkedin</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default DirectoresMedicos;
