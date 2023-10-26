import { Checkbox } from "antd";
import styles from "./Signin.module.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { useState } from "react";
import { MainBtn } from "Components/UI/MainBtn/MainBtn";
import { InputField } from "Components/UI/InputField/InputField";
import { PasswordInput } from "Components/UI/PasswordInput/PasswordInput";
import { useAppDispatch } from "Redux/store";
import { signIn } from "Redux/Auth/reducer";
import { Controller, useForm } from "react-hook-form";
import { ISignIn } from "Shared/Types/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});
const SigninContainer = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [navigate, setNavigate] = useState(false);
  const { control, handleSubmit, formState } = useForm<ISignIn>({
    resolver: yupResolver(validationSchema),
  });
  const dispatch = useAppDispatch();
  console.log(formState.errors);
  const onSubmit = async (values: any) => {
    console.log(values);
    // dispatch(signIn());

    setNavigate(true);
  };

  if (navigate) {
    return <Navigate to="/onboard" />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.signin}>
      <div className={styles.signin__block}>
        <h2>Sign In</h2>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <InputField
              {...field}
              text="EMAIL"
              type="email"
              required
              placeholder="Enter your email"
              className=""
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => <PasswordInput {...field} text="PASSWORD" />}
        />

        <div className={styles.signin__block__requests}>
          <Checkbox className={styles.signin__block__requests_checkbox}>
            Remember me
          </Checkbox>
          <Link className={styles.signin__link} to="/forgot-password">
            Forgot password?
          </Link>
        </div>
        <MainBtn text="SIGN IN" htmlType="submit" />
        <p className={styles.signin__block__link}>
          Don’t have an account? {}
          <Link
            className={styles.signin__link}
            to="/sign-up"
            onClick={onSubmit}
          >
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SigninContainer;
