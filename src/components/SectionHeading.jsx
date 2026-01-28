import '../css/sectionHeading.css'

export default function SectionHeading({ title, ariaHidden = true, className = '' }) {
	return (
		<div className={`sectionHeading ${className}`.trim()} aria-hidden={ariaHidden}>
			<span className="sectionHeading__line" />
			<h2 className="sectionHeading__title">{title}</h2>
			<span className="sectionHeading__line" />
		</div>
	)
}
