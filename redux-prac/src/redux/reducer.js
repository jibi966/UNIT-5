import { SET_PRODUCT } from "./actions";
import { SORT_PRODUCT } from "./actions";
const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCT:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const sortProducts = (state = initialState, { type, payload }) => {
  switch (type) {
    case SORT_PRODUCT:
      return {
        ...state,
        products: [...payload.sort((a, b) => a.price - b.price)],
      };
    default:
      return state;
  }
};
