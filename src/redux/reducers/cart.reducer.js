import * as Actiontypes from "../actiontypes";

const intval = {
  cartdata: [],
};
export const cartreducer = (state = intval, action) => {
  console.log(state.cartdata);
  switch (action.type) {
    case Actiontypes.Add_cart:
      return {
        ...state,
        cartdata: state.cartdata.concat(action.payload),
      };
      break;

    default:
      return state;
      break;
  }
};
