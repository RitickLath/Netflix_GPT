import React from "react";
import { RouterProvider, createBrowserRouter, Route } from "react-router-dom";
import Start from "./Start";
import Login from "./Login";
import PageOne from "./SignUp/PageOne";
import Pagetwo from "./SignUp/Pagetwo";
import Pagethree from "./SignUp/pagethree";
import SignIn from "./Login/SignIn";

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
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;
