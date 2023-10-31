import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "Service/api/api";
import { readObj } from "Service/storage";
import { ISignIn } from "Shared/Types/auth";

const restoreSession = createAsyncThunk(`auth/restoreSession`, async () => {
  const profile = readObj("profile");
  return { profile };
});

const signIn = createAsyncThunk(`auth/signIn`, async (data: ISignIn) => {
  try {
    const response = await api.auth.signIn(data);

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

export { restoreSession, signIn };
