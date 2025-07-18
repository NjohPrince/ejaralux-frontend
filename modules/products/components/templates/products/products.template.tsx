import React from "react";

import classes from "./products.module.css";

const ProductsTemplate = () => {
  return (
    <main className={`${classes.hero} flex col`}>
      <div className={`flex col gap-32`}>
        <div className={`flex col gap-16`}>
          <h1>Glow Like You Were Born for It</h1>
          <p>
            Explore luxury skincare designed to nourish, brighten, and elevate
            your natural beauty. Because your glow deserves the very best.
          </p>
        </div>
      </div>
    </main>
  );
};

export default ProductsTemplate;
