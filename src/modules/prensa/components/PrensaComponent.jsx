import React, { useMemo, useState } from "react";
import "../css/prensaComponent.css";
import Modal from "../../../shared/components/Modal";
import PRENSA from "../data/PrensaArray";
import Carousel from "react-bootstrap/Carousel";

const ITEMS_PER_SLIDE = 2;

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
    () => chunkItems([...PRENSA].sort((a, b) => b.id - a.id), ITEMS_PER_SLIDE),
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
      <section className="prensa" id="prensa" aria-labelledby="prensa-section-title">
        <div className="prensa__inner">
          <header className="prensa__sectionHeader">
            <h2 id="prensa-section-title" className="prensa__sectionTitle">
              Noticias y entrevistas
            </h2>
            <p className="prensa__sectionSubtitle">
              La actualidad del Centro de Ojos Quilmes en los medios
            </p>
          </header>

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
