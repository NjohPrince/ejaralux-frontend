"use client";

import React from "react";
import Link from "next/link";

import classes from "./navbar.module.css";

import CartIcon from "../../icons/cart.icon";
import ButtonAtom from "../../atoms/button/button.atom";
import UserIcon from "../../icons/user.icon";
import { useAppSelector } from "@/shared/lib/hooks/redux.hooks";
import { RootState } from "@/shared/redux/store";

const NavbarOrganism = () => {
  const cartState = useAppSelector((state: RootState) => state.cartSlice);

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
        <Link href={"/auth/login"} className={`${classes.navbar__link}`}>
          <ButtonAtom label="Your Account" iconLeft={<UserIcon size="20" />} />
        </Link>
      </ul>
    </nav>
  );
};

export default NavbarOrganism;
