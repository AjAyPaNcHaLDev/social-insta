import React, { useEffect, useState } from "react";
import SideNavBar from "./Component/Nav/SideNavBar";
import Home from "./Screen/Home/Home";
import "./App.css";
import Profile from "./Screen/Profile/Profile";
import Login from "./Screen/Auth/Login";
import SignUp from "./Screen/Auth/SignUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const App = () => {
  const isAuth = false;

  const router = createBrowserRouter([
    {
      path: "/",
      element: isAuth == true ? <Home /> : <Login />,
    },
    {
      path: ":username",
      element: <Profile />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/SignUp",
      element: <SignUp />,
    },
  ]);
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
};

export default App;
