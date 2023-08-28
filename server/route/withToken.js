const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Const = require("../const");
const user = require("../db/model/user.model");
const authorization = require("./authorization.js");

router.post("/tk", authorization, async (req, res) => {
  try {
    const secure = await jwt.verify(req.headers["authorization"], Const.jwtKey);
    const { _id } = secure;
    const result = await user.findOne({ _id }).select("-password");
    res.send({
      status: Const.Authorized,
      ...result._doc,
      error: false,
      msg: "OK",
    });
  } catch (e) {}
});

module.exports = router;
