import "../css/patologias.css";

import { useEffect, useState } from "react";

import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage.jsx";

import catarataImg from "../images/ojo-cataratas.jpeg";
import glaucomaImg from "../images/ojo-glaucoma.jpeg";
import retinaImg from "../images/ojo-retina.jpeg";
import corneaImg from "../images/ojo-cornea.jpeg";
import pediatriaImg from "../images/ojo-oftalmopediatria.jpeg";
import esteticaImg from "../images/ojo-estetica.jpeg";	


const PATOLOGIAS_ITEMS = [
  {
    label: "Cataratas",
    href: "#cataratas",
    imageSrc: catarataImg,
    interval: 1000,
  },
  {
    label: "Glaucoma",
    href: "#glaucoma",
    imageSrc: glaucomaImg,
    interval: 500,
  },
  {
    label: "Retina",
    href: "#retina",
    imageSrc: retinaImg,
  },
  {
    label: "Cornea",
    href: "#cornea",
    imageSrc: corneaImg,
  },
  {
    label: "Oftalmopediatría",
    href: "#oftalmopediatria",
    imageSrc: pediatriaImg,
  },
  {
    label: "Estética",
    href: "#estetica",
    imageSrc: esteticaImg,
  },
];

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

  const slides = chunkArray(PATOLOGIAS_ITEMS, cardsPerSlide);

  return (
    <section className="patologias" id="patologias" aria-label="Patologías">
      <div className="patologias__inner">
        <div className="patologias__heading" aria-hidden="true">
          <span className="patologias__line" />
          <h2 className="patologias__title">¿QUÉ TRATAMOS?</h2>
          <span className="patologias__line" />
        </div>

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
                      <article key={item.href} className="card">
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
                          <p className="card-description">
                            Información y tratamiento de {item.label}.
                          </p>
                          <a className="card-button" href={item.href} aria-label={`Ver más sobre ${item.label}`}>
                            Ver más
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}