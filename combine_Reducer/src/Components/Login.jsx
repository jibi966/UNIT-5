import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import { setLogin } from "../Redux/Login/action";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector((store) => store.login.token);

  // console.log('token:', token)

  const handleLogin = () => {
    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password,
        // email: "eve.holt@reqres.in",
        // password: "cityslicka"
      })
      .then(function (response) {
        console.log("geTtinf", response);
        localStorage.setItem("token", response.data.token);
        let gettoken = localStorage.getItem("token");
        dispatch(setLogin(gettoken));
        return navigate("/");
      });
  };

  //     const handleSubmit=(e)=>{
  // e.preventDefault()
  // axios.post("https://reqres.in/api/login",{
  //     email: email,
  //     password: password
  //     // email: "eve.holt@reqres.in",
  //     // password: "cityslicka"
  // }).then(function (response) {
  //     console.log("geTtinf",response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  //     }

  return (
    <div className="login">
      <h1> Login Page</h1>
      <div>"email": "eve.holt@reqres.in", "password": "cityslicka"</div>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="email"
        value={email}
        placeholder="Email"
      />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        value={password}
        placeholder="Password"
      />

      <button
        onClick={() => {
          handleLogin();
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
