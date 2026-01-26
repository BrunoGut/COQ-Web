import "../css/botonWhatsapp.css";

export default function BotonWhatsApp() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="botones-flotantes">
        <div className="wsp">
          <a
            className="boton-wsp"
            href="https://wa.me/1165132161"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-whatsapp" aria-hidden="true" />
            <span className="boton-flotante-texto">Solicitar turno</span>
          </a>
        </div>

        <div className="guardia-flotante">
          <a className="boton-guardia-flotante" href="#guardia">
            <i className="bi bi-hospital" aria-hidden="true" />
            <span className="boton-flotante-texto">Guardia</span>
          </a>
        </div>

        <div className="volver-inicio">
          <button
            className="boton-volver-inicio"
            type="button"
            onClick={handleScrollToTop}
            aria-label="Volver al inicio"
          >
            <i className="bi bi-arrow-up" aria-hidden="true" />
          </button>
        </div>
      </div>
    </>
  );
}
