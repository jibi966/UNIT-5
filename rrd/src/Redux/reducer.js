import { ADD_PRODUCT } from "./action";
export const setProduct = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT:
      return payload;
    default:
      return state;
  }
};
