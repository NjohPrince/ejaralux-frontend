"use client";

import React from "react";
import { JSX } from "react";

import classes from "./products.module.css";

import CategoryGroupMolecule from "../../molecules/category-group/category-group.molecule";
import { products } from "@/shared/lib/data/products.util";
import ProductCardMolecule from "../../molecules/product-card/product-card.molecule";
import { usePaginationHook } from "@/shared/lib/hooks/use-pagination.hook";
import { ProductType } from "@/modules/products/types/product.type";
import { CategoryType } from "@/modules/products/types/category.type";
import { useAppDispatch } from "@/shared/lib/hooks/redux.hooks";
import {
  NotificationTitleType,
  showNotification,
} from "@/shared/redux/features/notification/notification.slice";

type ProductTemplateProps = {
  categories: CategoryType[];
  error?: string;
};

/**
 * The ProductsTemplate component renders the main products page.
 *
 * It displays the navigation bar, the list of products filtered by category,
 * and the pagination controls.
 *
 * @returns {JSX.Element} The ProductsTemplate component.
 */
const ProductsTemplate: React.FC<ProductTemplateProps> = ({
  categories,
  error,
}): JSX.Element => {
  const [index, setActiveIndex] = React.useState(0);
  const dispatch = useAppDispatch();
  const [filteredProducts, setFilteredProducts] = React.useState(products);

  if (error && error.length > 0) {
    dispatch(
      showNotification({
        title: NotificationTitleType.SUCCESS,
        message:
          "An error occured loading the categories. Please refresh the page to try again",
      })
    );
  }

  React.useEffect(() => {
    if (index === 0) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.catId === index)
      );
    }
  }, [index]);

  const {
    currentPage,
    totalPages,
    currentItems: paginatedProducts,
    goToPage,
  } = usePaginationHook(filteredProducts, 10);

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
      <CategoryGroupMolecule
        idx={index}
        setActiveIndex={setActiveIndex}
        cats={categories}
      />

      <div className={`${classes.products__list}`}>
        {paginatedProducts &&
          paginatedProducts.length > 0 &&
          paginatedProducts.map((product: ProductType, index: number) => {
            return (
              <ProductCardMolecule
                name={product?.name}
                description={product?.description}
                price={product?.price}
                id={product?.id}
                catId={product?.catId}
                key={index}
                image={`/images/products/image${Math.ceil(product.id / 4)}${
                  ((product.id - 1) % 4) + 1
                }.webp`}
                quantity={product?.quantity}
                unit={product?.unit}
              />
            );
          })}
      </div>

      <div className={`${classes["pagination-controls"]} flex center gap-16`}>
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`${classes["pagination-arrow"]} delay`}
        >
          ←
        </button>

        <span className={classes["pagination-status"]}>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`${classes["pagination-arrow"]} delay`}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default ProductsTemplate;
