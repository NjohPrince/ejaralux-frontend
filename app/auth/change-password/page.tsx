import { Metadata } from "next";
import { JSX } from "react";

import ChangePasswordTemplate from "@/modules/auth/components/templates/change-password/change-password.template";

export const metadata: Metadata = {
  title: "Reset my Password | EJARALUX",
  description: "Reset your password to access your EJARALUX account",
};

/**
 * Page that renders the change password template.
 *
 * This page is the entry point for the route `auth/change-password`.
 *
 * @returns {JSX.Element} The change password page.
 */
export default function ChangePasswordPage(): JSX.Element {
  return <ChangePasswordTemplate />;
}
