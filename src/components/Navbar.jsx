import logoCoq from '../images/logo-coq.png'
import { useEffect, useRef, useState } from 'react'
import '../css/navbar.css'
import { Link } from 'react-router-dom'

const NAV_LINKS = [
  { 
    label: 'Nosotros', 
    href: '/nosotros',
    submenu: [
      { label: 'Quienes somos', href: '/nosotros#quienes-somos' },
      { label: 'Donde estamos', href: '/nosotros#donde-estamos' }
    ]
  },
  { 
    label: 'Paciente', 
    href: '/paciente',
    submenu: [
      { label: '¿Qué tratamos?', href: '/paciente#que-tratamos' },
      { label: 'Staff médico', href: '/staff-medico' },
      { label: 'Servicios', href: '/paciente#servicios' },
      { label: 'Cobertura médica', href: '/paciente#cobertura-medica' }
    ]
  },
  { label: 'Residencia', href: '/residencia' },
  { label: 'Prensa', href: '/prensa' },
  { label: 'Consultas Virtuales', href: '/consultas-virtuales' },
  { label: 'Turnos Online', href: '/turnos-online' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const navRef = useRef(null)
  const [navHeight, setNavHeight] = useState(0)
  const closeTimer = useRef(null)

  const openDropdown = (label) => {
    clearTimeout(closeTimer.current)
    setActiveDropdown(label)
  }

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120)
  }

  useEffect(() => {
    const measure = () => {
      if (navRef.current) setNavHeight(navRef.current.getBoundingClientRect().bottom)
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
          <Link className="navbar-brand navbar__logoLink" to="/">
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
                className={`nav-item navbar__item${link.submenu ? ' navbar__item--hasSub' : ''}`}
                onMouseEnter={() => link.submenu && openDropdown(link.label)}
                onMouseLeave={scheduleClose}
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
                      onClick={(e) => {
                        e.stopPropagation()
                        setActiveDropdown(prev => prev === link.label ? null : link.label)
                      }}
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
                    style={{ top: navHeight + 'px' }}
                    onMouseEnter={() => openDropdown(link.label)}
                    onMouseLeave={scheduleClose}
                  >
                    {(() => {
                      const mid = Math.ceil(link.submenu.length / 2)
                      const colA = link.submenu.slice(0, mid)
                      const colB = link.submenu.slice(mid)

                      return (
                        <div className="navbar__dropdownGrid">
                          <div className="navbar__dropdownLeft">
                            <div className="navbar__dropdownHeading">{link.label}</div>
                          </div>

                          <div className="navbar__dropdownRight">
                            <div className="navbar__dropdownCols">
                              <div className="navbar__dropdownCol">
                                {colA.map((sublink) => (
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

                              {colB.length > 0 && (
                                <div className="navbar__dropdownCol">
                                  {colB.map((sublink) => (
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
                            </div>
                          </div>
                        </div>
                      )
                    })()}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}