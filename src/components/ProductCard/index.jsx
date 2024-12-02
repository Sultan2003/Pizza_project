import React from "react";
import styles from "./Card.module.scss";

function Cards({ cardData }) {
  return (
    <div className={styles.cardsContainer}>
      {cardData.map(({ id, name, description, price, image }) => (
        <div key={id} className={styles.card}>
          <img src={image} alt={name} />
          <h3>{name}</h3>
          <p>{description}</p>
          <div className={styles.pricebutton}>
            <span>{price}</span>
            <button>Выбрать</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
