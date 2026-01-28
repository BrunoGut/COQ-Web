import SectionHeading from "./SectionHeading"
import '../css/guardiaComponent.css'
import Modal from "./Modal"
import { useState } from "react"

export default function GuardiaComponent() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    return (
        <section className="guardia">
            <div className="guardia__inner">
                <SectionHeading title="SERVICIOS"/>
            </div>
            <div className="guardia__banner" aria-label="Atención de guardia">
                <div className="guardia__bannerInner">
                    <h3 className="guardia__bannerTitle">Atención de guardia</h3>
                </div>
            </div>
            <div className="info__grid">
                <div className="info__div">
                    <h2 className="info__text">
                        Servicio de guardia para urgencias del paciente
                    </h2>
                    <p>
                        Teléfono de contacto: (011) 4255-3120
                    </p>
                </div>
                <div className="info__div">
                    <h2 className="info__text">
                        Horarios:
                    </h2>
                    <p>
                        Lunes a viernes de 8:00 a 20:00 hs.
                        Sabados de 8:00 a 18:00 hs.
                        Domingos y feriados de 10:00 a 13:00 hs.
                    </p>
                </div>
                <div className="info__div">
                    <h2 className="info__text">¿Donde estamos?</h2>
                    <p>
                        Humberto Primo 298, Quilmes, Buenos Aires, Argentina.
                    </p>
                </div>
            </div>
            <div className="causas__banner" aria-label="Causas de consulta">
                <div className="causas__bannerInner">
                    <h3 className="causas__bannerTitle">Posibles causas</h3>
                    <div className="card-button" onClick={() => setIsModalOpen(true)}>Saber más</div>
                    <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
                </div>
            </div>
        </section>
    )
}