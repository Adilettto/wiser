import { createAsyncThunk } from "@reduxjs/toolkit";
import { readObj } from "Service/storage";

const restoreSession = createAsyncThunk(`account/restoreSession`,
  async () => {
    const profile = readObj('account');
    return { profile }
  }
)

export {
  restoreSession
}