import "../css/botonWhatsapp.css";

export default function BotonWhatsApp() {
  return (
    <>
      <div className="botones-flotantes">
        <div className="wsp">
          <button className="boton-wsp" type="button">
            <a
              href="https://wa.me/1165132161"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-whatsapp" aria-hidden="true" />
              <span className="boton-flotante-texto">Solicitar turno</span>
            </a>
          </button>
        </div>

        <div className="guardia-flotante">
          <button className="boton-guardia-flotante" type="button">
            <a href="#guardia">
              <i className="bi bi-hospital" aria-hidden="true" />
              <span className="boton-flotante-texto">Guardia</span>
            </a>
          </button>
        </div>

        <div className="volver-inicio">
          <button className="boton-volver-inicio" type="button">
            <a href="#">
              <i className="bi bi-arrow-up" aria-hidden="true" />
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
