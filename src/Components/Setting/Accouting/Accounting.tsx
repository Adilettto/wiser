import React from "react";
import { Col, Input, Row } from "antd";
import styles from "./Accounting.module.scss";

const Accounting = () => {
  return (
    <div className={styles.content}>
      <div className={styles.content__accounting}>
        <h4>Accounting</h4>

        <Row wrap={false}>
          <Col span={12}>
            <div>
              <p>Quick pay Deduction amount (%)</p>
              <br />
              <Input placeholder="Wiser Inc" />
            </div>
          </Col>

          <Col span={12}>
            <div>
              <p>Pay sheet title</p>
              <br />
              <Input type="number" placeholder="Vic,IL" />
            </div>
          </Col>
        </Row>

        <Row wrap={false}>
          <Col xs={12}>
            <div>
              <p>Pay sheet body</p>
              <br />
              <Input placeholder="Elgin" />
            </div>
          </Col>
          <Col xs={12}>
            <div>
              <p>Paysheet Sender’s Email</p>
              <br />
              <Input placeholder="60124" />
            </div>
          </Col>
        </Row>

        <Row wrap={false}>
          <Col>
            <div>
              <p>Pay Sheet Scheduled Week</p>
              <br />
              <Input placeholder="222 Vic" />
            </div>
          </Col>
          <Col>
            <div>
              <p>Pay Sheet Scheduled Time</p>
              <br />
              <Input type="month" placeholder="222 Vic" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Accounting;
