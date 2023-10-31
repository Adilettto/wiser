import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { Input, InputProps, InputRef } from "antd";
import { forwardRef, useState } from "react";
import { FieldError } from "react-hook-form";
import styles from "./Authpassword.module.scss";

interface AuthInputPasswordProps extends InputProps {
  name?: string;
  label?: string;
  error?: FieldError;
}

export const AuthInputPassword = forwardRef<
  HTMLInputElement,
  AuthInputPasswordProps
>(({ className = "", label, error, ...props }, ref) => {
  const getInputRef = (inputRef: InputRef) => {
    if (inputRef?.input && typeof ref === "function") {
      ref(inputRef.input);
    }
  };
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className={styles.passwordInput}>
      {label && (
        <label className={styles.passwordInput__label} htmlFor="password">
          {label}
        </label>
      )}
      <Input
        className={styles.passwordInput__input}
        ref={getInputRef}
        type={passwordVisible ? "text" : "password"}
        placeholder="Enter password"
        suffix={
          passwordVisible ? (
            <EyeOutlined onClick={togglePasswordVisibility} />
          ) : (
            <EyeInvisibleOutlined onClick={togglePasswordVisibility} />
          )
        }
        {...props}
      />

      {error && (
        <span className={styles.passwordInput_errorText}>{error.message}</span>
      )}
    </div>
  );
});
