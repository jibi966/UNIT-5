import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";
export const Login = () => {
  const value = useContext(LoginContext);
  return <div>hello {value} </div>;
};
