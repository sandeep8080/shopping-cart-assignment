import { actions } from '../actionContants/actionConstant';

export const addUser = (userDetails) => {
  return {
    type: actions.ADD_USER,
    payload: userDetails,
  }
};