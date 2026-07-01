import React from "react";
import "../css/directoresMedicos.css";
import DIRECTORES_MEDICOS from "./data/DirectoresMedicos.js";

function DirectoresMedicos() {
  return (
    <>
      <section className="directoresMedicos">

      <div className="guardia__info">
        <h3 className="directores__horarios-titulo">Directores médicos</h3>
      </div>

      <div className="directoresMedicos__cards">
        {DIRECTORES_MEDICOS.map((director) => (
          <article className="card" key={director.id}>
            <div className="card-image">
              <img src={director.imagen} alt={director.nombre} fetchPriority="high" decoding="async" />
            </div>

            <div className="card-content">
              <h3 className="card-name">{director.nombre}</h3>
              <div className="card-description">
                <p>{director.descripcion}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
    </>
  );
}

export default DirectoresMedicos;
