import React, { useState } from "react";
import {
  menuItems,
  cardData,
} from "../../components/MenuItemsData/MenuItemsData";
import Cards from "../../components/ProductCard";
import Modal from "../../components/Modal";
import bnr from "../../assets/images/Banner.png";
import styles from "./Dashboard.module.scss";

function Dashboard() {
  const [activeMenu, setActiveMenu] = useState("Пицца");
  const [selectedProduct, setSelectedProduct] = useState(null); 

  const handleSelectProduct = (product) => {
    setSelectedProduct(product); 
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className={styles.dashboardbody}>
      <div className={styles.banner}>
        <img src={bnr} alt="banner" />
      </div>

      <div className={styles.menu}>
        {menuItems.map((item) => (
          <button
            key={item}
            className={activeMenu === item ? styles.activeMenu : ""}
            onClick={() => setActiveMenu(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className={styles.cards}>
        <Cards
          cardData={cardData[activeMenu]}
          onSelectProduct={handleSelectProduct}
        />
      </div>

      {selectedProduct && (
        <Modal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default Dashboard;
