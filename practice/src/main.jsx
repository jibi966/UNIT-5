import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { LoginProvider } from "./contexts/LoginContext";

ReactDOM.render(
  <React.StrictMode>
    <LoginProvider>
      <BrowserRouter>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </BrowserRouter>
    </LoginProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
