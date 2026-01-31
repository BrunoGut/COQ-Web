import '../css/prepagas.css'
import CarruselPrepagas from './CarruselPrepagas'
import SectionHeading from './SectionHeading';
import BannerComponent from './BannerComponent';
import coberturasImg from '../images/coberturas.jpg';

export default function Prepagas() {
  return (
    <section className="prepagas" id="prepagas" aria-label="Prepagas">
      <div className="prepagas__inner">
        <SectionHeading title="Prepagas"/>
      </div>

      <BannerComponent
        className="prepagas__banner"
        title="Coberturas médicas"
        urlImg={coberturasImg}
        ariaLabel="Coberturas médicas"
      >
        <button className="prepagas__button" type="button">
          Saber más
        </button>
      </BannerComponent>

      <CarruselPrepagas />
    </section>
  );
}
