import React, { useMemo, useState } from "react";
import "../css/prensaComponent.css";
import Modal from "./Modal";
import PRENSA from "./data/PrensaArray";
import Carousel from "react-bootstrap/Carousel";

const ITEMS_PER_SLIDE = 2;

function shuffleItems(items) {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }

  return shuffled;
}

function chunkItems(items, size) {
  const chunks = [];

  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }

  return chunks;
}

function getItemDescription(item) {
  if (item.kind === "video") {
    return "Mirá el contenido audiovisual destacado del Centro de Ojos Quilmes.";
  }

  return "Accedé a la cobertura completa y conocé más sobre esta noticia destacada.";
}

function PrensaComponent() {
  const [index, setIndex] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState(null);
  const slides = useMemo(
    () => chunkItems(shuffleItems(PRENSA), ITEMS_PER_SLIDE),
    [],
  );
  const hasMultipleSlides = slides.length > 1;

  const closeVideo = () => {
    setIsVideoOpen(false);
    setVideoSrc(null);
  };

  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  const handleClick = (item) => {
    if (item.kind === "article") {
      window.open(item.href, "_blank", "noopener,noreferrer");
      return;
    }

    if (item.kind === "video") {
      setVideoSrc(item.video);
      setIsVideoOpen(true);
    }
  };

  return (
    <>
      <section className="prensa__banner" aria-label="Prensa">
        <div className="prensa__banner-contenido">
          <h2 className="prensa__banner-titulo">Prensa</h2>
        </div>
      </section>
      <section className="prensa" id="prensa" aria-label="Prensa">
        <div className="prensa__inner">
          <div className="prensa__content">
            <div className="prensa__news" aria-label="Noticias destacadas">
              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                interval={null}
                className="prensa__carousel"
                controls={hasMultipleSlides}
                indicators={hasMultipleSlides}
                touch={hasMultipleSlides}
              >
                {slides.map((group, slideIndex) => (
                  <Carousel.Item key={slideIndex}>
                    <div className="prensa__slide">
                      {group.map((item, itemIndex) => (
                        <React.Fragment key={item.id}>
                          <button
                            type="button"
                            className="prensa__newsItem"
                            onClick={() => handleClick(item)}
                            aria-label={
                              item.kind === "video"
                                ? `Abrir video ${item.titulo}`
                                : `Abrir artículo ${item.titulo}`
                            }
                          >
                            <div className="prensa__newsImage">
                              <img
                                src={item.imageSrc}
                                alt={item.titulo}
                                loading="lazy"
                                decoding="async"
                              />
                            </div>

                            <div className="prensa__newsBody">
                              {/*<span className="prensa__newsType">
                                {item.kind === "video" ? "Video" : "Artículo"}
                              </span>*/}

                              <h3 className="prensa__newsTitle">{item.titulo}</h3>

                              <p className="prensa__newsDescription">
                                {item.descripcion ?? getItemDescription(item)}
                              </p>

                              <span className="prensa__newsLink">
                                {item.kind === "video"
                                  ? "Ver video"
                                  : "Leer artículo"}
                                <span aria-hidden="true">↘</span>
                              </span>
                            </div>
                          </button>

                          {itemIndex < group.length - 1 && (
                            <div className="prensa__divider" aria-hidden="true" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>

            <section
              className="prensa__contact"
              aria-label="Contacto para medios y prensa"
            >
              <div className="prensa__contactGrid">
                <h3 className="prensa__contactTitle">
                  Contacto
                  <br />
                  para Medios
                  <br />
                  y Prensa
                </h3>

                <div className="prensa__contactBody">
                  <p>
                    Para solicitudes de entrevistas, material institucional o
                    consultas de prensa, por favor contactanos a través de
                    nuestros canales exclusivos para medios.
                  </p>

                  <div className="prensa__contactInfo">
                    <span className="prensa__contactLabel">
                      Correo electrónico
                    </span>
                    <a
                      className="prensa__contactLink"
                      href="mailto:prensa@centrodeojosquilmes.com.ar"
                    >
                      prensa@centrodeojosquilmes.com.ar
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <Modal
            isOpen={isVideoOpen}
            closeModal={closeVideo}
            containerClassName="container__modal--wide"
          >
            {videoSrc && (
              <video
                controls
                preload="metadata"
                playsInline
                style={{ width: "100%" }}
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            )}
          </Modal>
        </div>
      </section>
    </>
  );
}

export default PrensaComponent;
