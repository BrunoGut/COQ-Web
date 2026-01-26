import "../css/carruselPrepagas.css";

const imageModules = import.meta.glob("../images/prepagas/*.{png,jpg,jpeg,svg,webp}", {
	eager: true,
	import: "default",
});

const images = Object.entries(imageModules)
	.map(([path, src]) => ({
		path,
		src,
	}))
	.sort((a, b) => a.path.localeCompare(b.path));

function getAltFromPath(path) {
	const file = path.split("/").pop() ?? "";
	const base = file.replace(/\.[^.]+$/, "");
	return base.replace(/[-_]+/g, " ");
}

function getLogoKeyFromPath(path) {
	const file = path.split("/").pop() ?? "";
	return file.replace(/\.[^.]+$/, "").toLowerCase();
}

export default function CarruselPrepagas() {
	if (images.length === 0) return null;

	const minItems = 20;
	const repeatedImages = [];
	while (repeatedImages.length < minItems) {
		repeatedImages.push(...images);
	}

	return (
		<div className="carrusel-prepagas" aria-label="Carrusel de prepagas">
			<div className="carrusel-prepagas__inner">
				<div className="carrusel-prepagas__viewport">
					<div className="carrusel-prepagas__track" aria-hidden="true">
						<div className="carrusel-prepagas__group">
							{repeatedImages.map((img, index) => (
								<div
									className="carrusel-prepagas__item"
									key={`a-${img.path}-${index}`}
								>
									<img
										className="carrusel-prepagas__img"
										src={img.src}
										data-logo={getLogoKeyFromPath(img.path)}
										alt={getAltFromPath(img.path)}
										loading="eager"
										decoding="async"
									/>
								</div>
							))}
						</div>
						<div className="carrusel-prepagas__group">
							{repeatedImages.map((img, index) => (
								<div
									className="carrusel-prepagas__item"
									key={`b-${img.path}-${index}`}
								>
									<img
										className="carrusel-prepagas__img"
										src={img.src}
										data-logo={getLogoKeyFromPath(img.path)}
										alt={getAltFromPath(img.path)}
										loading="eager"
										decoding="async"
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
