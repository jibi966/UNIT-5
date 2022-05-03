import { useSelector } from "react-redux";
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";
import HomePage from "../Components/HomePage";
import Login from "../Components/Login";
import Navbar from "../Components/Navbar";
import Notfound from "../Components/Notfound";
import TodoDetails from "../Components/TodoDetails";

export const AllRoutes = () => {
  // const token = localStorage.getItem('token');
  const token = useSelector((store) => store.login.token);
  console.log("tokenaa:", token);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path={"/"}
          element={
            token == !undefined ? (
              <HomePage />
            ) : (
              <Link to={"/login"}>go to login</Link>
            )
          }
        />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/todo/:id"} element={<TodoDetails />} />

        <Route path={"*"} element={<Notfound />} />
      </Routes>
    </>
  );
};
