import styles from "./Miles.module.scss";
import { Select } from "antd";

const { Option } = Select;
export const Miles = () => {
  const handleSelectChange = (value: any) => {
    console.log(`Selected: ${value}`);
  };

  return (
    <ul className={styles.miles__ul}>
      <div className={styles.miles__ul__li__miles}>
        <li className={styles.miles__title}>DRIVER</li>
        <div className={styles.miles__ul__dropdown}>
          <Select
            style={{ width: 250, marginBottom: 20, height: 25 }}
            placeholder="Select an option"
            onChange={handleSelectChange}
          >
            <Option value="option1">Option 1</Option>
            <Option value="option2">Option 2</Option>
            <Option value="option3">Option 3</Option>
            <Option value="option4">Option 4</Option>
          </Select>
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
