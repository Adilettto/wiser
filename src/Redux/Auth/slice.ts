import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "Shared/Types";
import { restoreSession, signIn } from "./reducer";
import { RootState } from "Redux/store";
import { write } from "Service/storage";
import { ISignIn, ISignInResponse } from "Shared/Types/auth";

interface ICompanyRequestsState {
  account?: ISignInResponse | null;
  error?: string | null;
  loading: boolean;
  success?: boolean | null;
}

const initialState: ICompanyRequestsState = {
  loading: false,
  account: null,
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
      console.log(action.payload);
      write("token", action.payload as object);
      state.account = action.payload;
    });
  },
});

export const selectAccount = (state: RootState) => state.auth.account;
export const selectAuthLoading = (state: RootState) => state.auth.loading;
export const selectAuthError = (state: RootState) => state.auth.error;
export const selectAuthSuccess = (state: RootState) => state.auth.success;

export default authSlice;
