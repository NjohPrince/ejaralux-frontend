import { Metadata } from "next";
import { JSX } from "react";

import SignUpTemplate from "@/modules/auth/components/templates/sign-up/sign-up.template";

export const metadata: Metadata = {
  title: "Sign Up | EJARALUX",
  description: "Sign up to create your EJARALUX account",
};

/**
 * The Sign Up page component.
 *
 * This component renders the Sign Up Template component.
 *
 * @returns {JSX.Element} The Sign Up page component.
 */
export default function SignUpPage(): JSX.Element {
  return <SignUpTemplate />;
}
