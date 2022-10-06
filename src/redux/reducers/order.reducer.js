import * as Actiontypes from "../actiontypes";

const initval = {
  orderdata: [],
};
export const orderreducer = (state = initval, action) => {
  switch (action.type) {
    case Actiontypes.Getorder:
      return {
        orderdata: action.payload,
      };
      break;
    case Actiontypes.Addorder:
      return {
        orderdata: state.orderdata.concat(action.payload),
      };
      break;
    default:
      return state;
      break;
  }
};
