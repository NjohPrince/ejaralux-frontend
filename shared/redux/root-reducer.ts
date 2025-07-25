import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import notificationSlice from "./features/notification/notification.slice";
import cartSlice from "../../modules/cart/redux/features/cart/cart.slice";
import authSlice from "./features/auth/auth.slice";

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["items"],
};

const rootReducer = combineReducers({
  notificationSlice: notificationSlice,
  cartSlice: persistReducer(cartPersistConfig, cartSlice),
  authSlice,
});

export default rootReducer;
