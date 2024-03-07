import React, { children } from "react";
import { useState } from "react";
import UserContext from "./UserContext";

const UserContetProvider = ({ children }) => {
  const [user, setUser] = useState(); // to store logedin data
  const [name, setName] = useState();
  const [islogin, setIslogin] = useState(false);
  const [movieList, setMovieList] = useState();

  return (
    <UserContext.Provider
      value={{ user, setUser, islogin, setIslogin, movieList, setMovieList, name, setName }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContetProvider;
