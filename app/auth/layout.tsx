import { JSX } from "react";

import classes from "./layout.module.css";

import NavbarOrganism from "@/shared/components/organisms/navbar/navbar.organism";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <div className="">
      <NavbarOrganism />
      <div className={`${classes.layout} flex j-center`}>{children}</div>
    </div>
  );
}
