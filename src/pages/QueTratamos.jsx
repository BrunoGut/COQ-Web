import Tratamientos from "../components/Tratamientos";
import bannerEspecialidades from "../images/banner-especialidades2.png";
import bannerEspecialidadesMobile from "../images/banner-especialidades-mobile.png";

function QueTratamos() {
  return (
    <>
      <section className="tratamientos__hero">
        <div className="tratamientos__hero-izquierda">
          <h2 className="tratamientos__banner-titulo">ESPECIALIDADES</h2>
          <h4 className="tratamientos__banner-subtitulo">
            Abordaje integral <br /> para cada <br /> patología ocular
          </h4>
        </div>
        <div className="tratamientos__hero-imagen">
          <picture>
            <source 
              media="(max-width: 600px)"
              srcSet={bannerEspecialidadesMobile}
            />
            <img src={bannerEspecialidades} alt="Guardia oftalmológica" className="tratamientos__hero-img" />
          </picture>
        </div>
      </section>
      <Tratamientos />
    </>
  );
}

export default QueTratamos;
