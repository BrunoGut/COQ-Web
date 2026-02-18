import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import BannerComponent from "./BannerComponent";
import Modal from "./Modal";
import consultasImg from "../images/contacto/contacto2.png";
import "../css/consultasVirtuales.css";

function ConsultasVirtuales() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="consultas-virtuales">
      <BannerComponent
        className="turnos__banner"
        title="Para consultas virtuales, hace clck en el siguiente botón"
        urlImg={consultasImg}
        ariaLabel="Consultas virtuales"
      >
        <button className="boton-turnos" onClick={() => setIsModalOpen(true)}>
          <i className="bi bi-file-earmark-medical-fill" aria-hidden="true" />
          <span>CLICK AQUÍ</span>
        </button>
      </BannerComponent>

      <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
        <h2 className="h2-modal-consul">
          ¿Sabías que puedes realizar consultas virtuales?
        </h2>
        <p>
          A través de <span className="destacado_verde">WhatsApp</span>,
          coordinamos una atención personalizada para resolver tus dudas y
          evaluar tu caso. <br />
          <span className="destacado_negro_2_subrayado">Importante:</span>{" "}
          <span className="destacado_negro">
            No siempre puede resolverse de manera virtual
          </span>
          . Dependiendo del tipo de evaluación necesaria, podríamos sugerir una
          consulta presencial para garantizar el mejor cuidado de tu salud
          visual. <br />
          ¡Escribinos ahora haciendo{" "}
          <a
            className="info_link"
            href="https://wa.me/541138721437"
            target="_blank"
            rel="noopener noreferrer"
          >
            click acá
          </a>{" "}
          y te ayudamos a coordinar tu consulta!
        </p>
      </Modal>
    </section>
  );
}

export default ConsultasVirtuales;
