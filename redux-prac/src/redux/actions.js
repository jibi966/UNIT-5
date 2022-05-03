export const SET_PRODUCT = "SET_PRODUCT";
export const SELECTED_PRODUCT = "SELECTED_PRODUCT";
export const SORT_PRODUCT = "SORT_PRODUCT";
// action creators

export const setProduct = (products) => {
  return {
    type: SET_PRODUCT,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: SELECTED_PRODUCT,
    payload: product,
  };
};

export const sortedProduct = (products) => {
  return {
    type: SORT_PRODUCT,
    payload: products,
  };
};
