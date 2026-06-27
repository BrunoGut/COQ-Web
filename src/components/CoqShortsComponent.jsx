import React, { useState, useRef, useEffect } from "react";
import { COQ_SHORTS } from "./data/CoqShortsArray";

const SORTED_SHORTS = [...COQ_SHORTS].sort((a, b) => b.id - a.id);
import {
  BsChevronUp,
  BsChevronDown,
  BsShareFill,
  BsVolumeMuteFill,
  BsVolumeUpFill,
  BsChatSquareDotsFill,
  BsChatSquareDots,
  BsFilm,
} from "react-icons/bs";
import { GiFilmSpool } from "react-icons/gi";
import { PiFilmSlateDuotone } from "react-icons/pi";
import "../css/coqShortsComponent.css";

function CoqShorts() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showText, setShowText] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const videoRef = useRef(null);
  const feedbackTimerRef = useRef(null);

  const INITIAL_VISIBLE = 12;
  const visibleShorts = showAll ? SORTED_SHORTS : SORTED_SHORTS.slice(0, INITIAL_VISIBLE);
  const hasMore = SORTED_SHORTS.length > INITIAL_VISIBLE;

  const selectedShort = selectedIndex !== null ? SORTED_SHORTS[selectedIndex] : null;

  // Al cambiar de video, resetear estado de reproducción
  useEffect(() => {
    setIsPlaying(true);
  }, [selectedIndex]);

  // Limpiar timer al desmontar
  useEffect(() => {
    return () => clearTimeout(feedbackTimerRef.current);
  }, []);

  // Ocultar botones flotantes cuando el modal está abierto
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.classList.add("coq-modal-open");
    } else {
      document.body.classList.remove("coq-modal-open");
    }
    return () => document.body.classList.remove("coq-modal-open");
  }, [selectedIndex]);

  const openShort = (index) => setSelectedIndex(index);
  const closeShort = () => setSelectedIndex(null);

  const nextShort = () =>
    setSelectedIndex((prev) =>
      prev === SORTED_SHORTS.length - 1 ? 0 : prev + 1
    );

  const prevShort = () =>
    setSelectedIndex((prev) =>
      prev === 0 ? SORTED_SHORTS.length - 1 : prev - 1
    );

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
    setShowFeedback(true);
    clearTimeout(feedbackTimerRef.current);
    feedbackTimerRef.current = setTimeout(() => setShowFeedback(false), 800);
  };

  const shareShort = async () => {
    if (!selectedShort) return;
    if (navigator.share) {
      await navigator.share({
        title: selectedShort.title,
        text: selectedShort.description,
        url: window.location.href,
      });
    }
  };

  return (
    <>
      {/*<div className="coqShorts__banner" id="coq-shorts">
        <div className="coqShorts__banner-contenido">
          <h2 className="coqShorts__banner-titulo">
            <PiFilmSlateDuotone className="coqShorts__banner-icono" />
            <span className="diferenciado-azul">COQ</span><span className="diferenciado-negro-shorts">shorts</span>
          </h2>
        </div>
      </div>*/}

      <section className="coqShorts__section">
        <div className="coq-shorts-list">
          {SORTED_SHORTS.map((short, index) => {
            if (!showAll && index >= INITIAL_VISIBLE) return null;
            const isRevealed = showAll && index >= INITIAL_VISIBLE;
            return (
              <article
                className={`coq-short-card${isRevealed ? " coq-short-card--animate" : ""}`}
                style={isRevealed ? { animationDelay: `${(index - INITIAL_VISIBLE) * 0.05}s` } : {}}
                key={short.id}
                onClick={() => openShort(index)}
              >
                <img src={short.imageURL} alt={short.title} />
                <div className="coq-short-overlay">
                  <h3>{short.title}</h3>
                  <div className="coq-short-play">
                    <span>▶</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {hasMore && (
          <div className="coqShorts__verMas">
            <button
              type="button"
              className="coqShorts__verMasBtn"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? "Ver menos" : "Ver más"}
            </button>
          </div>
        )}

        {selectedShort && (
          <div className="coq-short-modal">
            <button className="coq-close-btn" onClick={closeShort}>
              ✖ <span>Cerrar</span>
            </button>

            <div className="coq-modal-body">
              {/* Video */}
              <div className="coq-video-wrapper" onClick={togglePlay}>
                <video
                  key={selectedShort.id}
                  ref={videoRef}
                  src={selectedShort.videoURL}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="coq-video"
                />

                {showText && (
                  <div className="coq-video-text">
                    <h3>{selectedShort.title}</h3>
                    <p>{selectedShort.description}</p>
                  </div>
                )}

                {showFeedback && (
                  <div className="coq-feedback-icon">
                    {isPlaying ? "▶" : "⏸"}
                  </div>
                )}
              </div>

              {/* Sidebar TikTok-style */}
              <div className="coq-sidebar">
                <button
                  className="coq-sidebar-btn"
                  onClick={prevShort}
                  title="Anterior"
                >
                  <BsChevronUp />
                  <span>Anterior</span>
                </button>

                <button
                  className="coq-sidebar-btn"
                  onClick={nextShort}
                  title="Siguiente"
                >
                  <BsChevronDown />
                  <span>Siguiente</span>
                </button>

                <button
                  className="coq-sidebar-btn"
                  onClick={shareShort}
                  title="Compartir"
                >
                  <BsShareFill />
                  <span>Compartir</span>
                </button>

                <button
                  className="coq-sidebar-btn"
                  onClick={() => setIsMuted(!isMuted)}
                  title={isMuted ? "Activar sonido" : "Desactivar sonido"}
                >
                  {isMuted ? <BsVolumeMuteFill /> : <BsVolumeUpFill />}
                  <span>{isMuted ? "Sin sonido" : "Con sonido"}</span>
                </button>

                <button
                  className="coq-sidebar-btn"
                  onClick={() => setShowText(!showText)}
                  title={showText ? "Ocultar texto" : "Mostrar texto"}
                >
                  {showText ? <BsChatSquareDotsFill /> : <BsChatSquareDots />}
                  <span>{showText ? "Ocultar" : "Mostrar"}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default CoqShorts;