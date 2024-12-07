import React from "react";
import styles from "./Filials.module.scss";
import filialsData from "../../components/FilialsData/FilialsData";

const Filials = () => {
  return (
    <div className={styles.filialsContainer}>
      <div className={styles.filialsMainHeader}>
        <h1>Филиалы</h1>
        <div className={styles.filialsHeader}>
          <button className={styles.active}>Список</button>
          <button>Карта</button>
        </div>
      </div>
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
    </div>
  );
};

export default Filials;
