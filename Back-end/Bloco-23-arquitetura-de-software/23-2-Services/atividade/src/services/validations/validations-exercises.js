const { validateCar, validateDriver } = require('./schems');
const carModel = require('../../models/car.model');

const verifyCar = (model, color, licensePlate) => {
    const { error } = validateCar.validate({ model, color, licensePlate });

    if (error) return { type: 'INVALID_VALUE', message: error.message };
    return { type: null, message: '' };
};

const validateNewDriver = async (name, carIds) => {
    const { error } = validateDriver
      .validate({ name, carIds });
    if (error) return { type: 'INVALID_VALUE', message: error.message };
  
    if (carIds) {
      const cars = await Promise.all(
        carIds.map(async (carId) => carModel.findById(carId)),
      );
  
      const someCarIsMissing = cars.some((car) => car === undefined);
      if (someCarIsMissing) return { type: 'CAR_NOT_FOUND', message: 'Some car is not found' };
    }
  
    return { type: null, message: '' };
  };

module.exports = {
    verifyCar,
    validateNewDriver,
};