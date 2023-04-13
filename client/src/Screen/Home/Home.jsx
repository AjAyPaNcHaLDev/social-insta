import React from "react";
import "./home.css";
import RightSideBar from "./RightSideBar";
import "./home.css";
import StoryContainer from "../../Component/Story/StoryContainer";
import Posts from "../../Component/Post/Posts";
import SideNavBar from "../../Component/Nav/SideNavBar";
const Home = () => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <SideNavBar />
        <div className=" main-content">
          <StoryContainer />
          <Posts />
        </div>
        <RightSideBar />
      </div>
    </React.Fragment>
  );
};

export default Home;
