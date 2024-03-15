
const { createError } = require('../../helpers')


const uploadFile = async (req, res) => {
  
  if (!req.files || req.files.length === 0) {
      throw createError(400, 'No files were uploaded');
  }
  res.json( { message: 'Files uploaded successfully'});
};

module.exports = uploadFile;
