import React, { useState } from "react";
import styles from "./PasswordInput.module.scss";
import Proptypes from "prop-types";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

interface PasswordInputProps {
    text: string;
    onChange?: any;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({text, onChange}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className={styles.passwordInput}>
      <label className={styles.passwordInput__label} htmlFor="password">
        {text}
      </label>
      <Input
        className={styles.passwordInput__input}
        type={passwordVisible ? "text" : "password"}
        placeholder="Enter password"
        onChange={onChange}
        suffix={passwordVisible ? (
            <EyeOutlined onClick={togglePasswordVisibility}/>
        ) : (
            <EyeInvisibleOutlined onClick={togglePasswordVisibility}/>
        )}
      />
    </div>
  );
};

PasswordInput.propTypes = {
    text: Proptypes.string.isRequired,
}