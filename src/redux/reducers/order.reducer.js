import * as Actiontypes from "../actiontypes";

const initval = {
  order: [],
};
export const orderreducer = (state = initval, action) => {
  switch (action.type) {
    case Actiontypes.Getorder:
      return {
        order: action.payload,
      };
      break;
    case Actiontypes.Addorder:
      return {
        order: state.order.concat(action.payload),
      };
      break;
    default:
      break;
  }
};
