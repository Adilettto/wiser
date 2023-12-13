import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./User/slice";
import { useDispatch } from "react-redux";
import authSlice from "./Auth/slice";
import orderSlice from "./Order/slice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    auth: authSlice.reducer,
    order: orderSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
