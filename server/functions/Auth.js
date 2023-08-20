const user = require("../db/model/user.model");
const userAction = require("./User");
const Const = require("../const");
const jwt = require("jsonwebtoken");
const authUser = async (req, res) => {
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
              status: Const.Authorized,
              token,
              name,
              username,
              email,
              _id,
              error: err,
            });
          }
        );

        return;
      }
      res.send({
        status: Const.Unauthorized,
        error: true,
        msg: "Not Registerd",
      });
      return;
    })
    .catch(async (error) => {
      res.send({
        status: Const.Unauthorized,
        error,
        msg: "Something Went Wrong.",
      });
    });
};
const authFb = async (req, res) => {
  /*step 1 first check user already register or not.
   * step 2 if already register  redirect to login .
   * step 3 if not registered registred first then redirect to login.
   * const { username, password } = req.body;
   *step 0 gatting responce */
  const { name, email = null, userID, status = null } = req.body;

  if (status == "unknown") {
    res.send({
      status: Const.Unauthorized,
      error: true,
      msg: "Something Went Wrong.",
    });
    return;
  }
  /* step1*/
  await user
    .findOne({ fbUserID: userID })
    .then(async (__res) => {
      if (__res == null) {
        /*   register the new user hare.
         gating new username */

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
                  status: Const.Authorized,
                  token,
                  name,
                  username,
                  email,
                  _id,
                });
              }
            );
          })
          .catch((error) => {
            res.send({ error, msg: "Something Went Wrong." });
          });
      } else {
        const { name, email, username, fbUserID, _id } = __res;
        jwt.sign(
          { name, email, username, fbUserID, _id },
          Const.jwtKey,
          { expiresIn: `${1000 * 1000 * 2}s` },
          (err, token) => {
            res.send({
              status: Const.Authorized,
              token,
              name,
              username,
              email,
              _id,
            });
          }
        );
        return;
      }
    })
    .catch(async (error) => {
      res.send({
        status: Const.Unauthorized,
        error,
        msg: "Something went wrong.",
      });
    });
};
const Auth = {
  authUser,
  authFb,
};
module.exports = Auth;
