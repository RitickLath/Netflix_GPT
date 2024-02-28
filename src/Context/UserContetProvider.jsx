import React, { children } from "react";
import { useState } from "react";
import UserContext from "./UserContext";

const UserContetProvider = ({ children }) => {
  const [user, setUser] = useState([{ name: "Email", id: 1 }]);
  const [login, setlogin] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser, login , setlogin }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContetProvider;
