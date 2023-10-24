import React from "react";
import { Col, Input, Row } from "antd";
import styles from "./Nameadress.module.scss";

const NameAdress = () => {
  return (
    <div className={styles.content}>
      <div className={styles.content__adress}>
        <h4>Name and Address</h4>

        <Row wrap={false}>
          <Col span={12}>
            <div>
              <p>Company name</p>
              <br />
              <Input placeholder="Wiser Inc" />
            </div>
          </Col>

          <Col span={12}>
            <div>
              <p>Company State</p>
              <br />
              <Input type="number" placeholder="Vic,IL" />
            </div>
          </Col>
        </Row>

        <Row wrap={false}>
          <Col xs={12}>
            <div>
              <p>Company City</p>
              <br />
              <Input placeholder="Elgin" />
            </div>
          </Col>
          <Col xs={12}>
            <div>
              <p>Company Zipcode</p>
              <br />
              <Input placeholder="60124" />
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div>
              <p>Company street Address</p>
              <br />
              <Input placeholder="222 Vic" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default NameAdress;
