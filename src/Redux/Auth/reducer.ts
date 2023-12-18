import { ForgotPassword } from "./../../Pages/ForgotPassword/ForgotPassword";
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "Service/api/api";
import { readObj } from "Service/storage";
import { SignInParams, SignUpParams } from "Shared/Types/auth";

const restoreSession = createAsyncThunk(`auth/restoreSession`, async () => {
  const profile = readObj("account");
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
export { restoreSession, signIn, signUp };
