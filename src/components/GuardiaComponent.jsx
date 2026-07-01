import { useState } from "react";
import Modal from "./Modal";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "../css/guardiaComponent.css";
import GUARDIA from "./data/GuardiaArray";

export default function GuardiaComponent() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <section className="guardia">
        <div className="guardia__info">
          <div className="titulo-subrayado">
            <h3 className="guardia__horarios-titulo">Horarios de atención</h3>
            <div className="separador-horarios" />
          </div>
          <div className="guardia__horarios">
            <div className="guardia__horario-item">
              <span className="guardia__horario-dia">Lunes a viernes</span>
              <span className="guardia__horario-hora">De 08:00h a 19:30h</span>
            </div>
            <div className="guardia__horario-divider" />
            <div className="guardia__horario-item">
              <span className="guardia__horario-dia">Sábados</span>
              <span className="guardia__horario-hora">De 08:00h a 17:30h</span>
            </div>
            <div className="guardia__horario-divider" />
            <div className="guardia__horario-item">
              <span className="guardia__horario-dia">Domingos y feriados</span>
              <span className="guardia__horario-hora">De 10:00h a 13:00h</span>
            </div>
          </div>

          <p className="guardia__aviso">
            <strong>
              Nuestro servicio de Guardia está destinado exclusivamente a
              urgencias oftalmológicas.
            </strong>{" "}
            Para controles generales y recetas de anteojos, por favor solicite
            un turno en nuestros consultorios.
          </p>
        </div>
        <div className="principales__urgencias">
          <button
            className="principales__urgencias-boton"
            onClick={() => setModalOpen(true)}
          >
            Principales urgencias
          </button>
        </div>
      </section>

      <section className="guardia__mapa-section">
        <div className="guardia__mapa-card">
          <div className="guardia__mapa-grid">
            <div className="guardia__mapa-info">
              <h3 className="guardia__mapa-titulo">Ubicación</h3>
              <p className="guardia__mapa-direccion">
                Humberto Primo 298, Quilmes.
              </p>
            </div>
            <div className="guardia__mapa-frame">
              <MapContainer
                className="guardia__mapa-leaflet"
                center={[-34.7234476, -58.2539529]}
                zoom={17}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[-34.7234476, -58.2539529]}>
                  <Popup>
                    Humberto Primo 298 — Consultas, Estudios y Guardia
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={modalOpen}
        closeModal={() => setModalOpen(false)}
        title="Principales Urgencias Oftalmológicas"
      >
        <div className="ingresoResidencia__modal-contenido">
          {GUARDIA.map((item) => (
            <div key={item.id} style={{ marginBottom: "1rem" }}>
              <h4
                style={{
                  marginBottom: "0.5rem",
                  fontSize: "22px",
                  color: "#343232",
                }}
              >
                {item.title}
              </h4>
              {item.descripcion}
              {item.sections.map((section, i) => (
                <div key={i} style={{ marginTop: "0.75rem" }}>
                  <strong>{section.titulo}</strong>
                  {section.texto}
                </div>
              ))}
            </div>
          ))}
          <button
            className="ingresoResidencia__modal-btn-cerrar"
            onClick={() => setModalOpen(false)}
          >
            Cerrar
          </button>
        </div>
      </Modal>
    </>
  );
}
