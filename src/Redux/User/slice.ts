import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "Shared/Types";
import { getUserList } from "./reducer";
import { RootState } from "Redux/store";

interface UserState {
  userList?: IUser[]
  currentUser?: IUser | null;
  error?: string | null,
  loading: boolean;
  success?: boolean;
}

const initialState: UserState = {
  currentUser: null,
  loading: false,
  success: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clear(state) {
      state.loading = false;
      state.error = null;
      state.success = false;
    }
  },
  extraReducers(builder) {
    builder.addCase(getUserList.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(getUserList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.userList = [];
    })
    builder.addCase(getUserList.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.userList = action.payload;
    })
  }
})

export const { clear } = userSlice.actions;

export const selectIsLoading = (state: RootState) => state.user.loading;
export const selectUserError = (state: RootState) => state.user.error;
export const selectUserSuccess = (state: RootState) => state.user.success;
export const selectUserList = (state: RootState) => state.user.userList;
export const selectCurrentUser = (state: RootState) => state.user.currentUser;

export default userSlice;