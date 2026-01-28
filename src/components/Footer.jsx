import { Link } from "react-router-dom";
import "../css/footer.css";
import logoCq from "../images/logo-coq-footer-3.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="waves" aria-hidden="true">
        <svg className="wave wave1" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,42.7C1248,43,1344,53,1392,58.7L1440,64V120H0Z"
            fill="#003c77"
          />
        </svg>

        <svg className="wave wave2" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,80L60,74C120,68,240,56,360,58C480,60,600,76,720,82C840,88,960,84,1080,74C1200,64,1320,48,1380,40L1440,32V120H0Z"
            fill="#003c77"
          />
        </svg>
      </div>

      <div className="footer-content container">
        <div className="row gy-4">
          <div className="col-12 col-lg-4">
            <div className="footer-brand">
              <Link className="footer__logoLink" to="/">
                <img className="footer-logo" src={logoCq} alt="COQ" />
              </Link>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="footer-title">Descubre</div>
            <ul className="footer-links list-unstyled mb-0">
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/nosotros">Nosotros</Link>
              </li>
              <li>
                <Link to="/paciente">Paciente</Link>
              </li>
              <li>
                <Link to="/residencia">Residencia</Link>
              </li>
              <li>
                <Link to="/prensa">Prensa</Link>
              </li>
              <li>
                <Link to="/consultas-virtuales">Consultas Virtuales</Link>
              </li>
              <li>
                <Link to="/turnos-online">Turnos Online</Link>
              </li>
            </ul>
          </div>

          <div className="col-12 col-lg-4">
            <div className="footer-title">Contacto</div>
            <a className="footer-contact" href="mailto:contacto@coq.com">
              contacto@coq.com
            </a>

            <div className="footer-title mt-3">Redes</div>
            <div className="footer-social" aria-label="Redes sociales">
              <a className="social-link" href="#" aria-label="Instagram">
                <i className="bi bi-instagram" aria-hidden="true" />
              </a>
              <a className="social-link" href="#" aria-label="Facebook">
                <i className="bi bi-facebook" aria-hidden="true" />
              </a>
              <a className="social-link" href="#" aria-label="Linkedin">
                <i className="bi bi-linkedin" aria-hidden="true" />
              </a>
              <a className="social-link" href="#" aria-label="YouTube">
                <i className="bi bi-youtube" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider" />
        <div className="footer-bottom">© 2026 Centro de Ojos Quilmes. Todos los derechos reservados.</div>
      </div>
    </footer>  
  );
}
