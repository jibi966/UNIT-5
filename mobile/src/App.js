// import logo from "./logo.svg";
import "./App.css";

function App() {
  let data1 = [
    { name: "android" },
    { name: "blackberry" },
    { name: "iphone" },
    { name: "windows phone" },
  ];
  let data2 = [
    { name: "samsung" },
    { name: "HTC" },
    { name: "microsoft" },
    { name: "apple" },
  ];
  return (
    <div>
      <h1>Mobile Operating systems</h1>
      {data1.map((el) => comp(el.name))}
      <h1>Mobile Manufactures</h1>
      {data2.map((el) => comp(el.name))}
    </div>
  );
}

function comp(item) {
  return (
    <ul>
      <li>{item}</li>
    </ul>
  );
}

export default App;
