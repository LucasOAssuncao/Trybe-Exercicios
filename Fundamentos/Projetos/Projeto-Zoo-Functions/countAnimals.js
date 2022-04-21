const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const objetoretornado = {};
    species.forEach(({ name, residents }) => { objetoretornado[name] = residents.length; });
    return objetoretornado;
  }
  const objtoAnimalCerto = species.find(
    (animalObjeto) => animalObjeto.name === animal.specie,
  );
  if (!animal.sex) {
    return objtoAnimalCerto.residents.length;
  }
  let total = 0;
  objtoAnimalCerto.residents.forEach((elemento) => {
    if (elemento.sex === animal.sex) {
      total += 1;
    }
  });
  return total;
}
module.exports = countAnimals;
