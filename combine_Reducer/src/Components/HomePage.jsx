import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addTodo } from "../Redux/Todo/action";
import { nanoid } from "nanoid";
import axios from "axios";
import { useParams } from "react-router";
const HomePage = () => {
  const [text, setText] = useState("");
  const { id } = useParams();
  const todo = useSelector((store) => store.todo.todo);

  const dispatch = useDispatch();

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    axios.get("http://localhost:8080/todo").then(({ data }) => {
      // if(!data.length) return
      dispatch(addTodo(data));
    });
  };

  const addTodos = () => {
    axios
      .post("http://localhost:8080/todo", {
        title: text,
        status: false,
        id: nanoid(),
      })
      .then(() => {
        getTodos();
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/todo/${id}`).then(getTodos);
  };

  const handleToggle = (data) => {
    axios
      .put(`http://localhost:8080/todo/${data.id}`, {
        id: data.id,
        title: data.title,
        status: data.status ? false : true,
      })
      .then(getTodos);
  };

  return (
    <div>
      {/* <Login /> */}

      <h3>HomePage</h3>

      <input
        placeholder="Add task"
        type="text"
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={() => {
          addTodos();
        }}
      >
        Add Task
      </button>

      {todo.map((e) => (
        <div key={e.id}>
          <Link to={`/todo/${id}`}>
            {e.title}
            {"   "}
          </Link>

          <button
            onClick={() => {
              {
                e.status ? false : true;
              }
              //    axios.put(`http://localhost:8080/todo/${e.id}`, {
              //    title:e.title,
              //     status: e.status?false:true,
              // });
              handleToggle(e);
            }}
          >
            {e.status ? "done" : "not done"}
          </button>
          <button
            onClick={() => {
              handleDelete(e.id);
            }}
          >
            {" "}
            Delete task
          </button>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
