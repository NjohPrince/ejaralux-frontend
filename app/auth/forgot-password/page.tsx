import { Metadata } from "next";

import ForgotPasswordTemplate from "@/modules/auth/components/templates/forgot-password/forgot-password.template";

export const metadata: Metadata = {
  title: "Forgot Password | EJARALUX",
  description: "Reset your password to access your EJARALUX account",
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordTemplate />;
}
