import { actions } from "../actionContants/actionConstant";

const initialState = {
  userDetails: []
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_USER:
      return {
        ...state,
        userDetails: action.payload
      }
    default:
      return {
        ...state
      }
  }
};
