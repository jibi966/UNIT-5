import { useEffect, useState } from "react";
import axios from "axios";
export const Groceryinput = () => {
  const [text, setText] = useState("");
  const [groceryList, setgroceryList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getData();
  }, [page]);

  const getData = () => {
    axios
      .get(`http://localhost:3001/lists?_page=${page}&_limit=3`)
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
      <button onClick={() => (page > 1 ? setPage(page - 1) : "")}>Prev</button>
      <button onClick={() => (page < 5 ? setPage(page + 1) : "")}>Next</button>
    </div>
  );
};
