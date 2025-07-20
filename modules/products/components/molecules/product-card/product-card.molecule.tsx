import React from "react";
import Link from "next/link";

import classes from "./productcard.module.css";

import { ProductType } from "@/modules/products/types/product.type";
import { slugify } from "@/shared/lib/utils/slugify.util";
import { categories } from "@/shared/lib/utils/categories.util";
import LazyImageAtom from "@/shared/components/atoms/lazy-image/lazy-image.atom";

const ProductCardMolecule: React.FC<ProductType> = ({
  id,
  name,
  price,
  image,
  catId,
  description,
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
        <div className={`${classes.price} flex`}>
          <h3>${price}</h3>
        </div>
      </article>
    </Link>
  );
};

export default ProductCardMolecule;
