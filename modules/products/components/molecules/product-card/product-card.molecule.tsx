import React from "react";
import Link from "next/link";

import classes from "./productcard.module.css";

import { ProductType } from "@/modules/products/types/product.type";
import { slugify } from "@/shared/lib/utils/slugify.util";
import { categories } from "@/shared/lib/data/categories.util";
import LazyImageAtom from "@/shared/components/atoms/lazy-image/lazy-image.atom";
import { formatQuantityAvailability } from "@/shared/lib/utils/map-unit.util";

/**
 * A ProductCardMolecule component that displays a product card. It takes in all the required fields
 * for a product and displays them in a card format. The component is a link to the product details page.
 *
 * @param {string} id - The id of the product.
 * @param {string} name - The name of the product.
 * @param {number} price - The price of the product.
 * @param {string} image - The URL of the product image.
 * @param {number} catId - The id of the category the product belongs to.
 * @param {string} description - The description of the product.
 * @param {number} quantity - The quantity of the product in stock.
 * @param {string} unit - The unit of measurement for the quantity.
 *
 * @returns A React component that displays a product card.
 */
const ProductCardMolecule: React.FC<ProductType> = ({
  id,
  name,
  price,
  image,
  catId,
  description,
  quantity,
  unit,
}) => {
  return (
    <Link
      href={`/products/${slugify(
        categories.find((c) => c.id === catId)?.name as string
      )}/${id}/${slugify(name)}`}
      style={{
        textDecoration: "none",
      }}
    >
      <article
        className={`${classes.product__card} flex col delay gap-16 space-between`}
      >
        <div className={`${classes.head} flex col gap-16`}>
          <LazyImageAtom
            src={`${image}`}
            alt={name}
            width={600}
            height={600}
            className={`${classes.image}`}
            onError={(e) => {
              e.currentTarget.src = "/images/products/image11.webp";
            }}
          />
          <div className={`${classes.head} flex col gap-8`}>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className={`${classes.price} flex space-between`}>
          <p>{formatQuantityAvailability(quantity as number, unit)}</p>
          <h3>${price}</h3>
        </div>
      </article>
    </Link>
  );
};

export default ProductCardMolecule;
