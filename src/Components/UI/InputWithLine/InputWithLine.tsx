import { Input } from "antd";
import React from "react";
import { ReactComponent as DollarSign } from "Assets/dollar.svg";
import styles from "./InputWithLine.module.scss";
type InputWithLineProps = {
  line?: string;
  mi?: string;
};

const InputWithLine: React.FC<InputWithLineProps> = ({ line, mi }) => {
  return (
    <div>
      <Input prefix={<DollarSign className={styles.dollar__sign} />} />
      {line && <span className={styles.input__line}>| </span>}
      {line && <span className={styles.input__mi}>{mi} </span>}
    </div>
  );
};
export default InputWithLine;
