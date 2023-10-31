import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "Service/api/api";
import { readObj } from "Service/storage";
import { SignInParams } from "Shared/Types/auth";

const restoreSession = createAsyncThunk(`auth/restoreSession`, async () => {
  const profile = readObj("profile");
  return { profile };
});

const signIn = createAsyncThunk(
  `auth/signIn`,
  async ({ data, onSuccess }: SignInParams) => {
    try {
      const response = await api.auth.signIn(data);

      onSuccess();
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export { restoreSession, signIn };
