import { JSX } from "react";

import classes from "./layout.module.css";

import NavbarOrganism from "@/shared/components/organisms/navbar/navbar.organism";

/**
 * A reusable component for rendering a layout for the authentication pages.
 *
 * This component includes a navigation bar at the top, and a flex container
 * that centers the children components both horizontally and vertically.
 *
 * @param {{ children: React.ReactNode }} props - The props object containing
 * the React children components to be rendered.
 * @returns {JSX.Element} The HTML structure with the navigation bar and the
 * centered children components.
 */
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
