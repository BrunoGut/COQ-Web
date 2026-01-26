import '../css/prepagas.css'
import CarruselPrepagas from './CarruselPrepagas'

export default function Prepagas() {
  return (
    <section className="prepagas" id="prepagas" aria-label="Prepagas">
      <div className="prepagas__inner">
        <div className="prepagas__heading" aria-hidden="true">
          <span className="prepagas__line" />
          <h2 className="prepagas__title">PREPAGAS</h2>
          <span className="prepagas__line" />
        </div>
      </div>

      <div className="prepagas__banner" aria-label="Coberturas médicas">
        <div className="prepagas__bannerInner">
          <h3 className="prepagas__bannerTitle">Coberturas médicas</h3>
          <button className="prepagas__button" type="button">
            Saber más
          </button>
        </div>
      </div>

      <CarruselPrepagas />
    </section>
  );
}
