const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const funcionario = data.employees.find((funcionarioObjeto) => funcionarioObjeto.id === id);
  const animals = data.species.find(
    (animal) => animal.id === funcionario.responsibleFor[0],
  );
  const animalOrdenado = animals.residents.sort((a, b) => b.age - a.age)[0];
  return [animalOrdenado.name, animalOrdenado.sex, animalOrdenado.age];
}
console.log(getOldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

module.exports = getOldestFromFirstSpecies;
