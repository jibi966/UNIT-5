import { createStore, combineReducers } from "redux";
import { productReducer } from "./reducer";
import { sortProducts } from "./reducer";
const reducer = combineReducers({
  allProducts: productReducer,
  sortedProducts: sortProducts,
});
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
