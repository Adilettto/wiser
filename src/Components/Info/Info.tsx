import styles from "./Info.module.scss";
import React, { useState } from "react";
import { Button } from "antd";
import InputWithLine from "Components/UI/InputWithLine/InputWithLine";

export const Info = () => {
  const [emtyMiles, setEmptyMiles] = useState<number | undefined>(0);
  const [emptyDistance, setEmptyDistance] = useState<number | undefined>(0);
  const [loadedMiles, setLoadedMiles] = useState<number | undefined>(0);
  const [brokerAmount, setBrokerAmount] = useState<number | undefined>(0);
  const [driverAmount, setDriverAmount] = useState<number | undefined>(0);
  const [driverMiles, setDriverMiles] = useState<number | undefined>(0);
  const [brokerMiles, setBrokerMiles] = useState<number | undefined>(0);
  const [loadedDistance, setLoadedDistance] = useState<number | undefined>(0);

  const brokerPrice =
    emtyMiles && loadedMiles ? Math.round(emtyMiles + loadedMiles) : undefined;

  const revenue =
    brokerPrice && driverAmount
      ? Math.round(brokerPrice - driverAmount)
      : undefined;

  const calculateEmptyMiles =
    emptyDistance && 227 ? emptyDistance * 227 : undefined;

  const calculateLoadedMiles =
    loadedDistance && 240 ? loadedDistance * 240 : undefined;

  const calculateBrokerMiles =
    emptyDistance && loadedDistance
      ? Math.round(emptyDistance + loadedDistance)
      : undefined;

  const calculateBrokerDistance =
    calculateEmptyMiles && calculateLoadedMiles
      ? Math.round(calculateEmptyMiles + calculateLoadedMiles)
      : undefined;

  const calculateDriverMi =
    driverAmount && 240 ? Math.round(driverAmount / 240) : undefined;

  const calculateDriverMiles =
    driverMiles && 240 ? Math.round(driverMiles * 240) : undefined;

  const calculateEmptyMi =
    emtyMiles && 227 ? Math.round(emtyMiles / 227) : undefined;

  const calculateLoadedMi =
    loadedMiles && 227 ? Math.round(loadedMiles / 227) : undefined;

  const sumBroker =
    calculateEmptyMi && calculateLoadedMi
      ? calculateEmptyMi + calculateLoadedMi
      : undefined;

  const revenueDistance =
    calculateBrokerDistance && calculateDriverMiles
      ? Math.round(calculateBrokerDistance - calculateDriverMiles)
      : undefined;

  const revenueTotalDistance =
    revenueDistance && calculateBrokerDistance
      ? Math.round((revenueDistance / calculateBrokerDistance) * 100)
      : undefined;
      
  const calculateTotalRevenue =
    revenue && brokerPrice
      ? Math.round((revenue / brokerPrice) * 100)
      : undefined;

  return (
    <div className={styles.bid}>
      <div className={styles.container}>
        <div className={styles.container__box}>
          <ul className={styles.container__ul}>
            <li className={styles.container__list}>
              <span className={styles.container__list__title}>
                {" "}
                Empty miles{" "}
              </span>
              <div className={styles.dollar}>
                <InputWithLine
                  line="example"
                  onChange={(e) => setEmptyMiles(Number(e.target.value))}
                  value={calculateEmptyMiles}
                />
              </div>
              <div className={styles.dollar}>
                <InputWithLine
                  line="example"
                  mi="/mi"
                  onChange={(e) => setEmptyDistance(Number(e.target.value))}
                  value={calculateEmptyMi}
                />
              </div>
            </li>
            <li className={styles.container__list}>
              <span className={styles.container__list__title}>
                Loaded miles{" "}
              </span>
              <div className={styles.dollar}>
                <InputWithLine
                  line="example"
                  onChange={(e) => setLoadedMiles(Number(e.target.value))}
                  value={calculateLoadedMiles}
                />
              </div>
              <div className={styles.dollar}>
                <InputWithLine
                  line="example"
                  mi="/mi"
                  onChange={(e) => setLoadedDistance(Number(e.target.value))}
                  value={calculateLoadedMi}
                />
              </div>
            </li>
            <li className={styles.container__list}>
              <span className={styles.container__list__title}>
                Broker price
              </span>
              <div className={styles.dollar}>
                <InputWithLine
                  line="example"
                  onChange={(e) => setBrokerAmount(Number(e.target.value))}
                  value={brokerPrice || calculateBrokerDistance}
                />
              </div>
              <div className={styles.dollar}>
                <InputWithLine
                  line="example"
                  mi="/mi"
                  onChange={(e) => setBrokerMiles(Number(e.target.value))}
                  value={sumBroker || calculateBrokerMiles}
                />
              </div>
            </li>
            <li className={styles.container__list}>
              <span className={styles.container__list__title}>
                Driver price
              </span>
              <div className={styles.dollar}>
                <InputWithLine
                  line="example"
                  onChange={(e) => setDriverAmount(Number(e.target.value))}
                  value={calculateDriverMiles}
                />
              </div>
              <div className={styles.dollar}>
                <InputWithLine
                  line="example"
                  mi="/mi"
                  onChange={(e) => setDriverMiles(Number(e.target.value))}
                  value={calculateDriverMi}
                />
              </div>
            </li>
            <li className={styles.container__list}>
              <span className={styles.container__list__title}>Revenue</span>
              <div className={styles.dollar}>
                <InputWithLine
                  line="example"
                  value={revenue || revenueDistance}
                />
              </div>
              <div className={styles.dollar}>
                <InputWithLine
                  line="example"
                  mi="/mi"
                  value={calculateTotalRevenue || revenueTotalDistance}
                />
              </div>
            </li>
          </ul>
          <div className={styles.button}>
            <Button className={styles.button__primary} type="primary">
              <span className={styles.container__list__title}>Place bid</span>
            </Button>
          </div>
        </div>
        <div className={styles.transitTime}>
          <div className={styles.transitTime__name}>
            <p className={styles.transitTime__name__text}>TRANSIT TIME</p>

            <hr className={styles.transitTime__hr} />
            <div className={styles.transitTime__time}>
              <p>TIME LEFT TO DELIEVER</p>
              <p className={styles.transitTime__time__p}>5 hours 32 minutes</p>
            </div>
          </div>
          <div className={styles.transitTime__h}></div>
          <div className={styles.transitTime__dispatch}>
            <p>DISPATCHER</p>
            <p>UNIT</p>
            <p>BROCKER</p>
          </div>
          <div className={styles.transitTime__h}></div>
          <div className={styles.transitTime__p}>
            <p>No bids have been placed on this load</p>
          </div>
        </div>
      </div>
      <div className={styles.p}>
        <p>Comment...</p>
      </div>
    </div>
  );
};
