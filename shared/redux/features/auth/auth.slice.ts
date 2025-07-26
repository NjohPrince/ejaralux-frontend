import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  fetchMe,
  forgotPassword,
  login,
  logoutUser,
  register,
  resetPassword,
  verifyEmail,
} from "@/modules/auth/services/auth.service";
import {
  APIResponseType,
  ForgotPasswordDataType,
  LoginDataType,
  LoginResponseType,
  MeResponseType,
  RegisterDataType,
  ResetPasswordDataType,
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

export const forgotPasswordThunk = createAsyncThunk<
  APIResponseType,
  ForgotPasswordDataType,
  { rejectValue: BackendError }
>("auth/forgot-password", async (data, { rejectWithValue }) => {
  try {
    const response = await forgotPassword(data);
    return response;
  } catch (err) {
    return rejectWithValue(serializeAxiosError(err));
  }
});

export const registerUser = createAsyncThunk<
  APIResponseType,
  Omit<RegisterDataType, "confirmPassword"> & {
    passwordConfirm: string;
  },
  { rejectValue: BackendError }
>("auth/register", async (data, { rejectWithValue }) => {
  try {
    const res = await register(data);
    return res;
  } catch (err) {
    return rejectWithValue(serializeAxiosError(err));
  }
});

export const verifyEmailThunk = createAsyncThunk<
  APIResponseType,
  string,
  { rejectValue: BackendError }
>("auth/verify-email", async (verificationCode, { rejectWithValue }) => {
  try {
    const res = await verifyEmail(verificationCode);
    return res;
  } catch (err) {
    return rejectWithValue(serializeAxiosError(err));
  }
});

export const resetPasswordThunk = createAsyncThunk<
  APIResponseType,
  Omit<ResetPasswordDataType, "confirmPassword"> & {
    passwordConfirm: string;
    token: string;
  },
  { rejectValue: BackendError }
>("auth/reset-password", async (data, { rejectWithValue }) => {
  try {
    const response = await resetPassword(data);
    return response;
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

export const logoutThunk = createAsyncThunk<
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
      .addCase(logoutThunk.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
