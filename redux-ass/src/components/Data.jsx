import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../redux/action";
import { updateTodo } from "../redux/action";
import { Link } from "react-router-dom";
import axios from "axios";
export const Data = () => {
  const dispatch = useDispatch();
  const data = useSelector((e) => e.todo);
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3030/todos/${id}`);
    dispatch(removeTodo(id));
  };
  const updateTodos = (id) => {
    dispatch(updateTodo(id));
  };
  return (
    <div>
      {data.length > 0
        ? data.map((data) => (
            <div key={data.id}>
              <Link to={`/todo/${data.id}`}>
                {data.title}--{data.status ? "Completed" : "Not Completed"}
              </Link>
              <button onClick={() => updateTodos(data.id)}>TOGGLE</button>
              <button onClick={() => handleDelete(data.id)}>DELETE</button>
            </div>
          ))
        : ""}
    </div>
  );
};
