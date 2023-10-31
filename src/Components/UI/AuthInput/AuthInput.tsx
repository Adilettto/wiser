import { Input, InputProps, InputRef } from "antd";
import React, { forwardRef, useId } from "react";
import styles from "./AuthInput.module.scss";
import { FieldError } from "react-hook-form";

interface AuthInputProps extends InputProps {
  label?: string;
  error?: FieldError;
}

export const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
  ({ className = "", label, error, ...props }, ref) => {
    const getInputRef = (inputRef: InputRef) => {
      if (inputRef?.input && typeof ref === "function") {
        ref(inputRef.input);
      }
    };
    const id = useId();
    return (
      <div className={styles.inputField}>
        {label && (
          <label className={styles.inputField__label} htmlFor={id}>
            {label}
          </label>
        )}
        <Input
          ref={getInputRef}
          id={id}
          className={`${styles.inputField__input} ${className}`}
          {...props}
        />

        {error && (
          <span className={styles.inputField_errorText}>{error.message}</span>
        )}
      </div>
    );
  }
);
