import QuienesSomos from "../components/QuienesSomos";
import bannerNosotros from "../../../assets/images/banner-nosotros3.png";
import bannerNosotrosMobile from "../../../assets/images/banner-nosotros-mobile.png";

export default function Nosotros() {
  return (
    <>
      <section className="nosotros__hero">
        <div className="nosotros__hero-izquierda">
          <h1 className="nosotros__banner-titulo">NUESTRA HISTORIA</h1>
          <p className="nosotros__banner-subtitulo">
            Desde 1980, transformando la salud visual
          </p>
        </div>
        <div className="nosotros__hero-imagen">
          <picture>
            <source 
              media="(max-width: 600px)"
              srcSet={bannerNosotrosMobile}
            />
            <img
              src={bannerNosotros}
              alt="Sede del Centro de Ojos Quilmes"
              className="nosotros__hero-img"
            />
          </picture>
        </div>
      </section>
      <QuienesSomos />
    </>
  );
}
