// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  if (array.length != 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i in array) {
    let contador = 0;
    for (let o in array) {
      if (array[i] === array[o]) {
        contador++;
      }
    }
    if (array[i] < 0 || array[i] > 9 || contador >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return (
    '(' +
    array[0] +
    array[1] +
    ') ' +
    array[2] +
    array[3] +
    array[4] +
    array[5] +
    array[6] +
    '-' +
    array[7] +
    array[8] +
    array[9] +
    array[10]
  );
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (
    Math.abs(lineA - lineB) < lineA &&
    lineA < lineB + lineC &&
    Math.abs(lineA - lineC) < lineB &&
    lineB < lineA + lineC &&
    Math.abs(lineA - lineB) < lineC &&
    lineC < lineA + lineB
  ) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let soma = 0;
  for (i of string.match(/(\d+)/g)) {
    soma += parseInt(i);
  }

  if (soma > 1) {
    return soma + ' copos de água';
  } else {
    return soma + ' copo de água';
  }
  return soma;
}
console.log(hydrate('2 shots de tequila, 2 cervejas e 1 corote'));

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
