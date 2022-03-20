// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// console.log(Animal.name);

// class Reactangle {
//   constructor(b, h) {
//     this.breadth = b;
//     this.height = h;
//   }
//   getArea() {
//     return this.calcArea();
//   }
//   calcArea() {
//     return this.breadth * this.height;
//   }
// }
// const area = new Reactangle(5, 6);
// console.log(area.getArea());

const { createStore } = require("redux");

const reducer = (store, { type, payload }) => {
  //some action that check the state and update the values in the store
  switch (type) {
    case "ADD_COUNT":
      return { ...store, count: store.count + payload };
    case "ADD_TODO":
      return { ...store, todos: [...store.todos, payload] };
    default:
      return store;
  }
};
const initState = { count: 0, todos: [] };

// class Store {
//   constructor(reducer, initialState) {
//     this.reducer = reducer;
//     this.state = initialState;
//   }
//   getState() {
//     return this.state;
//   }
//   dispatch(action) {
//     this.state = this.reducer(this.state, action);
//   }
// }

const store = createStore(reducer, initState);
console.log(store.getState());
store.dispatch({ type: "ADD_COUNT", payload: 1 });
console.log(store.getState());
store.dispatch({ type: "ADD_TODO", payload: { time: 10, what: "Wait" } });
console.log(store.getState());
store.dispatch({ type: "ADD_TODO", payload: { time: 20, what: "complete" } });
console.log(store.getState());
