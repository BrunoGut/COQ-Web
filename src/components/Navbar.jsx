import logoCoq from '../images/logo-coq.png'
import { useEffect, useRef, useState } from 'react'
import '../css/navbar.css'

const NAV_LINKS = [
  { label: 'Nosotros', href: 'nosotros' },
  { label: 'Paciente', href: '#paciente' },
  { label: 'Residencia', href: '#residencia' },
  { label: 'Prensa', href: '#prensa' },
  { label: 'Consultas Virtuales', href: '#consultas-virtuales' },
  { label: 'Turnos Online', href: '#turnos-online' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef(null)

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
          <a className="navbar-brand navbar__logoLink" href="inicio">
            <img className="navbar__logo" src={logoCoq} alt="COQ" />
          </a>
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
              <li key={link.href} className="nav-item navbar__item">
                <a
                  className="nav-link navbar__link"
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}