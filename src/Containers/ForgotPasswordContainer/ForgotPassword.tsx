import { yupResolver } from "@hookform/resolvers/yup";
import { AuthInput } from "Components/UI/AuthInput/AuthInput";
import { BackBtn } from "Components/UI/BackBtn/BackBtn";
import { MainBtn } from "Components/UI/MainBtn/MainBtn";
import { useNavigate } from "react-router";
import styles from "./ForgotPassword.module.scss";
import { useForm } from "react-hook-form";
import { ISignForgot } from "Shared/Types/auth";
import { signForgotSchema } from "Shared/Utils/auth";

export const ForgotPasswordContainer = () => {
  const { register, formState, handleSubmit } = useForm<ISignForgot>({
    resolver: yupResolver(signForgotSchema),
  });
  const navigate = useNavigate();

  const onSubmit = () => {
    return navigate("/new-password");
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
          label="password"
          {...register("password")}
          placeholder="Enter your email"
          error={formState.errors?.password}
        />
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
