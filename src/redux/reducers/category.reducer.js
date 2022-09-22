import * as Actiontypes from "../actiontypes";

const intval = {
  isload: false,
  category: [],
  error: "",
};
export const categoryreducer = (state = intval, action) => {
  switch (action.type) {
    case Actiontypes.getcategory:
      return {
        ...state,
        isload: false,
        category: action.payload,
        error: "",
      };

    case Actiontypes.Add_category:
      return {
        ...state,
        isload: false,
        category: state.category.concat(action.payload),
        error: "",
      };

    case Actiontypes.Edit_category:
      return {
        ...state,
        isload: false,
        category: state.category.map((c) => {
          if (c.id === action.payload.id) {
            return action.payload;
          } else {
            return c;
          }
        }),
        error: "",
      };
    case Actiontypes.Delete_category:
      return {
        ...state,
        isload: false,
        category: state.category.filter((d) => d.id !== action.payload),
        error: "",
      };

    case Actiontypes.Load_category:
      return {
        ...state,
        isload: true,
        error: "",
      };
    case Actiontypes.Error_category:
      return {
        ...state,
        isload: false,
        category: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
