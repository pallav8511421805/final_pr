import * as Actiontypes from "../actiontypes";

const initval = {
  orderdata: [],
};
export const orderreducer = (state = initval, action) => {
  console.log(action.payload, action.type);
  switch (action.type) {
    case Actiontypes.Getorder:
      return {
        orderdata: action.payload,  
      };
      break;
    case Actiontypes.Addorder:
      return {
        orderdata: state.orderdata.push(action.payload),
      };
      break;
    default:
      return state;
      break;
  }
};
