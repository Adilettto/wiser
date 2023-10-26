import React from "react";

import styles from "./Newuser.module.scss";
import { Input } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import Button from "Components/UI/Button/Button";

type AdduserProps = {
  setOpen: (open: boolean) => void;
};

const Newuser: React.FC<AdduserProps> = ({ setOpen }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.overlay__bg}>
        <div className={styles.overlay__bg__close}>
          <h3>Add New User</h3>
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
            <label htmlFor="">Role</label>
            <br />
            <Input />
          </div>

          <div className={styles.overlay__bg_formfirst_text}>
            <label htmlFor="">Status</label>
            <br />
            <Input placeholder="lolololo@gmail.com" type="email" />
          </div>

          <div className={styles.overlay__bg_formfirst_blockBtn}>
            <Button className={styles.overlay__bg_formfirst_blockBtnFirst}>
              Add user
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newuser;
