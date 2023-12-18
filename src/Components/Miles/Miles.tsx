import styles from "./Miles.module.scss";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space, Menu } from "antd";

export const Miles = () => {
  const items: MenuProps["items"] = [
    {
      label: <label>1st option</label>,
      key: "0",
    },
    {
      label: <label>2nd option</label>,
      key: "0",
    },
    {
      label: <label>3rd option</label>,
      key: "0",
    },
  ];

  return (
    <ul className={styles.miles__ul}>
      <div className={styles.miles__ul__li__miles}>
        <li className={styles.miles__title}>DRIVER</li>
        <div className={styles.miles__ul__dropdown}>
          <Dropdown overlay={<Menu items={items} />} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <span className={styles.miles__ul__cr}>CRISTIANO RONALDO </span>
                <p className={styles.miles__ul__p}> WOO5</p>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
      <div className={styles.miles__ul__li}>
        <li className={styles.miles__title}>MILES OUT</li>
        <div className={styles.miles__ul__mi}>
          <li className={styles.miles__ul__dis}>227 mi</li>
        </div>
      </div>
      <div className={styles.miles__ul__li}>
        <li className={styles.miles__title}>VEHICLE</li>
        <div className={styles.miles__ul__mi}>
          <li className={styles.miles__ul__in}>Large Straight</li>
          <li className={styles.miles__ul__num}>260*98*97 in</li>
        </div>
      </div>
      <div className={styles.miles__ul__li}>
        <li className={styles.miles__title}>PAYLOAD</li>
        <div className={styles.miles__ul__mi}>
          <li className={styles.miles__ul__lbs}>7800 lbs</li>
          <p className={styles.miles__ul__CA}>Going to CA</p>
        </div>
      </div>
      <div className={styles.miles__ul__li}>
        <li className={styles.miles__title}>LOCATION </li>
        <div className={styles.miles__ul__mi}>
          <li className={styles.miles__ul__lbsd}>2925 Merced St</li>
          <p className={styles.miles__ul__CAD}>03:26 PM 09/08/2023</p>
        </div>
      </div>
      <div className={styles.miles__ul__li}>
        <li className={styles.miles__title}>BID</li>
      </div>
      <div className={styles.miles__ul__li}>
        <li className={styles.miles__title}>RESPONSIBLE</li>
      </div>
      <div className={styles.miles__ul__li}>
        <li className={styles.miles__title}>CALL</li>
      </div>
    </ul>
  );
};
