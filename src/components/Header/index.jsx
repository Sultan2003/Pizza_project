import styles from "./Header.module.scss";
import profileImage from "../../assets/images/profileImage.png";
import {
  GroupOrder,
  HamburgerIcon,
  Location,
  Shopbox,
} from "../../assets/icons/headerIcons";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function Header({ setOpenSidebar }) {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <div className={styles.leftSection}>
        <button
          className={styles.sidebarToggle}
          onClick={() => setOpenSidebar((v) => !v)}
        >
          <HamburgerIcon className={styles.icon}></HamburgerIcon>
        </button>
        <img src={logo} alt="Logo" className={styles.logo} />
        <div className={styles.actionButton}>
          <Location />
          <span>Toshkent</span>
        </div>
      </div>

      <div className={styles.rightSection}>
        <button className={styles.actionButton}>
          <GroupOrder />
          <span>Групповой заказ</span>
        </button>
        <button
          className={styles.actionButton}
          onClick={() => navigate("/basket")}
        >
          <Shopbox />
          <span>Корзина</span>
        </button>
        <div className={styles.languageSelector}>
          <select>
            <option value="ru">Русский</option>
            <option value="uz">O‘zbek</option>
          </select>
        </div>
        <div className={styles.profile} onClick={() => navigate("/logout")}>
          <img
            src={profileImage}
            alt="Profile"
            className={styles.profileImage}
          />
        </div>
      </div>
    </div>
  );
}
