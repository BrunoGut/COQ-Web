import Modal from "./Modal";
import "../css/cronogramaModal.css";

function CronogramaModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} closeModal={onClose} title="Cronograma Ingreso 2026">
      <div className="cronogramaModal__contenido">
        <ul className="cronogramaModal__lista">
          <li className="cronogramaModal__item">
            <span className="cronogramaModal__etiqueta">Inscripción</span>
            <span className="cronogramaModal__valor">01/06/2026 — 01/07/2026</span>
          </li>
          <li className="cronogramaModal__item">
            <span className="cronogramaModal__etiqueta">
              EIRU <span className="cronogramaModal__etiqueta-sub">(Examen de Ingreso a Residencias Único)</span>
            </span>
            <span className="cronogramaModal__valor cronogramaModal__valor--destacado">14/07/2026</span>
          </li>
          <li className="cronogramaModal__item">
            <span className="cronogramaModal__etiqueta">Entrevistas</span>
            <span className="cronogramaModal__valor">Semana del 20 al 31 de julio</span>
          </li>
          <li className="cronogramaModal__item">
            <span className="cronogramaModal__etiqueta">Adjudicación</span>
            <span className="cronogramaModal__valor">01/09/2026</span>
          </li>
        </ul>
        <div className="ingresoResidencia__modal-contenido">
          <ul className="ingresoResidencia__modal-lista">
            <li>Enviar un mail a <a href="mailto:residencia@centrodeojosquilmes.com.ar" className="ingresoResidencia__modal-link">residencia@centrodeojosquilmes.com.ar</a></li>
            <li>En el cuerpo del mensaje poner nombre, apellido, DNI y un número de celular.</li>
            <li>Adjuntar CV completo (formato .doc, .docx o .pdf), copia del DNI (formato jpg o pdf), y Matrícula Nacional (en el caso de Argentinos se puede adjuntar constancia de trámite).</li>
          </ul>
        </div>
        <button className="cronogramaModal__btn-cerrar" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </Modal>
  );
}

export default CronogramaModal;
