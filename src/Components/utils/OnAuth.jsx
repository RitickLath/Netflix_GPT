import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { app } from "./firebase";
import UserContext from "../../Context/UserContext";

const auth = getAuth(app);

const OnAuth = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const { islogin, setIslogin } = useContext(UserContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //console.log("you are logged in" + user);
        setIslogin(true);
        setUser(user.email);
        navigate("/browse");
      } else {
        console.log("you aren't logged in");
        navigate("/");
      }
    });
  }, []);
  return <div></div>;
};

export default OnAuth;
