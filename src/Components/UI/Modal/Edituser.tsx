import React from "react";
import Button from "Components/UI/Button/Button";
import { Input } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import styles from "./Edit.module.scss";

type EdituserProps = {
  setOpen: (open: boolean) => void;
};

const Edituser: React.FC<EdituserProps> = ({ setOpen }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.overlay__bg}>
        <div className={styles.overlay__bg__close}>
          <h3>Edit User</h3>
          <CloseOutlined onClick={() => setOpen(false)} />
        </div>

        <div className={styles.overlay__bg_formfirst}>
          <div className={styles.overlay__bg_formfirst_text}>
            <label
              className={styles.overlay__bg_formfirst_text_label}
              htmlFor=""
            >
              Username
            </label>
            <br />
            <Input />
          </div>

          <div className={styles.overlay__bg_formfirst_text}>
            <label htmlFor="">Real Name</label>
            <br />
            <Input />
          </div>

          <div className={styles.overlay__bg_formfirst_text}>
            <label htmlFor="">Email</label>
            <br />
            <Input placeholder="lolololo@gmail.com" type="email" />
          </div>

          <div className={styles.overlay__bg_formfirst_text}>
            <label htmlFor="">Phone Number</label>
            <br />
            <Input type="number" placeholder="+111111" />
          </div>

          <div className={styles.overlay__bg_formfirst_text}>
            <label htmlFor="">Role</label>
            <br />
            <Input />
          </div>

          <div className={styles.overlay__bg_formfirst_text}>
            <label htmlFor="">Status</label>
            <br />
            <Input />
          </div>

          <div className={styles.overlay__bg_formfirst_blockBtn}>
            <Button className={styles.overlay__bg_formfirst_blockBtnFirst}>
              Save
            </Button>
            <Button className={styles.overlay__bg_formfirst_blockBtnSecond}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edituser;
