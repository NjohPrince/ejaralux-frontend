import Link from "next/link";
import { Metadata } from "next";
import { JSX } from "react";

import classes from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Not Found | EJARALUX",
  description: "Could not find requested resource",
};

/**
 * A 404 page component that displays a "Not Found" message and
 * provides a link to return to the home page.
 *
 * @returns {JSX.Element} The not found page component.
 */
export default function NotFound(): JSX.Element {
  return (
    <div className={`${classes.not__found} flex center col gap-12`}>
      <h2>Oops... Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
