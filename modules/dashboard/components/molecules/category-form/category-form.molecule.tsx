"use client";

import React, { useState, useEffect } from "react";

import classes from "./categoryform.module.css";

import { CategoryType } from "@/modules/products/types/category.type";
import MailIcon from "@/shared/components/icons/mail.icon";
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
              iconLeft={<MailIcon size="20" color="var(--dark-color)" />}
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
