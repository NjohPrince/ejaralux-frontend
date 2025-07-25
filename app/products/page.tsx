import { Metadata } from "next";
import { cache, JSX } from "react";

import ProductsTemplate from "@/modules/products/components/templates/products/products.template";
import NavbarOrganism from "@/shared/components/organisms/navbar/navbar.organism";
import { CategoryType } from "@/modules/products/types/category.type";
import { APIResponseTypeWithData } from "@/modules/auth/types/auth.types";

export const metadata: Metadata = {
  title: "Skincare Products | EJARALUX",
  description:
    "Explore luxury skincare designed to nourish, brighten, and elevate your natural beauty. Because your glow deserves the very best.",
};

const fetchCategories = cache(
  async (): Promise<APIResponseTypeWithData<CategoryType[]>> => {
    const res = await fetch(`${process.env.API_URL}/categories`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("Failed to fetch categories");

    return res.json();
  }
);

/**
 * The ProductsPage component renders the main products page.
 *
 * It displays the navigation bar and the ProductsTemplate component.
 *
 * @returns {JSX.Element} The ProductsPage component.
 */
export default async function ProductsPage(): Promise<JSX.Element> {
  let categories: CategoryType[] = [];
  let error: string | null = null;

  try {
    const response = await fetchCategories();
    categories = response?.data;
  } catch (err) {
    console.error({ err });
    error = "Oops! Failed to load categories. Please try again later.";
  }

  return (
    <div className={""}>
      <NavbarOrganism />
      <ProductsTemplate categories={categories} error={error as string} />
    </div>
  );
}
