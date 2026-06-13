import Tratamientos from "../components/Tratamientos";

function QueTratamos() {
  return (
    <>
      <section className="tratamientos__banner" aria-label="Tratamientos">
        <div className="tratamientos__banner-contenido">
          <h2 className="tratamientos__banner-titulo">ESPECIALIDADES</h2>
          <h4 className="tratamientos__banner-subtitulo">
            Abordaje integral para cada patología
          </h4>
        </div>
      </section>
      <Tratamientos />
    </>
  );
}

export default QueTratamos;
