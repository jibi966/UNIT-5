// import { add, mult } from "./calc";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
// console.log(add(1, 2));
// console.log(add(1, 2));
// console.log(mult(1, 2));

// const h1 = document.createElement("h1");
// h1.innerText = "welcome";
// h1.classList.add("red");

// const e1 = React.createElement(
//   "h1",
//   { className: "red" },
//   "welcome from react"
// );

ReactDOM.render(
  <div>
    <h1 className="red">Hello from babel</h1>
    <p>this is from babel</p>
    <input />
  </div>,
  document.getElementById("root")
);
