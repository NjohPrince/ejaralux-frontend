"use client";

import React from "react";

import classes from './goback.module.css'

import BackIcon from "../../icons/back.icon";

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
