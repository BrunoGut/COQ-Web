import EstudiosComponent from "../components/EstudiosComponent";
import "../css/estudiosComponent.css";
import estudiosImg from "../../../assets/images/banner-estudios.png";
import estudiosImgMobile from "../../../assets/images/banner-estudios-mobile.png";

export default function Estudios() {
  return (
    <>
      <section className="estudios__hero" aria-label="Estudios oftalmológicos">
        <div className="estudios__hero-izquierda">
          <h2 className="estudios__banner-titulo">ESTUDIOS</h2>
          <h4 className="estudios__banner-subtitulo">
            Diagnóstico de precisión para cada paciente
          </h4>
        </div>
        <div className="estudios__hero-imagen">
          <picture>
            <source 
              media="(max-width: 600px)"
              srcSet={estudiosImgMobile}
            />
            <img src={estudiosImg} alt="Estudios oftalmológicos" className="estudios__hero-img" />
          </picture>
        </div>
      </section>
      <EstudiosComponent />
    </>
  );
}
