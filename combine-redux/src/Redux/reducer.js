import { ADD_TODO } from "./action";

// the initial state
const initState = {
  todo: [],
  loading: false,
  error: false,
};

export const TodoReducer = (store, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return { ...store, todo: payload };
    //for loading set loading true
    // then after getting the data with ADD_TODO set it to false
    //=========================================================

    // for case error
    default:
      return store;
  }
};
