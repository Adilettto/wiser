import { Input, InputProps } from "antd";
import React from "react";
import styles from "./InputField.module.scss";

interface MailInputProps extends InputProps {
  text: string;
  type: string;
  placeholder: string;
  className: string;
}

export const InputField: React.FC<MailInputProps> = ({
  text,
  type,
  placeholder,
  className,
  ...props
}) => {
  return (
    <div className={styles.inputField}>
      <label className={styles.inputField__label} htmlFor={type}>
        {text}
      </label>
      <Input
        className={`${styles.inputField__input} ${className || " "}`}
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};
