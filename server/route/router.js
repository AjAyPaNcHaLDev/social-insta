const express = require("express");
const router = express.Router();
const userAction = require("../functions/User");
const Auth = require("../functions/Auth");

router.post("/insert/user", async (req, res) => {
  await userAction.insertUser(req, res);
});
router.post("/auth", async (req, res) => {
  await Auth.authUser(req, res);
});
router.post("/auth/fb", async (req, res) => {
  await Auth.authFb(req, res);
});

module.exports = router;
