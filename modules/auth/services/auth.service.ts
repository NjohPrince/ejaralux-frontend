import axiosInstance from "@/shared/lib/axios";

import {
  LoginDataType,
  LoginResponseType,
  MeResponseType,
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

export const logoutUser = async (): Promise<void> => {
  await axiosInstance.post("/auth/logout");
};

export const fetchMe = async (): Promise<MeResponseType> => {
  const res = await axiosInstance.get("/users/me");
  return res.data;
};

export const refreshToken = async (): Promise<void> => {
  await axiosInstance.get("/auth/refresh");
};
