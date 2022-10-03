import * as Actiontypes from "../actiontypes";

const intval = {
  cartdata: [],
};
export const cartreducer = (state = intval, action) => {
  console.log(action.payload, action.type);
  switch (action.type) {
    case Actiontypes.In_qty:
      return {
        ...state,
        cartdata: state.cartdata.map((c) => {
          if (c.id === action.payload) {
            return {
              id: c.id,
              qty: c.qty + 1,
            };
          } else {
            return c;
          }
        }),
      };
      break;
    case Actiontypes.De_qty:
      return {
        ...state,
        cartdata: state.cartdata.map((c) => {
          if (c.id === action.payload) {
            return {
              id: c.id,
              qty: c.qty - 1,
            };
          } else {
            return c;
          }
        }),
      };
      break;
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
