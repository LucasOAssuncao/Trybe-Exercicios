const driverModel = require('../models/driver.model');
const carModel = require('../models/car.model');
const driverCarModel = require('../models/driver_car.model');

const { validateNewDriver } = require('./validations/validations-exercises');

const getDrivers = async () => {
    const drivers = await driverModel.findDrivers();
    return { type: null, message: drivers };
};

const createDriver = async (name, carIds) => {
    const error = await validateNewDriver(name, carIds);
    if (error.type) return error;

    const driverId = await driverModel.insert({ name });
    
    const newDriver = await driverModel.findById(driverId);
   
    if (carIds && carIds.length > 0) {
      await Promise.all(carIds.map(
        async (carId) => driverCarModel.insert({ driverId: newDriver.id, carId }),
      ));
      newDriver.cars = await Promise.all(
        carIds.map(async (carId) => carModel.findById(carId)),
      );
    } else {
      newDriver.cars = [];
    }
    
    return { type: null, message: newDriver };
  };

module.exports = {
    getDrivers,
    createDriver,
};