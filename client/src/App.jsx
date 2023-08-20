import React, { useEffect, useState } from "react";
import Home from "./Screen/Home/Home";
import "./App.css";
import Profile from "./Screen/Profile/Profile";
import Login from "./Screen/Auth/Login";
import SignUp from "./Screen/Auth/SignUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { fetchLogin } from "./store/userSlice/userSlice";
import { useSelector, useDispatch } from "react-redux";
const App = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogined = useSelector((state) => state.user.isLogined);
  useEffect(() => {
    dispatch(fetchLogin());
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: isLogined != true ? <Login /> : <Home />,
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
