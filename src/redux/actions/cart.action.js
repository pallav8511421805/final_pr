import * as Actiontypes from "../actiontypes";
export const getcartaction = () => (dispatch) => {
  dispatch({ type: Actiontypes.Get_cart });
};
export const addcartaction = (val) => (dispatch) => {
  dispatch({ type: Actiontypes.Add_cart, payload: val });
};
