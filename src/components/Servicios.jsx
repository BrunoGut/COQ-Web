import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "../css/servicios.css";
import SectionHeading from "./SectionHeading";

const SERVICIOS_ITEMS = [
  { label: "Guardia", href: "/guardia", icon: "bi-heart-pulse" },
  { label: "Estudios", href: "/estudios", icon: "bi-binoculars" },
  { label: "Cirugías", href: "/cirugias", icon: "bi-bandaid" },
  { label: "Turnos", href: "/turnos-online", icon: "bi-whatsapp" },
  {
    label: "Oftalmopediatría",
    href: "/oftalmopediatria",
    icon: "bi-emoji-smile",
  },
  { label: "Estética", href: "/estetica", icon: "bi-eye" },
];

export default function Servicios() {
  const [index, setIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(
    window.innerWidth <= 768 ? 1 : 3,
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const onChange = (e) => {
      setCardsPerSlide(e.matches ? 1 : 3);
      setIndex(0);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  const slides = [];
  for (let i = 0; i < SERVICIOS_ITEMS.length; i += cardsPerSlide) {
    slides.push(SERVICIOS_ITEMS.slice(i, i + cardsPerSlide));
  }

  return (
    <section className="servicios" id="servicios" aria-label="Servicios">
      <div className="bienvenida__texto">
        <h2 className="bienvenida__titulo">
          Nuestros servicios
        </h2>
      </div>
      <div className="servicios__inner">
        <div
          className="servicios__carouselContainer"
          aria-label="Servicios disponibles"
        >
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            interval={null}
            className="servicios__carousel"
          >
            {slides.map((group, slideIndex) => (
              <Carousel.Item key={slideIndex}>
                <div className="servicios__slideRow">
                  {group.map((item) => (
                    <article key={item.href} className="servicios__card">
                      <Link
                        className="servicios__link"
                        to={item.href}
                        aria-label={item.label}
                      >
                        <div className="servicios__cardIcon" aria-hidden="true">
                          <i className={`bi ${item.icon}`} />
                        </div>
                        <h3 className="servicios__cardTitle">{item.label}</h3>
                      </Link>
                    </article>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
