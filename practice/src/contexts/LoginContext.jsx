import { createContext } from "react";
import { useState } from "react";
export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const toggle = () => {
    setLogin(!login);
  };
  return (
    <LoginContext.Provider value={{ login, toggle }}>
      {children}
    </LoginContext.Provider>
  );
};
