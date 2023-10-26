import React from "react";
import styles from "./AddLoad.module.scss";
import { Button, Input, Modal } from "antd";
import addIcon from "../../Assets/plusIcon.svg";
import dotsIcon from "../../Assets/dotsIcon.svg";

interface AddLoadProps {
  visible: any;
  onCancel: any;
}

export const AddLoad: React.FC<AddLoadProps> = ({onCancel, visible}) => {
  return (
    <Modal
      title={<h1>Add load</h1>}
      visible={visible}
      footer={true}
      maskClosable={true}
      width={410}
      onCancel={onCancel}
      className={styles.addLoad}
    >
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
      <label htmlFor="delivery">Delivery</label>
      <Input name="delivery" type="text" className={styles.addLoad__deliveryInput}/>
      <div className={styles.addLoad__deliveryField}>
        <Input className={styles.addLoad__deliveryField__mainInput} />
        <Input
          className={styles.addLoad__deliveryField__secondInput}
          placeholder="EST"
        />
        <img src={addIcon} alt="add-icon" />
        <img src={dotsIcon} alt="dots-icon" />
      </div>
      <label htmlFor="reply-email">Reply email</label>
      <Input className={styles.addLoad__replyInput} name="reply-email" type="email" />
      <label  htmlFor="note">Note</label>
      <Input className={styles.addLoad__noteInput} name="note" type="text" />
      <p>Dims</p>
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
      <Button className={styles.addLoad__btn}>Add load</Button>
    </Modal>
  );
};
