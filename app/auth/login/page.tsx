import { Metadata } from "next";

import LoginTemplate from "@/modules/auth/components/templates/login/login.template";

export const metadata: Metadata = {
  title: "Login | EJARALUX",
  description: "Sign in to access your EJARALUX account",
};

export default function LoginPage() {
  return <LoginTemplate />;
}
