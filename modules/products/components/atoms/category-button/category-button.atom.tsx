import React from "react";

import classes from "./categorybutton.module.css";

import { CategoryButtonProps } from "./category-button.type";

/**
 * CategoryButtonAtom is a functional component that renders a button to select a category.
 *
 * @param {CategoryButtonProps} props - The properties object.
 * @param {string} props.label - The label text for the button.
 * @param {boolean} [props.active=false] - Whether the button is in an active state.
 * @param {number} [props.index=0] - The index of the currently selected category.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.setActiveIndex - A function to set the index of the currently selected category.
 *
 * @returns {JSX.Element} The CategoryButtonAtom component.
 */
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
