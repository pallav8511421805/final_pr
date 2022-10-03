import * as Actiontypes from "../actiontypes";

const intval = {
  cartdata: [],
};
export const cartreducer = (state = intval, action) => {
  switch (action.type) {
    case Actiontypes.Add_cart:
      const itemInCart = state.cartdata.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.qty++;
      } else {
        state.cartdata.push(action.payload);
      }
      return {
        ...state,
      };
      break;

    case Actiontypes.Delete_cart:
      return {
        ...state,
        cartdata: state.cartdata.filter((d) => d.id !== action.payload),
      };

    default:
      return state;
      break;
  }
};
