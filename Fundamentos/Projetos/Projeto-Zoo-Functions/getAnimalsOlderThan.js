const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const objetoAnimal = species.filter((especie) => especie.name.includes(animal));
  return objetoAnimal[0].residents.every((objeto) => objeto.age > age);
}

module.exports = getAnimalsOlderThan;
