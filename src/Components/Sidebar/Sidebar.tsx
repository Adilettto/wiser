import wiserLogo from "../../Assets/sidebar/wiserLogo.svg";
import { sidebar } from "Shared/Constants/sidebar";
import Icon from "@ant-design/icons";
import cn from "classnames";
import { useLocation, useNavigate } from "react-router";
import styles from "./Sidebar.module.scss";
type SidebarProps = {
  height?: number;
};
const Sidebar: React.FC<SidebarProps> = ({ height }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleClick = (link: string) => {
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
    </div>
  );
};

export default Sidebar;
