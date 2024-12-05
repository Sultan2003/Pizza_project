import React, { useState } from "react";
import styles from "./Modal.module.scss";

function Modal({ product, onClose }) {
  const [selectedSize, setSelectedSize] = useState("Маленькая");
  const [selectedCrust, setSelectedCrust] = useState("Тонкое");
  const [quantity, setQuantity] = useState(1);

  const sizeMultipliers = {
    Маленькая: 1,
    Средняя: 1.5,
    Большая: 2,
  };

  const calculatePrice = () => {
    const basePrice = product.price;
    return Math.round(basePrice * sizeMultipliers[selectedSize] * quantity);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.modalContent}>
          <img src={product.image} alt={product.name} />
          <div className={styles.details}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>

            <div className={styles.options}>
              <div className={styles.size}>
                <h3>Размер</h3>
                <div className={styles.sizeButtons}>
                  {Object.keys(sizeMultipliers).map((size) => (
                    <button
                      key={size}
                      className={selectedSize === size ? styles.active : ""}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.crust}>
                <h3>Корка</h3>
                <div className={styles.crustButtons}>
                  <button
                    className={
                      selectedCrust === "Воздушное" ? styles.active : ""
                    }
                    onClick={() => setSelectedCrust("Воздушное")}
                  >
                    Воздушное
                  </button>
                  <button
                    className={selectedCrust === "Тонкое" ? styles.active : ""}
                    onClick={() => setSelectedCrust("Тонкое")}
                  >
                    Тонкое
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.footer}>
              <div className={styles.quantity}>
                <button
                  onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity((prev) => prev + 1)}>
                  +
                </button>
              </div>

              <div className={styles.price}>
                <span>{calculatePrice().toLocaleString()} сум</span>
                <button className={styles.addButton}>Добавить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
