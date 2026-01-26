import videoHero from '../videos/videoHero.mp4';
import videoHero2 from '../videos/videoHero-full-screen.mp4';
import '../css/heroVideo.css';
import Servicios from './Servicios';
import Prepagas from './Prepagas';
import Patologias from './Patologias';

export default function HeroVideo() {
    return (
        <>
            <div className="hero-wrap">
                <video muted autoPlay loop playsInline className="hero-video">
                    <source src={videoHero2} type="video/mp4" />
                </video>

                <div className='boton-hero'>
                    <button className='boton-guardia' type='button'>
                        <i className="bi bi-hospital-fill" aria-hidden="true" />
                        <span>GUARDIA</span>
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