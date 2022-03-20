import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  return <AuthContext.Provider value={2}>{children}</AuthContext.Provider>;
};
