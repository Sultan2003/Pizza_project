import React, { useState } from "react";
import styles from "./Filials.module.scss";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import filialsData from "../../components/FilialsData/FilialsData";

const Filials = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className={styles.filialsContainer}>
      <div className={styles.filialsMainHeader}>
        <h1>Филиалы</h1>
        <div className={styles.filialsHeader}>
          <button
            className={!showMap ? styles.active : ""}
            onClick={() => setShowMap(false)}
          >
            Список
          </button>
          <button
            className={showMap ? styles.active : ""}
            onClick={() => setShowMap(true)}
          >
            Карта
          </button>
        </div>
      </div>
      <div className={styles.filialsContent}>
        {showMap ? (
          <div className={styles.mapContainer}>
            <MapContainer
              center={[41.311081, 69.240562]} // Tashkent's latitude and longitude
              zoom={12}
              style={{ height: "500px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {filialsData.map((filial, index) => (
                <Marker
                  key={index}
                  position={filial.coordinates} // Add `coordinates` field to filialsData.js
                >
                  <Popup>
                    <strong>{filial.name}</strong>
                    <br />
                    {filial.address}
                    <br />
                    {filial.workingHours}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        ) : (
          <div className={styles.filialsList}>
            {filialsData.map((filial, index) => (
              <div key={index} className={styles.filialCard}>
                <h2>{filial.name}</h2>
                <p>{filial.address}</p>
                <div className={styles.workingHours}>
                  <span>Часы работы</span>
                  <p>{filial.workingHours}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filials;
