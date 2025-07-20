import React from "react";

import classes from "./categorybutton.module.css";

import { CategoryButtonProps } from "./category-button.type";

const CategoryButtonAtom: React.FC<CategoryButtonProps> = ({
  label,
  active,
  index,
  setActiveIndex,
}) => {
  return (
    <button
      className={`${classes.category} ${index === 0 ? classes.first : ""} ${
        active ? classes.active : ""
      } delay flex center`}
      type="button"
      aria-label={label}
      onClick={() => setActiveIndex(index || 0)}
    >
      {label}
    </button>
  );
};

export default CategoryButtonAtom;
