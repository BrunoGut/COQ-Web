import videoHero2 from '../videos/videoHero-full-screen-render2.mp4';
import heroPoster from '../images/banner-video.png';
import '../css/heroVideo.css';
import { Link } from 'react-router-dom';
import { useCallback, useState } from 'react';

export default function HeroVideo() {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    const handleVideoLoaded = useCallback(() => {
        setIsVideoLoaded(true);
    }, []);

    return (
        <>
            <div className={`hero-wrap ${isVideoLoaded ? 'is-loaded' : 'is-loading'}`}>
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

                <div className='boton-hero'>
                    <Link to="/guardia">
                        <button className='boton-guardia' type='button'>
                            <i className="bi bi-hospital-fill" aria-hidden="true" />
                            <span>GUARDIA</span>
                        </button>
                    </Link>
                    
                    <a href="https://wa.me/541138721437" target="_blank" rel="noopener noreferrer">
                        <button className='boton-turno' type='button'>
                            <i className="bi bi-calendar-check-fill" aria-hidden="true" />
                            <span>SOLICITA TU TURNO</span>
                        </button>
                    </a>

                </div>
            </div>
        </>
    );
}