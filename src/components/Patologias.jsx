import "../css/patologias.css";
import "../css/heroVideo.css";

import { useEffect, useState } from "react";

import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage.jsx";
import SectionHeading from "./SectionHeading.jsx";

import { Link } from "react-router-dom";
import PATOLOGIAS from './data/PatologiasArray';




function chunkArray(items, chunkSize) {
  const chunks = [];
  for (let index = 0; index < items.length; index += chunkSize) {
    chunks.push(items.slice(index, index + chunkSize));
  }
  return chunks;
}

export default function Patologias() {
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  useEffect(() => {
    const mediaMobile = window.matchMedia("(max-width: 576px)");
    const mediaTablet = window.matchMedia("(max-width: 992px)");

    const update = () => {
      if (mediaMobile.matches) {
        setCardsPerSlide(1);
        return;
      }

      if (mediaTablet.matches) {
        setCardsPerSlide(2);
        return;
      }

      setCardsPerSlide(3);
    };

    update();
    mediaMobile.addEventListener?.("change", update);
    mediaTablet.addEventListener?.("change", update);

    return () => {
      mediaMobile.removeEventListener?.("change", update);
      mediaTablet.removeEventListener?.("change", update);
    };
  }, []);

  const slides = chunkArray(PATOLOGIAS, cardsPerSlide);

  return (
    <section className="patologias" id="patologias" aria-label="Patologías">
      <div className="patologias__inner">
        <SectionHeading title="¿QUÉ TRATAMOS?" />

        <div className="slide-container" aria-label="Patologías destacadas">
          <div className="slide-content">
            <Carousel className="patologias__carousel" aria-label="Carrusel de patologías">
              {slides.map((slideItems, slideIndex) => (
                <Carousel.Item
                  key={slideIndex}
                  interval={slideItems.find((item) => item.interval)?.interval}
                >
                  <div className="patologias__carouselGrid" role="group" aria-label={`Patologías ${slideIndex + 1}`}>
                    {slideItems.map((item) => (
                      <article key={item.id ?? item.href} className="card">
                        <div className="card-header" aria-hidden="true" />
                        <div className="card-image" aria-hidden="true">
                          <ExampleCarouselImage
                            className="card-img"
                            src={item.imageSrc}
                            alt={item.label}
                          />
                        </div>
                        <div className="card-content">
                          <h3 className="card-name">{item.label}</h3>
                          <div className="card-description">
                            {item.descripcion || "Descripción no disponible."}
                          </div>
                          <Link
                            className="card-button"
                            to={`/paciente/que-tratamos?patologia=${encodeURIComponent(item.id)}`}
                            aria-label={`Ver más sobre ${item.label}`}
                          >
                            Ver más
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>

        <div className="patologias__actions" aria-label="Acciones">
          <Link className="boton-guardia" to="/paciente/que-tratamos" aria-label="Ver todos los tratamientos">
            <i className="bi bi-clipboard2-pulse-fill" aria-hidden="true" />
            <span>Ver todos los tratamientos</span>
          </Link>
          <a className="boton-turno" href="https://wa.me/1165132161" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-calendar-check-fill" aria-hidden="true" />
              <span>Solicitar turno</span>
          </a>
        </div>
      </div>
    </section>
  );
}