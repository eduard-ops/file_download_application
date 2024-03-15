const { createError } = require("../helpers");

const auth = async (req, res, next) => {
  const authHeader = req.headers.auth;
  try {
    if (!authHeader || authHeader !== 'knock-knock') {
      throw createError(401);
    }
    
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = auth;
