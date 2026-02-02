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
      <div className="oftalmo_inner">
        <SectionHeading title="OFTALMOPEDIATRÍA" />
      </div>

      <div className="info__img">
        <div className="info__text__oftalmo">
          <p>
            Los primeros años de la vida son fundamentales para el desarrollo de
            la visión. <br />
            Es por esto que el cuidado oftalmológico de los niños es tan
            importante. <br />
          </p>
          <p>
            El ojo en el niño es inmaduro y está en constante crecimiento hasta
            los 7 u 8 años. <br />
            La visión en la primera infancia es menor y alcanza una agudeza
            visual de 10/10 hacia los 5 años de edad. <br />
          </p>
          <p>
            Cualquier anomalía ocular no diagnosticada precozmente, puede
            detener el desarrollo de la visión y dejar defectos que persistirán
            durante toda la vida. <br />
          </p>
          <p>
            El Centro de Ojos Quilmes cuenta con profesionales altamente
            especializados en Oftalmología Pediátrica y con una sofisticada
            tecnología capaz de detectar y tratar cualquier enfermedad ocular
            infantil.
          </p>
        </div>
        <img src={oftalmoImg2} alt="Oftalmopediatría" />
      </div>

      <div className="info__grid">
        <div className="info__div">
          <h2 className="info__text">¿Cuándo hacer los controles?</h2>
          <p>Se deben realizar controles y fondo de ojos:</p>
          <div className="div__list">
            <ul className="info__list">
              <li>Al Nacer</li>
              <li>A los 6 meses</li>
              <li>Al año</li>
              <li>A los 3 años</li>
              <li>A los 5 años al ingreso escolar</li>
              <li>Y posteriormente cada 2 años</li>
            </ul>
          </div>
        </div>
      </div>

      <BannerComponent
        className="turnos__banner"
        title="¿Qué problemas visuales pueden tener los niños?"
        urlImg={oftalmoImg1}
        ariaLabel="Turnos online"
      />

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
