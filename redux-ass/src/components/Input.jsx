import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/action";
import { Data } from "./Data";
import axios from "axios";
export const Input = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get("http://localhost:3030/todos")
      .then((res) => dispatch(addTodo(res.data)));
  };
  const postData = () => {
    axios
      .post("http://localhost:3030/todos", {
        title: text,
        status: false,
      })
      .then(() => getData());
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter something..."
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={postData}>ADD</button>
      <Data />
    </div>
  );
};
