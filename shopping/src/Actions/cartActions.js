// actionTypes.js (optional)
export const ADD_TO_CART = "ADD_TO_CART";

// action creator for adding products to the cart
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
