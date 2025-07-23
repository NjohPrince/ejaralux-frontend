import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "@/modules/products/types/product.type";

export interface CartItem extends ProductType {
  cartQuantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    /**
     * Add a product to the cart. If the product already exists in the cart,
     * increase the quantity by one. Otherwise, add the product to the cart
     * with a quantity of one.
     * @param {ProductType} action.payload The product to add to the cart.
     */
    addToCart(state, action: PayloadAction<ProductType>) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.cartQuantity += 1;
      } else {
        state.items.push({ ...action.payload, cartQuantity: 1 });
      }
    },

    /**
     * Remove a product from the cart. If the product does not exist in the
     * cart, do nothing.
     * @param {number} action.payload The id of the product to remove from the cart.
     */
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    /**
     * Decrease the quantity of a product in the cart by one. If the product's quantity
     * reaches zero, remove the product from the cart.
     * @param {number} action.payload The id of the product whose quantity should be decreased.
     */
    decreaseQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        if (item.cartQuantity > 1) {
          item.cartQuantity -= 1;
        } else {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        }
      }
    },

    /**
     * Clears all products from the cart.
     * This will reset the cart state to an empty array.
     */
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
