import { JSX } from "react";

import LayoutTemplate from "@/modules/dashboard/components/templates/layout/layout.template";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return <LayoutTemplate>{children}</LayoutTemplate>;
}
