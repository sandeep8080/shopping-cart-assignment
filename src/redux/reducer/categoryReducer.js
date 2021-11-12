import { actions } from "../actionContants/actionConstant";

const initialState = {
  CategoriesItems: []
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_CATEGORY_DATA:
      return {
        ...state,
        CategoriesItems: action.payload
      }
    default:
      return {
        ...state
      }
  }
};
