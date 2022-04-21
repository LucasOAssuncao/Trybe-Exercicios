const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  //  return entrants.filter(({name, age}) => age < 18)
  const totalAdultos = entrants.filter(
    (pessoa) => pessoa.age >= 18 && pessoa.age < 50,
  ).length;
  const totalCrianças = entrants.filter((pessoa) => pessoa.age < 18).length;
  const totalIdosos = entrants.filter((pessoa) => pessoa.age >= 50).length;
  return { adult: totalAdultos, child: totalCrianças, senior: totalIdosos };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const preços = prices;

  const totalAdultos = countEntrants(entrants).adult * preços.adult;
  const totalCrianças = countEntrants(entrants).child * preços.child;
  const totalIdosos = countEntrants(entrants).senior * preços.senior;
  return totalIdosos + totalCrianças + totalAdultos;
}

console.log(calculateEntry([{ name: 'alex', age: 5 }]));
module.exports = { calculateEntry, countEntrants };
