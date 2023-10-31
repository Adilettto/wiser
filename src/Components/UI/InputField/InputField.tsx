import { Input, InputProps } from "antd";
import React from "react";
import styles from "./InputField.module.scss";
import { Controller, Control } from "react-hook-form";
interface MailInputProps extends InputProps {
  text: string;
  type: string;
  placeholder: string;
  className: string;
  control?: Control<any>;
}

export const InputField: React.FC<MailInputProps> = ({
  text,
  type,
  placeholder,
  className,
  control,
  ...props
}) => {
  return (
    <div className={styles.inputField}>
      <label className={styles.inputField__label} htmlFor={type}>
        {text}
      </label>
      {control ? (
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <Input
              className={`${styles.inputField__input} ${className || " "}`}
              type={type}
              placeholder={placeholder}
              {...props}
              {...field}
            />
          )}
        />
      ) : (
        <Input
          className={`${styles.inputField__input} ${className || " "}`}
          type={type}
          placeholder={placeholder}
          {...props}
        />
      )}
    </div>
  );
};
