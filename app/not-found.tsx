import Link from "next/link";

import classes from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={`${classes.not__found} flex center col gap-12`}>
      <h2>Oops... Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
