import React, { useState, useEffect } from "react";
import SectionHeading from "./SectionHeading";
import "../css/prensaComponent.css";
import Modal from "./Modal";
import PRENSA from "./data/PrensaArray";
import Carousel from "react-bootstrap/Carousel";

function PrensaComponent() {
  const [index, setIndex] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState(null);
  const [cardsPerSlide, setCardsPerSlide] = useState(window.innerWidth <= 768 ? 1 : 2);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const onChange = (e) => { setCardsPerSlide(e.matches ? 1 : 2); setIndex(0); };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const closeVideo = () => {
    setIsVideoOpen(false);
    setVideoSrc(null);
  };

  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  const handleClick = (item) => {
    if (item.kind === "article") {
      window.open(item.href, "_blank", "noreferrer");
      return;
    }
    if (item.kind === "video") {
      setVideoSrc(item.video);
      setIsVideoOpen(true);
    }
  };

  const slides = [];
  for (let i = 0; i < PRENSA.length; i += cardsPerSlide) {
    slides.push(PRENSA.slice(i, i + cardsPerSlide));
  }

  return (
    <section className="prensa" id="prensa" aria-label="Prensa">
      <div className="prensa__inner">
        <SectionHeading title="PRENSA" />

        <div className="slide-container" aria-label="Noticias destacadas">
          <div className="slide-content">
            <Carousel activeIndex={index} onSelect={handleSelect} interval={null} className="prensa__carousel">
              {slides.map((pair, slideIndex) => (
                <Carousel.Item key={slideIndex}>
                  <div className="prensa__slideRow">
                    {pair.map((item) => (
                      <article
                        key={item.id}
                        className="prensa__card"
                        onClick={() => handleClick(item)}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="prensa__cardImg">
                          <img src={item.imageSrc} alt={item.titulo} />
                          <span className="prensa__cardBadge">
                            {item.kind === "video" ? "Video" : "Artículo"}
                          </span>
                        </div>
                        <div className="prensa__cardBody">
                          <h3 className="prensa__cardTitle">{item.titulo}</h3>
                          <span className="prensa__cardCta">
                            {item.kind === "video" ? "Ver video →" : "Leer nota →"}
                          </span>
                        </div>
                      </article>
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>

        {/* MODAL SOLO VIDEO */}
        <Modal
          isOpen={isVideoOpen}
          closeModal={closeVideo}
          containerClassName="container__modal--wide"
        >
          {videoSrc && (
            <video controls style={{ width: "100%", borderRadius: "12px" }}>
              <source src={videoSrc} type="video/mp4" />
            </video>
          )}
        </Modal>
      </div>
    </section>
  );
}

export default PrensaComponent;
