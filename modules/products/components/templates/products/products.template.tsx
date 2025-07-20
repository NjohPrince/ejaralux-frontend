"use client";

import React from "react";

import classes from "./products.module.css";
import CategoryGroupMolecule from "../../molecules/category-group/category-group.molecule";
import { products } from "@/shared/lib/utils/products.util";
import ProductCardMolecule from "../../molecules/product-card/product-card.molecule";

const ProductsTemplate = () => {
  const [index, setActiveIndex] = React.useState(0);
  const [filteredProducts, setFilteredProducts] = React.useState(products);

  React.useEffect(() => {
    if (index === 0) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.catId === index)
      );
    }
  }, [index]);

  return (
    <div className={`${classes.products} flex col`}>
      <main className={`${classes.hero} flex col`}>
        <div className={`flex col gap-32`}>
          <div className={`flex col gap-16`}>
            <h1>Glow Like You Were Born for It.</h1>
            <p>
              Explore luxury skincare designed to nourish, brighten, and elevate
              your natural beauty. Because your glow deserves the very best.
            </p>
          </div>
        </div>
      </main>
      <CategoryGroupMolecule idx={index} setActiveIndex={setActiveIndex} />

      <div className={`${classes.products__list}`}>
        {filteredProducts &&
          filteredProducts.length > 0 &&
          filteredProducts.map((product, index) => {
            return (
              <ProductCardMolecule
                name={product.name}
                description={product.description}
                price={product.price}
                id={product.id}
                catId={product.catId}
                key={index}
                image={`/images/products/image${Math.ceil(product.id / 4)}${
                  ((product.id - 1) % 4) + 1
                }.webp`}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ProductsTemplate;
