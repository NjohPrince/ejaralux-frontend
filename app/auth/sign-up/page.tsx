import { Metadata } from "next";

import SignUpTemplate from "@/modules/auth/components/templates/sign-up/sign-up.template";

export const metadata: Metadata = {
  title: "Sign Up | EJARALUX",
  description: "Sign up to create your EJARALUX account",
};

export default function SignUpPage() {
  return <SignUpTemplate />;
}
