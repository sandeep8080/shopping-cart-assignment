import { actions } from "../actionContants/actionConstant";

const initialState = {
  cartItems: [],
  isOpen: false
}
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case actions.OPEN_CART:
      return {
        ...state,
        isOpen: action.payload
      }
    case actions.UPDATE_TO_CART:
      return {
        ...state,
        cartItems: action.payload
      }
    default:
      return {
        ...state
      }
  }
};