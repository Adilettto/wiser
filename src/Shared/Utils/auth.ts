import * as Yup from "yup";

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  password: Yup.string().required("Password is required"),
});

export const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  password: Yup.string().required("Password is required"),
});

export const signForgotSchema = Yup.object().shape({
  password: Yup.string().required("Password is required"),
});
