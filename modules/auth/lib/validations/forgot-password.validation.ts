import { Validations } from "@/shared/lib/hooks/use-form.hook";
import { ForgotPasswordDataType } from "../../types/auth.types";
import { emailValidationRegex } from "@/shared/lib/utils/regex.util";

export const forgotPasswordValidation: Validations<ForgotPasswordDataType> = {
  email: {
    pattern: {
      value: emailValidationRegex,
      message: "Invalid email address",
    },
  },
};
