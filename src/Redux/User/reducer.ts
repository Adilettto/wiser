import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "Service/api/api";

const getUserList = createAsyncThunk("user/getUserList", async () => {
  try {
    const response = await api.user.getUserList();
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

export { getUserList };
