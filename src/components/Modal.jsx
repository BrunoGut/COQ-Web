import "../css/modal.css";
import { useEffect, useLayoutEffect, useState } from "react";

const ANIM_MS = 180; // ponelo igual que tu CSS exagerado

let bodyScrollLockCount = 0;
let bodyScrollLockSnapshot = null;

function lockBodyScroll() {
  if (typeof window === "undefined") return;

  const body = document.body;
  const docEl = document.documentElement;

  if (bodyScrollLockCount === 0) {
    const scrollbarWidth = window.innerWidth - docEl.clientWidth;

    bodyScrollLockSnapshot = {
      style: {
        overflow: body.style.overflow,
        docOverflow: docEl.style.overflow,
        paddingRight: body.style.paddingRight,
      },
    };

    docEl.style.overflow = "hidden";
    body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }
  }

  bodyScrollLockCount += 1;
}

function unlockBodyScroll() {
  if (typeof window === "undefined") return;
  if (bodyScrollLockCount === 0) return;

  bodyScrollLockCount -= 1;
  if (bodyScrollLockCount > 0) return;

  const body = document.body;
  const docEl = document.documentElement;

  const snapshot = bodyScrollLockSnapshot;

  if (snapshot?.style) {
    body.style.overflow = snapshot.style.overflow;
    docEl.style.overflow = snapshot.style.docOverflow;
    body.style.paddingRight = snapshot.style.paddingRight;
  } else {
    body.style.overflow = "";
    docEl.style.overflow = "";
    body.style.paddingRight = "";
  }

  bodyScrollLockSnapshot = null;
}

export default function Modal({ isOpen, closeModal, children, containerClassName }) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  useLayoutEffect(() => {
    if (!shouldRender) return;

    lockBodyScroll();
    return () => unlockBodyScroll();
  }, [shouldRender]);

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
