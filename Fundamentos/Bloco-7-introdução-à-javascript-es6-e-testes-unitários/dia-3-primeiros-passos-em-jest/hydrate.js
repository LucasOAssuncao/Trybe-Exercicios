function hydrate(string) {
  // seu código aqui
  let soma = 0;
  for (i of string.match(/(\d+)/g)) {
    soma += parseInt(i);
  }

  if (soma > 1) {
    return soma + " copos de água";
  } else {
    return soma + " copo de água";
  }
  return soma;
}
console.log(hydrate("2 shots de tequila, 2 cervejas e 1 corote"));

module.exports = hydrate;
