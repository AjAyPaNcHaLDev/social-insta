const Const = require("../const");
const user = require("../db/model/user.model");
const jwt = require("jsonwebtoken");
const insertUser = async (req, res) => {
  console.log("insertUser called");
  const { name, username, contect, password } = req.body;
  let findMe = [{ email: contect }, { username }];
  let registerMe = {
    name,
    email: contect,
    username,
    password,
  };
  if (/^\d+$/.test(contect)) {
    const phone = parseInt(contect);
    findMe = [{ username }, { phone }];
    registerMe = {
      name,
      phone,
      username,
      password,
    };
  }

  await user
    .find({ $or: findMe })
    .then(async (__res) => {
      if (__res.length == 0) {
        const usr = new user(registerMe);
        await usr
          .save()
          .then((success) => {
            const { name, username, email, _id } = success;
            jwt.sign(
              { name, email, username, _id },
              Const.jwtKey,
              { expiresIn: `${1000 * 1000 * 2}s` },
              (err, token) => {
                res.send({
                  status: Const.Authorized,
                  name,
                  username,
                  email,
                  _id,
                  token,
                  error: false,
                  msg: "Register Sucessfull.",
                });
              }
            );
          })
          .catch((error) => {
            res.send({
              error,
              status: Const.Unauthorized,
              msg: "Something went worng.",
            });
          });
      } else {
        res.send({
          status: Const.Unauthorized,
          error: true,
          msg: "Already register Details",
        });
      }
    })
    .catch((error) => {
      res.send({
        error,
        status: Const.Unauthorized,
        msg: "Something went worng.",
      });
    });
};
const updateUser = async () => {
  console.log("updateUser called");
};

const assignUserName = (str = null) => {
  if (str == null) {
    try {
      str = "social_insta" + Date.now() + Math.ceil(Math.random(4) * 100);
    } catch (e) {
      console.log(e);
    }
  }
  return str;
};
const userAction = {
  insertUser,
  updateUser,
  assignUserName,
};
module.exports = userAction;

// const name = "Âjäy"; // Example name with non-standard characters
// const normalized = name.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Normalize and remove accents
// const defaultUsername = normalized.replace(/\s+/g, ''); // Remove spaces
// console.log(defaultUsername);
