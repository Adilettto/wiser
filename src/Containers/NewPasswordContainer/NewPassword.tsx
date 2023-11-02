import { yupResolver } from "@hookform/resolvers/yup";
import { AuthInputPassword } from "Components/UI/AurhPassword/Authpassword";
import { MainBtn } from "Components/UI/MainBtn/MainBtn";
import { signNewPassword } from "Redux/Auth/reducer";
import { selectAuthError } from "Redux/Auth/slice";
import { useAppDispatch } from "Redux/store";
import { ISignNewPassword } from "Shared/Types/auth";
import { signNewPasswordSchema } from "Shared/Utils/auth";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from "./NewPassword.module.scss";

export const NewPasswordContainer = () => {
  const error = useSelector(selectAuthError);
  const { register, formState, handleSubmit } = useForm<ISignNewPassword>({
    resolver: yupResolver(signNewPasswordSchema),
  });

  const nav = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: ISignNewPassword) => {
    return dispatch(
      signNewPassword({ data, onSuccess: () => nav("/new-password") })
    );
  };

  return (
    <div onClick={handleSubmit(onSubmit)} className={styles.newPassword}>
      <div className={styles.newPassword__block}>
        <h2>New Password</h2>

        <AuthInputPassword
          label="new password"
          {...register("password")}
          placeholder="Enter your email"
          error={formState.errors?.password}
        />
        <br />
        <AuthInputPassword
          label="repeat password"
          {...register("password")}
          placeholder="Enter your email"
          error={formState.errors?.password}
        />

        {error && <div> error</div>}
        <MainBtn text="SAVE" />
        <p className={styles.newPassword__block__text}>
          I remembered my password{" "}
          <Link to="/sign-in" className={styles.newPassword__block__link}>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};
