const jwt = require("jsonwebtoken");
const Const = require("../const");
module.exports = authorization = (req, res, next) => {
  console.log("tk");
  try {
    const user = jwt.verify(req.headers["authorization"], Const.jwtKey);
    if (user) {
      return next();
    }
    return res.sendStatus(Const.Unauthorized).json({
      status: Const.Unauthorized,
      msg: "Please login first. ",
      error: true,
    });
  } catch (e) {
    return res.sendStatus(Const.Unauthorized).json({
      status: Const.Unauthorized,
      msg: "Something Went wrong. ",
      error: e,
    });
  }
};
