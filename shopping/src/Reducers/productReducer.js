// productReducer.js

import { ADD_PRODUCTS } from "../Actions/productActions";

const initialState = {
  data: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
