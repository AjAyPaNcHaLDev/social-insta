import React, { useEffect, useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { fetchLogin } from "../store/userSlice/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { Suspense, lazy } from "react";
const Profile = lazy(() => import("./Screen/Profile/Profile"));
const ReelsGrid = lazy(() => import("./Screen/Profile/ReelsGrid"));
const Saved = lazy(() => import("./Screen/Profile/Saved"));
const Login = lazy(() => import("./Screen/Auth/Login"));
const SignUp = lazy(() => import("./Screen/Auth/SignUp"));
const PostGrid = lazy(() => import("./Screen/Profile/PostGrid"));
const Tagged = lazy(() => import("./Screen/Profile/Tagged"));
const Home = lazy(() => import("./Screen/Home/Home"));
const App = () => {
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
      children: [
        { path: "", element: <PostGrid /> },
        { path: "reels", element: <ReelsGrid /> },
        { path: "saved", element: <Saved /> },
        { path: "tagged", element: <Tagged /> },
      ],
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
      <Suspense fallback={<h1>Loading...</h1>}>
        <RouterProvider router={router} />
      </Suspense>
    </React.Fragment>
  );
};

export default App;
