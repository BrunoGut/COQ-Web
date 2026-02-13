import React, { useState } from 'react'
import SectionHeading from './SectionHeading'
import BannerComponent from './BannerComponent'
import Modal from './Modal'
import consultasImg from '../images/contacto/contacto2.png'
import '../css/consultasVirtuales.css'

function ConsultasVirtuales() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="consultas-virtuales">
        <BannerComponent 
            className="turnos__banner"
            title="Para consultas virtuales, hace clck en el siguiente botón"
            urlImg={consultasImg}
            ariaLabel="Consultas virtuales"
        >
            <button className="prepagas__button" onClick={() => setIsModalOpen(true)}>CLICK ACÁ</button>
        </BannerComponent>

        <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
            <h2>¿Sabías que puedes realizar consultas virtuales?</h2>
            <p>A través de WhatsApp, coordinamos una atención personalizada para resolver tus dudas y evaluar tu caso. <br />
            Importante: No siempre puede resolverse de manera virtual. Dependiendo del tipo de evaluación necesaria, podríamos sugerir una consulta presencial para garantizar el mejor cuidado de tu salud visual. <br />
            ¡Escribinos ahora haciendo click acá y te ayudamos a coordinar tu consulta!
            </p>
        </Modal>
    </section>
  )
}

export default ConsultasVirtuales