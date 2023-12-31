import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "Redux/store";
import { clearAll, readObj, write } from "Service/storage";
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
  reducers: {
    logout(state) {
      state.account = null;
      clearAll();
    },
    setToken: (state, action) => {
      if (state.account) {
        state.account = { ...state.account, ...action.payload };
        write("access", action.payload.access);
      }
    },
  },
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
      state.error = action.error.message;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      write("account", action.payload);
      write("access", action.payload.access);
      write("refresh", action.payload.refresh);
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
      state.error = action.error.message;
    });
    builder.addCase(signNewPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      write("token", action.payload as object);
    });
  },
});

export const { logout, setToken } = authSlice.actions;

export const selectAccount = (state: RootState) => state.auth.account;
export const selectAuthLoading = (state: RootState) => state.auth.loading;
export const selectAuthError = (state: RootState) => state.auth.error;
export const selectAuthSuccess = (state: RootState) => state.auth.success;

export default authSlice;
