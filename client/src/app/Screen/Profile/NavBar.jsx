import React, { useEffect, useState } from "react";
import { RiPriceTag2Fill } from "react-icons/ri";
import Reel from "../../../assets/svg/instagram-reels-icon.svg";
import SaveIcon from "../../../assets/svg/save.svg";
import { BsGrid3X3 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="prof-navbar">
      <Link
        href="./"
        icon={<BsGrid3X3 style={{ fontSize: 14 }} />}
        label={"POSTS"}
        style={{ padding: 5, fontSize: "large" }}
      />
      <Link
        href="./reels"
        icon={<img src={Reel} alt="reels" height={18} />}
        label={"REELS"}
        style={{ padding: 5, fontSize: "large" }}
      />
      <Link
        href="./saved"
        icon={<img src={SaveIcon} alt="SAVED" height={18} />}
        label={"SAVED"}
        style={{ padding: 5, fontSize: "large" }}
      />
      <Link
        href="./tagged  "
        icon={<RiPriceTag2Fill style={{ fontSize: 18 }} />}
        label={"TAGGED"}
        style={{ padding: 5, fontSize: "large" }}
      />
    </div>
  );
};

const Link = ({ icon, label, href = "" }) => {
  return (
    <NavLink to={href}>
      {icon}
      <span>{label}</span>
    </NavLink>
  );
};

export default NavBar;
