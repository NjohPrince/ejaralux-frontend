"use client";

import React, { useState, useEffect } from "react";

import classes from "./categoryform.module.css";

import { CategoryType } from "@/modules/products/types/category.type";
import InputAtom from "@/shared/components/atoms/input/input.atom";
import ButtonAtom from "@/shared/components/atoms/button/button.atom";

interface Props {
  mode: "create" | "edit";
  initialData?: CategoryType;
  onSubmit: (data: Omit<CategoryType, "id">, id?: number) => void;
  loading?: boolean;
}

const CategoryFormMolecule = ({
  mode,
  initialData,
  loading,
  onSubmit,
}: Props) => {
  const [form, setForm] = useState({
    name: "",
  });

  const { name } = form;

  useEffect(() => {
    if (mode === "edit" && initialData) {
      setForm({ ...form, name: initialData.name });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, initialData]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name: form.name }, initialData?.id);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`${classes.form} flex col gap-24 w-full`}
      >
        <div className={`${classes.form__fields} flex col gap-16 w-full`}>
          <div className={`${classes.fields} flex col gap-8 w-full`}>
            <label htmlFor="email">Category Name</label>
            <InputAtom
              value={name}
              name="name"
              id="name"
              onChange={onChange}
              placeholder="Serums"
              ariaLabel="Category Name"
            />
          </div>

          <ButtonAtom
            label={mode === "create" ? "Create" : "Update"}
            ariaLabel={mode === "create" ? "Create" : "Update"}
            type="submit"
            loading={loading}
            normal={true}
          />
        </div>
      </form>
    </>
  );
};

export default CategoryFormMolecule;

// const ProductForm = ({ mode, initialData, onSubmit }: Props) => {
//   const [form, setForm] = useState<Omit<ProductType, "id">>({
//     name: "",
//     catId: 0,
//     price: 0,
//     description: "",
//     image: "",
//     quantity: 0,
//     unit: "pcs",
//   });

//   useEffect(() => {
//     if (mode === "edit" && initialData) {
//       setForm({ ...initialData });
//     }
//   }, [mode, initialData]);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]:
//         name === "price" || name === "quantity" || name === "catId"
//           ? Number(value)
//           : value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSubmit(form, initialData?.id);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Name</label>
//       <input name="name" value={form.name} onChange={handleChange} required />

//       <label>Price</label>
//       <input
//         name="price"
//         type="number"
//         value={form.price}
//         onChange={handleChange}
//         required
//       />

//       <label>Category ID</label>
//       <input
//         name="catId"
//         type="number"
//         value={form.catId}
//         onChange={handleChange}
//         required
//       />

//       <label>Description</label>
//       <input
//         name="description"
//         value={form.description}
//         onChange={handleChange}
//         required
//       />

//       <label>Quantity</label>
//       <input
//         name="quantity"
//         type="number"
//         value={form.quantity ?? ""}
//         onChange={handleChange}
//       />

//       <label>Unit</label>
//       <select name="unit" value={form.unit} onChange={handleChange}>
//         <option value="pcs">pcs</option>
//         <option value="mL">mL</option>
//         <option value="g">g</option>
//         <option value="set">set</option>
//       </select>

//       <label>Image URL</label>
//       <input name="image" value={form.image ?? ""} onChange={handleChange} />

//       <button type="submit">{mode === "create" ? "Create" : "Update"}</button>
//     </form>
//   );
// };

// export default ProductForm;