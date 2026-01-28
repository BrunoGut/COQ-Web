import videoHero from '../videos/videoHero.mp4';
import videoHero2 from '../videos/videoHero-full-screen.mp4';
import '../css/heroVideo.css';
import Servicios from './Servicios';
import Prepagas from './Prepagas';
import Patologias from './Patologias';
import { Link } from 'react-router-dom';

export default function HeroVideo() {
    return (
        <>
            <div className="hero-wrap">
                <video muted autoPlay loop playsInline className="hero-video">
                    <source src={videoHero2} type="video/mp4" />
                </video>

                <div className='boton-hero'>
                    <Link to="/guardia">
                        <button className='boton-guardia' type='button'>
                            <i className="bi bi-hospital-fill" aria-hidden="true" />
                            <span>GUARDIA</span>
                        </button>
                    </Link>
                    
                    <a href="https://wa.me/1165132161" target="_blank" rel="noopener noreferrer">
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