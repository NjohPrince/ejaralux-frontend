import { Metadata } from "next";

import ChangePasswordTemplate from "@/modules/auth/components/templates/change-password/change-password.template";

export const metadata: Metadata = {
  title: "Reset my Password | EJARALUX",
  description: "Reset your password to access your EJARALUX account",
};

export default function ChangePassword() {
  return <ChangePasswordTemplate />;
}
