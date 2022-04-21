const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const array = [...ids];
  return species.filter((especie) => array.includes(especie.id));
}
console.log(getSpeciesByIds());
module.exports = getSpeciesByIds;
