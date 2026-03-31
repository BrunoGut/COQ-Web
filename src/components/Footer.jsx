import { Link, useLocation, useNavigate } from "react-router-dom";
import "../css/footer.css";
import logoCq from "../images/logo-coq-footer-3.png";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = (event) => {
    event.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
    }

    if (typeof window !== "undefined") {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="row gy-4">
          <div className="col-12 col-lg-3">
            <div className="footer-brand">
              <Link className="footer__logoLink" to="/" onClick={handleLogoClick}>
                <img className="footer-logo" src={logoCq} alt="COQ" />
              </Link>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="row gy-3">
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="footer-title">Nosotros</div>
                <ul className="footer-links list-unstyled mb-0">
                  <li>
                    <Link to="/nosotros#quienes-somos">Quiénes somos</Link>
                  </li>
                  <li>
                    <Link to="/nosotros#donde-estamos">Dónde estamos</Link>
                  </li>
                </ul>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <div className="footer-title">Atención <br />al paciente</div>
                <ul className="footer-links list-unstyled mb-0">
                  <li>
                    <Link to="/que-tratamos">Qué tratamos</Link>
                  </li>
                  <li>
                    <Link to="/staff-medico">Staff médico</Link>
                  </li>
                  <li>
                    <Link to="/#servicios">Servicios</Link>
                  </li>
                  <li>
                    <Link to="/coberturas">Coberturas médicas</Link>
                  </li>
                </ul>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <div className="footer-title">Residencia</div>
                <ul className="footer-links list-unstyled mb-0">
                  <li>
                    <Link to="/residencia/#programaResidencia">Programa de Residencia</Link>
                  </li>
                  <li>
                    <Link to="/residencia/#ingreso-residencia">Ingreso a Residencia</Link>
                  </li> 
                </ul>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <div className="footer-title">Más</div>
                <ul className="footer-links list-unstyled mb-0">
                  <li>
                    <Link to="/">Inicio</Link>
                  </li>
                  <li>
                    <Link to="/prensa">Prensa</Link>
                  </li>
                  <li>
                    <Link to="/contacto">Contacto</Link>
                  </li>
                  <li>
                    <Link to="/turnos-online">Turnos Online</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-3">
            <div className="footer-title">Contacto</div>
            <a className="footer-contact" href="mailto:info@centrodeojosquilmes.com.ar">
              info@centrodeojosquilmes.com.ar
            </a>

            <div className="footer-title mt-3">Redes</div>
            <div className="footer-social" aria-label="Redes sociales">
              <a className="social-link" href="https://www.instagram.com/centrodeojosquilmes/" aria-label="Instagram">
                <i className="bi bi-instagram" aria-hidden="true" />
              </a>
              <a className="social-link" href="https://www.facebook.com/centrodeojos.quilmes/" aria-label="Facebook">
                <i className="bi bi-facebook" aria-hidden="true" />
              </a>
              <a className="social-link" href="https://www.linkedin.com/company/centro-de-ojos-quilmes/" aria-label="Linkedin">
                <i className="bi bi-linkedin" aria-hidden="true" />
              </a>
              <a className="social-link" href="https://www.youtube.com/@centrodeojosquilmes586" aria-label="YouTube">
                <i className="bi bi-youtube" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider" />
      </div>
      <div className="footer-bottom">© 2026 Centro de Ojos Quilmes. Todos los derechos reservados.</div>
    </footer>  
  );
}
