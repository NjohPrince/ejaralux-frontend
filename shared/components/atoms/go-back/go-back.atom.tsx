"use client";

import React from "react";

import classes from "./goback.module.css";

import BackIcon from "../../icons/back.icon";

/**
 * The GoBackAtom component renders a button with a back icon and the text "Back". When clicked, it goes back to the previous page in the browser's history.
 *
 * @returns A button element with a back icon and the text "Back".
 */
const GoBackAtom = () => {
  return (
    <button
      type="button"
      className={`${classes.back} flex center gap-4`}
      aria-label="go back"
      onClick={() => history.back()}
    >
      <BackIcon size="24" color="var(--dark-color)" />
      <span>Back</span>
    </button>
  );
};

export default GoBackAtom;
