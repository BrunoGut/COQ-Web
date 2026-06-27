import EstudiosComponent from "../components/EstudiosComponent";
import "../css/estudiosComponent.css";

export default function Estudios() {
  return (
    <>
      <section className="estudios__banner" aria-label="Estudios">
        <div className="estudios__banner-contenido">
          <h2 className="estudios__banner-titulo">ESTUDIOS</h2>
          <h4 className="estudios__banner-subtitulo">
            Diagnóstico de precisión para cada paciente
          </h4>
        </div>
      </section>
      <EstudiosComponent />
    </>
  );
}
