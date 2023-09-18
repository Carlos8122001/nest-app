import React from "react";
import { createContext } from "react";
import jwtDecode from "jwt-decode";
import useLocalStorage from "../hooks/useLocalStorage";

export const dataContext = createContext();
const { getLocalStorage } = useLocalStorage();

const datainitial = null;

const access_token = getLocalStorage("access_token");

export default function ContextProvider({ children }) {
  let data = "";
  if (!access_token) {
    data = datainitial;
  } else {
    data = jwtDecode(access_token);
  }
  return (
    <dataContext.Provider value={{ data }}>{children}</dataContext.Provider>
  );
}
