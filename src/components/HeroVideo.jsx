import videoHero from '../videos/videoHero.mp4';
import '../css/heroVideo.css';

export default function HeroVideo() {
    return (
        <>
            <div className="hero-wrap">
                <video muted autoPlay loop playsInline className="hero-video">
                    <source src={videoHero} type="video/mp4" />
                </video>

                <div className='boton-hero'>
                    <button className='boton-guardia' type='button'>
                        <i className="bi bi-telephone-fill" aria-hidden="true" />
                        <span>GUARDIA 24HS</span>
                    </button>
                    <button className='boton-turno' type='button'>
                        <i className="bi bi-calendar-check-fill" aria-hidden="true" />
                        <span>SOLICITA TU TURNO</span>
                    </button>
                </div>
            </div>
        </>
    );
}