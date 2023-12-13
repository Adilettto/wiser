import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "Service/api/api";

export const getOrderList = createAsyncThunk(`order/getOrderList`, async () => {
  try {
    const response = await api.order.getOrderList();
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});
