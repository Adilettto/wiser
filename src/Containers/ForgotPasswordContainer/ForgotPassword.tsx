import React from "react";
import styles from "./ForgotPassword.module.scss";
import { InputField } from "Components/UI/InputField/InputField";
import { AuthBtn } from "Components/UI/MainBtn/MainBtn";
import { useNavigate } from "react-router";
import { BackBtn } from "Components/UI/BackBtn/BackBtn";

export const ForgotPasswordContainer = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/new-password");
  };
  return (
    <div className={styles.forgotPass}>
      <BackBtn className={styles.forgotPass__backBtn} />
      <div className={styles.forgotPass__block}>
        <h2>Forgot Password</h2>
        <p className={styles.forgotPass__block__text}>
          Enter your email address and we will send a link to reset your
          password
        </p>
        <InputField
          text="EMAIL"
          type="email"
          placeholder="Enter your email"
          className=""
        />
        <p className={styles.forgotPass__block__request}>
          Didn’t receive the link?{" "}
          <span className={styles.forgotPass__block__link}>Resend</span>{" "}
        </p>
        <AuthBtn text="SEND" onClick={handleNavigate} />
      </div>
    </div>
  );
};
