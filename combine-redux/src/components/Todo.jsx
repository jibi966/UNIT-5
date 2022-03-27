import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/action";
import axios from "axios";

export const Todo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todo);

  useEffect(() => {
    getData();
  }, []);
  const addTodos = () => {
    axios
      .post("http://localhost:3030/todos", {
        title: text,
        status: false,
      })
      .then(() => getData());
  };

  const getData = () => {
    axios.get("http://localhost:3030/todos").then(({ data }) => {
      dispatch(addTodo(data));
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Jote something"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => addTodos()}>Add</button>
      {todos.map((el, i) => (
        <div key={i}>{el.title}</div>
      ))}
    </div>
  );
};
