import videoHero2 from "../videos/videoHero.mp4";
import heroPoster from "../images/banner-video.png";
import "../css/heroVideo.css";
import { Link } from "react-router-dom";
import { useCallback, useState } from "react";
import bannerHome from "../images/bannerHome.jpeg";

export default function HeroVideo() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoaded = useCallback(() => {
    setIsVideoLoaded(true);
  }, []);

  return (
    <>
      <div className="hero-container">
        <div className="hero-content-left">
          <div className="hero-text-wrapper">
            <div className="boton-hero">
              <a
                href="https://wa.me/541138721437"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="boton-guardia" type="button">
                  <i className="bi bi-whatsapp fill" aria-hidden="true" />
                  <span>SOLICITÁ TU TURNO</span>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-content-right">
          <div
            className={`hero-wrap ${isVideoLoaded ? "is-loaded" : "is-loading"}`}
          >
            <img
              className="hero-poster"
              src={heroPoster}
              alt=""
              aria-hidden="true"
              decoding="async"
              fetchpriority="high"
            />

            <video
              muted
              autoPlay
              loop
              playsInline
              preload="metadata"
              className="hero-video"
              poster={heroPoster}
              onLoadedData={handleVideoLoaded}
            >
              <source src={videoHero2} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
}
