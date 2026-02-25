import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import BannerComponent from "./BannerComponent";
import oftalmoImg1 from "../images/oftalmo/oftalmo1.jpg";
import oftalmoImg2 from "../images/oftalmo/oftalmo2.jpg";
import "../css/oftalmoComponent.css";
import OFTALMO from "./data/OftalmoData";

function OftalmoComponent() {
  const firstId = OFTALMO[-1]?.id ?? null;
  const [openId, setOpenId] = useState(firstId);

  const toggleItem = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="oftalmo">
      <div className="oftalmo__inner">
        <SectionHeading title="OFTALMOPEDIATRÍA" />
      </div>

      <div className="info__img">
        <div className="info__text__oftalmo">
          <p>
            Los primeros años de la vida son <strong>fundamentales</strong> para el desarrollo de
            la visión. <br />
            Es por esto que el <strong>cuidado oftalmológico de los niños</strong> es tan
            importante. <br />
          </p>
          <p>
            El ojo en el niño es inmaduro y está en <strong>constante crecimiento</strong> hasta
            los 7 u 8 años. <br />
            La visión en la primera infancia es menor y alcanza una agudeza
            visual de 10/10 hacia los <strong>5 años de edad</strong>. <br />
          </p>
          <p>
            Cualquier anomalía ocular <strong>no diagnosticada precozmente</strong>, puede
            <strong> detener el desarrollo de la visión y dejar defectos que persistirán durante toda la vida.</strong>
             <br />
          </p>
          <p>
            El <span className="destacado__azul">Centro de Ojos Quilmes</span> cuenta con profesionales altamente
            especializados en <span className="destacado__subrayado">Oftalmología Pediátrica</span> y con una sofisticada <strong>tecnología</strong> capaz de detectar y tratar cualquier enfermedad ocular
            infantil.
          </p>
        </div>
        <img src={oftalmoImg2} alt="Oftalmopediatría" fetchPriority="high" />
      </div>

      <div className="info__grid">
        <div className="info__div">
          <h2 className="info__text__oftalmo__h2">¿Cuándo hacer los controles?</h2>
          <p>Se deben realizar controles y fondo de ojos:</p>
          <div className="div__list">
            <ul className="info__list">
              <li>
                <i className="bi bi-chevron-right" aria-hidden="true"></i>
                <span>Al Nacer</span>
              </li>
              <li>
                <i className="bi bi-chevron-right" aria-hidden="true"></i>
                <span>A los 6 meses</span>
              </li>
              <li>
                <i className="bi bi-chevron-right" aria-hidden="true"></i>
                <span>Al año</span>
              </li>
              <li>
                <i className="bi bi-chevron-right" aria-hidden="true"></i>
                <span>A los 3 años</span>
              </li>
              <li>
                <i className="bi bi-chevron-right" aria-hidden="true"></i>
                <span>A los 5 años al ingreso escolar</span>
              </li>
              <li>
                <i className="bi bi-chevron-right" aria-hidden="true"></i>
                <span>Y posteriormente cada 2 años</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <BannerComponent
        className="turnos__banner"
        title="¿Qué problemas visuales pueden tener los niños?"
        urlImg={oftalmoImg1}
        ariaLabel="Turnos online"
      >
        <a
          href="https://wa.me/541138721437"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="boton-cirugia" type="button">
            <i className="bi bi-whatsapp" aria-hidden="true" />
            <span>SOLICITA TU TURNO</span>
          </button>
        </a>
      </BannerComponent>

      <div className="oftalmo__acordions">
        {OFTALMO.map((item) => {
          const isOpen = item.id === openId;
          const panelId = `oftalmo-panel-${item.id}`;
          const buttonId = `oftalmo-button-${item.id}`;
          const title = item.titulo?.trim() ? item.titulo : `Item ${item.id}`;

          return (
            <section
              key={item.id}
              className={`oftalmo__accordionItem${isOpen ? " is-open" : ""}`}
            >
              <button
                id={buttonId}
                className="oftalmo__accordionButton"
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
              >
                <span className="oftalmo__accordionTitle">{title}</span>
                <span className="oftalmo__accordionIcon" aria-hidden="true">
                  <i className="bi bi-chevron-down"></i>
                </span>
              </button>

              <div
                id={panelId}
                className="oftalmo__accordionPanel"
                role="region"
                aria-labelledby={buttonId}
              >
                <div className="oftalmo__accordionPanelInner">
                  <div className="oftalmo__accordionBody">
                    {item.descripcion}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}

export default OftalmoComponent;
