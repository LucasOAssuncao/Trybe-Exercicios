const data = require('../data/zoo_data');

const semParametro = () => {
  const objeto = {
    NE: data.species
      .filter((objeto0) => objeto0.location === 'NE')
      .map((objetoAnimal) => objetoAnimal.name),
    NW: data.species
      .filter((objeto1) => objeto1.location === 'NW')
      .map((objetoAnimal) => objetoAnimal.name),
    SE: data.species
      .filter((objeto2) => objeto2.location === 'SE')
      .map((objetoAnimal) => objetoAnimal.name),
    SW: data.species
      .filter((objeto3) => objeto3.location === 'SW')
      .map((objetoAnimal) => objetoAnimal.name),
  };
  return objeto;
};
const comParametro = (genero, especie) =>
  especie.residents.reduce((acc, animal) => {
    if (genero.sex === animal.sex) {
      acc.push(animal.name);
    }
    if (genero.sex === undefined) {
      acc.push(animal.name);
    }
    return acc;
  }, []);


function getAnimalMap(
  options = { includeNames: false, sorted: false, sex: false },
) {
  const animais = data.species.reduce(
    (acc, animal) => {
      if (options.includeNames === true) {
        const arrayDeAnimais = comParametro(options, animal);
        if (options.sorted === true) {
          arrayDeAnimais.sort();
        }
        acc[animal.location].push({ [animal.name]: arrayDeAnimais });
      } else {
        return semParametro();
      }
      return acc;
    },
    { NE: [], NW: [], SE: [], SW: [] },
  );
  return animais;
}

console.log(getAnimalMap({ includeNames: true }));
module.exports = getAnimalMap;
