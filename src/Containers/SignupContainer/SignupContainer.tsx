import { AuthInput } from "Components/UI/AuthInput/AuthInput";
import { BackBtn } from "Components/UI/BackBtn/BackBtn";
import { MainBtn } from "Components/UI/MainBtn/MainBtn";
import { useNavigate } from "react-router";
import styles from "./Signup.module.scss";
import { useForm } from "react-hook-form";
import { ISignUp } from "Shared/Types/auth";
import { signUpSchema } from "Shared/Utils/auth";
import { yupResolver } from "@hookform/resolvers/yup";

export const SignupContainer = () => {
  const { register, formState, handleSubmit } = useForm<ISignUp>({
    resolver: yupResolver(signUpSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (data: ISignUp) => {
    console.log(data);

    return navigate("/forgot-password");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.signup}>
      <BackBtn className={styles.signup__backBtn} />
      <div className={styles.signup__block}>
        <h2>Sign Up</h2>
        <p className={styles.signup__block__text}>
          Please fill email and we’ll send you a link{" "}
        </p>
        <AuthInput
          label="Email"
          {...register("email")}
          placeholder="Enter your email"
          error={formState.errors?.email}
        />
        <p className={styles.signup__block__request}>
          Didn’t receive the link?{" "}
          <span className={styles.signup__block__link}>Resend</span>{" "}
        </p>
        <MainBtn
          disabled={formState.isSubmitting}
          text="SEND"
          htmlType="submit"
        />
      </div>
    </form>
  );
};
