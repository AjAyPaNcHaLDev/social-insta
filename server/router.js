const express = require("express");
const router = express.Router();
const userAction = require("./functions/User");
const Auth = require("./functions/Auth");
const jwt = require("jsonwebtoken");
const Const = require("./const");

const checkSecurity = (req, res, next) => {};

router.post("/insert/user", async (req, res) => {
  await userAction.insertUser(req, res);
});
router.post("/auth", async (req, res) => {
  await Auth.authUser(req, res, jwt);
});
router.post("/auth/fb", async (req, res) => {
  await Auth.authFb(req, res, jwt);
});

router.post("/user", checkSecurity, (req, res) => {
  console.log("access granted");
});

module.exports = router;
