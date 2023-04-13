import React, { useState } from "react";
import "./StoryContainer.css";
import dummyStory from "./dumystory";
import avter from "../../assets/img/avtar.png";
const StoryContainer = () => {
  return (
    <div className="story-main">
      {dummyStory.map((item, key) => {
        return <Story item={item} key={key} height={60} />;
      })}
    </div>
  );
};

const Story = (props) => {
  let storyBorder = [
    "white",
    "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
    "linear-gradient(to right, rgb(0, 150, 0), rgb(0, 200, 0))",
    "linear-gradient(to right, rgb(255, 0, 0), rgb(150, 0, 0))",
  ];

  switch (props.item.type) {
    case "public":
      storyBorder = storyBorder[1];
      break;
    case "private":
      storyBorder = storyBorder[2];
      break;
    case "error":
      storyBorder = storyBorder[3];
      break;
    default:
      storyBorder = storyBorder[0];
  }

  const [spin, setSpin] = useState(false);
  return (
    <div
      onClick={() => {
        setSpin(!spin);
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: " pointer",
        gap: 5,
      }}
    >
      <div style={{ position: "relative", zIndex: -1 }}>
        <img
          src={props.item.wallpaper}
          style={{
            cursor: " pointer",
            borderRadius: "50%",
            border: "2px solid white",
          }}
          alt="avtar"
          height={props.height}
        />
        <div
          className={spin == true ? "story-spin" : ""}
          style={{
            background: storyBorder,
            borderRadius: "50%",
            position: "absolute",
            padding: 2,
            height: props.height + +2 + props.height / 100,
            width: props.height + 2 + props.height / 100,
            top: "-2%",
            left: "-2%",
            zIndex: -1,
          }}
        ></div>
      </div>
      {props.item.username != false ? (
        <center
          style={{
            textTransform: "lowercase",
            maxWidth: 86,
            color: "#8e8e8e",
            fontFamily: "sans-serif",
            fontSize: 12,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {props.item.username}
        </center>
      ) : null}
    </div>
  );
};

export { Story };
export default StoryContainer;
