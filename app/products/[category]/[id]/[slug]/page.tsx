import { Metadata } from "next";
import { notFound } from "next/navigation";
import { JSX } from "react";

import NavbarOrganism from "@/shared/components/organisms/navbar/navbar.organism";
import { products } from "@/shared/lib/data/products.util";
import ProductDetailTemplate from "@/modules/products/components/templates/product-detail/product-detail.template";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

/**
 * Generates metadata for a product page. This function is used by Next.js to
 * generate metadata for each product page. The metadata includes the title,
 * description, and Open Graph metadata.
 *
 * @param {Object} params - The request params object.
 * @param {string} params.id - The ID of the product.
 *
 * @returns {Object} The metadata object.
 */
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
    title: `${product?.name} | EJARALUX`,
    description: `${product?.description} Now available at only $${product?.price}.`,
    openGraph: {
      title: `${product?.name} | EJARALUX`,
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

/**
 * Renders a single product page. This function fetches the product details
 * based on the provided product ID from the route parameters. If the product
 * is not found, it triggers a 404 notFound response.
 *
 * @param {Object} params - The request params object.
 * @param {string} params.id - The ID of the product.
 *
 * @returns {JSX.Element | void} The JSX element for the product page, or
 * calls `notFound` if the product is not found.
 */
export default async function SingleProductPage({
  params,
}: ProductPageProps): Promise<JSX.Element | void> {
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
