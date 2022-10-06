import * as Actiontypes from "../actiontypes";

const initval = {
  isload: false,
  error: "",
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
    case Actiontypes.Load_Product:
      return {
        ...state,
        isload: true,
        error: "",
      };
    case Actiontypes.Error_Product:
      return {
        ...state,
        isload: false,
        productdata: [],
        error: action.payload,
      };
    default:
      return state;
      break;
  }
};
