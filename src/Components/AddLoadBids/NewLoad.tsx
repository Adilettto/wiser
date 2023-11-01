import React, { useState } from "react";
import styles from "./NewLoad.module.scss";
import { Button, Col, Input, Modal, Row } from "antd";
import addIcon from "Assets/plusIcon.svg";
import dotsIcon from "Assets/dotsIcon.svg";

interface NewLoadProps {
  visible: any;
  onCancel: any;
}

export const NewLoad: React.FC<NewLoadProps> = ({ visible, onCancel }) => {
  const [isPickupFieldVisible, setIsPickupFieldVisible] = useState(false);

  const handleAddPickupField = () => {
    setIsPickupFieldVisible(true);
  };

  return (
    <Modal
      title={<p className={styles.addLoad__title}>New Load</p>}
      visible={visible}
      footer={true}
      maskClosable={true}
      width={410}
      onCancel={onCancel}
      className={styles.addLoad}
    >
      <label htmlFor="company-name">Broker company name</label>
      <Input
        name="company-name"
        type="text"
        className={styles.addLoad__pickupInput}
      />
      <label htmlFor="broker-name">Broker responsible name</label>
      <Input
        name="broker-name"
        type="text"
        className={styles.addLoad__pickupInput}
      />

      <div className={styles.addLoad__broker}>
        <div>
          <label htmlFor="broker-name">Broker phone number</label>
          <Input
            name="broker-name"
            type="text"
            className={styles.addLoad__pickupInput}
          />
        </div>

        <div>
          <label htmlFor="broker-name">Broker email</label>
          <Input
            name="broker-name"
            type="text"
            className={styles.addLoad__pickupInput}
          />
        </div>
      </div>
      <label htmlFor="pickup">Pick-up</label>
      <Input
        name="pickup"
        type="text"
        className={styles.addLoad__pickupInput}
      />
      <div className={styles.addLoad__pickupField}>
        <Input className={styles.addLoad__pickupField__mainInput} />
        <Input
          className={styles.addLoad__pickupField__secondInput}
          placeholder="EST"
        />
        <img src={addIcon} alt="add-icon" onClick={handleAddPickupField} />
        <img src={dotsIcon} alt="dots-icon" />
      </div>
      <label htmlFor="delivery">Delivery</label>
      <Input
        name="delivery"
        type="text"
        className={styles.addLoad__deliveryInput}
      />
      <div className={styles.addLoad__deliveryField}>
        <Input className={styles.addLoad__deliveryField__mainInput} />
        <Input
          className={styles.addLoad__deliveryField__secondInput}
          placeholder="EST"
        />
        <img src={addIcon} alt="add-icon" />
        <img src={dotsIcon} alt="dots-icon" />
      </div>
      {isPickupFieldVisible && (
        <div className={styles.addLoad__pickupBlock}>
          <label htmlFor="pickup">Pick-up</label>
          <Input
            name="pickup"
            type="text"
            className={styles.addLoad__pickupInput}
          />
          <div className={styles.addLoad__pickupField}>
            <Input className={styles.addLoad__pickupField__mainInput} />
            <Input
              className={styles.addLoad__pickupField__secondInput}
              placeholder="EST"
            />
            <img src={addIcon} alt="add-icon" />
            <img src={dotsIcon} alt="dots-icon" />
          </div>
        </div>
      )}

      <label>Dims</label>
      <div className={styles.addLoad__dims}>
        <Input
          className={styles.addLoad__dims__input}
          name="dims"
          type="text"
          placeholder="Length"
        />
        <Input
          className={styles.addLoad__dims__input}
          name="dims"
          type="text"
          placeholder="Width"
        />
        <Input
          className={styles.addLoad__dims__input}
          name="dims"
          type="text"
          placeholder="Height"
        />
        <Input
          className={styles.addLoad__dims__input}
          name="dims"
          type="text"
          placeholder="Weight"
        />
        <Input
          className={styles.addLoad__dims__input}
          name="dims"
          type="text"
          placeholder="Pieces"
        />
      </div>
      <label htmlFor="vehicle-type">Vehicle type</label>
      <select name="vehicle-type" className={styles.addLoad__selectCar}>
        <option value="Car">Car</option>
        <option value="Truck">Truck</option>
        <option value="Cargo Van">Cargo Van</option>
        <option value="Porter">Porter</option>
      </select>
      <label className={styles.addLoad__noteTitle} htmlFor="note">
        Note
      </label>
      <Input className={styles.addLoad__noteInput} name="note" type="text" />

      <div className={styles.addLoad__checkboxes}>
        <Row>
          <Col md={12}>
            <input type="checkbox" name="Dock level" />
            <label htmlFor="Dock level">Dock level</label>
          </Col>
          <Col md={12}>
            <input type="checkbox" name="Dock level" />
            <label htmlFor="Dock level">Hazardous</label>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <input type="checkbox" name="Dock level" />
            <label htmlFor="Dock level">Fast load</label>
          </Col>
          <Col md={12}>
            <input type="checkbox" name="Dock level" />
            <label htmlFor="Dock level">Stackable</label>
          </Col>
        </Row>
      </div>
      <Button className={styles.addLoad__btn}>Save</Button>
    </Modal>
  );
};
