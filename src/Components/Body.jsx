import React from "react";
import { RouterProvider, createBrowserRouter, Route } from "react-router-dom";
import Start from "./Start";
import Login from "./Login";
import PageOne from "./SignUp/PageOne";
import Pagetwo from "./SignUp/Pagetwo";
import Pagethree from "./SignUp/pagethree";
import SignIn from "./Login/SignIn";
import Browse from "./Browse/Browse";
import Browse1 from "./Browse/Browse1";
import Browse2 from "./Browse/Browse2";
import Browse3 from "./Browse/Browse3";
import Browse4 from "./Browse/Browse4";

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
        { path: "/browse/1", element: <Browse1 /> },
        { path: "/browse/2", element: <Browse2 /> },
        { path: "/browse/3", element: <Browse3 /> },
        { path: "/browse/4", element: <Browse4 /> },
      ],
    }
    
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;
