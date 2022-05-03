import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { setProduct } from "../redux/actions";

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => dispatch(setProduct(res.data)));
  };
  //   const data = useSelector((store) => console.log(store));
  return <div>Welcome Homeeeee</div>;
};
