import { combineReducers } from "redux";
import { alertreducer } from "./alert.reducer";
import { authreducer } from "./auth.reducer";
import { categoryreducer } from "./category.reducer";
import { productreducer } from "./product.reducer";

export const Rootreducer = combineReducers({
  auth: authreducer,
  alert: alertreducer,
  categoryroot: categoryreducer,
  productroot: productreducer,
});
