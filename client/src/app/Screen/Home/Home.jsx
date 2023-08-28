import React from "react";
import "./home.css";
import RightSideBar from "./RightSideBar";
import "./home.css";
import StoryContainer from "../../Component/Story/StoryContainer";
import Posts from "../../Component/Post/Posts";
import SideNavBar from "../../Component/Nav/SideNavBar";
import { useSelector } from "react-redux";
const Home = () => {
  const user = useSelector((state) => state.user.user);
  document.title = `${user.name} (${user.username})`;
  return (
    <React.Fragment>
      <div className="wrapper">
        <SideNavBar />
        <div className=" main-content">
          <StoryContainer />
          <Posts />
        </div>
        <RightSideBar user={user} />
      </div>
    </React.Fragment>
  );
};

export default Home;
