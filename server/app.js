const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const cluster = require("cluster");
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "../client/dist")));
const PORT = process.env.PORT || 3002;
app.get("*", (req, res) => {
  res
    .sendStatus(200)
    .sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
});
app.listen(PORT, () => {
  console.log(`Server Status: running port:  http://localhost:${PORT}`);
});

require("./db/conn");
app.use(require("./router"));

const myMiddleware = (req, res, next) => {
  console.log("please wait.");
  next();
  console.log("request completed.");
};
app.use(myMiddleware);
