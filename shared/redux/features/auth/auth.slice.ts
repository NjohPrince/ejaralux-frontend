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
import {
  BackendError,
  serializeAxiosError,
} from "@/shared/lib/utils/extract-error-message.util";

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

export const loginUser = createAsyncThunk<
  LoginResponseType,
  LoginDataType,
  { rejectValue: BackendError }
>("auth/login", async (credentials, { rejectWithValue }) => {
  try {
    const data = await login(credentials);
    return data;
  } catch (err) {
    return rejectWithValue(serializeAxiosError(err));
  }
});

export const loadUser = createAsyncThunk<
  MeResponseType,
  void,
  { rejectValue: BackendError }
>("auth/me", async (_, { rejectWithValue }) => {
  try {
    const data = await fetchMe();
    return data;
  } catch (err) {
    return rejectWithValue(serializeAxiosError(err));
  }
});

export const logout = createAsyncThunk<
  void,
  void,
  { rejectValue: BackendError }
>("auth/logout", async (_, { rejectWithValue }) => {
  try {
    await logoutUser();
  } catch (err) {
    return rejectWithValue(serializeAxiosError(err));
  }
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
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
