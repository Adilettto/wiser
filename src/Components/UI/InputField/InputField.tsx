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
  // if (type === "select") {
  //   return (
  //     <div className={styles.inputField}>
  //       <label className={styles.inputField__label} htmlFor={type}>
  //         {text}
  //       </label>
  //       <select className={`${styles.inputField__input} ${styles.inputField__inputSelect} ${className || " "}`}>
  //         <option value="">GMT+06:00) Almaty</option>
  //         <option value="option1">GMT+06:00) Almaty</option>
  //         <option value="option2">GMT+06:00) Almaty</option>
  //         <option value="option3">GMT+06:00) Almaty</option>
  //       </select>
  //     </div>
  //   );
  // }

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
