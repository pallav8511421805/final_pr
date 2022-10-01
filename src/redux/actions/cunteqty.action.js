import * as Actiontypes from "../actiontypes";

export const incrementqty = () => (dispatch) => {
  dispatch({ type: Actiontypes.In_qty });
};

export const decrementqty = () => (dispatch) => {
  dispatch({ type: Actiontypes.De_qty });
};
