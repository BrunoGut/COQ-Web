import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

import '../css/mapa.css'
import SectionHeading from './SectionHeading'

// Fix: Leaflet marker icons no se ven bien en Vite/React sin setear URLs.
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

const UBICACIONES = [
  {
    key: 'consultas',
    titulo: 'Consultas, Estudios y Guardia',
    direccion: 'Humberto Primo 298, Quilmes, Buenos Aires, Argentina',
    telefono: '(54.11) 5277-9745',
    coords: { lat: -34.7234476, lng: -58.2539529 },
  },
  {
    key: 'microcirugia',
    titulo: 'Microcirugía y Láser',
    direccion: 'Alvear 764, Quilmes, Buenos Aires, Argentina',
    coords: { lat: -34.7236182, lng: -58.2534434 },
  },
]

const DEFAULT_COORDS = UBICACIONES[0].coords //coordenadas por defecto (Humberto Primo 298)

export default function Mapa({ lat = DEFAULT_COORDS.lat, lng = DEFAULT_COORDS.lng }) {
  return (
    <section className="mapa" aria-label="Ubicación">
      <div className="mapa__inner">
        <SectionHeading title="¿DÓNDE ESTAMOS?" />

        <div className="mapa__grid">
          <div className="mapa__info">
            {UBICACIONES.map((u) => ( // Iterar sobre las ubicaciones para mostrar la info
              <div key={u.key} className="mapa__block">
                <h3 className="mapa__blockTitle">{u.titulo}</h3>
                <p className="mapa__text">{u.direccion}</p>
                {u.telefono ? <p className="mapa__text">{u.telefono}</p> : null}
              </div>
            ))}
          </div>

          <MapContainer className="mapa__leaflet" center={[lat, lng]} zoom={15}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {UBICACIONES.map((u) => (
              <Marker key={u.key} position={[u.coords.lat, u.coords.lng]}>  {/* Agregar marcadores para cada ubicación */}
                <Popup>{u.titulo}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  )
}
