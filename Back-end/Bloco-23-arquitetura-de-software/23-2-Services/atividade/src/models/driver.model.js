const camelize = require('camelize');
const connection = require('../connection');

const findDrivers = async () => {
    const [result] = await connection.execute(
      'SELECT * FROM drivers',
    );
    console.log(result);
    return camelize(result);
};

const findById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM cars WHERE id = (?)',
    [id],
    );

 return result;
};

const insert = async (newPerson) => {
  const [{ id }] = await connection.execute(
    'INSERT INTO drivers (name) VALUE (?)',
    [newPerson.name],
  );
  return id;
};

module.exports = {
  findDrivers,
  findById,
  insert,
};