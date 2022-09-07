const joi = require('joi');

const idSchema = joi.number().integer().min(1).required();

const validateCar = joi.object({
  model: joi.string().min(3).required(),
  color: joi.string().min(2).required(),
  licensePlate: joi.string().length(7).required(),
});

const validateDriver = joi.object({
  name: joi.string().min(3).required(),
  carIds: joi.array().items(idSchema) });

module.exports = {
    validateCar,
    validateDriver,
};