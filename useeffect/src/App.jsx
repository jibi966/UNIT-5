import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Timer } from "./components/timer";

function App() {
  const start = 10;
  const end = 20;
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {show ? <Timer start={start} end={end} /> : ""}
      <button onClick={() => setShow(!show)}>
        {" "}
        {show ? "Hide Timer" : "Show Timer"}{" "}
      </button>
    </div>
  );
}

export default App;
