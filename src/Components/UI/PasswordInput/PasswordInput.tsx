import React, { useState } from "react";
import styles from "./PasswordInput.module.scss";
import { Control, Controller } from "react-hook-form";
import { Input, InputProps } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

interface PasswordInputProps extends InputProps {
  required?: boolean;
  control?: Control<any>;
  name?: string;
  label?: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  onChange,
  required,
  control,
  name,
  ...props
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className={styles.passwordInput}>
      <label className={styles.passwordInput__label} htmlFor="password">
        {label}
      </label>
      {control ? (
        <Controller
          control={control}
          name={name || "password"}
          render={({ field }) => (
            <Input
              {...props}
              {...field}
              className={styles.passwordInput__input}
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter password"
              required={required}
              suffix={
                passwordVisible ? (
                  <EyeOutlined onClick={togglePasswordVisibility} />
                ) : (
                  <EyeInvisibleOutlined onClick={togglePasswordVisibility} />
                )
              }
            />
          )}
        />
      ) : (
        <Input
          className={styles.passwordInput__input}
          type={passwordVisible ? "text" : "password"}
          placeholder="Enter password"
          onChange={onChange}
          required={required}
          suffix={
            passwordVisible ? (
              <EyeOutlined onClick={togglePasswordVisibility} />
            ) : (
              <EyeInvisibleOutlined onClick={togglePasswordVisibility} />
            )
          }
        />
      )}
    </div>
  );
};
