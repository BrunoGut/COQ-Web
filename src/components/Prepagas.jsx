import '../css/prepagas.css'
import CarruselPrepagas from './CarruselPrepagas'
import SectionHeading from './SectionHeading';
import BannerComponent from './BannerComponent';
import coberturasImg from '../images/coberturas.jpg';
import { Link } from 'react-router-dom';

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
        <Link className="prepagas__button" to="/coberturas">Saber más</Link>
      </BannerComponent>

      <CarruselPrepagas />
    </section>
  );
}
