import { Metadata } from "next";
import { notFound } from "next/navigation";

import NavbarOrganism from "@/shared/components/organisms/navbar/navbar.organism";
import { products } from "@/shared/lib/data/products.util";
import ProductDetailTemplate from "@/modules/products/components/templates/product-detail/product-detail.template";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((product) => product.id === Number(id));

  if (!product)
    return {
      title: "Product Not Found",
      description: "This product doesn't exist.",
    };

  return {
    title: `${product?.name} | EJARAFLUX`,
    description: `${product?.description} Now available at only $${product?.price}.`,
    openGraph: {
      title: `${product?.name} | EJARAFLUX`,
      description: product?.description,
      images: [
        {
          url: product?.image || "/images/products/blur.webp",
          alt: product?.name,
        },
      ],
    },
  };
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
