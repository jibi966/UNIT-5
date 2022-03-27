// actions
export const ADD_PRODUCT = "add_product";
// action creators
export const setProduct = (data) => {
  return {
    type: ADD_PRODUCT,
    payload: data,
  };
};
