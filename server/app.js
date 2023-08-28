const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "../client/dist")));
const PORT = process.env.PORT || 3002;

app.use(require("./route/router"));
app.use(require("./route/filesRouter"));
app.use(require("./route/withToken"));

app.listen(PORT, () => {
  console.log(`Server Status: running port:  http://localhost:${PORT}`);
  require("./db/conn");
});

// app.get("*", (req, res) => {
//   res
//     .sendStatus(200)
//     .sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
// });
