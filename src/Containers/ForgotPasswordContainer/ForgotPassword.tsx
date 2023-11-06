import { yupResolver } from "@hookform/resolvers/yup";
import { AuthInput } from "Components/UI/AuthInput/AuthInput";
import { BackBtn } from "Components/UI/BackBtn/BackBtn";
import { MainBtn } from "Components/UI/MainBtn/MainBtn";
import { useNavigate } from "react-router";
import styles from "./ForgotPassword.module.scss";
import { useForm } from "react-hook-form";
import { ISignForgot } from "Shared/Types/auth";
import { signForgotSchema } from "Shared/Utils/auth";
import { forgotPassword } from "Redux/Auth/reducer";
import { useAppDispatch } from "Redux/store";
import { selectAuthError } from "Redux/Auth/slice";
import { useSelector } from "react-redux";

export const ForgotPasswordContainer = () => {
  const error = useSelector(selectAuthError);
  const { register, formState, handleSubmit } = useForm<ISignForgot>({
    resolver: yupResolver(signForgotSchema),
  });

  const nav = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: ISignForgot) => {
    return dispatch(
      forgotPassword({ data, onSuccess: () => nav("/new-password") })
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.forgotPass}>
      <BackBtn className={styles.forgotPass__backBtn} />
      <div className={styles.forgotPass__block}>
        <h2>Forgot Password</h2>
        <p className={styles.forgotPass__block__text}>
          Enter your email address and we will send a link to reset your
          password
        </p>
        <AuthInput
          label="Email"
          {...register("email")}
          placeholder="Enter your email"
          error={formState.errors?.email}
        />
        {/* TODO: error styles */}
        {error && <div> {error}</div>}
        <p className={styles.forgotPass__block__request}>
          Didn’t receive the link?{" "}
          <span className={styles.forgotPass__block__link}>Resend</span>
        </p>
        <MainBtn
          text="SEND"
          htmlType="submit"
          disabled={formState.isSubmitting}
        />
      </div>
    </form>
  );
};
