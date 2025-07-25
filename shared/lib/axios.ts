import axios from "axios";

import { store } from "../redux/store";
import {
  NotificationTitleType,
  showNotification,
} from "../redux/features/notification/notification.slice";
import { logout } from "../redux/features/auth/auth.slice";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

let isRefreshing = false;
let failedQueue: Array<() => void> = [];

const processQueue = () => {
  failedQueue.forEach((cb) => cb());
  failedQueue = [];
};

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    const customError = error.response?.data;
    const status = error.response?.status;

    // if access token expired
    if (
      status === 401 &&
      customError?.code === "ACCESS_TOKEN_EXPIRED" &&
      !originalRequest._retry
    ) {
      if (isRefreshing) {
        return new Promise((resolve) => {
          failedQueue.push(() => resolve(axiosInstance(originalRequest)));
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        await axiosInstance.get("/auth/refresh");
        processQueue();
        return axiosInstance(originalRequest);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (refreshError: any) {
        if (refreshError?.response?.status === 403) {
          store.dispatch(logout());
          store.dispatch(
            showNotification({
              title: NotificationTitleType.ERROR,
              message: "Session expired. Please log in again.",
            })
          );
        }
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    // handle other errors globally
    const message = customError?.message || "Something went wrong";
    store.dispatch(
      showNotification({
        title: NotificationTitleType.ERROR,
        message,
      })
    );

    return Promise.reject(error);
  }
);

export default axiosInstance;
