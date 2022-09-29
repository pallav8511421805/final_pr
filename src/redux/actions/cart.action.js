import * as Actiontypes from "../actiontypes";
export const addcartaction = (val) => (dispatch) => {
  dispatch({ type: Actiontypes.Add_cart, payload: val });
};
