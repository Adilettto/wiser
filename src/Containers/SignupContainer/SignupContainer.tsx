import { yupResolver } from "@hookform/resolvers/yup";
import { AuthInputPassword } from "Components/UI/AurhPassword/Authpassword";
import { AuthInput } from "Components/UI/AuthInput/AuthInput";
import { BackBtn } from "Components/UI/BackBtn/BackBtn";
import { MainBtn } from "Components/UI/MainBtn/MainBtn";
import { signUp } from "Redux/Auth/reducer";
import { selectAuthError } from "Redux/Auth/slice";
import { useAppDispatch } from "Redux/store";
import { ISignUp } from "Shared/Types/auth";
import { signUpSchema } from "Shared/Utils/auth";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.scss";

export const SignUpContainer = () => {
  const nav = useNavigate();
  const error = useSelector(selectAuthError);

  const { handleSubmit, formState, register } = useForm<ISignUp>({
    resolver: yupResolver(signUpSchema),
  });

  const dispatch = useAppDispatch();

  const onSubmit = async (data: ISignUp) => {
    return dispatch(signUp({ data, onSuccess: () => nav("/sign-in") }));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.signup}>
      <BackBtn className={styles.signup__backBtn} />
      <div className={styles.signup__block}>
        <h2>Sign Up</h2>
        <p className={styles.signup__block__text}>
          Please fill email and we’ll send you a link{" "}
        </p>
        <div className={styles.signup__block__fields}>
          <AuthInput
            label="Email"
            {...register("email")}
            placeholder="Enter your email"
            error={formState.errors?.email}
          />

          <AuthInputPassword
            label="Password"
            {...register("password")}
            error={formState.errors?.password}
          />
        </div>

        {error && (
          <label className={styles.signup__block_errorText}>
            Does not exist
          </label>
        )}
        {/* <p className={styles.signup__block__request}>
          Didn’t receive the link?{" "}
          <span className={styles.signup__block__link}>Resend</span>{" "}
        </p> */}
        <MainBtn
          disabled={formState.isSubmitting}
          text="SEND"
          htmlType="submit"
        />
      </div>
    </form>
  );
};
