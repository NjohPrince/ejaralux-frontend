import { Metadata } from "next";

import ProductsTemplate from "@/modules/products/components/templates/products/products.template";
import NavbarOrganism from "@/shared/components/organisms/navbar/navbar.organism";

export const metadata: Metadata = {
  title: "EJARALUX | Skincare Products",
  description:
    "Explore luxury skincare designed to nourish, brighten, and elevate your natural beauty. Because your glow deserves the very best.",
};

export default function ProductsPage() {
  return (
    <div className={""}>
      <NavbarOrganism />
      <ProductsTemplate />
    </div>
  );
}
