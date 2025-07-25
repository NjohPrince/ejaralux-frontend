import { AxiosError, isAxiosError } from "axios";

export interface BackendError {
  message: string;
  code?: string;
  statusCode?: number;
}

export function extractBackendError(
  err: unknown,
  fallbackMessage = "Something went wrong"
): BackendError {
  if ((err as AxiosError)?.isAxiosError) {
    const axiosErr = err as AxiosError<BackendError>;

    return {
      message: axiosErr.response?.data?.message || fallbackMessage,
      code: axiosErr.response?.data?.code || "UNKNOWN_ERROR",
      statusCode: axiosErr.response?.status || 500,
    };
  }

  if (err instanceof Error) {
    return {
      message: err.message,
      code: "JS_ERROR",
      statusCode: 500,
    };
  }

  return {
    message: fallbackMessage,
    code: "UNKNOWN",
    statusCode: 500,
  };
}

export function serializeAxiosError(err: unknown): BackendError {
  if ((err as AxiosError)?.isAxiosError) {
    const axiosErr = err as AxiosError<BackendError>;

    if (axiosErr?.response?.data?.message) {
      return {
        message: axiosErr.response?.data?.message || axiosErr.message,
        code: axiosErr.response?.data?.code || axiosErr.code || "UNKNOWN_ERROR",
        statusCode: axiosErr.response?.status || 500,
      };
    } else {
      if (isAxiosError(err)) {
        return {
          message: err?.response?.data as string,
          code: axiosErr.code || "UNKNOWN_ERROR",
          statusCode: 500,
        };
      }
    }
  }

  if (err instanceof Error) {
    return {
      message: err.message,
      code: "JS_ERROR",
      statusCode: 500,
    };
  }

  return {
    message: "Unknown error",
    code: "UNKNOWN",
    statusCode: 500,
  };
}
