export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};

export const removeTodo = (data) => {
  return {
    type: REMOVE_TODO,
    payload: data,
  };
};

export const updateTodo = (data) => {
  return {
    type: UPDATE_TODO,
    payload: data,
  };
};
