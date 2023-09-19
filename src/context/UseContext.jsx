/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import UseLocalStorage from "./UseLocalStorage";

export const authContext = createContext(null);

const userDataInitial = {
  userId: null,
  email: "",
  role: "",
  access_token: "",
  refresh_token: ""
};

export const ContextProvider = ({ children }) => {
  const {
    getUserIdStorage,
    getEmailStorage,
    getAccessTokenStorage,
    getRefreshTokenStorage,
    setLocalStorage,
  } = UseLocalStorage();

  const [, setDataUser] = useState(userDataInitial);

  const getUserId = () => {
    return getUserIdStorage();
  };
  const getEmail = () => {
    return getEmailStorage();
  };
  const getAccessToken = () => {
    return getAccessTokenStorage();
  };
  const getRefreshToken = () => {
    return getRefreshTokenStorage();
  };
  const login = (userAuth) => {
    setLocalStorage(1, userAuth);
    setDataUser(userAuth);
  };
  const logout = () => {
    setLocalStorage(2, null);
    setDataUser(userDataInitial);
  };

  return (
    <authContext.Provider
      value={{
        setDataUser,
        getAccessToken,
        getRefreshToken,
        getUserId,
        getEmail,
        login,
        logout,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
