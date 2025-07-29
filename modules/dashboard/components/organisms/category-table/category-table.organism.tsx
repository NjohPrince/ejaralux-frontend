"use client";

import React, { useState } from "react";

import classes from "./categorytable.module.css";

import TableMolecule from "../../molecules/table/table.molecule";
import { CategoryType } from "@/modules/products/types/category.type";
import { CategoryTableProps } from "./categorytable.type";
import CategoryFormMolecule from "../../molecules/category-form/category-form.molecule";
import ModalAtom from "../../atoms/modal-atom/modal-atom.atom";
import ButtonAtom from "@/shared/components/atoms/button/button.atom";

const CategoryTableOrganism: React.FC<CategoryTableProps> = ({
  categories,
}) => {
  const [categoriesData, setCategoriesData] = useState(categories);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setMode] = useState<"create" | "edit">("create");
  const [selected, setSelected] = useState<CategoryType | undefined>();

  const handleOpenCreate = () => {
    setMode("create");
    setSelected(undefined);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (product: CategoryType) => {
    setMode("edit");
    setSelected(product);
    setIsModalOpen(true);
  };

  const handleSubmit = (data: Omit<CategoryType, "id">, id?: number) => {
    if (mode === "create") {
      setCategoriesData([...categoriesData, { ...data, id: Date.now() }]);
    } else if (id !== undefined) {
      setCategoriesData(
        categoriesData.map((p) => (p.id === id ? { ...p, ...data } : p))
      );
    }
    setIsModalOpen(false);
  };

  return (
    <div className={`${classes.table} flex col`}>
      <div className={`${classes.add} flex w-full space-between`}>
        <div></div>
        <div>
          <ButtonAtom
            label={"+ New Category"}
            onClick={handleOpenCreate}
            ariaLabel={"+ New Category"}
            type="button"
            normal={true}
          />
        </div>
      </div>

      <TableMolecule<CategoryType>
        columns={[
          { key: "id", header: "ID" },
          { key: "name", header: "Name" },
          { key: "actions", header: "Actions" },
        ]}
        data={categoriesData}
        onEdit={handleOpenEdit}
        onDelete={(product) =>
          setCategoriesData(categories.filter((p) => p.id !== product.id))
        }
      />

      <ModalAtom
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={mode === "create" ? "Create Category" : "Edit Category"}
      >
        <CategoryFormMolecule
          mode={mode}
          initialData={selected}
          onSubmit={handleSubmit}
        />
      </ModalAtom>
    </div>
  );
};

export default CategoryTableOrganism;

// const ProductsTable = ({ products }: { products: ProductType[] }) => {
//   return (
//     <TableMolecule<ProductType>
//       columns={[
//         { key: "id", header: "ID" },
//         { key: "name", header: "Name" },
//         {
//           key: "price",
//           header: "Price",
//           render: (val) => `$${val.toFixed(2)}`,
//         },
//         {
//           key: "image",
//           header: "Image",
//           render: (val) =>
//             val ? (
//               <Image src={val} alt="Product" width={40} height={40} />
//             ) : (
//               "No image"
//             ),
//         },
//         { key: "unit", header: "Unit" },
//         {
//           key: "catId",
//           header: "Category ID",
//           render: (val) => <span style={{ fontWeight: "bold" }}>{val}</span>,
//         },
//         { key: "actions", header: "Actions" },
//       ]}
//       data={products}
//       onEdit={(product) => console.log("Edit", product)}
//       onDelete={(product) => console.log("Delete", product)}
//     />
//   );
// };

// export default ProductsTable;
