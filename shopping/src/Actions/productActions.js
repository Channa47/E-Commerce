// actionTypes.js (optional)
export const ADD_PRODUCTS = "ADD_PRODUCTS";

// action creator for adding products to the store
export const addProducts = (products) => {
  return {
    type: ADD_PRODUCTS,
    payload: products,
  };
};
