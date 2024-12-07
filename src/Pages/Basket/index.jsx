import React, { useState } from "react";
import styles from "./Basket.module.scss";
import pizza1 from "../../assets/images/pizza1.png";

const initialItems = [
  { id: 1, name: "Пицца кебаб", price: 74000, quantity: 1 },
  { id: 2, name: "Барбекю", price: 74000, quantity: 1 },
  { id: 3, name: "Пицца кебаб", price: 74000, quantity: 1 },
];

export default function Basket() {
  const [basketItems, setBasketItems] = useState(initialItems);

  const increaseQuantity = (id) => {
    setBasketItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setBasketItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setBasketItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearBasket = () => {
    setBasketItems([]);
  };

  const totalPrice = basketItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.basketContainer}>
      <div className={styles.basketItems}>
        <div className={styles.header}>
          <h2>Корзина</h2>
          <button className={styles.clearButton} onClick={clearBasket}>
            Очистить корзину
          </button>
        </div>
        {basketItems.length === 0 ? (
          <p>Корзина пуста</p>
        ) : (
          basketItems.map((item) => (
            <div key={item.id} className={styles.item}>
              <img src={pizza1} alt={item.name} className={styles.itemImage} />
              <div className={styles.itemDetails}>
                <h3>{item.name}</h3>
                <p>Средняя, Воздушное</p>
              </div>
              <div className={styles.itemPrice}>
                {item.price.toLocaleString()} сум
              </div>
              <div className={styles.quantityControls}>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
              <button
                className={styles.removeButton}
                onClick={() => removeItem(item.id)}
              >
                ×
              </button>
            </div>
          ))
        )}
      </div>

      <div className={styles.orderSummary}>
        <h3>Ваш заказ</h3>
        <div className={styles.orderDetails}>
          {basketItems.map((item) => (
            <div key={item.id} className={styles.orderItem}>
              <span>
                {item.quantity} x {item.name}
              </span>
              <span>{(item.price * item.quantity).toLocaleString()} сум</span>
            </div>
          ))}
        </div>
        <div className={styles.delivery}>
          <span>Доставка</span>
          <span>0 сум</span>
        </div>
        <div className={styles.total}>
          <span>Итого</span>
          <span>{totalPrice.toLocaleString()} сум</span>
        </div>
        <button className={styles.checkoutButton}>К оформлению заказа</button>
      </div>
    </div>
  );
}
