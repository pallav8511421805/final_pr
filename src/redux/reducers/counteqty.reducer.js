import * as Actiontypes from "../actiontypes";

const init = {
  counte: 0,
};
export const counteqtyreducer = (state = init, action) => {
  switch (action.type) {
    case Actiontypes.In_qty:
      return {
        ...state,
        counte: state.counte + 1,
      };
      break;
    case Actiontypes.De_qty:
      return {
        ...state,
        counte: state.counte - 1,
      };
      break;
    default:
      return state;
      break;
  }
};
