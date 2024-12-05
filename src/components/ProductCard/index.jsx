import React from "react";
import styles from "./Card.module.scss";

function Cards({ cardData, onSelectProduct }) {
  return (
    <div className={styles.cardsContainer}>
      {cardData.map(({ id, name, description, price, image }) => (
        <div key={id} className={styles.card}>
          <img src={image} alt={name} />
          <h3>{name}</h3>
          <p>{description}</p>
          <div className={styles.pricebutton}>
            <span>{price}</span>
            <button onClick={() => onSelectProduct({ id, name, description, price, image })}>
              Выбрать
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
