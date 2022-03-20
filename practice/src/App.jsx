import { useContext, useState } from "react";
import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthContext } from "./contexts/AuthContext";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Data";
import { About } from "./components/Wrapper";
import { Users } from "./components/Users";
import { UserList } from "./components/UserList";
import { Login } from "./components/Login";

function App() {
  const value = useContext(AuthContext);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserList />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
