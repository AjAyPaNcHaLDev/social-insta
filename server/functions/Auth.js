const user = require("../db/model/user.model");
const userAction = require("./User");
const Const = require("../const");
const authUser = async (req, res, jwt) => {
  console.log("authUser called");
  const { username, password } = req.body;
  let conditon = {
    $and: [
      {
        $or: [{ username }, { email: username }],
      },
      { password },
    ],
  };

  if (/^\d+$/.test(username)) {
    const phone = parseInt(username);
    conditon = {
      phone,
      password,
    };
  }

  await user
    .findOne(conditon)
    .then(async (success) => {
      console.log(success);

      if (success !== null) {
        const { name, username, email, _id } = success;
        jwt.sign(
          { name, username, email, _id },
          Const.jwtKey,
          { expiresIn: `${1000 * 1000 * 2}s` },
          (err, token) => {
            res.send({
              success: { token },
              msg: "Auth Success",
            });
          }
        );

        return;
      }
      res.send({
        error: {},
        msg: "Not Registerd",
      });
      return;
    })
    .catch(async (error) => {
      res.send({ error, msg: "Something Went Wrong." });
    });
};
const authFb = async (req, res, jwt) => {
  // step 1 first check user already register or not.
  // step 2 if already register  redirect to login .
  // step 3 if not registered registred first then redirect to login.
  // const { username, password } = req.body;
  // step 0 gatting responce
  const { name, email = null, userID, status = null } = req.body;

  if (status == "unknown") {
    res.send({ error: {}, msg: "Something Went Wrong." });
    return;
  }
  // step1

  await user
    .findOne({ fbUserID: userID })
    .then(async (__res) => {
      if (__res == null) {
        //   register the new user hare.
        // gating new username

        const username = userAction.assignUserName();
        let registerMe = {
          name,
          email,
          username,
          fbUserID: userID,
        };
        const usr = new user(registerMe);
        await usr
          .save()
          .then((success) => {
            const { name, email, username, fbUserID, _id } = success;
            jwt.sign(
              { name, email, username, fbUserID, _id },
              Const.jwtKey,
              { expiresIn: `${1000 * 1000 * 2}s` },
              (err, token) => {
                res.send({
                  success: { token },
                  msg: "Auth Success",
                });
              }
            );
          })
          .catch((error) => {
            res.send({ error, msg: "Something Went Wrong." });
          });
      } else {
        console.log(__res);
        const { name, email, username, fbUserID, _id } = __res;
        jwt.sign(
          { name, email, username, fbUserID, _id },
          Const.jwtKey,
          { expiresIn: `${1000 * 1000 * 2}s` },
          (err, token) => {
            res.send({
              success: { token },
              msg: "Auth Success",
            });
          }
        );
        // res.send({ success: __res, msg: "Already Registered." });
        return;
      }
    })
    .catch(async (error) => {
      res.send({ error, msg: "Something went worng." });
    });
};
const Auth = {
  authUser,
  authFb,
};
module.exports = Auth;
