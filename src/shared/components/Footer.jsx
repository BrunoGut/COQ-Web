import { Link, useLocation, useNavigate } from "react-router-dom";
import "../css/footer.css";
import logoCq from "../../assets/images/logo-footer-blanco.png";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHashLink = (e, href) => {
    const [path, hash] = href.split("#");
    const currentPath = location.pathname === "/" ? "/" : location.pathname;
    const targetPath = path === "" ? "/" : path;
    if (hash && currentPath === targetPath) {
      e.preventDefault();
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        <div className="footer-main">

          <div className="footer-main__logo">
            <div className="footer-brand">
              <Link className="footer__logoLink" to="/" onClick={handleLogoClick}>
                <img className="footer-logo" src={logoCq} alt="COQ" />
              </Link>
            </div>
          </div>

          <div className="footer-main__cols">
            <div className="footer-col">
              <div className="footer-title">Nosotros</div>
              <ul className="footer-links list-unstyled mb-0">
                <li><Link to="/nosotros#quienes-somos" onClick={(e) => handleHashLink(e, "/nosotros#quienes-somos")}>Nuestra historia</Link></li>
                <li><Link to="/nosotros#donde-estamos" onClick={(e) => handleHashLink(e, "/nosotros#donde-estamos")}>Ubicación</Link></li>
                <li><Link to="/staff-medico">Cuerpo médico</Link></li>
                <li><Link to="/prensa">Prensa</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <div className="footer-title">Servicios</div>
              <ul className="footer-links list-unstyled mb-0">
                <li><Link to="/que-tratamos">Especialidades</Link></li>
                <li><Link to="/estudios">Estudios</Link></li>
                <li><Link to="/coberturas">Cobertura médica</Link></li>
                <li><Link to="/guardia" className="footer-guardia">GUARDIA</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <div className="footer-title">Residencia</div>
              <ul className="footer-links list-unstyled mb-0">
                <li><Link to="/residencia#programa-residencias" onClick={(e) => handleHashLink(e, "/residencia#programa-residencias")}>Programa de residencia</Link></li>
                <li><Link to="/residencia#ingreso-residencia" onClick={(e) => handleHashLink(e, "/residencia#ingreso-residencia")}>Ingreso a residencia</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <div className="footer-title">Contacto</div>
              <ul className="footer-links footer-contact-list list-unstyled mb-0">
                <li>
                  <a
                    className="footer-contact-item"
                    href="https://maps.google.com/?q=Humberto+Primo+298,+Quilmes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-geo-alt-fill footer-contact-icon" aria-hidden="true" />
                    <span>Humberto Primo 298, Quilmes</span>
                  </a>
                </li>
                <li>
                  <a className="footer-contact-item" href="tel:+541122062650">
                    <i className="bi bi-telephone-fill footer-contact-icon" aria-hidden="true" />
                    <span>+54 11 2206-2650</span>
                  </a>
                </li>
                <li>
                  <a
                    className="footer-contact-item"
                    href="https://wa.me/5491138721437"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-whatsapp footer-contact-icon" aria-hidden="true" />
                    <span>+54 11 3872-1437</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <div className="footer-col footer-col--social">
            <div className="footer-title">Seguínos</div>
            <div className="footer-social" aria-label="Redes sociales">
              <a className="social-link" href="https://www.youtube.com/@centrodeojosquilmes586" aria-label="YouTube">
                <i className="bi bi-youtube" aria-hidden="true" />
              </a>
              <a className="social-link" href="https://www.instagram.com/centrodeojosquilmes/" aria-label="Instagram">
                <i className="bi bi-instagram" aria-hidden="true" />
              </a>
              <a className="social-link" href="https://www.facebook.com/centrodeojos.quilmes/" aria-label="Facebook">
                <i className="bi bi-facebook" aria-hidden="true" />
              </a>
              <a className="social-link" href="https://www.linkedin.com/company/centro-de-ojos-quilmes/" aria-label="Linkedin">
                <i className="bi bi-linkedin" aria-hidden="true" />
              </a>
            </div>
          </div>

        </div>


      </div>
      <div className="footer-bottom">© 2026 Centro de Ojos Quilmes. Todos los derechos reservados.</div>
    </footer>  
  );
}
