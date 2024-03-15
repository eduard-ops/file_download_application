
const { createError } = require('../../helpers')


const uploadFile = async (req, res, next) => {
  try {
    if (!req.files || req.files.length === 0) {
      throw createError(400, 'No files were uploaded');
  }
  res.json( { message: 'Files uploaded successfully'});
  } catch (error) {
    next(error)
  }
};

module.exports = uploadFile;
