import React, { useState } from "react";
import "./Profile.css";
import SideNavBar from "../../Component/Nav/SideNavBar";
import Highlights from "../../Component/Highlight/Highlights";
import { useSelector } from "react-redux";
import UserInfo from "./UserInfo";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
const Profile = () => {
  const user = useSelector((state) => state.user.user);
  document.title = `${user.name} (${user.username})`;

  return (
    <React.Fragment>
      <SideNavBar />
      <main className="Profile-Screen">
        <UserInfo user={user} />
        <Highlights />
        <NavBar />
        <Outlet />
      </main>
    </React.Fragment>
  );
};

export default Profile;
