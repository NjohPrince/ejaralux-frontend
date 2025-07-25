import React from "react";

import classes from "./categorygroup.module.css";

import { categories } from "@/shared/lib/data/categories.util";
import CategoryButtonAtom from "../../atoms/category-button/category-button.atom";
import { CategoryGroupProps } from "./category-group.type";

/**
 * The CategoryGroupMolecule component renders a group of buttons to select a category.
 *
 * @param {number} [idx=0] - The index of the currently selected category.
 * @param {React.Dispatch<React.SetStateAction<number>>} setActiveIndex - A function to set the index of the currently selected category.
 * @returns {JSX.Element} The CategoryGroupMolecule component.
 */
const CategoryGroupMolecule: React.FC<CategoryGroupProps> = ({
  idx = 0,
  cats,
  setActiveIndex,
}) => {
  return (
    <div className={`${classes.group} flex a-center`}>
      {cats &&
        cats.length > 0 &&
        cats.map((category, index) => (
          <CategoryButtonAtom
            key={category.id}
            label={category.name}
            setActiveIndex={setActiveIndex}
            active={index === idx}
            index={index}
          />
        ))}
      {cats?.length === 0 &&
        categories &&
        categories.length > 0 &&
        categories.map((category, index) => (
          <CategoryButtonAtom
            key={category.id}
            label={category.name}
            setActiveIndex={setActiveIndex}
            active={index === idx}
            index={index}
          />
        ))}
    </div>
  );
};

export default CategoryGroupMolecule;
