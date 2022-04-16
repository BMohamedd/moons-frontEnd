import React, { createContext, useState } from "react";

export const authContext = createContext();

export function AuthContextProvider({ children }) {
  const [CurrentUserInfo, changeCurrentUserInfo] = useState({
    jwt: localStorage.getItem("Moontoken"),
    username: "",
    id: "",
  });
  // console.log(CurrentUserInfo);
  return (
    <authContext.Provider value={{ CurrentUserInfo, changeCurrentUserInfo }}>
      {children}
    </authContext.Provider>
  );
}
