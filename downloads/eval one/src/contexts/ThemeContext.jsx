import { createContext, useState } from "react";

export const ThemeContext = createContext(); // Create box!

export const ThemeContextProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={"light"}>
      {children}
    </ThemeContext.Provider>
  );
};
