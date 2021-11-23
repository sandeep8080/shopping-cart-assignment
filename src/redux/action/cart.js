import { callApi } from "../../lib/api";
import { actions } from '../actionContants/actionConstant';

export const toggleCart = (isToggle) => {
  return {
    type: actions.OPEN_CART,
    payload: isToggle,
  }
};

export const updateCart = (id, operation) => {
  return async (dispatch, getState) => {

    const productList = getState().Products.products;
    const cartItems = getState().CartDetails.cartItems;

    const currItem = productList.find(({ id: currentItemId }) => currentItemId === id);
    const isItemInCart = cartItems.find(({ id }) => id === currItem.id);
    let finalItem = [];
    if (!isItemInCart) {
      finalItem = [...cartItems, { ...currItem, count: 1 }]
    } else {
      finalItem = cartItems.map(item => {
        if (item.id === currItem.id) {
          operation === 'add' ? item.count = item.count + 1 : item.count = item.count - 1
        }
        return item;
      }).filter(({ count }) => count)
    }
    try {
      const result = await callApi.post('/addToCart', id);
      result && dispatch({
        type: actions.UPDATE_TO_CART,
        payload: finalItem
      })
    } catch (error) {
      console.log(error)
    }
  }
};