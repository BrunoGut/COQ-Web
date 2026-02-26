import logoCoq from '../images/logo-coq.png'
import { useEffect, useRef, useState } from 'react'
import '../css/navbar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { NAV_LINKS } from '../constants/navLinks'

// Breakpoint de Bootstrap lg (992px) — por encima es desktop
const isDesktop = () => window.matchMedia('(min-width: 992px)').matches

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const navRef = useRef(null)
  const [navHeight, setNavHeight] = useState(0)
  const closeTimer = useRef(null)
  const itemRefs = useRef({})

  const handleLogoClick = (event) => {
    event.preventDefault()
    setActiveDropdown(null)
    setIsOpen(false)

    if (location.pathname !== '/') {
      navigate('/')
    }

    if (typeof window !== 'undefined') {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      })
    }
  }

  const openDropdown = (label) => {
    clearTimeout(closeTimer.current)
    setActiveDropdown(label)
  }

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120)
  }

  const getItemLeft = (label) => {
    const el = itemRefs.current[label]
    if (!el) return 0
    const rect = el.getBoundingClientRect()
    return rect.left + rect.width / 2
  }

  const handleMouseEnter = (link) => {
    if (isDesktop() && link.submenu) openDropdown(link.label)
  }

  const handleMouseLeave = () => {
    if (isDesktop()) scheduleClose()
  }

  const handleChevronClick = (e, link) => {
    e.stopPropagation()
    setActiveDropdown(prev => prev === link.label ? null : link.label)
  }

  useEffect(() => {
    const measure = () => {
      if (navRef.current) setNavHeight(navRef.current.offsetHeight)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    const onPointerDown = (event) => {
      const navEl = navRef.current
      if (!navEl) return
      if (!navEl.contains(event.target)) setIsOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [isOpen])

  return (
    <nav
      ref={navRef}
      className="navbar navbar-expand-lg navbar--coq"
      aria-label="Navegación principal"
      data-bs-theme="light"
    >
      <div className="container-fluid px-3 px-lg-4 py-1">
        <div className="navbar__logoWrap">
          <Link className="navbar-brand navbar__logoLink" to="/" onClick={handleLogoClick}>
            <img className="navbar__logo" src={logoCoq} alt="COQ" />
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="coqNavbar"
          aria-expanded={isOpen}
          aria-label="Abrir menú"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={`collapse navbar-collapse justify-content-end${isOpen ? ' show' : ''}`}
          id="coqNavbar"
        >
          <ul className="navbar-nav mb-2 mb-lg-0" aria-label="Secciones">
            {NAV_LINKS.map((link) => (
              <li 
                key={link.href}
                ref={(el) => { if (link.submenu) itemRefs.current[link.label] = el }}
                className={`nav-item navbar__item${link.submenu ? ' navbar__item--hasSub' : ''}`}
                onMouseEnter={() => handleMouseEnter(link)}
                onMouseLeave={handleMouseLeave}
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
                      className={`navbar__chevron${activeDropdown === link.label ? ' is-active' : ''}`}
                      aria-label={`Expandir ${link.label}`}
                      onClick={(e) => handleChevronClick(e, link)}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                  )}
                </div>
                
                {link.submenu && (
                  <div
                    className={
                      `dropdown-menu navbar__dropdown${activeDropdown === link.label ? ' is-open' : ''}`
                    }
                    aria-hidden={activeDropdown !== link.label}
                    style={{ top: navHeight + 'px', left: getItemLeft(link.label) + 'px' }}
                    onMouseEnter={() => isDesktop() && openDropdown(link.label)}
                    onMouseLeave={() => isDesktop() && scheduleClose()}
                  >
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.href}
                        className="dropdown-item navbar__dropdownItem"
                        to={sublink.href}
                        onClick={() => { setActiveDropdown(null); setIsOpen(false) }}
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="navbar__social d-none d-lg-flex" aria-label="Redes sociales">
            <a
              className="navbar__socialLink"
              href="https://www.instagram.com/centrodeojosquilmes/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram" aria-hidden="true" />
            </a>
            <a
              className="navbar__socialLink"
              href="https://www.facebook.com/centrodeojos.quilmes/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <i className="bi bi-facebook" aria-hidden="true" />
            </a>
            <a
              className="navbar__socialLink"
              href="https://www.linkedin.com/company/centro-de-ojos-quilmes/"
              target="_blank"
              rel="noreferrer"
              aria-label="Linkedin"
            >
              <i className="bi bi-linkedin" aria-hidden="true" />
            </a>
            <a
              className="navbar__socialLink"
              href="https://www.youtube.com/@centrodeojosquilmes586"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <i className="bi bi-youtube" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}