import wiserLogo from "../../Assets/sidebar/wiserLogo.svg";
import { sidebar } from "Shared/Constants/sidebar";
import Icon from "@ant-design/icons";
import cn from "classnames";
import { useLocation, useNavigate } from "react-router";
import styles from "./Sidebar.module.scss";
import { AddLoad } from "Components/AddLoad/AddLoad";
import { useState } from "react";
import { NewLoad } from "Components/AddLoadBids/NewLoad";
type SidebarProps = {
  height?: number;
};
const Sidebar: React.FC<SidebarProps> = ({ height }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const handleClick = (link: string) => {
    if (link === "/addload") {
      setOpen(true);
      return;
    }
    navigate(link);
  };
  return (
    <div className={styles.sidebar}>
      <img className={styles.sidebar__logo} src={wiserLogo} alt="logo" />
      <ul className={styles.sidebar__items}>
        {sidebar.map((el, index) => (
          <li
            className={cn(
              styles.sidebar__items__item,
              pathname.includes(el.link) && styles.sidebar__items__item_active
            )}
            key={index}
            onClick={() => handleClick(el.link)}
          >
            <div className={styles.sidebar__items__item__icons}>
              <p>
                <Icon component={el.icon} />
              </p>
              <span className={styles.sidebar__items__item__text}>
                {el.name}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <NewLoad visible={open} onCancel={() => setOpen(false)} />
    </div>
  );
};

export default Sidebar;
