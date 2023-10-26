import React, { useState } from "react";
import styles from "./Signup.module.scss";
import { InputField } from "Components/UI/InputField/InputField";
import { AuthBtn } from "Components/UI/MainBtn/MainBtn";
import { Navigate, useNavigate } from "react-router";
import { BackBtn } from "Components/UI/BackBtn/BackBtn";
import * as axios from "axios";

export const SignupContainer = () => {
  const [email, setEmail] = useState("");
  const [navigate, setNavigate] = useState(false);

  const submit = async (e:any) => {
    e.prevent.default();

    const response = await axios.post("/send-invitation/", {
      email
    }, {withCredentials: true})

    setNavigate(true);
  }

  if(navigate) {
    return <Navigate to="/forgot-password"/>
  }

 



  return (
    <div className={styles.signup}>
      <BackBtn className={styles.signup__backBtn} />
      <div className={styles.signup__block}>
        <h2>Sign Up</h2>
        <p className={styles.signup__block__text}>
          Please fill email and we’ll send you a link{" "}
        </p>
        <InputField
          onChange={(e: any) => setEmail(e.target.value)}
          text="EMAIL"
          type="email"
          placeholder="Enter your email"
          className=""
          
        />
        <p className={styles.signup__block__request}>
          Didn’t receive the link?{" "}
          <span className={styles.signup__block__link}>Resend</span>{" "}
        </p>
        <AuthBtn text="SEND" onClick={submit} />
      </div>
    </div>
  );
};
