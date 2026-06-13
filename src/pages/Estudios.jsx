import EstudiosComponent from "../components/EstudiosComponent";
import "../css/estudiosComponent.css";
import "../css/patologias.css";

export default function Estudios() {
  return (
    <>
      <section className="tratamientos__banner" aria-label="Estudios">
        <div className="tratamientos__banner-contenido">
          <h2 className="tratamientos__banner-titulo">ESTUDIOS</h2>
          <h4 className="tratamientos__banner-subtitulo">
            Diagnóstico de precisión para cada paciente
          </h4>
        </div>
      </section>
      <EstudiosComponent />
    </>
  );
}
