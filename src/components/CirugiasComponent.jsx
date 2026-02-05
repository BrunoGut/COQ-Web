import React, { useDeferredValue, useEffect, useState } from 'react'
import CIRUGIAS from './data/CirugiasArray'
import '../css/cirugiasComponent.css'
import SectionHeading from './SectionHeading'
import BannerComponent from './BannerComponent'
import cirugiasBannerImg from '../images/cirugias/cirugia.jpg'
import Modal from './Modal'

const normalize = (value) => value.trim().toLowerCase() // Normaliza el texto para búsquedas

function CirugiasComponent() {
    const [search, setSearch] = useState('')
    const deferredSearch = useDeferredValue(search) //retarda el valor de búsqueda para optimizar el rendimiento
    const [query, setQuery] = useState('')
    const [isFading, setIsFading] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedCirugia, setSelectedCirugia] = useState(null)

    const openModal = (cirugia) => {
        setSelectedCirugia(cirugia)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedCirugia(null)
    }

    useEffect(() => {
        const nextQuery = normalize(deferredSearch)
        if (nextQuery === query) return

        setIsFading(true)
        const timeoutId = setTimeout(() => {
            setQuery(nextQuery)
            setIsFading(false)
        }, 100)

        return () => clearTimeout(timeoutId)
    }, [deferredSearch, query])

    const cirugiasFiltradas = query
        ? CIRUGIAS.filter((item) => item.title.toLowerCase().includes(query))
        : CIRUGIAS

    const handleItemKeyDown = (event, item) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            openModal(item)
        }
    }
    
  return (
    <section className="cirugias">
        <div className="cirugias__inner">
            <SectionHeading title="Cirugías" />
        </div>

        <BannerComponent
            className="cirugias__banner"
            title="Busca todas nuestras cirugías"
            urlImg={cirugiasBannerImg}
            ariaLabel="Cirugías"
        >
            <a href="https://wa.me/1165132161" target="_blank" rel="noopener noreferrer">
                <button className="boton-cirugia" type='button'>
                <i className="bi bi-calendar-check-fill" aria-hidden="true" />
                <span>SOLICITA TU TURNO</span>
                </button>
            </a>
        </BannerComponent>
        <div className="cirugias__search" role="search">
            <span className="cirugias__searchIcon" aria-hidden="true">Q</span>
            <input
                className="cirugias__searchInput"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar en el listado"
                aria-label="Buscar cirugías"
            />
        </div>

        <ul className={`cirugias__grid${isFading ? ' cirugias__grid--fading' : ''}`}>
            {cirugiasFiltradas.map((item) => (
                <li
                    className="cirugias__item"
                    key={item.id}
                    role="button"
                    tabIndex={0}
                    aria-haspopup="dialog"
                    onClick={() => openModal(item)}
                    onKeyDown={(event) => handleItemKeyDown(event, item)}
                >
                    {item.title}
                </li>
            ))}
        </ul>

        <Modal isOpen={isModalOpen} closeModal={closeModal}>
            <div className="cirugiaModal__content">
                <h2 className="cirugiaModal__title">Solicitar turno para esta cirugía</h2>
                <p className="cirugiaModal__name">{selectedCirugia?.title}</p>
                <a href="https://wa.me/1165132161" target="_blank" rel="noopener noreferrer">
                <button className="boton-cirugia" type='button'>
                <i className="bi bi-calendar-check-fill" aria-hidden="true" />
                <span>CLICK ACÁ</span>
            </button>
            </a>
            </div>
        </Modal>
    </section>
  )
}

export default CirugiasComponent