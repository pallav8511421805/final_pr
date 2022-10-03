import * as Actiontypes from "../actiontypes";
export const addcartaction = (val) => (dispatch) => {
  dispatch({ type: Actiontypes.Add_cart, payload: val });
};

export const Deletecartaction = (id) => (dispatch) => {
  dispatch({ type: Actiontypes.Delete_cart, payload: id });
};
