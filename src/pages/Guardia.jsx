import GuardiaComponent from "../components/GuardiaComponent";
import guardiaImg from "../images/banner-guardia3.png";
import "../css/guardiaComponent.css";

export default function Guardia() {
  return (
    <>
      <section className="guardia__hero" aria-label="Atención de guardia">
        <div className="guardia__hero-izquierda">
          <h2 className="guardia__banner-titulo">GUARDIA OFTALMOLÓGICA</h2>
          <h4 className="guardia__banner-subtitulo">
            Servicio de guardia para urgencias
          </h4>
        </div>
        <div className="guardia__hero-imagen">
          <img src={guardiaImg} alt="Guardia oftalmológica" className="guardia__hero-img" />
        </div>
      </section>
      <GuardiaComponent />
    </>
  );
}
