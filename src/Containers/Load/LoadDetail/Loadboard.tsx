import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import line from "Assets/line.png";
import primary from "Assets/primary.png";
import { Info } from "Components/Info/Info";
import { Miles } from "Components/Miles/Miles";
import star from "Assets/star.svg";
import Frame from "Assets/Frame.svg";
import frameOne from "Assets/FrameTwo.svg";
import frameTwo from "Assets/FrameThree.svg";
import frameThree from "Assets/FrameFour.svg";
import email from "Assets/email.svg";
import phone from "Assets/phone.svg";
import horiz from "Assets/horiz.svg";
import styles from "./Loadboard.module.scss";
import { InfoBlock } from "Components/InfoBlock/InfoBlock";

export const Loadboard = () => {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <div className={styles.loadpage}>
      <div className={styles.loadboard}>
        <div className={styles.loadboard__block}>
          <div className={styles.loadboard__arrow}>
            <button className={styles.loadboard__button} onClick={goBack}>
              <img src={primary} alt="arrow" />
            </button>
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
              <p>
                LG/PJ/offloading/residential delievery/place the skid to the
                ground
              </p>
            </div>
          </div>
        </div>
        <Info />
        <Miles />
      </div>
      <div className={styles.data}>
        <div className={styles.data__broker}>
          <div className={styles.data__one}>
            <h4>Broker</h4>
            <div>
              <img src={phone} alt="phone" />
              <img src={email} alt="email" />
            </div>
          </div>
          <div className={styles.data__two}>
            <p>Chreistiano (9130) Ronaldo</p>
          </div>
        </div>

        <div className={styles.data__company}>
          <div className={styles.data__one}>
            <h4>Company</h4>
            <div>
              <img src={Frame} alt="frame" />
              <img src={email} alt="email icon" />
            </div>
          </div>
          <div className={styles.data__two}>
            <p>(S) ASAP ESPRES</p>
          </div>
          <div className={styles.data__icons}>
            <img src={star} alt="star icon" />
            <img src={horiz} alt=" horizontal icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
