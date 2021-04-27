const { validationResult } = require('express-validator');
const AppError = require('../errors/appError');

const validResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new AppError('Validation Errors', 400, errors.errors);
  }
  next();
};

module.exports = {
  validResult,
};