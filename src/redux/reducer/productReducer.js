import { actions } from "../actionContants/actionConstant";

const initialState = {
  products: []
}
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_PRODUCTS_DATA:
      return {
        ...state,
        products: action.payload
      }
    default:
      return {
        ...state
      }
  }
};