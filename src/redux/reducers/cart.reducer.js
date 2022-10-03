import * as Actiontypes from "../actiontypes";

const intval = {
  cartdata: [],
};
export const cartreducer = (state = intval, action) => {
  switch (action.type) {
    case Actiontypes.Add_cart:
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.qty++;
      } else {
        state.cart.push({ ...action.payload, qty: 1 });
      }
      return {
        ...state,
        // cartdata: state.cartdata.concat(action.payload),
      };
      break;

    default:
      return state;
      break;
  }
};
