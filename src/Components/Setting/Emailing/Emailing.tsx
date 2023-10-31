import React from "react";
import { Col, Input, Row } from "antd";
import styles from "./Emailing.module.scss";

const Emailing = () => {
  return (
    <div className={styles.content}>
      <div className={styles.content__emailng}>
        <h4>Emailing</h4>

        <Row wrap={false} justify="space-between">
          <Col span={12}>
            <div>
              <p>Email Send System</p>
              <br />
              <Input placeholder="Gmail" type="email" />
            </div>
          </Col>
        </Row>
        <br />
        <h4>HR Site</h4>
        <Row wrap={false}>
          <Col xs={12}>
            <div>
              <p>Company City</p>
              <br />
              <Input placeholder="+1222222222" type="number" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Emailing;
