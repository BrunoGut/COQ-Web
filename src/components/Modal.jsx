import "../css/modal.css";

import { useEffect, useState } from "react";

export default function Modal({
  isOpen,
  closeModal,
  children,
  containerClassName,
}) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
      return;
    }

    if (!shouldRender) return;
    setIsClosing(true);

    const timeoutId = setTimeout(() => {
      setShouldRender(false);
      setIsClosing(false);
    }, 180);

    return () => clearTimeout(timeoutId);
  }, [isOpen, shouldRender]);

  if (!shouldRender) return null;

  return (
    <section
      className={`modal${isOpen && !isClosing ? " is-open" : ""}${isClosing ? " is-closing" : ""}`}
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
