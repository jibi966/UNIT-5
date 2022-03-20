import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((res) => setData(res.data));
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "175px",
        }}
      >
        {/* Iterate over products and show links */}
        {data.map((el) => {
          return (
            <Link to={`/products/${el.id}`} key={el.id}>
              <img src={el.img} alt="" />
              <h2>{el.name}</h2>
            </Link>
          );
        })}
      </div>
    </>
  );
};
