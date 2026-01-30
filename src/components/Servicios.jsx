import { Link } from 'react-router-dom'
import '../css/servicios.css'
import SectionHeading from './SectionHeading'

const SERVICIOS_ITEMS = [
	{ label: 'Guardia', href: '/guardia', icon: 'bi-heart-pulse' },
	{ label: 'Estudios', href: '/estudios', icon: 'bi-binoculars' },
	{ label: 'Cirugías', href: '/cirugias', icon: 'bi-scissors' },
	{ label: 'Turnos', href: '/turnos', icon: 'bi-calendar-check' },
	{ label: 'Oftalmopediatría', href: '/oftalmopediatria', icon: 'bi-emoji-smile' },
	{ label: 'Estética', href: '/estetica', icon: 'bi-eye' },
]

export default function Servicios() {
	return (
		<section className="servicios" id="servicios" aria-label="Servicios">
			<div className="servicios__inner">
				<SectionHeading title="Servicios" />

				<div className="servicios__grid" role="list" aria-label="Lista de servicios">
					{SERVICIOS_ITEMS.map((item) => (											//devuelvo un item por cada servicio con .map
						<div key={item.href} className="servicios__item" role="listitem">
							<Link className="servicios__link" to={item.href} aria-label={item.label}>
								<div className="servicios__icon" aria-hidden="true">
									<i className={`bi ${item.icon}`} />
								</div>
								<div className="servicios__label">{item.label}</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
