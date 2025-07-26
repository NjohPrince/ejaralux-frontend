import axiosInstance from "@/shared/lib/axios";

import {
  APIResponseType,
  ForgotPasswordDataType,
  LoginDataType,
  LoginResponseType,
  MeResponseType,
  RegisterDataType,
  ResetPasswordDataType,
} from "../types/auth.types";

export const login = async (
  data: LoginDataType
): Promise<LoginResponseType> => {
  try {
    const res = await axiosInstance.post("/auth/login", data);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const forgotPassword = async (
  data: ForgotPasswordDataType
): Promise<APIResponseType> => {
  try {
    const res = await axiosInstance.post("/auth/forgot-password", data);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const register = async (
  data: Omit<RegisterDataType, "confirmPassword"> & {
    passwordConfirm: string;
  }
): Promise<APIResponseType> => {
  try {
    const res = await axiosInstance.post("/auth/register", data);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const verifyEmail = async (
  verificationCode: string
): Promise<APIResponseType> => {
  try {
    const res = await axiosInstance.get(
      `/auth/verifyemail/${verificationCode}`
    );
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const resetPassword = async (
  data: Omit<ResetPasswordDataType, "confirmPassword"> & {
    passwordConfirm: string;
    token: string;
  }
): Promise<APIResponseType> => {
  try {
    const res = await axiosInstance.post("/auth/reset-password/", data);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const logoutUser = async (): Promise<void> => {
  try {
    const res = await axiosInstance.get("/auth/logout");
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const fetchMe = async (): Promise<MeResponseType> => {
  const res = await axiosInstance.get("/users/me");
  return res.data;
};

export const refreshToken = async (): Promise<void> => {
  await axiosInstance.get("/auth/refresh");
};
