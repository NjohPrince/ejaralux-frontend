import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import notificationSlice from "./features/notification/notification.slice";
import cartSlice from "./features/cart/cart.slice";

const persistConfig = {
  key: "cart",
  storage,
  whitelist: ["cart"],
};

const combinedRootReducers = {
  notificationSlice,
  cart: persistReducer(persistConfig, cartSlice),
};

export default combinedRootReducers;
