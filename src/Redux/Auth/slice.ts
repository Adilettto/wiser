import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "Redux/store";
import { readObj, write } from "Service/storage";
import { ISignInResponse } from "Shared/Types/auth";
import {
  forgotPassword,
  restoreSession,
  signIn,
  signNewPassword,
  signUp,
} from "./reducer";

interface ICompanyRequestsState {
  account?: ISignInResponse | null;
  error?: string | null;
  loading: boolean;
  success?: boolean | null;
}

const initialState: ICompanyRequestsState = {
  loading: false,
  account: readObj("token") || null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(restoreSession.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.account = action.payload.profile;
    });
    builder.addCase(signIn.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.loading = false;
      console.log(action.payload);
      state.error = action.error.message;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      write("token", action.payload as object);
      state.account = action.payload;
    });

    builder.addCase(signUp.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(forgotPassword.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(forgotPassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(signNewPassword.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signNewPassword.rejected, (state, action) => {
      state.loading = false;
      console.log(action.payload);
      state.error = action.error.message;
    });
    builder.addCase(signNewPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      write("token", action.payload as object);
    });
  },
});

export const selectAccount = (state: RootState) => state.auth.account;
export const selectAuthLoading = (state: RootState) => state.auth.loading;
export const selectAuthError = (state: RootState) => state.auth.error;
export const selectAuthSuccess = (state: RootState) => state.auth.success;

export default authSlice;
