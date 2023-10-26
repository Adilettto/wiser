import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "Shared/Types";
import { restoreSession, signIn } from "./reducer";
import { RootState } from "Redux/store";

interface ICompanyRequestsState {
  account: IUser | null;
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
  name: "companyRequest",
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
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      // state.account = action.payload.profile;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const selectAccount = (state: RootState) => state.auth.account;
export const selectAuthLoading = (state: RootState) => state.auth.loading;
export const selectAuthError = (state: RootState) => state.auth.error;
export const selectAuthSuccess = (state: RootState) => state.auth.success;

export default authSlice;
