import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export const Users = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get("https://reqres.in/api/users").then(({ data }) => {
      setList([...data.data]);
      console.log(data.data);
    });
  }, []);
  return (
    <div>
      {list.map((el) => {
        return (
          <div key={el.id} style={{ padding: "20px" }}>
            <h2>
              {el.first_name} {el.last_name}
            </h2>

            <Link to={`/users/${el.id}`}>Details</Link>
          </div>
        );
      })}
    </div>
  );
};
