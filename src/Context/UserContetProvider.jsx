import React, { children } from "react";
import { useState } from "react";
import UserContext from "./UserContext";

const UserContetProvider = ({ children }) => {
  const [user, setUser] = useState(); // to store logedin data
  const [islogin, setIslogin] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser, islogin , setIslogin }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContetProvider;
