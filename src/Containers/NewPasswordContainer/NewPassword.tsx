import React from "react";
import styles from "./NewPassword.module.scss";
import { PasswordInput } from "Components/UI/PasswordInput/PasswordInput";
import { Link } from "react-router-dom";
import { MainBtn } from "Components/UI/MainBtn/MainBtn";

export const NewPasswordContainer = () => {
  return (
    <div className={styles.newPassword}>
      <div className={styles.newPassword__block}>
        <h2>New Password</h2>
        <PasswordInput label="NEW PASSWORD" />
        <PasswordInput label="REPEAT PASSWORD" />
        <MainBtn text="SAVE" />
        <p className={styles.newPassword__block__text}>
          I remembered my password{" "}
          <Link to="/sign-in" className={styles.newPassword__block__link}>
            Sign in
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};
