import { useEffect } from "react";
import axios from "axios";
import { setProduct } from "../Redux/action";
import { useDispatch } from "react-redux";
export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
      dispatch(setProduct(res.data));
      console.log("object");
    });
  }, []);
  return <div>Home</div>;
};
