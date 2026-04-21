import React, { useState, useEffect } from 'react';
import '../css/reseñasComponent.css';
import RESEÑAS from './data/ReseñasArray';
import quotesImg from '../images/reseñas/quotes.png';

function ReseñasComponent() {
  const [reseñasActuales, setReseñasActuales] = useState([]);
  const [fadeIn, setFadeIn] = useState(true);

  const obtenerReseñasAleatorias = () => {
    const reseñasMezcladas = [...RESEÑAS].sort(() => Math.random() - 0.5);
    return reseñasMezcladas.slice(0, 2);
  };

  useEffect(() => {
    // Cargar reseñas iniciales
    setReseñasActuales(obtenerReseñasAleatorias());

    // Cambiar reseñas cada 5 segundos
    const intervalo = setInterval(() => {
      setFadeIn(false);
      
      setTimeout(() => {
        setReseñasActuales(obtenerReseñasAleatorias());
        setFadeIn(true);
      }, 500);
    }, 7000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="reseñas__section">
      <div className="reseñas__wrapper">
        <div className="reseñas__header">
          <div className="reseñas__header__contenido">
            <h2 className="reseñas__titulo">
              <span className="reseñas__titulo-desktop">
                Lo que dice <br /> nuestra <br /> comunidad
              </span>
              <span className="reseñas__titulo-mobile">
                Lo que dice <br /> Nuestra comunidad
              </span>
            </h2>
            <p className="reseñas__subtitulo">Reseñas Google</p>
          </div>
        </div>
        <div className={`reseñas__contenedor ${fadeIn ? 'fade-in' : 'fade-out'}`}>
          <div className="reseñas__cards-wrapper">
            {reseñasActuales.map((reseña, index) => (
              <div key={reseña.id} className={`reseña__card reseña__card--${index + 1}`}>
                <div className="reseña__comillas">
                  <img src={quotesImg} alt="Comillas" />
                </div>
                <p className="reseña__comentario">{reseña.comentario}</p>
                <p className="reseña__nombre">{reseña.nombre}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReseñasComponent;
