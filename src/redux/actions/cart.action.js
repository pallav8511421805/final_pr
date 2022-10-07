import * as Actiontypes from "../actiontypes";
export const addcartaction = (val) => (dispatch) => {
  dispatch({ type: Actiontypes.Add_cart, payload: val });
};

export const buycartaction = (val) => (dispatch) => {
  dispatch({ type: Actiontypes.Buycart, payload: val });
};

export const Deletecartaction = (id) => (dispatch) => {
  dispatch({ type: Actiontypes.Delete_cart, payload: id });
};

export const incrementqty = (id) => (dispatch) => {
  dispatch({ type: Actiontypes.In_qty, payload: id });
};

export const decrementqty = (id) => (dispatch) => {
  dispatch({ type: Actiontypes.De_qty, payload: id });
};


export const emptycart = () => (dispatch) => {
  dispatch({ type: Actiontypes.Emptycart, payload: [] });
};
