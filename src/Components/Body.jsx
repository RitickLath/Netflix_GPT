import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Start from "./Start";
import Login from "./Login";

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
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;
