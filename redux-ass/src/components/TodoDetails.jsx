import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
export const TodoDetails = () => {
  const { id } = useParams();
  const idOfTodo = id;
  const data = useSelector((e) => e.todo);
  const filtered = data.filter((e) => e.id == idOfTodo);
  return filtered.map((e) => (
    <div key={idOfTodo}>
      <h2>{e.title}</h2>
    </div>
  ));
};
