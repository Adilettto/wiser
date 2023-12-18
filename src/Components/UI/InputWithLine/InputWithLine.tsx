import { Input } from "antd";
import React from "react";
import { ReactComponent as DollarSign } from "Assets/dollar.svg";
import styles from "./InputWithLine.module.scss";
import cn from "classnames";

type InputWithLineProps = {
  line?: string | number;
  mi?: string;
  value?: number | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Updated type
};

const InputWithLine: React.FC<InputWithLineProps> = ({
  line,
  mi,
  value,
  onChange,
}) => {
  return (
    <div className={cn(styles.input, mi && styles.input_withText)}>
      <Input
        prefix={<DollarSign className={styles.dollar__sign} />}
        className={cn(mi && styles.input_withText)}
        value={value !== undefined ? String(value) : undefined}
        onChange={onChange}
      />
      {line && (
        <span
          className={cn(styles.input__line, mi && styles.input__line_withText)}
        >
          |{" "}
        </span>
      )}
      {mi && <span className={styles.input__mi}>{mi} </span>}
    </div>
  );
};

export default InputWithLine;
