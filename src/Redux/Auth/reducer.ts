import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "Service/api/api";
import { readObj } from "Service/storage";

const restoreSession = createAsyncThunk(`account/restoreSession`, async () => {
  const profile = readObj("account");
  return { profile };
});

const signIn = createAsyncThunk(`account/signIn`, async () => {
  try {
    const response = await api.auth.signIn();

    return response.data;
  } catch (error) {
    console.error(error);
  }
});

export { restoreSession, signIn };
