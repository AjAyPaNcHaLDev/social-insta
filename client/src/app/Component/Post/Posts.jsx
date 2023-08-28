import React, { useState, useEffect } from "react";
import "./Posts.css";
import avtar from "../../../assets/img/avtar.png";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineVerified } from "react-icons/md"; //verified icon

import { FaRegComment } from "react-icons/fa"; //commment icon
import { FiHeart } from "react-icons/fi"; //heart
import { FiSend } from "react-icons/fi"; //send icon
import { GrEmoji } from "react-icons/gr";
import SaveIcon from "../../../assets/svg/save.svg";
import { Story } from "../Story/StoryContainer";
import postImg2 from "../../../assets/img/post3.png";
// import postVideo1 from "../../assets/video/Snapinsta.app_318030508_6231348780211580_4678221001253827483_n.mp4";
// import postVideo2 from "../../assets/video/Snapinsta.app_332785891_193743133274221_6500870927742052364_n.mp4";
const Posts = () => {
  return (
    <div className="Posts">
      <Post content={{}} />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

const Post = () => {
  const [desHeight, setDesHeight] = useState("1.3em");
  const desLength = 1000;
  const countCommnet = 10;
  useEffect(() => {
    desLength <= 100 ? setDesHeight("") : null;
  });
  return (
    <div className="post">
      {/* post header area */}
      <div className="post-header">
        <div
          style={{
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Story item={{ wallpaper: avtar, type: "private" }} height={60} />
          <div className="post-info">
            <div>
              <h3> ajaypanchal_1</h3>
              <MdOutlineVerified style={{ color: "#0000ff", fontSize: 24 }} />
              <ul
                style={{
                  display: "flex",
                  gap: 20,
                  marginLeft: -20,
                  color: "#8f8f8f",
                }}
              >
                <li>24h</li>
                <li>
                  <a href="#" style={{ color: "rgb(0, 149, 246)" }}>
                    Follow
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div>ajaypanchal_1</div>
            </div>
          </div>
        </div>
        <BsThreeDots
          style={{
            fontSize: 30,
            cursor: "pointer",
          }}
        />
      </div>

      {/* post content area */}
      <div className="post-content">
        <img src={postImg2} className="post-img" />
        {/* <video className="post-video" controls>
          <source src={postVideo2} type="video/mp4" />
        </video> */}
      </div>

      {/* post comment ,share save area */}
      <div className="postFooters" style={{ color: "rgb(73 62 62)" }}>
        <div className="buttons">
          <div>
            {/* buttons */}
            <button>
              <FiHeart />
            </button>
            <button>
              <FaRegComment />
            </button>
            <button>
              <FiSend />
            </button>
          </div>
          <div>
            {/* buttons */}
            <button>
              <img src={SaveIcon} alt="save" height={35} />
            </button>
          </div>
        </div>
        <h3>{0} likes</h3>
        <p
          style={{
            height: desHeight,
            width: "100%",
            color: "#8e8e8e",
            fontFamily: "sans-serif",
            overflow: "hidden",
            lineHeight: 1.5,
            textOverflow: "ellipsis",
          }}
        >
          ap_badmash_writer_ रोज 🤗 हंसना चाहते है तो फ़ॉलो करें प्लीज 🤗.!!
          @ap_badmash_writer_ . .Save for latter 💬 Like 🌹 Share 🤝 #reelfeelit
          #reelkarofeelkaro #feelkaroreelkaro 607 #feelitreelit #funnyquotes
          #lovequotes #love #funnymemes #meme #memes #mohabbat #ishq #instagram
          #asthetic #asthetics # a sth etic #bestie #behappy #friendshipquotes
          #explore #explorepage #dailyquotes #exploremore #funcky634
        </p>
        {desHeight == "1.3em" ? (
          <span
            style={{
              fontSize: 17,
              color: "#8e8e8e",
              fontFamily: "sans-serif",
              padding: 15,
              position: "relative",
              margin: "-30px 0px",
              top: -10,
              cursor: "pointer",
            }}
            onClick={() => setDesHeight(" ")}
          >
            ...more
          </span>
        ) : null}
        {countCommnet > 3 ? (
          <h4
            style={{ cursor: "pointer", color: "#8e8e8e" }}
            onClick={() => {}}
          >
            {" "}
            View all {countCommnet} commments
          </h4>
        ) : null}
        <div className="comment-inp-box">
          <textarea
            type={"text"}
            name="comment"
            placeholder="Add a comment..."
            className="comment-input"
          />
          <button> Post</button>
          <button>
            <GrEmoji />
          </button>
        </div>
        <hr />
      </div>
    </div>
  );
};
export default Posts;
