import React from "react";

import classes from "./cart.module.css";

import GoBackAtom from "@/shared/components/atoms/go-back/go-back.atom";

const CartTemplate = () => {
  return (
    <div className={`${classes.cart}`}>
      <div className={`${classes.back}`}>
        <GoBackAtom />
      </div>

      <div className={`${classes.details}`}></div>
    </div>
  );
};

export default CartTemplate;
