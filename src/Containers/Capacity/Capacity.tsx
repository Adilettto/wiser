import React from "react";
import { ArrowIcon, MapIcon } from "Assets/index";
import Icon from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "antd";
import styles from "./Capacity.module.scss";

export const CapacitySearch = () => {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <div>
      <div className={styles.loadpage}>
        <div className={styles.loadboard}>
          <div className={styles.loadboard__block}>
            <div className={styles.loadboard__arrow}>
              <button className={styles.loadboard__button} onClick={goBack}>
                <Icon
                  component={ArrowIcon}
                  alt="arrow"
                  style={{ fontSize: "35px" }}
                />
              </button>
              <h1>Capacity Search</h1>
            </div>
          </div>
        </div>
        <div className={styles.mapInfo}>
          <div className={styles.capacity}>
            <h2>Capacity Search</h2>
            <div className={styles.form}>
              <h3>PICK-UP POINT</h3>
              <Input
                placeholder="Address or zipcode"
                className={styles.form__input}
              />
              <h3>MILES OUT</h3>
              <Input placeholder="150" className={styles.form__input} />
              <h3>MINIMUM REQUIREMENTS</h3>
              <div className={styles.data}>
                <div className={styles.row}>
                  <Input
                    placeholder="Length"
                    className={styles.data__details}
                  />
                  <Input placeholder="Width" className={styles.data__details} />
                </div>
                <div className={styles.row}>
                  <Input
                    placeholder="Height"
                    className={styles.data__details}
                  />
                  <Input
                    placeholder="Weight"
                    className={styles.data__details}
                  />
                </div>
                <Button type="primary" className={styles.button}>
                  Search
                </Button>
              </div>
            </div>
          </div>
          <div>
            <MapIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
