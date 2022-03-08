import { useEffect, useState } from "react";
import axios from "axios";
export const Groceryinput = () => {
  const [text, setText] = useState("");
  const [groceryList, setgroceryList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:3001/lists")
      .then((res) => setgroceryList(res.data));
  };

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          axios
            .post("http://localhost:3001/lists", {
              title: text,
              purchased: false,
            })
            .then(() => {
              getData();
            });
        }}
      >
        SAVE
      </button>
      {groceryList.map((e) => (
        <div key={e.id}>{e.title}</div>
      ))}
    </div>
  );
};
