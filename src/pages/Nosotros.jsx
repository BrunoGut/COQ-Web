import QuienesSomos from "../components/QuienesSomos";
import bannerNosotros from "../images/banner-nosotros3.png";
import bannerNosotrosMobile from "../images/banner-nosotros-mobile.png";

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
          <picture>
            <source 
              media="(max-width: 600px)"
              srcSet={bannerNosotrosMobile}
            />
            <img src={bannerNosotros} alt="Guardia oftalmológica" className="nosotros__hero-img" />
          </picture>
        </div>
      </section>
      <QuienesSomos />
    </>
  );
}
