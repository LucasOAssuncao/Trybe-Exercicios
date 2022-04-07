// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}


// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}
// Desafio 4
function concatName(array) {
  // seu código aqui
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontos = wins * 3 + ties;
  return pontos;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let numeroMaior = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] >= numeroMaior) {
      numeroMaior = array[i];
    }
  }
  let numeroRepetido = 0;
  for (let o = 0; o < array.length; o += 1) {
    if (array[o] === numeroMaior) {
      numeroRepetido++;
    }
  }
  return numeroRepetido;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let arrayNova = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      arrayNova.push('fizzBuzz');
    } else if (array[i] % 5 === 0) {
      arrayNova.push('buzz');
    } else if (array[i] % 3 === 0) {
      arrayNova.push('fizz');
    } else {
      arrayNova.push('bug!');
    }
  }
  return arrayNova;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === 'a') {
      string = string.replace('a', '1');
    } else if (string[i] === 'e') {
      string = string.replace('e', '2');
    } else if (string[i] === 'i') {
      string = string.replace('i', '3');
    } else if (string[i] === 'o') {
      string = string.replace('o', '4');
    } else if (string[i] === 'u') {
      string = string.replace('u', '5');
    }
  }
  return string;
}

function decode(string) {
  // seu código aqui
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '1') {
      string = string.replace('1', 'a');
    } else if (string[i] === '2') {
      string = string.replace('2', 'e');
    } else if (string[i] === '3') {
      string = string.replace('3', 'i');
    } else if (string[i] === '4') {
      string = string.replace('4', 'o');
    } else if (string[i] === '5') {
      string = string.replace('5', 'u');
    }
  }
  return string;
}

// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let novaLista = [];
  if (tech.length === 0) {
    return 'Vazio!';
  }
  tech.sort();
  for (let i in tech) {
    novaLista.push({ tech: tech[i], name: name });
  }
  return novaLista;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
