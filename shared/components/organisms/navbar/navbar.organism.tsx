"use client";

import React, { ReactElement } from "react";
import Link from "next/link";

import classes from "./navbar.module.css";

import CartIcon from "../../icons/cart.icon";
import ButtonAtom from "../../atoms/button/button.atom";
import UserIcon from "../../icons/user.icon";
import { useAppSelector } from "@/shared/lib/hooks/redux.hooks";
import { RootState } from "@/shared/redux/store";
import { useIsLoggedIn } from "@/shared/lib/hooks/use-is-logged-in.hook";

/**
 * A reusable component for rendering the site's navigation bar.
 *
 * @function NavbarOrganism
 * @returns {ReactElement} The navbar component.
 */
const NavbarOrganism = (): ReactElement => {
  const cartState = useAppSelector((state: RootState) => state.cartSlice);
  const isLoggedIn = useIsLoggedIn();

  return (
    <nav
      aria-label="main"
      role="navigation"
      className={`${classes.navbar} flex a-center space-between`}
    >
      <div className={`${classes.navbar__logo}`}>
        <Link href="/">EJARALUX</Link>
      </div>
      <ul className={`${classes.navbar__links} flex a-center gap-32`}>
        <Link
          href={"/cart"}
          className={`${classes.navbar__link} ${classes.cart}`}
        >
          <CartIcon color="var(--dark-color)" />
          <span
            className={`${classes.cart__count} flex center`}
            aria-label="cart count"
          >
            {String(cartState?.items.length).padStart(2, "0")}
          </span>
        </Link>
        <Link
          href={isLoggedIn ? "/dashboard" : "/auth/login"}
          className={`${classes.navbar__link}`}
        >
          <ButtonAtom label="Your Account" iconLeft={<UserIcon size="20" />} />
        </Link>
      </ul>
    </nav>
  );
};

export default NavbarOrganism;
