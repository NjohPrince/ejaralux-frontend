import React from "react";

import classes from "./categorygroup.module.css";

import { categories } from "@/shared/lib/data/categories.util";
import CategoryButtonAtom from "../../atoms/category-button/category-button.atom";
import { CategoryGroupProps } from "./category-group.type";

const CategoryGroupMolecule: React.FC<CategoryGroupProps> = ({
  idx = 0,
  setActiveIndex,
}) => {
  return (
    <div className={`${classes.group} flex a-center`}>
      {categories &&
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
