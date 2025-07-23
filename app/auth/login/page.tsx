import { Metadata } from "next";
import { JSX } from "react";

import LoginTemplate from "@/modules/auth/components/templates/login/login.template";

export const metadata: Metadata = {
  title: "Login | EJARALUX",
  description: "Sign in to access your EJARALUX account",
};

/**
 * Page that renders the login template.
 *
 * @returns {JSX.Element} The login page.
 */
export default function LoginPage(): JSX.Element {
  return <LoginTemplate />;
}
