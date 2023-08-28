const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Const = require("../const");
const user = require("../db/model/user.model");
const authorization = require("./authorization.js");
const path = require("path");
const uploadImage = require("../functions/storage.js");
router.post(
  "/user/pic",
  authorization,
  uploadImage.single("profile_picture"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.sendStatus(500).json({
          status: Const.Unauthorized,
          msg: "File not uploded",
          error: true,
        });
      }
      const userTK = await jwt.verify(
        req.headers["authorization"],
        Const.jwtKey
      );
      const { _id } = userTK;

      const u = await user.findById(_id);
      u.profile_picture = req.file.filename;
      const r = await u.save();

      return res.json({
        status: Const.Authorized,
        msg: "Profile Picture Upload Successful",
        profile_picture: r.profile_picture,
        error: false,
      });
    } catch (error) {
      return res.sendStatus(401).json({
        status: Const.Unauthorized,
        msg: "Something went wrong",
        error,
      });
    }
  }
);

// get API

router.get("/images/:img", (req, res) => {
  const img = req.params.img;
  res.sendFile(path.resolve(__dirname, "../uploads/images", img));
});
router.get("/videos/:video", (req, res) => {
  const video = req.params.video;
  res.sendFile(path.resolve(__dirname, "../uploads/videos", video));
});
module.exports = router;
