import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowIcon } from "Assets/index";
import { GroupIcon, MapIcon } from "Assets/index";
import { DestinationIcon } from "Assets/index";
import { InfoBlock } from "Components/InfoBlock/InfoBlock";
import { SmartphoneIcon } from "Assets/index";
import { Segmented } from "antd";
import { Email } from "../Email/Email";
import styles from "./LoadboardEmails.module.scss";
import Icon from "@ant-design/icons/lib/components/Icon";
import { InfoIcon } from "Assets/index";

export const LoadboardEmails = () => {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }
  const [value, setValue] = useState<string | number>("Map");

  return (
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
          <h1 className={styles.loadboard__h1}>My Bids</h1>
        </div>
        <div className={styles.loadboard__form}>
          <h2 className={styles.loadboard__h2}>Order #16441744</h2>
          <div className={styles.loadboard__h}>
            <h3>RN# 178249</h3>
            <h4>Expires 08.09.2023, 05-28</h4>
          </div>
          <div className={styles.place}>
            <ul className={styles.place__list}>
              <li className={styles.place__li}>Pick up</li>
              <div className={styles.place__delivery}>
                <li>Miami, FL 33166</li>
                <Icon
                  className={styles.place__delivery__frame}
                  component={MapIcon}
                  alt="frame"
                />
              </div>
              <li className={styles.place__li}>09/08/2023 06:00 am</li>
              <li className={styles.place__li}>Delivery</li>
              <div className={styles.place__delivery}>
                <li>Miami, FL 33166</li>
                <Icon
                  className={styles.place__delivery__frame}
                  component={DestinationIcon}
                  alt="frame"
                />
              </div>
              <li className={styles.place__li}>09/08/2023 06:00 am</li>
            </ul>

            <div className={styles.place__image}>
              <Icon
                component={GroupIcon}
                alt="line"
                style={{
                  fontSize: "140px",
                  marginLeft: "-72px",
                  marginTop: "83px",
                }}
              />
            </div>
            <div className={styles.info}>
              <div className={styles.info__delivery}>
                <h5>Information</h5>
                <Icon
                  component={InfoIcon}
                  className={styles.info__delivery__copyIcon}
                />
              </div>
              <InfoBlock
                leaded="240 mi"
                pieces="1"
                dims="15x15x15"
                weight="10"
                truckSize="CARGO VAN"
              />
            </div>
            <p>Test</p>
            <h6 className={styles.h6}>Rates</h6>
            <div>
              <ul className={styles.data}>
                <li>Broker</li>
                <li>Driver</li>
                <li>Revenue</li>
              </ul>
              <ul className={styles.data__0}>
                <li>0</li>
                <li>0</li>
                <li>0</li>
              </ul>
            </div>
            <div className={styles.contact}>
              <Segmented
                className={styles.contact__options}
                options={["Driver", "Owner", "Broker"]}
                value={value}
                onChange={setValue}
              />
            </div>
            <div>
              <p className={styles.driver}>Responsible</p>
              <div className={styles.driver__info}>
                <p className={styles.driver__name}>W005 DJASUR MUHAMMADIEV</p>
                <Icon
                  component={SmartphoneIcon}
                  alt="phone icon"
                  className={styles.driver__icon}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Email />
    </div>
  );
};
