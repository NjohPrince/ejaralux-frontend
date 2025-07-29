"use client";

import React, { useState, useEffect } from "react";

import classes from "./categoryform.module.css";

import { CategoryType } from "@/modules/products/types/category.type";

interface Props {
  mode: "create" | "edit";
  initialData?: CategoryType;
  onSubmit: (data: Omit<CategoryType, "id">, id?: number) => void;
}

const CategoryFormMolecule = ({ mode, initialData, onSubmit }: Props) => {
  const [name, setName] = useState("");

  useEffect(() => {
    if (mode === "edit" && initialData) {
      setName(initialData.name);
    }
  }, [mode, initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name }, initialData?.id);
  };

  return (
    <form onSubmit={handleSubmit} className={`${classes.form}`}>
      <label>Name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter category name"
        required
      />
      <button type="submit">{mode === "create" ? "Create" : "Update"}</button>
    </form>
  );
};

export default CategoryFormMolecule;
