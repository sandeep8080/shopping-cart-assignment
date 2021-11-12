import { callApi } from "../../functions/api";
import { actions } from '../actionContants/actionConstant';

export const getCarouselItems = () => {
  return async (dispatch) => {
    try {
      const result = await callApi.get('/banners');
      console.log(result.data);
      result && dispatch({
        type: actions.GET_CAROUSEL_ITEMS,
        payload: result.data,
      })
    }
    catch (error) {
      console.log(error)
    }
  }
};