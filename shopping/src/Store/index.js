import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import productReducer from "../Reducers/productReducer";
import cartReducer from "../Reducers/cartReducer";

// Combine reducers
const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

// Create store with thunk middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
