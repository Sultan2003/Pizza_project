import styles from "./Sidebar.module.scss";

import {
  CourseIcon,
  CreateQuizIcon,
  HomeIcon,
  QuizzesIcon,
  StatisticsIcon,
} from "../../assets/icons/sidebarIcons";
import { useLocation, useNavigate } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "Филиалы",

    navigateTo: "/filials",
  },
  {
    id: 2,
    title: "О нас",

    navigateTo: "/Info",
  },
  {
    id: 3,
    title: "Контакты",

    navigateTo: "/contacts",
  },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={styles.sidebar}>
      <div className={styles.menu} onClick={() => navigate("/")}>
        Меню
      </div>
      <div className={styles.pages}>
        {items.map((item) => (
          <div
            key={item.id}
            className={`
                ${styles.item} 
                ${location?.pathname == item.navigateTo ? styles.active : ""}
            `}
            onClick={() => navigate(item.navigateTo)}
          >
            {item.icon}
            <p className={styles.titletext}>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
