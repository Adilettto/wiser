import Icon from "@ant-design/icons";
import {
  ArrowIcon,
  DestinationIcon,
  EmailIcon,
  Frame,
  GroupIcon,
  HorizIcon,
  InfoIcon,
  MapIcon,
  PhoneIcon,
  PrintIcon,
  StarIcon,
} from "Assets/index";
import { Info } from "Components/Info/Info";
import { InfoBlock } from "Components/InfoBlock/InfoBlock";
import { Miles } from "Components/Miles/Miles";
import { selectOrderList } from "Redux/Order/slice";
import { useAppDispatch } from "Redux/store";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./Loadboard.module.scss";
import { getOrderList } from "Redux/Order/reducer";

export const Loadboard: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const orderlist = useSelector(selectOrderList);

  useEffect(() => {
    dispatch(getOrderList());
  }, []);

  function goBack() {
    navigate(-1);
  }

  return (
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
            <h1>Loadboard</h1>
          </div>
          {orderlist?.map((order) => (
            <div className={styles.loadboard__form}>
              <h2>Order #16441744</h2>
              <div className={styles.loadboard__h}>
                <h3>RN# 178249</h3>
                <h4>Expires 08.09.2023, 05-28</h4>
              </div>
              <div className={styles.place}>
                <div className={styles.place__image}>
                  <Icon
                    component={GroupIcon}
                    alt="line"
                    style={{
                      fontSize: "170px",
                      marginLeft: "-59px",
                      marginTop: "-56px",
                    }}
                  />

                  <ul className={styles.place__list}>
                    <li className={styles.place__li}>Pick up</li>
                    <div className={styles.place__delivery}>
                      <li>Miami, FL 33166</li>
                      <Icon
                        className={styles.place__delivery__frame}
                        component={MapIcon}
                        alt="frame"
                        style={{ fontSize: "25px" }}
                      />
                    </div>
                    <li className={styles.place__li}>09/08/2023 06:00 am</li>
                    <li className={styles.place__li}>jhknl</li>
                    <div className={styles.place__delivery}>
                      <li>Miami, FL 33166</li>
                      <Icon
                        component={DestinationIcon}
                        alt="frame"
                        style={{ fontSize: "25px", marginTop: "-4px" }}
                      />
                    </div>
                    <li className={styles.place__li}>09/08/2023 06:00 am</li>
                  </ul>
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.info__delivery}>
                  <h5 className={styles.delivery__h5}>Information</h5>
                  <Icon
                    component={InfoIcon}
                    alt="frame"
                    style={{ fontSize: "25px", marginTop: "24px" }}
                  />
                </div>
                <InfoBlock
                  leaded="240 mi"
                  pieces="1"
                  dims="15x15x15"
                  weight=""
                  truckSize="CARGO VAN"
                />
                <p>
                  LG/PJ/offloading/residential delievery/place the skid to the
                  ground
                </p>
              </div>
            </div>
          ))}
        </div>
        <Info />
        <Miles />
      </div>
      <div className={styles.data}>
        <div className={styles.data__broker}>
          <div className={styles.data__one}>
            <h4>Broker</h4>
            <div>
              <Icon
                component={PhoneIcon}
                alt="phone"
                style={{ fontSize: "25px", color: "grey" }}
              />
              <Icon
                component={EmailIcon}
                alt="email"
                style={{ fontSize: "25px", color: "grey" }}
              />
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
              <Icon
                component={Frame}
                alt="frame"
                style={{ fontSize: "25px", color: "grey" }}
              />
              <Icon
                component={PrintIcon}
                alt="email icon"
                style={{ fontSize: "25px", color: "grey" }}
              />
            </div>
          </div>
          <div className={styles.data__two}>
            <p>(S) ASAP ESPRES</p>
          </div>
          <div className={styles.data__icons}>
            <Icon
              component={StarIcon}
              alt="star icon"
              style={{ fontSize: "25px" }}
            />
            <Icon
              component={HorizIcon}
              alt=" horizontal icon"
              style={{ fontSize: "25px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
