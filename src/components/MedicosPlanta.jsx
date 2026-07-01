import React from "react";
import SectionHeading from "./SectionHeading";
import "../css/medicosPlanta.css";
import MEDICOS_PLANTA from "./data/MedicosPlantaData.js";

function MedicosPlanta() {
  return (
    <section className="planta">
      <div className="guardia__info">
        <h3 className="directores__horarios-titulo">Profesionales</h3>
      </div>

      <ul className="planta__ul">
        {MEDICOS_PLANTA.map((medico) => (
          <li key={medico.id} className="planta__item">
            <h3 className="planta__nombre">{medico.nombre}</h3>
            <p className="planta__especialidad">{medico.especialidad}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MedicosPlanta;
