import "../css/modal.css";

export default function Modal({
  isOpen,
  closeModal,
  children,
  containerClassName,
}) {
  if (!isOpen) return null;

  return (
    <section
      className="modal"
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`container__modal${containerClassName ? ` ${containerClassName}` : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal__close"
          onClick={closeModal}
          aria-label="Cerrar"
        >
          <i className="bi bi-x" aria-hidden="true"></i>
        </button>

        <div className="modal__body">{children}</div>
      </div>
    </section>
  );  
}
