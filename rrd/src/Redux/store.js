import { createStore } from "redux";
import { setProduct } from "./reducer";
export const store = createStore(setProduct);
