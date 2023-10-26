import { Checkbox } from "antd";
import styles from "./Signin.module.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { useState } from "react";
import { instance } from "src/axios";
import { MainBtn } from "src/Components/UI/MainBtn/MainBtn";
import { InputField } from "src/Components/UI/InputField/InputField";
import { PasswordInput } from "src/Components/UI/PasswordInput/PasswordInput";



const SigninContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [navigate, setNavigate] = useState(false);

  const submit = async (e:any) => {
    e.prevent.default();

    const response = await instance.post("/users/", {
      email, password
    }, {withCredentials: true})

    setNavigate(true);
  }

  if(navigate) {
    return <Navigate to="/onboard"/>
  }



  return (
    <form onSubmit={submit} className={styles.signin}>
      <div className={styles.signin__block}>
        <h2>Sign In</h2>
        <InputField
          text="EMAIL"
          type="email"
          placeholder="Enter your email"
          className=""
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <PasswordInput text="PASSWORD" onChange={(e:any) => setPassword(e.target.value)}/>
        <div className={styles.signin__block__requests}>
          <Checkbox className={styles.signin__block__requests_checkbox}>
            Remember me
          </Checkbox>
          <Link className={styles.signin__link} to="/forgot-password">
            Forgot password?
          </Link>
        </div>
        <MainBtn text="SIGN IN" onClick={submit} />
        <p className={styles.signin__block__link}>
          Don’t have an account? {}
          <Link className={styles.signin__link} to="/sign-up" onClick={submit}>
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SigninContainer;
