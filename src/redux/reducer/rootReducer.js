import { combineReducers } from "redux";
import carouselReducer from "./carouselReducer";
import cartReducer from "./cartReducer";
import categoryReducer from "./categoryReducer";
import { productReducer } from "./productReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
  CarouselItems: carouselReducer,
  Categories: categoryReducer,
  Products: productReducer,
  CartDetails: cartReducer,
  User: userReducer
});