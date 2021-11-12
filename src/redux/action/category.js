import { callApi } from "../../functions/api";
import { actions } from '../actionContants/actionConstant';

export const getCategoryData = () => {
  return async (dispatch) => {
    try {
      const result = await callApi.get('/categories');
      result && dispatch({
        type: actions.GET_CATEGORY_DATA,
        payload: result.data,
      })
    } catch (error) {
      console.log(error)
    }
  }
};