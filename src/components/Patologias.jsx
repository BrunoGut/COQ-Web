import '../css/patologias.css'
import imageSrc from '../images/cornea.jpeg'

const PATOLOGIAS_ITEMS = [
	{ label: 'Cataratas', href: '#cataratas', imageSrc: new URL('../images/cataratas.png', import.meta.url).href },
	{ label: 'Glaucoma', href: '#glaucoma', imageSrc: new URL('../images/glaucoma.jpeg', import.meta.url).href },
	{ label: 'Retina', href: '#retina', imageSrc: new URL('../images/retina.jpeg', import.meta.url).href },	
	{ label: 'Cornea', href: '#cornea', imageSrc: new URL('../images/cornea.jpeg', import.meta.url).href },
    ]

export default function Patologias() {
    return(
		<section className="patologias" id="patologias" aria-label="Patologías">
			<div className="patologias__inner">
				<div className="patologias__heading" aria-hidden="true">
					<span className="patologias__line" />
					<h2 className="patologias__title">¿QUÉ TRATAMOS?</h2>
					<span className="patologias__line" />
				</div>

				<div className="slide-container">
					<div className='slide-content'>
						<div className="card-wrapper">
							<div className="card">
								<div className="image-content">
									<span className="overlay"></span>

									<div className="card-image">
										<img src={imageSrc} alt="Patologias" className="card-img"/>
									</div>
								</div>
								<div className="card-content">
									<h2 className="name">Patologias</h2>
									<p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta nobis vel molestias in iusto veniam eius praesentium incidunt, quisquam porro doloremque soluta nulla ullam cumque nemo ducimus! Quod, natus possimus?</p>
									<button className="button">Ver más</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}


/*
<section className="patologias">
            <div className="patologias__inner">
				<div className="patologias__heading" aria-hidden="true">
					<span className="patologias__line" />
					<h2 className="patologias__title">¿QUÉ TRATAMOS?</h2>
					<span className="patologias__line" />
				</div>

                <div className="patologias__grid" role="list" aria-label="Lista de patologías">
					{PATOLOGIAS_ITEMS.map((item) => (											//devuelvo un item por cada patología con .map
						<div key={item.href} className="patologias__item" role="listitem">
							<a className="patologias__link" href={item.href} aria-label={item.label}>
								<img className="patologias__cornerImage" src={item.imageSrc} alt="" aria-hidden="true" />
								<div className="patologias__label">{item.label}</div>
							</a>
						</div>
					))}
				</div>
            </div>           
        </section>
*/