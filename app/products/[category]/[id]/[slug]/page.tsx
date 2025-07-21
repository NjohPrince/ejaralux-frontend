import { notFound } from "next/navigation";

import NavbarOrganism from "@/shared/components/organisms/navbar/navbar.organism";
import { products } from "@/shared/lib/utils/products.util";
import ProductDetailTemplate from "@/modules/products/components/templates/product-detail/product-detail.template";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function SingleProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((product) => product.id === Number(id));

  if (!product) return notFound();

  return (
    <div className={""}>
      <NavbarOrganism />
      <ProductDetailTemplate product={product} />
    </div>
  );
}
