"use client";

import React from "react";

import classes from "./cart.module.css";

import GoBackAtom from "@/shared/components/atoms/go-back/go-back.atom";
import LazyImageAtom from "@/shared/components/atoms/lazy-image/lazy-image.atom";
import { formatQuantityAvailability } from "@/shared/lib/utils/map-unit.util";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/redux.hooks";
import { RootState } from "@/shared/redux/store";
import { categories } from "@/shared/lib/data/categories.util";
import { CategoryType } from "@/modules/products/types/category.type";
import {
  addToCart,
  decreaseQuantity,
} from "@/modules/cart/redux/features/cart/cart.slice";
import ButtonAtom from "@/shared/components/atoms/button/button.atom";

const CartTemplate = () => {
  const dispatch = useAppDispatch();
  const cartState = useAppSelector((state: RootState) => state.cartSlice);

  const getProductCategory = (catId: number): CategoryType | undefined => {
    return categories.find((cat) => cat.id === catId);
  };

  return (
    <div className={`${classes.cart}`}>
      <div className={`${classes.back}`}>
        <GoBackAtom />
      </div>

      <div className={`${classes.items} flex col gap-16`}>
        {cartState?.items &&
          cartState?.items?.length > 0 &&
          cartState?.items?.map((product) => {
            return (
              <div
                key={product?.id}
                className={`${classes.details} flex gap-16 center`}
              >
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

                <div className={`${classes.data} flex space-between gap-16`}>
                  <div className={`flex col gap-16`}>
                    <div className={`flex col gap-16`}>
                      <div className={`${classes.head} flex col gap-8`}>
                        <div className="flex col gap-24">
                          <p className={`${classes.category}`}>
                            {getProductCategory(product?.catId)?.name}
                          </p>
                          <p className={`${classes.availability}`}>
                            {formatQuantityAvailability(
                              product?.quantity as number,
                              product?.unit
                            )}
                          </p>
                        </div>
                        <h2>{product?.name}</h2>
                        <p>{product?.description}</p>
                        <div className={`${classes.price} flex`}>
                          <h3>${product?.price}</h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${classes.cart__control} flex col space-between gap-24`}
                  >
                    <div className={`${classes.quantity} flex a-center gap-16`}>
                      <button
                        aria-label="decrease"
                        onClick={() => {
                          dispatch(decreaseQuantity(product?.id));
                        }}
                      >
                        -
                      </button>
                      <span>{product?.cartQuantity}</span>
                      <button
                        aria-label="increase"
                        onClick={() => {
                          dispatch(addToCart(product));
                        }}
                      >
                        +
                      </button>
                    </div>

                    <h3 className={`${classes.total}`}>
                      Total:{" "}
                      <span>${product?.price * product?.cartQuantity}</span>
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <div className={`${classes.checkout} flex space-between`}>
        <div></div>

        <div className={`${classes.total} flex col gap-16`}>
          <h3>
            Grand Total:{" "}
            <span>
              $
              {cartState?.items?.reduce(
                (acc, item) => acc + item.price * item.cartQuantity,
                0
              )}
            </span>
          </h3>
          <ButtonAtom ariaLabel="Save Order" label="Save Order" />
        </div>
      </div>
    </div>
  );
};

export default CartTemplate;
