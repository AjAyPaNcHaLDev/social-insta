// single file upload
const multer = require("multer");
const fs = require("fs");

module.exports = uploadImage = multer({
  storage: multer.diskStorage({
    destination: async (req, file, callback) => {
      if (!fs.existsSync("uploads/images")) {
        fs.mkdirSync("uploads/images");
      }
      await callback(null, "uploads/images");
    },
    filename: async (req, file, callback) => {
      if (!fs.existsSync("uploads/images")) {
        fs.mkdirSync("uploads/images");
      }
      await callback(null, Date.now() + "-" + file.originalname);
    },
  }),
});
