import { actions } from "../actionContants/actionConstant";
const initialState = {
  items: []
};


export default function carouselReducer(state = initialState, action) {

  switch (action.type) {
    case actions.GET_CAROUSEL_ITEMS:
      return {
        ...state,
        items: action.payload,
      }
    default:
      return {
        ...state,
      }
  }
};