import QuienesSomos from "../components/QuienesSomos";

export default function Nosotros() {
  return (
    <>
      <section className="qs__banner" aria-label="Quiénes somos">
        <div className="qs__banner-contenido">
          <h2 className="qs__banner-titulo">NUESTRA HISTORIA</h2>
          <h4 className="qs__banner-subtitulo">
            Desde 1980, transformando la salud visual
          </h4>
        </div>
      </section>
      <QuienesSomos />
    </>
  );
}
