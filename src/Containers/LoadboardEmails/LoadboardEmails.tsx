import React from "react";
import styles from "./LoadboardEmails.module.scss";
import line from "../../Assets/line.png";
import primary from "../../Assets/primary.png";
import frameOne from "../../Assets/FrameTwo.svg";
import frameTwo from "../../Assets/FrameThree.svg";
import frameThree from "../../Assets/FrameFour.svg";
import { InfoBlock } from "Components/InfoBlock/InfoBlock";

export const LoadboardEmails = () => {
  return (
    <div className={styles.loadpage}>
      <div className={styles.loadboard}>
        <div className={styles.loadboard__block}>
          <div className={styles.loadboard__arrow}>
            <img src={primary} alt="arrow" />
            <h1>Loadboard</h1>
          </div>
          <div className={styles.loadboard__form}>
            <h2>Order #16441744</h2>
            <div className={styles.loadboard__h}>
              <h3>RN# 178249</h3>
              <h4>Expires 08.09.2023, 05-28</h4>
            </div>
            <div className={styles.place}>
              <ul className={styles.place__list}>
                <li className={styles.place__li}>Pick up</li>
                <div className={styles.place__delivery}>
                  <li>Miami, FL 33166</li>
                  <img
                    className={styles.place__delivery__frame}
                    src={frameOne}
                    alt="frame"
                  />
                </div>
                <li className={styles.place__li}>09/08/2023 06:00 am</li>
                <li className={styles.place__li}>Delivery</li>
                <div className={styles.place__delivery}>
                  <li>Miami, FL 33166</li>
                  <img src={frameTwo} alt="frame" />
                </div>
                <li className={styles.place__li}>09/08/2023 06:00 am</li>
              </ul>

              <div className={styles.place__image}>
                <img src={line} alt="line" />
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles.info__delivery}>
                <h5>Information</h5>
                <img
                  className={styles.info__delivery__copyIcon}
                  src={frameThree}
                  alt="frame"
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
          </div>
        </div>
      </div>
    </div>
  );
};
