import { add, mult } from "./calc";
import "./index.css";

console.log(add(1, 2));
console.log(add(1, 2));
console.log(mult(1, 2));

const h1 = document.createElement("h1");
h1.innerText = "welcome";
h1.classList.add("red");

document.getElementById("root").appendChild(h1);
