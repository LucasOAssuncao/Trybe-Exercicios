const connection = require('../connection');

const insert = async (driverCar) => {
    const [{ id }] = await connection.execute(
    'INSERT INTO drivers_cars (driver_id, car_id) VALUE (?, ?)',
    [driverCar.driverId, driverCar.carId], 
    );
  
    return id;
  };

module.exports = {
  insert,
};