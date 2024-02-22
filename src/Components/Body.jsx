import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Start from "./Start";
import Login from "./Login";
import PageOne from "./SignUp/PageOne";


const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Start />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <PageOne/>
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;
