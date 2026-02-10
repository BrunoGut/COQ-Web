import "../css/modal.css";
import { useEffect, useState } from "react";

const ANIM_MS = 180; // ponelo igual que tu CSS exagerado

export default function Modal({ isOpen, closeModal, children, containerClassName }) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);

      // 👇 clave: permitir un frame sin "is-open"
      setIsOpening(true);
      requestAnimationFrame(() => setIsOpening(false));
      return;
    }

    if (!shouldRender) return;

    setIsClosing(true);

    const timeoutId = setTimeout(() => {
      setShouldRender(false);
      setIsClosing(false);
    }, ANIM_MS);

    return () => clearTimeout(timeoutId);
  }, [isOpen, shouldRender]);

  if (!shouldRender) return null;

  const openClass = isOpen && !isClosing && !isOpening;

  return (
    <section
      className={`modal${openClass ? " is-open" : ""}${isClosing ? " is-closing" : ""}`}
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`container__modal${containerClassName ? ` ${containerClassName}` : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__close" onClick={closeModal} aria-label="Cerrar">
          <i className="bi bi-x" aria-hidden="true"></i>
        </button>

        <div className="modal__body">{children}</div>
      </div>
    </section>
  );
}
