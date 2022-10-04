import { combineReducers } from "redux";
import { alertreducer } from "./alert.reducer";
import { authreducer } from "./auth.reducer";
import { cartreducer } from "./cart.reducer";
import { categoryreducer } from "./category.reducer";
import { orderreducer } from "./order.reducer";
import { productreducer } from "./product.reducer";

export const Rootreducer = combineReducers({
  auth: authreducer,
  alert: alertreducer,
  categoryroot: categoryreducer,
  productroot: productreducer,
  cartroot: cartreducer,
  order: orderreducer,
});
