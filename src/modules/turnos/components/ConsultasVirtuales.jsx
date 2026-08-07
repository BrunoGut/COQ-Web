import React from "react";
import "../css/consultasVirtuales.css";
import flechaImg from "../../../assets/images/turnos/flecha.png";

function ConsultasVirtuales() {
  return (
    <section className="consultas-virtuales">
      <div className="consultas-virtuales__inner">
        <article className="consultas-virtuales__row">
          <div className="consultas-virtuales__titleBlock">
            <h2 className="consultas-virtuales__title">
              Solicitá
              <br />
              tu turno fácil
              <br />
              y rápido
            </h2>
          </div>

          <div className="consultas-virtuales__content">
            <p>
              Chateá con nuestro equipo de recepción y reservá tu lugar de forma
              rápida, sin esperas telefónicas, de <strong>lunes a viernes de 08:00h a 19:30h</strong> y <strong>sábados de 08:00 a 12:00h</strong>.
            </p>
            <p>
              Indicá tu nombre completo, DNI, obra social, motivo de la
              consulta, fecha y horario preferido.
            </p>
            <a
              className="consultas-virtuales__cta"
              href="https://wa.me/541138721437"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Solicitá tu turno ahora</span>
              <img
                className="consultas-virtuales__ctaIcon"
                src={flechaImg}
                alt=""
                aria-hidden="true"
              />
            </a>
          </div>
        </article>

        <article className="consultas-virtuales__row">
          <div className="consultas-virtuales__titleBlock">
            <h2 className="consultas-virtuales__title">
              Consulta
              <br />
              virtual
            </h2>
          </div>

          <div className="consultas-virtuales__content consultas-virtuales__content--compact">
            <p>
              Coordinamos tu consulta personalizada directamente por WhatsApp.*
            </p>
            <p>
              Indicá tu nombre completo, DNI, obra social, motivo de la
              consulta, fecha y horario preferido.
            </p>
            <p className="consultas-virtuales__note">
              *Si tras evaluar tu caso notamos que necesitás un examen físico,
              te ayudaremos a programar una cita en nuestro centro para cuidarte mejor.
            </p>
            <a
              className="consultas-virtuales__cta"
              href="https://wa.me/541138721437"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Coordiná tu consulta virtual</span>
              <img
                className="consultas-virtuales__ctaIcon"
                src={flechaImg}
                alt=""
                aria-hidden="true"
              />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ConsultasVirtuales;
