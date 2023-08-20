import React, { useEffect } from "react";
import "./Profile.css";
import { Story } from "../../Component/Story/StoryContainer";
import ajaydp from "../../assets/img/ajaydp.jpg";
import SideNavBar from "../../Component/Nav/SideNavBar";
import { RiPriceTag2Fill } from "react-icons/ri";
import Reel from "../../assets/svg/instagram-reels-icon.svg";
import { TbRosette } from "react-icons/tb";
import Highlights from "../../Component/Highlight/Highlights";
import SaveIcon from "../../assets/svg/save.svg";
import { BsGrid3X3 } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { PORT } from "../../Config";

const Profile = () => {
  document.title = "Ajay Panchal (@ajaypanchal_1)";

  const parms = useParams();

  return (
    <React.Fragment>
      <SideNavBar />
      <div className="Profile-Screen">
        <UserInfo />
        <Highlights />
        <NavBar />
      </div>
    </React.Fragment>
  );
};

const UserInfo = () => {
  const parms = useParams();
  useEffect(() => {
    getUser();
  });
  const { username } = parms;
  const getUser = async () => {
    // axios
    //   .post(
    //     `${location.protocol}//${location.hostname}:${PORT}/user`,
    //     { username },
    //     {
    //       headers: {
    //         authorization: localStorage.getItem("token"),
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   )
    //   .then((res) => {})
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  return (
    <div className="user-info">
      <div className="dp-box">
        <Story item={{ wallpaper: ajaydp, type: "private" }} height={170} />
      </div>
      <div>
        <div
          className="box-flex"
          style={{ justifyContent: "left", alignItems: "center", gap: 10 }}
        >
          <h3>{username}</h3>
          <button className="edit-btn">Edit Profile</button>
          <button
            style={{
              background: "transparent",
              border: "none",
              fontSize: "larger",
              textAlign: "center",
            }}
          >
            <TbRosette />{" "}
          </button>
        </div>
        <div
          className="box-flex"
          style={{ justifyContent: "left", alignItems: "center", gap: 10 }}
        >
          <button className="btn-no-border">
            <b>30</b>
            <span style={{ color: "black", fontWeight: 100 }}>posts</span>
          </button>
          <button className="btn-no-border">
            <b>30</b>
            <span style={{ color: "black", fontWeight: 100 }}> followers</span>
          </button>
          <button className="btn-no-border">
            <b>30</b>
            <span style={{ color: "black", fontWeight: 100 }}> following</span>
          </button>
        </div>
        <div className="name">
          <h4>AjAy PaNcHaL</h4>
        </div>
        <div className="bio">
          ╭━━━━━━━━━━━━━╮ ┃╱╱╱╱╱╱╱╱┏┓╱╱╱┃ ┃╱╱╱┏┓╱╱┏╯┃╱╱╱┃ ┃╱╱┏┛┗┓╱┗┓┃╱╱╱┃
          ┃╱╱┗┓┏┛╱╱┃┃╱╱╱┃ ┃╱╱╱┗┛╱╱╱┃┃╱╱╱┃ ┃╱╱╱╱╱╱╱╱┗┛╱╱╱┃ ╰━━━━━━━━━━━━━
        </div>
      </div>
    </div>
  );
};

const NavBar = () => {
  return (
    <ul className="prof-navbar">
      <li>
        <a href="#">
          <BsGrid3X3 style={{ fontSize: 14 }} />
          <span>POSTS</span>
        </a>
      </li>
      <li>
        <a href="#">
          <img src={Reel} alt="reels" height={18} />
          <span>REELS</span>
        </a>
      </li>
      <li>
        <a href="#">
          <img src={SaveIcon} alt="save" height={18} />
          <span>SAVED</span>
        </a>
      </li>
      <li>
        <a href="#">
          <RiPriceTag2Fill style={{ fontSize: 18 }} />
          <span>TAGGED</span>
        </a>
      </li>
    </ul>
  );
};

export default Profile;
