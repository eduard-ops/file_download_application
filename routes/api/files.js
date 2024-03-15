const express = require("express");

const router = express.Router();

const { auth, ctrlWrapper, upload } = require("../../middlewares");

// const {
//   joiSubscriptionSchema,
//   joiSchemaVerifyEmail,
// } = require("../../models/user");

const { files: ctrl } = require("../../controllers");


router.patch(
  "/",
  auth,
  upload.array('files'),
  ctrlWrapper(ctrl.uploadFile )
);

module.exports = router;
