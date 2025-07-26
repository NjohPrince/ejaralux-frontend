import React from "react";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { AxiosError } from "axios";

import TemplateheaderAtom from "../../atoms/template-header/template-header.atom";
import TableMolecule from "../../molecules/table/table.molecule";
import { CategoryType } from "@/modules/products/types/category.type";
import axiosInstance from "@/shared/lib/axios";

export interface GetCategoryResponse {
  status: string;
  data: CategoryType[];
}

async function fetchCategories(): Promise<CategoryType[] | null> {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore
    .getAll()
    .map(({ name, value }) => `${name}=${value}`)
    .join("; ");

  try {
    const res = await axiosInstance.get<GetCategoryResponse>("/categories", {
      headers: {
        Cookie: cookieHeader,
      },
    });

    return res.data.data;
  } catch (err) {
    const axiosErr = err as AxiosError;

    if (
      axiosErr.response?.status === 401 ||
      axiosErr.response?.status === 403
    ) {
      return null;
    }

    // ❌ log only in dev (avoid leaking info in production)
    if (process.env.NODE_ENV !== "production") {
      console.error("Unexpected error in categories:", axiosErr.message);
    }

    throw new Error("Failed to fetch categories.");
  }
}

const DashboardCategoriesTemplate = async () => {
  const categories = await fetchCategories();

  if (!categories) {
    redirect("/auth/login");
  }

  return (
    <div className={`flex col 32`}>
      <TemplateheaderAtom content="Manage Categories" />
      <TableMolecule
        columns={[
          { key: "id", header: "ID" },
          { key: "name", header: "Name" },
          { key: "actions", header: "Actions" },
        ]}
        data={categories || []}
      />
    </div>
  );
};

export default DashboardCategoriesTemplate;
