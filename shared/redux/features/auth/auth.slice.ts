import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  fetchMe,
  login,
  logoutUser,
} from "@/modules/auth/services/auth.service";
import {
  LoginDataType,
  LoginResponseType,
  MeResponseType,
} from "@/modules/auth/types/auth.types";
import { extractErrorMessage } from "@/shared/lib/utils/extract-error-message.util";

interface AuthState {
  user: MeResponseType["user"] | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk<LoginResponseType, LoginDataType>(
  "auth/login",
  async (credentials) => {
    const data = await login(credentials);
    return data;
  }
);

export const loadUser = createAsyncThunk<MeResponseType>("auth/me", fetchMe);

export const logout = createAsyncThunk("auth/logout", async () => {
  await logoutUser();
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = extractErrorMessage(action.error, "Login failed");
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
