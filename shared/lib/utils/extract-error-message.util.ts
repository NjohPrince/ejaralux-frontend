import { isAxiosError } from "axios";

export interface BackendError {
  message: string;
  code?: string;
  statusCode?: number;
}

export const extractErrorMessage = (
  error: unknown,
  fallbackMessage = "Something went wrong"
): string => {
  if (isAxiosError<BackendError>(error)) {
    const data = error.response?.data;

    if (data?.message) return data.message;

    if (data?.code === "ACCESS_TOKEN_EXPIRED") {
      return "Session expired. Please log in again.";
    }

    return fallbackMessage;
  }

  return fallbackMessage;
};
