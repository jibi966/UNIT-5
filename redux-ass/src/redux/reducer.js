import { ADD_TODO } from "./action";
import { REMOVE_TODO } from "./action";
import { UPDATE_TODO } from "./action";
const initState = {
  todo: [],
};
export const todoReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return { ...store, todo: payload };
    case REMOVE_TODO:
      return { ...store, todo: store.todo.filter((el) => el.id != payload) };
    case UPDATE_TODO:
      return {
        ...store,
        todo: store.todo.map((el) => {
          if (el.id == payload) {
            el.status = !el.status;
          }
          return el;
        }),
      };
    default:
      return store;
  }
};
