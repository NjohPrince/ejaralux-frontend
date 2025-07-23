import { Metadata } from "next";
import { JSX } from "react";

import ProductsTemplate from "@/modules/products/components/templates/products/products.template";
import NavbarOrganism from "@/shared/components/organisms/navbar/navbar.organism";

export const metadata: Metadata = {
  title: "Skincare Products | EJARALUX",
  description:
    "Explore luxury skincare designed to nourish, brighten, and elevate your natural beauty. Because your glow deserves the very best.",
};

/**
 * The ProductsPage component renders the main products page.
 *
 * It displays the navigation bar and the ProductsTemplate component.
 *
 * @returns {JSX.Element} The ProductsPage component.
 */
export default function ProductsPage(): JSX.Element {
  return (
    <div className={""}>
      <NavbarOrganism />
      <ProductsTemplate />
    </div>
  );
}
