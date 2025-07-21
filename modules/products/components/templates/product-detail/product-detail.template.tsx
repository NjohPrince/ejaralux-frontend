"use client";

import React from "react";

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
  addToCart,
  removeFromCart,
} from "@/shared/redux/features/cart/cart.slice";
import {
  NotificationTitleType,
  showNotification,
} from "@/shared/redux/features/notification/notification.slice";

const ProductDetailTemplate: React.FC<{ product: ProductType }> = ({
  product,
}) => {
  const dispatch = useAppDispatch();
  const cartState = useAppSelector((state: RootState) => state.cartSlice);

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
    return cartState.items.some((item) => item.id === id);
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
        </div>

        <div className={`flex col gap-16`}>
          <div className={`${classes.head} flex col gap-8`}>
            <h2>{product?.name}</h2>
            <p>{product?.description}</p>
          </div>

          <div className={`${classes.price} flex`}>
            <h3>${product?.price}</h3>
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
