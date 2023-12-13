import { createSlice } from "@reduxjs/toolkit";
import { IOrder } from "Shared/Types/order";
import { getOrderList } from "./reducer";
import { RootState } from "Redux/store";

interface IOrderState {
  orderList?: IOrder[] | null;
  error?: string | null;
  loading: boolean;
}
const initialState: IOrderState = {
  loading: false,
  orderList: [],
  error: null,
};
const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrderList.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getOrderList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getOrderList.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.orderList = action.payload;
    });
  },
});

export const selectOrderLoading = (state: RootState) => state.order.loading;
export const selectOrderError = (state: RootState) => state.order.error;
export const selectOrderList = (state: RootState) => state.order.orderList;

export default orderSlice;
