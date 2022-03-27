// actions
export const ADD_TODO = "ADD_TODO";
// for loading and errors
// export const ADD_LOADING = "ADD_LOADING";
// export const GET_ERROR = "GET_ERROR";
// action creators
export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo });
