import { Checkbox } from "antd";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Signin.module.scss";

import { MainBtn } from "Components/UI/MainBtn/MainBtn";
import { signIn } from "Redux/Auth/reducer";
import { selectAuthError } from "Redux/Auth/slice";
import { useAppDispatch } from "Redux/store";
import { ISignIn } from "Shared/Types/auth";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import { yupResolver } from "@hookform/resolvers/yup";
import { AuthInput } from "Components/UI/AuthInput/AuthInput";
import { signInSchema } from "Shared/Utils/auth";
import { AuthInputPassword } from "Components/UI/AurhPassword/Authpassword";

const SigninContainer = () => {
  const nav = useNavigate();
  const error = useSelector(selectAuthError);

  const { handleSubmit, formState, register } = useForm<ISignIn>({
    resolver: yupResolver(signInSchema),
  });

  const dispatch = useAppDispatch();

  const onSubmit = async (data: ISignIn) => {
    return dispatch(signIn({ data, onSuccess: () => nav("/load") }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.signin}>
      <div className={styles.signin__block}>
        <h2>Sign In</h2>
        <div className={styles.signin__fields}>
          <AuthInput
            {...register("email")}
            label="Email"
            error={formState.errors?.email}
            placeholder="Enter your email"
          />

          <AuthInputPassword
            label="Password"
            {...register("password")}
            error={formState.errors?.password}
          />
        </div>
        {error && <label style={{ color: "red" }}>{error}</label>}

        <div className={styles.signin__block__requests}>
          <Checkbox className={styles.signin__block__requests_checkbox}>
            Remember me
          </Checkbox>
          <Link className={styles.signin__link} to="/forgot-password">
            Forgot password?
          </Link>
        </div>
        <MainBtn
          disabled={formState.isSubmitting}
          text="SIGN IN"
          htmlType="submit"
        />

        <p className={styles.signin__block__link}>
          Don’t have an account?{" "}
          <Link className={styles.signin__link} to="/sign-up">
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SigninContainer;
