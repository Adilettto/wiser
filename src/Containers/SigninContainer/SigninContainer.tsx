import { Checkbox } from "antd";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Signin.module.scss";

import { InputField } from "Components/UI/InputField/InputField";
import { MainBtn } from "Components/UI/MainBtn/MainBtn";
import { PasswordInput } from "Components/UI/PasswordInput/PasswordInput";
import { signIn } from "Redux/Auth/reducer";
import {
  selectAuthError,
  selectAuthLoading,
  selectAuthSuccess,
} from "Redux/Auth/slice";
import { useAppDispatch } from "Redux/store";
import { ISignIn } from "Shared/Types/auth";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const SigninContainer = () => {
  const nav = useNavigate();
  const error = useSelector(selectAuthError);
  const success = useSelector(selectAuthSuccess);

  const { control, handleSubmit, formState } = useForm<ISignIn>({});

  const dispatch = useAppDispatch();

  console.log(error);

  const onSubmit = async (values: ISignIn) => {
    dispatch(signIn(values));
  };

  useEffect(() => {
    if (success) {
      nav("/load");
    }
  }, [success]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.signin}>
      <div className={styles.signin__block}>
        <h2>Sign In</h2>
        <InputField
          control={control}
          text="email"
          type="email"
          required
          placeholder="Enter your email"
          className=""
        />

        <PasswordInput
          name="password"
          control={control}
          label="password"
          required
        />

        {error && <label style={{ color: "red" }}>{error}</label>}

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
          <Link className={styles.signin__link} to="/sign-up">
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SigninContainer;
