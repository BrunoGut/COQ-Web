import QuienesSomos from "../components/QuienesSomos";
import bannerNosotros from "../images/banner-nosotros3.png";

export default function Nosotros() {
  return (
    <>
      <section className="nosotros__hero">
        <div className="nosotros__hero-izquierda">
          <h2 className="nosotros__banner-titulo">NUESTRA HISTORIA</h2>
          <h4 className="nosotros__banner-subtitulo">
            Desde 1980, <br /> transformando la <br /> salud visual
          </h4>
        </div>
        <div className="nosotros__hero-imagen">
          <img src={bannerNosotros} alt="Guardia oftalmológica" className="nosotros__hero-img" />
        </div>
      </section>
      
      <QuienesSomos />
    </>
  );
}

{/*<section className="qs__banner" aria-label="Quiénes somos">
        <div className="qs__banner-contenido">
          <h2 className="qs__banner-titulo">Nuestra <br /> Historia</h2>
          <h4 className="qs__banner-subtitulo">
            Desde 1980, <br /> transformando la <br /> salud visual
          </h4>
      </div>
      </section>*/}
