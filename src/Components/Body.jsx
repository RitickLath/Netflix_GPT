import React, { useContext } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  useNavigate,
} from "react-router-dom";
import Start from "./Start";
import Login from "./Login";
import PageOne from "./SignUp/PageOne";
import Pagetwo from "./SignUp/Pagetwo";
import Pagethree from "./SignUp/pagethree";
import SignIn from "./Login/SignIn";
import Browse from "./Browse/Browse";

import UserContext from "../Context/UserContext";
import MainUI from "./MainUI/MainUI";

const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      
      children: [
        {
          path: "/",
          element: <Start />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",

          children: [
            {
              path: "/signup",
              element: <PageOne />,
            },
            {
              path: "/signup/regform",
              element: <Pagetwo />,
            },
            {
              path: "/signup/regform/paymentpicker",
              element: <Pagethree />,
            },
          ],
        },
      ],
    },
    {
      path: "/browse",
      children: [
        { path: "/browse", element: <Browse /> },
        { path: "/browse/1", element: <MainUI /> },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;
