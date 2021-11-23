import { callApi } from "../../lib/api";
import { actions } from '../actionContants/actionConstant';

export const getProductsData = () => {
  return async (dispatch) => {
    try {
      const result = await callApi.get('/products');
      result && dispatch({
        type: actions.GET_PRODUCTS_DATA,
        payload: result.data,
      })
    } catch (error) {
      console.log(error)
    }
  }
};