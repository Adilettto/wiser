import { CrossIcon } from "Assets/index";
import { CloseIcon } from "Assets/index";
import { AttachIcon } from "Assets/index";
import { Button } from "antd";
import Icon from "@ant-design/icons";
import styles from "./EmailInput.module.scss";

interface EmailInputProps {
  onClick?: () => void;
}

export const EmailInput: React.FC<EmailInputProps> = ({ onClick }) => {
  return (
    <div className={styles.emailInput}>
      <div className={styles.emailInput__receiver}>
        <text className={styles.emailInput__to}>To:</text>
        <p>Postedloads@sylectus.com</p>
        <Icon
          component={CrossIcon}
          alt="icon"
          className={styles.emailInput__cross}
          style={{ fontSize: "25px" }}
        />
        <div className={styles.emailInput__close}>
          <Icon
            component={CloseIcon}
            alt="close"
            onClick={onClick}
            style={{ fontSize: "25px" }}
          />
        </div>
      </div>
      <hr />
      <div className={styles.emailInput__send}>
        <hr />
        <div className={styles.emailInput__button}>
          <Icon
            component={AttachIcon}
            alt="attach icon"
            style={{ fontSize: "25px" }}
          />
          <Button type="primary">Send</Button>
        </div>
      </div>
    </div>
  );
};
