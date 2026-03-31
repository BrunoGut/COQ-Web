import React, { useState, useEffect } from 'react';
import '../css/reseñasComponent.css';
import RESEÑAS from './data/ReseñasArray';

function ReseñasComponent() {
  const [reseñasActuales, setReseñasActuales] = useState([]);
  const [fadeIn, setFadeIn] = useState(true);

  const obtenerReseñasAleatorias = () => {
    const reseñasMezcladas = [...RESEÑAS].sort(() => Math.random() - 0.5);
    return reseñasMezcladas.slice(0, 3);
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
      <h2 className="reseñas__titulo">El respaldo de nuestra comunidad</h2>
      <div className={`reseñas__contenedor ${fadeIn ? 'fade-in' : 'fade-out'}`}>
        {reseñasActuales.map((reseña) => (
          <div key={reseña.id} className="reseña__card">
            <div className="reseña__comillas">
              <i className="bi bi-quote"></i>
            </div>
            <p className="reseña__comentario">{reseña.comentario}</p>
            <p className="reseña__nombre">{reseña.nombre}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ReseñasComponent;
