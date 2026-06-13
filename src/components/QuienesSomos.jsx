import { Link } from 'react-router-dom'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { useEffect } from 'react'
import L from 'leaflet'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import '../css/quienesSomos.css'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

const UBICACIONES = [
  { key: 'consultas',    titulo: 'Consultas, estudios y guardia', direccion: 'Humberto Primo 298, Quilmes.', coords: { lat: -34.7234476,          lng: -58.2539529 } },
  { key: 'microcirugia', titulo: 'Microcirugía y Láser',          direccion: 'Alvear 764, Quilmes.',         coords: { lat: -34.7236182,          lng: -58.2534434 } },
  { key: 'consultorios', titulo: 'Consultorios Mitre',            direccion: 'Mitre 803, Quilmes.',          coords: { lat: -34.723958326538046,  lng: -58.25217090378334 } },
]

function MapResizer() {
  const map = useMap()
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize()
      const bounds = UBICACIONES.map(u => [u.coords.lat, u.coords.lng])
      map.fitBounds(bounds, { padding: [30, 30] })
    }, 300)
  }, [map])
  return null
}

export default function QuienesSomos() {
  return (
    <>
      <section className="qs__info" id="quienes-somos">
        <div className="qs__inner">

          <div className="qs__bloque">
            <h3 className="qs__bloque-titulo">Trayectoria y compromiso</h3>
            <p className="qs__bloque-texto">
              Fundado con la misión de redefinir los estándares de la oftalmología en la región,
              Centro de Ojos Quilmes nació bajo una premisa innegociable:{" "}
              <strong>la excelencia médica basada en la ultra-especialización y la tecnología de alta complejidad.</strong>{" "}
              Lo que comenzó como la visión de cuatro socios fundadores, se ha consolidado hoy
              en una institución referente, cuyo directorio integra a los especialistas más
              reconocidos del país.
            </p>
          </div>

          <div className="qs__bloque">
            <h3 className="qs__bloque-titulo">Liderazgo en microcirugía y alta complejidad</h3>
            <p className="qs__bloque-texto">
              Como <strong>centro líder en microcirugía y tecnología láser</strong>, contamos con <br /> una
              infraestructura diseñada para el abordaje integral de patologías oculares.
            </p>
          </div>

          <div className="qs__stats">
            <div className="qs__stat">
              <span className="qs__stat-numero">+12.000</span>
              <span className="qs__stat-label">consultas mensuales</span>
            </div>
            <div className="qs__stat-divider" />
            <div className="qs__stat">
              <span className="qs__stat-numero">+500</span>
              <span className="qs__stat-label">cirugias mensuales</span>
            </div>
          </div>

          <div className="qs__bloque">
            <h3 className="qs__bloque-titulo">Excelencia académica y formación contínua</h3>
            <p className="qs__bloque-texto">
              Nuestra contribución a la medicina trasciende la atención clínica. Desde hace más de 20 años,
              desarrollamos un prestigioso <strong>Programa de Residencias</strong>, formando a las nuevas
              generaciones de profesionales bajo los mismos valores de rigor científico y compromiso ético
              que nos dieron origen.
            </p>
            <Link to="/residencia" className="qs__link">Ver Programa de Residencias</Link>
          </div>

          <div className="qs__bloque">
            <h3 className="qs__bloque-titulo">Garantía y habilitaciones</h3>
            <p className="qs__bloque-texto">
              La seguridad de nuestros pacientes es el eje de nuestra actividad. Centro de Ojos Quilmes
              cuenta con la <strong>acreditación del Ministerio de Salud de la Provincia de Buenos Aires</strong>{" "}
              y está plenamente habilitado por <strong>C.U.C.A.I.B.A. como Centro de Trasplantes de Córnea</strong>,
              cumpliendo con los más estrictos estándares regulatorios nacionales.
            </p>
          </div>

        </div>
      </section>

      <section className="qs__mapa-section" id="donde-estamos">
        <div className="qs__mapa-card">
          <div className="qs__mapa-grid">
            <h3 className="qs__mapa-titulo">Ubicación</h3>
            <div className="qs__mapa-info">
              {UBICACIONES.map((u) => (
                <div key={u.key} className="qs__mapa-block">
                  <span className="qs__mapa-subtitulo">{u.titulo}</span>
                  <span className="qs__mapa-direccion">{u.direccion}</span>
                </div>
              ))}
            </div>
            <div className="qs__mapa-frame">
              <MapContainer
                className="qs__mapa-leaflet"
                center={[UBICACIONES[0].coords.lat, UBICACIONES[0].coords.lng]}
                zoom={17}
                style={{ height: '350px', width: '100%' }}
              >
                <MapResizer />
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {UBICACIONES.map((u) => (
                  <Marker key={u.key} position={[u.coords.lat, u.coords.lng]}>
                    <Popup>{u.titulo}</Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

