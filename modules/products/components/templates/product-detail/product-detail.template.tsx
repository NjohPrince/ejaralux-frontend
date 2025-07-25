"use client";

import React, { ReactElement } from "react";

import classes from "./productdetail.module.css";

import { ProductType } from "@/modules/products/types/product.type";
import LazyImageAtom from "@/shared/components/atoms/lazy-image/lazy-image.atom";
import ButtonAtom from "@/shared/components/atoms/button/button.atom";
import ProductCardMolecule from "../../molecules/product-card/product-card.molecule";
import { products } from "@/shared/lib/data/products.util";
import GoBackAtom from "@/shared/components/atoms/go-back/go-back.atom";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/redux.hooks";
import { RootState } from "@/shared/redux/store";
import {
  NotificationTitleType,
  showNotification,
} from "@/shared/redux/features/notification/notification.slice";
import {
  addToCart,
  CartItem,
  removeFromCart,
} from "@/modules/cart/redux/features/cart/cart.slice";
import { formatQuantityAvailability } from "@/shared/lib/utils/map-unit.util";
import { categories } from "@/shared/lib/data/categories.util";

/**
 * ProductDetailTemplate is a React component that renders a product detail page.
 *
 * The component is passed a product object as a prop, which contains the product's
 * name, description, price, image, category, and quantity.
 *
 * The component renders a product detail page with the product's name, description,
 * price, image, and category. It also renders a "Add to Cart" button, which when
 * clicked, adds the product to the cart and shows a success notification.
 * If the product is already in the cart, the button text changes to "Remove from Cart"
 * and the button's onClick handler removes the product from the cart.
 *
 * The component also renders a list of related products at the bottom of the page.
 *
 * @param {Object} props The component props object.
 * @param {ProductType} props.product The product object.
 *
 * @returns {ReactElement} The product detail page JSX element.
 */
const ProductDetailTemplate: React.FC<{ product: ProductType }> = ({
  product,
}: {
  product: ProductType;
}): ReactElement => {
  const dispatch = useAppDispatch();
  const cartState = useAppSelector((state: RootState) => state.cartSlice);
  const category = categories.find((cat) => cat.id === product.catId);

  const relatedProducts = products
    .filter((prod) => prod.catId === product.catId && prod.id !== product.id)
    .slice(0, 4);

  const addToCartHandler = (action: "add" | "remove") => {
    if (action === "add") {
      dispatch(addToCart(product));
      dispatch(
        showNotification({
          message: "Product added to cart",
          title: NotificationTitleType.SUCCESS,
        })
      );
    } else {
      dispatch(removeFromCart(product.id));
      dispatch(
        showNotification({
          message: "Product removed from cart",
          title: NotificationTitleType.SUCCESS,
        })
      );
    }
  };

  const checkProductInCart = (id: number) => {
    return cartState.items.some((item: CartItem) => item.id === id);
  };

  const buttonText = checkProductInCart(product.id)
    ? "Remove from Cart"
    : "Add to Cart";

  return (
    <>
      <div className={`${classes.back}`}>
        <GoBackAtom />
      </div>
      <div className={`${classes.details} flex gap-32`}>
        <div className={`${classes.group} flex gap-4`}>
          <div className={`${classes.imgs} flex col gap-4`}>
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <div key={index}>
                  <LazyImageAtom
                    src={`${product?.image}`}
                    alt={product?.name}
                    width={900}
                    height={900}
                    className={`${classes.image}`}
                    onError={(e) => {
                      e.currentTarget.src = "/images/products/image11.webp";
                    }}
                  />
                </div>
              ))}
          </div>
          <div className={`${classes.image__container}`}>
            <LazyImageAtom
              src={`${product?.image}`}
              alt={product?.name}
              width={900}
              height={900}
              className={`${classes.image}`}
              onError={(e) => {
                e.currentTarget.src = "/images/products/image11.webp";
              }}
            />
          </div>
        </div>

        <div className={`flex col gap-16 space-between`}>
          <div className={`flex col gap-16`}>
            <div className={`${classes.head} flex col gap-8`}>
              <div className="flex col gap-24">
                <p className={`${classes.category}`}>{category?.name}</p>
                <p className={`${classes.availability}`}>
                  {formatQuantityAvailability(
                    product?.quantity as number,
                    product?.unit
                  )}
                </p>
              </div>
              <h2>{product?.name}</h2>
              <p>{product?.description}</p>
            </div>

            <div className={`${classes.price} flex`}>
              <h3>${product?.price}</h3>
            </div>
          </div>

          <ButtonAtom
            ariaLabel={buttonText}
            onClick={() =>
              addToCartHandler(
                checkProductInCart(product?.id) ? "remove" : "add"
              )
            }
            label={buttonText}
          />
        </div>
      </div>
      <div className={`${classes.related} flex col gap-12`}>
        <h2>Related Products</h2>
        <div className={`${classes.products__list}`}>
          {relatedProducts &&
            relatedProducts.length > 0 &&
            relatedProducts.map((product, index) => {
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
      </div>
    </>
  );
};

export default ProductDetailTemplate;
