const validateNewCar = require('./validations/validationsInputValues');
const carModel = require('../models/car.model');

const postCar = async (model, color, licensePlate) => {
    const error = validateNewCar.verifyCar(model, color, licensePlate);
    if (error.type) return error;

    const newCar = await carModel.insert({ model, color, licensePlate });
    return { type: null, message: newCar };
};

module.exports = {
    postCar,
};