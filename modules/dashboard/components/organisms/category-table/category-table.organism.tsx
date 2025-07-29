"use client";

import React from "react";

import TableMolecule from "../../molecules/table/table.molecule";
import { CategoryType } from "@/modules/products/types/category.type";
import { CategoryTableProps } from "./categorytable.type";

const CategoryTableOrganism: React.FC<CategoryTableProps> = ({
  categories,
}) => {
  return (
    <TableMolecule<CategoryType>
      columns={[
        { key: "id", header: "ID" },
        { key: "name", header: "Name" },
        { key: "actions", header: "Actions" },
      ]}
      data={categories}
      onEdit={(cat) => console.log("Edit category", cat)}
      onDelete={(cat) => console.log("Delete category", cat)}
    />
  );
};

export default CategoryTableOrganism;
