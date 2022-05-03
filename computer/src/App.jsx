import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TodoInput } from "./components/TodoInput";
import { DataPage } from "./components/DataPage";

function App() {
  return (
    <div className="App">
      <TodoInput />
      <DataPage />
    </div>
  );
}

export default App;
