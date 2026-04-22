import logoCoq from "../images/logo-coq.png";
import logoBlanco from "../images/logo-blanco.png";
import { useEffect, useRef, useState } from "react";
import "../css/navbar.css";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { NAV_LINKS } from "../constants/navLinks";
import {
  NAVBAR_MOBILE_COLORS,
  NAVBAR_MOBILE_COLOR_DEFAULT,
} from "../constants/navbarColors";

const isDesktop = () => window.matchMedia("(min-width: 992px)").matches;

const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/centrodeojosquilmes/",
    icon: "bi-instagram",
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/centrodeojos.quilmes/",
    icon: "bi-facebook",
    label: "Facebook",
  },
  {
    href: "https://www.linkedin.com/company/centro-de-ojos-quilmes/",
    icon: "bi-linkedin",
    label: "Linkedin",
  },
  {
    href: "https://www.youtube.com/@centrodeojosquilmes586",
    icon: "bi-youtube",
    label: "YouTube",
  },
];

const CTA_LINKS = [
  { href: "/contacto", label: "Contacto" },
  { href: "/turnos-online", label: "Turnos Online" },
];

const ChevronIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef(null);
  const itemRefs = useRef({});
  const closeTimer = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [navHeight, setNavHeight] = useState(0);

  const openDropdown = (label) => {
    clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const closeAll = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    closeAll();
    if (location.pathname !== "/") navigate("/");
    requestAnimationFrame(() =>
      window.scrollTo({ top: 0, left: 0, behavior: "auto" }),
    );
  };

  const getItemLeft = (label) => {
    const el = itemRefs.current[label];
    if (!el) return 0;
    const r = el.getBoundingClientRect();
    return r.left;
  };

  useEffect(() => {
    const measure = () =>
      navRef.current && setNavHeight(navRef.current.offsetHeight);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    const onPointer = (e) =>
      !navRef.current?.contains(e.target) && setIsOpen(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [isOpen]);

  const mobileBgColor = isOpen
    ? "#253965"
    : (NAVBAR_MOBILE_COLORS[location.pathname] ?? NAVBAR_MOBILE_COLOR_DEFAULT);

  return (
    <nav
      ref={navRef}
      className="navbar navbar-expand-lg navbar--coq"
      aria-label="Navegación principal"
      data-bs-theme="light"
      style={{ "--navbar-mobile-bg": mobileBgColor }}
    >
      <div className="container-fluid px-3 px-lg-4 py-1 navbar__mainRow">
        <div className="navbar__logoWrap">
          <Link
            className="navbar-brand navbar__logoLink"
            to="/"
            onClick={handleLogoClick}
          >
            <img
              className="navbar__logo"
              src={isOpen ? logoBlanco : logoCoq}
              alt="COQ"
            />
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="coqNavbar"
          aria-expanded={isOpen}
          aria-label="Abrir menú"
          onClick={() => setIsOpen((v) => !v)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={`collapse navbar-collapse${isOpen ? " show" : ""}`}
          id="coqNavbar"
        >
          <div className="navbar__content">
            <div className="navbar__top">
              <div className="navbar__ctas">
                {CTA_LINKS.map(({ href, label }, i) => (
                  <Link
                    key={href}
                    className={`navbar__ctaBtn${i === 1 ? " navbar__ctaBtn--primary" : ""}`}
                    to={href}
                    onClick={closeAll}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="navbar__bottom">
              <ul
                className="navbar-nav navbar__navMain mb-2 mb-lg-0"
                aria-label="Secciones"
              >
                {NAV_LINKS.map((link) => (
                  <li
                    key={link.href}
                    ref={(el) => {
                      if (link.submenu) itemRefs.current[link.label] = el;
                    }}
                    className={`nav-item navbar__item${link.submenu ? " navbar__item--hasSub" : ""}`}
                    onMouseEnter={() =>
                      isDesktop() && link.submenu && openDropdown(link.label)
                    }
                    onMouseLeave={() => isDesktop() && scheduleClose()}
                  >
                    <div className="navbar__itemRow">
                      <Link
                        className="nav-link navbar__link"
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>

                      {link.submenu && (
                        <button
                          className={`navbar__chevron${activeDropdown === link.label ? " is-active" : ""}`}
                          aria-label={`Expandir ${link.label}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveDropdown((prev) =>
                              prev === link.label ? null : link.label,
                            );
                          }}
                        >
                          <ChevronIcon />
                        </button>
                      )}
                    </div>

                    {link.submenu && (
                      <div
                        className={`dropdown-menu navbar__dropdown${activeDropdown === link.label ? " is-open" : ""}`}
                        aria-hidden={activeDropdown !== link.label}
                        style={{
                          top: navHeight + "px",
                          left: getItemLeft(link.label) + "px",
                        }}
                        onMouseEnter={() =>
                          isDesktop() && openDropdown(link.label)
                        }
                        onMouseLeave={() => isDesktop() && scheduleClose()}
                      >
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.href}
                            to={sublink.href}
                            onClick={closeAll}
                            className="dropdown-item navbar__dropdownItem"
                            /*
                                SI QUIERO ACTIVAR EL ESTILO ACTIVE EN LOS SUBENLACES, DESCOMENTAR ESTO Y COMENTAR LA CLASE DE ARRIBA
                              className={({ isActive }) =>
                              `dropdown-item navbar__dropdownItem${isActive ? ' active' : ''}`
                            }*/
                          >
                            {sublink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
                <li className="nav-item navbar__item navbar__mobileOnly">
                  <div className="navbar__itemRow">
                    <Link
                      className="nav-link navbar__link"
                      to="/contacto"
                      onClick={() => setIsOpen(false)}
                    >
                      Contacto
                    </Link>
                  </div>
                </li>

                <li className="nav-item navbar__item navbar__mobileOnly">
                  <div className="navbar__itemRow">
                    <Link
                      className="nav-link navbar__link"
                      to="/turnos-online"
                      onClick={() => setIsOpen(false)}
                    >
                      Turnos Online
                    </Link>
                  </div>
                </li>
              </ul>

              <div className="navbar__social">
                {SOCIAL_LINKS.map(({ href, icon, label }) => (
                  <a
                    key={label}
                    className="navbar__socialLink"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                  >
                    <i className={`bi ${icon}`} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
