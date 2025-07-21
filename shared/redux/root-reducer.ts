import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import notificationSlice from "./features/notification/notification.slice";
import cartSlice from "../../modules/cart/redux/features/cart/cart.slice";

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["items"],
};

const rootReducer = combineReducers({
  notificationSlice: notificationSlice,
  cartSlice: persistReducer(cartPersistConfig, cartSlice),
});

export default rootReducer;
