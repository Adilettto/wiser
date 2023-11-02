import { NewPassword } from "./../../Pages/NewPassword/NewPassword";
import { ForgotPassword } from "./../../Pages/ForgotPassword/ForgotPassword";
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "Service/api/api";
import { readObj } from "Service/storage";
import {
  ISignNewPasswordParams,
  SignInParams,
  SignUpParams,
  signForgotParams,
} from "Shared/Types/auth";

const restoreSession = createAsyncThunk(`auth/restoreSession`, async () => {
  const profile = readObj("profile");
  return { profile };
});

const signIn = createAsyncThunk(
  `auth/signIn`,
  async ({ data, onSuccess }: SignInParams) => {
    try {
      const response = await api.auth.signIn(data);

      onSuccess();
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

const signUp = createAsyncThunk(
  `auth/signUp`,
  async ({ data, onSuccess }: SignUpParams) => {
    try {
      const response = await api.auth.signup(data);
      onSuccess();
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

const forgotPassword = createAsyncThunk(
  `auth/forgotPassword`,
  async ({ data, onSuccess }: signForgotParams) => {
    try {
      const response = await api.auth.forgotPassword(data);
      onSuccess();
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

const signNewPassword = createAsyncThunk(
  `auth/NewPassword`,
  async ({ data, onSuccess }: ISignNewPasswordParams) => {
    try {
      const response = await api.auth.NewPassword(data);
      onSuccess();
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);
export { restoreSession, signIn, signUp, forgotPassword, signNewPassword };
