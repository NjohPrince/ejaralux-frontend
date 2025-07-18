import React from "react";
import Link from "next/link";

import classes from "./navbar.module.css";

import CartIcon from "../../icons/cart.icon";
import ButtonAtom from "../../atoms/button/button.atom";

const NavbarOrganism = () => {
  return (
    <nav
      aria-label="main"
      role="navigation"
      className={`${classes.navbar} flex a-center space-between`}
    >
      <div className={`${classes.navbar__logo}`}>
        <Link href="/">EJARAFLUX</Link>
      </div>
      <ul className={`${classes.navbar__links} flex a-center gap-24`}>
        <Link
          href={"/cart"}
          className={`${classes.navbar__link} ${classes.cart}`}
        >
          <CartIcon />
        </Link>
        <Link href={"/auth/login"} className={`${classes.navbar__link}`}>
          <ButtonAtom label="Sign In" />
        </Link>
      </ul>
    </nav>
  );
};

export default NavbarOrganism;
