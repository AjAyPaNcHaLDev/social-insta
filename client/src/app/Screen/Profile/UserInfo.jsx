import React from "react";
import { URL } from "../../Config";
import { uploadProfilePicture } from "../../../store/userSlice/userSlice";
import { Story } from "../../Component/Story/StoryContainer";
import avtar from "../../../assets/img/avtar.png";
import { TbRosette } from "react-icons/tb";
import { useDispatch } from "react-redux";

const UserInfo = ({ user }) => {
  const { username = "", name = "", bio = "", profile_picture = null } = user;
  const dispatch = useDispatch();
  return (
    <div className="user-info">
      <label className="dp-box" htmlFor="pic">
        <Story
          item={{
            wallpaper:
              profile_picture != null
                ? `${URL}/images/${profile_picture}`
                : avtar,
            type: "private",
          }}
          height={170}
        />
        <span className="dp-box-span"> click to update</span>
      </label>

      <input
        type="file"
        hidden
        onChange={(e) => {
          dispatch(uploadProfilePicture(e.target.files[0]));
        }}
        accept="image/png, image/jpeg"
        id="pic"
      />
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
            <TbRosette />
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
        <div className="name mt-5">
          <h4>{name}</h4>
        </div>
        <div className="bio">{bio} </div>
      </div>
    </div>
  );
};

export default UserInfo;
