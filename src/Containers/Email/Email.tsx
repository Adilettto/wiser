import React, { useState } from "react";
import { Button } from "antd";
import { CircleIcon } from "Assets/index";
import { ReplyIcon } from "Assets/index";
import { ThreeDotsIcon } from "Assets/index";
import { EmailInput } from "Containers/EmailInput/EmailInput";
import Icon from "@ant-design/icons/lib/components/Icon";

import styles from "./Email.module.scss";

export const Email = () => {
  const [showEmailReply, setShowEmailReply] = useState(false);

  const handleButtonClick = () => {
    setShowEmailReply(!showEmailReply);
  };
  return (
    <div className={styles.emailBlock}>
      <div className={styles.emailBlock__emails}>
        <h1 className={styles.emailBlock__h1}>Emails</h1>
        <div className={styles.emailBlock__buttons}>
          <Button type="primary" danger>
            Refuse
          </Button>
          <Button type="primary">Assign shipment</Button>
        </div>
      </div>
      <div className={styles.emailBlock__h}></div>
      <div className={styles.emailBlock__info}>
        <Icon
          component={CircleIcon}
          alt="circle"
          style={{ marginLeft: "28px", fontSize: "30px" }}
        />
        <div className={styles.emailBlock__data}>
          <ul className={styles.emailBlock__block}>
            <li className={styles.emailBlock__receiver}>
              Postedloads@sylectus.com
            </li>
            <li className={styles.emailBlock__from}>
              From: postedloads@sylectus.com
            </li>
            <li className={styles.emailBlock__from}>
              To: postedloads@sylectus.com
            </li>
          </ul>
        </div>
        <div className={styles.emailBlock__section}>
          <p>2023, September 25, 17:46 (6 hours ago)</p>
          <div className={styles.emailBlock__icons}>
            <button onClick={handleButtonClick} className={styles.vector}>
              <Icon
                component={ReplyIcon}
                alt="reply"
                style={{ fontSize: "20px", marginLeft: "-6px", color: "white" }}
              />
            </button>

            <button className={styles.vector}>
              <Icon
                component={ThreeDotsIcon}
                alt="icon"
                style={{ marginLeft: "-6px" }}
              />
            </button>
          </div>
        </div>
      </div>
      <section className={styles.text}>
        <p>
          ATTENTION: YOU CAN CLICK HERE{" "}
          <span className={styles.text__com}>
            {" "}
            W.Brown@pinnacleprologistics.com{" "}
          </span>{" "}
          or hit ‘Reply’ on your e-mail applica reply to{" "}
          <span className={styles.text__com}>
            {" "}
            W.Brown@pinnacleprologistics.com{" "}
          </span>
        </p>
        <p className={styles.text__p}>
          The dollow.org ‘Expedited Load’ type load has been posted on the
          Alliance system:
        </p>
        <div>
          <ul className={styles.text__ul}>
            <li>Pick-up at: LAS VEGAS, NV 89101</li>
            <li>Pick-up date (CEN): 09/26/2023 10:00</li>
            <li>Pick-up date (EST): 09/26/2023 11:00</li>
          </ul>
          <ul className={styles.text__ulTwo}>
            <li>Deliver to: WADSWORTH, OH 44281</li>
            <li>Delivery date (CEN): 09/29/2023 07:00</li>
            <li>Delivery date (EST): 09/29/2023 08:00</li>
          </ul>
        </div>
        <div className={styles.good}>
          <h2 className={styles.good__h2}>Notes</h2>
          <ul className={styles.good__notes}>
            <li>Miles: 2086</li>
            <li>Pieces: 1</li>
            <li>Weight: 300</li>
            <li>Dims: 48x48x60 in.</li>
          </ul>
        </div>
      </section>

      <div>{showEmailReply && <EmailInput onClick={handleButtonClick} />}</div>
    </div>
  );
};
