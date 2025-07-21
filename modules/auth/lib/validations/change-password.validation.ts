import { Validations } from "@/shared/lib/hooks/use-form.hook";
import { ChangePasswordDataType } from "../../types/auth.types";

export const registerValidation: Validations<ChangePasswordDataType> = {
  newPassword: {
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
