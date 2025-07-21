import { Validations } from "@/shared/lib/hooks/use-form.hook";
import { RegisterDataType } from "../../types/auth.types";
import { emailValidationRegex } from "@/shared/lib/utils/regex.util";

export const registerValidation: Validations<RegisterDataType> = {
  firstName: {
    custom: {
      isValid: (value: string) => value.length > 0,
      message: "First name is required",
    },
  },
  lastName: {
    custom: {
      isValid: (value: string) => value.length > 0,
      message: "Last name is required",
    },
  },
  email: {
    pattern: {
      value: emailValidationRegex,
      message: "Invalid email address",
    },
  },
  password: {
    custom: {
      isValid: (value: string) => value.length >= 8,
      message: "Please enter a password with at least 8 characters",
    },
  },
  confirmPassword: {
    custom: {
      isValid: (value: string) => value.length > 0,
      message: "Please confirm your password",
    },
  },
};
