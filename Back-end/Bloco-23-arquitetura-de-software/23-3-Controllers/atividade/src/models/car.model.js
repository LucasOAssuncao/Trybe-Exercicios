const camelize = require('camelize');
const connection = require('./connection');

const insert = async (newCar) => {
  const [{ id }] = await connection.execute(
    'INSERT INTO cars (model, color, license_plate) VALUE (?, ?, ?})',
    [newCar.model, newCar.color, newCar.license_plate],
  );

  return id;
};

const findById = async (carId) => {
    const [[result]] = await connection.execute(
    'SELECT * FROM cars WHERE id = ?',
    [carId],
    );
  
   return camelize(result);
  };

module.exports = {
  insert,
  findById,
};
