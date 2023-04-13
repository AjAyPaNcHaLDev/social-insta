import React from "react";
import { Link } from "react-router-dom";
import avtar from "../../assets/img/ajaydp.jpg";
import Footer from "../../Component/Footer/Footer";
import { Story } from "../../Component/Story/StoryContainer";
import "./rightsidebar.css";
const RightSideBar = () => {
  return (
    <div className=" main-right-sidebar">
      <Profile />
      <Suggestions />
      <Footer className="footer2" />
    </div>
  );
};

const Profile = () => {
  return (
    <div className="side-box">
      <div style={{ display: "flex", gap: 10 }}>
        <Story item={{ wallpaper: avtar, type: "private" }} height={60} />
        <Link
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            lineHeight: 1.3,
            // border: "1px solid black",
          }}
          to={`/ajaypanchal_1`}
        >
          <span>ajaypanchal_1</span>
          <span style={{ color: "#8e8e8e" }}>Ajay Panchal</span>
        </Link>
      </div>
      <button className="btn-switch" href="#">
        Switch
      </button>
    </div>
  );
};

const Suggestions = () => {
  return (
    <React.Fragment>
      <div className="side-box">
        <div>
          <h4 style={{ color: "#8e8e8e" }}>Suggestions for you</h4>
        </div>
        <b>
          <a href="#">See All</a>
        </b>
      </div>
      <SuggestionsItem />
      <SuggestionsItem />
      <SuggestionsItem />
    </React.Fragment>
  );
};

const SuggestionsItem = () => {
  return (
    <div className="side-box">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          color: "rgba( 0, 55, 107)",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Story item={{ wallpaper: avtar, type: "private" }} height={30} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            cursor: "pointer",
          }}
        >
          <b>Ajay Panchal</b>
          <small>Suggested for you</small>
        </div>
      </div>
      <button className="btn-switch" href="#">
        Follow
      </button>
    </div>
  );
};
export default RightSideBar;
