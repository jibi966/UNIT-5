import { Routes, Route } from "react-router-dom";
import { Input } from "./Input";
import { TodoDetails } from "./TodoDetails";
export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Input />} />
        <Route path="/todo/:id" element={<TodoDetails />} />
      </Routes>
    </div>
  );
};
