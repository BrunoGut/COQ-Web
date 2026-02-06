import React from "react";
import BannerComponent from "./BannerComponent";
import residenciaImg from "../images/residencia/resi1.png";
import "../css/programaResidencia.css";
import SectionHeading from "./SectionHeading";
import centroImg from '../images/residencia/centro.jpg';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const UBICACION = [
  {
    key: "consultas",
    titulo: "Consultas, Estudios y Guardia",
    direccion: "Humberto Primo 298, Quilmes, Buenos Aires, Argentina",
    telefono: "(54.11) 5277-9745",
    coords: { lat: -34.7234476, lng: -58.2539529 },
  },
];

function ProgramaResidencia({
  lat = UBICACION[0].coords.lat,
  lng = UBICACION[0].coords.lng,
}) {
  return (
    <section className="programaResidencia">
      <BannerComponent
        className="programaResidencia__banner"
        title="Toda la información sobre nuestro programa de Residencia"
        urlImg={residenciaImg}
        ariaLabel="Residencia"
      />

      <div className="programaResidencia__inner">
        <SectionHeading title="PROGRAMA DE RESIDENCIA" />
      </div>

      <div className="info__grid__programa">
        <div className="info__div__programa">
          <h3 className="info__text__programa">Nombre del programa</h3>
          <p>
            Residencia en Oftalmología{" "}
            <span className="destacado_azul">Centro de Ojos Quilmes</span>
          </p>
        </div>
        <div className="info__div__programa">
          <h3 className="info__text__programa">Tipo de programa</h3>
          <p>
            Residencia de 1º nivel – Escuela Superior de Enseñanza Médica del
            Colegio de Médicos de la Provincia de Buenos Aires (CMPBA)
          </p>
        </div>
        <div className="info__div__programa">
          <h3 className="info__text__programa">Responsables</h3>
          <div className="div__programa__list">
            <ul className="info__programa__list">
              <li>
                <i className="bi bi-chevron-right" aria-hidden="true"></i>
                <span>
                  <span className="destacado_negro_2">
                    Dirección general y académica:{" "}
                  </span>
                  Dra. Virginia E. Zanutigh
                </span>
              </li>
              <li>
                <i className="bi bi-chevron-right" aria-hidden="true"></i>
                <span>
                  <span className="destacado_negro_2">
                    Dirección asistencial:{" "}
                  </span>
                  Dr. Gerardo C. Valvecchia
                </span>
              </li>
              <li>
                <i className="bi bi-chevron-right" aria-hidden="true"></i>
                <span>
                  <span className="destacado_negro_2">
                    Número de vacantes:{" "}
                  </span>
                  4 (Cuatro) 2 por la UBA / 2 por Colegio Medico de la Pcia. Bs.
                  As.
                </span>
              </li>
              <li>
                <i className="bi bi-chevron-right" aria-hidden="true"></i>
                <span>
                  <span className="destacado_negro_2">Duración en años: </span>3
                  (tres)
                </span>
              </li>
              <li>
                <i className="bi bi-chevron-right" aria-hidden="true"></i>
                <span>
                  <span className="destacado_negro_2">
                    Carga horaria total:{" "}
                  </span>
                  Lunes a viernes 8 horas diarias. Sábados 4 horas.
                </span>
              </li>
              <li>
                <i className="bi bi-chevron-right" aria-hidden="true"></i>
                <span>
                  <span className="destacado_negro_2">
                    Guardias nocturnas y feriados:{" "}
                  </span>{" "}
                  residentes de 1° año 6 por mes, residentes de 2° año 4 por
                  mes, residente de 3° año 2 por mes.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="info__div__programa">
          <h3 className="info__text__programa">Información general</h3>
          <p>
            El programa de formación de{" "}
            <span className="destacado_negro">
              Residencia en Oftalmología Centro de Ojos Quilmes
            </span>{" "}
            está avalado y fiscalizado por la{" "}
            <span className="destacado_negro">
              Escuela Superior de Enseñanza Médica
            </span>{" "}
            del{" "}
            <span className="destacado_negro">
              Colegio de Médicos de la Provincia de Buenos Aires
            </span>{" "}
            (Colegio de Médicos de la Provincia de Buenos Aires, Distrito II,
            Nota Nº 1488, 22 octubre 1996). El mismo adhiere a los lineamientos
            y regulaciones establecidos por la Escuela Superior de Enseñanza
            Médica del Colegio de Médicos de la Provincia de Buenos Aires, el
            Consejo Panamericano de Profesores Universitarios de Oftalmología de
            la Asociación Panamericana de Oftalmología, y a las directivas de
            Acreditación de Residencias de la Sociedad Argentina de Oftalmología
            y del Consejo Argentino de Oftalmología.
          </p>
        </div>
        <div className="info__div__programa">
          <h3 className="info__text__programa">
            Lugar de realización del programa asistencial y quirurgico
          </h3>
          <p>
            <span className="destacado_azul">Centro de Ojos Quilmes</span>, con sede en <span className="destacado_negro">Humberto Primo 298</span>, esquina
            Alvear, Quilmes, Buenos Aires.
          </p>
          <div className="mapa__img">
            <div className="img__programa">
            </div>
            <div className="mapa__programa">
              <MapContainer
                className="programaResidencia__leaflet"
                center={[lat, lng]}
                zoom={17}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {UBICACION.map((u) => (
                  <Marker key={u.key} position={[u.coords.lat, u.coords.lng]}>
                    {" "}
                    {/* Agregar marcadores para cada ubicación */}
                    <Popup>{u.titulo}</Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>

          <p></p>
        </div>
      </div>
    </section>
  );
}

export default ProgramaResidencia;
