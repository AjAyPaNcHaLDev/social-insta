const express = require("express");
const router = express.Router();
const userAction = require("./functions/User");
const Auth = require("./functions/Auth");
const jwt = require("jsonwebtoken");
const Const = require("./const");
const user = require("./db/model/user.model");

const checkSecurity = (req, res, next) => {
  try {
    const secure = jwt.verify(req.headers["authorization"], Const.jwtKey);
    if (secure) {
      next();
      return;
    }
    res.send(
      res.send({
        status: Const.Unauthorized,
        msg: "Please Login First",
        error: true,
      })
    );
  } catch (e) {
    res.send({
      status: Const.Unauthorized,
      msg: "Please Login First ",
      error: e,
    });
  }
};

router.post("/insert/user", async (req, res) => {
  await userAction.insertUser(req, res);
});
router.post("/auth", async (req, res) => {
  await Auth.authUser(req, res);
});
router.post("/auth/fb", async (req, res) => {
  await Auth.authFb(req, res);
});

router.post("/tk", checkSecurity, async (req, res) => {
  try {
    const secure = await jwt.verify(req.headers["authorization"], Const.jwtKey);
    const { _id } = secure;
    const result = await user.findOne({ _id }).select("-password");
    console.log(result);
    const { name = "", username = "", email = "", phone = "" } = result;
    res.send({
      status: Const.Authorized,
      name,
      username,
      email,
      phone,
      _id: result._id,
      error: false,
      msg: "OK",
    });
  } catch (e) {}
});

module.exports = router;
