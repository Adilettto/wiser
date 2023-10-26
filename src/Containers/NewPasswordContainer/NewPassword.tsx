import React from "react";
import styles from "./NewPassword.module.scss";
import { PasswordInput } from "Components/UI/PasswordInput/PasswordInput";
import { AuthBtn } from "Components/UI/MainBtn/MainBtn";
import { Link } from "react-router-dom";

export const NewPasswordContainer = () => {
  return (
    <div className={styles.newPassword}>
      <div className={styles.newPassword__block}>
        <h2>New Password</h2>
        <PasswordInput text="NEW PASSWORD" />
        <PasswordInput text="REPEAT PASSWORD" />
        <AuthBtn text="SAVE" />
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
