import React from "react";
import { Link } from "react-router-dom";
import "../css/servicios.css";
import flechaImg from "../images/servicios/flecha.png";

const SERVICIOS_ITEMS = [
  { label: "Guardia", href: "/guardia" },
  { label: "Estética", href: "/estetica" },
  { label: "Estudios", href: "/estudios" },
  { label: "Oftalmopediatría", href: "/oftalmopediatria" },
  { label: "Cirugías", href: "/cirugias" },
  { label: "Especialidades", href: "/servicios" },
];

export default function Servicios() {
  return (
    <section className="servicios" id="servicios" aria-label="Servicios">
      <div className="servicios__container">
        <h2 className="servicios__titulo">Nuestros servicios</h2>
        <div className="servicios__grid">
          {SERVICIOS_ITEMS.map((item) => (
            <Link
              key={item.href}
              className="servicios__item"
              to={item.href}
              aria-label={item.label}
            >
              <span className="servicios__label">{item.label}</span>
              <span className="servicios__arrow" aria-hidden="true">
                <img className="servicios__arrowImg" src={flechaImg} alt="" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
