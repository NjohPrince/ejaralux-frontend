import { Metadata } from "next";
import { JSX } from "react";

import ForgotPasswordTemplate from "@/modules/auth/components/templates/forgot-password/forgot-password.template";

export const metadata: Metadata = {
  title: "Forgot Password | EJARALUX",
  description: "Reset your password to access your EJARALUX account",
};

/**
 * The Forgot Password page component.
 *
 * This component renders the Forgot Password Template component.
 *
 * @returns {JSX.Element} The Forgot Password page component.
 */
export default function ForgotPasswordPage(): JSX.Element {
  return <ForgotPasswordTemplate />;
}
