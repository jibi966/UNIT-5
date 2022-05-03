import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home";
import { All } from "./components/All";

function App() {
  return (
    <div className="App">
      <h2>Hello</h2>
      <Home />
      <All />
    </div>
  );
}

export default App;
