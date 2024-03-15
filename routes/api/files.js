const express = require("express");

const router = express.Router();

const { auth, ctrlWrapper, upload } = require("../../middlewares");

const { files: ctrl } = require("../../controllers");


router.post(
  "/",
  auth,
  upload.array('files'),
  ctrlWrapper(ctrl.uploadFile )
);

module.exports = router;
