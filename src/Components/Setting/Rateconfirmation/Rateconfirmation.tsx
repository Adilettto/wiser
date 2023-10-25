import React from "react";
import { Col, Input, Row } from "antd";
import Button from "Components/UI/Button/Button";
import styles from "./Rateconfirmation.module.scss";

const Rateconfirmation = () => {
  return (
    <div className={styles.content}>
      <div className={styles.content__rate}>
        <h4>Rate Confirmation</h4>
        <Row wrap={false}>
          <Col span={12}>
            <div>
              <p>Representative name</p>
              <br />
              <Input placeholder="John" />
            </div>
          </Col>

          <Col span={12}>
            <div>
              <p>Representative Email</p>
              <br />
              <Input type="email" placeholder="Vic,IL" />
            </div>
          </Col>
        </Row>
        <Row wrap={false}>
          <Col xs={12}>
            <div>
              <p>Representative Phone</p>
              <br />
              <Input placeholder="2222222332" />
            </div>
          </Col>

          <Col xs={12}>
            <div>
              <p>Billing Email</p>
              <br />
              <Input placeholder="Billing@wiserinc.us" type="email" />
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <div>
              <p>Represenative Signature</p>
              <br />
              <Input type="file" />
            </div>
          </Col>

          <Button className={styles.content__rate_btn}>Save changes</Button>
        </Row>
      </div>
    </div>
  );
};

export default Rateconfirmation;
