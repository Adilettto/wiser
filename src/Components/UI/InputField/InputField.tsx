import { Input } from "antd";
import React from "react";
import styles from "./InputField.module.scss";

interface MailInputProps {
  text: string;
  type: string;
  placeholder: string;
  className: string;
  onChange?: any;
}

export const InputField: React.FC<MailInputProps> = ({
  text,
  type,
  placeholder,
  className,
  onChange
}) => {
  return (
    <div className={styles.inputField}>
      <label className={styles.inputField__label} htmlFor={type}>
        {text}
      </label>
      <Input
        onChange={onChange}
        className={`${styles.inputField__input} ${className || " "}`}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};
