const multer = require("multer");

const path = require("path");

const tempDir = path.join(__dirname, "../", "uploads");


const multerConfig = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, tempDir);
},
 filename: function (req, file, cb) {
    cb(null, file.originalname);
}
});

const upload = multer({
  storage: multerConfig,
});

module.exports = upload;
