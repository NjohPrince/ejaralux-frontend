import { Validations } from "@/shared/lib/hooks/use-form.hook";
import { emailValidationRegex } from "@/shared/lib/utils/regex.util";
import { LoginDataType } from "../../types/auth.types";

export const loginValidation: Validations<LoginDataType> = {
  email: {
    pattern: {
      value: emailValidationRegex,
      message: "Invalid email address",
    },
  },
  password: {
    custom: {
      isValid: (value: string) => value.length > 8,
      message: "Invalid credentials",
    },
  },
};
