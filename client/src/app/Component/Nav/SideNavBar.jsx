import React, { useState } from "react";
import { GrHomeRounded, GrSearch } from "react-icons/gr";
import { ImCompass2, ImPodcast } from "react-icons/im";
import { AiOutlineHeart } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { TbSquareRoundedPlus } from "react-icons/tb";
import { AiOutlineMenu } from "react-icons/ai";
import "./SideNavBar.css";
import Reel from "../../../assets/svg/instagram-reels-icon.svg";
import logo from "../../../assets/img/instalogo.png";
import avtar from "../../../assets/img/avtar.png";
import { Link } from "react-router-dom";
const SideNavBar = () => {
  return (
    <React.Fragment>
      <div className="navbar">
        <div className="logo-box">
          <img
            src={logo}
            alt="logo"
            height={25}
            style={{ margin: "1em 2em" }}
          />
        </div>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">
              <GrHomeRounded />
              <span> Home</span>
            </Link>
          </li>
          <li className="nav-list-item">
            <a href="#">
              <GrSearch />
              <span>Search</span>
            </a>
          </li>
          <li className="nav-list-item">
            <a href="#">
              <ImCompass2 />
              <span>Explore</span>
            </a>
          </li>
          <li className="nav-list-item">
            <a href="#">
              <img src={Reel} alt="reels" height={18} />
              <span>Reels</span>
            </a>
          </li>
          <li className="nav-list-item">
            <a href="#">
              <RiMessengerLine />
              <span> Messages</span>
            </a>
          </li>
          <li className="nav-list-item">
            <a href="#">
              <AiOutlineHeart />
              <span> Notifications</span>
            </a>
          </li>
          <li className="nav-list-item">
            <a href="#">
              <TbSquareRoundedPlus />
              <span> Create</span>
            </a>
          </li>
          <li className="nav-list-item">
            <a href="#">
              <img src={avtar} height={17} />
              <span> Profile</span>
            </a>
          </li>
        </ul>
        <ul className="nav-btm-fixed">
          <li>
            <AiOutlineMenu /> <span>More</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
export default SideNavBar;
